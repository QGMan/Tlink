<template>
  <div class="page">
    <div class="person_h">
      <img src="../../../static/img/HeadPortraits.png" alt="">
      <div class="person_c">
        <p>TLINK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;剩余短信：
          <span>29条</span>
        </p>
        <p>APIKey：
          <span>0154F35F-02E4-4C16-B0A1-ADC52F757F65</span>
        </p>
      </div>
      <div class="person_r">
        <p>剩余金额：
          <span style="color:red">￥28.0</span>
        </p>
        <p>
          <!-- <button >充值</button> -->
          <router-link to="/user/noteshop"><button class="chongzhi">充值</button></router-link>
        </p>
      </div>
    </div>
    <div class="selset">
      <input type="radio" name="he" @click="show1" checked>个人用户
      <input type="radio" name="he" @click="show2">企业用户
    </div>
    <div class="alone" v-show="check1">
      <el-form :inline="true" ref="form" :model="form" label-width="100px" style="padding-left:40px">
        <el-form-item label="联系人姓名" style="display:block">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-input v-model="form.birthday" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="性别" label-width="40px">
          <el-radio-group v-model="form.resource">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="电话号码" style="display:block">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" style="display:block">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="地址" style="display:block">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
          <el-form-item>
    <el-button style="margin-left:100px"  size="small" type="info" @click="onSubmit1">保存更改</el-button>
  </el-form-item>
      </el-form>
    </div>
    <div class="company" v-show="check2">
      <el-form :inline="true" ref="form" :model="form2" label-width="100px" style="padding-left:40px">
        <el-form-item label="公司名称" style="display:block">
          <el-input v-model="form2.companyname"></el-input>
        </el-form-item>
        <el-form-item label="联系人姓名" style="display:block">
          <el-input v-model="form2.name"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-input v-model="form2.birthday" style="width:60%"></el-input>
        </el-form-item>
        <el-form-item label="性别" label-width="40px">
          <el-radio-group v-model="form2.resource">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="电话号码" style="display:block">
          <el-input v-model="form2.number"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" style="display:block">
          <el-input v-model="form2.email"></el-input>
        </el-form-item>
        <el-form-item label="地址" style="display:block">
          <el-input v-model="form2.address"></el-input>
        </el-form-item>
                  <el-form-item>
    <el-button style="margin-left:100px" size="small" type="info" @click="onSubmit2">保存更改</el-button>
  </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: 3,
      form: {
        name: "模拟科技",
        birthday: "生日",
        resource: "男",
        number: "13512654616",
        email: "666@sina.com",
        address: "广东省深圳市龙岗 区"
      },
      form2: {
        companyname: "公司名称",
        name: "模拟科技",
        birthday: "生日",
        resource: "男",
        number: "13512654616",
        email: "666@sina.com",
        address: "广东省深圳市龙岗区"
      },
      check1: false,
      check2: true
    };
  },
  components: {},
  mounted() {
    this.show1();
  },
  methods: {
    show1() {
      this.check1 = true;
      this.check2 = false;
    },
    show2() {
      this.check1 = false;
      this.check2 = true;
    },
    // 个人设置信息更改保存
    onSubmit1() {},
    onSubmit2() {}
  }
};
</script>

<style scoped>
.person_h {
  width: 100%;
  height: 155px;
  margin-left: 20px;
  border-bottom: 1px solid #888;
  overflow: hidden;
}

.person_h img {
  float: left;
  height: 80%;
  padding-left: 10px;
  padding-top: 2%;
}

.person_h .person_c {
  float: left;
  width: 50%;
  height: 120px;
  margin: 25px 10px 10px 40px;
  border-right: 1px solid #888;
}

.person_h .person_c p:nth-child(1) {
  padding-top: 35px;
  padding-bottom: 20px;
  font-weight: bold;
}

.person_h .person_r {
  float: left;
  width: 20%;
  height: 120px;
  font-size: 14px;
  margin: 25px 10px 10px 20px;
}

.person_h .person_r p:nth-child(1) {
  padding-top: 35px;
  padding-bottom: 10px;
  font-weight: bold;
}
.chongzhi{
  width: 56px;
  height: 26px;
  line-height: 26px;
  background: #fff;
  border: 1px solid red;
  border-radius: 5px;
  margin-top: 10px;
  outline:none;
}
.selset {
  padding: 20px 0 30px 50px;
}

.alone {
}
</style>
