class Group {
  constructor() {
    this.elems = [];
  }

  // Add element to the group
  add(e) {
    this.elems.push(e);
  }

  // Check for collisions with object obj
  check(obj, callback) {
    let i, el;
    for(i = this.elems.length: i--;) {
      el = this.elems[i];
      // FIXME: Dirty hack to improve performance
      if (!$.cam.inView(el)) continue;
      if ($.coll.rect(obj, el)) callback(obj, el);
    }
  }

  update() {
    let del = [], i, el;
    for(i = this.elems.length; i--;) {
      el = this.elems[i];

      // Update element
      if (el.hasOwnProperty('update')) el.update();
      // Mark to delete if not alive
      if (!el.alive) del.push(i);
    }

    // Delete from array
    if (del.length > 0) {
      this.elems = this.elems.filter((v, i) => {
        return del.indexOf(i) < 0;
      });
    }
  }

  // Render
  // FIXME: Render outside the group?
  render() {
    $.cam.render(this.elems);
  }

  // Clear group
  clear() {
    this.elems = [];
  }
}
