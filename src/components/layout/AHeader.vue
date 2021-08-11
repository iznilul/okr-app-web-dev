<template>
  <header>
    <div class="h-left">
      <div class="pointer" @click="isShrinkAside" title="收缩/展开">
        <Icon type="ios-swap" size="24" />
      </div>
      <p class="crumbs">{{ crumbs }}</p>
    </div>
    <div id="switch">
      <span>夜间模式</span>
      <i-switch size="large" @on-change="changeTheme">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
      </i-switch>
    </div>
    <div class="h-right">
      <div class="user-img-c">
        <img :src="avatar" />
      </div>
      <!-- 下拉菜单 -->
      <Dropdown trigger="click" @on-click="userOperate" @on-visible-change="showArrow">
        <div class="pointer">
          <Icon v-show="arrowDown" type="md-arrow-dropdown" size="24" />
          <Icon v-show="arrowUp" type="md-arrow-dropup" size="24" />
        </div>
        <DropdownMenu slot="list">
          <!-- name标识符 -->
          <DropdownItem name="1">用户信息</DropdownItem>
          <DropdownItem divided name="2">退出登陆</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <span class="name">{{ name }}</span>
    </div>
  </header>
</template>

<script>
import { resetTokenAndClearUser } from '../../utils'

export default {
  name: 'AHeader',
  data() {
    return {
      arrowUp: false, // 用户详情向上箭头
      arrowDown: true, // 用户详情向下箭头
      name: sessionStorage.getItem('name'),
      avatar: sessionStorage.getItem('avatar'),
      switch1: false,
    }
  },
  mounted() {
    this.getUserInfo()
  },
  computed: {
    crumbs() {
      return this.$store.getters.crumbs
    },
  },
  methods: {
    getUserInfo() {
      this.$store
        .dispatch('userInfoByUsername', { username: localStorage.getItem('username') })
        .then((res) => {
          const data = res
          this.$store.dispatch('saveSession', res)
          this.name = sessionStorage.getItem('name')
          this.avatar = sessionStorage.getItem('avatar')
          this.getUserInfoSuccess()
        })
        .catch((error) => {
          this.getUserInfoFailed()
          console.error(error)
        })
    },

    getUserInfoSuccess() {
      this.$Notice.success({
        title: '获取用户信息成功',
      })
    },

    getUserInfoFailed() {
      this.$Notice.error({
        title: '获取用户信息失败',
        desc: '请检查用户名密码或者网络连接',
      })
    },

    // 用户操作
    userOperate(name) {
      switch (name) {
        case '1':
          // 基本资料
          this.$emit('gotoPage', 'userinfo')
          break
        case '2':
          resetTokenAndClearUser()
          this.$router.push({ name: 'login' })
          break
      }
    },
    changeTheme(status) {
      // console.log(status)
      if (status) {
        this.$store.commit('setTheme', 1)
      } else {
        this.$store.commit('setTheme', 0)
      }
      this.$Message.info('模式已切换')
    },

    // 控制用户三角箭头显示状态
    showArrow(flag) {
      this.arrowUp = flag
      this.arrowDown = !flag
    },

    // 判断
    isShrinkAside() {
      if (this.$store.getters.isShowAsideTitle) {
        this.shrinkAside()
      } else {
        this.expandAside()
      }
    },

    // 收缩
    shrinkAside() {
      this.$emit('triggerShrinkIcon', 'none')

      this.$store.commit('setIsShowAsideTitles', false)
      this.$store.commit('setOpenMenus', [])

      this.$emit('triggerUpdateMenu')

      setTimeout(() => {
        this.$store.commit('setAsideClassName', '')
        this.$emit('changeMain', '90px')
      }, 0)
    },
    // 展开
    expandAside() {
      setTimeout(() => {
        this.$store.commit('setIsShowAsideTitles', true)
        this.$emit('triggerShrinkIcon', 'block')

        this.$store.commit('setOpenMenus', this.$store.getters.menuCache)
        this.$emit('triggerUpdateMenu')
      }, 200)
      this.$store.commit('setAsideClassName', 'aside-big')
      this.$emit('changeMain', '200px')
    },
    setAvatar(avatar) {
      this.avatar = avatarc
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../style/layout/AHeader';
</style>
