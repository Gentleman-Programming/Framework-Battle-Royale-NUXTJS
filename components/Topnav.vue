<style scoped>
.toolbar-container {
  display: flex;
  gap: 1rem;
  background-color: var(--primary);
  color: var(--text-dark);
  padding: 1rem;
  max-height: 54px;
  align-items: center;
  justify-content: space-between;
}
</style>

<script setup lang="ts">
import { useDialogState } from "../shared-state";

const dialogState = useDialogState();

const openDialog = () => {
  dialogState.value = true;
};
</script>

<template>
  <div class="toolbar-container">
    <p>Framework Battle Royale: <strong>Nuxt</strong></p>
    <GButton :callBack="openDialog">Open Dialog</GButton>
  </div>
  <GDialog>
    <GUserForm />
  </GDialog>
</template>
