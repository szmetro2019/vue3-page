<template>
  <div class="login-wrap">
    <div class="login-card">
      <div class="login-language">
        <SvgIcon name="earth"></SvgIcon>
        <a-dropdown>
          <div>{{ localeVal }}</div>
          <template #overlay>
            <a-menu @click="onClick">
              <a-menu-item key="zhCn">中文</a-menu-item>
              <a-menu-item key="en">English</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
      <div class="title">vue3-max</div>
      <a-form
        layout="vertical"
        :model="formState"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
      >
        <a-form-item
          :label="$t('login.Name')"
          name="username"
          :rules="[{ required: true, message: $t('login.NamePla') }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          :label="$t('login.Password')"
          name="password"
          :rules="[{ required: true, message: $t('login.PasswordPla') }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item>
          <a-button block type="primary" html-type="submit">{{ $t('login.Btn') }}</a-button>
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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useInfoStore } from '@/store/index'
import type { MenuProps } from 'ant-design-vue'

const router = useRouter()
const useInfo = useInfoStore()
const { locale } = useI18n()

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

interface localState {
  zhCn: string
  en: string
}
const localObj = reactive<localState>({
  zhCn: '中文',
  en: '英语'
})
const localeVal: any = ref(localObj[useInfo.locale])
const onClick: MenuProps['onClick'] = ({ key }) => {
  useInfo.localeInfo(key)
  localeVal.value = localObj[key]
  locale.value = key

  document.title = key === 'zhCn' ? '登录页-vue-max' : 'login-vue-max'
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
    position: relative;
    .login-language {
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 10;
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #666;
    }
    .title {
      padding: 0 0 24px;
      color: #666;
      font-size: 24px;
    }
  }
}
</style>
