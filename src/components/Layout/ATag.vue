<template>
  <!-- 标签栏 -->
  <div class="div-tags">
    <!-- 标签栏相关功能 -->
    <div class="div-icons">
      <div class="refresh" @click="reloadPage" title="刷新当前标签页">
        <Icon type="md-refresh" />
      </div>
      <div class="close-other" @click="closeOthers" title="关闭其他标签页">
        <Icon type="md-close" />
      </div>
      <div class="close-all" @click="closeAll" title="关闭所有标签页">
        <Icon type="md-close-circle" />
      </div>
    </div>
    <ul class="ul-c">
      <li
        v-for="(item, index) in tagsArray"
        :key="index"
        :class="{ active: isActive(item.path) }"
        @click="activeTag(index)"
      >
        <a class="li-a">
          {{ item.text }}
        </a>
        <Icon size="16" @click="closeTag(index)" type="md-close" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ATag',
  computed: {
    tagsArray() {
      return this.$store.getters.tagsArray
    },
  },
  methods: {
    // 刷新当前标签页
    reloadPage() {
      let name = this.$route.name
      let path = this.$route.path
      let index = this.tagsArray.map((item) => item.path).indexOf(path)
      this.$nextTick(() => {
        if (this.$store.getters.tagsArray.length) {
          this.$store.commit('setIsShowRouter', false)
          this.$store.commit('spliceTagsArray', [index, 1])
          this.$nextTick(() => {
            this.$store.commit('spliceTagsArray', [
              index,
              0,
              {
                name,
                path,
                text: this.getNameToTitle(name),
              },
            ])
            this.$emit('gotoPage', path)
            this.$store.commit('setIsShowRouter', true)
          })
        } else {
          this.$store.commit('setIsShowRouter', false)
          this.$nextTick(() => {
            this.$store.commit('pushTagsArray', {
              name,
              path,
              text: this.getNameToTitle(name),
            })
            this.$emit('gotoPage', path)
            this.$store.commit('setIsShowRouter', true)
          })
        }
      })
    },
    // 关闭单个标签
    closeTag(i) {
      let path = this.$store.getters.tagsArray[i].path
      this.tagsArray.splice(i, 1)
      window.event.stopPropagation()
      // 如果关闭的是当前标签 则激活前一个标签
      // 如果关闭的是第一个标签 则激活后一个标签
      if (this.$store.getters.tagsArray.length) {
        if (this.isActive(path)) {
          if (i !== 0) {
            this.$emit('gotoPage', this.$store.getters.tagsArray[i - 1].path)
          } else {
            this.$emit('gotoPage', this.$store.getters.tagsArray[i].path)
          }
        }
      } else if (path !== '/home') {
        // 如果没有标签则跳往首页
        this.$emit('gotoPage', '/home')
      } else {
        this.reloadPage()
      }
    },
    // 关闭其他标签
    closeOthers() {
      this.$store.commit('setTagsArray', [])
      this.$emit('gotoPage', this.$route.path)
      this.reloadPage()
    },
    // 关闭所有标签
    closeAll() {
      this.$store.commit('setTagsArray', [])
      this.$emit('gotoPage', '/home')
      this.reloadPage()
    },
    // 判断当前标签页是否激活状态
    isActive(path) {
      return this.$route.path === path
    },
    // 激活标签
    activeTag(i) {
      this.$emit('gotoPage', this.tagsArray[i].path)
    },
    getNameToTitle(name) {
      let res = null
      this.$emit('getNameToTitle', name, (val) => {
        res = val
      })
      return res
    },
  },
}
</script>

<style lang="scss">
@import '../../style/layout/aTag';
</style>
