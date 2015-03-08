$( document ).ready(function () {
    $("#navigationSide").html("<div class='col-17of20'>"
    	+ "<nav class='navigation-side'>"
    		+ "<a href='index.html'><img class='logo' src='img/icon/logo.png' alt='Logo'></a>"
	    	+ "<a href='01_about.html' class='navigationButton'>About</a><a href='02_cookies.html' class='navigationButton'>Cookies</a>"
	    	+ "<a href='03_kits.html' class='navigationButton'>Kits</a>"
	    	+ "<a href='04_events.html' class='navigationButton'>Events</a>"
	    	+ "<a href='05_testimonials.html' class='navigationButton'>Testimonials</a>"
	    	+ "<a href='06_contact.html' class='navigationButton'>Contact Us</a>"
    	+ "</nav></div>"
    	+ "<div class='col-3of20' id='navigationSideColor'>"
    	+ "<div id='navigationSideBorder'></div>"
    	+ "</div>");


    $("#topNavigation").html('<nav>'
	    	+ '<a href="06_contact.html" class="navigationButton">contact</a>'
	    	+ '<a href=https://www.facebook.com/frostmebeautiful">'
	    		+ '<img src="img/icon/facebook.png" class="topIcon" alt="Facebook">'
	    	+ '</a>'
	    	+ '<a href="https://instagram.com/frostmebeautiful/">'
	    		+ '<img src="img/icon/instagram.png" class="topIcon" alt="Instagram">'
	    	+ '</a>'
	    	+ '<a href="06_contact.html">'
	    		+ '<img src="img/icon/Gmail.png" class="topIcon" alt="Gmail">'
	    	+ '</a>'
	    	+ '<a href="#"" class="navigationButton">My Account</a>'
	    	+ '<a href="07_order.html" class="navigationButton" id="viewCart">View Cart (0)'
		    	+ '<div class="containerBubble">'
		    		+ '<div class="bubble">item has been added</div>'
		    	+ '</div>'
	    	+ '</a>'
    	+ '</nav>');

    $("#footer").html('<p>All rights reserved Frost Me Beautiful. 121 East 1st Street North Vancouver. Phone: (604) 786-4303. Email: hello@FrostMeBeautiful.com</p>'
	    + '<img src="img/icon/Ornament.png" class="ornament" alt="Ornament">');
});


