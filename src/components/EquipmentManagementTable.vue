<template>
<div class="equipmentmanagementtable">
  <el-table
    :data="tableData"
    border
    style="width: auto">
    <el-table-column
      prop="equipmentname"
      label="设备名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="equipmenttype"
      label="设备类型"
      width="200">
    </el-table-column>
    <el-table-column
      prop="equipmentlocation"
      label="设备位置"
      width="200">
    </el-table-column>
    <el-table-column
      prop="manualoperation"
      label="人工操作"
      width="400">
      <template slot-scope="scope">
        <el-button
        size="medium"
        type="primary"
        @click="clickIconEdit(scope.$index, scope.row)">
        <i class="el-icon-edit"> 编辑</i>
        </el-button>
        <el-button
        size="medium"
        type="danger"
        @click="clickIconDelete(scope.$index)">
        <i class="el-icon-delete"> 删除</i>
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination
    background
    layout="prev, pager, next"
    :total="10">
  </el-pagination>

  <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
    <el-form>
      <el-form-item label="设备名称">
        <el-input auto-complete="off" v-model="EditInputEquipmentName"></el-input>
      </el-form-item>
      <el-form-item label="设备类型">
        <el-input auto-complete="off" v-model="EditInputEquipmentType"></el-input>
      </el-form-item>
      <el-form-item label="设备位置" >
        <el-input auto-complete="off" v-model="EditInputEquipmentLocation"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="clickIconEditConfirm">确 定</el-button>
    </div>
  </el-dialog>

  <el-button size="medium" type="primary" @click="dialogFormVisible1=true"> 
    <i class="el-icon-circle-plus"> 新增</i>
  </el-button>

  <el-dialog title="新增设备" :visible.sync="dialogFormVisible1">
    <el-form>
      <el-form-item label="设备名称">
        <el-input auto-complete="off" clearable=true v-model="AddInputEquipmentName"></el-input>
      </el-form-item>
      <el-form-item label="设备类型">
        <el-input auto-complete="off" clearable=true v-model="AddInputEquipmentType"></el-input>
      </el-form-item>
      <el-form-item label="设备位置">
        <el-input auto-complete="off" clearable=true v-model="AddInputEquipmentLocation"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible1 = false">取 消</el-button>
      <el-button type="primary" @click="clickIconAdd">确 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
import global_ from '../components/Global'

export default {
  data() {
    return {
      dialogFormVisible:false,
      dialogFormVisible1:false,
      tableData: []
    }
  },

  mounted() {
    this.$http.get('static/equipmentmanagement.json').then(res => {
      this.tableData = res.body.equipmentmanagement;
    })
  },

  methods:{
    clickIconDelete: function(index){
      // 删一行数组元素
      // alert(index) 
      this.$confirm('此操作将永久删除该行数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    clickIconEdit(index,row){
      this.dialogFormVisible = true;
      global_.inputIndex = index
      this.EditInputEquipmentName = this.tableData[index].equipmentname;
      this.EditInputEquipmentType = this.tableData[index].equipmenttype;
      this.EditInputEquipmentLocation = this.tableData[index].equipmentlocation;
    },

    clickIconEditConfirm: function(index,row){
      this.dialogFormVisible = false;
      this.tableData[global_.inputIndex].equipmentname = this.EditInputEquipmentName;
      this.tableData[global_.inputIndex].equipmenttype = this.EditInputEquipmentType;
      this.tableData[global_.inputIndex].equipmentlocation = this.EditInputEquipmentLocation;
    },

    clickIconAdd: function(index,row){
      this.dialogFormVisible1 = false;
      this.tableData.push({ equipmentname: this.AddInputEquipmentName ,equipmenttype: this.AddInputEquipmentType,equipmentlocation: this.AddInputEquipmentLocation , manualoperation: '' })
    },
  }
}
</script>