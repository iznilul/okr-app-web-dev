module.exports = {
  root: true,
  env: {
    node: true,
  },

  extends: ['eslint-config-ali/vue', 'plugin:prettier/recommended'],
  rules: {
    'vue/comment-directive': 0,
    'vue/no-unused-components': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/require-prop-type-constructor': 0,
    'vue/use-v-on-exact': 0,
    // 只使用单引号
    quotes: [1, 'single'],
  },
}
