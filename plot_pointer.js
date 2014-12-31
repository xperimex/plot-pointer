function a(numPoints){
    for(var i = 1; i <= numPoints; i++){
    var x = i;
    
    var z = Math.pow(10, 1/x);
        
    var y = 1/(1+z);
    
    var x1 = i*(-1);

    var y1 = y*(-1);
    
    console.log(x, y);  //replace x w/ x1 & z w/ y1 to get negatives
    }
    
    
    }
    
a(15);
    