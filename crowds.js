AFRAME.registerComponent('model-subset', {
    schema: {
      target: {default: '', type: 'selector'},
      name: {default: ''}
    },
    init: function () {
      var el = this.el;
      var data = this.data;
      data.target.addEventListener('model-loaded', function (e) {
        var model = e.detail.model;
        var subset = model.getObjectByName(/Assets/char_dancing/scene.gltf);
        el.setObject3D('mesh', subset.clone());
      });
    },
    update: function () { /* ... */ },
    remove: function () { /* ... */ }
  });