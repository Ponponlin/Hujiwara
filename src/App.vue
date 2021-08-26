<template>
  <div class="top">
    <span style="margin-left: 100px;">大大公司</span>
    <div class="topEnd">
      <button class="btn btn-primary rounded" style="margin-right:20px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
          <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
          <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
        </svg>     
      </button>

        <span id="timeConunter">{{ countDown }}</span>
    </div>
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/member">Member</router-link>
  </div> -->
 
  <div class="container-fluid m-0 p-0">
    <div class="row">
      <div class="col-3 p-0">
        <sidemenu/>
      </div>
      <div class="col-9 p-0">
          <router-view/>
      </div>
    </div>
  </div>
  

  
</template>

<script>
import sidemenu from './components/sidemenu.vue'

export default {
  components: { sidemenu },
  data(){ 
    return{
      countDown: 60
      
    }
  },
  methods: {
    //每60秒頁面刷新
    refresh(){ 
      this.countDown--;
      if(this.countDown == 0){
        console.log("page refresh!");
        this.countDown = 60
      }     
    }
  },
  mounted(){     
    //啟動計時器
    var timer = setInterval( this.refresh, 1000)
    //console.log("mounted!")
  }
}

</script>

<style>
@import './css/App.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
