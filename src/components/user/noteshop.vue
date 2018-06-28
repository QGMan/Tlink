<template>
  <div class="page">

    <!-- <div class="alone">
  <el-form :inline="true" ref="form" :model="form" label-width="80px" style="padding-left:40px">
    <el-form-item label-width="100px" label="联系人姓名" style="display:block">
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
    <el-form-item>
      <el-button size="small" type="info" @click="onSubmit1">保存更改</el-button>
    </el-form-item>
  </el-form>
</div> -->

    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
        <el-tab-pane label="短信购买" name="first">
          <header>
            <h4>短信购买&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="color:red">(0.1元/条)</span>
            </h4>
          </header>
          <div class="content">

            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="购买数量">
                <el-input v-model="form.number" placeholder="购买数量" style="width:50%"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;条
              </el-form-item>
              <el-form-item label="金额">
                <el-input v-model="form.money" style="width:50%" placeholder="金额"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;元
              </el-form-item>
              <el-form-item label="支付方式" class="zhifu">
                <el-radio-group v-model="form.resource">
                  <el-radio label=""></el-radio>
                  <img src="../../../static/img/plipay.png" alt="">
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="warning" @click="onSubmit1">保存更改</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="组态购买" name="second">
          <header>
            <h4>组态购买&nbsp;&nbsp;&nbsp;&nbsp;
              <span style="color:red">(100元/个)</span>
            </h4>
          </header>
          <div class="content">

            <el-form ref="form2" :model="form2" label-width="80px">
              <el-form-item label="购买数量">
                <el-input v-model="form2.number" placeholder="购买数量" style="width:50%"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;个
              </el-form-item>
              <el-form-item label="金额">
                <el-input v-model="form2.money" style="width:50%" placeholder="金额"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;元
              </el-form-item>
              <el-form-item label="支付方式" class="zhifu">
                <el-radio-group v-model="form2.resource">
                  <el-radio label=""></el-radio>
                  <img src="../../../static/img/plipay.png" alt="">
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="warning" @click="onSubmit2">保存更改</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="账户充值" name="third">
          <header>
            <h4>账户充值</h4>
          </header>
          <div class="content content_l">

            <el-form ref="form3" :model="form3" label-width="80px">
              <el-form-item label="金额">
                <el-input v-model="form3.money" style="width:50%" placeholder="金额"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;元
              </el-form-item>
              <el-form-item label="支付方式" class="zhifu">
                <el-radio-group v-model="form3.resource">
                  <el-radio label=""></el-radio>
                  <img src="../../../static/img/plipay.png" alt="">
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="warning" @click="onSubmit3">保存更改</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="content_r">
            <p>
              <span>*</span>
              <span>账户余额充值最低100元起</span>
            </p>
            <p>
              <span>*</span>
              <span>流量叠加包价格4元（30M流量）</span>
            </p>
            <p>
              <span>*</span>
              <span>充值成功后将自动开启余额代扣功能。</span>
            </p>
            <p>
              <span>*</span>
              <span>账户余额适用于账号下所有流量卡进行流量叠加扣费</span>
            </p>
            <p>
              <span>*</span>
              <span>当月单卡流量使用超出30M时会自动执行代扣功能进行扣费4元</span>
            </p>
            <p>
              <span>*</span>
              <span>本月流量（套餐流量或叠加流量）次月清零。</span>
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        form: {
          number: '',
          money: '',
          resource: ''
        },
        form2: {
          number: '',
          money: '',
          resource: ''
        },
        form3: {
          money: '',
          resource: ''

        },
      };
    },
    components: {},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit1() {

      },
      onSubmit2() {

      },
      onSubmit3() {

      }
    }
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
    width: 60%;
    float: left;
    margin-top: 40px;
    padding-left: 40px;
  }

  .content .el-row {
    height: 30px;
    line-height: 30px;
    margin-top: 20px;
  }

  .content input {
    width: 100%;
    height: 30px;
    line-height: 30px;
    border-color: #787878;
    border-radius: 10px;
    max-width: 300px;
    padding-left: 10px;
  }

  .content_l {
    width: 40%;
    float: left;
  }

  .content_r {
      margin-top: 40px;
    float: left;
  }
  .content_r p span:nth-child(1){
    color:red;
  }
  .content_r p span:nth-child(2){
    color:#888;
  }

  .zhifu {
    margin-top: 40px;
  }

  .zhifu img {
    height: 18px;
  }

</style>
