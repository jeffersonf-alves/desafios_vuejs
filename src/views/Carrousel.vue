<template>
  <p class="font-italic text-center font-weight-light">Slider de imagens, nesse desafio você pode implementar <br>
    adicionando e removendo classes para fazer essa animação<br>Mas fique a votando pra fazer do seu jeito</p>
  <div class="carrousel container  bg-white flex-column bg-light d-flex justify-content-center align-items-center">
      <animation>
          <img class="border rounded position-relative" :class="{changeleft : slider == 1}" v-if="slider == 1" :src="images[0].url" />
          <img class="border rounded position-relative" :class="{changeleft : slider == 2}" v-if="slider == 2" :src="images[1].url" /> 
          <img class="border rounded position-relative" :class="{changeleft : slider == 3}" v-if="slider == 3" :src="images[2].url" /> 
      </animation>
      <ul class="d-flex mt-4">
          <li @click="slider = 1" :class="{sliderActive : slider == 1}"></li>
          <li @click="slider = 2" :class="{sliderActive : slider == 2}"></li>
          <li @click="slider = 3" :class="{sliderActive : slider == 3}"></li>
      </ul>
  </div>
</template>

<script>

export default {
  data: function (){
    return {
       imagem:'../assets/image01.jpg',
       nome: "Jefferson",
       slider: 1,
       sliderClick: false,
       images: [
         {id:0, url: require("@/assets/images/image01.jpg")}, 
         {id:1, url: require("@/assets/images/image02.jpg")}, 
         {id:3, url: require("@/assets/images/image03.jpg")}]
    }
  },
  methods: {
      changeSlider() {
          
          }
        
      }
}


</script>

<style>
img {
  width: 450px;
  height: 300px;
}

@media only screen and (max-width: 480px) {
  img {
      width: 350px;
      height: 210px;
  }
}

ul > li {
  width: 30px;
  height: 30px;
  margin: 5px;
  list-style: none;
  border-radius: 100%;
  border: 2px solid black;
  cursor: pointer;
}
@keyframes changeL {
  0% {
    left: 400px;
    opacity: 0;
  } 50% {
    opacity: 1;
  } 100% {
    left: 0;
    opacity: 1;
  }
}

.changeleft {
  animation: changeL 1s;
}

.sliderActive {
  background-color: black;
}

.v-enter {
  opacity: 0;
}

.v-enter-active {
  opacity: 1;
}
.v-leave {
  opacity: 1;
} 
.v-leave-to {
  opacity: 0;
}
</style>
