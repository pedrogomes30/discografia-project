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
    padding-left: 7%;
    padding-right: 7%;
    padding-top: 5%;
    padding-bottom: 5%;
    height: 100vh;
    width: 100vw;
    background-image: url("./assets/background.png");
    background-size: cover;
    background-position: center
  }
</style>
