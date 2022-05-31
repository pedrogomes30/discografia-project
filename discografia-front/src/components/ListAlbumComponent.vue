<template>
  <v-card style="background: rgba(255, 255, 255, 0.0);">
    <v-row class='pa-6' >
      <EditAddAlbumComponent />
      <EditAddTrackComponent />
      <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Procure um album..."
      single-line
      dense
      >
      </v-text-field>
    </v-row>
    <v-data-table   
        :items="albums"
        :search="search" 
        fixed-header
        :headers="headerAlbum"
        calculate-widths
        hide-default-footer
        hide-default-header
        dense                
        :items-per-page="-1"
        style="height: 65vh;background-color: rgba(255, 255, 255, 0.0);"
        class="overflow-y-auto pa-3"
        >
        <template  v-slot:item="row" >
            <tr @click='detailAlbum(row.item)'>
                <td class='ma-0 pa-0 pr-1'>
                  <v-icon size="20" color="black">fa fa-compact-disc</v-icon>
                  {{row.item.name}},{{returnYearRelease(row.item.release_date)}}
                  <v-list dense style="background-color: rgba(255, 255, 255, 0.0);" rounded>
                    <v-list-item
                      v-for="track in row.item.tracks"
                      :key="track.id"
                      @click='detailTrack(track)'
                    >
                      <v-list-item-icon>
                        <v-icon size="15" color="black">fa fa-play</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-row class='pa-4'>
                          <span>{{ track.name }}</span>
                          <v-icon size="10" color="black" class='pl-3' title="excluir track" @click="deleteTrack(track)">fa fa-trash</v-icon>
                          <v-spacer></v-spacer>
                          <span>{{ track.duration }}</span>
                        </v-row>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </td>
            </tr>
        </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { format } from 'date-fns'
import EditAddAlbumComponent from '../components/EditAddAlbumComponent.vue'
import EditAddTrackComponent from '../components/EditAddTrackComponent.vue'
  export default {
    name: 'ListAlbumComponent',
    computed:{
      albums(){
        return this.$store.state.discography.albums
      },
      albumEdit(){
        return this.$store.state.discography.albumEdit
      },
      trackEdit(){
        return this.$store.state.discography.trackEdit
      },
    },
    data:()=>{
      return {
        search: '',
        headerTrack:[
          { text: 'name',align: 'start',sortable: false,value: 'album_order'},
          { text: 'faixa',align: 'start',sortable: false,value: 'name'},
          { text: 'durção',align:'start',sortable: false,value: 'duration' },
        ],
        headerAlbum:[
          { text: 'name',align: 'start',sortable: false,value: 'name'},
        ],
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
    beforeMount(){
        console.log("em dispach")
        this.$store.dispatch('getAlbums');
    },
    methods:{
      returnYearRelease(dateTime){
        return format(new Date(dateTime), "yyyy")
      },
      detailAlbum(row){
        return row;
      },
      detailTrack(row){
        return row
      },
      deleteAlbum(row){
        return row
      },
      deleteTrack(row){
        return row
      },
    },
    components: {
      EditAddAlbumComponent,
      EditAddTrackComponent,
    },
  }
</script>
