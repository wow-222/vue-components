<script setup lang="ts">
import { ref } from 'vue'
import { ButtonProps } from './type'

defineProps<ButtonProps>()
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>

<template>
  <button ref="_ref">{{ type }}</button>
</template>

<style scoped></style>
