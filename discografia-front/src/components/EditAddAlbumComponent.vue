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
                title="adicionar novo álbum">fa fa-plus
                </v-icon>
          </template>
          <v-card>
              <v-list>
              <v-list-item>
                  <v-list-item-avatar rouded color="black">
                      <v-icon color="white"> fa fa-compact-disc</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                  <v-list-item-title>Adicionar album</v-list-item-title>
                  </v-list-item-content>                
              </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-list>
                <v-text-field
                  label="nome do album"
                  hide-details="auto"
                  v-model="album.name"
                  class='pa-2'
                  light
                  :rules="rules.albumName"
                  prepend-icon='fa fa-compact-disc'>                
                </v-text-field>
                <v-date-picker 
                v-model="album.release_date"
                color="black"
                locale="pt-br"
                class='pa-4'>
                </v-date-picker>
                <!-- <v-text-field
                  label="lançamento do album"
                  hide-details="auto"
                  v-model="album.release_date"
                  class='pa-2'
                  light
                  :rules="rules.albumRelease"
                  prepend-icon='fa fa-calendar'>                
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
                  @click="newAlbum(album)"
              >
                  salvar
              </v-btn>
              </v-card-actions>
          </v-card>
      </v-menu>  
</template>

<script>
export default {
    name:'EditAddAlbumComponent',
    computed:{
      album(){
        return this.$store.state.discography.albumEdit
      },
    },
    data:()=>{
        return {
          search: '',
          addAlbum:false,
          menu:false,
          rules:{
                albumName: [
                    val => (val || '').length > 0 || 'necessário informar o nome do album!'
                ],
                albumRelease: [
                    val => (val || '').length > 0 || 'necessário informar o lançamento do album!'
                ],
            }
        }
    },
    methods:{
        newAlbum(album){
            console.log(album);
        }
    }
}
</script>

<style>

</style>