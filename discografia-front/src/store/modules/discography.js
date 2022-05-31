const state = {
    albums:[],
    artist:{
        name:'Tião Carreiro',
    },
    albumEdit:{
        id:'',
        name:'',
        artist_id:1,
        release_date:'',
    },
    trackEdit:{//when open a screen for trackedit
        id:'',
        name:'',
        album_order:'',
        duration:'',
        album_id:'',
        artist_id:1,
    },
    search:'',
    albumMenu:false,
    trackMenu:false,
}

const actions = { 
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
            fetch("http://127.0.0.1:8000/api/v1/albums", requestOptions)
            .then(response => response.text())
            .then(result =>{
                result = JSON.parse(result);
                commit('getAlbums', result);
            })
            .catch(error => console.log('error', error));
        })
    }
}

const mutations = {
    getAlbums(state,result){
        result = Object.values(result);

        state.albums = result;
    }
}
export default {
    state,
    actions,
    mutations,
  };