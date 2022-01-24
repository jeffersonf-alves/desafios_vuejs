<template>
  <div class="myContainer d-flex flex-column justify-content-between">
      <Header />


      <router-view/>

      <Footer />
  </div>
</template>


<script>
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'


export default {
  components: {
    Header, Footer
  }


}
</script>


<style>
.myContainer {
  width:100vw;
  height:100vh;

}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
