<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="isShow">
      <div class="left">
        <span class="icon-back icon"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper"><span class="icon-cart icon"></span></div>
        <div class="icon-wrapper"><span class="icon-person icon"></span></div>
        <div class="icon-wrapper"><span class="icon-more icon"></span></div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'TitleBar',
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: px2rem(48);
    background: #fff;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .2);
    display: flex;
    .left {
      width: px2rem(60);
      text-align: center;
      .icon-back {
        font-size: px2rem(16);
      }
    }
    .right {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(40);
        text-align: center;
        .icon-cart {
          font-size: px2rem(22);
        }
      }
    }
  }
</style>