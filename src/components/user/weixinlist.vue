<template>
  <div class="page">
    <div class="userall">
      <el-table :data="tableData2" style="width: 100%">
        <el-table-column prop="number" label="编号" >
        </el-table-column>
        <el-table-column prop="name" label="昵称">
        </el-table-column>
        <el-table-column fixed="right" label="设置">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)" style="color:#888">取消绑定</el-button>
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
          number: '8',
          name: '王二小',
        }, ]
      };
    },
    components: {},
    methods: {
      handleClick(index) {
        this.$confirm('确认解锁绑定吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '解绑成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
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
