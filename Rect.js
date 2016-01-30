var Rect = function(x, y, width, height){
	var geo = {}, self = this;

	var parseNum = function(num){
		return parseFloat(num) || 0;
	};

	//	Properties

	var defineCoordinateVariable = function(propertyName, initialValue){
		Object.defineProperty(self, propertyName, {
			get: function(){ return geo[propertyName]; },
			set: function(value){
				geo[propertyName] = parseNum(value);
			},
			configurable: false, enumerable: true
		});

		if(typeof initialValue != "undefined"){
			geo[propertyName] = initialValue;
		} else {
			geo[propertyName] = 0;
		}
	};

	defineCoordinateVariable("x", x);
	defineCoordinateVariable("y", y);
	defineCoordinateVariable("width", width);
	defineCoordinateVariable("height", height);

	Object.defineProperty(this, "right", {
		get: function(){ return geo.x+geo.width; },
		set: function(value){
			geo.x = parseNum(value)-geo.width;
		},
		configurable: false, enumerable: true
	});

	Object.defineProperty(this, "left", {
		get: function(){ return geo.x; },
		set: function(value){
			geo.x = parseNum(value);
		},
		configurable: false, enumerable: true
	});

	Object.defineProperty(this, "top", {
		get: function(){ return geo.y; },
		set: function(value){
			geo.y = parseNum(value);
		},
		configurable: false, enumerable: true
	});

	Object.defineProperty(this, "bottom", {
		get: function(){ return geo.y+geo.height; },
		set: function(value){
			geo.y = parseNum(value)-geo.height;
		},
		configurable: false, enumerable: true
	});

	Object.defineProperty(this, "midX", {
		get: function(){ return geo.x + (geo.width / 2); },
		set: function(value){
			geo.x = parseNum(value) - (geo.width / 2);
		},
		configurable: false, enumerable: true
	});

	Object.defineProperty(this, "midY", {
		get: function(){ return geo.y + (geo.height / 2); },
		set: function(value){
			geo.y = parseNum(value) - (geo.height / 2);
		},
		configurable: false, enumerable: true
	});
};

Rect.prototype.resizeBy = function(widthDiff, heightDiff){
	if(typeof widthDiff != "undefined") this.width += widthDiff;
	if(typeof heightDiff != "undefined") this.height += heightDiff;

	return this;
};

Rect.prototype.offsetBy = function(xDiff, yDiff){
	if(typeof xDiff != "undefined") this.x += xDiff;
	if(typeof yDiff != "undefined") this.y += yDiff;

	return this;
};

Rect.prototype.setSize = function(width, height){
	if(typeof width != "undefined") this.width = width;
	if(typeof height != "undefined") this.height = height;

	return this;
};

Rect.prototype.setPosition = function(x, y){
	if(typeof x != "undefined") this.x = x;
	if(typeof y != "undefined") this.y = y;

	return this;
};
