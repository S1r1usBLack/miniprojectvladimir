<template>
 <div>
    <v-overlay :value="loading">
      <v-progress-circular :size="70" :width="7" indeterminate></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "CustomLaoding",
  data(){
    return {
      loading: false,
    }
  }
}
</script>

<style scoped>

</style>