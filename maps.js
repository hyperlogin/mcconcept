var myCenter = new google.maps.LatLng(1.319135,103.8629299);
function initialize() {
  var bounds = new google.maps.LatLngBounds();
  var mapProp = {
    center: myCenter,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);
  var infoWindowContent = [
        ['<b><u>MC Concept Mobile,<br>Boon Keng Retail Outlet</u></b><br><br>25 Bendemeer Road<br>#01-603, Singapore 330025<br>(beside MoneyMax)<br>Boon Keng MRT Station Exit B<br><br>Tel: +65 6391 9925'],
        ['<b><u>MC Concept Mobile,<br>Geylang Retail Outlet</u></b><br><br>198 Geylang Road<br>#02-01, Singapore 389263<br>Lorong 6 Geylang (Main Road)<br><br>Tel: +65 6291 2645 / 6391 9925']
    ];
  var markers = [
        ['Boon Keng (Retail Outlet)', 1.319135,103.8629299],
        ['Geylang Keng (Retail Outlet)', 1.3104433,103.8750213]
   ];
  
  // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            animation: google.maps.Animation.DROP,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
                toggleBounce(marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
}
function toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
google.maps.event.addDomListener(window, 'load', initialize);
