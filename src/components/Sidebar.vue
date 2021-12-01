<template>
    <v-container class="pa-0 Sidebar" 
    >
    <v-navigation-drawer app class="drawer" permanent>
         <v-card outlined tile class=" primary1"  height="100%" elevation="0">
        <v-list class="primary1 mt-16" >
        <v-list-item-group
            v-model="selectedItem"
            color="secondary6"
            
        >
            <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            class="li my-3"
            >
            <v-list-item-icon>
                <v-icon v-text="item.icon" color="white"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="item.title" class="white--text"></v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
        </v-list>
        </v-card>
    </v-navigation-drawer>
       
    </v-container>
</template>

<script>
export default {
    data (){
        return {
            selectedItem: null,
             items: [
                {title:"Dashboard", icon: 'mdi-view-dashboard', to: "/company/dashboard"},
                {title: 'Send Document', icon: 'mdi-file', to: "/company/sendDocument"},

            ],
        }
    }
}
</script>

<style scoped>
div.v-list{
     color: black;
}
.test{
    border-bottom-left-radius: 32px !important;
    border-top-left-radius: 32px !important;
}
.v-list-item--active{
    background-color: #E1E1E1;
    margin-right: -1px !important;
    border-top-left-radius: 32px !important;
    border-bottom-left-radius: 32px !important;
}
.v-list-item--active .v-list-item__title, .v-list-item--active .v-icon{
   color: #DD5928 !important; 
}
.Sidebar{
    height: 100% !important;
}
.drawer{
    width: 25vw !important;
}
</style>