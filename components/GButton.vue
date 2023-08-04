<style scoped>
.button {
  padding: 0.5rem 1rem;
  background-color: var(--secondary);
  color: var(--text-dark);
}
</style>

<script setup lang="ts">
import { ButtonTypes } from "../models";

interface Props {
  callBack: () => void;
  type?: ButtonTypes;
}

const props = withDefaults(defineProps<Props>(), {
  callBack: () => {},
  type: ButtonTypes.BUTTON,
});

const handleOnClick = () => {
  props.callBack();
};
</script>

<template>
  <button class="button" @click.prevent="handleOnClick" :type="type">
    <slot />
  </button>
</template>
