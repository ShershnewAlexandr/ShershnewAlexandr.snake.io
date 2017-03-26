var pjs = new PointJS("2d",600,400,{
    backgroundColor : "#ccc"
});

var game = pjs.game;
var math = pjs.math;
var vector = pjs.vector;
var cam = pjs.camera;
var key = pjs.keyControl.initKeyControl();
// --- всякое для движка и удобства



  VK.init(function() { 
        console.log("yra zarobotolo");
        VK.api("users.get",{"fields":"photo_50"},function(data){
            console.log(data.response[0]);
        });
     }, function() { 
        console.log("lol");
     }, '5.63'); 

var lp1 = function(){
    console.log(7);
}

  game.newLoop("lp1",lp1);
  game.startLoop("lp1");