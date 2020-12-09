<template>
<div>
    <div class="box-matches">
        <div>
    <h1 class="m-3">My Matches</h1>
    
    <div class="matches mt-4" v-for="(elem,index) in userMatches" :key="index">
        <div class="bg-info m-2 p-2">
        <h3 >{{elem.teams}} </h3> <br>
          <p> Location: {{elem.location}} </p><br> <p> Time: {{elem.times}}</p>
       </div>
   </div>
</div>
    </div>
</div>
  
</template>

<script>
import {db} from "../firebase/db";
import {mapState} from 'vuex';

export default {
name:'UserMatches',
data:
    function () {
        return{
            userMatches:[]
        }
    
},
computed:{
    ...mapState(['user'])
},
beforeMount(){
 db.ref("users" + this.user.uid +'/matches').on(
      "child_added",
      (snapshot) => {
        this.userMatches.push(snapshot.val());
      }
    );
}
}
</script>

<style scoped lang="scss">
.box-matches{
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:row;
    justify-content: center;
    
}
@media (max-width: 600px){
    .box-matches *{
        color:white;
        div{
            border-radius:20px;
        }
    }
   
}
@media (min-width: 600px){
    .box-matches{
        h1{
            text-align:center;
            color:rgb(17, 42, 63)
        }
        div{
        color:white;
        width:400px;
    }}
}
 
</style>