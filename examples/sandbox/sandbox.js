(function(global, document) {
  let k3j = K3J.build(global, document);

  var scene = new GameScene(k3j);
  scene.start();
})(window, window.document);