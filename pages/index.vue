<template>
    <div
        class="h-dvh w-dvw flex flex-col p-5">
        <h1 class="font-daydream w-full text-4xl text-white mb-6 text-center">NilluDev Website</h1>
        <div class="flex flex-row gap-5 justify-around w-full">
            <div class="flex flex-col items-center">
                <p class="npatch-angled w-full text-nowrap py-4 font-mc text-[#ffbfc6] text-3xl px-9">
                    Nillu's Website Portal
                </p>
                <div class="npatch-window flex-col flex -mt-[1.5 bg-[#2c1e31] w-full">
                    <div
                    class="text-pink-500 w-full p-4 justify-center gap-2 relative flex items-center flex-col *:p-5 *:lg:rounded-none *:rounded-xl *:transition-colors lg:px-5 font-mc lg:text-4xl text-3xl">
                        <NuxtLink to="/about-me" ref="aboutBtn"
                            class="hover:bg-[#ec273f] text-nowrap w-full btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center active:translate-x-5 active:-translate-y-5">About
                            me</NuxtLink>
                        <button ref="socialBtn"
                            class="hover:bg-[#ec273f] text-nowrap w-full btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center active:translate-x-5 active:-translate-y-5">Social
                            Media</button>
                        <button ref="blogBtn"
                            class="hover:bg-[#ec273f] text-nowrap w-full btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center active:translate-x-5 active:-translate-y-5">Blog</button>
                        </div>
                    </div>
            </div>
            <div class="flex flex-col items-center md:w-3/6">
                <p class="npatch-angled text-nowrap w-full py-4 font-mc text-[#ffbfc6] text-3xl px-9">
                    Facts
                </p>
                <div class="npatch-window label-heart text-white relative -mt-[1.5 bg-[#2c1e31] w-full p-5 font-montserrat font-bold text-1xl">
                    <p>This website was made by my lovely boyfriend, and his source code can be found <a class="hover:underline text-[#ec273f]" href="https://github.com/SKIQQ-flower/nilludevwebsite">here</a>.</p>
                    <hr class="my-2 border-[#ec273f] border-2">
                    <p>In terms of male human and female Pokémon breeding, Vaporeon is the most compatible.</p>
                    <hr class="my-2 border-[#ec273f] border-2">
                    <p>Are you breathing right now.</p>
                    <hr class="my-2 border-[#ec273f] border-2">
                    <p>It's {{ dateAndTime }} according to your computer.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const dateAndTime = ref(Date().toString())
const updateTime = () => {
    dateAndTime.value = Date().toString()
}

let intervalId
onMounted(() => {
    intervalId = setInterval(updateTime, 1000)
})

onBeforeUnmount(() => {
    clearInterval(intervalId)
})
</script>

<style>
.npatch-window {
    border-image: url("/npatch window.png") 2 fill repeat;
    image-rendering: pixelated;
    border-image-width: 9px;
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

.label-heart::before {
    content: "";
    width: 30px;
    height: 30px;
    background: url("/heart.png");
    background-repeat: no-repeat;
    background-size: 30px;
    left: -15px;
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
</style>
