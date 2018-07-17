let $ = {},
    dbg = false,
    D = document;

// Get canvas
$.canvas = D.querySelector("canvas");

function init() {
  // Viewport height
  $.vh = $.canvas.height;
  // Viewport width
  $.vw = $.canvas.width;
  // Collision groups
  $.groups = {};
  // $.time.delta = Elapsed time since previous frame
  $.time = {
    delta: 0
  };
   // Canvas context for drawing on-screen
  $.ctx = $.canvas.getContext('2d');
  // Camera system
  //$.cam = new Camera($.vw, $.vh);
}

function resize() {
  let h = window.innerHeight;
  let w = h * $.canvas.width / $.canvas.height;

  $.canvas.style.width = w+'px';
  $.canvas.style.height = h+'px';
}

window.addEventListener('load', () => {
  init();
  resize();
}, false);
