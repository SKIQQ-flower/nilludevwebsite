<template>
    <div class="flex flex-col items-center md:w-3/6">
        <p class="npatch-angled text-nowrap w-full py-4 font-mc text-[#ffbfc6] text-3xl px-9">
            About me
        </p>
        <div
            class="npatch-window flex label-heart text-white relative -mt-[1.5] bg-[#2c1e31] w-full p-5 font-montserrat text-1xl">
            <div class="flex flex-col gap-2 items-center">
                <div class="flex md:flex-row flex-col npatch-window p-2 gap-2">
                    <img class="size-[10rem] npatch-window p-2" src="/pfp.png">
                    <div>
                        <h1 class="text-2xl font-mc">Hi, I'm NilluDev!</h1>
                        <p class="text-xl font-mc">
                            I'm a <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">Roblox developer</span> from <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">Brazil</span>. I also make <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">drawings</span>, <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">music</span>, and many things you can enjoy around with.
                        </p>
                    </div>
                </div>
                <div class="npatch-window w-full relative font-mc text-2xl flex items-center gap-2 p-2 justify-center flex-wrap">
                    <a href="https://www.roblox.com/pt/users/12984251/profile" class="hover:bg-[#ec273f] flex items-center gap-2 py-4 px-8 text-nowrap btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center">
                        <Icon size="2rem" name="pixelarticons:gamepad" />Roblox
                    </a>
                    <button @click="copyUsername" class="hover:bg-[#ec273f] flex items-center gap-2 py-4 px-8 text-nowrap btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center relative">
                        <Icon size="2rem" name="pixelarticons:chat" />Discord
                        <span v-if="showTooltip" class="tooltip">Username copied</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const copyUsername = () => {
    navigator.clipboard.writeText('@NilluDev').then(() => {
        showTooltip.value = true;
        setTimeout(() => {
            showTooltip.value = false;
        }, 2000);
    });
};
</script>

<style scoped>
.tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #2c1e31;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.875rem;
    white-space: nowrap;
    z-index: 10;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>
