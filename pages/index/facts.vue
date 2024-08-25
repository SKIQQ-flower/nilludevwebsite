<template>
    <div class="flex flex-col items-center w-full">
        <p class="npatch-angled text-nowrap w-full py-4 font-pixel text-[#ffbfc6] text-3xl px-9">
            Facts
        </p>
        <div
            class="npatch-window label-heart text-white relative -mt-[1.5 bg-[#2c1e31] w-full p-5 font-pixel text-2xl">
            <p>This website was made by my lovely boyfriend, and his source code can be found <a
                    class="hover:underline text-[#ec273f]"
                    href="https://github.com/SKIQQ-flower/nilludevwebsite">here</a>.</p>
            <hr class="my-2 border-[#ec273f] border-2">
            <p>In terms of male human and female Pokémon breeding, Vaporeon is the most compatible.</p>
            <hr class="my-2 border-[#ec273f] border-2">
            <p>Are you breathing right now.</p>
            <hr class="my-2 border-[#ec273f] border-2">
            <p>It's <span class="font-mono bg-[#ec273f]/50 p-2 rounded-md text-sm text-wrap w-fit">{{ dateAndTime }}</span> according to your computer.</p>
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