<template>
<v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-width="10"
          offset-x
          >
          <template v-slot:activator="{ on, attrs }">
                <v-icon
                light
                v-bind="attrs"
                v-on="on"
                class='pr-2'
                title="adicionar nova track">fa fa-play
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
                <v-select
                label="selecione o album"
                hide-details="auto"
                v-model='track.album_id'
                :items="albums"
                item-text="name"
                item-value="id"
                prepend-icon='fa fa-compact-disc'
                class='pa-2'
                :rules="rules.album"
                persistent-hint
                >
                </v-select>
                <v-time-picker
                format="24hr"
                full-width
                header-color='black'
                :v-model='track.duration'
                scrollable
                use-seconds
                class='pa-4'
                ></v-time-picker>
                <!-- <v-text-field
                  label="duração"
                  hide-details="auto"
                  v-model="track.duration"
                  class='pa-2'
                  light
                  :rules="rules.albumRelease"
                  prepend-icon='fa fa-stopwatch'>                
                </v-text-field> -->
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
      track(){
        return this.$store.state.discography.trackEdit
      },
      albums(){
        return this.$store.state.discography.albums
      },
    },
    data:()=>{
        return {
          search: '',
          addAlbum:false,
          menu:false,
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
            console.log(track);
        }
    }
}
</script>

<style>

</style>