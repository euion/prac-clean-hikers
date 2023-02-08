<template>
  <div>산찾기 페이지 입니다.
   <p> {{ $route.query.region }}</p>
  <mountain-name :region="$route.query.region" :date="$route.query.date" :personnel="$route.query.personnel"/>
</div>
</template>

<script>
import MountainName from '@/components/MountainName.vue';

export default{
  name: 'mountain-detail',
  components:{MountainName},

  // props:{
  //   region:{
  //     type:String,
  //     default:0,
  //   },
  //   date:{
  //     type: String,
  //     default: 0,
  //   },
  //   personnel:{
  //     type:Number,
  //     default:1
  //   }
  // },
  // mounted(){
  //   this.region
  // }
}

</script>
