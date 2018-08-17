<template>
  <div class="usermanagementtable">
    <el-table
      :data="tableData"
      border
      style="width: auto"
      v-model="TableData">
      <el-table-column
        prop="username"
        label="用户名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="authority"
        label="权限"
        width="200">
      </el-table-column>
      <el-table-column
        prop="equipmenttype"
        label="设备类型"
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
        <el-form-item label="用户名">
          <el-input auto-complete="off" v-model="EditInputUsername"></el-input>
        </el-form-item>
        <el-form-item label="设备类型">
          <el-input auto-complete="off" v-model="EditInputEquipmentType"></el-input>
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

    <el-dialog title="新增用户" :visible.sync="dialogFormVisible1">
      <el-form>
        <el-form-item label="用户名">
          <el-input auto-complete="off" clearable=true v-model="AddInputUsername"></el-input>
        </el-form-item>
        <el-form-item label="设备类型">
          <el-input auto-complete="off" clearable=true v-model="AddInputEquipmentType"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="clickIconAddConfirm">确 定</el-button>
      </div>
    </el-dialog>

    <el-button size="medium" type="primary" @click="clickIconChaku"> 
      <i class="el-icon-circle-plus"> 查库</i>
    </el-button>
  </div>
</template>

<script>
import global_ from '../components/Global'

export default {
  data() {
    return {
      dialogFormVisible:false,
      dialogFormVisible1:false,
      dialogFormVisible2:false,
      tableData: []
    }
  }, 

  mounted() {
    this.$http.get('static/usermanagement.json').then(res => {
      this.tableData = res.body.usermanagement;
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
      this.EditInputUsername = this.tableData[index].username;
      this.EditInputEquipmentType = this.tableData[index].equipmenttype;
    },

    clickIconEditConfirm: function(index,row){
      this.dialogFormVisible = false;
      this.tableData[global_.inputIndex].username = this.EditInputUsername;
      this.tableData[global_.inputIndex].equipmenttype = this.EditInputEquipmentType;
    },

    clickIconAddConfirm: function(index,row){
      this.dialogFormVisible1 = false;
      this.tableData.push({ username: this.AddInputUsername, authority: '普通用户', equipmenttype: this.AddInputEquipmentType, manualoperation: '' })
    },

    clickIconChaku:function(){
      this.axios.get('http://localhost:8888/api/v1.0/user/info')
      .then(function(response){
        alert(response)
      });
    }
  }
}
</script>
