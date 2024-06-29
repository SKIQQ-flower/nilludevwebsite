<template>
    <div class="w-dvw h-dvh no-tailwind flex flex-col items-center justify-center">
        <div class="window w-[50%]">
            <div class="title-bar">
                <div class="title-bar-text">About me</div>
                <div class="title-bar-controls">
                    <NuxtLink to="/">
                        <button aria-label="Close"></button>
                    </NuxtLink>
                </div>
            </div>
            <div class="gap-5 flex window-body flex-row">
                <img class="w-56 rounded-sm border border-[#FF0050]" src="/pfp.png">
                <div class="w-fit text-lg">
                    <h1 class="text-xl font-mono font-bold">Hi, I'm NilluDev!</h1>
                    <p class="text-sm font-mono">I'm a <span
                            class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">Roblox</span> developer from
                        <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">Brazil</span>. I also make
                        drawings, music, and many things you can enjoy around with.
                    </p>
                    <img src="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/xp.css' }
    ]
})
</script>