

<template>
  <div class="backgroundimg">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
    <el-form-item label="用户名" prop="username" style="width:300px;">
      <el-input v-model="ruleForm2.username" auto-complete="off" style="width:240px;"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" style="width:300px">
      <el-input type="password" v-model="ruleForm2.password" auto-complete="off" style="width:240px;"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
  .backgroundimg{
    width:100%;
    height:100%;
    background-size:cover;
    overflow: hidden;
    position: absolute;
    background-image: url(../assets/background.jpg);
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-position:center center; */
    /* box-shadow: 0 0px 3px rgba(0,0,0,.5); */
  }
</style>

<script>
import global_ from '../components/Global'

export default {
  data () {
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (this.ruleForm2.username !== '') {
          this.$refs.ruleForm2.validateField('password')
        }
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }else {
        callback()
      }
    }
    return {
      ruleForm2: {
        username: '',
        password: ''
      },
      rules2: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if ((this.ruleForm2.username==='admin' && this.ruleForm2.password==='admin')||
            (this.ruleForm2.username==='a1' && this.ruleForm2.password==='a1')||
            (this.ruleForm2.username==='a2' && this.ruleForm2.password==='a2')||
            (this.ruleForm2.username==='a3' && this.ruleForm2.password==='a3')) {
          // alert('submit!')
          // this.$router.push('/UserManagement/UserManagementTable')
          this.$router.push('/UserManagement/EquipmentVisitTable')
        } else {
          alert('用户名或密码错误！')
          //console.log('error submit!!')
          return false
        }

        if (this.ruleForm2.username==='admin'){
        //  global_.userAuthority = 1;
          localStorage.userauthority = 1;
          // console.log(global_);
        }else{
        //  global_.userAuthority = 0;
          localStorage.userauthority = 0;
          // console.log(global_);
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
