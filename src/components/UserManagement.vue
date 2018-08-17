<template>
<el-row class="tac">
  <el-col :span="3">
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <template slot="title">
          <i class="el-icon-menu" @click="clickTag1"></i>
          <span>设备访问</span>
        </template>
      </el-menu-item>
      <div v-if="localStorage.userauthority === '1'">
        <el-menu-item index="2">
          <i class="el-icon-menu" @click="clickTag2"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item  index="3">
          <i class="el-icon-menu" @click="clickTag3"></i>
          <span slot="title">设备管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu" @click="clickTag4"></i>
          <span slot="title">用户分组</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-menu" @click="clickTag5"></i>
          <span slot="title">设备分配</span>
        </el-menu-item>
      </div>
    </el-menu>
  </el-col>
  <router-view></router-view>
</el-row>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  
  .tac{
    width:100%;
    height:100%;
    background-size:cover;
    overflow: hidden;
    position: absolute;
    background-image: url(../assets/timg1.jpg);
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>


<script>
//import global_ from '../components/Global'
export default {
  data(){
    return {
      // global_:global_,
      localStorage:localStorage
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    clickTag1: function(){
      this.$router.push('/UserManagement/EquipmentVisitTable')
    },
    clickTag2: function(){
      this.$router.push('/UserManagement/UserManagementTable')
    },
    clickTag3: function(){
      this.$router.push('/UserManagement/EquipmentManagementTable')
    },
    clickTag4: function(){
      this.$router.push('/UserManagement/UserGroupTable')
    },
    clickTag5: function(){
      this.$router.push('/UserManagement/UserEquipmentTable')
    }
  }
}
</script>
