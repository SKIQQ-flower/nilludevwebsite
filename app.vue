<template>
  <Link rel="preconnect" href="https://fonts.googleapis.com" />
  <Link rel="preconnect" href="https://fonts.gstatic.com" />
  <Link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet" />
  <NuxtPage/>
</template>

<style>
#__nuxt {
  @apply flex flex-col
}

@font-face {
  font-family: Daydream;
  src: url(Daydream.ttf);
}

@font-face {
  font-family: Minecraft;
  src: url(Minecraft.ttf);
}

.page-enter-active,
.page-leave-active {
  overflow: hidden;
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  overflow: hidden;
  transform: scale(0.8)
}

html {
  @apply w-dvw h-dvh;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url('/pattern.png');
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