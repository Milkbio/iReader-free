<template>
  <section class="setting-progress">
    <div class="progress-wrapper">
      <input type="range" class="progress" max="100" min="0" step="1" ref="progress"
            :value="progress"
            :disabled="!bookAvailable"
            @change="onProgressChange"
            @input="onProgressInput"/>
    </div>
    <div class="text-wrapper">
      {{bookAvailable ? progress + '%' : 'loading'}}
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SetProgress',
    props: {
      bookAvailable: Boolean
    },
    data() {
      return {
        progress: 0
      }
    },
    methods: {
      // 滑块拖动松开后触发
      onProgressChange(e) {
        this.$emit('onProgressChange', e.target.value)
      },
      // 滑块拖动时触发
      onProgressInput(e) {
        this.progress = e.target.value
        this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
      }
    }
  }
</script>

<style scoped lang="scss">
  .setting-progress {
    height: 100%;
  }
  .progress-wrapper {
    width: 100%;
    height: 100%;
    @include center;
    padding: 0 px2rem(30);
    box-sizing: border-box;
    .progress {
      -webkit-appearance: none;
      width: 100%;
      height: px2rem(2);
      background: -webkit-linear-gradient(#999, #999) no-repeat, #ddd;
      background-size: 0 100%;
      &:focus {
        outline: none;
      }
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: px2rem(20);
        width: px2rem(20);
        border-radius: 50%;
        background: white;
        box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, .2);
        border: px2rem(1) solid #ddd;
      }
    }
  }
  .text-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #333;
    font-size: px2rem(12);
  }
</style>