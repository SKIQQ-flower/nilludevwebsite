<template>
  <Link rel="preconnect" href="https://fonts.googleapis.com" />
  <Link rel="preconnect" href="https://fonts.gstatic.com" />
  <Link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet" />
  <NuxtPage />
</template>

<style>
#__nuxt {
  @apply flex flex-col
}

html {
  @apply w-dvw h-dvh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/pattern.png');
  animation: backgroundAnim 500s linear infinite;
}

@keyframes backgroundAnim {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 1000% 1000%;
  }
}
</style>