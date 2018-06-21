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
            首页
          </li>
          <li>
            应用展示
          </li>
          <li>
            <router-link to="">
              <span class="routercolor">设备探索</span>
            </router-link>
          </li>
          <li>
            帮助中心
          </li>
          <li>
            信息反馈
          </li>
          <li>
            企业版
          </li>
        </ul>
        <ul class="rightnav">
          <li>
            控制台
          </li>
          <li>

            <span></span>物联网平台
          </li>
          <li>
            中文/EN
          </li>
        </ul>
      </el-header>
      <el-container>
        <el-aside width="80px">
          <ul class="asidenav">
            <li>
              <router-link to="">
                <span class="el-icon-mobile-phone"></span>
                <h5>监控中心</h5>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <span class="el-icon-menu"></span>
                <h5>设备</h5>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <span class="el-icon-location"></span>
                <h5>设备地图</h5>
              </router-link>
            </li>
            <li>
              <router-link to="">
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
              <router-link to="">
                <span class="el-icon-service"></span>
                <h5>用户中心</h5>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <span class="el-icon-phone-outline"></span>
                <h5>反馈中心</h5>
              </router-link>
            </li>
          </ul>
        </el-aside>
        <el-main>
          
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

  li,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  span {
    margin: 0;
    padding: 0
  }

  .el-header {
    background-color: #282828;
    color: #fff;
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid #5f5f5f
  }

  .el-aside {
    background-color: #282828;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #f7f6f2;
    color: #333;
    text-align: center;
    line-height: 160px;
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
    padding-top: 20px;

  }
  .asidenav li {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 25px;
    text-align: center;
    position: relative;
    text-align: center
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
