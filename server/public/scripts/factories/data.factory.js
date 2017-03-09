colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];

  function addingNewColorToFactoryArray(newColor){
    colors.push(newColor);
  }

  // public API
  return {
    colorsArray: colors,
    addNew: addingNewColorToFactoryArray
  }

}]);
