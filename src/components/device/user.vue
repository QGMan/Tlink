<template>
  <div class="page" style="height:100%">
    <div class="avast" ref="avast">
      <h3 style="padding-left:16px">我的设备</h3>
      <div style="padding:16px">
        <ul class="devicenav">
          <li>
            <router-link to="/device/user">所有设备</router-link>
          </li>
          <li>
            <router-link to="/device/deviceadd">添加设备</router-link>
          </li>
          <li>
            <!-- <router-link to="">添加触发器</router-link> -->
            <el-button type="text" @click="dialogFormVisible = true" style="color:#888;font-size:16px">
              添加触发器
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
          </li>
        </ul>
      </div>
      <!-- 设备 -->
      <div style="border-top:1px solid #ccc">
        <!-- 一个设备信息 -->
        <div style="height:68px;padding-left:20px;border-bottom:1px solid #ccc">
          <div class="user_d1">
            <router-link to="/device/deviceedit">
              <img src="../../../static/img/non_online-1.png" alt="">
            </router-link>
          </div>
          <div class="user_d2">气象监测</div>
          <div class="user_d3">
            <router-link to="">
              <img src="../../../static/img/setting.png" alt="">
            </router-link>
            <!-- <div> -->
              <img  @click="toggle" v-if="isShow2" src="../../../static/img/closeEyes.png" alt="">
              <img  @click="toggle" v-if="!isShow2" src="../../../static/img/openEyes.png" alt="">
          <!-- </div> -->
            <img src="../../../static/img/select_T.png" alt="">
          </div>
        </div>
      </div>
      <div class="avast1" @click="avast1" ref="avast1">
        <img v-if="isShow" src="../../../static/img/pre.png" alt="">
        <img v-if="!isShow" src="../../../static/img/next.png" alt="">
      </div>
    </div>
    <div class="Tright" ref="tright">
      <!-- 触发器列表 -->
      <div>
        <div class="title">
          <span>气象监测</span>
          <span>序列号：JSKPJ19QCFX8IRD2</span>
        </div>
        <div class="Tlist">
          <div class="Tlist1">
            <img src="../../../static/img/temperature.png" alt="">
            <p>id:4770</p>
          </div>
          <div class="Tlist2">
            <h4>风速</h4>
            <p style="margin-bottom:15px">当前状态：
              <span>未连接</span>
            </p>
            <p>更新时间：2.18.06.07 10:09: 04</p>
          </div>
          <div class="Tlist3">
            <span>1.1</span>
            <span>m/s</span>
          </div>
          <div class="Tlist4">
            <button>&gt; 实时曲线</button>
            <button>&gt; 历史查询</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
      isShow2: true,
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
  methods: {
    // 点击图标后中间块样式的改变
    avast1() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.$refs.tright.classList.add("Tright");
        this.$refs.avast.style.width = "350px";
        this.$refs.avast.style.borderRight = "1px solid #ccc";
        this.$refs.avast1.style.left = "440px";
      } else {
        this.$refs.tright.classList.remove("Tright");

        this.$refs.avast.style.width = 0;
        this.$refs.avast.style.border = "none";
        this.$refs.avast1.style.left = "100px";
      }
    },
    toggle(){
      this.isShow2=!this.isShow2
    }
  },
  components: {}
};
</script>

<style scoped>
.avast {
  float: left;
  width: 350px;
  height: 100%;
  padding-top: 20px;
  border-right: 1px solid #aaa;
  position: fixed;
  /* padding-left: 100px; */
  overflow-y: auto;
  top: 70px;
  bottom: 0;
}

.avast::before .avast::after {
  width: 0;
  height: 0;
  clear: both;
  content: "";
  overflow: hidden;
}

.avast1 {
  width: 16px;
  height: 80px;
  cursor: pointer;
  position: fixed;
  left: 440px;
  top: 50%;
  overflow: hidden;
}

.devicenav {
  width: 100%;
  height: 40px;
}

.devicenav li {
  float: left;
  width: 33%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.devicenav li a {
  color: #888;
}

.user_d1 {
  float: left;
  width: 55px;
}

.user_d1 img {
  width: 55px;
  padding: 8px;
}

.user_d2 {
  float: left;
  padding-left: 10px;
  font-size: 18px;
  height: 68px;
  line-height: 68px;
}

.user_d3 {
  float: right;
  height: 68px;
  line-height: 68px;
}

.user_d3 img {
  width: 24px;
  margin-right: 5px;
  vertical-align: middle;
}

/* y右边样式 */

.Tright {
  margin-left: 400px;
  /* float: right */
}

.title {
  width: 100%;
  height: 55px;
  line-height: 55px;
  background: #eeede8;
  padding: 0 20px;
}

.title span:nth-child(2) {
  float: right;
  font-size: 14px;
  color: #999894;
  margin-right: 20px;
}

.Tlist {
  width: 100%;
  height: 115px;
  border-bottom: 1px solid #ccc;
  padding: 6px 15px;
}

.Tlist1 {
  width: 16%;
  min-width: 80px;
  float: left;
}

.Tlist1 img {
  max-width: 80px;
  /* margin: 6px 0; */
}

.Tlist1 p {
  color: #999894;
  padding: 0 0 10px 10px;
}

.Tlist2 {
  width: 33.3%;
  float: left;
  padding: 10px 0 0 0;
}

.Tlist2 p {
  color: #999894;
}

.Tlist2 p span {
  color: red;
}

.Tlist3 {
  width: 25%;
  height: 115px;
  line-height: 115px;
  float: left;
  text-align: center;
}

.Tlist3 span {
  font-size: 30px;
  padding-right: 10px;
}

.Tlist4 {
  width: 25%;
  float: left;
}

.Tlist4 button {
  float: left;
  height: 115px;
  line-height: 115px;
  border: none;
  color: #209e78;
  background: none;
  font-size: 14px;
  /* 手型 */
  cursor: pointer;
  /* 去掉button点击时的样式 */
  outline: none;
}
</style>
