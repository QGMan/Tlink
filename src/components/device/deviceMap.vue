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
        var bottom_left_control = new BMap.ScaleControl({
          anchor: BMAP_ANCHOR_BOTTOM_LEFT
        }); // 左上角，添加比例尺
        var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
 map.addControl(bottom_left_control);
 map.addControl(top_left_navigation);
        map.addControl(new BMap.MapTypeControl({

        })); //添加地图类型控件
        map.enableScrollWheelZoom(); //启用鼠标滚轮缩放地图

        var geolocation = new BMap.Geolocation();
        //开启SDK辅助定位
        geolocation.enableSDKLocation();
        geolocation.getCurrentPosition(r => {
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          // alert("您的位置：" + r.point.lng + "," + r.point.lat);
        }); //自动定位到当前位置
        map.centerAndZoom(point, 11); // 初始化地图,设置中心点坐标和地图级别

        var city = document.getElementById("cityName").value;
        if (city != "") {
          map.centerAndZoom(city, 11); // 用城市名设置地图中心点
        }
        map.setCurrentCity("深圳"); // 设置地图显示的城市 此项是必须设置的
      }
    },
    theLocation() {},
    components: {}
  };

</script>

<style scoped>
  .allmap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .father {
    position: absolute;
    width: 90%;
    height: 99%;

  }

  .son {
    position: relative;
    width: 100%;
    height: 100%;
  }

  #r-result {
    width: 220px;
    font-size: 14px;
    position: absolute;
    left: 80px;
    top: 20px;
  }

</style>
