(function(global, document) {
  let collision = new Collision();
  let targetElement = document.body
  let input = Input.build(targetElement);
  let k3j = new K3J(window, window.document, input, collision);
  k3j.canvas = document.querySelector('canvas');
  k3j.addHandlers();
})(window, window.document);