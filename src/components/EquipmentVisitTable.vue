<template>
  <div class="equipmentvisittable">
    <el-table
      :data="tableData"
      border
      style="width: auto">
      <el-table-column
        prop="equipmentnumber"
        label="设备编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="equipmentid"
        label="设备ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="equipmentname"
        label="设备名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="equipmenttype"
        label="设备类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="location"
        label="位置"
        width="180">
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="10">
    </el-pagination>

    <!-- <el-button size="medium" type="primary" @click="test">test</el-button> -->
  </div>
</template>

<style>
  
</style>

<script>
export default {
  data() {
    return {
      tableData:[]
    }
  },

  mounted() {
    this.$http.get('static/equipmentvisit.json').then(res => {
      this.tableData = res.body.equipmentvisit;
    })
  }
  // methods:{
  //   test:function(){
  //     this.$http.get('static/equipmentvisit.json').then(res => {
  //       alert(this.tableData = res.body.equipmentvisit);//此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
  //       alert(res.body.equipmentvisit[0].equipmentnumber);//此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
  //       alert(res.body.equipmentvisit.length)
  //     })
  //   }
  // },

}
</script>