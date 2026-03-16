(function () {
  "use strict";

  if (document.getElementById("popup-kudahoki-wrap")) return;

  function renderPopup() {
    if (document.getElementById("popup-kudahoki-wrap")) return;

    var wrap = document.createElement("div");
    wrap.id = "popup-kudahoki-wrap";
    wrap.innerHTML = `
      <style>
        @keyframes floatUpDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
      </style>

      <div style="
        position:fixed;
        inset:0;
        display:flex;
        align-items:center;
        justify-content:center;
        z-index:99999999;
        padding:20px;
        font-family:Poppins,Arial,sans-serif;
        background:rgba(0,0,0,.65);
      ">
        <div style="
          position:relative;
          width:100%;
          max-width:420px;
          padding:0 18px 22px;
          color:#ffd76a;
          text-align:center;
          border-radius:26px 6px 26px 6px;
          border:1px solid rgba(255,210,120,.65);
          background:radial-gradient(circle at 50% 30%, #2b1a00 0%, #120a00 45%, #000000 85%);
          box-shadow:0 10px 22px rgba(0,0,0,.85), 0 0 12px rgba(255,190,0,.25);
          font-weight:700;
          animation:floatUpDown 4.5s ease-in-out infinite;
          overflow:hidden;
        ">

          <a href="#"
            onclick="document.getElementById('popup-kudahoki-wrap').remove(); return false;"
            style="
              position:absolute;
              top:10px;
              right:10px;
              width:34px;
              height:34px;
              border-radius:50%;
              border:1.5px solid #ffd76a;
              background:linear-gradient(180deg,#ff3c3c,#a80000);
              color:#fff;
              font-size:18px;
              display:flex;
              align-items:center;
              justify-content:center;
              text-decoration:none;
              box-shadow:0 4px 10px rgba(0,0,0,.7);
              z-index:5;
            "
          >×</a>

          <div style="
            overflow:hidden;
            border-radius:26px 6px 14px 14px;
            margin:0 -18px 16px;
            background:#1a1000;
          ">
            <img
              src="https://plcl.me/images/nP9Uw.jpg"
              alt="Banner KudaHoki"
              style="width:100%;display:block;"
            >
          </div>

          <div style="font-size:17px;margin-bottom:8px;color:#ffe49a;">
            KLAIM BONUS & BUTUH BANTUAN ?
          </div>

          <a href="https://goviplink.live/tele-official-kudahoki88"
            target="_blank"
            rel="noopener noreferrer"
            style="
              display:inline-block;
              padding:10px 26px;
              border-radius:999px;
              background:linear-gradient(180deg,#fff0b8,#ffcf3c,#d89200);
              color:#111;
              font-size:14px;
              text-decoration:none;
              font-weight:bold;
            "
          >
            HUBUNGI ADMIN
          </a>

        </div>
      </div>
    `;

    document.body.appendChild(wrap);
  }

  if (document.body) {
    renderPopup();
  } else {
    document.addEventListener("DOMContentLoaded", renderPopup);
  }
})();
