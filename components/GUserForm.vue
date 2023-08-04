<style scoped>
.form {
  display: flex;
  flex-flow: row;
  gap: 1rem;
  align-items: center;
}
</style>

<script setup lang="ts">
import { ButtonTypes } from "../models";
import { emptyUserState, useDialogState, useUserState } from "../shared-state";

const dialogState = useDialogState();
const userState = useUserState();
const formState = ref(emptyUserState);

const handleInput = (e: any) => {
  const fieldName = e.target.name;
  const fieldValue = e.target.value;

  formState.value = {
    ...formState.value,
    [fieldName]: fieldValue,
  };
};

const submit = () => {
  userState.value = formState.value;
  dialogState.value = false;
};
</script>

<template>
  <form class="form">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" @change="handleInput" />
    <GButton :type="ButtonTypes.SUBMIT" :callBack="submit">Save</GButton>
  </form>
</template>
