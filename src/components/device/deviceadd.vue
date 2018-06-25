<template>
  <div class="page">
    <div class="creat">
      <h4>创建设备</h4>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="设备名称">
          <el-input v-model="form.name" placeholder="设备名称"></el-input>
        </el-form-item>
        <el-form-item label="链接协议">
          <el-select v-model="form.region1" placeholder="MQTT">
            <el-option label="http" value="http"></el-option>
            <el-option label="tcp" value="tcp"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上报周期">
          <el-radio-group v-model="form.resource">
            <el-radio label="自定义"></el-radio>
            <el-radio label="推荐周期"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="">
          <el-select v-model="form.region2" placeholder="60s">
            <el-option label="60s" value="60s"></el-option>
            <el-option label="120s" value="120s"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="传感器">
          <el-button size="small" round type="info">追加</el-button>
          <el-button size="small" round type="info">批量追加</el-button>
        </el-form-item>
        <el-form-item label="是否公开">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 地图组件 -->
        <b-map></b-map>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import BMap from '../common/Map'
  export default {
    data() {
      return {
        form: {
          name: '',
          region1: '',
          region2: '',
          type: [],
          resource: '',
        }
      }
    },
    components: {
      "b-map": BMap
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>

<style scoped>
  body,
  html,
  #allmap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
  }

  .creat {
    padding: 25px
  }

  .creat h4 {
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ccc;
  }

</style>
