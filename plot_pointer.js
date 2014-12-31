function a(numPoints){
    for(var i = 1; i <= numPoints; i++){
    var x = i;
    
    var z = Math.pow(10, 1/x);  //incase exponents are in the equation
        
    var y = 1/(1+z);    //equation
    
    var x1 = i*(-1);

    var y1 = y*(-1);
    
    console.log(x, y);  //replace x w/ x1 & y w/ y1 to get negatives
    }
    
    
    }
    
a(15); //the max. number on the x coordinate (i.e. 1-15)
    
