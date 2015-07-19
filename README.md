**GetRect**
-------
A convenience object for easily manipulating rectangles in JavaScript

Usage
----------

    //	Instantation
    
    var rect = new Rect(x, y, width, height);
    var rect = Rect.from({ x: 0, y: 0, width: 0, height: 0 });
    var rect = Rect.from({ top: 0, left: 0, width: 0, height: 0 });
    var rect = Rect.from({ right: 0, bottom: 0, width: 0, height: 0 });
    
    //	Size
    
    rect.resizeBy(100, 100); // increases width and height by 100px
    rect.setSize(100, 100); // sets width and height to 100px
    
    //	 Position
    
    rect.offsetBy(100, 100); // offsets current x & y by 100px
    rect.setPosition(100, 100); // sets current x & y to 100px
    
    //	Getters
    
    var x = rect.x; /* or */ var x = rect.left;
    var right = rect.right; // == rect.x + rect.width
    
    var y = rect.y; /* or */ var y = rect.top;
    var bottom = rect.bottom; // == rect.y + rect.height
    
    var width = rect.width;
    var height = rect.height;
