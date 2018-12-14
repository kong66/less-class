{
  install: function(less, pluginManager, functions) {
    functions.add('hello', function() {
        return Math.PI;
    });
  }
}
