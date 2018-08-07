class TextRenderer {
  constructor() {
    this.font = {
      'H': [[0,0,0,1],[1,0,1,1], [0,1/2,1,1/2]]
    };
  }

  /**
   * glyphs = {'A': sprite, 'B': sprite, ...}
   **/
  addFont(key, glyphs) {
    this.fonts[key] = glyphs;
  }

  render(text, x, y, color, fontWidth) {
    // Render single-line words
    let i, m, n, letter, seg, fontHeight;
    fontHeight = fontWidth * 3 / 2;

    $.ctx.save();
    for (i = 0; i < text.length; i++) {
      letter = this.font[text.charAt(i)];
      // Render each segment
      $.ctx.strokeStyle = color;
      $.ctx.beginPath();
      for (m = 0; m < letter.length; m++) {
        seg = letter[m];
        //console.log(x + (seg[0] * fontWidth), y + (seg[1] * fontHeight));
        //console.log(x + (seg[2] * fontWidth), y + (seg[3] * fontHeight));
        //console.log('----');
        $.ctx.moveTo(x + (seg[0] * fontWidth), y + (seg[1] * fontHeight));
        $.ctx.lineTo(x + (seg[2] * fontWidth), y + (seg[3] * fontHeight));
        $.ctx.stroke();
      }
      //console.log('++++');
    }
    $.ctx.restore();
  }
}
