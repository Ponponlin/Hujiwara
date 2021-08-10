<template>
  <div class="sidemenu">
         <div class="flex-shrink-0 p-3 bg-secondary justify-content-start h-100 ">
            <ul class="list-unstyled ps-0">
              <li class="mb-1">              
                <router-link to="/">
                  <button class="btn btn-toggle col-12 align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                  </svg>
                  首頁
                </button>   
                </router-link>                     
              </li>
              <li class="mb-1">
                <router-link to="/member" >
                  <button class="btn btn-toggle col-12 align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                  會員管理
                </button>  
                </router-link>
                            
              </li>
              <li class="mb-1">
                <button class="btn btn-toggle col-12 align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
                    <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
                  </svg>
                  報表查詢
                </button>
                <div class="collapse" id="orders-collapse">
                  <div class="wrapper wrapper-custom">
                    <ul class="d-block btn-toggle-nav col-12 list-unstyled fw-normal pb-1 small">                    
                      <li><a href="#" class="link-light text-decoration-none fs-6">會員報表</a></li>
                      <li><a href="#" class="link-light text-decoration-none fs-6">遊戲報表</a></li>
                      <li><a href="#" class="link-light text-decoration-none fs-6">活動報表</a></li>                    
                    </ul>
                  </div>
                </div>
              </li>
              <li class="border-top my-3"></li>
              <li class="mb-1">
                <button class="btn btn-toggle col-12 align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-server" viewBox="0 0 16 16">
                    <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"/>
                    <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z"/>
                    <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"/>
                  </svg>
                  後台管理
                </button>
                <div class="collapse" id="account-collapse">
                  <div class="wrapper wrapper-custom">
                    <ul class="btn-toggle-nav d-block list-unstyled fw-normal pb-1 small">
                      <li><a href="#" class="link-light text-decoration-none fs-6">管理員</a></li>
                      <li><a href="#" class="link-light text-decoration-none fs-6">登入紀錄</a></li>
                      <li><a href="#" class="link-light text-decoration-none fs-6">操作紀錄</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sidemenu {
  margin: 0px;
  padding: 0px;
  height: 1440px;
}
.sidemenu button {
  color: white;
  ;
}
</style>