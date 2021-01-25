<template>
  <div>
    <div class="bg-secondary text-white pt-2 pb-2" v-show="showSearchBox">
      <div class="container">
        <!-- Search form -->
        <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <i class="fa fa-search" aria-hidden="true"></i>
          <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
            aria-label="Search">
        </form>
      </div>
    </div>
    <div class="header shadow-sm p-2 rounded d-md-none d-lg-block bg-white">
        <div class="container">
            <div class="row">
                <div class="col-xl-2 text-center p-2">
                    <a href="#"><img src="../assets/images/logo/Logoweb2.png" alt="" class="logo"></a>
                </div>
                <div class="col-xl-8 d-flex align-items-center">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                              <router-link class="nav-link" to="/">Home Page<span class="sr-only">(current)</span></router-link>
                            </li>
                            <!-- Dropdown -->
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Brands
                                </a>
                                <ul class="dropdown-menu">
                                    <li v-for="brand in brands" :key="brand.id">
                                      <router-link class="dropdown-item" to="/about">{{ brand.title }}</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class=" nav-item dropdown-mega">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Categories
                                </a>
                                <div class="dropdown-content p-3">
                                  <div class="">
                                    <div class="column" v-for="category in categories" :key="category.id">
                                      <h3>{{ category.title }}</h3>
                                      <router-link v-for="categoryChild in category.children" :key="categoryChild.id" class="dropdown-item" to="#">
                                        {{ categoryChild.title }}
                                      </router-link>
                                    </div>
                                  </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Groups
                                </a>
                                <ul class="dropdown-menu">
                                    <li v-for="group in groups" :key="group.id">
                                      <router-link class="dropdown-item" to="/about">{{ group.title }}</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                          </ul>
                        </div>
                    </nav>
                </div>
                <div class="col-xl-2 p-4">
                  <router-link class="text-decoration-none text-dark" to="/cart"><i class="fa fa-shopping-cart cart-logo mr-3" aria-hidden="true">&nbsp;Cart: {{GET_CART.length}}</i></router-link>
                  <i class="fa fa-search search-logo" aria-hidden="true" @click="showSearchBox=!showSearchBox"></i>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {GET_CART} from '../constants/mutation-type'
import {mapGetters} from 'vuex'
export default {
  data(){
        return{
          showSearchBox: false,
          brands: null,
          categories: null,
          groups: null
        }
  },
  computed: {
    ...mapGetters({
      GET_CART
    })
  },
  mounted () {
        axios
        .get('http://apiecommerce.huesoft.net/api/brands')
        .then(response => (this.brands = response.data.data))
        .catch(error => console.log(error)),
        axios
        .get('http://apiecommerce.huesoft.net/api/categories')
        .then(response => (this.categories = response.data.data))
        .catch(error => console.log(error)),
        axios
        .get('http://apiecommerce.huesoft.net/api/groups')
        .then(response => (this.groups = response.data.data))
        .catch(error => console.log(error))

    }

}
</script>

<style scoped>
.logo {
  width: 80%;
}
.search-logo{
  font-size: 22px!important;
}
.cart-logo{
  font-size: 20px!important;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-mega:hover .dropdown-content {
  display: block;
}
.dropdown-content .header {
  background: #fff;
  padding: 16px;
  color: white;
}
/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  background-color: #fff;
  height: auto;
}
.column h3 {
  padding: 16px;
  font-weight: bold;
}

.column a {
  float: none;
  color: black;
  padding: 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* .column a:hover {
  background-color: #ddd;
} */
</style>
