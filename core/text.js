class TextRenderer {
  constructor() {
    // Add segments to variables?
    let f = [[0,0,0,1], [0,0,1,0], [0,1/2,3/4,1/2]],
        l = [[0,0,0,1], [0,1,1,1]],
        c = l.concat([[0,0,1,0]]),
        t = [[0,0,1,0], [1/2,0,1/2,1]];

    this.font = {
      'A': [[0,1/3,0,1], [0,1/3,1/2,0], [1/2,0,1,1/3], [1,1/3,1,1], [0,2/3,1,2/3]],
      'B': [[0,0,0,1], [0,0,2/3,0], [2/3,0,1,1/6], [1,1/6,1,2/6], [1,2/6,2/3,1/2], [2/3,1/2,1,2/3], [1,2/3,1,5/6], [1,5/6,2/3,1], [2/3,1,0,1], [0,1/2,2/3,1/2]],
      'D': [[0,0,0,1], [0,0,1/2,0], [0,1,1/2,1], [1/2,0,1,1/3], [1/2,1,1,2/3], [1,1/3,1,2/3]],
      'C': c,
      'E': f.concat([[0,1,1,1]]),
      'F': f,
      'G': c.concat([[1,0,1,1/3], [1,1,1,2/3], [1,2/3,1/2,2/3]]),
      'H': [[0,0,0,1], [1,0,1,1], [0,1/2,1,1/2]],
      'I': t.concat([[0,1,1,1]]),
      'L': l,
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
    $.ctx.strokeStyle = color;
    //$.ctx.lineJoin = "round";
    // Render each letter
    for (i = 0; i < text.length; i++) {
      letter = this.font[text.charAt(i)];
      // Render each segment of a letter
      //$.ctx.beginPath();
      for (m = 0; m < letter.length; m++) {
        seg = letter[m];
        $.ctx.moveTo(floor(x + offset + (seg[0] * fontWidth)), floor(y + (seg[1] * fontHeight)));
        $.ctx.lineTo(floor(x + offset + (seg[2] * fontWidth)), floor(y + (seg[3] * fontHeight)));
      }
      offset += fontWidth + spacing;
    }
    $.ctx.stroke();
    $.ctx.restore();
  }
}
