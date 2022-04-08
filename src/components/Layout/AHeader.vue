<template>
  <header>
    <div class="h-left">
      <div class="pointer" @click="isShrinkAside" title="收缩/展开">
        <Icon type="ios-swap"/>
      </div>
      <p class="crumbs">{{ crumbs }}</p>
    </div>
    <div id="switch">
      <span>夜间模式</span>
      <i-switch @on-change="changeTheme">
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
          <Icon v-show="arrowDown" type="md-arrow-dropdown"/>
          <Icon v-show="arrowUp" type="md-arrow-dropup"/>
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
import { px2rem } from '@/utils/resize'

export default {
  name: 'AHeader',
  data() {
    return {
      arrowUp: false, // 用户详情向上箭头
      arrowDown: true, // 用户详情向下箭头
      switch1: false,
    }
  },
  mounted() {
    this.getUser()
  },
  computed: {
    crumbs() {
      return this.$store.getters.crumbs
    },
    name() {
      return this.$store.getters.name
    },
    avatar() {
      return this.$store.getters.avatar
    },
  },
  methods: {
    getUser() {
      this.$store
        .dispatch('getUser')
        .then((res) => {
          console.log(res)
          this.$store.dispatch('saveSession', res)
        })
        .catch((error) => {
          console.error(error)
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
        this.$emit('changeMain', px2rem(60))
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
      this.$emit('changeMain', px2rem(120))
    },
  },
}
</script>

<style lang="scss">
@import '../../style/layout/aHeader';
</style>
