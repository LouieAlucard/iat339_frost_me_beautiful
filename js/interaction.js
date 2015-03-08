var cartNum = 0;

function showNotif() {
	cartNum ++;
	

	var cart = document.getElementById("viewCart");


	cart.innerHTML = "View Cart (" + cartNum  +")"
		    	+ "<div class='containerBubble'>"
		    		+ "<div class='bubble'>item has been added</div>"
		    	+ "</div>";

	var bubble = document.getElementsByClassName("bubble")[0];
	fadeIn(bubble);

	setTimeout(function(){
		fadeOut(bubble);

    },3000); 
}


function fadeOut(el){
	el.style.opacity = 1;

	(function fade() {
		if ((el.style.opacity -= .05) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
}

function fadeIn(el, display){
	el.style.opacity = 0;
	el.style.display = display || "block";

	(function fade() {
	    var val = parseFloat(el.style.opacity);
	    if (!((val += .05) > 1)) {
	      el.style.opacity = val;
	      requestAnimationFrame(fade);
	 	}
	 })();
}
