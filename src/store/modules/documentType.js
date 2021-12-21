import documentTypes from '../../api/documentTypes'
export default {
    namespaced: true,
    state: () => ({ 
        allproperties: []
     }),
    mutations: { 
        setProperties(state, properties){
            state.allproperties =  properties
          }
     },
    actions: {  
        getProperties({ commit }){
        documentTypes.getDocumentTypeProperties().then(res =>{
            commit('setProperties', res)
        })

     } },
    getters: { }
  }

