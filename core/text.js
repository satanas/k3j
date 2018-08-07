class TextRenderer {
  constructor() {
    this.font = {
      'H': [[0,0,0,1], [1,0,1,1], [0,1/2,1,1/2]],
      'E': [[0,0,0,1], [0,0,1,0], [0,1/2,1,1/2], [0,1,1,1]],
      'L': [[0,0,0,1], [0,1,1,1]],
      'O': [[0,0,0,1], [0,0,1,0], [1,0,1,1], [0,1,1,1]],
      ' ': []
    };
  }

  render(text, x, y, color, fontWidth) {
    // Render single-line words
    let i, m, n, letter, seg, fontHeight, offset, spacing;
    fontHeight = fontWidth * 3 / 2;
    offset = 0;
    spacing = fontWidth / 3;

    $.ctx.save();
    // Render each letter
    for (i = 0; i < text.length; i++) {
      letter = this.font[text.charAt(i)];
      // Render each segment of a letter
      $.ctx.strokeStyle = color;
      $.ctx.beginPath();
      for (m = 0; m < letter.length; m++) {
        seg = letter[m];
        $.ctx.moveTo(x + offset + (seg[0] * fontWidth), y + (seg[1] * fontHeight));
        $.ctx.lineTo(x + offset + (seg[2] * fontWidth), y + (seg[3] * fontHeight));
        $.ctx.stroke();
      }
      offset += fontWidth + spacing;
    }
    $.ctx.restore();
  }
}
