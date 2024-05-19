<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import Dropdown from './components/Dropdown/Dropdown'
import { MenuOption } from './components/Dropdown/types'

const buttonRef = ref<InstanceType<typeof Button> | null>(null)
const dropdownRef = ref<Record<'showToolTip' | 'hideToolTip', () => void> | null>(null)
const model = defineModel({ default: ['a'] })
const options: MenuOption[] = [
  { key: 1, label: '2' },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]

const inlineConsole = (...args: any) => {
  console.log(...args)
}

const open = () => {
  dropdownRef.value?.showToolTip()
}

onMounted(() => {
  console.log(buttonRef.value?.ref)
})
</script>

<template>
  <Dropdown
    trigger="click"
    :menuOptions="options"
    ref="dropdownRef"
    @visible-change="e => inlineConsole('visible change', e)"
    @select="e => inlineConsole('select', e)"
  >
    <img alt="Vue logo" class="logo" src="./assets/vue.svg" width="125" height="125" />
  </Dropdown>
  <Tooltip content="2222"><Button type="wuttt" ref="buttonRef" @click="open"></Button></Tooltip>
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
</template>

<style scoped></style>
