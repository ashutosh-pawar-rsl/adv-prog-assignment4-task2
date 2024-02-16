require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Legend", // Add Legend module
  "esri/widgets/Home",
  "esri/widgets/LayerList", // Add LayerList module
  "dojo/domReady!"
], function(WebScene, SceneView, Camera, LayerList, Home, Legend) {
  
  var scene = new WebScene({
    portalItem: {
      id: "8046207c1c214b5587230f5e5f8efc77" 
    }
  });
  
  var camera = new Camera({
    position: [
      -71.060217, // lon
      42.382655,  // lat
      2500        // elevation in meters
    ],
    tilt: 45,
    heading: 180
  });
  
  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    camera: camera
  });
  
  // Add Legend and Layer List widgets when the view is ready
  view.when(function() {
    var featureLayer = scene.layers.getItemAt(1); // Adjust this index based on your scene's layer
        var homeBtn = new Home({
    view: view
  });
  
  // Add the home button to the top left corner of the view
  view.ui.add(homeBtn, "top-left");
    
    
    var legend = new Legend({
      view: view,
      layerInfos: [{
        layer: featureLayer,
        title: "Major project buildings"
      }]
    });
        view.ui.add(legend, "bottom-right");

    var layerList = new LayerList({
      view: view
    });
    
    // Add layerList to the UI
    view.ui.add(layerList, "bottom-right");
  });
  


});
