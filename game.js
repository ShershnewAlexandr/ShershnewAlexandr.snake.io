var pjs = new PointJS("2d",600,400,{
    backgroundColor : "#ccc"
});

var game = pjs.game;
var math = pjs.math;
var vector = pjs.vector;
var cam = pjs.camera;
var key = pjs.keyControl.initKeyControl();
// --- всякое для движка и удобства

var text = game.newTextObject( { 
  x : 100, 
  y : 100, 
  text : "Привет, мир!", 
  size : 20, 
  padding : 10, 
  color : "#000000", 
  fillColor : "#FBFE6F", 
  strokeColor : "#DA4848", 
  strokeWidth : 2, 
});;
  // VK.init(function() { 
  //       console.log("yra zarobotolo");
  //       VK.api("users.get",{"fields":"photo_50"},function(data){
  //           text = game.newTextObject({
  //               x: 10, y: 10,
  //               fillColor: "#000000",
  //               text: data.response[0].first_name 
  //           });
  //       });
  //    }, function() { 
  //       console.log("lol");
  //    }, '5.63'); 


var lp1 = function(){
    game.clear();
    text.draw();
}

  game.newLoop("lp1",lp1);
  game.startLoop("lp1");