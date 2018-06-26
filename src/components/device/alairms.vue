<template>
  <div class="page">
      <div class="d_left">
          <div class="d_left1">
                <h3>触发器</h3>                  
              <ul>
                  <li>
                      <router-link to="/device/deviceDisplay"><i class="el-icon-arrow-right"></i> 设备列表</router-link>
                  </li>
                  <li>
                      <router-link to="/device/triggerAll"><i class="el-icon-bell"></i> 所有触发器</router-link>
                  </li>
                  <li>
                      <router-link to="/device/trigger_1"><img src="../../../static/img/on_activate.png" alt=""> 已激活</router-link>
                  </li>
                  <li>
                      <router-link to="/device/trigger_0"><img src="../../../static/img/off_activate.png" alt=""> 未激活</router-link>
                  </li>
              </ul>
          </div>
          <div class="d_left2">
              <h3>管理</h3>
              <ul>
                  <li>
                      <router-link to="/device/triggerAdd"><i class="el-icon-plus"></i> 添加触发器</router-link>
                  </li>
                  <li>
                      <router-link to=""><i class="el-icon-edit"></i> 报警记录</router-link>
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
