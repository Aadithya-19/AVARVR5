AFRAME.registerComponent("move-box", {

	schema:{
	
		moveX: {type:"number", default:1},	
		moveY: {type:"number", default:1},
		rotate: {type:"number", default:1},
	},

	tick: function(){

		window.addEventListener("click", (e)=>{
			this.data.moveX = this.data.moveX + 0.005
		})

		var pos = this.el.getAttribute('position');

		var rot = this.el.getAttribute('rotation');
		
		pos.x = this.data.moveX;
		
		pos.y = this.data.moveY;

		rot.x = this.data.rotate;

		this.el.setAttribute("position", {x: pos.x, y : pos.y, z: pos.z});
		this.el.setAttribute("rotation", {x: rot.x, y : rot.y, z: rot.z});

	    },	
    }
)