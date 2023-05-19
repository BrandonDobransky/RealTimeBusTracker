mapboxgl.accessToken = 'YOUR ACCESS KEY'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-73.990292,40.731342],
    zoom: 13
})

var marker = new mapboxgl.Marker()
    .setLngLat([-73.990292,40.731342])
    .addTo(map);


    const Stops = [
        [-73.990292, 40.731342],
        [-73.989958, 40.732608],
        [-73.98972, 40.7339360],
        [-73.987053, 40.738976],
        [-73.967483, 40.768812],
        [-73.966558, 40.770075],
        [-73.965308, 40.771802],
        [-73.96461, 40.772774],
        [-73.962739, 40.775322],
        [-73.960206, 40.778793],
        [-73.958483, 40.781155],
        [-73.957373, 40.782676],
        [-73.956137, 40.78436],
        [-73.955205, 40.785636],
        [-73.95318, 40.788413],
        [-73.951799, 40.790304],
        [-73.951022, 40.791371]
    ]

    var counter = 0;
    function run(){
        setTimeout(() =>{
            if (counter >= Stops.length) return;
            marker.setLngLat(Stops[counter]);
            counter++;
            run();
        }, 1500);
    }

async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);

	// timer
	setTimeout(run, 30000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'm1 route api??!!??';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();
