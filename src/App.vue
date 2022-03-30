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
