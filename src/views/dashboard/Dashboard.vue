<template class="overflow-hidden">
  <div>
    <div class="image-background pt-3 px-0 pb-8">
      <div class="container ">
        <SearchTree />
        <div class="row">
          <div class="col-12 col-md-6 pr-3 pr-sm-1">
            <router-link to="/new-statement" class="btn btn-lg btn-primary border-width-none d-flex align-items-center btn-shadow btn-sm-xl mb-3 mb-md-0">
              <div class="text-right flex-fill">
                <fa icon="project-diagram" />
              </div>
              <span class="ml-2 flex-fill text-left">Create New Tree</span>
            </router-link>
          </div>
          <div class="col-12 col-md-6 pl-3 pr-sm-1">
            <router-link to="/learning" class="btn btn-lg btn-primary border-width-none d-flex align-items-center btn-shadow btn-sm-xl">
              <div class="text-right flex-fill">
                <fa icon="book-reader" />
              </div>
              <span class="ml-2 flex-fill text-left">Visit Learning Center</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-4 pb-4 px-2 mt-n-3">
      <div class="shadow-light rounded-rounder bg-white" id="accordianList">
        <div class="">
          <AccordionHeader
            data-target="#collapseThree"
            icon="chart-line"
            text="Trending"
            class="border-width"
          />
          <div id="collapseThree" class="collapse show border-bottom" aria-labelledby="headingThree" data-parent="#accordianList">
            <Trending />
          </div>
        </div>
        <div v-if="user" class="">
          <AccordionHeader
            data-target="#collapseOne"
            icon="list"
            text="My Trees"
            class="border-width"
          />
          <div id="collapseOne" class="collapse border-bottom" aria-labelledby="headingOne" data-parent="#accordianList">
            <MyList v-if="user" class=" p-0" />
          </div>
        </div>
        <div v-if="user" class=" rounded-b">
          <AccordionHeader
            data-target="#collapseTwo"
            icon="cloud"
            text="My Thinka Tanks"
          />
          <div id="collapseTwo" class="collapse rounded-b border-bottom" aria-labelledby="headingTwo" data-parent="#accordianList">
            <div class=" m-2 p-0">
              <p class="card-text">Thinka Tanks can contain many logic trees and many users so they can chat and assist collaboration privately.</p>
              <table class="table ">
                <tbody>
                  <tr>
                    <td>Plant Lovers Tank</td>
                    <td>This tank relates to plants. Join us!</td>
                  </tr>
                  <tr>
                    <td>Politics</td>
                    <td>We work on critical thinking trees for politics such as policy debate or evaluation of political candidates.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Auth from '@/core/auth'
import Trending from './dashboard-components/Trending'
import MyList from './dashboard-components/MyList'
import AccordionHeader from './dashboard-components/AccordionHeader'
import SearchTree from './dashboard-components/SearchTree'
export default {
  components: {
    Trending,
    MyList,
    AccordionHeader,
    SearchTree
  },
  data(){
    return {
      user: Auth.user(),
      welcomeVisible: true
    }
  },
  mounted() {
    console.log('Start welcomeVisible: ' + this.welcomeVisible);
    if (localStorage.getItem('welcomeVisible')) {
      this.welcomeVisible = false;
    }
  },
  watch: {
    welcomeVisible(newValue) {
      localStorage.welcomeVisible = newValue;
    }
  }
}
</script>
