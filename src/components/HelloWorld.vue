<template>
  <div>
    <mu-carousel >
      <mu-carousel-item v-for="(item,i) in bannerList" :key="i">
        <img  :src="item.pic" class="imgBanner"/>
      </mu-carousel-item>
    </mu-carousel>
aaaaaaaaa
  </div>
</template>

<script>
import  api from '../api/index'
export default {
  name: "HelloWorld",
  data(){
    return {
  bannerList:[]
    }
  },
  methods:{
    getinfo(){
     api.getBanner().then((res)=>{
       this.bannerList=res.banners
     })
    }
  },
  mounted(){
  this.getinfo()
  }
};
</script>

<style  scoped>
.imgBanner{
  /* height: 300px; */
  width: 375px;
  padding: 20px
}

</style>
