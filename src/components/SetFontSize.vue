<template>
  <section class="setting-font-size">
    <div class="preview" :style="{fontSize: fontSizeList[0].fontSize + 'px'}">A</div>
    <div class="select-wrapper"
         v-for="(item, index) in fontSizeList"
         :key="index" @click="setFontSize(item.fontSize)">
      <div class="line"></div>
      <div class="pointer-wrapper">
        <div class="point" v-show="item.fontSize === defaultFontSize">
          <div class="small-point"></div>
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div class="preview" :style="{fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px'}">A</div>
  </section>
</template>

<script>
  export default {
    name: 'SetFontSize',
    data() {
      return {
        fontSizeList: [
          {fontSize: 12},
          {fontSize: 14},
          {fontSize: 16},
          {fontSize: 18},
          {fontSize: 20},
          {fontSize: 22},
          {fontSize: 24}
        ],
        defaultFontSize: 16
      }
    },
    methods: {
      setFontSize(size) {
        this.defaultFontSize = size
        this.$emit('setFontSize', size)
      }
    }
  }
</script>

<style scoped lang="scss">
  .setting-font-size {
    display: flex;
    height: 100%;
    .preview {
      flex: 0 0 px2rem(40);
      @include center;
    }
    .select-wrapper {
      display: flex;
      flex: 1;
      align-items: center;
      .line {
        flex: 1;
        height: 0;
        border-top: px2rem(1) solid #999;
      }
      &:nth-of-type(2) {
        .line:first-child {
          border-top: none;
        }
      }
      &:nth-last-of-type(2) {
        .line:last-child {
          border-top: none;
        }
      }
      .pointer-wrapper {
        flex: 0 0 0;
        width: 0;
        height: px2rem(7);
        border-left: px2rem(1) solid #999;
        position: relative;
        .point {
          position: absolute;
          top: px2rem(- (20 - 7) / 2);
          left: px2rem(- (20 - 1) / 2);
          width: px2rem(20);
          height: px2rem(20);
          border-radius: 100%;
          background: white;
          border: px2rem(1) solid #ccc;
          box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, .2);
          @include center;
          .small-point {
            width: px2rem(5);
            height: px2rem(5);
            background: #000;
            border-radius: 100%;
          }
        }
      }
    }
  }
</style>