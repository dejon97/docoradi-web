<template>
    <v-container fluid class="secondary5 test pa-0">
        <v-row class="container-row" no-gutters>
            <v-col cols="3">
                <Sidebar/>
            </v-col>
        </v-row>
    </v-container>
</template>                

<script>
import { defineComponent } from '@vue/composition-api'
import Sidebar from '@/components/Sidebar.vue'
export default defineComponent({
    components:{
        Sidebar
    },

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