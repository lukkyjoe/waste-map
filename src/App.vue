<template>
  <v-app>
    <v-main>
      <MRFs/>
    </v-main>
  </v-app>
</template>

<script>
import MRFs from './components/MRFs.vue'

export default {
  name: 'App',

  components: {
    MRFs,
  },

  data: () => ({
    //
  }),
}
</script>
