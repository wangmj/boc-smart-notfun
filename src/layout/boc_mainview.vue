<template>
  <div>
    <el-row>
      <el-col>mainview</el-col>
    </el-row>
<el-row>
  <el-col>Welcome {{loginUser}}, you signIn at {{loginTime|datetimeFilter}}</el-col>
</el-row>
  </div>
</template>

<script>
export default {
  computed:{
    loginUser(){
     return this.$store.getters.loginUser
    },
    loginTime(){
      return this.$store.getters.loginTime
    }
  },
  created(){
    console.log(this.$store.getters.loginUser);
  }
};
</script>

<style>

</style>
