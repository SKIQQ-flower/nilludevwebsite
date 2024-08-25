<template>
  <Link rel="preconnect" href="https://fonts.googleapis.com" />
  <Link rel="preconnect" href="https://fonts.gstatic.com" />
  <Link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet">
    <NuxtPage/>
  </template>

<style>
@font-face {
  font-family: Daydream;
  src: url("/Daydream.ttf");
}

#__nuxt {
  @apply flex flex-col
}


.npatch-window {
    border-image: url("/npatch window.png") 2 fill repeat;
    image-rendering: pixelated;
    border-image-width: 9px;
}

.active-link {
    background-color: #ec273f;
    color: white;
}


.label-heart::after {
    content: "";
    width: 30px;
    height: 30px;
    background: url("/heart.png");
    background-repeat: no-repeat;
    background-size: 30px;
    right: 5px;
    position: absolute;
    display: inline-block;
}

.btn-heart {
    position: relative;
}

.label-heart::before {
    content: "";
    width: 30px;
    height: 30px;
    background: url("/heart.png");
    background-repeat: no-repeat;
    background-size: 30px;
    left: -10px;
    position: absolute;
    display: inline-block;
}

.btn-heart:hover:after {
    content: "";
    width: 30px;
    height: 30px;
    background: url("/heart.png");
    background-repeat: no-repeat;
    background-size: 30px;
    left: -10px;
    position: absolute;
    display: inline-block;
    animation: initOpacity 100ms
}

@keyframes initOpacity {
    from {
        opacity: 0;
        background-size: 20px;
    }
    to {
        background-size: 30px;
        opacity: 1;
    }
}

.btn-heart:hover:before {
    content: "";
    width: 30px;
    height: 30px;
    background: url("/heart.png");
    background-repeat: no-repeat;
    background-size: 30px;
    right: -10px;
    position: absolute;
    display: inline-block;
    animation: initOpacity 100ms
}

.npatch-btn {
    border-image: url("/npatch btn.png") 2 fill repeat;
    image-rendering: pixelated;
    border-image-width: 9px;
}

.npatch-angled {
    border-image: url("/angled header.png") 4 5 fill repeat;
    image-rendering: pixelated;
    border-image-width: 30px;
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