<template>
  <div class="page">
      <div class="d_left">
          <div class="d_left1">
                <h3>用户中心</h3>                  
              <ul>
                  <li>
                      <router-link to="/device/deviceDisplay"><img src="../../../static/img/user_infos.png" alt=""> 个人设置</router-link>
                  </li>
                  <li>
                      <router-link to="/device/device_1"><img src="../../../static/img/all_con.png" alt=""> 所有联系人</router-link>
                  </li>
                  <li>
                      <router-link to="/device/device_0"><img src="../../../static/img/weixinList.png" alt=""> 绑定微信列表</router-link>
                  </li>
              </ul>
          </div>
          <div class="d_left2">
              <h3>管理</h3>
              <ul>
                  <li>
                      <router-link to="/device/deviceadd"><i class="el-icon-goods"></i> 用户API</router-link>
                  </li>
                  <li>
                      <router-link to=""><i class=" el-icon-refresh"></i> 修改密码</router-link>
                  </li>
                  <li>
                      <router-link to=""><i class="el-icon-edit-outline"></i> 添加联系人</router-link>
                  </li>
                  <li>
                      <router-link to=""><i class="el-icon-message"></i> 短信购买</router-link>
                  </li>
                  <li>
                      <router-link to=""><i class="el-icon-tickets"></i> 短信购买记录</router-link>
                  </li>
              </ul>
          </div>
      </div>
      <div class="d_right">
          <router-view></router-view>
      </div>
  </div>
</template>,m

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
  padding: 20px 0 30px 0;
}
.d_left1 h3 {
  margin-bottom: 20px;
  padding-left: 40px;
}
.d_left1 ul li {
  padding: 10px 0;
  padding-left: 40px;
}
.d_left1 ul li img{
    width: 20px;
}
.d_left1 ul li:hover {
  background: #ccc;
}
.d_left2 {
  /* padding: 0 0 0 40px; */
}
.d_left2 h3 {
  padding: 0 0 10px 40px;
  border-bottom: 1px solid #ccc;
}
.d_left2 ul {
}
.d_left2 ul li {
  padding: 10px 0;
  padding-left: 40px;
}
.d_left2 ul li i{
    font-weight: 700
}
.d_left2 ul li:hover {
  background: #cccccc;
}
.d_right {
  width: 79%;
  float: left;
}
</style>
