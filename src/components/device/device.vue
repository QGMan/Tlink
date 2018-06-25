<template>
  <div class="page">
      <div class="d_left">
          <div class="d_left1">
                <h3>我的设备</h3>                  
              <ul>
                  <li>
                      <router-link to="/device/deviceDisplay">所有设备</router-link>
                  </li>
                  <li>
                      <router-link to="/device/device_1">已连接设备</router-link>
                  </li>
                  <li>
                      <router-link to="/device/device_0">未连接设备</router-link>
                  </li>
                  <li>
                      <router-link to="/device/deviceDelet">已删除设备</router-link>
                  </li>
                  <li>
                      <router-link to="">已禁用设备</router-link>
                  </li>
              </ul>
          </div>
          <div class="d_left2">
              <h3>管理设备</h3>
              <ul>
                  <li>
                      <router-link to="/device/deviceadd">添加设备</router-link>
                  </li>
                  <li>
                      <router-link to="">萤石云</router-link>
                  </li>
              </ul>
          </div>
      </div>
      <div class="d_right">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
a {
  font-size: 16px;
  color: #888888;
}
.d_left {
  width: 20%;
  float: left;
  min-height: 750px;
  border-right: 1px solid #ccc;
}
.d_left1 {
  padding: 20px 0 30px 40px;
}
.d_left1 h3 {
  margin-bottom: 20px;
}
.d_left1 ul li {
  margin-bottom: 20px;
}
.d_left2 {
  /* padding: 0 0 0 40px; */
}
.d_left2 h3 {
  padding: 0 0 10px 40px;
  border-bottom: 1px solid #ccc;
}
.d_left2 ul {
  padding-left: 40px;
}
.d_left2 ul li {
  padding: 10px 0;
}
.d_right {
  width: 79%;
  float: left;
}
</style>
