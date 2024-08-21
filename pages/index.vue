<template>
    <div
        class="h-dvh absolute w-dvw flex flex-col items-center justify-center">
        <img class="scale-x-[-1] xl:left-[30%] lg:right-[10%] fixed rotate-[45deg] xl:w-[50rem] lg:w-[40rem] w-[70rem] -z-10"
            src="/bunny.png">
        <div
            class="-rotate-[45deg] w-[180dvw] h-[190dvw] rounded-none fixed xl:right-[15%] xl:top-[70%] right-[12%] top-[40%] inline-flex justify-end bg-white">
            <div
            class="text-pink-500 p-4 lg:h-[40%] justify-center gap-2 flex items-end flex-col *:p-5 *:lg:rounded-none *:rounded-xl *:transition-colors lg:px-5 lg:pt-[15%] font-extrabold font-montserrat lg:text-4xl text-3xl">
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