<template>
  <v-card class='rounded-0 pa-0 ma-0' style="background: rgba(255, 255, 255, 0.3);" >
    <div class='pa-4' style="background: rgba(255, 255, 255, 1);">
      <v-card-title >
        <v-row align-self='end' align-content='center' class='pa-3'>
          <v-col cols='2'>
            <v-img 
              src="../assets/logo.png"
              height='80px'
              widht='50px'>          
            </v-img>
          </v-col>
          <v-col cols='10' align-self="end" style='text-align:end;'>
            <h2>DISCOGRAFIA</h2>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-item>
        <v-list-item-avatar rouded color="var(--primary">
            <v-icon color="white"> fa fa-boxes</v-icon>
        </v-list-item-avatar>
        <v-spacer></v-spacer>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Procure um album/musica"
        single-line
        dense
        @keyup.enter="searchProduct(search)">
        ></v-text-field>
      </v-card-item>
    </div>
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
  
</style>
