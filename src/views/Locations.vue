<template>
  <div class="contPadre">
      <Titulo title="Locations" />
       
      <div class="main">
         
      <div class="container">
        <h1 class="title mt-2 mb-4" > What is your School?</h1>
        <select v-model="selected" >
         
          <option v-for="(el,index) in locations.maps" :key="index">  <p>{{el.school}}</p> 
            </option>
       
        </select>
        

        <div  v-for="(e,index) in locations.maps" :key="index" >
          <iframe v-if="selected==e.school"  :src="e.url"></iframe>
        </div> 
       
        <!-- <div  v-for="(e,index) in locations.maps" :key="index" >
            
         <div class="accordion" role="tablist">
         <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle="index + 'accordion'" variant="info"> {{e.school}} </b-button>
      </b-card-header>
      <b-collapse :id="index + 'accordion'" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
         
          <b-card-text class="map">   <iframe :src="e.url"></iframe> </b-card-text>        
        </b-card-body>
      </b-collapse>
    </b-card> -->
<!-- 
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card> -->
  <!-- </div> -->

           
           
           
           
           
           
            <!-- <div v-for="(e,index) in locations.maps" :key="index">
              <b-button v-b-toggle="index + 'accordion'" >{{e.school}}</b-button>  
         <b-collapse :id="index + 'accordion'">
                
                  <iframe :src="e.url"></iframe>
              </b-collapse> </div>  -->
          
      <!-- </div> -->
      <!-- <div>
          <div v-for="(e,index) in locations.maps" :key="index">
             
          </div>
        
        
        
        </div> -->
        
       </div>
      </div>



 
  <!-- </transition>  -->
  </div>
</template>

<script>
import  Titulo from "../components/Titulo.vue"
import{mapState} from "vuex"
export default {
     data:function(){
        return{
          ok:true,
          selected:"AJ Katzenmaier Elementary",
          filtrado:""}},

    computed:{
        ...mapState(["locations"]),
        
    },
 
components:{
    Titulo

},

}
</script>

<style scoped lang="scss">
.contPadre{
  height:100vh;
}
.title{
    text-align:center
}
.main{
    display: flex;
    width:100%;
    height:100%;
    flex-direction:row;
    justify-content: center;
}
.container{
  width:90%;
    height:100%;
  margin:0;
  padding:0;
  display:flex;
  flex-direction: column;
   align-items:center;
 div{
   width:100%;
   height:55vh;
   margin-top:20px;
   display:flex;
   justify-content: center;
 }
 
}
.container button{
    width:60vw
}
.cont{
   width:100% ;
   height:100%
}
.map{
    display:flex;
    justify-content:center
}
iframe{
    width:80%;
    height:100%

}
@media (max-width: 600px){
  .title{
    color:rgba(255, 255, 255, 0.726)
  }
}
</style>