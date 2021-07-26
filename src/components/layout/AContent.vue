<template>
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
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {}
  },
  computed: {
    isShowRouter() {
      return this.$store.getters.isShowRouter
    },
    // 需要缓存的路由
    keepAliveData() {
      return this.$store.getters.tagsArray.map((item) => item.name)
    },
  },
  methods: {
    setAvatar(avatar) {
      this.emit('setAvatar', avatar)
    },
  },
}
</script>

<style lang="less">
@import '../../style/layout/AContent';
@import '../../style/animation/Move';
</style>
