<template>
  <div class="page">
    <div class="userall">
      <el-table :data="tableData2" style="width: 100%">
        <el-table-column prop="user" label="联系人" width="180">
        </el-table-column>
        <el-table-column prop="phone" label="手机号码" width="180">
        </el-table-column>
        <el-table-column prop="email" label="邮箱">
        </el-table-column>
        <el-table-column fixed="right" label="设置">
          <template slot-scope="scope">
            <router-link to="/user/contactedit">
              <el-button type="text" size="small" style="color:#888">编辑</el-button>
            </router-link>
            <el-button type="text" size="small" @click="handleClick(scope.row)" style="color:#888">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData2: [{
          user: '刘和强',
          phone: '15088888888',
          email: '666@qq.com',
        }]
      };
    },
    components: {},
    methods: {
      handleClick(index) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  };

</script>

<style scoped>
  .userall {
    padding: 50px;

  }

</style>
