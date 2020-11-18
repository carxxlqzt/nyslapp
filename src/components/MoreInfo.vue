<template>
  <div>
  
        <template v-if="monthA=='september'" >
      
        <div v-if="locations.september.dates[date].date== '9/01' || locations.september.dates[date].date=='9/08'|| locations.september.dates[date].date=='9/15' || locations.september.dates[date].date=='9/22'|| locations.september.dates[date].date=='9/29'" >
      <div class="contain">
        
          <div> 
       
      <div> 
         
          <h2>{{locations.september.dates[date].teams1.teams}}</h2> 
           Location: {{locations.september.dates[date].teams1.location}} <br> Time: {{locations.september.dates[date].teams1.times}} <br>
          </div> 
           <div>
            <!-- <iframe :src="locations.september.dates[date].teams1.url"></iframe> -->
           <button v-b-modal="date+'mod'" class="btn"  ><i class="fa fa-map-marked-alt"></i></button>
          </div> 
          </div>
    
          <div >
              <div >
           <h2> {{locations.september.dates[date].teams2.teams}}</h2>
          <p v-if="locations.september.dates[date].teams2.location!==null">Location: {{locations.september.dates[date].teams2.location}}</p> <p v-if="locations.september.dates[date].teams2.times!==null"> Time: {{locations.september.dates[date].teams2.times}}</p>  
        </div>
            <div>
            <!-- <iframe :src="locations.september.dates[date].teams2.url"></iframe> -->
           <button v-if="locations.september.dates[date].teams2.location!==null" v-b-modal="date+'mod2'" class="btn"  ><i class="fa fa-map-marked-alt"></i></button>
                
            </div>
         </div>
         </div>
         
         
         
         <b-modal :id="date+'mod'" hide-header body-bg-variant="dark" hide-footer size="lg" ok-only ok-title="Close" > 
         
           <iframe class="mapModal" :src="locations.september.dates[date].teams1.url"></iframe>
           
            </b-modal>
            <b-modal :id="date+'mod2'" hide-header body-bg-variant="dark" hide-footer size="lg" ok-only ok-title="Close" > 
         
           <iframe class="mapModal" :src="locations.september.dates[date].teams2.url"></iframe>
           
            </b-modal>
  </div>
    
  <div v-else-if="monthA=='september'">
     <p>No dates</p> </div>
    
        </template>
        <template v-else >
            <div v-if="locations.october.dates[date2].date== '10/06' || locations.october.dates[date2].date=='10/13'|| locations.october.dates[date2].date=='10/20' || locations.october.dates[date2].date=='10/27'" >
      <div class="contain">
        
          <div> 
       
      <div > 
         
          <h2>{{locations.october.dates[date2].teams1.teams}}</h2> 
           Location: {{locations.october.dates[date2].teams1.location}} <br> Time: {{locations.october.dates[date2].teams1.times}} <br>
          </div> 
           <div>
            <!-- <iframe :src="locations.october.dates[date].teams1.url"></iframe> -->
           <button v-b-modal="date2+'mod'" class="btn"  ><i  class="fa fa-map-marked-alt icon"></i></button>
          </div> 
          </div>
    
          <div>
              <div>
           <h2> {{locations.october.dates[date2].teams2.teams}}</h2>
           Location: {{locations.october.dates[date2].teams2.location}} <br> Time: {{locations.october.dates[date2].teams2.times}}
        </div>
            <div>
            <!-- <iframe :src="locations.october.dates[date].teams2.url"></iframe> -->
           <button v-b-modal="date2+'mod2'" class="btn"  ><i class="fa fa-map-marked-alt"></i></button>
                
            </div>
         </div>
         </div>
         
         
         
         <b-modal :id="date2+'mod'" hide-header body-bg-variant="dark" hide-footer size="lg" ok-only ok-title="Close" > 
         
           <iframe class="mapModal" :src="locations.october.dates[date2].teams1.url"></iframe>
           
            </b-modal>
            <b-modal :id="date2+'mod2'" hide-header body-bg-variant="dark" hide-footer size="lg" ok-only ok-title="Close" > 
         
           <iframe class="mapModal" :src="locations.october.dates[date2].teams2.url"></iframe>
           
            </b-modal>
  </div>
  <div v-else-if="monthA=='october'">
     <p>No dates</p> </div>
        </template>

  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:"MoreInfo",
props:["date","date2"],
computed:{
    ...mapState(['locations','selectedMonthS','monthA'])
}
}
</script>

<style lang="scss" scoped>
iframe{
    width:100px;
    height:100px
}
.mapModal{
    width:75vw;
    height:70vh
}
.contain{
 div{
display:flex;
flex-direction: row;
justify-content: space-between;
div{
    display:flex;
    flex-direction: column;
    button{
        background: greenyellow;
        margin:20px
    }
}
 }
}
i{
    font-size: 60px;
    color:rgb(87, 228, 241)
}
</style>