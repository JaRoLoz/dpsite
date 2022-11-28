<script lang="ts">
    import {
		LeafletMap,
		LeafletMarker,
		LeafletTileLayer
	} from "svelte-leaflet";
	import { toLatLng } from "leaflet/src/geo/LatLng.js";

	let markerLatLng = toLatLng([40.4497600, -3.3451700]);

    let markers: Array<[number, number]> = [];

    for (let i = 0; i < 3; i++) markers.push([Math.random() * 360 - 180, Math.random() * 360 - 180]);
</script>

<LeafletMap style="height: 20rem; width: 20rem;">
	<LeafletTileLayer url={"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"} options={{
		attribution:
			'Mapa de visitantes',
	}} />
	<LeafletMarker bind:latLng={markerLatLng} options={{ draggable: false }} />
    {#each markers as markerCoords}
        <LeafletMarker bind:latLng={markerCoords} options={{ draggable: false }} />
    {/each}
</LeafletMap>