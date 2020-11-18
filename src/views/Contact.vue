<template>
  <div >
     <Titulo title="NYSL" />
     <div class="ml-3 mt-3 mainc">
      <h2 >About us</h2>
      <p> {{text}} </p>
      <h2> Contact Us! </h2>
      <p>Please email us at <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a> </p>
 </div>
  </div>
</template>
<script>
import  Titulo from "../components/Titulo.vue"
export default {
    data:function(){
        return{
           text:"The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is run by a small full-time staff, and relies on the generous volunteer time of parents and previous league members."
        }
    },
components:{
    Titulo
}}
</script>
<style lang="scss" scoped>
.mainc{
    display:flex;
   flex-direction: column;
   align-items:center;
    p{
        width:70vw;
    }
    p a{
        color: rgb(0, 62, 68);
    }
    
}
</style>