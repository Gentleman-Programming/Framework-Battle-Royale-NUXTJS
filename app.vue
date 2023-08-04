<style>
:root {
  --primary: #b90063;
  --primary-light: #ffd9e2;
  --primary-dark: #3e001d;
  --secondary: #2856c9;
  --secondary-light: #dbe1ff;
  --secondary-dark: #00174d;
  --error: #ba1a1a;
  --background: #fffbff;
  --text-dark: #ffffff;
  --text-ligth: #000000;
}
</style>

<script setup>
import { useUserState } from "./shared-state";

const userState = useUserState();
</script>

<template>
  <Head>
    <Title>Nuxt Battle Royale</Title>
    <Meta name="description" content="Nuxt Battle Royale" />
  </Head>
  <div>
    <Topnav />
    {{ userState }}
  </div>
</template>
