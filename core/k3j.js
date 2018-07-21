class K3J {
  constructor(global, doc, input, collision) {
    this.global = global;
    this.document = doc;
    this.input = input;
    this.collision = collision;
    this.groups = {};
    this.caf = null
    this._canvas = null;
    this.vh = null;
    this.vw = null;
    this.ctx = null;
    this.camera = null;
    this._resizeHandler = null;
    this.raf = null;
  }

  set canvas(canvas) {
    this._canvas = canvas;
    this.vh = this.canvas.height;
    this.vw = this.canvas.width;
    this.ctx = this.canvas.getContext('2d');

    this.camera = new Camera(this.ctx, this.vw, this.vh, 1024, 1024);
  }

  get canvas() {
    return this._canvas;
  }

  _resize() {
    // TODO: Fix aspect ratio based on bigger measure
    let h = this.global.innerHeight;
    let w = h * this.canvas.width / this.canvas.height;

    this.canvas.style.width = w + 'px';
    this.canvas.style.height = h + 'px';
  }

  addHandlers() {
    this._resizeHandler = this._resize.bind(this);
    this.global.addEventListener('load', this._resizeHandler, false);
    this.global.addEventListener('resize', this._resizeHandler, false);

    // Request Animation Frame
    this.raf = this.global.requestAnimationFrame ||
      this.global.webkitRequestAnimationFrame ||
      this.global.mozRequestAnimationFrame ||
      function(a){ window.setTimeout(a,1E3/60); }.bind(this.global, this.global); // TODO noansknv: silly

    // Cancel Animation Frame
    this.caf = this.global.cancelAnimationFrame ||
      this.global.mozCancelAnimationFrame;
  }
}


