let $ = {},
    dbg = false,
    D = document;

let abs = Math.abs,
    cos = Math.cos,
    sin = Math.sin,
    tan = Math.tan,
    atan = Math.atan,
    atan2 = Math.atan2,
    ceil = Math.ceil,
    floor = Math.floor,
    max = Math.max,
    min = Math.min,
    pow = Math.pow,
    sqrt = Math.sqrt,
    round = Math.round,
    rnd = Math.random,
    now = Date.now,
    PI = Math.PI;
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
  // coll, cd (Collision detection)
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
