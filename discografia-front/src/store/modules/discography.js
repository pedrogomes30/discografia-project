const state = {//ou venda
    albums:[{
        tracks:[],
    }],
    artist:{
        name:'',
    },
    trackEdit:{//when open a screen for trackedit

    },
    albumEdit:{

    }
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
            fetch(process.env.BACK_URL+"albums", requestOptions)
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
        console.log(result);
        state.albuns = result;
    }
}
export default {
    state,
    actions,
    mutations,
  };