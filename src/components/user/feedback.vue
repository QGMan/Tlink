<template>
  <div class="page">
      <div class="d_left">
          <div class="d_left1">
                <h3>在线反馈</h3>                  
              <ul>
                  <li>
                      <router-link to="/user/deviceDisplay"> 留言反馈</router-link>
                  </li>
                  <li>
                      <router-link to="/device/triggerAll"> 反馈详情</router-link>
                  </li>
              </ul>
          </div>
          </div>
      <div class="d_right">
          <textarea name="" id="" cols="60" rows="30"></textarea>
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
  padding: 20px 0 30px 0;
}
.d_left1 h3 {
  margin-bottom: 20px;
  padding-left: 40px;
}
.d_left1 ul li {
  padding: 10px 0 10px 40px;
}
.d_left1 ul li:hover{
  background: #ccc;
}

.d_right {
  width: 79%;
  float: left;
}
</style>
