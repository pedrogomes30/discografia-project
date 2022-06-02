<template>
  <v-card class='rounded-0 pa-0 ma-0' style="background: rgba(255, 255, 255, 0.5);" >
    <div class='pa-4' style="background: rgba(255, 255, 255, 1);">
      <div >
        <v-row align-self='end' align-content='center' class='pa-3'>
          <v-col cols='2'>
            <v-img 
              src="../assets/logo.png"
              height='80px'
              widht='50px'>          
            </v-img>
          </v-col>
          <v-col cols='10' align-self="center" style='text-align:end;'>
            <h1>DISCOGRAFIA</h1>
          </v-col>
        </v-row>
      </div>
    </div>
    <ListAlbumComponent />
  </v-card>
</template>

<script>
  import ListAlbumComponent from '../components/ListAlbumComponent'
  

  export default {
    name: 'HomeView',
    computed:{
      artist(){
        return this.$store.state.artist
      },
    },
    components: {
      ListAlbumComponent,
    },
  }
</script>
<style >
  
</style>
