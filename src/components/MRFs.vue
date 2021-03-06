<template>
  <div style="height: 75vh; width: 100%;">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[33.5265212, -86.777367]"
    >
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker
        v-for="facility in renderedFacilities"
        :lat-lng="facility['lat-lng']"
        :icon="facility.icon"
      >
        <l-popup>
          <div>name: {{ facility.name }}</div>
          <div>type: {{ facility.type }}</div>
          <div v-if="facility.operator">operator: {{ facility.operator }}</div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>
<script lang="ts">
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { icon as LeafletIcon } from 'leaflet'
import { defineComponent } from "vue";
import Facility from '../types/Facility'
import axios from 'axios'

interface ComponentData {
  zoom: number,
  iconWidth: number,
  iconHeight: number,
  facilities: Facility[],
}

interface RenderedFacility extends Facility {
  icon: any
}

const FACILITY_ICON_URL_MAP = {
  'MRF': 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  'Manufacturer': 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  'Collection': 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png'
}

export default defineComponent({
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  },
  props: {
    selectedFacilityTypes: Array,
  },
  data(): ComponentData {
    return {
      zoom: 3,
      iconWidth: 25,
      iconHeight: 40,
      facilities: [
        {
          name: 'Birmingham Recycling and Recovery',
          type: 'MRF',
          operator: 'Birmingham',
          'lat-lng': [33.5265212, -86.777367]
        },
        {
          name: 'City of Conway',
          type: 'MRF',
          'lat-lng': [35.0887, -92.4421]
        },
        {
          name: 'City of Glendale',
          type: 'Manufacturer',
          'lat-lng': [33.5387, -112.1860]
        }

      ]
    };
  },
  mounted() {
    console.log('inside mounted hook')
    axios('/.netlify/functions/hello').then(({data}) => this.facilities = data).catch(err => console.error(err))
  },
  computed: {
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
    renderedFacilities(): RenderedFacility[] {
      const filteredFacilities = this.facilities.filter(({type}) => this.selectedFacilityTypesStrings.includes(type))
      return filteredFacilities.map((facility: RenderedFacility) => {

        const icon = LeafletIcon({
        iconUrl: FACILITY_ICON_URL_MAP[facility.type],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
        return {
          icon,
          ...facility,
        }
      })
    },
    selectedFacilityTypesStrings() {
      return this.selectedFacilityTypes.filter(({checked}) => checked).map(({label}) => label)
    }
    // filteredRenderedFacilities(): RenderedFacility[] {
      
    // }
  },
  methods: {
  },
})
</script>