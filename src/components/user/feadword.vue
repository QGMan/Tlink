<template>
  <div class="page">
      <input class="title" type="text" placeholder="请输入反馈标题">
      <textarea class="txt" name="" id="" placeholder="反馈内容"></textarea>
      <div class="btn">
          <button>取消</button>
          <button>提交</button>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
    .title{
        display: block;
        width: 50%;
        height: 30px;
        border-radius: 5px;
        margin: 20px 40px;
        padding-left: 10px;
    }
    .txt{
        display: block;
        margin-left: 40px;
        border-radius: 5px;
        padding: 10px;
        width: 50%;
        min-height: 290px;
    }
    .btn{
        width: 50%;
        height: 35px;
        margin-left: 40px;
        
        margin-top: 20px;
    }
    .btn button{
        float: right;
        width: 80px;
        height: 30px;
        line-height: 30px;
        border-radius: 20px;
        margin: 0 10px;
        background: #fff
    }
      .btn button:hover{
          background: black;
          color: #fff;
      }
</style>
