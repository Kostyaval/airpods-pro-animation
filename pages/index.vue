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

    const frameCount = 179
    const currentFrame = (index) =>
      `/Broxbe_responcive/Broxbe_responcive_${index
        .toString()
        .padStart(5, '0')}.jpg`

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image()
        img.src = currentFrame(i)
        this.images[i] = img
      }
    }

    const img = new Image()
    img.src = currentFrame(1)
    canvas.width = 1440
    canvas.height = 900
    img.onload = function () {
      context.drawImage(img, 0, 0)
    }

    const updateImage = (index) => {
      console.log(index, this.images[index])
      context.drawImage(this.images[index], 0, 0)
    }

    window.addEventListener('scroll', () => {
      const scrollTop = html.scrollTop
      const maxScrollTop = html.scrollHeight - window.innerHeight
      const scrollFraction = scrollTop / maxScrollTop
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      )

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
  height: 600vh;
  background: #fff;
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
