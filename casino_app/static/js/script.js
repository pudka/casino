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
        zoom: 6,
        center: { lat: 48.383022, lng: 31.1828699 },
    }

    // New map
    var map = new
    google.maps.Map(document.getElementById('map'), options);
    var location = document.getElementById('select_location').value;

    showDetailsLocation();
    setLocation();

    function showDetailsLocation(){
    	switch(location) {
			case 'all':
				showElementById('ZirkaHotel_Kirovograd');
				showElementById('RoyalGrandHotel_Kyiv');
				showElementById('ZenithHotel_Odessa');
				break;
			case 'Odeska':
				showElementById('ZenithHotel_Odessa');
				hideElementById('RoyalGrandHotel_Kyiv');
				hideElementById('ZirkaHotel_Kirovograd');
				break;
			case 'Kyivska':
				showElementById('RoyalGrandHotel_Kyiv');
				hideElementById('ZenithHotel_Odessa');
				hideElementById('ZirkaHotel_Kirovograd');
				break;
		}
    }

    function showElementById(id){
		document.getElementById(id).hidden = false;
    }

    function hideElementById(id){
    	document.getElementById(id).hidden = true;
    }

    function setLocation() {
		switch(location) {
			case 'all':
				addMarker({
					coords: {lat: 48.51649271602329, lng: 32.26452466947545},
					content: '<p>Cyber Slots in Zirka Hotel, Kirovograd</p>'
				});
				addMarker({
					coords: {lat: 50.44671781005228, lng: 30.50906041372692},
					content: '<p>Cyber Slots in Royal Grand Hotel, Kyiv</p>'
				});
				addMarker({
					coords: {lat: 46.47128011885416, lng: 30.7385034405681},
					content: '<h6>Cyber Slots in Zenith Hotel, Odessa</h3>'
				});
				break;
			case 'Odeska':
				addMarker({
					coords: {lat: 46.47128011885416, lng: 30.7385034405681},
					content: '<h6>Cyber Slots in Zenith Hotel, Odessa</h3>'
				});
				break;
			case 'Kyivska':
				addMarker({
					coords: {lat: 50.44671781005228, lng: 30.50906041372692},
					content: '<p>Cyber Slots in Royal Grand Hotel, Kyiv</p>'
				});
				break;
			case 'Kirovogradska':
				addMarker({
					coords: {lat: 48.51649271602329, lng: 32.26452466947545},
					content: '<p>Cyber Slots in Zirka Hotel, Kirovograd</p>'
				});
				break;
		}
    }

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
