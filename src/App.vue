<template>
  <v-app>
   
    <v-main class="pa-0">
        <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    //
    return {
    }
  },
};
</script>

<style>
.app{
  font-family: Arial, Helvetica, sans-serif;
}
.v-application {
   font-family: Arial, Helvetica, sans-serif !important;
 }
</style>