<template>
    <div
        class="h-dvh absolute w-dvw flex flex-col items-center justify-center">
        <img class="xl:top-[35%] xl:left-[30%] lg:top-[20%] lg:right-[10%] top-[10%] fixed lg:rotate-[45deg] xl:w-[50rem] lg:w-[30rem] w-52 -z-10"
            src="/bunny.png">
        <div
            class="lg:-rotate-[45deg] lg:w-[180vw] lg:h-[170vw] lg:rounded-none rounded-2xl fixed xl:right-[15%] xl:top-[70%] lg:right-[10%] lg:top-[40%] inline-flex lg:justify-end justify-center bg-white">
            <div
            class="text-pink-500 p-4 h-[40%] justify-center gap-2 flex lg:items-end items-center flex-col *:p-5 *:lg:rounded-none *:rounded-xl *:transition-colors lg:px-5 lg:pt-[15%] font-extrabold font-montserrat md:text-5xl">
                <NuxtLink to="/about-me" ref="aboutBtn"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">About
                    me</NuxtLink>
                <button ref="socialBtn"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">Social
                    Media</button>
                <button ref="blogBtn"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">Blog</button>
            </div>
        </div>
    </div>
</template>