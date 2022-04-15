<template>
  <div class="layout">
    <a-side ref="aside" @gotoPage="gotoPage" @changeMain="changeMain"></a-side>
    <section class="sec-right">
      <AHeader
        ref="aHeader"
        @triggerShrinkIcon="triggerShrinkIcon"
        @triggerUpdateMenu="triggerUpdateMenu"
        @gotoPage="gotoPage"
        @changeMain="changeMain"
      ></AHeader>
      <ATag @getNameToTitle="getNameToTitle" @gotoPage="gotoPage"></ATag>
      <AContent></AContent>
      <AFooter></AFooter>
    </section>
  </div>
</template>

<script>
import ASide from '../components/Layout/ASide'
import AHeader from '../components/Layout/AHeader'
import ATag from '../components/Layout/ATag'
import AContent from '../components/Layout/AContent'
import AFooter from '../components/Layout/AFooter'

export default {
  name: 'Layout',
  components: {
    ASide,
    AHeader,
    ATag,
    AContent,
    AFooter,
  },
  data() {
    return {
      paths: {},
      main: null,
    }
  },
  watch: {
    $route(to) {
      console.log(to)
      const name = to.name
      const path = to.path
      this.$store.commit('setCurrentPage', name)
      if (name === 'error') {
        this.$store.commit('setCrumbs', '404')
        return
      }
      if (!this.keepAliveData.includes(name)) {
        // 如果标签超过8个 则将第一个标签删除
        if (this.$store.getters.tagsArray.length === 8) {
          this.$store.commit('shiftTagsArray')
        }
        const tagsArray = { name, path, text: this.nameToTitle[name] }
        // console.log('tagsArray', tagsArray)
        this.$store.commit('pushTagsArray', tagsArray)
      }

      setTimeout(() => {
        this.$store.commit('setCrumbs', this.paths[name])
      }, 0)
    },
  },
  mounted() {
    const name = this.$route.name
    const path = this.$route.path
    this.$store.commit('setCurrentPage', name)
    this.$store.commit('pushTagsArray', {
      text: this.nameToTitle[name],
      path,
      name,
    })
    // 根据路由打开对应的菜单栏
    this.$store.commit('setOpenMenus', this.getMenus(name))
    this.$nextTick(() => {
      this.$refs.aside.$refs.asideMenu.updateOpened()
    })

    this.main = document.querySelector('.sec-right')

    // 监听窗口大小 自动收缩侧边栏
    this.monitorWindowSize()
  },
  computed: {
    menus() {
      return JSON.parse(localStorage.getItem('menu'))
    },
    // 需要缓存的路由
    keepAliveData() {
      return this.$store.getters.tagsArray.map((item) => item.name)
    },
    // 由于iView的导航菜单比较坑 只能设定一个name参数
    // 所以需要在这定义组件名称和标签栏标题的映射表 有多少个页面就有多少个映射条数
    nameToTitle() {
      const obj = {}
      // console.log('this path', this.paths)
      this.menus.forEach((e) => {
        this.processNameToTitle(obj, e)
      })
      console.log('obj', obj)
      return obj
    },
  },
  methods: {
    changeMain(item) {
      // console.log(item)
      this.main.style.marginLeft = item
    },
    gotoPage(path) {
      console.log('to path', path)
      this.$router.push(path)
    },
    processNameToTitle(obj, data, text) {
      if (data.name) {
        obj[data.name] = data.meta.text
        this.paths[data.name] = text ? `${text} / ${data.meta.text}` : data.meta.text
      }
      if (data.children) {
        data.children.forEach((e) => {
          this.processNameToTitle(obj, e, text ? `${text} / ${data.meta.text}` : data.meta.text)
        })
      }
    },
    triggerShrinkIcon(item) {
      this.$refs.aside.shrinkIcon(item)
    },

    triggerUpdateMenu() {
      this.$refs.aside.updateMenu()
    },
    getNameToTitle(name, callback) {
      let res = this.nameToTitle[name]
      callback(res)
    },
    getMenus(name) {
      let menus = []
      const tagTitle = this.nameToTitle[name]
      for (let i = 0, l = this.menus.length; i < l; i++) {
        const item = this.menus[i]
        menus[0] = i
        if (item.text === tagTitle) {
          return menus
        }

        if (item.children) {
          for (let j = 0, ll = item.children.length; j < ll; j++) {
            const child = item.children[j]
            menus[1] = i + '-' + j
            menus.length = 2
            if (child.text === tagTitle) {
              return menus
            }

            if (child.children) {
              for (let k = 0, lll = child.children.length; k < lll; k++) {
                const grandson = child.children[k]
                menus[2] = i + '-' + j + '-' + k
                if (grandson.text === tagTitle) {
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
        this.$refs.aHeader.shrinkAside()
      }

      window.onresize = () => {
        // 可视窗口宽度太小 自动收缩侧边栏
        if (
          w < 1300 &&
          this.isShowAsideTitle &&
          w > (document.documentElement.clientWidth || document.body.clientWidth)
        ) {
          this.$refs.aHeader.shrinkAside()
        }

        w = document.documentElement.clientWidth || document.body.clientWidth
      }
    },
  },
}
</script>

<style lang="scss">
@import '../style/layout/layout';
</style>
