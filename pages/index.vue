<template>
    <div class="h-dvh absolute flex flex-col items-center">
        <div class="-rotate-[45deg] w-[180%] h-[170%] fixed right-[40%] -bottom-[160%] inline-flex justify-end bg-white">
            <div
                class="text-pink-500 h-fit w-92 gap-2 flex items-end flex-col *:p-5 *:transition-all px-5 pt-[15%] font-extrabold font-montserrat text-5xl">
                <button ref="aboutBtn"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">About
                    me</button>
                <button ref="socialBtn"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">Social
                    Media</button>
                <button ref="blogBtn"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">Blog</button>
            </div>
        </div>
    </div>
</template>

<style>
html {
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/pattern.png');
    animation: backgroundAnim 5s infinite;
}

@keyframes backgroundAnim {
    from {
            background-position: 0 0;
    }
    to {
            background-position: 100% 100%;
    }
}
</style>