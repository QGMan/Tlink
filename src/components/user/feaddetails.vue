<template>
  <div class="page"  style="margin-left:45px">
      <div class="">
         <div class="title">
          <h4>我的反馈</h4>
        </div>
        <div class="Tlist">
          <div class="Tlist1">
            <img src="../../../static/img/Feedback.png" alt="">
          </div>
          <div class="Tlist2">
            <p><span>哈哈：<span>圣达菲</span></span></p>
            <p >发表人：
              <span>TLINK</span>
            </p>
            <p >反馈类型：
              <span>null</span>
            </p>
            <p>提交时间：2.18.06.07 10:09: 04 <span style="color:red;font-size:12px">未回复</span></p>
          </div>
        </div>
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
.title {
  width: 100%;
  height: 55px;
  line-height: 55px;
  background: #eeede8;
  padding: 0 20px;
  border-bottom: 1px solid #ccc;
  
}


.Tlist {
  width: 100%;
  height: 128px;
  padding: 10px 15px;
  border-bottom: 1px dashed #ccc;
}

.Tlist1 {
  width: 16%;
  height: 128px;
  max-width: 80px;
  float: left;
  position: relative;

}

.Tlist1 img {
  max-height: 80px;
  margin-top: 10%;
    position: absolute;
  top:30%;
  /* margin: 6px 0; */
}


.Tlist2 {
  width: 33.3%;
  float: left;
  padding: 10px 0 0 0;
}

.Tlist2 p {
    font-size: 14px;
  color: #999894;
  padding: 5px;
}

</style>
