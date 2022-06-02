<template>
<v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="20"
          offset-x
          >
          <template v-slot:activator="{ on, attrs }">
                <v-icon
                light
                v-bind="attrs"
                v-on="on"
                size="10"
                title="adicionar nova track">fa fa-plus
                </v-icon>
          </template>
          <v-card>
              <v-list>
              <v-list-item>
                  <v-list-item-avatar rouded color="black">
                      <v-icon color="white"> fa fa-play</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                  <v-list-item-title>Adicionar uma track</v-list-item-title>
                  </v-list-item-content>                
              </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-list>
                <v-text-field
                  label="nome da track"
                  hide-details="auto"
                  v-model="track.name"
                  class='pa-2'
                  light
                  :rules="rules.albumName"
                  prepend-icon='fa fa-play'>                
                </v-text-field>
                <v-text-field
                  label="Ordem da Track"
                  hide-details="auto"
                  type="Number"
                  v-model="track.album_order"
                  class='pa-2'
                  light
                  prepend-icon='fa fa-list-ol'>                
                </v-text-field>
                
                <h3 style='text-align:center'><b>Duração da Track</b></h3>
                <v-time-picker
                format="24hr"
                full-width
                header-color='black'
                v-model='track.duration'
                scrollable
                use-seconds
                use-hours="false"
                ></v-time-picker>
              </v-list>
              <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  text
                  @click="menu = false"
              >
                  Cancelar
              </v-btn>
              <v-btn
                  text
                  @click="newTrack(track)"
              >
                  salvar
              </v-btn>
              </v-card-actions>
          </v-card>
      </v-menu>  
</template>

<script>
export default {
    name:'EditAddTrackComponent',
    computed:{

    },
    props:{
        albumId: Number,
    },
    data:()=>{
        return {
            search: '',
            addAlbum:false,
            menu:false,
            track:{//default
                id:'',
                name:'',
                album_order:1,
                duration:"00:00:00",
                album_id:'',
                artist_id:1,
            },
            rules:{
                album: [
                    val => (val || '').length > 0 || 'necessário informar o nome do album!'
                ],
                name: [
                    val => (val || '').length > 0 || 'necessário informar o lançamento do album!'
                ],
            }
        }
    },
    methods:{
        newTrack(track){
            this.track.album_id = this.albumId;
            console.log(track);
            this.$store.dispatch('addTrack',track);
            this.track = {
                id:'',
                name:'',
                album_order:1,
                duration:"00:00:00",
                album_id:'',
                artist_id:1,
            }
            this.menu = false;
        }
    }
}
</script>

<style>

</style>