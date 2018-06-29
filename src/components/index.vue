<template>
  <div class="hello">
    <el-container>
      <el-header>
        <div class="logoimg">
          <router-link to="">
            <img src="../../static/img/logo.svg" alt="云平台">
          </router-link>
        </div>
        <ul class="leftnav">
          <li>
            <router-link to="">首页</router-link>
          </li>
          <li>
            <router-link to="">应用展示</router-link>
          </li>
          <li>
            <router-link to="">
              设备探索
            </router-link>
          </li>
          <li>           
            <router-link to="">帮助中心</router-link>
          </li>
          <li>
            <router-link to="">信息反馈</router-link>
          </li>
          <li>
            <router-link to="">企业版</router-link>
          </li>
        </ul>
        <ul class="rightnav">
          <li>
            <!-- style="border:1px solid black;padding:5px" -->
            <router-link to="">控制台</router-link>
          </li>
          <li>
            <router-link to="">
              <span></span>物联网平台
            </router-link>           
          </li>
          <li>
            中文/EN
          </li>
        </ul>
      </el-header>
      <el-container style="position:absolute;width:100%;height:100%;top:60px;left:100px">
        <el-aside width="100px">
          <ul class="asidenav">
            <li>
              <router-link to="/device/user" class="routerl">
                <span class="el-icon-mobile-phone"></span>
                <h5>监控中心</h5>
              </router-link>
            </li>
            <li>
              <router-link to="/device/deviceDisplay">
                <span class="el-icon-menu"></span>
                <h5>设备</h5>
              </router-link>
            </li>
            <li>
              <router-link to="/device/deviceMap">
                <span class="el-icon-location"></span>
                <h5>设备地图</h5>
              </router-link>
            </li>
            <li>
              <router-link to="/device/triggerAll">
                <span class="el-icon-bell"></span>
                <h5>触发器</h5>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <span class="el-icon-edit-outline"></span>
                <h5>简单应用</h5>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <span class="el-icon-printer"></span>
                <h5>组态应用</h5>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <span class="el-icon-tickets"></span>
                <h5>流量卡</h5>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <span class="el-icon-time"></span>
                <h5>定时任务</h5>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <span class="el-icon-download"></span>
                <h5>数据下载</h5>
              </router-link>
            </li>
            <li>
              <router-link to="/user/usersetting">
                <span class="el-icon-service"></span>
                <h5>用户中心</h5>
              </router-link>
            </li>
            <li>
              <router-link to="/user/feadword">
                <span class="el-icon-phone-outline"></span>
                <h5>反馈中心</h5>
              </router-link>
            </li>
          </ul>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .routercolor {
    color: #fff
  }

  .el-header {
    width: 100%;
    background-color: #282828;
    color: #fff;
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid #5f5f5f;
    z-index: 8;
    position: fixed;
    left: 10px;
    top: 0;
  }

  .el-aside {
    height: 100%;
    background-color: #282828;
    color: #fff;
    text-align: center;
    /* line-height: 200px; */
    position: fixed;
    left: 10px;
    top: 60px;
  }
  .el-main {
    background-color: #f7f6f2;
    color: #333;
    padding-left: 0;
    padding-top: 0
    /* text-align: center;
    line-height: 160px; */
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  li {
    list-style-type: none;
  }

  /* 导航栏头部样式 */

  .logoimg {
    width: 44px;
    height: 44px;
    line-height: 44px;
    float: left;
    margin: 8px 0 8px 10px;
  }

  .leftnav {
    margin: 0;
    margin-left: 30px;
    float: left
  }

  .leftnav li {
    float: left;
    width: 90px;
    height: 60px;
    line-height: 60px;
  }

  .leftnav li:hover {
    background-color: #333333;

  }

  .rightnav {
    float: right;
    margin: 0;
  }

  .rightnav li {
    float: left;
    width: 80px;
    height: 60px;
    line-height: 60px;
    margin-right: 20px
  }

  .rightnav li:hover {
    background-color: #333333;
  }

  .asidenav {
    width: 100%;
    max-height:none;
    height: 100%;
    padding-top: 20px;
    /* margin-right: 20px; */

  }
  .asidenav li {
    width: 100%;
    height: 40px;
    line-height: 40px;
    /* margin-bottom: 25px; */
    padding: 10px 0;
    text-align: center;
    position: relative;
    text-align: center
  }
 .asidenav li:hover{
   background:#5f5f5f
 }

  .asidenav li span {
    font-size: 16px;
    color: #fff;
    position: absolute;
    left: 45%;
  }

  .asidenav li h5 {
    font-size: 14px;
    font-family: inherit;
    font-weight: 500;
    padding: 15px 0;
    color: #fff;
    text-decoration: none;

  }

</style>
