import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    okS:true,
    user:null,
    okO:true,
    monthA:null,
    selectedOrderS:null,
    selectedOrderO:null,
    landscape: window.matchMedia("(min-width: 600px)").matches,
    locations:{
      month1:"september",
      month2:"october",
      maps:{
        location1:{
          school:"AJ Katzenmaier Elementary",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6570181484003!2d-87.63125808593922!3d41.900232772010305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f69da7%3A0x15e198c063fc787c!2sAJ%20Katzenmaier%20Elementary!5e0!3m2!1ses!2sar!4v1603287424969!5m2!1ses!2sar"
        },
        location2:{
          school:"Greenbay Elementary",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0227959921594!2d-87.64002218593853!3d41.91386867115654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3407260c45b%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses!2sar!4v1603288459519!5m2!1ses!2sar"
        },
        location3:{
          school:"Howard A Yeager Elementary",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585664877748!2d-87.6651101859381!3d41.923264970568006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f852467%3A0xb6cb22b2f0358874!2sHoward%20A%20Yeager%20Elementary!5e0!3m2!1ses!2sar!4v1603288749431!5m2!1ses!2sar"
        },
        location4:{
          school:"Marjorie P Hart Elementary",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289653643523!2d-87.6481613859378!3d41.92962687016952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2637f9d7%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses!2sar!4v1603288862354!5m2!1ses!2sar"
        },
        location5:{
          school:"North Elementary",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.9586480287267!2d-87.88350288593227!3d42.04406706299301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb793e8d23749%3A0xbdd4da26438cf3a0!2sNorth%20Elementary%20School!5e0!3m2!1ses!2sar!4v1603289031009!5m2!1ses!2sar"
        },
        location6:{
          school:"South Elementary",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.0704497392267!2d-87.88823348593341!3d42.02022106448966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb78561e99553%3A0xc5f956c57f583d4a!2sSouth%20Elementary%20School!5e0!3m2!1ses!2sar!4v1603289148597!5m2!1ses!2sar"
        }
      },
      september:{
        dates:{
          date1:{
          class:"active",
          date:"9/01",
          teams1:{
          teams:"U1 and U4",
          location:"Aj Katzenmaier",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6570181484003!2d-87.63125808593922!3d41.900232772010305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f69da7%3A0x15e198c063fc787c!2sAJ%20Katzenmaier%20Elementary!5e0!3m2!1ses!2sar!4v1603287424969!5m2!1ses!2sar",
          times:"9:30 a.m."},
          teams2:{
            teams:"U3 and U2",
            location:"Greenbay",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0227959921594!2d-87.64002218593853!3d41.91386867115654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3407260c45b%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses!2sar!4v1603288459519!5m2!1ses!2sar",
            times:"1:00 p.m."
          }},
          date2:{
            date:"9/02",
            
          },
            date3:{
              date:"9/03"},
              date4:{
                date:"9/04"},
                date5:{
                  date:"9/05"},
                  date6:{
                    date:"9/06"},
              date7:{
            date:"9/07"},

          date8:{
             date:"9/08",
             class:"active",
            teams1:{
            teams:"U5 and U6",
            location:"Howard A Yeager",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585664877748!2d-87.6651101859381!3d41.923264970568006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f852467%3A0xb6cb22b2f0358874!2sHoward%20A%20Yeager%20Elementary!5e0!3m2!1ses!2sar!4v1603288749431!5m2!1ses!2sar"
          ,
            times:"9:00 a.m."
            },
            teams2:{
              teams:"U6 and U1",
              location:"Marjorie P Hart",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289653643523!2d-87.6481613859378!3d41.92962687016952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2637f9d7%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses!2sar!4v1603288862354!5m2!1ses!2sar"
          ,
              times:"1:00 p.m."
            }},
            date9:{
              date:"9/09"},
              date10:{
                date:"9/10"},
                date11:{
                  date:"9/11"},
                  date12:{
                    date:"9/12"},
                    date13:{
                      date:"9/13"},
                date14:{
              date:"9/14"},
  
            date15:{
               date:"9/15", 
             class:"active",

              teams1:{
              teams:"U2 and U4",
              location:"North",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.9586480287267!2d-87.88350288593227!3d42.04406706299301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb793e8d23749%3A0xbdd4da26438cf3a0!2sNorth%20Elementary%20School!5e0!3m2!1ses!2sar!4v1603289031009!5m2!1ses!2sar"
          ,
              times:"9:30 a.m."
              },
              teams2:{
                teams:"U3 and U5",
                location:"AJ Katzenmaier",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6570181484003!2d-87.63125808593922!3d41.900232772010305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f69da7%3A0x15e198c063fc787c!2sAJ%20Katzenmaier%20Elementary!5e0!3m2!1ses!2sar!4v1603287424969!5m2!1ses!2sar",

                times:"1:00 p.m."
              }},
              date16:{
                date:"9/16"},
                date17:{
                  date:"9/17"},
                  date18:{
                    date:"9/18"},
                    date19:{
                      date:"9/19"},
                      date20:{
                        date:"9/20"},
                  date21:{
                date:"9/21"},
    
              date22:{
                 date:"9/22", 
             class:"active",

                teams1:{
                teams:"U1 and U3",
                location:"South",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.0704497392267!2d-87.88823348593341!3d42.02022106448966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb78561e99553%3A0xc5f956c57f583d4a!2sSouth%20Elementary%20School!5e0!3m2!1ses!2sar!4v1603289148597!5m2!1ses!2sar"
          ,
                times:"9:30 a.m."
                },
                teams2:{
                teams:"U2 and U6",
                location:"Howard A Yeager",
                url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585664877748!2d-87.6651101859381!3d41.923264970568006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f852467%3A0xb6cb22b2f0358874!2sHoward%20A%20Yeager%20Elementary!5e0!3m2!1ses!2sar!4v1603288749431!5m2!1ses!2sar"
                ,
                times:"1:00 p.m." 
                }},
                date23:{
                  date:"9/23"},
                  date24:{
                    date:"9/24"},
                    date25:{
                      date:"9/25"},
                      date26:{
                        date:"9/26"},
                        date27:{
                          date:"9/27"},
                    date28:{
                  date:"9/28"},
      
                date29:{
                   date:"9/29",
                   class:"active",
                  teams1:{
                  teams:"U4 and U5",
                   location:"Greenbay",
                   url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0227959921594!2d-87.64002218593853!3d41.91386867115654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3407260c45b%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses!2sar!4v1603288459519!5m2!1ses!2sar",
                   times:"9:30 a.m."
                  },
                  teams2:{
                    teams:null,
                    location:null,
                    url:null,
                    times:null 
                    }
                 },
                 date30:{
                  date:"9/30"},
                  date31:{
                    date:"9/31"},
      }
    },
   october:{
      dates:{ 
        date1:{
        date:"10/01",
        
      },
        date2:{
          date:"10/02",
          
        },
          date3:{
            date:"10/03"},
            date4:{
              date:"10/04"},
              date5:{
                date:"10/05"},
        date6:{ 
          date:"10/06",
          class:"active",

          teams1:{
          teams:"U2 and U5",
          location:"Marjorie P Hart",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289653643523!2d-87.6481613859378!3d41.92962687016952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2637f9d7%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses!2sar!4v1603288862354!5m2!1ses!2sar",
          times:"9:30 a.m."
        },
        teams2:{
          teams:"U1 and U6",
          location:"South",
          url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.0704497392267!2d-87.88823348593341!3d42.02022106448966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb78561e99553%3A0xc5f956c57f583d4a!2sSouth%20Elementary%20School!5e0!3m2!1ses!2sar!4v1603289148597!5m2!1ses!2sar",
          times:"1:00 p.m."
        }
      },
      date7:{
        date:"10/07",
        
      },
        date8:{
          date:"10/08",
          
        },
          date9:{
            date:"10/09"},
            date10:{
              date:"10/10"},
              date11:{
                date:"10/11"},
                date12:{
                  date:"10/12"},
      date13:{ 
         date:"10/13",
         class:"active",

        teams1:{
        teams:"U2 and U4",
        location:"Howard A Yeager",
        url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585664877748!2d-87.6651101859381!3d41.923264970568006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f852467%3A0xb6cb22b2f0358874!2sHoward%20A%20Yeager%20Elementary!5e0!3m2!1ses!2sar!4v1603288749431!5m2!1ses!2sar",
        times:"9:30 a.m."
      },
      teams2:{
        teams:"U5 and U1",
        location:"Greenbay ",
        url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0227959921594!2d-87.64002218593853!3d41.91386867115654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3407260c45b%3A0xb351205fae50c6f3!2sGreenbay%20Elementary!5e0!3m2!1ses!2sar!4v1603288459519!5m2!1ses!2sar",
        times:"1:00 p.m."
      }
    },
    date14:{
      date:"10/14",
      
    },
      date15:{
        date:"10/15",
        
      },
        date16:{
          date:"10/16"},
         

          date17:{
            date:"10/17"},
            date18:{
              date:"10/18"},
              date19:{
                date:"10/19"},
    date20:{
      date:"10/20", 
      class:"active",
      teams1:{
      teams:"U6 and U3",
      location:"North",
      url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.9586480287267!2d-87.88350288593227!3d42.04406706299301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb793e8d23749%3A0xbdd4da26438cf3a0!2sNorth%20Elementary%20School!5e0!3m2!1ses!2sar!4v1603289031009!5m2!1ses!2sar",
      times:"9:30 a.m."
  },
    
    teams2:{
      teams:"U2 and U4",
      location:"Marjorie P Har",
      url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.289653643523!2d-87.6481613859378!3d41.92962687016952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2637f9d7%3A0xdbff5d5dfcfcfa35!2sMarjorie%20P%20Hart%20Elementary!5e0!3m2!1ses!2sar!4v1603288862354!5m2!1ses!2sar",
      times:"1:00 p.m."
    }},
    date21:{
      date:"10/21",
      
    },
      date22:{
        date:"10/22",
        
      },
        date23:{
          date:"10/23"},
          date24:{
            date:"10/24"},
            date25:{
              date:"10/25"},
              date26:{
                date:"10/26"},
    date27:{ 
      date:"10/27",
      class:"active",
      teams1:{
      teams:"U3 and U1",
      location:"AJ Katzenmaier",
      url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6570181484003!2d-87.63125808593922!3d41.900232772010305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f69da7%3A0x15e198c063fc787c!2sAJ%20Katzenmaier%20Elementary!5e0!3m2!1ses!2sar!4v1603287424969!5m2!1ses!2sar",
      times:"9:30 a.m."
  },
    
    teams2:{
      teams:"U5 and U6",
      location:"Howard A Yeager",
      url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585664877748!2d-87.6651101859381!3d41.923264970568006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f852467%3A0xb6cb22b2f0358874!2sHoward%20A%20Yeager%20Elementary!5e0!3m2!1ses!2sar!4v1603288749431!5m2!1ses!2sar",
      times:"1:00 p.m."
    }},
    date28:{
      date:"10/28"},
      date29:{
        date:"10/29"},
        date30:{
          date:"10/30"},
          date31:{
            date:"10/31"}
  }
      }}
      
  
  },
  mutations: {
    listenResize(state){
      window.addEventListener(
        "resize",
        () => (state.landscape = window.matchMedia("(min-width: 600px)").matches)
      );
    },
    changeOrderS(state,payload){
      state.selectedOrderS = payload
      state.okS=false
      state.monthA='september'
      
      
    },
    changeOrderO(state,payload){
      state.selectedOrderO = payload
      state.okO=false
      state.monthA='october'
      
      
    },
    listenUser(state){
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          state.user = user
        } else {
          state.user = null
        }
      });
    }
    }
  ,
  actions: {
  },
  modules: {
  }
})
