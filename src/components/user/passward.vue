<template>
  <div class="page" style="padding-top:50px">
    <el-form ref="form" :model="form" label-width="80px" style="padding-left:40px;width:60%">
      <el-form-item label="当前密码">
        <el-input v-model="form.passward"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.newpassward" placeholder="新密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.surepassward" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="info" @click="onSubmit1">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          passward: '5432523',
          newpassward: '',
          surepassward: ''
        }
      }
    },
    components: {

    },
    methods: {
      onSubmit1() {

      }
    }
  }

</script>

<style scoped>


</style>
