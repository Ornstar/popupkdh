(function () {
  if (document.getElementById("popup-kudahoki-wrap")) return;

  var style = document.createElement("style");
  style.innerHTML = `
    @keyframes kudahokiFloat{
      0%{transform:translateY(0)}
      50%{transform:translateY(-8px)}
      100%{transform:translateY(0)}
    }
    @keyframes kudahokiGlow{
      0%{box-shadow:0 10px 28px rgba(0,0,0,.82),0 0 10px rgba(255,190,0,.10)}
      50%{box-shadow:0 14px 34px rgba(0,0,0,.88),0 0 18px rgba(255,190,0,.18)}
      100%{box-shadow:0 10px 28px rgba(0,0,0,.82),0 0 10px rgba(255,190,0,.10)}
    }
    @media (max-width: 768px){
      #popup-kudahoki-box{
        max-width: 92vw !important;
        border-radius: 22px !important;
      }
      #popup-kudahoki-imagewrap{
        max-width: 100% !important;
      }
      #popup-kudahoki-title{
        font-size: 14px !important;
      }
      #popup-kudahoki-list{
        font-size: 10px !important;
        line-height: 1.75 !important;
      }
    }
  `;
  document.head.appendChild(style);

  var wrap = document.createElement("div");
  wrap.id = "popup-kudahoki-wrap";
  wrap.style.position = "fixed";
  wrap.style.inset = "0";
  wrap.style.display = "flex";
  wrap.style.alignItems = "center";
  wrap.style.justifyContent = "center";
  wrap.style.zIndex = "99999999";
  wrap.style.padding = "14px";
  wrap.style.boxSizing = "border-box";
  wrap.style.fontFamily = "Poppins,Arial,sans-serif";
  wrap.style.background = "rgba(0,0,0,.70)";
  wrap.style.backdropFilter = "blur(2px)";

  var box = document.createElement("div");
  box.id = "popup-kudahoki-box";
  box.style.position = "relative";
  box.style.width = "100%";
  box.style.maxWidth = "480px"; // lebih kecil
  box.style.padding = "10px 14px 14px";
  box.style.boxSizing = "border-box";
  box.style.color = "#ffd76a";
  box.style.textAlign = "center";
  box.style.borderRadius = "24px";
  box.style.border = "1px solid rgba(255,210,120,.45)";
  box.style.background = "linear-gradient(180deg,#120900 0%,#090400 100%)";
  box.style.boxShadow = "0 10px 28px rgba(0,0,0,.82),0 0 10px rgba(255,190,0,.10)";
  box.style.fontWeight = "700";
  box.style.overflow = "hidden";
  box.style.animation = "kudahokiFloat 4.8s ease-in-out infinite, kudahokiGlow 4.8s ease-in-out infinite";

  box.innerHTML = `
    <a href="#" id="popup-kudahoki-close" style="
      position:absolute;
      top:10px;
      right:10px;
      width:30px;
      height:30px;
      border-radius:50%;
      border:1px solid rgba(255,255,255,.25);
      background:linear-gradient(180deg,#ff4646,#b80000);
      color:#fff;
      font-size:16px;
      display:flex;
      align-items:center;
      justify-content:center;
      text-decoration:none;
      box-shadow:0 4px 10px rgba(0,0,0,.45);
      z-index:10;
    ">×</a>

    <div id="popup-kudahoki-imagewrap" style="
      width:100%;
      max-width:450px;
      aspect-ratio:590/397;
      overflow:hidden;
      border-radius:18px;
      margin:0 auto 14px;
      background:#120900;
      border:1px solid rgba(255,210,120,.30);
      box-shadow:inset 0 0 12px rgba(255,210,120,.05);
    ">
      <img src="http://plcl.me/images/EEhMc.png" style="
        width:100%;
        height:100%;
        display:block;
        object-fit:contain;
        object-position:center;
      ">
    </div>

    <div id="popup-kudahoki-title" style="
      font-size:15px;
      margin-bottom:10px;
      letter-spacing:.3px;
      color:#ffe9ad;
      line-height:1.4;
      text-shadow:0 1px 0 rgba(0,0,0,.45);
    ">
      KLAIM BONUS & BUTUH BANTUAN ?
    </div>

    <a href="https://goviplink.live/tele-official-kudahoki88" target="_blank" style="
      display:inline-block;
      margin:0 auto 12px;
      padding:9px 22px;
      min-width:170px;
      border-radius:999px;
      border:1px solid rgba(255,215,120,.38);
      background:linear-gradient(180deg,#fff3bf,#ffcf44,#d99600);
      color:#16120a;
      font-size:13px;
      letter-spacing:.4px;
      text-decoration:none;
      box-shadow:0 6px 14px rgba(0,0,0,.30), inset 0 1px 0 rgba(255,255,255,.45);
      font-weight:800;
    ">
      HUBUNGI ADMIN
    </a>

    <div style="
      width:74%;
      height:1px;
      margin:10px auto 12px;
      background:linear-gradient(to right, transparent, rgba(255,215,106,.85), transparent);
    "></div>

    <div id="popup-kudahoki-list" style="
      text-align:left;
      font-size:10.5px;
      line-height:1.85;
      color:#f6cf61;
      max-width:290px;
      margin:0 auto 12px;
    ">
      • SITUS BOLA & SLOT RESMI TERPERCAYA DI ASIA<br>
      • SERVER STABIL & ANTI BLOKIR<br>
      • TUJUAN BERMAIN LEBIH AMAN<br>
      • MENGHINDARI PENIPUAN ATAU PHISHING<br>
      • MENDAPATKAN LINK RESMI KUDAHOKI88
    </div>

    <div style="
      margin:0 auto 10px;
      padding:12px 12px;
      max-width:300px;
      border-radius:14px;
      border:1px solid rgba(255,215,120,.28);
      background:linear-gradient(180deg,rgba(255,180,0,.06),rgba(255,180,0,.02));
      box-shadow:inset 0 0 14px rgba(255,215,120,.04);
    ">
      <div style="
        font-size:11px;
        margin-bottom:6px;
        color:#ffe6a0;
        line-height:1.5;
      ">
        CARI KAMI MELALUI GOOGLE DENGAN MUDAH
      </div>

      <div style="
        font-size:11px;
        margin-bottom:8px;
        color:#ffe6a0;
        line-height:1.5;
      ">
        KETIK NAMA SITUS KAMI DI GOOGLE :
      </div>

      <div style="
        max-width:210px;
        margin:auto;
        padding:8px 10px;
        border-radius:7px;
        background:linear-gradient(180deg,#fffdf7,#f5ead0);
        color:#171717;
        font-size:13px;
        font-weight:800;
        letter-spacing:.7px;
        box-shadow:inset 0 1px 3px rgba(0,0,0,.10);
      ">
        »» KUDAHOKI88 ««
      </div>
    </div>

    <div style="
      font-size:12px;
      margin-top:4px;
      letter-spacing:.4px;
      color:#ffe49a;
      text-shadow:0 1px 0 rgba(0,0,0,.35);
    ">
      PILIHAN SITUS TERBAIK SEPANJANG MASA
    </div>
  `;

  wrap.appendChild(box);
  document.body.appendChild(wrap);

  document.getElementById("popup-kudahoki-close").onclick = function (e) {
    e.preventDefault();
    wrap.remove();
  };

  wrap.addEventListener("click", function(e){
    if(e.target === wrap) wrap.remove();
  });
})();
