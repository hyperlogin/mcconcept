var myCenter = new google.maps.LatLng(1.319135,103.8629299);
function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);
  var infowindowBK = new google.maps.InfoWindow({
          content: "MC Concept Mobile"
        });
  var infowindowGL = new google.maps.InfoWindow({
        content:"Another info here"
  });
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.DROP
  });
  
  var marker2 = new google.maps.Market({
    position: {1.3104433,103.8750213},
    animation:google.maps.Animation.DROP
  });
  
  marker.addListener('click', function()
  {
    infowindowBK.open(map, marker);
    toggleBounce();
  });
  
  marker2.addListener('click', function()
  {
    infowindowGL.open(map, marker2);
    toggleBounce();
  });
  
  marker.setMap(map);
  marker2.setMap(map);
}
function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
google.maps.event.addDomListener(window, 'load', initialize);
