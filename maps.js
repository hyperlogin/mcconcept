(function() {

	window.onload = function() {

		// Creating a new map
		var map = new google.maps.Map(document.getElementById("map"), {
			center: new google.maps.LatLng(37.9303629,-42.5768732),
			disableDefaultUI: true,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: true,
			draggable: true,
			streetViewControl: false,
			disableDoubleClickZoom: true,
			scrollwheel: false,
			zoom: 3,
			mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    var icon = "http://madlab.ca/assets/img/map-icon.png";

		// Creating the JSON data
		var json = {"locations": [
				{
          "location": "MADLAB Group",
          "lat": 49.2673302,
          "lng": -123.079302
        },
        {
          "location": "CrossFit Genesis/Alive Tribe",
          "lat": 38.7325329,
          "lng": -121.2980867
        },
        {
          "location": "Commonwealth CrossFit",
          "lat": 42.3841269,
          "lng": -71.1134142
        },
        {
          "location": "Crossfit Riseabove",
          "lat": 28.1276762,
          "lng": -80.633254
        },
        {
          "location": "CrossFit Committed",
          "lat": 50.1029416,
          "lng": 14.4355941
        }
			]};//JSONend

		// Creating a global infoWindow object that will be reused by all markers
		var infoWindow = new google.maps.InfoWindow();

		// Looping through the JSON data
		for (i = 0, length = json.locations.length; i < length; i++) {

			var data = json.locations[i];
			var address = json.locations[i].address;
			latLng = new google.maps.LatLng(data.lat, data.lng);

			// Creating a marker and putting it on the map
			var marker = new google.maps.Marker({
				position: latLng,
				map: map,
	      icon: icon,
				location: data.location
			});

			// Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
			(function(marker, data) {

				// Attaching a click event to the current marker
				google.maps.event.addListener(marker, "click", function(e) {
					infoWindow.setContent(data.location);
					infoWindow.open(map, marker);
				});

			})(marker, data);

		}

	};

})();
