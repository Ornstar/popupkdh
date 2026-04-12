(function () {
  if (window.__kudahokiPopupLoaded) return;
  window.__kudahokiPopupLoaded = true;

  function initPopup() {
    if (document.getElementById("popup-kudahoki-wrap")) return;
    if (!document.body) return;

    var style = document.createElement("style");
    style.id = "popup-kudahoki-style";
    style.innerHTML = `
      @keyframes khFadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
      }

      @keyframes khZoomIn {
        0% {opacity:0; transform:scale(.75) translateY(40px);}
        100% {opacity:1; transform:scale(1) translateY(0);}
      }

      @keyframes khPulseBefore {
        0% {opacity:0; transform:scale(.6);}
        50% {opacity:.4; transform:scale(1.1);}
        100% {opacity:0; transform:scale(1.4);}
      }

      @keyframes khGlowBtn {
        0% {box-shadow:0 0 0 rgba(255,200,0,0);}
        50% {box-shadow:0 0 18px rgba(255,200,0,.6);}
        100% {box-shadow:0 0 0 rgba(255,200,0,0);}
      }

      #popup-kudahoki-wrap{
        position:fixed;
        inset:0;
        display:flex;
        align-items:center;
        justify-content:center;
        z-index:99999999;
        padding:12px;
        background:rgba(0,0,0,.75);
        backdrop-filter: blur(6px);
        animation:khFadeIn .4s ease;
      }

      /* efek sebelum muncul */
      #popup-kudahoki-wrap::before{
        content:'';
        position:absolute;
        width:120px;
        height:120px;
        border-radius:50%;
        background:radial-gradient(circle, rgba(255,200,0,.5), transparent);
        animation:khPulseBefore .8s ease;
      }

      #popup-kudahoki-box{
        position:relative;
        width:100%;
        max-width:440px;
        padding:10px 12px 14px;
        border-radius:24px;
        border:1px solid rgba(255,190,60,.35);
        background:linear-gradient(180deg,#140900 0%,#0b0400 100%);
        box-shadow:0 20px 60px rgba(0,0,0,.9), 0 0 25px rgba(255,180,0,.15);
        overflow:hidden;
        text-align:center;
        color:#ffd76a;
        animation:khZoomIn .45s cubic-bezier(.2,.8,.2,1);
      }

      #popup-kudahoki-close{
        position:absolute;
        top:10px;
        right:10px;
        width:32px;
        height:32px;
        border-radius:50%;
        background:linear-gradient(180deg,#ff4a4a,#c10000);
        color:#fff;
        font-size:17px;
        font-weight:700;
        display:flex;
        align-items:center;
        justify-content:center;
        text-decoration:none;
        cursor:pointer;
        transition:.25s;
      }

      #popup-kudahoki-close:hover{
        transform:rotate(90deg) scale(1.1);
      }

      #popup-kudahoki-button{
        display:inline-block;
        min-width:174px;
        padding:9px 20px;
        border-radius:999px;
        background:linear-gradient(180deg,#fff3bf,#ffcf43,#df9b00);
        color:#17120b;
        text-decoration:none;
        font-size:13px;
        font-weight:800;
        letter-spacing:.3px;
        transition:.25s;
        animation:khGlowBtn 2s infinite;
      }

      #popup-kudahoki-button:hover{
        transform:translateY(-2px) scale(1.05);
        box-shadow:0 6px 20px rgba(255,200,0,.6);
      }

      #popup-kudahoki-imagewrap img{
        transition:transform .6s ease;
      }

      #popup-kudahoki-imagewrap:hover img{
        transform:scale(1.05);
      }
    `;

    if (!document.getElementById("popup-kudahoki-style")) {
      document.head.appendChild(style);
    }

    var wrap = document.createElement("div");
    wrap.id = "popup-kudahoki-wrap";

    var box = document.createElement("div");
    box.id = "popup-kudahoki-box";

    box.innerHTML = `... (HTML kamu tetap sama, tidak perlu diubah)`;

    wrap.appendChild(box);

    // DELAY sebelum muncul (efek dramatis)
    setTimeout(() => {
      document.body.appendChild(wrap);
    }, 600); // bisa ubah delay di sini

    // close animasi
    function closePopup() {
      wrap.style.opacity = "0";
      wrap.style.transform = "scale(.9)";
      setTimeout(() => wrap.remove(), 300);
    }

    document.addEventListener("click", function (e) {
      if (e.target.id === "popup-kudahoki-close" || e.target === wrap) {
        e.preventDefault();
        closePopup();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPopup);
  } else {
    initPopup();
  }
})();
