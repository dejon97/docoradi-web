import axios from 'axios'
import {BASE_URL} from '../../env'

window.axios = axios
// axios.defaults.headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
axios.defaults.baseURL = BASE_URL

export default{
    getDocumentTypeProperties(){

       return window.axios.get('/service/documentTypes/')
       .then((res) =>  Promise.resolve(res.data)).
       catch((error) => Promise.reject(error)); 
    
    },

    senddocument(payload){

        return window.axios.post('/service/docxon/', payload)
        .then((res) =>  Promise.resolve(res.data)).
        catch((error) => Promise.reject(error)); 
     
     }
}