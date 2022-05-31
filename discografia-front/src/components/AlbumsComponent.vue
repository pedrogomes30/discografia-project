<template>
  <v-container>
    <v-card-title>
      <v-row align-self='end'>
        <v-col cols='2'>
          <v-img 
            src="../assets/logo.png"
            height='75px'
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
    <!-- LIST ALBUM -->
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
      search:'',
    }),
  }
</script>
