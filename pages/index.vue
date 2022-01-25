<template>
  <canvas id="hero-lightpass" />
</template>

<script>
export default {
  data() {
    return {
      images: {},
    }
  },
  mounted() {
    const html = document.documentElement
    const canvas = document.getElementById('hero-lightpass')
    const context = canvas.getContext('2d')

    const frameCount = 466
    const currentFrame = (index) =>
      `/platform-360/Video-01_${index.toString().padStart(5, '0')}.jpg`

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image()
        img.src = currentFrame(i)
        this.images[i] = img
      }
    }

    const img = new Image()
    img.src = currentFrame(1)
    canvas.width = 1920
    canvas.height = 1200
    img.onload = function () {
      context.drawImage(img, 0, 0)
    }

    const updateImage = (index) => {
      // const cof = `1.${index}`

      // console.log(index, this.images[index])
      context.drawImage(this.images[index], 1, 1)
      // const scale = Math.min(
      //   canvas.width / this.images[index].width,
      //   canvas.height / this.images[index].height
      // )
      // console.log(cof)
      // const w = this.images[index].width * scale * parseFloat(cof)
      // const h = this.images[index].height * scale * parseFloat(cof)
      // console.log(w, h)
    }

    window.addEventListener('scroll', () => {
      const scrollTop = html.scrollTop
      const maxScrollTop = html.scrollHeight - window.innerHeight
      const scrollFraction = scrollTop / maxScrollTop
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      )
      console.log(scrollFraction)

      requestAnimationFrame(() => updateImage(frameIndex + 1))
    })
    preloadImages()
  },
}
</script>

<style>
html {
  height: 100vh;
  scroll-behavior: smooth;
}

body {
  height: 1800vh;
  background: #333333;
  scroll-behavior: smooth;
}

canvas {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 100vh;
}
</style>
