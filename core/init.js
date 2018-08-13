let $ = {},
    debug = false,
    D = document;

// Get canvas
$.canvas = D.querySelector("canvas");

$.init = function() {
  // Viewport height
  $.vh = $.canvas.height;
  // Viewport width
  $.vw = $.canvas.width;
  // Canvas context for drawing on-screen
  $.ctx = $.canvas.getContext('2d');

  $.groups = {};
  $.input = new Input();
  $.cam = new Camera($.vw, $.vh);
  $.coll = new Collision(); // Collision detection
  $.txt = new TextRenderer();
}

function resize() {
  // TODO: Fix aspect ratio based on bigger measure
  let h = window.innerHeight;
  let w = h * $.canvas.width / $.canvas.height;

  $.canvas.style.width = w + 'px';
  $.canvas.style.height = h + 'px';
}

// Request Animation Frame
raf = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(a){ window.setTimeout(a,1E3/60); };

// Cancel Animation Frame
caf = window.cancelAnimationFrame ||
  window.mozCancelAnimationFrame;

window.addEventListener('load', resize, false);
window.addEventListener('resize', resize, false);
