<template>
<div>
  
 <template v-if="!landscape">
        <div class="contPrincipal" >
      <div class="contTrans" @click="showSidebar=false"> </div>
       <div class="container" :class="{'show':showSidebar}">
           
       <div class="control">
      <i class="fas fa-angle-double-right" @click="showNav"></i> 
         </div>
   
    
    <div class="navigation-links">
      <div>
        <router-link to="/">
          <div v-show="showLink" key="1"> <i class="fa fa-home"></i >  Home</div>
        </router-link>
        <router-link to="/schedule">
        <div v-show="showLink" key="2"> <i class="fa fa-calendar"></i> Schedule</div>
        </router-link>
        <router-link to="/locations">
        <div v-show="showLink" key="3"><i class="fa fa-map-marker"></i> Locations</div>
        </router-link>
        <router-link to="/Profile">
        <div v-show="showLink" key="4" >  <i class="fas fa-user-circle"> </i> Profile</div>
        </router-link>
      
      </div>
      
    </div>
        </div>
     <div class="router"> 
        <transition  enter-active-class="animated fadeInUp" > <router-view/> </transition>
        </div>

    </div>
      </template>
 <template v-else>
   <div class="box" >
    
       <div >
   <!-- <div class="contPrinci"> -->
 <div class="container show">
   <router-link to="/">
           <img class="logo"  src="../assets/nysl_logo.png" alt="nysl_logo" >
    </router-link>
    
    <div class="navigation-links">
      <div>
        
        <router-link to="/">
          <div  class="menuText" v-on:mouseover="name='Home'" v-on:mouseleave="name=null" key="1"> <i  class="fa fa-home">  </i > <p> {{name}}</p> </div>
        </router-link>
        <router-link to="/schedule">
        <div class="menuText" v-on:mouseover="name2='Schedule'" v-on:mouseleave="name2=null"  key="2"> <i class="fa fa-calendar">  </i><p> {{name2}}</p></div>
        </router-link>
        <router-link to="/locations">
        <div class="menuText" v-on:mouseover="name3='Locations'" v-on:mouseleave="name3=null"    key="3"><i class="fa fa-map-marker"> </i><p> {{name3}} </p> </div>
        </router-link>
        <router-link to="/contact">
        <div class="menuText" v-on:mouseover="name4='+ Info'" v-on:mouseleave="name4=null"  key="4">  <i class="fas fa-info-circle">  </i><p> {{name4}}</p></div>
        </router-link>
        <router-link to="/Profile">
        <div v-on:mouseover="name5='Profile'" v-on:mouseleave="name5=null"  class="menuText"  key="5">  <i class="fas fa-user-circle"></i><p> {{name5}}</p></div>
        </router-link>
        
      </div>
      
    </div>
        </div>
       </div>
       <div  class="rout">
       
     <transition  enter-active-class="animated fadeInLeft" > <router-view/>
     </transition>
     
 
       </div>
   
</div>
     
     <!-- </div>
     </div> -->
   </template>
   
</div>
</template>

<script>

  export default {
    data: () => {
      return {
        showSidebar: false,
        showLink: false,
        cond:false,
        name:null,
        name2:null,
        name3:null,
        name4:null,
        name5:null,
        landscape:window.matchMedia("(min-width: 600px)").matches
      }
    },

    methods: {
      showNav() {
        if(this.showSidebar) {
          this.showLink = false;
          setTimeout(() => {
            this.showSidebar = false;
          }, 500);
        }
        else {
          this.showSidebar = true;
          setTimeout(() => {
            this.showLink = true;
          }, 500);
        }
      }
    },
    beforeMount(){
  window.addEventListener("resize", ()=> this.landscape=window.matchMedia("(min-width: 600px)").matches)
}
  }
</script>

<style lang="scss" scoped>

// calc(100vh - 20px)
//  .contPrincipal{
//     width:100vw;
//     height:100vh;
//   }
@media (max-width: 600px) {
      .logo{width:50px;
    height:50px;
    margin-top:40px;
    margin-bottom:10px}
    .container {

    position: absolute;
    top: 0;
    left: 0;
    width: 70px;
    margin:0;
    height:480px;
     &.show {
      width: 170px;}}
    //   height:100%;}
}
.box{
width:100vw;
height:100vh;
display:grid;
position:relative;
 grid-template-columns:1fr 6fr;
    grid-template-rows: 1fr 

}
  .container {

    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 70px;
    // margin:0;
    // height:480px;
    display: flex;
    flex-direction:column;
      // justify-content:center;
      align-items: center;
      
    
    z-index: 999;
    transition: all .5s ease-in-out;
    .control {
      display: flex;
      justify-content: center;
      align-items: center;
      // width: 50px;

      i {
        font-size: 3rem;
        color:yellowgreen;
        cursor: pointer;
        transition: all .5s ease-in-out;
      }
    }
    &.show {
      // width: 170px;
      height:100%;
      background-color:  #81B121;
      .control > i {
        color: #fff;
        transform: rotateZ(-180deg);
      }
      .navigation-icons {
        color: #fff;
      }
    }
    .navigation-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 50px;
      float: left;
      i {
        font-size: 2em;
        padding: 10px 0;
        cursor: pointer;
        transition: all .5s ease-in-out;
        &:hover {
          color: #fff;
        }
      }
    }
    .navigation-links {
      padding-top: 14px;
      float: left;

      div {
        // font-size: 1.3ex;
        // padding-left: 10px;
        margin-bottom: 18px;
        color:rgb(39, 36, 36);
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  
  @mixin nav-childs($values...) {
    @each $var in $values {
      &:nth-child(#{$var}) {
        transition: transform linear calc(.1s * #{$var}), display .5s;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    @include nav-childs(1,2,3,4);
  }
  .fade-enter, .fade-leave-to {
    transform: scale(0);
  }
  @media (min-width: 600px) {
    .navigation-links {
       div {
        font-size: 1.3ex;}}
  .container{
   position:fixed;
   padding:0px;
    display: flex;
    flex-direction:column;
      // justify-content:space-around;
      align-items: center;
      
 &.show{
    max-width:15vw
      } 
}
  .logo{
    width:80px;
    height:80px;
    margin:50% 0 20% 0;

  }
  // .contPrinci{
  //   width:100vw;
  //   height:100vh;
   
  .contTrans{
    width:660px !important;
    height:800px !important;
    z-index:-1;
    background:transparent
  }  
  // }
  .rout{
    padding:0px 0px 0px 5px
  }
  // .router{
  //  padding:0px;
  // }
  //   margin-left:300px
  // }
}
.menuText:hover{
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-content: center;
  p{
    margin-left:3px;
  }
}
 @media (min-width: 720px) {
    .navigation-links {
      div {
        font-size: 1.5ex;}
    }
 }
</style>