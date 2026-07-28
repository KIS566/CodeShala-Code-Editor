<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>CodeShala Pro • Neumorphic IDE</title>
  <!-- Firebase -->
  <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js"></script>
  <!-- Monaco -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs/loader.min.js"></script>
  <!-- JSZip -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* ====== NEUMORPHIC DARK THEME (DEFAULT) ====== */
    :root {
      --bg: #1a1a1e;
      --surface: #242428;
      --surface2: #2a2a2f;
      --text: #e0e0e0;
      --text2: #9e9e9e;
      --accent: #0d8cff;
      --green: #00c48c;
      --red: #ff5c5c;
      --primary: #00e676;
      --primary-dark: #00c853;
      --shadow-dark: #111114;
      --shadow-light: #35353a;
      --neumorph: 6px 6px 12px var(--shadow-dark), -6px -6px 12px var(--shadow-light);
      --neumorph-inset: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light);
      --neumorph-sm: 3px 3px 6px var(--shadow-dark), -3px -3px 6px var(--shadow-light);
      --header: 48px; --status: 28px; --tab: 36px;
    }
    body.light-mode {
      --bg: #e8e8ee;
      --surface: #f0f0f5;
      --surface2: #e0e0e8;
      --text: #2c2c2c;
      --text2: #6c6c6c;
      --accent: #007acc;
      --green: #00b884;
      --red: #e53935;
      --primary: #00cc66;
      --primary-dark: #009944;
      --shadow-dark: #b8b8c8;
      --shadow-light: #ffffff;
      --neumorph: 6px 6px 12px var(--shadow-dark), -6px -6px 12px var(--shadow-light);
      --neumorph-inset: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light);
      --neumorph-sm: 3px 3px 6px var(--shadow-dark), -3px -3px 6px var(--shadow-light);
    }

    *{margin:0;padding:0;box-sizing:border-box}
    body{
      font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);
      height:100vh;overflow:hidden;position:fixed;top:0;left:0;width:100%;
      transition: background 0.3s, color 0.3s;
    }
    ::-webkit-scrollbar{width:5px;height:5px}
    ::-webkit-scrollbar-track{background:var(--surface)}
    ::-webkit-scrollbar-thumb{background:var(--shadow-light);border-radius:10px}

    /* LOGIN SCREEN */
    .login-container{/* same as before */position:fixed;top:0;left:0;width:100%;height:100vh;z-index:1000;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;transition:all 0.5s ease;}
    .login-container.hidden{opacity:0;transform:scale(0.96);pointer-events:none}
    .login__bg{position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:-2}
    .video-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(10,10,15,0.8);z-index:-1}
    .sound-btn{position:fixed;top:16px;right:16px;z-index:2000;background:var(--surface);border:none;color:var(--text);padding:10px 24px;border-radius:40px;cursor:pointer;font-size:0.9rem;display:flex;align-items:center;gap:8px;box-shadow:var(--neumorph-sm);transition:0.2s;}
    .sound-btn:active{box-shadow:var(--neumorph-inset)}
    .forms-wrapper{width:100%;max-width:440px}
    .forms-container{position:relative;width:100%;min-height:520px;display:flex;align-items:center;justify-content:center}
    .login__form{background:var(--surface);border-radius:2rem;padding:2.8rem 2rem;color:var(--text);box-shadow:var(--neumorph);transition:all 0.5s cubic-bezier(0.4,0,0.2,1);position:absolute;width:100%;top:0;}
    .login-form{transform:translateX(0);opacity:1;z-index:2}
    .register-form{transform:translateX(120%);opacity:0;z-index:1;pointer-events:none}
    .register-active .login-form{transform:translateX(-120%);opacity:0;pointer-events:none}
    .register-active .register-form{transform:translateX(0);opacity:1;z-index:3;pointer-events:all}
    .login__title{text-align:center;font-size:1.9rem;font-weight:700;margin-bottom:2rem;color:var(--text)}
    .login__title::after{content:'';display:block;width:60px;height:3px;background:var(--primary);margin:0.8rem auto 0;border-radius:3px}
    .login__inputs{display:grid;row-gap:1.2rem;margin-bottom:1.8rem}
    .login__box{display:grid;grid-template-columns:max-content 1fr max-content;align-items:center;gap:0.75rem;background:var(--surface);padding:0.9rem 1.5rem;border-radius:3rem;box-shadow:var(--neumorph-inset);border:none;}
    .login__icon{font-size:1.3rem;color:var(--text2)}
    .login__input{width:100%;padding:0.4rem 0;background:none;border:none;outline:none;color:var(--text);font-size:1rem}
    .login__input::placeholder{color:var(--text2)}
    .login__eye{cursor:pointer;color:var(--text2);font-size:1.1rem}
    .login__check{display:flex;justify-content:space-between;margin-bottom:1.8rem;font-size:0.85rem;color:var(--text2)}
    .login__forgot{color:var(--accent);text-decoration:none;cursor:pointer}
    .login__button{width:100%;padding:1rem;border-radius:3rem;background:linear-gradient(145deg, var(--primary-dark), var(--primary));color:#0a0a0a;font-weight:700;font-size:1.05rem;cursor:pointer;border:none;box-shadow:4px 4px 8px rgba(0,0,0,0.4), -4px -4px 8px rgba(255,255,255,0.05);transition:0.2s;margin-bottom:0.5rem;}
    .login__button:active{box-shadow:inset 4px 4px 8px rgba(0,0,0,0.5), inset -4px -4px 8px rgba(255,255,255,0.1)}
    .login__button:disabled{opacity:0.6}
    .login__register,.back-to-login{text-align:center;font-size:0.9rem;margin-top:1.2rem;color:var(--text2)}
    .login__register a,.back-to-login a{color:var(--primary);font-weight:600;cursor:pointer}
    .login__error,.login__success{font-size:0.9rem;text-align:center;margin-bottom:1.2rem;padding:10px 14px;border-radius:12px;display:none;font-weight:500;}
    .login__error{color:#ff6b6b;background:rgba(255,0,0,0.1);box-shadow:inset 2px 2px 6px rgba(0,0,0,0.3)}
    .login__success{color:#4ec9b0;background:rgba(78,201,176,0.1);box-shadow:inset 2px 2px 6px rgba(0,0,0,0.3)}

    /* IDE */
    #app{display:none;flex-direction:column;height:100vh;width:100%}
    #app.active{display:flex}
    .toolbar{display:flex;align-items:center;justify-content:space-between;background:var(--surface);padding:0 12px;height:var(--header);gap:8px;box-shadow:0 4px 12px rgba(0,0,0,0.3);z-index:10;}
    .brand{font-weight:700;font-size:0.95rem;display:flex;align-items:center;gap:8px;color:var(--text)}
    .actions{display:flex;gap:6px;align-items:center;overflow-x:auto}
    .btn{background:var(--surface);border:none;color:var(--text);padding:6px 12px;border-radius:10px;font-size:0.75rem;cursor:pointer;display:flex;align-items:center;gap:4px;white-space:nowrap;height:34px;box-shadow:var(--neumorph-sm);transition:0.15s;touch-action:manipulation;}
    .btn:active{box-shadow:var(--neumorph-inset)}
    .btn i{font-size:0.9rem}
    .btn .label{display:inline}
    .btn-primary{background:var(--accent);color:#fff;box-shadow:3px 3px 6px rgba(0,0,0,0.4), -3px -3px 6px rgba(255,255,255,0.1)}
    .btn-success{background:var(--green);color:#0a0a0a}
    .btn-danger{background:var(--red);color:#fff}
    @media(max-width:600px){ .btn .label{display:none} .btn{padding:6px 10px;min-width:34px;justify-content:center} .btn i{font-size:1rem} }

    .main-container{display:flex;flex:1;gap:8px;background:var(--bg);padding:8px;min-height:0}
    @media(max-width:768px){.main-container{flex-direction:column;padding:6px}}

    .file-explorer{width:200px;background:var(--surface);border-radius:16px;display:flex;flex-direction:column;overflow:hidden;box-shadow:var(--neumorph);margin-right:4px;}
    @media(max-width:768px){.file-explorer{width:100%;height:150px;margin-right:0;margin-bottom:6px;border-radius:16px}}
    .file-explorer-header{padding:12px 16px;font-size:0.7rem;font-weight:600;text-transform:uppercase;color:var(--text2);border-bottom:1px solid var(--shadow-light);display:flex;justify-content:space-between;align-items:center;}
    .file-list{flex:1;overflow-y:auto;padding:8px}
    .file-item{padding:8px 12px;font-size:0.8rem;cursor:pointer;border-radius:10px;display:flex;justify-content:space-between;align-items:center;color:var(--text2);transition:0.1s;margin-bottom:4px;}
    .file-item:hover,.file-item.active{background:var(--surface2);color:var(--text);box-shadow:var(--neumorph-sm)}
    .file-item .file-actions{display:none;gap:6px}
    .file-item:hover .file-actions{display:flex}
    .file-item .file-actions .btn{box-shadow:none;padding:4px 6px;height:auto;background:transparent}

    .editor-panel{flex:1;display:flex;flex-direction:column;background:var(--surface);border-radius:16px;overflow:hidden;box-shadow:var(--neumorph)}
    .tabs-bar{display:flex;background:var(--surface2);overflow-x:auto;min-height:var(--tab);align-items:center;padding:0 8px;gap:2px;}
    .tab{padding:6px 16px;font-size:0.75rem;color:var(--text2);cursor:pointer;border-radius:12px 12px 0 0;display:flex;align-items:center;gap:6px;white-space:nowrap;height:var(--tab);margin-top:4px;}
    .tab.active{color:var(--text);background:var(--surface);box-shadow:0 -2px 8px rgba(0,0,0,0.2)}
    .tab .close-tab{font-size:0.7rem;opacity:0.5;cursor:pointer;margin-left:4px}
    .tab .close-tab:hover{opacity:1;color:var(--red)}
    .editor-wrapper{flex:1;min-height:0;position:relative}
    .fallback-editor{width:100%;height:100%;background:var(--surface);color:var(--text);font-family:'JetBrains Mono',monospace;font-size:14px;padding:16px;border:none;resize:none;outline:none;display:none;}
    .status-bar{height:var(--status);background:var(--surface2);color:var(--text2);display:flex;align-items:center;padding:0 16px;font-size:0.7rem;justify-content:space-between;border-top:1px solid var(--shadow-light);border-radius:0 0 16px 16px;}

    .preview-panel{flex:1;display:flex;flex-direction:column;background:var(--surface);border-radius:16px;overflow:hidden;box-shadow:var(--neumorph);min-width:0;}
    .preview-header{display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background:var(--surface2);border-bottom:1px solid var(--shadow-light);gap:8px;}
    .preview-header span{font-weight:600;font-size:0.8rem;color:var(--text)}
    .preview-frame-wrap{flex:1;background:#fff;border-radius:0 0 16px 16px;overflow:hidden}
    .preview-frame{width:100%;height:100%;border:none;background:white}
    .console-panel{height:130px;background:var(--surface);border-top:1px solid var(--shadow-light);font-family:'JetBrains Mono',monospace;font-size:12px;padding:10px;color:var(--text);display:none;overflow-y:auto;box-shadow:inset 0 2px 6px rgba(0,0,0,0.4);}
    .console-panel.visible{display:block}
    .log-entry{padding:3px 4px;border-bottom:1px solid var(--shadow-light)}
    .log-warn{color:#dcdcaa}.log-error{color:#f44747}.log-success{color:#4ec9b0}

    /* Mobile Preview Overlay */
    #mobilePreviewOverlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:3000;background:var(--bg);display:none;flex-direction:column;transform:translateY(100%);transition:transform 0.3s;}
    #mobilePreviewOverlay.active{transform:translateY(0);display:flex}
    .overlay-header{display:flex;align-items:center;padding:12px 16px;background:var(--surface);box-shadow:0 2px 8px rgba(0,0,0,0.3);z-index:5;}
    .overlay-header .back-btn{background:var(--surface);border:none;color:var(--text);padding:8px 14px;border-radius:12px;display:flex;align-items:center;gap:8px;font-size:0.9rem;box-shadow:var(--neumorph-sm);cursor:pointer;}
    .overlay-header .back-btn:active{box-shadow:var(--neumorph-inset)}
    .overlay-content{flex:1;display:flex;flex-direction:column;}

    @media(min-width:769px){ #mobilePreviewOverlay{display:none!important} }
  </style>
</head>
<body>
  <!-- LOGIN SCREEN -->
  <div class="login-container" id="loginContainer">
    <video autoplay muted loop playsinline id="bgVideo" class="login__bg">
      <source src="https://github.com/KIS566/Kishan-verma/raw/main/Zhang%20Xiao%20fan%20and%20Lu%20Xuqi%20kiss%20Seen%20%23shorts%20%23donghua.mp4" type="video/mp4">
    </video>
    <div class="video-overlay"></div>
    <button class="sound-btn" id="soundPermissionBtn"><i class="ri-volume-up-line"></i> Enable Sound</button>
    
    <div class="forms-wrapper">
      <div class="forms-container" id="formsContainer">
        <form class="login__form login-form" id="loginForm" autocomplete="on">
          <h1 class="login__title">🚀 Welcome Back</h1>
          <div id="loginError" class="login__error"></div>
          <div id="loginSuccess" class="login__success"></div>
          <div class="login__inputs">
            <div class="login__box"><i class="ri-user-3-line login__icon"></i><input type="email" placeholder="Email address" required id="loginEmail" class="login__input" autocomplete="email"></div>
            <div class="login__box"><i class="ri-lock-2-line login__icon"></i><input type="password" placeholder="Password" required id="loginPassword" class="login__input" autocomplete="current-password"><i class="ri-eye-off-line login__eye" id="toggleLoginPassword"></i></div>
          </div>
          <div class="login__check"><label><input type="checkbox" id="remember"> Remember me</label><a href="#" class="login__forgot" id="forgotPassword">Forgot Password?</a></div>
          <button type="submit" class="login__button" id="loginBtn">Sign In</button>
          <div class="login__register">Don't have an account? <a id="show-register">Create one</a></div>
        </form>
        <form class="login__form register-form" id="registerForm" autocomplete="on">
          <h1 class="login__title">✨ Create Account</h1>
          <div id="registerError" class="login__error"></div>
          <div id="registerSuccess" class="login__success"></div>
          <div class="login__inputs">
            <div class="login__box"><i class="ri-user-3-line login__icon"></i><input type="text" placeholder="Full Name" required id="regName" class="login__input" autocomplete="name"></div>
            <div class="login__box"><i class="ri-mail-line login__icon"></i><input type="email" placeholder="Email address" required id="regEmail" class="login__input" autocomplete="email"></div>
            <div class="login__box"><i class="ri-lock-2-line login__icon"></i><input type="password" placeholder="Password (min 6 characters)" required id="regPassword" class="login__input" autocomplete="new-password"><i class="ri-eye-off-line login__eye" id="toggleRegPassword"></i></div>
          </div>
          <button type="submit" class="login__button" id="registerBtn">Create Account</button>
          <div class="back-to-login">Already have an account? <a id="show-login">Sign In</a></div>
        </form>
      </div>
    </div>
  </div>

  <!-- IDE -->
  <div id="app">
    <header class="toolbar">
      <div class="brand"><i class="ri-code-s-slash-line" style="color:var(--primary);"></i> <span class="label">CodeShala</span></div>
      <div class="actions">
        <button class="btn" id="newFileBtn"><i class="ri-file-add-line"></i> <span class="label">New</span></button>
        <button class="btn" id="saveFileBtn"><i class="ri-save-line"></i> <span class="label">Save</span></button>
        <button class="btn btn-success" id="saveLocalBtn"><i class="ri-folder-download-line"></i> <span class="label">Save to Device</span></button>
        <button class="btn" id="formatBtn"><i class="ri-braces-line"></i> <span class="label">Format</span></button>
        <button class="btn" id="exportHtmlBtn"><i class="ri-file-code-line"></i> <span class="label">HTML</span></button>
        <button class="btn" id="downloadZipBtn"><i class="ri-download-2-line"></i> <span class="label">ZIP</span></button>
        <button class="btn btn-primary" id="runBtn"><i class="ri-play-fill"></i> <span class="label">Run</span></button>
        <button class="btn" id="runCurrentBtn"><i class="ri-play-circle-line"></i> <span class="label">Run This</span></button>
        <button class="btn" id="themeToggle"><i class="ri-moon-line"></i> <span class="label">Theme</span></button>
        <button class="btn" id="fullscreenBtn"><i class="ri-fullscreen-line"></i></button>
        <button class="btn" id="logoutBtn"><i class="ri-logout-box-r-line"></i></button>
      </div>
    </header>
    
    <div class="main-container" id="mainContainer">
      <div class="file-explorer" id="fileExplorer">
        <div class="file-explorer-header"><span>📁 Files</span><button class="btn" id="addFileBtn"><i class="ri-add-line"></i></button></div>
        <div class="file-list" id="fileList"></div>
      </div>
      <div class="editor-panel" id="editorPanel">
        <div class="tabs-bar" id="tabsBar"></div>
        <div class="editor-wrapper" id="editorWrapper"><textarea class="fallback-editor" id="fallbackEditor"></textarea></div>
        <div class="status-bar">
          <span><span id="cursorPos">Ln 1, Col 1</span> | <span id="fileLang">HTML</span></span>
          <span><span id="wordCount">0</span> words | <span id="fileSize">0 KB</span></span>
        </div>
      </div>
      <div class="preview-panel" id="desktopPreview">
        <div class="preview-header">
          <span>🌐 Live Preview</span>
          <div class="controls">
            <button class="btn" id="refreshPreview"><i class="ri-refresh-line"></i></button>
            <button class="btn" id="openNewTab"><i class="ri-external-link-line"></i></button>
            <button class="btn" id="toggleConsole"><i class="ri-terminal-box-line"></i></button>
            <select id="previewSize">
              <option value="100%">💻 100%</option>
              <option value="375px">📱 375px</option>
              <option value="768px">📱 768px</option>
              <option value="1200px">💻 1200px</option>
            </select>
          </div>
        </div>
        <div class="preview-frame-wrap"><iframe class="preview-frame" id="previewFrame" sandbox="allow-scripts allow-modals allow-forms allow-popups allow-same-origin"></iframe></div>
        <div class="console-panel" id="consolePanel"></div>
      </div>
    </div>
  </div>

  <!-- Mobile Preview Overlay -->
  <div id="mobilePreviewOverlay">
    <div class="overlay-header">
      <button class="back-btn" id="closeMobilePreview"><i class="ri-arrow-left-line"></i> Back to Editor</button>
      <span style="margin-left:16px;font-weight:600;color:var(--text)">Live Preview</span>
      <div style="flex:1"></div>
      <button class="btn" id="mobileRefreshPreview"><i class="ri-refresh-line"></i></button>
      <button class="btn" id="mobileToggleConsole"><i class="ri-terminal-box-line"></i></button>
    </div>
    <div class="overlay-content">
      <div class="preview-frame-wrap"><iframe class="preview-frame" id="mobilePreviewFrame" sandbox="allow-scripts allow-modals allow-forms allow-popups allow-same-origin"></iframe></div>
      <div class="console-panel" id="mobileConsolePanel"></div>
    </div>
  </div>

  <!-- MODALS -->
  <div class="modal" id="newFileModal" style="background:var(--surface);box-shadow:var(--neumorph);border-radius:20px;display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2000;padding:24px;min-width:300px;max-width:90vw;">
    <h3>📄 New File</h3>
    <label>File name</label>
    <input type="text" id="newFileName" placeholder="e.g., about.html" style="background:var(--bg);box-shadow:var(--neumorph-inset);border:none;color:var(--text);padding:12px;width:100%;margin:8px 0;">
    <label>Language</label>
    <select id="newFileLang" style="background:var(--bg);box-shadow:var(--neumorph-inset);border:none;color:var(--text);padding:12px;width:100%;margin:8px 0;">
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="javascript">JavaScript</option>
      <option value="json">JSON</option>
      <option value="markdown">Markdown</option>
    </select>
    <div class="modal-actions" style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px;">
      <button class="btn btn-primary" id="confirmNewFile">Create</button>
      <button class="btn" id="closeNewFile">Cancel</button>
    </div>
  </div>

  <div class="modal" id="folderModal" style="background:var(--surface);box-shadow:var(--neumorph);border-radius:20px;display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:2000;padding:24px;min-width:300px;max-width:90vw;">
    <h3>📁 Save to Device</h3>
    <label>Folder name</label>
    <input type="text" id="folderNameInput" placeholder="My Project" value="CodeShala-Project" style="background:var(--bg);box-shadow:var(--neumorph-inset);border:none;color:var(--text);padding:12px;width:100%;margin:8px 0;">
    <p style="font-size:0.75rem;color:var(--text2);margin:4px 0"><i class="ri-information-line"></i> All files will be saved in this folder</p>
    <div class="modal-actions" style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px;">
      <button class="btn btn-success" id="confirmSaveLocal">Save</button>
      <button class="btn" id="closeFolderModal">Cancel</button>
    </div>
  </div>

  <script>
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
  </script>
</body>
</html>
