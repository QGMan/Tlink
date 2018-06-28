<template>
  <div class="page">
      <header>
          <h3>编辑联系人</h3>
      </header>
      <div class="content">
          <el-row :gutter="20">
              <el-col :span="3">姓名</el-col>
              <el-col :span="15">
              <input type="text" placeholder="姓名">                  
              </el-col>
          </el-row>
          <el-row  :gutter="20">
              <el-col :span="3">手机号码</el-col>
              <el-col :span="15">
              <input type="text" placeholder="手机号码">                  
              </el-col>
          </el-row>
          <el-row>
              <el-col :span="3">邮箱地址</el-col>
              <el-col :span="15">
              <input type="text" placeholder="邮箱地址">                  
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
header {
  height: 45px;
  line-height: 45px;
  margin-left: 40px;
  border-bottom: 1px solid #ccc;
}
.content {
  margin-top: 40px;
  padding-left: 40px;
}
.content .el-row{
    height: 30px;
    line-height: 30px;
    margin-top: 20px;
}
.content input{
    width: 100%;
    height: 30px;
    line-height: 30px;
    border-color: #787878;
    border-radius: 10px;
    max-width: 300px;
    padding-left:10px;
}
</style>

