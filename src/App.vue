<script setup lang="ts">
import { useCheckUpdate } from '@hugh-ma/vueuse'

const { checkUpdate } = useCheckUpdate()

onLaunch(() => {
  console.log('App Launch')
})

onShow(() => {
  console.log('App Show')
  checkUpdate()
})

onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
/* 基本样式初始化 */
image {
  display: block;
}

view {
  box-sizing: border-box;
}

button.clear {
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  outline: none;

  &::after {
    display: none;
  }
}

page {
  background-color: $uni-bg-color-grey;
}
</style>
