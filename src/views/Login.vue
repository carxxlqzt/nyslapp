
   <template>
    <div class="vh-100">
         <Titulo :title="dtitle"/>
        <template v-if="user == null">
            <div class="h-100 login-contain">
                 
                <div class="login-box">
              <h2>
            Login to participate in the game chats</h2>
            <img class="img-login" src="../assets/chat.png" alt="chat" >
          <button @click="login()">Login with google</button>
          </div>
          </div>
      </template>
      <template v-else>
            <div class="h-100 user-contain">
                <div class="user-box">
           <div class="box-img">
            <img class="img" :src="user.photoURL" > </div> 
            <div class="user-menu">
                <div>
               <router-link to="/matches-favs">
                <b-button class="buttonM"> 
                My Matches
                </b-button> </router-link></div>
                <div>
            <b-button class="buttonM" @click="logout()">Logout</b-button></div>
            </div>
        
          </div>
          </div>
      </template>
    </div>

</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import {mapState} from 'vuex'
import  Titulo from "../components/Titulo.vue"

export default {
     name: 'User',
     data:function(){
         return{
             firstNameUser:"",
             fullName:""
         }
     },
    computed:{
        ...mapState(['user']),
        dtitle:function(){
            if(this.user==null){
                return "Welcome"
            }else{
               return `Hi ${this.user.displayName.split(" ")[0]}!`

            }
        },
      
    },
    components:{
        Titulo
    },
methods: {
        login(){
            let provider = new firebase.auth.GoogleAuthProvider()
            firebase
            .auth()
            .signInWithPopup(provider)
            .then(result => {

               console.log(result.user)

            })
            .catch(error => {
                console.log(error.code)
            })
        },
        logout(){
            firebase
            .auth()
            .signOut()
            .then(() => {
                console.log("logged out")
            })
            .catch(error => {
                console.log(error.code)
            })
        }
    },
    mounted(){
  
         
        }
    
}
</script>

<style lang="scss"  scoped>
.img{
    width:100px;
    height:100px;
    border-radius:50px
}
.img-login{
    width:100%
}
.login-contain{
    display: flex;
    justify-content: center;
}
.login-box{
    width:97%;
    height:80%;
    display:flex;
    flex-direction: column;
     h2{
        // margin:2% 0 2% 4%
        
         position:absolute;
         z-index:2;
         color:white;
     };
    button{
        position:absolute;
        z-index:2;
        right:3%;
        bottom:4%;
         outline: none;
        border:none;
        border-radius:40px;
        padding:2%;
        background-color:rgb(135, 166, 222);
        color:white;
       
    }
    button:active{
        
         transform: translateY(4px);
    }
}
.user-contain{
    display: flex;
    justify-content: center;
}
.box-img{
    display: flex;
    flex-direction: row;
    justify-content:center
}
.user-box{
    width:100%;
    margin-top:3vh;
    display:flex;
    flex-direction:column
}
.user-menu{
    margin-top:3vh;

    display:flex;
    flex-direction: row;
    justify-content:center;
    div{
        margin:3vw;
    };

}
.buttonM{
    background:cornflowerblue !important
}
@media (max-width: 700px){
    .login-box{
    width:97%;
    height:80%;
    display:flex;
    flex-direction: column;
     h2{
        // margin:2% 0 2% 4%
        
         position:absolute;
         z-index:2;
         color:white;
     };
    button{
        position:absolute;
        bottom: 40%;}
}}
</style>