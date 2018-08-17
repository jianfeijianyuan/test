<template>
  <div class="userequipmenttable">
    <el-table
      :data="tableData"
      border
      style="width: auto">
      <!-- <el-table-column
        prop="equipmentnumber"
        label="设备编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="equipmentid"
        label="设备ID"
        width="180">
      </el-table-column> -->
      <el-table-column
        prop="username"
        label="用户名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="equipmentnumber"
        label="设备数目"
        width="180">
      </el-table-column>
      <!-- <el-table-column
        prop="location"
        label="位置"
        width="180">
      </el-table-column> -->
      <el-table-column
        prop="manualoperation"
        label="人工操作"
        width="400">
        <template slot-scope="scope">
        <el-button
          size="medium"
          type="info"
          @click="dialogFormVisible = true">
          <i class="el-icon-info"> 查看</i>
        </el-button>
        <el-button
          size="medium"
          type="primary"
          @click="dialogFormVisible1 = true">
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

    <el-dialog title="查看设备" :visible.sync="dialogFormVisible">
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="1号高温仓" disabled></el-checkbox>
        <el-checkbox label="2号冷冻仓" disabled></el-checkbox>
        <el-checkbox label="3号中温仓" disabled></el-checkbox>
        <el-checkbox label="4号低温仓" disabled></el-checkbox>
      </el-checkbox-group>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="编辑设备" :visible.sync="dialogFormVisible1">
      <el-checkbox-group v-model="checkList1">
        <el-checkbox label="1号高温仓" ></el-checkbox>
        <el-checkbox label="2号冷冻仓" ></el-checkbox>
        <el-checkbox label="3号中温仓" ></el-checkbox>
        <el-checkbox label="4号低温仓" ></el-checkbox>
      </el-checkbox-group>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
      </div>
    </el-dialog>

    <!-- <el-button size="medium" type="primary" @click="dialogFormVisible2=true"> 
      <i class="el-icon-circle-plus"> 新增</i>
    </el-button> -->

    <el-dialog title="新增用户设备分组" :visible.sync="dialogFormVisible2">
      <el-form>
        <el-form-item label="用户名称">
          <el-input auto-complete="off" clearable=true v-model="AddInputUserGroupName"></el-input>
        </el-form-item>
        <el-form-item label="设备名称">
          <el-checkbox-group v-model="checklist2">
            <el-checkbox label="1号高温仓" ></el-checkbox>
            <el-checkbox label="2号冷冻仓" ></el-checkbox>
            <el-checkbox label="3号中温仓" ></el-checkbox>
            <el-checkbox label="4号低温仓" ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="clickIconAddConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible : false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      tableData: [],

      checkList: ['1号高温仓','2号冷冻仓','4号低温仓'],
      checkList1: ['1号高温仓','2号冷冻仓','4号低温仓'],
      checklist2: []
    }
  },

  mounted() {
    this.$http.get('static/userequipment.json').then(res => {
      this.tableData = res.body.userequipment;
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

    clickIconAddConfirm: function(index,row){
      this.dialogFormVisible2 = false;
      this.tableData.push({ username: this.AddInputUserGroupName , equipmentnumber: '3'})
    },
  }
}
</script>
