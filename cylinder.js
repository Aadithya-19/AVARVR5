AFRAME.registerComponent("move-cylinder", {

	schema:{
	
		moveY: {type:"number", default:1},
	},

	tick: function(){


		var pos = this.el.getAttribute('position');

        this.data.moveY = this.data.moveY+0.01;
		
		pos.y = this.data.moveY;
;

		this.el.setAttribute("position", {x: pos.x, y : pos.y, z: pos.z});

	    },	
    }
)

AFRAME.registerComponent("ejection", {

	schema:{
	
		moveY: {type:"number", default:1},
		
	},

	tick: function(){

		window.addEventListener("click", (e)=>{
			this.data.moveY = this.data.moveY - 0.01
		})

		var pos = this.el.getAttribute('position');
		
		pos.y = 1+this.data.moveY;

		this.el.setAttribute("position", {x: pos.x, y : pos.y, z: pos.z});

	    },	
    }
)

AFRAME.registerComponent("zoomout", {

	schema:{
	
		moveZ: {type:"number", default:1},	
	},

	tick: function(){


		this.data.moveZ = this.data.moveZ+0.01;

		var pos = this.el.getAttribute('position');


		pos.z = this.data.moveZ;

		this.el.setAttribute("position", {x: pos.x, y : pos.y, z: pos.z});

	    },	
    }
)