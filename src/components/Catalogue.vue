<template>
  <transition name="slide-right">
    <section class="catalogue-wrapper" v-show="isShow">
      <ul class="catalogue-content" v-if="bookAvailable">
        <li class="catalogue-item"
            v-for="(item, index) in navigation.toc"
            :key="index"
            @click="jumpTo(item.href)">
          <span class="text">{{item.label}}</span>
        </li>
      </ul>
      <div class="loading" v-else>loading...</div>
    </section>
  </transition>
</template>

<script>
  export default {
    name: 'Catalogue',
    props: {
      isShow: Boolean,
      bookAvailable: Boolean,
      navigation: Object
    },
    methods: {
      jumpTo(link) {
        this.$emit('jumpTo', link)
      }
    }
  }
</script>

<style scoped lang="scss">
  .catalogue-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 102;
    width: 70%;
    height: 100%;
    background: #fff;
    box-shadow: px2rem(8) 0 px2rem(8) rgba(0, 0, 0, .4);
    .catalogue-content {
      width: 100%;
      height: 100%;
      overflow: auto;
      .catalogue-item {
        padding: px2rem(15) px2rem(20);
        border-bottom: px2rem(1) solid #f4f4f4;
        .text {
          font-size: px2rem(14);
          color: #333;
        }
      }
    }
    .loading {
      width: 100%;
      height: 100%;
      @include center;
      font-size: px2rem(16);
      color: #333;
    }
  }
</style>