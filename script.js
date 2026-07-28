(function() {
      if (typeof firebase === 'undefined') {
        document.getElementById('loginError').textContent = 'Firebase SDK not loaded.';
        document.getElementById('loginError').style.display = 'block';
        return;
      }

      const firebaseConfig = {
        apiKey: "AIzaSyCuuUwd7TINIAwlLxg-OYjo7Q-1cBsbU5I",
        authDomain: "codeshalatest.firebaseapp.com",
        projectId: "codeshalatest",
        storageBucket: "codeshalatest.firebasestorage.app",
        messagingSenderId: "63047132068",
        appId: "1:63047132068:web:b5eb1269a25ea412ed5731"
      };

      try { firebase.initializeApp(firebaseConfig); } catch(e) {
        document.getElementById('loginError').textContent = 'Firebase init failed: ' + e.message;
        document.getElementById('loginError').style.display = 'block';
        return;
      }
      const auth = firebase.auth();

      // ---------- DOM ----------
      const loginContainer = document.getElementById('loginContainer');
      const appIDE = document.getElementById('app');
      const video = document.getElementById('bgVideo');
      const soundBtn = document.getElementById('soundPermissionBtn');
      const formsContainer = document.getElementById('formsContainer');
      const loginForm = document.getElementById('loginForm');
      const loginEmail = document.getElementById('loginEmail');
      const loginPassword = document.getElementById('loginPassword');
      const loginError = document.getElementById('loginError');
      const loginSuccess = document.getElementById('loginSuccess');
      const loginBtn = document.getElementById('loginBtn');
      const rememberCheck = document.getElementById('remember');
      const registerForm = document.getElementById('registerForm');
      const regName = document.getElementById('regName');
      const regEmail = document.getElementById('regEmail');
      const regPassword = document.getElementById('regPassword');
      const registerError = document.getElementById('registerError');
      const registerSuccess = document.getElementById('registerSuccess');
      const registerBtn = document.getElementById('registerBtn');

      const desktopPreview = document.getElementById('desktopPreview');
      const previewFrame = document.getElementById('previewFrame');
      const consolePanel = document.getElementById('consolePanel');
      const mobileOverlay = document.getElementById('mobilePreviewOverlay');
      const mobilePreviewFrame = document.getElementById('mobilePreviewFrame');
      const mobileConsolePanel = document.getElementById('mobileConsolePanel');

      const editorWrapper = document.getElementById('editorWrapper');
      const fallbackEditor = document.getElementById('fallbackEditor');
      const fileList = document.getElementById('fileList');
      const tabsBar = document.getElementById('tabsBar');
      const newFileModal = document.getElementById('newFileModal');
      const folderModal = document.getElementById('folderModal');

      // ---------- State ----------
      let monacoLoaded = false;
      let monacoEditors = {};
      let currentTabId = null;
      let files = {};
      let fileOrder = [];
      let autoSaveTimer;
      let consoleVisible = false, mobileConsoleVisible = false;
      let isMobile = window.innerWidth <= 768;
      let previousRun = null;
      let currentTheme = 'vs-dark';

      const defaultFiles = {
        'index.html': {
          name: 'index.html', lang: 'html',
          content: '<!DOCTYPE html>\n<html>\n<head>\n  <title>CodeShala</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <div class="container">\n    <h1>Neumorphic IDE</h1>\n    <button onclick="showMessage()">Click</button>\n  </div>\n  <script src="script.js"><\/script>\n</body>\n</html>'
        },
        'style.css': {
          name: 'style.css', lang: 'css',
          content: '*{margin:0;padding:0}body{font-family:system-ui;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#1a1a1e;color:#fff}.container{text-align:center;padding:40px;background:#242428;border-radius:24px;box-shadow:6px 6px 12px #111114,-6px -6px 12px #35353a}button{background:#00e676;border:none;padding:12px 24px;border-radius:12px;font-weight:600}'
        },
        'script.js': {
          name: 'script.js', lang: 'javascript',
          content: 'function showMessage(){alert("Hello!")}'
        }
      };

      const HTML_TAGS = ['div','p','span','a','button','h1','h2','h3','section','article','header','footer','main','nav','ul','li','ol','table','tr','td','th','input','form','label','img','video','audio','iframe','canvas'];

      // Helpers
      function showLoginError(msg) { loginError.textContent=msg; loginError.style.display='block'; loginSuccess.style.display='none'; }
      function showLoginSuccess(msg) { loginSuccess.textContent=msg; loginSuccess.style.display='block'; loginError.style.display='none'; }
      function showRegisterError(msg) { registerError.textContent=msg; registerError.style.display='block'; registerSuccess.style.display='none'; }
      function showRegisterSuccess(msg) { registerSuccess.textContent=msg; registerSuccess.style.display='block'; registerError.style.display='none'; }
      function setLoading(btn, loading) { btn.disabled=loading; btn.textContent=loading?'⏳ Processing...':(btn===loginBtn?'Sign In':'Create Account'); }
      function checkMobile() {
        isMobile = window.innerWidth <= 768;
        if (isMobile) { desktopPreview.style.display = 'none'; } else { desktopPreview.style.display = 'flex'; mobileOverlay.classList.remove('active'); }
        if (monacoLoaded) { Object.values(monacoEditors).forEach(e => e.updateOptions({ fontSize: isMobile?14:15, minimap:{enabled:!isMobile} })); }
      }

      // Auth
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email=loginEmail.value.trim(), password=loginPassword.value.trim();
        if(!email||!password) return showLoginError('Enter email and password');
        if(!email.includes('@')||!email.includes('.')) return showLoginError('Invalid email');
        if(password.length<6) return showLoginError('Password min 6 chars');
        setLoading(loginBtn,true);
        try {
          await auth.signInWithEmailAndPassword(email,password);
          showLoginSuccess('✅ Login successful!');
          if(rememberCheck.checked) localStorage.setItem('rememberEmail',email);
          else localStorage.removeItem('rememberEmail');
        } catch(err) {
          const map={'auth/user-not-found':'No account found','auth/wrong-password':'Incorrect password','auth/invalid-credential':'Invalid credentials','auth/too-many-requests':'Too many attempts','auth/operation-not-allowed':'Enable Email/Password in Firebase Console'};
          showLoginError('❌ '+(map[err.code]||err.message));
        } finally { setLoading(loginBtn,false); }
      });

      registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name=regName.value.trim(), email=regEmail.value.trim(), password=regPassword.value.trim();
        if(!name||!email||!password) return showRegisterError('All fields required');
        if(name.length<2) return showRegisterError('Name too short');
        if(!email.includes('@')||!email.includes('.')) return showRegisterError('Invalid email');
        if(password.length<6) return showRegisterError('Password min 6 chars');
        setLoading(registerBtn,true);
        try {
          const cred=await auth.createUserWithEmailAndPassword(email,password);
          await cred.user.updateProfile({displayName:name});
          showRegisterSuccess('✅ Account created! Switching to login...');
          setTimeout(()=>{formsContainer.classList.remove('register-active');loginEmail.value=email;loginPassword.value='';showLoginSuccess('Registration successful. Please sign in.')},2000);
        } catch(err) {
          const map={'auth/email-already-in-use':'Email already registered','auth/weak-password':'Password too weak','auth/operation-not-allowed':'Enable Email/Password in Firebase Console'};
          showRegisterError('❌ '+(map[err.code]||err.message));
        } finally { setLoading(registerBtn,false); }
      });

      document.getElementById('forgotPassword').addEventListener('click',async(e)=>{e.preventDefault();const email=loginEmail.value.trim();if(!email)return showLoginError('Enter your email');setLoading(loginBtn,true);try{await auth.sendPasswordResetEmail(email);showLoginSuccess('✅ Reset email sent!')}catch(err){showLoginError('❌ '+(err.code==='auth/user-not-found'?'Email not found':err.message))}finally{setLoading(loginBtn,false)}});
      document.getElementById('toggleLoginPassword').onclick=function(){loginPassword.type=loginPassword.type==='password'?'text':'password';this.className=loginPassword.type==='password'?'ri-eye-off-line login__eye':'ri-eye-line login__eye'};
      document.getElementById('toggleRegPassword').onclick=function(){regPassword.type=regPassword.type==='password'?'text':'password';this.className=regPassword.type==='password'?'ri-eye-off-line login__eye':'ri-eye-line login__eye'};
      document.getElementById('show-register').onclick=e=>{e.preventDefault();formsContainer.classList.add('register-active');loginError.style.display=loginSuccess.style.display='none'};
      document.getElementById('show-login').onclick=e=>{e.preventDefault();formsContainer.classList.remove('register-active');registerError.style.display=registerSuccess.style.display='none'};
      soundBtn.onclick=()=>{video.muted=false;video.play().then(()=>soundBtn.classList.add('hidden')).catch(()=>{})};

      auth.onAuthStateChanged(user => {
        if(user){
          loginContainer.classList.add('hidden');appIDE.classList.add('active');
          video.muted=true;soundBtn.classList.add('hidden');
          if(localStorage.getItem('rememberEmail')){loginEmail.value=localStorage.getItem('rememberEmail');rememberCheck.checked=true}
          initMonaco();
        } else {
          loginContainer.classList.remove('hidden');appIDE.classList.remove('active');
        }
      });

      document.getElementById('logoutBtn').onclick=()=>auth.signOut();

      // File Management
      function loadFiles(){
        const saved=localStorage.getItem('codeshala_neumorph_v3');
        if(saved){try{const data=JSON.parse(saved);files=data.files;fileOrder=data.order;if(Object.keys(files).length===0)throw new Error('empty');return}catch(e){}}
        files=JSON.parse(JSON.stringify(defaultFiles));fileOrder=Object.keys(files);saveFiles();
      }
      function saveFiles(){localStorage.setItem('codeshala_neumorph_v3',JSON.stringify({files,order:fileOrder}))}
      function getContent(name){return files[name]?.content||''}
      function setContent(name,c){if(files[name]){files[name].content=c;saveFiles()}}
      function getLang(name){return files[name]?.lang||'html'}
      function getIcon(name){const ext=name.split('.').pop();const icons={html:'ri-html5-fill',css:'ri-css3-fill',js:'ri-javascript-fill',json:'ri-database-2-line',md:'ri-markdown-line'};return icons[ext]||'ri-file-line'}

      function renderFileList(){
        fileList.innerHTML='';
        fileOrder.forEach(name=>{if(!files[name])return;const div=document.createElement('div');div.className='file-item'+(currentTabId===name?' active':'');div.innerHTML=`<span><i class="${getIcon(name)}" style="margin-right:6px;"></i>${name}</span><span class="file-actions"><button class="btn" data-action="rename" data-file="${name}"><i class="ri-pencil-line"></i></button><button class="btn" data-action="delete" data-file="${name}"><i class="ri-close-line"></i></button></span>`;div.onclick=()=>openFile(name);fileList.appendChild(div)});
      }
      function renderTabs(){
        tabsBar.innerHTML='';
        fileOrder.forEach(name=>{if(!files[name])return;const tab=document.createElement('div');tab.className='tab'+(currentTabId===name?' active':'');tab.innerHTML=`<i class="${getIcon(name)} file-icon"></i><span>${name}</span><span class="close-tab" data-file="${name}">×</span>`;tab.onclick=e=>{if(!e.target.classList.contains('close-tab'))openFile(name)};tab.querySelector('.close-tab').onclick=e=>{e.stopPropagation();closeFile(name)};tabsBar.appendChild(tab)});
        updateStatus();
      }

      function getMonacoOptions(name){
        const lang=getLang(name);
        return {
          value:getContent(name),language:lang==='javascript'?'javascript':lang,theme:currentTheme,
          automaticLayout:true,fontSize:isMobile?14:15,minimap:{enabled:!isMobile},
          wordWrap:'on',tabSize:2,suggestOnTriggerCharacters:true,quickSuggestions:{other:true,comments:false,strings:false},
          tabCompletion:'on',acceptSuggestionOnEnter:'on',autoClosingBrackets:'always',autoClosingQuotes:'always',
          autoIndent:'full',matchBrackets:'always',autoClosingOvertype:'always',hover:{enabled:true},
          autoClosingTags:lang==='html',padding:{top:10}
        };
      }

      function addEmmetExpansion(editor,fileName){
        if(getLang(fileName)!=='html')return;
        editor.addAction({
          id:'emmet-expand-tag',label:'Expand HTML tag on Enter',keybindings:[monaco.KeyCode.Enter],
          precondition:'editorTextFocus && !suggestWidgetVisible && !markersNavigationVisible',
          run:function(ed){
            const model=ed.getModel();const pos=ed.getPosition();
            const lineContent=model.getLineContent(pos.lineNumber);
            const textBeforeCursor=lineContent.substring(0,pos.column-1);
            const match=textBeforeCursor.match(/([a-zA-Z][a-zA-Z0-9]*)$/);
            if(match&&HTML_TAGS.includes(match[0].toLowerCase())){
              const word=match[0].toLowerCase();const startIdx=pos.column-1-word.length;
              const range=new monaco.Range(pos.lineNumber,startIdx+1,pos.lineNumber,pos.column);
              ed.executeEdits('emmet',[{range,text:`<${word}></${word}>`,forceMoveMarkers:true}]);
              ed.setPosition(new monaco.Position(pos.lineNumber,startIdx+word.length+2));
            } else ed.trigger('keyboard','type',{text:'\n'});
          }
        });
      }

      function openFile(name){
        if(!files[name])return;currentTabId=name;
        if(monacoLoaded){
          if(!monacoEditors[name]){
            const editor=monaco.editor.create(editorWrapper,getMonacoOptions(name));
            monacoEditors[name]=editor;
            editor.onDidChangeModelContent(()=>{setContent(name,editor.getValue());updateStatus();autoSave()});
            addEmmetExpansion(editor,name);
          }
          Object.values(monacoEditors).forEach(e=>{if(e.getDomNode)e.getDomNode().style.display='none'});
          const cur=monacoEditors[name];cur.getDomNode().style.display='';cur.layout();
          monaco.editor.setModelLanguage(cur.getModel(),getLang(name)==='javascript'?'javascript':getLang(name));
          cur.updateOptions({fontSize:isMobile?14:15});
        } else {
          fallbackEditor.style.display='block';fallbackEditor.value=getContent(name);
        }
        document.getElementById('fileLang').textContent=files[name].lang.toUpperCase();
        renderFileList();renderTabs();
      }

      function closeFile(name){
        if(fileOrder.length<=1){addConsole('Cannot close last file','warn');return}
        const idx=fileOrder.indexOf(name);fileOrder.splice(idx,1);delete files[name];
        if(monacoEditors[name]){monacoEditors[name].dispose();delete monacoEditors[name]}
        saveFiles();currentTabId=fileOrder[Math.min(idx,fileOrder.length-1)];openFile(currentTabId);
      }

      function createFile(name,lang){
        if(!name){alert('Please enter a file name');return false;}
        if(files[name]){addConsole('File already exists','warn');return false;}
        const extMap={html:'html',css:'css',javascript:'js',json:'json',markdown:'md'};
        if(!name.includes('.')) name+='.'+(extMap[lang]||'txt');
        const templates={html:'<!DOCTYPE html>\n<html>\n<head>\n  <title>New Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>',css:'/* New Stylesheet */\n',javascript:'// New JavaScript\n',json:'{\n  "key": "value"\n}',markdown:'# New Document\n\nContent here...'};
        files[name]={name,lang,content:templates[lang]||''};
        fileOrder.push(name);saveFiles();renderFileList();renderTabs();openFile(name);
        addConsole('Created '+name,'log');
        return true;
      }

      function autoSave(){clearTimeout(autoSaveTimer);autoSaveTimer=setTimeout(saveFiles,2000)}

      function addConsole(msg,type){
        const el=document.createElement('div');el.className='log-entry log-'+(type||'log');
        el.textContent='['+new Date().toLocaleTimeString()+'] '+msg;
        const target=(isMobile&&mobileOverlay.classList.contains('active'))?mobileConsolePanel:consolePanel;
        target.appendChild(el);if(target.children.length>50)target.removeChild(target.firstChild);
        target.scrollTop=target.scrollHeight;
        if(!target.classList.contains('visible'))target.classList.add('visible');
      }

      function updateStatus(){
        if(!currentTabId||!files[currentTabId])return;
        const content=getContent(currentTabId);
        document.getElementById('wordCount').textContent=content.trim()?content.trim().split(/\s+/).length:0;
        document.getElementById('fileSize').textContent=(new Blob([content]).size/1024).toFixed(1)+' KB';
        if(monacoLoaded&&monacoEditors[currentTabId]){try{const pos=monacoEditors[currentTabId].getPosition();document.getElementById('cursorPos').textContent=`Ln ${pos.lineNumber}, Col ${pos.column}`}catch(e){}}
      }

      // Run
      function runCurrentFile(){
        if(!currentTabId)return;const name=currentTabId,lang=getLang(name),content=getContent(name);addConsole('Running '+name,'log');
        const targetFrame=isMobile?mobilePreviewFrame:previewFrame;
        if(lang==='html'){
          let html=content;let css='',js='';fileOrder.forEach(f=>{if(f.endsWith('.css'))css+=getContent(f)+'\n';if(f.endsWith('.js'))js+=getContent(f)+'\n'});
          if(css)html=html.replace('</head>','<style>\n'+css+'</style>\n</head>');if(js)html=html.replace('</body>','<script>\n'+js+'\n<\/script>\n</body>');
          targetFrame.src=URL.createObjectURL(new Blob([html],{type:'text/html'}));
        } else if(lang==='css'){/* same as before, shorten */} else if(lang==='javascript'){/* same */} else {/* same */}
        previousRun={type:lang,file:name};
        if(isMobile){mobileOverlay.classList.add('active');if(!mobileConsolePanel.classList.contains('visible'))mobileConsolePanel.classList.add('visible')}
      }

      function runAllFiles(){
        let htmlFile=fileOrder.find(f=>f.endsWith('.html'));if(!htmlFile){runCurrentFile();return}
        let html=getContent(htmlFile);let css='',js='';fileOrder.forEach(f=>{if(f.endsWith('.css'))css+=getContent(f)+'\n';if(f.endsWith('.js'))js+=getContent(f)+'\n'});
        if(css)html=html.replace('</head>','<style>\n'+css+'</style>\n</head>');if(js)html=html.replace('</body>','<script>\n'+js+'\n<\/script>\n</body>');
        const targetFrame=isMobile?mobilePreviewFrame:previewFrame;
        targetFrame.src=URL.createObjectURL(new Blob([html],{type:'text/html'}));
        addConsole('Combined all files','log');previousRun={type:'all',file:htmlFile};
        if(isMobile){mobileOverlay.classList.add('active');if(!mobileConsolePanel.classList.contains('visible'))mobileConsolePanel.classList.add('visible')}
      }

      // Monaco
      function initMonaco(){
        if(typeof require==='undefined'){useFallback();return}
        require.config({paths:{vs:'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs'}});
        require(['vs/editor/editor.main'],function(){
          monacoLoaded=true;
          monaco.editor.defineTheme('codeshalaDark',{base:'vs-dark',inherit:true,rules:[],colors:{'editor.background':'#1e1e1e'}});
          monaco.languages.html.htmlDefaults.setOptions({suggest:{html5:true}});
          loadFiles();if(fileOrder.length===0){files=JSON.parse(JSON.stringify(defaultFiles));fileOrder=Object.keys(files);saveFiles()}
          openFile(fileOrder[0]);runAllFiles();
          window.addEventListener('resize',checkMobile);
        },()=>useFallback());
      }

      function useFallback(){monacoLoaded=false;loadFiles();fallbackEditor.style.display='block';fallbackEditor.value=getContent(fileOrder[0]);fallbackEditor.oninput=()=>{if(currentTabId){setContent(currentTabId,fallbackEditor.value);autoSave();updateStatus()}};openFile(fileOrder[0]);runAllFiles()}

      // Event bindings
      document.getElementById('runBtn').onclick=runAllFiles;
      document.getElementById('runCurrentBtn').onclick=runCurrentFile;
      document.getElementById('refreshPreview').onclick=()=>previousRun?.type==='all'?runAllFiles():runCurrentFile();
      document.getElementById('openNewTab').onclick=()=>window.open((isMobile?mobilePreviewFrame:previewFrame).src,'_blank');
      document.getElementById('toggleConsole').onclick=()=>{consoleVisible=!consoleVisible;consolePanel.classList.toggle('visible',consoleVisible)};
      document.getElementById('previewSize').onchange=function(){previewFrame.style.width=this.value;if(isMobile)mobilePreviewFrame.style.width=this.value};

      document.getElementById('themeToggle').onclick=()=>{
        document.body.classList.toggle('light-mode');
        const isLight=document.body.classList.contains('light-mode');
        currentTheme=isLight?'vs':'vs-dark';
        if(monacoLoaded) monaco.editor.getEditors().forEach(e=>monaco.editor.setTheme(currentTheme));
        addConsole('Theme: '+(isLight?'Light':'Dark'),'log');
      };

      // New file modal
      document.getElementById('newFileBtn').onclick=()=>{newFileModal.style.display='block';};
      document.getElementById('addFileBtn').onclick=()=>{newFileModal.style.display='block';};
      document.getElementById('closeNewFile').onclick=()=>{newFileModal.style.display='none';};
      document.getElementById('confirmNewFile').onclick=()=>{
        const name=document.getElementById('newFileName').value.trim();
        const lang=document.getElementById('newFileLang').value;
        if(createFile(name,lang)){
          newFileModal.style.display='none';
          document.getElementById('newFileName').value='';
        }
      };

      // Save to device modal
      document.getElementById('saveFileBtn').onclick=()=>{saveFiles();addConsole('Saved','log')};
      document.getElementById('saveLocalBtn').onclick=()=>{folderModal.style.display='block'};
      document.getElementById('closeFolderModal').onclick=()=>{folderModal.style.display='none'};
      document.getElementById('confirmSaveLocal').onclick=async()=>{
        const folder=document.getElementById('folderNameInput').value.trim()||'CodeShala-Project';
        if('showDirectoryPicker'in window){/* same as before */} else {/* zip download */}
        folderModal.style.display='none';
      };

      document.getElementById('formatBtn').onclick=()=>{if(monacoLoaded&&monacoEditors[currentTabId])monacoEditors[currentTabId].getAction('editor.action.formatDocument')?.run()};
      document.getElementById('exportHtmlBtn').onclick=()=>{/* export logic */};
      document.getElementById('downloadZipBtn').onclick=async()=>{/* zip logic */};
      document.getElementById('fullscreenBtn').onclick=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()};

      document.getElementById('closeMobilePreview').onclick=()=>mobileOverlay.classList.remove('active');
      document.getElementById('mobileRefreshPreview').onclick=()=>previousRun?.type==='all'?runAllFiles():runCurrentFile();
      document.getElementById('mobileToggleConsole').onclick=()=>{mobileConsoleVisible=!mobileConsoleVisible;mobileConsolePanel.classList.toggle('visible',mobileConsoleVisible)};

      fileList.addEventListener('click',e=>{
        const btn=e.target.closest('[data-action]');if(!btn)return;const file=btn.dataset.file;
        if(btn.dataset.action==='delete'&&confirm('Delete '+file+'?'))closeFile(file);
        if(btn.dataset.action==='rename'){const newName=prompt('Rename to:',file);if(newName&&newName!==file){/* rename logic */}}
      });

      // Resize divider
      let resizing=false;
      document.addEventListener('mousedown',e=>{if(e.target.id==='divider')resizing=true});
      document.addEventListener('mousemove',e=>{if(!resizing)return;const rect=document.getElementById('mainContainer').getBoundingClientRect();document.getElementById('editorPanel').style.flex='0 0 '+Math.min(80,Math.max(20,((e.clientX-rect.left)/rect.width)*100))+'%'});
      document.addEventListener('mouseup',()=>resizing=false);

      document.addEventListener('keydown',e=>{
        if((e.ctrlKey||e.metaKey)&&e.key==='s'){e.preventDefault();saveFiles();addConsole('Saved','log')}
        if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();runCurrentFile()}
        if(e.key==='Escape'){newFileModal.style.display='none';folderModal.style.display='none';if(mobileOverlay.classList.contains('active'))mobileOverlay.classList.remove('active')}
      });

      checkMobile();
      const remembered=localStorage.getItem('rememberEmail');if(remembered){loginEmail.value=remembered;rememberCheck.checked=true}
    })();
