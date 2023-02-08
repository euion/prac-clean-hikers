<template>
  <div>
    <h3>
      {{ leaveDate }}, {{region}}으로 여행가요! 선착순 {{ personnel }}명
    </h3>
  </div>
</template>

<script>
import dayjs from 'dayjs';


export default({
  name:"mountain-name",
  components:{
  dayjs
  },
  created(){
    console.log(this.$route.query.personnel)
  },
  props: {
    date: {
      type: Date,
    default:""
  },
    region:{
      type:String,
    default:"미설정",
    },
    personnel:{
      type:Number,
      default:1
    }
  },
  data(){
    return{
      leaveDate: dayjs().format("YY년 MM월 DD일"),
      year:'',
      month:'',
      day:'',
    }
  },
  mounted() {
    this.dateSplit();
  },
  methods:{
    dateSplit:function(){
      this.year = dayjs(this.leaveDate).year();
      this.month = dayjs(this.leaveDate).month();
      this.day = dayjs(this.leaveDate).day();
    }
  }
})
</script>
