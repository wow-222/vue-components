<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'

const buttonRef = ref<InstanceType<typeof Button> | null>(null)
const model = defineModel({ default: ['a'] })

onMounted(() => {
  console.log(buttonRef.value?.ref)
})
</script>

<template>
  <Button type="w" ref="buttonRef"></Button>
  <Collapse v-model="model">
    <Item name="a">
      <template v-slot:title>
        <span>Title A</span>
      </template>
      <h1>headline title</h1>
      <div>this is content a aaa</div>
    </Item>
    <Item name="b" title="Title B">
      <div>this is bbbbb test</div>
    </Item>
    <Item name="c" title="Disabled Title" disabled>
      <div>this is cccc test</div>
    </Item>
  </Collapse>
  {{ model }}
</template>

<style scoped></style>
