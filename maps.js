var myCenter = new google.maps.LatLng(1.319135,103.8629299);
function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);
  var infowindow = new google.maps.InfoWindow({
          content: "MC Concept Mobile"
        });
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.DROP
  });
  marker.addListener('click', function()
  {
    infowindow.open(map, marker);
    toggleBounce();
  });
  marker.setMap(map);
}
function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
google.maps.event.addDomListener(window, 'load', initialize);
