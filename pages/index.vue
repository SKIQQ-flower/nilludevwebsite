<template>
    <div class="h-dvh w-dvw flex flex-col md:p-5 px-2 py-4">
        <h1 class="font-daydream w-full text-4xl text-white mb-6 text-center">NilluDev Website</h1>
        <div class="flex md:flex-row flex-col gap-5 justify-around w-full">
            <div class="flex flex-col items-center">
                <p class="npatch-angled w-full flex items-center justify-center gap-5 text-nowrap py-4 font-pixel text-[#ffbfc6] text-xl px-9">
                    Nillu's Website Portal 
                    <button @click="portalVisible = !portalVisible" class="npatch-window w-10 flex items-center justify-center p-2">
                        <Icon name="mdi:minimize"/>
                    </button>
                </p>
                <div v-if="portalVisible" class="npatch-window flex-col flex -mt-[1.5 bg-[#2c1e31] w-full">
                    <div class="text-pink-500 w-full p-4 justify-center gap-2 relative flex items-center flex-col *:p-5 *:lg:rounded-none *:rounded-xl *:transition-colors lg:px-5 font-pixel lg:text-4xl text-3xl">
                        <NuxtLink
                            to="/"
                            :class="{'active-link': $route.path === '/'}"
                            class="hover:bg-[#ec273f]/60 flex flex-row items-center justify-center text-nowrap w-full btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center">
                            <Icon size="2rem" name="pixelarticons:info-box"/> About me
                        </NuxtLink>
                        <NuxtLink to="/arts" 
                            :class="{'active-link': $route.path === '/arts'}"
                            class="hover:bg-[#ec273f]/60 flex flex-row items-center justify-center text-nowrap w-full btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center">
                            <Icon size="2rem" name="pixelarticons:paint-bucket"/> Arts
                        </NuxtLink>
                        <NuxtLink
                            to="/blog"
                            :class="{'active-link': $route.path === '/blog'}"
                            class="hover:bg-[#ec273f]/60 flex flex-row items-center justify-center text-nowrap w-full btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center">
                            <Icon size="2rem" name="pixelarticons:paperclip"/> Blog
                        </NuxtLink>
                        <NuxtLink
                            to="/facts"
                            :class="{'active-link': $route.path === '/facts'}"
                            class="hover:bg-[#ec273f]/60 flex flex-row items-center justify-center text-nowrap w-full btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center">
                            <Icon size="2rem" name="pixelarticons:book"/> Facts
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <NuxtPage class="w-full" />
        </div>
    </div>
</template>

<script setup>
const portalVisible = ref(true);
const isMediumOrLarger = useMediaQuery('(min-width: 768px)');

const togglePortal = () => {
    portalVisible.value = !portalVisible.value;
};

watch(isMediumOrLarger, (newVal) => {
    if (newVal) {
        portalVisible.value = true;
    } else {
        portalVisible.value = false;
    }
});
</script>