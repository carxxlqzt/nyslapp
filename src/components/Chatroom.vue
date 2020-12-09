<template>
<div>
  <div v-if="user==null">
    <div class="login">
      <div>
      <h3> Login with Google
      </h3>
   <i class="fas fa-comments"></i>
    <b-button @click="login()">
      Login
    </b-button></div></div>
  </div>
  <div v-else class="cont">
         <Titulo title="Forum"/>
    
      <div class="contain">

    <!-- <h2>    Hi!!</h2>
    <h3>  {{index}} </h3> -->
    <div class="body">
       <!-- <transition enter-active-class="animated fadeInRightBig" leave-active-class="animated fadeInLeft"> -->
       <div class="chatMsg" id="chat">
        <div v-for="(message,index) in messages" :key="index" >
       <!-- <transition enter-active-class="animated fadeInLeft"> -->
        <div class="infoMsg">
         <img class="imgUser" :src="message.userPhoto" >
          <p>
            {{message.author.split(" ")[0]}} :
          </p>
         </div>
         <!-- </transition> -->
         <div class="msgBody"><p>{{message.body}}</p></div>
          
        </div>
        </div> 
       

       <!-- </transition > -->
        <div class="inputChat">
        <input type="text" placeholder=" Enter your message :)" id="box" />
        <b-button @click="post()">Send</b-button>
      </div>
      </div>
     
  </div>
</div>
</div>
</template>

<script>
import { db } from "../firebase/db";
import firebase from "firebase/app";
import "firebase/auth";
import { mapState } from "vuex";
import  Titulo from "../components/Titulo.vue"

export default {
name:"Chatroom",
data:
    function () {
        return{
            index:this.$route.params.id,
             messages: [],
        }
    },
     components:{
        Titulo
    },
     computed: {
    ...mapState(["user"]),
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
        },
    post() {
      let folder = db.ref("forum/chat" + this.$route.params.id)
      let input = document.getElementById("box");
      let post = {
        body: input.value,
        author: this.user.displayName,
        userPhoto:this.user.photoURL,
        date: new Date(),
      };
      folder.push(post);

      input.value = "";
    },
  },
  
  mounted() {
    this.messages = []
      // let chat=  document.getElementById("chat");

    db.ref("forum/chat" + this.$route.params.id).on(
      "child_added",
      (snapshot) => {
        this.messages.push(snapshot.val());
        // chat.scrollTop=chat.scrollHeight
      }
    );
  },
}

</script>

<style lang="scss" scoped>
.cont{
    height:100vh;
}
.contain{ 
    margin-top:20px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}
.body{
   width:100%;
    margin-left:10px;

    display:flex;
    flex-direction: column;
    align-content:center;
}
.imgUser{
  width:50px;
  height:50px;
  border-radius:30px ;
  border:rgb(189, 238, 250) solid;
}
.inputChat{
  position:fixed;
  width:100%;
  bottom:5%;
  input{
    width:70%;
  }
}
.chatMsg{
  // width:300px;
  height:370px;
  overflow:scroll
}
.msgBody{
  // display:flex;
  // justify-content:center;
  border-radius:50px;
  width:80%;
  margin-top:14px;
  background:rgba(148, 158, 216, 0.554);
  padding: 10px 0px 10px 10px;

}
.infoMsg{
  width:20%;
  margin-top:14px;

  display:flex;
 flex-direction: row;
 align-items:center;
 justify-content: space-around;
 p{
   margin:0px ;
  //  padding: 0px 0px 0px 10px;
  //  width:80%;
 }
}
@media (max-width: 600px){
  .body *{
    color:white;
    margin-left:10px;
  }
//   .contain{
    
//   }
h3{
  color:white
}
 }
 .login{
   height:100vh;
   display:flex;
   justify-content:center;
   align-content:center;
   div{
    margin-top:20px;
   display:flex;
   flex-direction: column;
   i{
     font-size: 200px;
     color:rgb(189, 238, 250)
   }
  }
 }
</style>