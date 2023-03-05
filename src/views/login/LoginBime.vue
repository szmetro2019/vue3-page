<template>
  <div class="login-wrap">
    <div class="login-card">
      <div class="title">vue3-max</div>
      <a-form
        layout="vertical"
        :model="formState"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
      >
        <a-form-item
          label="登录账号"
          name="username"
          :rules="[{ required: true, message: '请输入登录账号' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="登录密码"
          name="password"
          :rules="[{ required: true, message: '请输入登录密码' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item>
          <a-button block type="primary" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'LoginBime'
}
</script>
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useInfoStore } from '@/store/index'

const router = useRouter()
const useInfo = useInfoStore()

interface FormState {
  username: string
  password: string
}

const formState = reactive<FormState>({
  username: '123456',
  password: '12345678'
})
const onFinish = () => {
  useInfo.setLogin('tokenKey').then(() => {
    router.push({ path: '/' })
  })
}
</script>
<style lang="less" scoped>
.login-wrap {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  .login-card {
    box-sizing: border-box;
    padding: 24px;
    width: 480px;
    border: 1px solid #efefef;
    border-radius: 12px;
    background: #ffffff;
    .title {
      padding: 0 0 24px;
      color: #666;
      font-size: 24px;
    }
  }
}
</style>
