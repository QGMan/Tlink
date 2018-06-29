<template>
  <div class="page">
      <header>
          购买记录
      </header>
      <div>
     <el-table
    :data="tableData"
    border
    style="width:100%;margin-top:25px">
    <el-table-column
      prop="date"
      label="订单编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="number"
      label="购买数量"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="购买类型">
    </el-table-column>
    <el-table-column
      prop="money"
      label="支付金额（元）">
    </el-table-column>
    <el-table-column
      prop="time"
      label="购买时间">
    </el-table-column>
    <el-table-column
      prop="timed"
      label="支付时间">
    </el-table-column>
    <el-table-column
      prop="status"
      label="支付状态">
      <template slot-scope="scope">
        <span>待付款</span>
        <router-link to="" style="color:#606266;font-size:14px">继续支付</router-link>
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
      tableData: [
        {
          date: "201806281542163865MSG",
          number: 1,
          money:'0.10',
          time:"2018-06-28 15:42:16",
          timed:"",
          status:1,
          address: "短信"
        },
        {
          date: "201806281542163865MSG",
          number: 1,
          money:'0.10',
          time:"2018-06-28 15:42:16",
          timed:"",
          status:1,
          address: "短信"
        },
        {
          date: "201806281542163865MSG",
          number: 1,
          money:'0.10',
          time:"2018-06-28 15:42:16",
          timed:"",
          status:1,
          address: "短信"
        },

      ]
    };
  },
  components: {}
};
</script>

<style scoped>
.page{
  margin-left:20px;
}
header{
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #888
}
</style>
