<template>
  <v-app>
    <v-main>
      <MRFs/>
      <v-checkbox
        v-model="ex4"
        label="MRFs"
        color="green"
        value="red"
      >
      </v-checkbox>
      <v-checkbox
        v-model="ex5"
        label="manufacturers"
        color="blue"
        value="red"
      >
      </v-checkbox>
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
    ex4: 'red',
    ex5: 'red'
  }),
})
</script>
