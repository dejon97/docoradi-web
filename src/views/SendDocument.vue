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
                     label="Select Document Type "
                     dense
                   >
                   
                     <template v-slot:item="{ item, attrs, on }">
                       <v-list-item
                         v-bind="attrs"
                         v-on="on"
                       >
                         <v-list-item-title
                           :id="attrs['aria-labelledby']"
                           v-text="item"
                         ></v-list-item-title>
                       </v-list-item>
                     </template>
                   </v-select>
                  </v-col>
                </v-row>

                <v-row class="ma-1"> 
                   <v-col
                       class="d-flex"
                       cols="12"
                       sm="6"
                     > 
                    <form v-if="dis ==true" @submit.prevent="submit">
                    
                      
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

export default defineComponent({
  
    components:{
        Sidebar, textInput, selectlist, number, date
    },
    data(){
        return{
            dis:false,
            documentTypes:[],
            // documentTypes:[],
            formJSON:[],
            selected:null,
            previousSelection: [],
            selectedItems: [],
            formData:  {},
            file:''
        }
    },
    methods:{
        selectionChanged(selection) {
                window.axios.get('/'+ selection)
                .then((res) =>{
                    this.formJSON =  res.data.fields
                }).then(() =>{
                 this.dis =true;
              console.log(this.formJSON)
                })
            
              
      },
      handleFileUpload( ){
        const selectedImage = this.$refs.file.files[0];
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
      
      submit(){
        this.$set(this.formData, 'file', this.file);
        console.log(this.formData)
        this.dis = false;
      }
    },
    watch:{

       
    },
    beforeMount(){
        window.axios.get('/')
        .then((res) =>{
            this.documentTypes =  res.data
        })
    }
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