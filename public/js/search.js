let map;
let locationValue;

async function geocodeAddress(address) {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyBQ2we2dx9nzsbqE4Mh7Icfh9SDgZkqrc4`);
  const data = await response.json();
  

  if (data.results.length > 0) {
    const location = data.results[0].geometry.location;
    return location;
  } else {
    throw new Error("Location not found");
  }
}

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  locationValue  = `${location}, ${city}, ${state}, ${country}`
  const mapLocation = await geocodeAddress(locationValue);

  map = new Map(document.getElementById("map"), {
    center: mapLocation,
    zoom: 13,
  });

  new google.maps.Marker({
    position: mapLocation,
    map: map,
    // title: "Landmark Title"
  });
}

initMap();