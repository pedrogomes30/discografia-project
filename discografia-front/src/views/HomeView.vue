<template>
  <v-card class='rouded-0'>
    <AlbumsComponent />
  </v-card>
</template>

<script>
  import AlbumsComponent from '../components/AlbumsComponent'

  export default {
    name: 'HomeView',
    computed:{
      artist(){
        return this.$store.state.artist
      },
    },
    components: {
      AlbumsComponent,
    },
    onCreate:{
      updateAlbums(){

      }
    }
  }
</script>
<style >
  #app{
    padding:10%
  }
</style>
