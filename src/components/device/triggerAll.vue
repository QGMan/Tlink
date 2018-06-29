<template>
  <div class="page">
    <div class="deviceAll">
      <div class="header">
        <h4>触发器列表</h4>
        <div class="head_right">
          <input class='ipt' type="text" placeholder="设备名">
          <button class="btn">
            <span class="el-icon-search"></span>
          </button>
        </div>
      </div>
      <el-row :gutter="20" class="all">
        <el-col :span="3" class="one">
          <div class="grid-content bg-purple">
            <router-link to="" class="image">
              <img src="../../../static/img/GPS.png" alt="">
            </router-link>
          </div>
        </el-col>
        <el-col :span="7" class="two">
          <div class="grid-content bg-purple">
            <p style="font-size:16px;color:#000">气象监测</p>
            <p>联系人：
              <span>王成</span>
            </p>
            <p>当前状态：
              <el-button v-show="opening" @click="opentaggle" type="success" round size="small">已开启</el-button>
              <el-button style="margin:0" v-show="!opening" @click="opentaggle" type="danger" round size="small">未开启</el-button>
            </p>
          </div>
        </el-col>
<el-col :span="8" class="three" style="overflow:hidden">
          <div class="grid-content bg-purple">

            <p>触发条件
              <span> 风速:如果数值高于低于</span>
            </p>
          </div>
        </el-col>
        <el-col :span="4" class="four" :offset="2">
          <div class="grid-content bg-purple">
            <!-- 编辑 -->
            <el-button type="text" @click="dialogFormVisible = true" style="color:#888">
              <img src="../../../static/img/edit.png" alt=""> 编辑
            </el-button>

            <el-dialog title="修改触发器" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="选择设备" :label-width="formLabelWidth">
                  <el-select v-model="form.region1" placeholder="请选择活动区域">
                    <el-option label="气象监测" value="shanghai"></el-option>
                    <el-option label="开关量控制" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="选择传感器" :label-width="formLabelWidth">
                  <el-select v-model="form.region2" placeholder="请选择活动区域">
                    <el-option label="风速" value="zhongguo"></el-option>
                    <el-option label="风向" value="yuenan"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="触发条件" :label-width="formLabelWidth">
                  <el-select v-model="form.region3" placeholder="请选择活动区域">
                    <el-option label="数值高于X" value="riben"></el-option>
                    <el-option label="数值低于Y" value="meiguo"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="" :label-width="formLabelWidth">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">关闭</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确认</el-button>
              </div>
            </el-dialog>
            <!-- 删除 -->
            <template>
<el-button style="color:#888" class="delet" type="text" @click="open2">
  <i class="el-icon-delete"></i> 删除</el-button>
            </template>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opening: true, //开关切换
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "100px"
    };
  },

  components: {},
  methods: {
    opentaggle() {
      this.opening = !this.opening;
    },
    open2() {
      this.$confirm("数据删除后将不能恢复, 你确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style scoped>
.deviceAll {
  margin-left: 40px;
}

.header {
  border-bottom: 1px solid #ccc;
  padding-top: 10px;
  height: 50px;
  line-height: 50px;
}

.header h4 {
  float: left;
}

.header .head_right {
  float: right;
}

.all {
  height: 106px;
  border-bottom: 1px solid #ccc;
}

.all .one {
  padding-top: 10px;
  height: 105px;
}
.one .image{
  width: 100%;
  height:105px;
  display: block;
}
.all .one img {
  display: block;
  height: 80%;
  border: 1px dashed #ccc;
}

.all .two {
  padding-top: 20px;
  font-size: 14px;
  color: #999894;
}

.all .three {
  height: 90px;
  line-height: 90px;
  color: #888;
  font-size: 16px;
}

.all .four {
  height: 90px;
  line-height: 90px;
  position: relative;
}

.all .four a {
  color: #888;
  padding: 0 5px;
  font-size: 14px;
}

.four img {
  width: 24px;
  display: block;
  padding: 10px;
}
.four .delet {
  position: absolute;
  top: 17%;
}
.four .delet i {
  display: block;
  font-size: 26px;
  padding-bottom: 5px;
  color: #000;
}
</style>
