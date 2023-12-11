<script setup lang="ts">
import http from '@/apis'

const title = ref('标题')

function getTodoEvent(id: number) {
  http.getTodo(id).then((res) => {
    if (res.statusCode === 200)
      title.value = res.data.title
  })
}

onLoad(() => {
  getTodoEvent(1)
})
</script>

<template>
  <view class="content">
    <h1>{{ title }}</h1>
  </view>
</template>

<style lang="scss" scoped>
</style>
