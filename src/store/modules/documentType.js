import documentTypes from '../../api/documentTypes'
export default {
    namespaced: true,
    state: () => ({ 
        allproperties: [],
        formDisplay:false
     }),
    mutations: { 
        setProperties(state, properties){
            state.allproperties =  properties
          },

          setdis(state, properties){
            state.formDisplay =  properties
          }
     },
    actions: {  
        getProperties({ commit }){
        documentTypes.getDocumentTypeProperties().then(res =>{
            commit('setProperties', res)
        })
     },
      sendfile({commit}, payload){
        documentTypes.senddocument(payload).then(() =>{
            commit('setdis', false)
        })

      },

      displayform({commit}){
            commit('setdis', true)
      }
    
    },
    getters: { }
  }

