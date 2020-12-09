<template>
  <div >
  
        <template v-if="monthA=='september'" >
      
        <div v-if="locations.september.dates[date].date== '9/01' || locations.september.dates[date].date=='9/08'|| locations.september.dates[date].date=='9/15' || locations.september.dates[date].date=='9/22'|| locations.september.dates[date].date=='9/29'" >
      <div class="contain">
        
          <div> 
       
      <div> 
         <div><h2>{{locations.september.dates[date].teams1.teams}}  </h2> <i :id="selectedOrderS" @click="addFav('september',selectedOrderS,'teams1')" :class="{'AddFav':fav}" class="fas fa-star"></i> </div>
          
           Location: {{locations.september.dates[date].teams1.location}} <br> Time: {{locations.september.dates[date].teams1.times}} <br>
          </div> 
           <div>
            <!-- <iframe :src="locations.september.dates[date].teams1.url"></iframe> -->
           <button v-b-modal="date+'mod'" class="btn button-map"  ><i class="fa fa-map-marked-alt"></i></button>
            <router-link :to="'/chatroom/' + date +'a'">
            <button class="button-chat"><i class="fas fa-comments icon-chat"></i> <p>Chat</p></button>
            </router-link>
          </div> 
          </div>
    
          <div >
              <div >
                  <div><h2> {{locations.september.dates[date].teams2.teams}} </h2>  <template v-if="locations.september.dates[date].teams2.location!==null"> <i @click="addFav('september',selectedOrderS,'teams2')" class="fas fa-star"  ></i></template></div>
           
          <p v-if="locations.september.dates[date].teams2.location!==null">Location: {{locations.september.dates[date].teams2.location}}</p> <p v-if="locations.september.dates[date].teams2.times!==null"> Time: {{locations.september.dates[date].teams2.times}}</p>  
        </div>
            <div>
            <!-- <iframe :src="locations.september.dates[date].teams2.url"></iframe> -->
           <button v-if="locations.september.dates[date].teams2.location!==null" v-b-modal="date+'mod2'" class="btn button-map"  ><i class="fa fa-map-marked-alt"></i></button>
                 <template v-if="locations.september.dates[date].teams2.location!==null">
                
                 <router-link :to="'/chatroom/' + date +'b'">
            <button  class="button-chat"><i class="fas fa-comments icon-chat"></i> <p>Chat</p></button>
            </router-link> </template>
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
     <p>There are no competitions on this date</p> </div>
    
        </template>
        <template v-else >
            <div v-if="locations.october.dates[date2].date== '10/06' || locations.october.dates[date2].date=='10/13'|| locations.october.dates[date2].date=='10/20' || locations.october.dates[date2].date=='10/27'" >
      <div class="contain">
        
          <div> 
       
      <div > 
         <div> <h2>{{locations.october.dates[date2].teams1.teams}} </h2> <i @click="addFav('october',selectedOrderO,'teams1')" class="fas fa-star"></i> </div>
         
           Location: {{locations.october.dates[date2].teams1.location}} <br> Time: {{locations.october.dates[date2].teams1.times}} <br>
          </div> 
           <div>
            <!-- <iframe :src="locations.october.dates[date].teams1.url"></iframe> -->
           <button v-b-modal="date2+'mod'" class="btn button-map"  ><i  class="fa fa-map-marked-alt icon"></i></button>
            <router-link :to="'/chatroom/' + date2 +'i'">
            <button class="button-chat"><i class="fas fa-comments"></i>  <p>Chat</p></button>
            </router-link>

          </div> 
          </div>
    
          <div>
              <div>
                  <div> <h2> {{locations.october.dates[date2].teams2.teams}} </h2> <i @click="addFav('october',selectedOrderO,'teams2')" class="fas fa-star"></i></div>
          
           Location: {{locations.october.dates[date2].teams2.location}} <br> Time: {{locations.october.dates[date2].teams2.times}}  <br> 
        </div>
            <div>
            <!-- <iframe :src="locations.october.dates[date].teams2.url"></iframe> -->
           <button v-b-modal="date2+'mod2'" class="btn button-map"  ><i class="fa fa-map-marked-alt"></i></button>
               <router-link :to="'/chatroom/' + date2 +'j'">
            <button class="button-chat"><i class="fas fa-comments icon-chat"></i> <p>Chat</p></button>
            </router-link>

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
     <p>There are no competitions on this date</p> </div>
        </template>

  </div>
</template>

<script>
import {mapState} from 'vuex';
import { db } from "../firebase/db";

export default {
    data:
        function() {
          return{
              fav:false
          }  
        }
    ,
name:"MoreInfo",
props:["date","date2"],
computed:{
    ...mapState(['locations','selectedMonthS','monthA','user','selectedOrderS','selectedOrderO'])
},
methods:{

    addFav(month,index,teams){
        let icon=document.getElementById(this.selectedOrderS)
        if(this.fav){
            this.fav=false;

        }else{
         this.fav=true;
      let fold = db.ref("users" + this.user.uid +'/matches');
      let post= this.locations[month].dates[index][teams]
fold.push(post)
        }

    }
}
}
</script>

<style lang="scss" scoped>

iframe{
    width:100px;
    height:100px
}
.mapModal{
    width:100%;
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
    justify-content:flex-start;
    div{
       display:flex;
    flex-direction:row;
    align-content:center;
    i{
        color:rgb(170, 156, 110);
    &:hover{
        cursor:pointer
    }
    }

    };
    button{
          display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;

        background: greenyellow;
        margin:20px;
        i{
    font-size: 1.5em;
    color:rgb(87, 228, 241);
     &:hover{
            text-decoration:none !important
        }
};
    }
   
}
 }
}

 .button-chat{
    outline:none;
    border:none;
    background-color: rgba(100, 206, 255, 0.76) !important;
    border-radius:0.5em;
    i{
        color:rgb(26, 24, 24) !important;
        padding:0.4em 0.2em 0.4em 0;
        &:hover{
            text-decoration:none
        }
    }
    p{
        
         margin:0;
           text-decoration:none 
    }
    }
    .AddFav{
    color:darkgoldenrod !important
}
</style>