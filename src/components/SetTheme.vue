<template>
  <ul class="setting-theme">
    <li
      class="setting-theme-item"
      v-for="(item, index) in themeList"
      :key="item.name"
      @click="setTheme(index)">
      <div class="preview" :style="item.style.body" :class="{border: item.name === 'default'}"></div>
      <div class="text" :class="{selected: defaultTheme === index}">{{item.name}}</div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'SetTheme',
    props: {
      themeList: Array,
      defaultTheme: Number
    },
    data() {
      return {}
    },
    methods: {
      setTheme(index) {
        this.$emit('setTheme', index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .setting-theme {
    display: flex;
    height: 100%;
  }
  .setting-theme-item {
    flex: 1;
    text-align: center;
    padding: px2rem(5) px2rem(10);
    .preview {
      height: px2rem(24);
      margin-top: px2rem(6);
      box-sizing: border-box;
      &.border {
        border: px2rem(1) solid #ccc;
      }
    }
    .text {
      color: #ccc;
      font-size: px2rem(14);
      margin-top: px2rem(6);
      &.selected {
        color: #222;
      }
    }
  }
</style>