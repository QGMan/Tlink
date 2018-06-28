<template>
  <div class="page">
    <div class="deviceAll">
      <h4>所有设备</h4>
      <el-row :gutter="20" class="all">
        <el-col :span="3" class="one">
          <div class="grid-content bg-purple">
            <router-link to="" class="image">
              <img src="../../../static/img/non_online-1.png" alt="">
            </router-link>
          </div>
        </el-col>
        <el-col :span="5" class="two">
          <div class="grid-content bg-purple">
            <p>气象监测</p>
            <p>id：
              <span>1135</span>
            </p>
          </div>
        </el-col>
        <el-col :span="8" class="three">
          <div class="grid-content bg-purple">

            <p>创建日期：
              <span>2016-08-11</span>
            </p>
          </div>
        </el-col>
        <el-col :span="8" class="four">
          <div class="grid-content bg-purple">
            <router-link to="">设置连接</router-link>
            <router-link to="">编辑设备</router-link>
            <router-link to="">删除设备</router-link>
          </div>
        </el-col>
      </el-row>
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
 .deviceAll{
     margin-left: 40px;
 }
.deviceAll h4{
    padding-top: 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
}
.all{
    height: 90px;
    border-bottom: 1px solid #ccc;
}
.all .one {
padding-top: 0px
}
.one .image{
  width: 100%;
  height:90px;
  display: block;
}
.all .one img{
  display: block;
  margin-top: 10%;
  height: 80%;
}
.all .two{
    padding-top: 20px;
}
.all .three {
    height: 90px;
    line-height: 90px;
    color: #888;
    font-size: 14px
}
.all .four{
    height: 90px;
    line-height: 90px;
}
.all .four a{
    color:#888;
    padding: 0 5px;
 font-size: 14px
    
}
</style>
