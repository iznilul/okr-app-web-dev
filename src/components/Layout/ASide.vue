<template>
  <!-- 侧边栏 -->
  <aside :class="asideClassName">
    <!-- logo -->
    <div class="logo-c">
      <img src="../../assets/imgs/itlab.png" alt="logo" class="logo" />
      <span v-show="isShowAsideTitle">itlab后台管理</span>
    </div>
    <!-- 菜单栏 -->
    <Menu
      class="menu"
      ref="asideMenu"
      theme="dark"
      width="100%"
      @on-select="selectMenuCallback"
      accordion
      :open-names="openMenus"
      :active-name="currentPage"
      @on-open-change="menuChange"
    >
      <!-- 动态菜单 -->
      <div v-for="(item, index) in menus" :key="index">
        <Submenu :class="isShowAsideTitle ? '' : 'shrink'" v-if="item.children.length > 0" :name="index">
          <template slot="title">
            <Icon :size="item.meta.size" :type="item.meta.type" />
            <span v-show="isShowAsideTitle">{{ item.meta.text }}</span>
          </template>
          <div v-for="(subItem, i) in item.children" :key="index + i">
            <template>
              <MenuItem :class="isShowAsideTitle ? '' : 'shrink'" :name="subItem.path">
                <Icon :size="subItem.meta.size" :type="subItem.meta.type" />
                <span v-show="isShowAsideTitle">{{ subItem.meta.text }}</span>
              </MenuItem>
            </template>
          </div>
        </Submenu>
        <template v-else-if="!item.hidden">
          <!--                        判断是不是外部链接-->
          <a :href="item.url" v-if="item.isExternal" target="_blank" class="external">
            <MenuItem :class="isShowAsideTitle ? '' : 'shrink'" :name="'external-link-' + index">
              <Icon :size="item.meta.size" :type="item.meta.type" />
              <span v-show="isShowAsideTitle">{{ item.meta.text }}</span>
            </MenuItem>
          </a>
          <MenuItem v-else :class="isShowAsideTitle ? '' : 'shrink'" :name="item.path">
            <Icon :size="item.meta.size" :type="item.meta.type" />
            <span v-show="isShowAsideTitle">{{ item.meta.text }}</span>
          </MenuItem>
        </template>
      </div>
    </Menu>
  </aside>
</template>

<script>
export default {
  name: 'ASide',
  data() {
    return {
      asideArrowIcons: [], // 缓存侧边栏箭头图标 收缩时用
    }
  },
  computed: {
    asideClassName() {
      return this.$store.getters.asideClassName
    },
    isShowAsideTitle() {
      return this.$store.getters.isShowAsideTitle
    },
    menus() {
      return JSON.parse(localStorage.getItem('menu'))
    },
    openMenus() {
      return this.$store.getters.openMenus
    },
    currentPage() {
      return this.$store.getters.currentPage
    },
  },
  mounted() {
    this.asideArrowIcons = document.querySelectorAll('aside .ivu-icon-ios-arrow-down')
  },
  methods: {
    // 选择菜单回调函数
    selectMenuCallback(name) {
      console.log(name)
      //
      if (name.includes('external-link')) return
      this.$emit('gotoPage', name)
      // this.expandAside()
      // setTimeout(() => {
      //   this.$store.commit('setIsShowAsideTitles', true)
      // }, 200)
    },
    // 菜单栏改变事件
    menuChange(data) {
      this.$store.commit('setMenuCache', data)
    },

    // 下拉节点收缩
    shrinkIcon(item) {
      for (let i = 0, len = this.asideArrowIcons.length; i < len; i++) {
        this.asideArrowIcons[i].style.display = item
      }
    },

    // 更新菜单
    updateMenu() {
      this.$nextTick(() => {
        if (this.$refs.asideMenu) {
          this.$refs.asideMenu.updateOpened()
        }
      })
    },
    //展开
    expandAside() {
      setTimeout(() => {
        this.$store.commit('setIsShowAsideTitles', true)
        this.$emit('triggerShrinkIcon', 'block')

        this.$store.commit('setOpenMenus', this.$store.getters.menuCache)
        if (this.$refs.asideMenu) {
          this.$refs.asideMenu.updateOpened()
        }
      }, 200)
      this.$store.commit('setAsideClassName', 'aside-big')
      this.$emit('changeMain', '200px')
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../style/layout/aSide';
</style>
