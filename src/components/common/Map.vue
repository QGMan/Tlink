<template>
  <div class="page">
    <!-- 地图容器 -->
    <div class="father">
      <div id="allmap" class="allmap">
      </div>
      <div id="r-result">
        城市名:
        <input id="cityName" type="text" style="width:100px; margin-right:10px;" />
        <input type="button" value="查询" @click="rendey()" />
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    mounted() {
      this.rendey();
    },
    methods: {
      rendey() {
        // 百度地图API功能
        var map = new BMap.Map("allmap"); // 创建Map实例
        var point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 11); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl({})); //添加地图类型控件
        map.enableScrollWheelZoom(); //启用鼠标滚轮缩放地图
        var city = document.getElementById("cityName").value;
        if (city != "") {
          map.centerAndZoom(city, 11); // 用城市名设置地图中心点
        }
        map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的      
      }
    },
    theLocation() {

    },
    components: {}
  };

</script>

<style scoped>
  .allmap {
    height: 350px;
  }
.father{
    position: relative;
}
  #r-result {
    width: 220px;
    font-size: 14px;
    position: absolute;
    left: 10px;
    top: 10px
  }

</style>
