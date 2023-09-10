<template>
  <el-scrollbar height="100vh">
    <div class="login-wrap">
      <div class="login-card">
        <div class="title">来瞅一下</div>
        <div style="padding-top: 12px; color: #888">旅游记录事项</div>
        <el-form class="login-form" :model="basicForm" label-position="top">
          <el-form-item label="登录账号">
            <el-input placeholder="请输入11位手机号" v-model="basicForm.name" />
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="basicForm.password"
              show-password
            />
          </el-form-item>
        </el-form>
        <el-button @click="submitForm" class="login-btn" type="primary">登录</el-button>
      </div>
      <!-- <div class="beian">
        <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备16031557号</a>
      </div> -->
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
export default {
  name: 'LoginBime'
}
</script>
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import debounce from 'lodash/debounce'
import { useMainStore, elementPlusStore } from '@/store/index'
import { mix } from '@/utils/index'
const store: any = elementPlusStore()
const router: any = useRouter()
const useMain = useMainStore()

const basicForm = reactive({
  name: '',
  password: ''
})
const uiloading = ref(false)
const submitForm = debounce(
  () => {
    if (basicForm.name !== '123456' || basicForm.password !== '12345678') {
      ElMessage({
        message: '请输入账号密码',
        type: 'warning'
      })
      return false
    }
    uiloading.value = true
    useMain.setLogin('this_is_my_token').then(() => {
      uiloading.value = false
      router.push({ path: '/' })
    })
  },
  500,
  { leading: true, trailing: false }
)

// color
const [pre, mixWhite, mixBlack] = ['--el-color-primary', '#ffffff', '#000000']
const setColorFun = () => {
  const elColor = document.documentElement
  elColor.style.setProperty(pre, store.color)
  for (let i = 1; i < 10; i += 1) {
    elColor.style.setProperty(`${pre}-light-${i}`, mix(store.color, mixWhite, i * 0.1))
  }
  elColor.style.setProperty('--el-color-primary-dark-2', mix(store.color, mixBlack, 0.1))
}
onMounted(() => {
  setColorFun()
})
</script>
<style lang="scss" scoped>
@import '@/styles/basic.scss';
.beian {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  color: #666;
  font-size: 14px;
}
.login-wrap {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 486px;
  height: 100vh;
  background: #f4f6fc;
  background-size: cover;
  transition: all 0.3s;
  .login-card {
    box-sizing: border-box;
    padding: 40px;
    width: 476px;
    height: 486px;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0 12px 30px -10px rgba(39, 60, 123, 0.25);
    .title {
      margin: 24px 0 0;
      padding: 0;
      color: var(--el-color-primary);
      letter-spacing: 0.06px;
      font-size: 32px;
      font-family: PingFangSC-Semibold;
      line-height: 45px;
    }
    .line {
      margin-top: 16px;
      width: 82px;
      height: 4px;
      border-radius: 2px;
      background: #526fde;
    }
    .desic {
      margin-top: 22px;
      color: #7a819c;
      letter-spacing: 0.02px;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      line-height: 20px;
    }
  }
}
.login-form {
  margin-top: 38px;
  :deep(.el-form-item) {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
    .el-form-item__label {
      margin-bottom: 5px;
      color: #bbbecc;
      font-size: 12px;
      font-family: PingFangSC-Regular;
      line-height: 24px;
    }
  }
}
.check-password {
  display: inline-flex;
  align-items: center;
  margin-top: 16px;
  color: #7a819c;
  letter-spacing: 0.02px;
  font-size: 12px;
  font-family: PingFangSC-Regular;
  line-height: 17px;
  cursor: pointer;
  sapn {
    margin-left: 4px;
  }
  img {
    margin: 0;
    padding: 0;
    width: 14px;
    height: 14px;
  }
}
.login-btn {
  margin-top: 50px;
  width: 100%;
}
</style>
