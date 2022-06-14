AFRAME.registerComponent("gameobject", {
    init: function () {
      //starting x position
      posX = -20;
      //starting z-position
      posZ = 10;
  
      for (var i = 0; i < 8; i++) {
        //create wire-fence entity
        var drone1 = document.createElement("a-entity");
        var drone2 = document.createElement("a-entity");
        var drone3 = document.createElement("a-entity");
        var drone4 = document.createElement("a-entity");
  
  
        //set x, y and z position
     posX=Math.random()*200-100
     posY=Math.random()*20-7
     posZ=Math.random()*200-100
  
        //scale 
        var scale = { x: 0.1, y: 0.1, z: 0.1};
  
        //set the id
        drone1.setAttribute("id", "drone1" + i);
        drone2.setAttribute("id", "drone2" + i);
        drone3.setAttribute("id", "drone3" + i);
        drone4.setAttribute("id", "drone4" + i);
  
        //set the position
        drone1.setAttribute("position", { x: posX, y: 3, z: -35 });
        drone2.setAttribute("position", { x: posX, y: 1, z: 85 });
        drone3.setAttribute("position", { x: -30, y: 0.5, z: posZ });
        drone4.setAttribute("position", { x: 50, y: 4.1, z: posZ });
  
        //set the scale
        drone1.setAttribute("scale", scale);
        drone2.setAttribute("scale", scale);
        drone3.setAttribute("scale", scale);
        drone4.setAttribute("scale", scale);
  
        //set the model
        drone1.setAttribute(
          "gltf-model",
          "./mini_drone_model/scene.gltf"
        );
  
        drone2.setAttribute(
          "gltf-model",
          "./mini_drone_model/scene.gltf"
        );
  
        drone3.setAttribute(
          "gltf-model",
          "./mini_drone_model/scene.gltf"
        );
  
        drone4.setAttribute(
          "gltf-model",
          "./mini_drone_model/scene.gltf"
        );
  
        //set the rotation
        drone3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
        drone4.setAttribute("rotation", { x: 0, y: 90, z: 0 });
  
        //set the physics body
        drone1.setAttribute("static-body", {});
        drone2.setAttribute("static-body", {});
        drone3.setAttribute("static-body", {});
        drone4.setAttribute("static-body", {});
  
        var sceneEl = document.querySelector("#scene");
        //attach the entity to the scene
        sceneEl.appendChild(drone1);
        sceneEl.appendChild(drone2);
        sceneEl.appendChild(drone3);
        sceneEl.appendChild(drone4);
  
      }
    },
  });