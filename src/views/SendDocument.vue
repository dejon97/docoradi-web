<template>
    <v-container fluid class="secondary5 test pa-0">
        <v-row class="container-row" no-gutters>
            <v-col cols="3">
                <Sidebar/>
            </v-col>
            <v-col cols="9">
              <v-container>
                <v-row class="ma-1"> 
                   <v-select 
                    @change="(selection) => selectionChanged(selection)"
                     :items="documentTypes"
                     label="Select Document Type "
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
                
                </v-row>

                <v-row class="ma-1"> 
                  
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
                               :disabled="invalid" 
                             >
                             submit
                            </v-btn>
                    </form>
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
import selectList from '@/components/formComponents/SelectList.vue'
import numberInput from '@/components/formComponents/NumberInput.vue'


export default defineComponent({
  
    components:{
        Sidebar, textInput, selectList, numberInput
    },
    data(){
        return{
            dis:false,
            documentTypes:['Foo','CHARDOO', 'Bar', 'Fizz', 'Buzz'],
            formJSON:{},
            selected:null,
            previousSelection: [],
            selectedItems: [],
            formData:  {},
            file:''
        }
    },
    methods:{
                selectionChanged(selection) {
        
                 
             console.log(selection);
            //     window.axios.get('/documentypes/selection')
            //     .then((res) =>{
            //         this.formJSON =  res.data
            //     })
              
              this.formJSON = [{
                             "displayName" : 'amount Due',
                             "fieldType": "textInput",
                             "name": "amountDue",
                             "required": true,
                             "placeholder": " enter the amount due"
                           }, {
                             "displayName" : 'Compnay Name',
                             "fieldType": "textInput",
                             "name": "companyName",
                             "required": true,
                             "placeholder": " enter the amount due"
                           },
                           {  "displayName" : 'Account Number',
                             "fieldType": "numberInput",
                             "name": "accountNumber",
                             "required": true,
                             "placeholder": " enter the account number"
                           },
                           {
                              "displayName" : 'User Id ',
                             "fieldType": "textInput",
                             "name": "userId",
                             "required": true,
                             "placeholder": " enter the amount due"
                           }
                           ];
                           this.dis =true;
                           console.log(this.formJSON)
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
        this.formData = {}
      }
    },
    watch:{

       
    },
    beforeMount(){
        window.axios.get('/documentypes')
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