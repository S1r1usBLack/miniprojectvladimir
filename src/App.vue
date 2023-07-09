<template>
<v-app > <my-navbar></my-navbar>

  <div class="app">

      <router-view/>
  </div>
  </v-app>
</template>

<script>
import MyNavbar from "@/components/UI/NavBar";
export default {

  name: 'App',
  components:{
    MyNavbar,

  },
  data(){
  return{
  }
  },
  methods:{
    fun () {

      console.log(_.compact([1,2,3,4,0,'',undefined,null,NaN,1]));
    }
  },
  mounted() {
   this.fun();
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
    padding: 20px;
  }
</style>