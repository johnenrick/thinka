<template>
  <div class="d-md-flex fixed-top font-weight-bold border-bottom align-items-center py-1 bg-white" style="min-height: 46px!important">
    <div v-if="!hideBranding" class="px-2 w-sm-100 d-flex align-items-center" style="z-index:1">
      <router-link :to="'/'" class="navbar-brand py-0 text-lowercase text-primary" style="font-size:1.60875em">
        <!-- Thinka.io -->
        <img src="@/assets/logo.png" style="height:21px; width:auto"/>
      </router-link>
      <!-- <router-link v-if="user === null" to="/login" class="btn btn-primary d-inline d-md-none ml-auto">Log In</router-link> -->
      <div class="flex-fill text-right d-md-none">
        <UserInfo @open-login="openLogIn" />
      </div>
    </div>
    <div v-show="authenticationStatus !== 'authenticating'" class="menuContainer d-flex flex-fill" style="max-height:38px!important">
      <!-- <LogInForm v-if="user === null" class="ml-auto d-none d-md-block" /> -->
      <div class="mainMenuItems d-flex justify-content-around align-items-center container px-0">
        <router-link to="/dashboard" :class="routePath === '/dashboard' ? 'border-bottom border-primary border-width' : 'text-secondary'" class="shadow-none py-2 -2 header-icon flex-fill text-center"><fa icon="home" /> </router-link>
        <router-link to="/search" :class="routePath === '/search' ? 'border-bottom border-primary border-width' : 'text-secondary'" class="shadow-none py-2 -2 header-icon flex-fill text-center"  tag="button"><fa icon="search" /></router-link>
        <router-link to="/branch" :class="routePath.indexOf('/branch') !== -1 ? 'border-bottom border-primary border-width' : 'text-secondary'" class="shadow-none py-2 -2 header-icon flex-fill text-center"  tag="button"><CustomIcon icon="tree" /></router-link>
        <router-link to="/bookmarks" :class="routePath === '/bookmarks' ? 'border-bottom border-primary border-width' : 'text-secondary'" class="shadow-none py-2 -2 header-icon flex-fill text-center"  tag="button"><fa icon="bookmark" /></router-link>
        <router-link to="/notification" :class="routePath === '/notification' ? 'border-bottom border-primary border-width' : 'text-secondary'" class="shadow-none py-2 -2 header-icon flex-fill text-center"  tag="button">
          <fa-layers full-width >
            <fa icon="bell" />
            <fa-layers-text v-if="rerenderNotificationCount && unopenedNotificationCount" counter :value="unopenedNotificationCount" position="top-right" class="fa-right-4 float-right" style="margin-left:auto; maright-right:0;font-size:1.5em" />
          </fa-layers>
        </router-link>
        <router-link to="/more-menu" class="text-secondary shadow-none py-1 -2 header-icon flex-fill text-center"  tag="button"><fa icon="bars" /></router-link>
      </div>
      <UserInfo v-if="!hideBranding" @open-login="openLogIn" class="d-none d-md-inline-block " style="position:absolute; margin-left: calc(100% - 63px)"/>

      <!-- <div class="navbar-nav">
        
        <a class="nav-item nav-link" href="#">Features</a>
        <a class="nav-item nav-link" href="#">Pricing</a>
        <a class="nav-item nav-link disabled" href="#">Disabled</a>
      </div> -->
      <!-- <ul class="navbar-nav mr-auto">
        <li v-if="user" class="nav-item">
          
        </li>
        
      </ul>
      
      <ul class="nav navbar-nav navbar-right">
        <li v-if="user" class="nav-item mb-sm-1 mr-1 font-style-2">
          <router-link to="/new-statement" class="nav-item nav-link active btn-primary text-white rounded px-2 font-style-2"><fa icon="plus" /> Create Tree </router-link>
        </li>
        <li class="nav-item">
          
        </li>
      </ul> -->

    </div>
  </div>
  <LogInModal ref="logIn" />
</template>
<script>
import Auth from '@/core/auth'
// import LogInForm from './header-components/LogInForm'
import UserInfo from './header-components/UserInfo'
import CustomIcon from '@/components/CustomIcon'
import LogInModal from '@/components/login/LogInModal'
import NotificationUserAPI from '@/api/notification-user'
export default {
  components: {
    // LogInForm,
    UserInfo,
    CustomIcon,
    LogInModal
  },
  mounted(){
    setTimeout(() => {
      NotificationUserAPI.checkNotification()
    }, 100)
  },
  data(){
    return {
      user: Auth.user(),
      authenticationStatus: Auth.status(),
      rerenderNotificationCount: false
    }
  },
  
  methods: {
    openLogIn(){
      this.$refs.logIn._open()
    }
  },
  watch: {
    unopenedNotificationCount:{
      handler(){
        this.rerenderNotificationCount = false
        setTimeout(() => {
          this.rerenderNotificationCount = true
        }, 400)
      },
      immediate: true
    }
  },
  computed:{
    unopenedNotificationCount(){
      const notificationUsers = NotificationUserAPI.notificationUsers.value
      let unopenedCount = 0;
      notificationUsers.forEach(notificationUsers => {
        if(notificationUsers['status'] * 1 === 0){
          ++unopenedCount
        }
      })
      return unopenedCount
    },
    routePath(){
      return this.$route['path']
    },
    hideBranding(){
      return typeof this.$route['meta']['hideBranding'] !== 'undefined' && this.$route['meta']['hideBranding']
    }
  }
}
</script>
<style scoped>
@media (min-width: 768px) {
  .header-icon {
    font-size: 1.16em
  }
  .menuContainer{
    position:absolute;
    width: 100%;
    /* width: calc(100% - 320px);
    margin-left: 160px; */
    /* margin-left: calc(100% - 900px160px); */
    /* width: calc(100% - 160px) */
  }
  /* .mainMenuItems {
    position:absolute
  } */
}
@media (min-width: 769px) and (max-width: 1230px) {
  .mainMenuItems.container{
    /* margin-left: 160px!important */
    /* max-width: calc((100% - 320px))!important */
    margin-left: 130px;
    margin-right: 65px;
  }
  /* .mainMenuItems {
    position:absolute
  } */
}
</style>
