$(document).ready(function(){

			// Art Balling Generator 550px x 400px
			// Using Loops
			// Variables
			var randomColour;
			var randomSize;
			var xPos;
			
			var yPos;
			var i; // counter
			var j; // counter
			// Get the Canvas element with ID sCanvas that will be drawn on
			c = document.getElementById("sCanvas");
			ctx = c.getContext("2d");
			function drawFilledCircle(size,xPos,yPos,colour){
				ctx.beginPath();
				ctx.arc(xPos,yPos,size,0,2*Math.PI);
				ctx.fillStyle = colour;
				ctx.fill();
				}
			function drawSplatter(size,xPos,yPos,colour){
				for(j=0;j<10;j++){
					var splatSize = size / Math.round(Math.random()*30);
					drawFilledCircle(splatSize,xPos +
					Math.round(Math.random()*50),yPos + Math.round(Math.random()*50),colour);
				}
			}
			
			//Set up random number of circles 
			var randNo = Math.round(Math.random()*20000);
			var count = 0;
			var switch_var = Math.round(Math.random()*2);
			while(count < randNo){
			
				randomColour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
				randomSize = Math.round(Math.random()*50);
				xPos = Math.round(Math.random()*1200);
				yPos = Math.round(Math.random()*800);
				if (switch_var == 1){
					drawFilledCircle(randomSize, xPos, yPos, randomColour)
				} else {
					drawSplatter(randomSize, xPos, yPos, randomColour) 
				};
				count ++;
				switch_var = Math.round(Math.random()*2);
			};
		});
