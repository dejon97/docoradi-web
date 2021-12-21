<template>
    <v-container fluid class="myone test pa-0">
        <v-row class="container-row" no-gutters>
            <v-col cols="3">
                <Sidebar/>
            </v-col>
            <v-col cols="9">
              <v-container>
                <v-row class="ma-1">
                    <v-col
                       class="d-flex"
                       cols="12"
                       sm="6"
                     > 
                   <v-select 
                    @change="(selection) => selectionChanged(selection)"
                     :items="documentTypes"
                     item-text="description"
                     item-value="name"
                     label="Select Document Type"
                     dense
                   >
                   </v-select>
                  </v-col>
                </v-row>

                <v-row class="ma-1"> 
                   <v-col
                       class="d-flex"
                       cols="12"
                       sm="6"
                     > 
                    <form v-if="formDisplay ==true" @submit.prevent="submit">
                    
                      
                            <component  v-for="(field, index) in formJSON" 
                             :key="index"
                             :is="field.fieldType"
                             :value = "formData[field.name]"
                             @input="updateForm(field.name, $event)"
                             v-bind="field">          
                            </component>
                         <label>File
                            <input type="file" required="true" id="file" ref="file" v-on:change="handleFileUpload()"/>
                        </label>
                            <v-btn
                              class="mr-4"
                               type="submit"
                               :disabled="!file" 
                             >
                             submit
                            </v-btn>
                    </form>
                   </v-col>
                </v-row>
              </v-container>  
            </v-col>
        </v-row>
    </v-container>
</template>                

<script>
import { defineComponent } from '@vue/composition-api'
import Sidebar from '@/components/Sidebar.vue'
import textInput from '@/components/formComponents/TextInput.vue'
import selectlist from '@/components/formComponents/SelectList.vue'
import number from '@/components/formComponents/NumberInput.vue'
import date from '@/components/formComponents/DateInput.vue'
import email from '@/components/formComponents/EmailInput.vue'
import {mapState} from 'vuex'

export default defineComponent({
  
    components:{
        Sidebar, textInput, selectlist, number, date, email
    },
    data(){
        return{
            formJSON:[],
            selected:null,
            previousSelection: [],
            selectedItems: [],
            formData:  {},
            file:'',
            documenTypeData:[],
            mime:'',
            filename:'',
            propertyTypeName:'',
            propertyTypenameSpace:'',
        }
    },
    methods:{
      
        selectionChanged(selection) {
          alert(selection);

          const docType = this.documentTypes.find(item => item.name == selection);

          this.propertyTypenameSpace = docType.namespace;
          this.propertyTypeName = docType.name;
          this.formJSON = docType.fields;

          if (this.formJSON != []) {
              this.$store.dispatch('documentTypes/displayform');
          }              
      },
      
      handleFileUpload( ){
        const selectedImage = this.$refs.file.files[0];
        this.mime = selectedImage.type;
        this.filename = selectedImage.name
        this.createfileBase64(selectedImage);
      },
      createfileBase64(fileobject){
        const reader = new FileReader();
        reader.onload =(e)=> {
          this.file =  e.target.result;
        };
        reader.readAsBinaryString(fileobject);
      },

      updateForm(fieldName, value) {
        this.$set(this.formData, fieldName, value);           
      },
      created(){
        this.$store.dispatch('documentType/getProperties')
      },
      
      submit() {

        // Transform the form items from 
        // "firstName": "Kevin" to
        // "name": "firstName",
        // "value": "Kevin"
        const fields = [];
        for (const [key, value] of Object.entries(this.formData)) {
          fields.push({
            name: key,
            value
          });
        }

        console.log(JSON.stringify(fields));

         const payload =  {
             "account": {
                "id": "richCode121@example.com",
                "type": "userId"
              },
              "document": {
                "mime": this.mime,
                 "filename": this.filename,
                 "file": this.file
              },
              "properties": {
                "type":{
                  "name": this.propertyTypeName,
                  "namespace": this.propertyTypenameSpace
                },
                fields
              }
         }
          this.$store.dispatch('documentTypes/sendfile', payload)
         .then((res)=>{
           console.log(res)
           this.$swal('Success','<strong>you have succefully added a document to the system </strong>', 'OK')
          
           this.$store.commit('documentTypes/setdis', false);
         })
        
      }
    },
    watch:{

       
    },

    mounted(){
       this.$store.dispatch('documentTypes/getProperties');
    },
  computed:mapState('documentTypes',{
    documentTypes: state => state.allproperties,
    formDisplay: state =>  state.formDisplay
  })  
})
</script>

<style scoped>
.container, .container-row{
    height: 100%;
}
.avatar-id {
   border: 1px solid #DD5928; 
}
  .small {
    max-width: 650px;
  }
</style>