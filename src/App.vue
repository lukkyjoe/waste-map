<template>
  <v-app>
    <v-main>
      <MRFs />
      <span>Included categories</span>
      <v-checkbox v-for="box in checkboxes" v-model="box.checked" :label="box.label"></v-checkbox>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MRFs from './components/MRFs.vue'

export default defineComponent({
  name: 'App',

  components: {
    MRFs,
  },

  data: () => ({
    checkboxes: [{label: 'MRF', checked: true}, {label: 'Manufacturer', checked: true}, {label: 'Collection', checked: true}]
  }),
})
</script>
