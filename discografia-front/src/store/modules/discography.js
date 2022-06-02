const state = {
    albums:[],
    artist:{
        name:'Tião Carreiro',
    },
    
    search:'',
    albumMenu:false,
    trackMenu:false,
}

const actions = { 
    //ALBUMS
    getAlbums({commit}){
        //update to use AXIOS,
        return new Promise(()=>{
            var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Accept", "application/json");
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
                };
            fetch(process.env.VUE_APP_BACK_URL+"albums", requestOptions)
            .then(response => response.text())
            .then(result =>{
                result = JSON.parse(result);
                commit('getAlbums', result.data);
            })
            .catch(error => console.log('error', error));
        })
    },
    addAlbums({commit},album){
        return new Promise(()=>{
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");
            
            var raw = JSON.stringify(album);
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
            fetch(process.env.VUE_APP_BACK_URL+"albums", requestOptions)
              .then(response => response.text())
              .then(result=>{
                  result = JSON.parse(result);
                  album.id = result.data.id;
                commit('addAlbum',album);
              })
              .catch(error => console.log('error', error));
        })
    },
    delAlbums({commit},album){
        return new Promise(()=>{
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");
            
            var requestOptions = {
              method: 'DELETE',
              headers: myHeaders,
              redirect: 'follow'
            };
            
            fetch(process.env.VUE_APP_BACK_URL+"albums/"+album, requestOptions)
              .then(response => response.text())
              .then(() => {
                commit('delAlbum',album);
              })
              .catch(error => console.log('error', error));
        })
    },
    //TRACKS
    addTrack({commit},track){
        return new Promise(()=>{
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");
            
            var raw = JSON.stringify(track);
            
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
            fetch(process.env.VUE_APP_BACK_URL+"tracks", requestOptions)
              .then(response => response.text())
              .then(result => {
                result   = JSON.parse(result);
                track.id = result.data.id;
                commit('addTrack',track);
              })
              .catch(error => console.log('error', error));
        })
    },
    delTrack({commit},track){
        return new Promise(()=>{
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");

            var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch(process.env.VUE_APP_BACK_URL+"tracks/"+track.id, requestOptions)
            .then(response => response.text())
            .then(() => {
                commit('delTrack',track);
            })
            .catch(error => console.log('error', error));
        })
    },
}

const mutations = {
    //ALBUMS
    getAlbums(state,result){
        console.log('obtendo endereço de',process.env.VUE_APP_BACK_URL)
        state.albums = [];
        result = Object.values(result);
        state.albums = result;
    },
    addAlbum(state,album){
        album.tracks = [];
        state.albums.push(album);
    },
    delAlbum(state,album){
        let exists = state.albums.findIndex(x => x.id === album);
        if(exists !== -1){
            state.albums.splice(exists,1)
        }else{
            console.log('impossivel remover o desconto')
        }
    },
    //TRACKS
    addTrack(state,track){
        let exists = state.albums.findIndex(x => x.id === track.album_id);
        state.albums[exists].tracks.push(track);
        // há um bug aqui, onde ao adicionar uma musica a um album recém cadastrado( zerado),
        // ele não é incluido la na tela, porém é incluido normalmente no storage, sendo necessário atualizar a página.
    },
    delTrack(state,track){
        let exists = state.albums.findIndex(x => x.id === track.album_id);
        if(exists !== -1){
            let existsTrack = state.albums[exists].tracks.findIndex(x => x.id === track.id);
            state.albums[exists].tracks.splice(existsTrack,1)
        }else{
            console.log('impossivel remover o desconto')
        }
    }
}
export default {
    state,
    actions,
    mutations,
  };