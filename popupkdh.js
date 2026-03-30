(function () {
  if (document.getElementById("popup-kudahoki-wrap")) return;

  var style = document.createElement("style");
  style.innerHTML = `
    #popup-kudahoki-wrap,
    #popup-kudahoki-wrap *{
      box-sizing:border-box;
    }

    #popup-kudahoki-wrap img{
      filter:none !important;
      backdrop-filter:none !important;
      -webkit-backdrop-filter:none !important;
      image-rendering:auto;
      backface-visibility:hidden;
      -webkit-backface-visibility:hidden;
    }

    @media (max-width: 768px){
      #popup-kudahoki-box{
        max-width:92vw !important;
        padding:10px 12px 14px !important;
        border-radius:22px !important;
      }
      #popup-kudahoki-imagewrap{
        max-width:100% !important;
        margin-bottom:12px !important;
      }
      #popup-kudahoki-title{
        font-size:13px !important;
        margin-bottom:8px !important;
      }
      #popup-kudahoki-button{
        font-size:12px !important;
        padding:8px 18px !important;
        min-width:155px !important;
      }
      #popup-kudahoki-list{
        font-size:10px !important;
        line-height:1.7 !important;
        max-width:250px !important;
      }
      #popup-kudahoki-googlebox{
        max-width:260px !important;
        padding:10px 10px !important;
      }
      #popup-kudahoki-footer{
        font-size:11px !important;
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
  wrap.style.background = "rgba(0,0,0,.72)";
  wrap.style.fontFamily = "Poppins, Arial, sans-serif";

  var box = document.createElement("div");
  box.id = "popup-kudahoki-box";
  box.style.position = "relative";
  box.style.width = "100%";
  box.style.maxWidth = "455px";
  box.style.padding = "10px 12px 14px";
  box.style.borderRadius = "24px";
  box.style.border = "1px solid rgba(255,190,60,.35)";
  box.style.background = "linear-gradient(180deg,#140900 0%,#0c0400 100%)";
  box.style.boxShadow = "0 14px 34px rgba(0,0,0,.78), 0 0 18px rgba(255,180,0,.10)";
  box.style.overflow = "hidden";
  box.style.textAlign = "center";
  box.style.color = "#ffd76a";

  box.innerHTML = `
    <a href="#" id="popup-kudahoki-close" style="
      position:absolute;
      top:10px;
      right:10px;
      width:32px;
      height:32px;
      border-radius:50%;
      background:linear-gradient(180deg,#ff4a4a,#c10000);
      border:1px solid rgba(255,255,255,.18);
      color:#fff;
      font-size:17px;
      font-weight:700;
      display:flex;
      align-items:center;
      justify-content:center;
      text-decoration:none;
      box-shadow:0 4px 10px rgba(0,0,0,.35);
      z-index:5;
    ">×</a>

    <div id="popup-kudahoki-imagewrap" style="
      width:100%;
      max-width:430px;
      aspect-ratio:590/397;
      margin:0 auto 12px;
      border-radius:18px;
      overflow:hidden;
      border:1px solid rgba(255,190,60,.28);
      background:#120900;
      box-shadow:inset 0 0 10px rgba(255,210,120,.04);
    ">
      <img src="http://plcl.me/images/EEhMc.png" alt="Kudahoki88" style="
        width:100%;
        height:100%;
        display:block;
        object-fit:cover;
        object-position:center;
        filter:none !important;
        transform:none !important;
      ">
    </div>

    <div id="popup-kudahoki-title" style="
      font-size:14px;
      font-weight:800;
      color:#ffe8ae;
      margin-bottom:8px;
      letter-spacing:.2px;
      line-height:1.35;
      text-shadow:0 1px 0 rgba(0,0,0,.35);
    ">
      KLAIM BONUS & BUTUH BANTUAN ?
    </div>

    <a id="popup-kudahoki-button" href="https://goviplink.live/tele-official-kudahoki88" target="_blank" style="
      display:inline-block;
      min-width:178px;
      padding:9px 22px;
      margin:0 auto 10px;
      border-radius:999px;
      background:linear-gradient(180deg,#fff3bf,#ffcf43,#df9b00);
      border:1px solid rgba(255,215,120,.35);
      color:#17120b;
      text-decoration:none;
      font-size:13px;
      font-weight:800;
      letter-spacing:.3px;
      box-shadow:0 5px 12px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.42);
    ">
      HUBUNGI ADMIN
    </a>

    <div style="
      width:80%;
      max-width:260px;
      height:1px;
      margin:10px auto 10px;
      background:linear-gradient(to right, transparent, rgba(255,215,106,.75), transparent);
    "></div>

    <div id="popup-kudahoki-list" style="
      max-width:285px;
      margin:0 auto 10px;
      text-align:left;
      font-size:10px;
      line-height:1.72;
      color:#f5cd61;
      font-weight:700;
    ">
      • SITUS RESMI TERPERCAYA<br>
      • SERVER STABIL & ANTI BLOKIR<br>
      • BERMAIN LEBIH AMAN & NYAMAN<br>
      • HINDARI LINK PALSU / PHISHING<br>
      • DAPATKAN AKSES RESMI KUDAHOKI88
    </div>

    <div id="popup-kudahoki-googlebox" style="
      max-width:295px;
      margin:0 auto 10px;
      padding:10px 10px 12px;
      border-radius:14px;
      border:1px solid rgba(255,190,60,.25);
      background:linear-gradient(180deg,rgba(255,180,0,.05),rgba(255,180,0,.02));
      box-shadow:inset 0 0 12px rgba(255,210,120,.03);
    ">
      <div style="
        font-size:10px;
        line-height:1.45;
        color:#ffe5a0;
        font-weight:800;
        margin-bottom:5px;
      ">
        CARI KAMI DI GOOGLE DENGAN MUDAH
      </div>

      <div style="
        font-size:10px;
        line-height:1.45;
        color:#ffe5a0;
        font-weight:700;
        margin-bottom:8px;
      ">
        KETIK NAMA SITUS KAMI :
      </div>

      <div style="
        max-width:190px;
        margin:auto;
        padding:8px 10px;
        border-radius:7px;
        background:linear-gradient(180deg,#fffdf7,#efe4ca);
        color:#1a1a1a;
        font-size:12px;
        font-weight:800;
        letter-spacing:.6px;
        box-shadow:inset 0 1px 3px rgba(0,0,0,.10);
      ">
        »» KUDAHOKI88 ««
      </div>
    </div>

    <div id="popup-kudahoki-footer" style="
      font-size:11px;
      font-weight:800;
      letter-spacing:.25px;
      color:#ffe19a;
      line-height:1.35;
      text-shadow:0 1px 0 rgba(0,0,0,.30);
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

  wrap.addEventListener("click", function (e) {
    if (e.target === wrap) wrap.remove();
  });
})();
