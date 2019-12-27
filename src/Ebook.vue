<template>
  <div>
    hahaha
  </div>
</template>

<script>
  import Epub from 'epubjs'
  const DOWNLOAD_URL = '/static/17G0.epub'

  export default {
    name: "Ebook",
    data() {
      return {
        book: null
      }
    },
    methods: {
      // 电子书的解析渲染
      showEpub() {
        // 生成ebook
        this.book = new Epub(DOWNLOAD_URL)
        console.log(this.book)
        // 生成Rendition
        // 通过Rendition.display渲染电子书
      }
    },
    mounted() {
      this.showEpub()
    }
  }
</script>

<style scoped lang="scss">

</style>