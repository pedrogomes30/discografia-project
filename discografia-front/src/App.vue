<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
  #app{
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1%;
    padding-bottom: 1%;
    height: 100vh;
    width: 100vw;
    background-image: url("./assets/background.png");
    background-size: cover;
    background-position: center
  }
</style>
