<template>
  <v-card style="background: rgba(255, 255, 255, 0.3);">
    <v-data-table   
        :items="albums"
        :search="search" 
        :headers="header"
        fixed-header
        calculate-widths
        dense                
        :items-per-page="50"
        style="height: 65vh;background-color: rgba(255, 255, 255, 0.3);"
        class="overflow-y-auto"
        >
        <template  v-slot:item="row" >
            <tr @click='detailTrack(row.item)'>
                <td><v-icon size="20" color="var(--primary)"   >fa fa-box </v-icon>
                </td>
                <td class='ma-0 pa-0 pr-1'>{{row.item.SKU}}</td>
                <td class='ma-0 pa-0'>{{row.item.descricao}} {{row.item.desc_variacao}}</td>
                <td class='ma-0 pa-0'><v-chip v-if="haveChips(row.item)" class='ma-1' color="var(--primary)" dark>{{row.item.marca}} {{row.item.fornecedor}}</v-chip></td>
                <td class='ma-0 pa-0'><v-chip class='ma-1' :color="changeColorCategory(row.item.categoria_produto)">{{row.item.categoria_produto}}</v-chip></td>
                <td class='ma-0 pa-0 justify-center'><b>{{noPrice(row.item.preco)}}</b></td>
            </tr>
        </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    name: 'AlbumsComponent',
    computed:{
      albums(){
        return this.$store.state.albums
      },
    },
    data: () => ({
      search:'',
    }),
  }
</script>
