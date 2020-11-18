<template>
  <div class="contenedor">
 
 <Titulo title="Home" />
   <div  class="car">
     <b-carousel controls indicators img-width="100vw" img-height="10"  style="text-shadow: 1px 1px 2px #333;">
        <b-carousel-slide
          caption="August 4"
          text="NYSL Fundraiser"
          img-src='https://upload.wikimedia.org/wikipedia/commons/9/92/Youth-soccer-indiana.jpg'
        ></b-carousel-slide>
        <b-carousel-slide
          caption="August 16"
          text="Season Kick-off: Meet the Teams"
          img-src='https://i.ytimg.com/vi/20R_mNk8K4Y/maxresdefault.jpg'
        ></b-carousel-slide>
        <b-carousel-slide
          caption="September 1"
          text="First Game of the Season"
          img-src="https://cdn.cnn.com/cnnnext/dam/assets/160120192256-kids-sports-stock-super-tease.jpg"
        ></b-carousel-slide>
      </b-carousel>
 <div v-if="!landscape">
    <div class="about"> <h3>We are NYSL!</h3></div>
    <div class="textAbout"> <p>The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is run by a small full-time staff, and relies on the generous volunteer time of parents and previous league members.</p> </div>
    
  </div>
</div>
  
  </div>
</template>

<script>
import  Titulo from "../components/Titulo.vue"
import {mapState, mapMutations} from 'vuex'
export default {
    
components:{
    Titulo
},
computed:{...mapState(['landscape'])},
methods:{
  ...mapMutations(['listenResize'])
},
beforeMount(){
  this.listenResize()
}
}
</script>
<style lang="scss" scoped>

.contenedor{
  height:100vh
}
// .car{
//   height:100vh
// }
.about{
  width:100vw;
 
 
  background:rgb(26, 25, 25);
  h3{
    text-align:center;
    padding:20px;
    color:white
  }
}
.textAbout{
  margin:30px 0 0 0;
  display:flex;
  justify-content:center;
  p{
    width:300px;
    color:rgb(185, 185, 185);
    padding-bottom:10px
  }
}

</style>
