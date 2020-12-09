<template>
  <div >
     <Titulo title="Schedule" />
     <div class="main">
      <!-- <template v-if="landscape"> -->
       <div class="month"> <h1> {{locations.month1}} </h1></div>
      <div class="calendarLS calendarS"> 
        <div class="dS">
        <div class="designSch"></div>
       <div class="cont">
        
       <div v-for="(e,index) in locations.september.dates" :key="'modal'+index" class="dateContain" >
         <template v-if="landscape">
       <button @click="changeOrderS(index)"  :class="e.class" class="btn btn-light" >
         <p>{{e.date}}</p>
        
       </button>
         </template>
          <template v-else>
       <button v-b-modal="index+'y'" :class="e.class" class="btn btn-light" >
         <p>{{e.date}}</p>
        
       </button>
         </template>
      
       </div>
       <!-- </div> -->
      
  <!-- <div class="cont"> -->
    <!-- <div class="dateContain">
    <button v-b-modal="'modal5'" class="btn active ">
         <p>9/29</p>
        
       </button> -->
             </div>
</div>
       <template v-if="landscape">
          <transition  leave-active-class="animated fadeOutLeft"><h2 v-if="okS"> Check the dates</h2>
        </transition>
        <template>
   <transition enter-active-class="animated fadeInRightBig" leave-active-class="animated fadeInLeft">
        <MoreInfo :date="selectedOrderS" /> 
         </transition>
        </template>

      </template>


</div>
    <template v-if="!landscape">
  <div v-for="(e,index) in locations.september.dates" :key="'modal'+index">
         <b-modal  :id="index+'y'" title="TEAMS"  ok-only ok-title="Close" ok-variant="success"> 
           <div v-if="e.date== '9/01' || e.date=='9/08'|| e.date=='9/15' || e.date=='9/22'|| e.date=='9/29'" >
            <div class="box-info">
              <div>
             <h2>{{e.teams1.teams}}</h2>
           Location: {{e.teams1.location}} <br> Time: {{e.teams1.times}}
            </div>
            <div class="b-options">
              <div > <router-link :to="'/chatroom/' + index +'a'">
            <b-button>
              <i class="fas fa-comments"></i>
            </b-button>
            </router-link></div>
            <div><i @click="addFav('september',index,'teams1')" class="fas fa-star  ic"  ></i></div>
            </div>
            </div>
            <br>
             <div class="box-info">
              <div>
           <h2> {{e.teams2.teams}}</h2>
          <p class="m-0" v-if="e.teams2.location!==null" >Location: {{e.teams2.location}}</p> <p v-if="e.teams2.times!==null">Time: {{e.teams2.times}}</p> 
           </div>
            <div class="b-options">
              <div v-if="e.teams2.location!==null">
          <router-link :to="'/chatroom/' + index +'b'">
            <b-button>
              <i class="fas fa-comments"></i>
            </b-button>
            </router-link></div>
            <div v-if="e.teams2.location!==null"><i @click="addFav('september',index,'teams2')" class="fas fa-star ic"  ></i></div>
            </div>
            </div>
           </div>
             <div v-else>
             <h2>There are no competitions on this date</h2>
          
           </div>
            </b-modal> </div>

          <!-- <div   >
         <b-modal id="modal5" hide-header body-bg-variant="dark" footer-bg-variant="dark" ok-only ok-title="Close" > 
         
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.0704497392267!2d-87.88823348593341!3d42.02022106448966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb78561e99553%3A0xc5f956c57f583d4a!2sSouth%20Elementary%20School!5e0!3m2!1ses!2sar!4v1603289148597!5m2!1ses!2sar"></iframe>
           
            </b-modal> </div> -->
    </template>

  <div class="month"> <h1> {{locations.month2}} </h1></div>
  <div  class="calendarLS calendarS">
     <div class="dS">
        <div class="designSch"></div>
  <div class="cont">
       <div  v-for="(el,index) in locations.october.dates" :key="index+'n'" class="dateContain" >
         <!-- <button v-b-modal="index+'modal'" :class="e.class" class="btn btn-light">
         <p>{{e.date}}</p>
        
       </button> -->
  <template v-if="landscape">
       <button @click="changeOrderO(index)"  :class="el.class" class="btn btn-light" >
         <p>{{el.date}}</p>
        
       </button>
         </template>
          <template v-else>
       <button v-b-modal="index+'modal'" :class="el.class" class="btn btn-light" >
         <p>{{el.date}}</p>
        
       </button>
         </template>



       <!-- </div> -->
      
       <!-- <div class="dates">
         <p>{{e.date}}</p>
       </div>
        <More :team1="e.teams1.teams" :team2="e.teams2.teams" :location1="e.teams1.location"
        :location2="e.teams2.location" :time1="e.teams1.times" :time2="e.teams2.times" />
       </div> -->
     
     </div>
       
     </div>
     </div>

     <template v-if="landscape">
          <transition  leave-active-class="animated fadeOutLeft"><h2 v-if="okO">Check the dates</h2>
        </transition>
       
   <transition enter-active-class="animated fadeInRightBig" leave-active-class="animated fadeInLeft">
        <MoreInfo :date2="selectedOrderO"  /> 
         </transition>
 
      </template>
  </div>
     <div v-for="(e,index) in locations.october.dates" :key="index">
         <b-modal :id="index+'modal'" title="TEAMS" ok-only ok-title="Close" ok-variant="success" >
          <div v-if="e.date== '10/06' || e.date=='10/13'|| e.date=='10/20' || e.date=='10/27'" >
             <div class="box-info">
              <div>
            <h2>{{e.teams1.teams}}</h2>
           Location: {{e.teams1.location}} <br> Time: {{e.teams1.times}}
              </div>
              <div>
                <div class="b-options">
            <router-link :to="'/chatroom/' + index +'i'">
            <b-button>
              <i class="fas fa-comments"></i>
            </b-button>
            </router-link></div>
            <div><i @click="addFav('october',index,'teams1')" class="fas fa-star ic"  ></i></div>
             </div>
            </div> <br>
            <div class="box-info">
              <div>
           <h2> {{e.teams2.teams}}</h2>
           Location: {{e.teams2.location}} <br> Time: {{e.teams2.times}}
           </div>
           <div class="b-options">
             <div>
            <router-link :to="'/chatroom/' + index +'j'">
            <b-button>
              <i class="fas fa-comments"></i>
            </b-button>
            </router-link></div>
            <div><i @click="addFav('october',index,'teams2')" class="fas fa-star ic"  ></i></div>
            </div>
            </div>
           </div>
            <div v-else>
              no dates
               </div>
            </b-modal> 
            </div> 
            <!-- </template> -->
           
     </div>
    
  </div>
</template>
<script>

import{mapMutations,mapState} from "vuex"
import { db } from "../firebase/db";

import  Titulo from "../components/Titulo.vue"
import MoreInfo from "../components/MoreInfo.vue"
export default {
 data:function(){
        return{
         
           landscape:window.matchMedia("(min-width: 600px)").matches,
           fav:false
        }
    },
  computed:{
    ...mapState(["locations","selectedOrderS","selectedOrderO","okS","okO",'monthA','user'])
  },
components:{
    Titulo,
    MoreInfo
},
methods:{
 ...mapMutations(['changeOrderS','changeOrderO']),
  addFav(month,index,teams){
        if(this.fav){
            this.fav=false;

        }else{
         this.fav=true;
      let fold = db.ref("users" + this.user.uid +'/matches');
      let post= this.locations[month].dates[index][teams]
fold.push(post)
        }

    }

//  this.changeMsg("Holaa")
},
beforeMount(){
  window.addEventListener("resize", ()=> this.landscape=window.matchMedia("(min-width: 600px)").matches)
// this.changeMsg("chauuuuu")
// this.cond()
},

}
</script>
<style lang="scss" scoped>
  .main{
 
   display:flex;
   flex-direction: column;
   align-items:center;
    // justify-content: center;

   p{
     margin-top:.5em;
   }
  }
  .month{
    background-color:rgba(172, 255, 47, 0.486);
    width:100%;
    height:auto;
    display: flex;
    justify-content: center;
    margin-top:2%;
    
  }
  .box-info{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  }
  .b-options{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    button{
      background:pink !important;
      &:hover{
        background-color: rgb(209, 84, 209) !important;
      }
    }


  }
  .cont{
    // width:60%;
    height:170px;
    background:rgb(192, 188, 188);
    display:grid;
    grid-gap:4px;
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: 1fr 1fr 1fr 1fr;
    border-radius:10px;
    // padding:4px;
    // flex-direction:row;
    // flex-wrap: wrap;
    margin-top:2%;

  

  }
  .dateContain{
padding:3px;

button{
padding:3px;
};
    button p{
      margin:0;
      
      color:rgb(33, 36, 39);
      font-size:10px;
      // text-shadow: 5px 5px 5px black;
    }}
   .active{
    
    background:rgb(163, 250, 177) !important;
  &:hover{
    background:rgb(120, 199, 133)!important;
    color:whitesmoke
  }
  }
 
@media (min-width: 600px) {
  
  .container{
   position:fixed;
   padding:0px;
 &.show{
      width: 100px;} }

  .rout{
    padding:0px 0px 0px 5px
  }
 .calendarLS{
    width:100%;
    margin-top:3%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  }
}
@media (max-width: 600px) {
  .designSch{
    border:rgba(255, 255, 255, 0.541) solid !important;
    background:rgba(255, 255, 255, 0.603)
  }
  .calendarS{
    width:100%;
    display:flex;
    justify-content: center;
    margin-top:20px;
    margin-bottom: 10px;
  }
  .month{
    color:rgba(255, 255, 255, 0.87)
  }
}
.designSch{
  width:100%;
  height:3.5vh;
  border:rgb(75, 72, 72) solid 2px;
  border-radius:5px;
}
.dS{
  display:flex;
  flex-direction: column;
}
.ic:active{
   transform: translateY(5px);
  // scale: 2;
}
</style>