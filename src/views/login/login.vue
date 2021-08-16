<template>
  <el-row type="flex" justify="center" align="middle" tag="div">
    <div class="form-panel">
      <el-form ref="loginForm" :model="params" @submit.native.prevent>
        <el-form-item prop="name" :label="$t('login.userName')">
          <el-input v-model="params.name" type="text" />
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="password">
          <el-input v-model="params.password" type="password" />
        </el-form-item>
        <el-row type="flex" justify="center">
          <el-button type="primary" native-type="submit" @click="handleLogin">
            {{ $t('common.login') }}
          </el-button>
          <el-button @click="$refs.loginForm.resetFields()">
            {{ $t('common.reset') }}
          </el-button>
        </el-row>
      </el-form>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      params: {
        name: '',
        password: ''
      }
    };
  },
  methods: {
    handleLogin() {
      let valid = false;
      this.$refs.loginForm.validate((result) => { valid = result });
      this.$message.info(`${valid}`);
      this.$router.push('/home');
    }
  }
};
</script>

<style lang="scss" scoped>
.form-panel {
  width: 500px;
  margin-top: 120px;
  padding: 30px 50px;
  border-color: #aaa;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
}
</style>
