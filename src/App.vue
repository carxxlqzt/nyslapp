<template>
  <div id="app" >
       <template v-if="!landscape">
 <div class="header">
    <router-link to="/">
   <div>
     <transition  enter-active-class="animated bounce" >
  <img class="logo " src="./assets/nysl_logo.png" alt="nysl_logo" >
     </transition>

   <h1>Northside Soccer League</h1></div>

     </router-link>
 </div>

    <Sidebar />
    
 </template>
  <template v-else>
    <Sidebar />
     <!-- <div><router-view/></div> -->
  </template>
            
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  export default {
    components: {
      Sidebar
    },
    data:function(){
        return{

           landscape:window.matchMedia("(min-width: 600px)").matches
        }
    },
    beforeMount(){
  window.addEventListener("resize", ()=> this.landscape=window.matchMedia("(min-width: 600px)").matches)
}
  }

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Anton');
  @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
  @import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
  body {
    margin: 0;
    padding: 0;
  
  }

  #app {
    font-family: 'Anton', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
    color: #322F42;
    width: 100%;
    height:auto;
    
    // height:100vh;
  }
  .header{
    width:100vw;
    height: 9vh;
    background-color:rgb(10, 10, 10);
    display:flex;
    align-items:center;
    justify-content: flex-end;
   div{
     width:auto;
     display:flex;
     flex-direction:row;
     margin-right: 0.5em;
     align-items: center;
     h1{ font-size:20px ;
       color:whitesmoke
   }

   }

  }
  .logo{
     width:35px;
     height:35px;
     margin-right:1.5em;
   }
   @media (max-width: 600px){
    #app{ background:rgb(45, 45, 46);
     height:auto;
    padding-bottom:30px
    }
   }
</style>