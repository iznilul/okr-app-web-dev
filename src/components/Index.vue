<template>
  <div class="index-vue">
    <!-- 侧边栏 -->
    <aside :class="asideClassName">
      <!-- logo -->
      <div class="logo-c">
        <img src="../assets/imgs/logo.png" alt="logo" class="logo" />
        <span v-show="isShowAsideTitle">实验室后台管理系统</span>
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
        <div v-for="(item, index) in menuItems" :key="index">
          <!--                    判断item是不是子菜单，是的话遍历展示-->
          <Submenu :class="isShowAsideTitle ? '' : 'shrink'" v-if="item.children" :name="index">
            <template slot="title">
              <Icon :size="item.size" :type="item.type" />
              <span v-show="isShowAsideTitle">{{ item.text }}</span>
            </template>
            <div v-for="(subItem, i) in item.children" :key="index + i">
              <template>
                <MenuItem :class="isShowAsideTitle ? '' : 'shrink'" :name="subItem.name">
                  <Icon :size="subItem.size" :type="subItem.type" />
                  <span v-show="isShowAsideTitle">{{ subItem.text }}</span>
                </MenuItem>
              </template>
            </div>
          </Submenu>
          <template v-else-if="!item.hidden">
            <!--                        判断是不是外部链接-->
            <a :href="item.url" v-if="item.isExternal" target="_blank" class="external">
              <MenuItem :class="isShowAsideTitle ? '' : 'shrink'" :name="'external-link-' + index">
                <Icon :size="item.size" :type="item.type" />
                <span v-show="isShowAsideTitle">{{ item.text }}</span>
              </MenuItem>
            </a>
            <MenuItem v-else :class="isShowAsideTitle ? '' : 'shrink'" :name="item.name">
              <Icon :size="item.size" :type="item.type" />
              <span v-show="isShowAsideTitle">{{ item.text }}</span>
            </MenuItem>
          </template>
        </div>
      </Menu>
    </aside>

    <!-- 右侧部分 -->
    <section class="sec-right">
      <!-- 头部 -->
      <div class="top-c">
        <header>
          <div class="h-left">
            <div class="pointer" @click="isShrinkAside" title="收缩/展开">
              <Icon type="ios-apps" />
            </div>
            <!-- 面包屑功能 -->
            <p class="crumbs">{{ crumbs }}</p>
          </div>
          <div class="h-right">
            <div class="user-img-c">
              <img :src="avatar" />
            </div>
            <!-- 下拉菜单 -->
            <Dropdown trigger="click" @on-click="userOperate" @on-visible-change="showArrow">
              <div class="pointer">
                <span>{{ name }}</span>
                <Icon v-show="arrowDown" type="md-arrow-dropdown" />
                <Icon v-show="arrowUp" type="md-arrow-dropup" />
              </div>
              <DropdownMenu slot="list">
                <!-- name标识符 -->
                <DropdownItem name="1">用户信息</DropdownItem>
                <DropdownItem divided name="2">退出登陆</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </header>

        <!-- 标签栏 -->
        <div class="div-tags">
          <!-- 标签栏相关功能 -->
          <div class="div-icons">
            <div class="refresh-c" @click="reloadPage" title="刷新当前标签页">
              <Icon type="md-refresh" />
            </div>
            <div class="tag-options" title="关闭标签">
              <Dropdown trigger="click" @on-click="closeTags">
                <Icon type="ios-options" />
                <DropdownMenu slot="list">
                  <DropdownItem name="1">关闭其他标签</DropdownItem>
                  <DropdownItem name="2">关闭所有标签</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <ul class="ul-c">
            <li
              v-for="(item, index) in tagsArray"
              :key="index"
              :class="{ active: isActive(item.name) }"
              @click="activeTag(index)"
            >
              <a class="li-a">
                {{ item.text }}
              </a>
              <Icon size="16" @click="closeTag(index)" type="md-close" />
            </li>
          </ul>
        </div>
      </div>
      <!-- 页面主体 -->
      <div class="main-content">
        <div class="view-c">
          <vue-particles
            color="#1FD8DE"
            :particleOpacity="0.7"
            :particlesNumber="75"
            shapeType="circle"
            :particleSize="4"
            linesColor="#198BDE"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="lizi"
          ></vue-particles>
          <keep-alive :include="keepAliveData">
            <transition appear name="move">
              <!-- 子页面 -->
              <router-view v-if="isShowRouter" @setAvatar="setAvatar" />
            </transition>
          </keep-alive>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { resetTokenAndClearUser } from '../utils'

export default {
  name: 'index',
  data() {
    return {
      // 用于储存页面路径
      paths: {},
      // 当前显示页面
      currentPage: '',
      openMenus: [], // 要打开的菜单名字 name属性
      menuCache: [], // 缓存已经打开的菜单
      hasNewMsg: true, // 是否有新消息
      isShowRouter: true,

      // 标签栏         标签标题     路由名称
      // 数据格式 {text: '首页', name: 'home'}
      // 用于缓存打开的路由 在标签栏上展示
      tagsArray: [],
      arrowUp: false, // 用户详情向上箭头
      arrowDown: true, // 用户详情向下箭头
      isShowAsideTitle: true, // 是否展示侧边栏内容
      main: null, // 页面主要内容区域
      asideClassName: 'aside-big', // 控制侧边栏宽度变化
      asideArrowIcons: [], // 缓存侧边栏箭头图标 收缩时用
      // 面包屑
      crumbs: '主页',
      name: '',
      avatar: '',
      // 主页路由名称
      home: 'home',
    }
  },
  mounted() {
    // 第一个标签
    const name = this.$route.name
    this.currentPage = name
    this.tagsArray.push({
      text: this.nameToTitle[name],
      name,
    })

    // 根据路由打开对应的菜单栏
    this.openMenus = this.getMenus(name)
    this.$nextTick(() => {
      this.$refs.asideMenu.updateOpened()
    })

    // 设置用户信息
    this.getUserInfo()

    this.main = document.querySelector('.sec-right')
    this.asideArrowIcons = document.querySelectorAll('aside .ivu-icon-ios-arrow-down')
    // console.log(this.asideArrowIcons)

    // 监听窗口大小 自动收缩侧边栏
    this.monitorWindowSize()
  },
  watch: {
    $route(to) {
      const name = to.name
      this.currentPage = name
      if (name === 'error') {
        this.crumbs = '404'
        return
      }

      if (!this.keepAliveData.includes(name)) {
        // 如果标签超过8个 则将第一个标签删除
        if (this.tagsArray.length === 8) {
          this.tagsArray.shift()
        }
        this.tagsArray.push({ name, text: this.nameToTitle[name] })
      }

      setTimeout(() => {
        this.crumbs = this.paths[name]
      }, 0)
    },
  },
  computed: {
    // 菜单栏
    menuItems() {
      // return this.$store.state.menuItems
      return this.$store.getters.menuItems
    },
    // 需要缓存的路由,已在标签中打开的路由
    keepAliveData() {
      return this.tagsArray.map((item) => item.name)
    },
    // 由于iView的导航菜单比较坑 只能设定一个name参数
    // 所以需要在这定义组件名称和标签栏标题的映射表 有多少个页面就有多少个映射条数
    nameToTitle() {
      // console.log('this path', this.paths)
      const obj = {}
      this.menuItems.forEach((e) => {
        this.processNameToTitle(obj, e)
      })
      // console.log('this path', this.paths)
      return obj
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

    setAvatar(avatar) {
      this.avatar = avatar
    },

    getMenus(name) {
      let menus
      const tagTitle = this.nameToTitle[name]
      for (let i = 0, l = this.menuItems.length; i < l; i++) {
        const item = this.menuItems[i]
        menus = []
        menus[0] = i
        if (item.text == tagTitle) {
          return menus
        }

        if (item.children) {
          for (let j = 0, ll = item.children.length; j < ll; j++) {
            const child = item.children[j]
            menus[1] = i + '-' + j
            menus.length = 2
            if (child.text == tagTitle) {
              return menus
            }

            if (child.children) {
              for (let k = 0, lll = child.children.length; k < lll; k++) {
                const grandson = child.children[k]
                menus[2] = i + '-' + j + '-' + k
                if (grandson.text == tagTitle) {
                  return menus
                }
              }
            }
          }
        }
      }
    },

    monitorWindowSize() {
      let w = document.documentElement.clientWidth || document.body.clientWidth
      if (w < 1300) {
        this.shrinkAside()
      }

      window.onresize = () => {
        // 可视窗口宽度太小 自动收缩侧边栏
        if (
          w < 1300 &&
          this.isShowAsideTitle &&
          w > (document.documentElement.clientWidth || document.body.clientWidth)
        ) {
          this.shrinkAside()
        }

        w = document.documentElement.clientWidth || document.body.clientWidth
      }
    },

    // 判断当前标签页是否激活状态
    isActive(name) {
      return this.$route.name === name
    },
    // 跳转页面 路由名称和参数
    gotoPage(name, params) {
      this.currentPage = name
      this.crumbs = this.paths[name]
      this.$router.push({ name, params })

      if (!this.keepAliveData.includes(name)) {
        // 如果标签超过8个 则将第一个标签删除
        if (this.tagsArray.length == 8) {
          this.tagsArray.shift()
        }
        this.tagsArray.push({ name, text: this.nameToTitle[name] })
      }
    },
    // 选择菜单回调函数
    selectMenuCallback(name) {
      if (name.includes('external-link')) return
      this.gotoPage(name)
      this.expandAside()
      setTimeout(() => {
        this.isShowAsideTitle = true
      }, 200)
    },
    // 用户操作
    userOperate(name) {
      switch (name) {
        case '1':
          // 基本资料
          this.gotoPage('userinfo')
          break
        case '2':
          resetTokenAndClearUser()
          this.$router.push({ name: 'login' })
          break
      }
    },
    // 控制用户三角箭头显示状态
    showArrow(flag) {
      this.arrowUp = flag
      this.arrowDown = !flag
    },
    // 判断
    isShrinkAside() {
      if (this.isShowAsideTitle) {
        this.shrinkAside()
      } else {
        this.expandAside()
      }
    },
    // 收缩
    shrinkAside() {
      for (let i = 0, len = this.asideArrowIcons.length; i < len; i++) {
        this.asideArrowIcons[i].style.display = 'none'
      }

      this.isShowAsideTitle = false
      this.openMenus = []
      this.$nextTick(() => {
        if (this.$refs.asideMenu) {
          this.$refs.asideMenu.updateOpened()
        }
      })

      setTimeout(() => {
        this.asideClassName = ''
        this.main.style.marginLeft = '90px'
      }, 0)
    },
    // 展开
    expandAside() {
      setTimeout(() => {
        this.isShowAsideTitle = true
        for (let i = 0, len = this.asideArrowIcons.length; i < len; i++) {
          this.asideArrowIcons[i].style.display = 'block'
        }

        this.openMenus = this.menuCache
        if (this.$refs.asideMenu) {
          this.$refs.asideMenu.updateOpened()
        }
      }, 200)
      this.asideClassName = 'aside-big'
      this.main.style.marginLeft = '220px'
    },
    // 刷新当前标签页
    reloadPage() {
      let name = this.$route.name
      let index = this.keepAliveData.indexOf(name)
      this.$nextTick(() => {
        if (this.tagsArray.length) {
          this.isShowRouter = false
          this.tagsArray.splice(index, 1)
          this.$nextTick(() => {
            this.tagsArray.splice(index, 0, { name, text: this.nameToTitle[name] })
            this.gotoPage(name)
            this.isShowRouter = true
          })
        } else {
          this.isShowRouter = false
          this.$nextTick(() => {
            this.tagsArray.push({ name, text: this.nameToTitle[name] })
            this.gotoPage(name)
            this.isShowRouter = true
          })
        }
      })
    },
    // 关闭单个标签
    closeTag(i) {
      let name = this.tagsArray[i].name
      this.tagsArray.splice(i, 1)
      window.event.stopPropagation()
      // 如果关闭的是当前标签 则激活前一个标签
      // 如果关闭的是第一个标签 则激活后一个标签
      if (this.tagsArray.length) {
        if (this.isActive(name)) {
          if (i != 0) {
            this.gotoPage(this.tagsArray[i - 1].name)
          } else {
            this.gotoPage(this.tagsArray[i].name)
          }
        }
      } else if (name != this.home) {
        // 如果没有标签则跳往首页
        this.gotoPage(this.home)
      } else {
        this.reloadPage()
      }
    },
    // 根据路由名称关闭页面
    closeName(name) {
      for (let i = 0, len = this.tagsArray.length; i < len; i++) {
        if (this.tagsArray[i].name == name) {
          this.closeTag(i)
          break
        }
      }
    },
    // 批量关闭标签
    closeTags(flag) {
      if (flag === 1) {
        // 关闭其他标签
        this.tagsArray = []
        this.gotoPage(this.$route.name)
      } else {
        // 关闭所有标签
        this.tagsArray = []
        this.gotoPage(this.home)
        this.reloadPage()
      }
    },

    // 激活标签
    activeTag(i) {
      this.gotoPage(this.tagsArray[i].name)
    },

    // 菜单栏改变事件
    menuChange(data) {
      this.menuCache = data
    },
    processNameToTitle(obj, data, text) {
      if (data.name) {
        obj[data.name] = data.text
        this.paths[data.name] = text ? `${text} / ${data.text}` : data.text
      }
      if (data.children) {
        data.children.forEach((e) => {
          this.processNameToTitle(obj, e, text ? `${text} / ${data.text}` : data.text)
        })
      }
    },
  },
}
</script>

<style lang="less">
@import '../style/animation/Move';
@import '../style/Index';
</style>
