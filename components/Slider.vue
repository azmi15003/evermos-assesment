<template>
<div class="container">
  <span class="leftArrow" @click="prev()">&#10094;</span>
  <div class="slider">
    <div v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" width="100%" />
    </div>
  </div>
  <span class="rightArrow" @click="next()">&#10095;</span>

  <div class="circle">
  </div>
</div>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      images: [
        'https://static.id.gtech.asia/prod/100003/20220922/5700F8C277A9329471891F4AED1AACAA.jpeg?x-oss-process=image/resize,w_2200/format,webp',
        'https://static.id.gtech.asia/prod/100003/20210319/5D85211A437148C9CDC279244A24C49F.jpeg?x-oss-process=image/resize,w_2200/format,webp',
        'https://static.id.gtech.asia/prod/100003/20210319/59850BC55972A8274BBB6D922A083C6C.jpeg?x-oss-process=image/resize,w_2200/format,webp',
        ],
      timer: null,
      currentIndex: 0,
    }
  },
    mounted: function() {
      this.startSlide();
    },

    methods: {
      startSlide: function() {
        this.timer = setInterval(this.next, 4000);
      },


      next: function() {
        this.currentIndex += 1
      },
      prev: function() {
        this.currentIndex -= 1
      }
    },

    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }

}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
  border: 1px solid #cccccc;
  margin: auto;
  position: relative;
  box-shadow: 0px 0px 2px #a3a3a3;
}

.container .slider {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.container .slider {
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  z-index: 0;
  left: 0px;
  opacity: 0;
}
.container .slider{
  z-index: 1;
  opacity: 1;
  animation: imageAnimateOpacity 1s ease;
}

.container .leftArrow , .container .rightArrow {
  position: absolute;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  background-color: black;

  border-radius: 100%;
  font-weight: bold;
  font-size: 20px;
  color: white;
  top: 45%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container >  span:hover {
  background-color: #066c6c;
  transition: 0.2s;
}
.container .leftArrow {
  left: -40px;
  animation: leftArrow 0.5s ease;
}

@keyframes leftArrow {
  from {
    left: 0px;
    opacity: 0;
  }
  to {
    opacity: 1;
    left: -40px;
  }
}
.container .rightArrow {
  right: -40px;
  animation: rightArrow 0.5s ease;

}

@keyframes rightArrow {
  from {
    opacity: 0;
    right: 0px;
  }
  to {
    opacity: 1;
    right: -40px;
  }
}

.circle {
  margin-top: 20px;
  text-align: center;
}

.circle span {
  display: inline-block;
  margin: 5px;
  padding: 5px;
  border: 2px solid silver;
  box-shadow: 0px 0px 1px silver;
  border-radius: 100%;
  cursor: pointer;
}
.container .slider > img {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 25px;
  height: 25px;
  z-index: 3;
  cursor: pointer;
  background-color: white;
  opacity: 0.7;

}
@media screen and (max-width: 800px) {
  .container {
    width: 85%;
  }
}
</style>
