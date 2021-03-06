var pipe = require("../entities/pipe.js");

var PipeSystem= function(entities){
  this.entities=entities;
};

PipeSystem.prototype.run= function(){
  for (var i=0; i<5; i++){
    this.tick();
  }
};

PipeSystem.prototype.tick = function(){
  for (var i=0; i<this.entities.length; i++){
    var entity = this.entities[i];
    if ('graphics' in entity.components) entity.components.graphics.draw(this.context);
  }
};

exports.PipeSystem = PipeSystem;
