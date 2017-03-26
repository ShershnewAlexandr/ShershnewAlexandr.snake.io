  VK.init(function() { 
        console.log("yra zarobotolo");
        VK.api("users.get",{"fields":"photo_50"},function(data){
            console.log(data.response[0]);
        });
     }, function() { 
        console.log("lol");
     }, '5.63'); 