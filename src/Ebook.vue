<template>
  <section class="ebook">
    <title-bar :isShow="isShowTools"></title-bar>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="middle" @click="toggleShowTools"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <menu-bar
      :isShowMenu="isShowTools"
      :themeList="themeList"
      :defaultTheme="defaultTheme"
      :bookAvailable="bookAvailable"
      @setTheme="setTheme"
      @setFontSize="setFontSize"
      @onProgressChange="onProgressChange"
      @handleShowCatalogue="handleShowCatalogue"/>
    <catalogue
      :isShow="isShowCatalogue"
      :navigation="navigation"
      :bookAvailable="bookAvailable"
      @jumpTo="jumpTo"/>
    <transition name="fade">
      <div class="catalogue-mask"
           v-show="isShowCatalogue"
           @click="handleHideCatalogue"></div>
    </transition>
  </section>
</template>

<script>
  import Epub from 'epubjs'
  import MenuBar from '@/components/MenuBar'
  import TitleBar from '@/components/TitleBar'
  import Catalogue from '@/components/Catalogue'
  const DOWNLOAD_URL = '/static/17G0.epub'

  export default {
    name: 'Ebook',
    components: {
      MenuBar, TitleBar, Catalogue
    },
    data() {
      return {
        book: null,
        rendition: null,
        themes: null,
        locations: null,
        navigation: null,
        isShowTools: false,
        isShowCatalogue: false,
        themeList: [
          {
            name: 'default',
            style: {
              body: {color: '#000', background: '#fff'}
            }
          },
          {
            name: 'eye',
            style: {
              body: {color: '#000', background: '#ceeaba'}
            }
          },
          {
            name: 'night',
            style: {
              body: {color: '#fff', background: '#000'}
            }
          },
          {
            name: 'gold',
            style: {
              body: {color: '#000', background: 'rgb(241, 236, 226)'}
            }
          }
        ],
        defaultTheme: 0,
        // 读书是否处于可用状态
        bookAvailable: false
      }
    },
    methods: {
      // 电子书的解析渲染
      showEpub() {
        // 生成ebook
        this.book = new Epub(DOWNLOAD_URL)
        // console.log(this.book)
        // 生成Rendition
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight
        })
        // 通过Rendition.display渲染电子书
        this.rendition.display()
        // 获取theme对象
        this.themes = this.rendition.themes
        this.setFontSize(16)
        // 注册主题
        this.registerTheme()
        this.setTheme(this.defaultTheme)
        // 获取location, navigation对象,通过epubjs钩子函数实现
        this.book.ready.then(() => {
          return this.book.locations.generate()
        }).then(() => {
          this.locations = this.book.locations
          this.navigation = this.book.navigation
          this.bookAvailable = true
        })
      },
      // 上一页
      prevPage() {
        this.rendition && this.rendition.prev()
      },
      // 下一页
      nextPage() {
        this.rendition && this.rendition.next()
      },
      // 设置字体大小
      setFontSize(size) {
        this.themes && this.themes.fontSize(size + 'px')
      },
      // 注册主题
      registerTheme() {
        this.themeList.forEach(theme => {
          this.themes.register(theme.name, theme.style)
        })
      },
      // 设置主题
      setTheme(index) {
        this.themes.select(this.themeList[index].name)
        this.defaultTheme = index
      },
      // progress进度条的数值（0-100）
      onProgressChange(progress) {
        const percentage = progress / 100
        const location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
        this.rendition.display(location)
      },
      // 根据链接跳转指定位置
      jumpTo(link) {
        this.rendition.display(link)
        this.handleHideCatalogue()
      },
      // 点击中间切换上下工具栏显示隐藏
      toggleShowTools() {
        this.isShowTools = !this.isShowTools
      },
      // 隐藏上下工具栏
      // 点击目录icon隐藏上下工具栏，显示目录
      // 点击目录隐藏目录
      // 点击目录遮罩隐藏目录
      handleHideTools() {
        this.isShowTools = false
      },
      // 显示目录
      handleShowCatalogue() {
        this.handleHideTools()
        this.isShowCatalogue = true
      },
      // 隐藏目录
      handleHideCatalogue() {
        this.isShowCatalogue = false
      }
    },
    mounted() {
      this.showEpub()
    }
  }
</script>

<style scoped lang="scss">
  .ebook {
    position: relative;
    background: #FFFFCC;
    .read-wrapper {
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        display: flex;
        .left {
          flex: 0 0 px2rem(100);
          /*background: rgba(230, 242, 194, .7);*/
        }
        .middle {
          flex: 1;
          /*background: rgba(207, 224, 125, .7);*/
        }
        .right {
          flex: 0 0 px2rem(100);
          /*background: rgba(117, 157, 147, .7);*/
        }
      }
    }
    .catalogue-mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 101;
      width: 100%;
      height: 100%;
      background: rgba(1, 1, 1, .7);
    }
  }
</style>