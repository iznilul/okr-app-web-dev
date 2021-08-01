<template>
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
      let index = this.tagsArray.map((item) => item.name).indexOf(name)
      this.$nextTick(() => {
        if (this.$store.getters.tagsArray.length) {
          this.$store.commit('setIsShowRouter', false)
          this.$store.commit('spliceTagsArray', [index, 1])
          this.$nextTick(() => {
            this.$store.commit('spliceTagsArray', [index, 0, { name, text: this.getNameToTitle(name) }])
            this.$emit('gotoPage', name)
            this.$store.commit('setIsShowRouter', true)
          })
        } else {
          this.$store.commit('setIsShowRouter', false)
          this.$nextTick(() => {
            this.$store.commit('pushTagsArray', { name, text: this.getNameToTitle(name) })
            this.$emit('gotoPage', name)
            this.$store.commit('setIsShowRouter', true)
          })
        }
      })
    },
    // 关闭单个标签
    closeTag(i) {
      let name = this.$store.getters.tagsArray[i].name
      this.tagsArray.splice(i, 1)
      window.event.stopPropagation()
      // 如果关闭的是当前标签 则激活前一个标签
      // 如果关闭的是第一个标签 则激活后一个标签
      if (this.$store.getters.tagsArray.length) {
        if (this.isActive(name)) {
          if (i !== 0) {
            this.$emit('gotoPage', this.$store.getters.tagsArray[i - 1].name)
          } else {
            this.$emit('gotoPage', this.$store.getters.tagsArray[i].name)
          }
        }
      } else if (name !== 'home') {
        // 如果没有标签则跳往首页
        this.$emit('gotoPage', 'home')
      } else {
        this.reloadPage()
      }
    },
    // 批量关闭标签
    closeTags(flag) {
      // console.log('flag', flag)
      // console.log(typeof flag)
      // console.log(this.$route.name)
      if (flag === '1') {
        // 关闭其他标签
        this.$store.commit('setTagsArray', [])
        this.$emit('gotoPage', this.$route.name)
        this.reloadPage()
      } else {
        // 关闭所有标签
        this.$store.commit('setTagsArray', [])
        this.$emit('gotoPage', 'home')
        this.reloadPage()
      }
    },
    // 判断当前标签页是否激活状态
    isActive(name) {
      return this.$route.name === name
    },
    // 激活标签
    activeTag(i) {
      this.$emit('gotoPage', this.tagsArray[i].name)
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

<style lang="less" scoped>
@import '../../style/layout/ATag';
</style>
