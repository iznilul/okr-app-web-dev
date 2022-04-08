<template>
  <div :class="[theme === 1 ? 'body-theme-dark' : 'body-theme-light']">
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
        :linesDistance="200"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      ></vue-particles>
      <keep-alive :include="keepAliveData">
        <transition appear name="move">
          <!-- 子页面 -->
          <router-view v-if="isShowRouter" />
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { px2rem } from '@/utils/resize'

export default {
  name: 'AContent',
  data() {
    return {
    }
  },
  computed: {
    isShowRouter() {
      return this.$store.getters.isShowRouter
    },
    // 需要缓存的路由
    keepAliveData() {
      return this.$store.getters.tagsArray.map((item) => item.name)
    },
    theme() {
      return this.$store.getters.theme
    },
  },
  methods: {},
}
</script>

<style lang="less">
@import '../../style/animation/move';
@import '../../style/theme/theme';
@import '../../style/layout/aContent';
</style>
