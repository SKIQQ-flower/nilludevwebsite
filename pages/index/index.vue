<template>
    <div class="flex flex-col items-center md:w-3/6">
        <p class="npatch-angled text-nowrap w-full py-4 font-mc text-[#ffbfc6] text-3xl px-9">
            About me
        </p>
        <div
            class="npatch-window label-heart text-white relative -mt-[1.5 bg-[#2c1e31] w-full p-5 font-montserrat text-1xl">
            <div class="w-fit text-2xl"><h1 class="text-md font-mc">Hi, I'm NilluDev!</h1><p class="text-xl font-mc">I'm a <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">Roblox developer</span> from <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">Brazil</span>. I also make <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">drawings</span>, <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">music</span>, and many things you can enjoy around with. </p><img src=""></div>
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