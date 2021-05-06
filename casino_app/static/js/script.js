$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


jQuery('.link-details').click(function () {
	event.preventDefault();
	jQuery(this).toggle();
	jQuery(this).next().toggle();
});


// set up google map
function initMap() {
	// Map options
    var options = {
        zoom: 4,
        center: { lat: 50.431759, lng: 30.517023 },
    }

    // New map
    var map = new
    google.maps.Map(document.getElementById('map'), options);

	addMarker({
		coords: {lat: 50.431759, lng: 30.517023},
		content: '<h6>Kyiv, Cyber Slots</h3>'
	});
	addMarker({
		coords: {lat: 49.842957, lng: 24.031111},
		content: '<h6>Lviv, Cyber Slots</h3>'
	});
	addMarker({
		coords:{lat: 49.988358, lng: 36.232845},
		content: '<h6>Kharkiv, Cyber Slots</h3>'
	});

    function addMarker(props) {
    	var marker = new google.maps.Marker({
	    	position:props.coords,
	    	map: map
	    });

	    if (props.content) {
			var infoWindow = new google.maps.InfoWindow({
		    	content: props.content
		    });

		    marker.addListener('click', function(){
		    	infoWindow.open(map, marker);
		    });
	    }

	    if (props.iconImage) {

	    }
    }
}
