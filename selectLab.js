"use strict";

document.observe("dom:loaded", function() {

	var imgs = $$("#labs img");
	for(var $i=0;$i<imgs.length;$i++)
	{
		 new Draggable(imgs[$i],{revert: true});
	}
	  	
	Droppables.add("selectpad",  {onDrop: labSelect });
	Droppables.add("labs",  {onDrop: labSelect });
	
	
});

function labSelect(drag, drop, event) {

	 
	if(drop.id=="selectpad")
	{
		 
		var $a=true;
		 
		var $lis=$$("#selection li");
		for(var $i=0;$i<$lis.length;$i++)
		{
			if($lis[$i].childNodes[0].innerHTML == drag.alt)
			{

				$a=false;
			}
		}
			 
		if($a===true)
		{
			 
			var size=$$("#selectpad img").length;
			if(size<3)
			{
			
				var imgs = $$("#labs img");
				var $i;
				for($i=0;$i<imgs.length;$i++)
				{
				
					if(imgs[$i].alt == drag.alt)
					{
				
						document.createElement("img");
						imgs[$i].remove();
					}
				}
				

				var newImg = document.createElement("img");
				newImg=drag;
				document.getElementById("selectpad").appendChild(newImg);
				new Draggable(newImg,{revert: true});
				
				var li = document.createElement("li");
				var p = document.createElement("p");
				var img = document.createElement("img");
				img.src=drag.src;
				img.alt=drag.alt;
				p.innerHTML = drag.alt;
				li.appendChild(p);
				li.appendChild(img);
				document.getElementById("selection").appendChild(li);
				
				setTimeout(function(){
					
				li.pulsate({
				duration: 1.0, 
				pulses: 2
				});
				
				}, 500);

			}
		}
	}
	else{

		var imgs = $$("#selectpad img");
		var $i;
		for($i=0;$i<imgs.length;$i++)
		{
		
			if(imgs[$i].alt == drag.alt)
			{
		
				document.createElement("img");
				imgs[$i].remove();
			}
		}
		

		var newImg = document.createElement("img");
		newImg=drag;
		document.getElementById("labs").appendChild(newImg);
		new Draggable(newImg,{revert: true});
		

		var $lis=$$("#selection li");
		for(var $i=0;$i<$lis.length;$i++)
		{
			if($lis[$i].childNodes[0].innerHTML == drag.alt)
			{

				$lis[$i].remove();
			}
		}
	
		
	}

}

