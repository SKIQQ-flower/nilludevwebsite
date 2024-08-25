<template>
    <div class="h-dvh w-dvw flex flex-col md:p-5 px-2 py-4">
        <h1 class="font-daydream w-full text-4xl text-white mb-6 text-center">NilluDev Website</h1>
        <div class="flex md:flex-row flex-col gap-5 justify-around w-full">
            <div class="flex flex-col items-center">
                <p class="npatch-angled w-full flex items-center justify-center gap-5 text-nowrap py-4 font-mc text-[#ffbfc6] text-xl px-9">
                    Nillu's Website Portal 
                    <button @click="portalVisible = !portalVisible" class="npatch-window w-10 flex items-center justify-center p-2">
                        <Icon name="mdi:minimize"/>
                    </button>
                </p>
                <div v-if="portalVisible" class="npatch-window flex-col flex -mt-[1.5 bg-[#2c1e31] w-full">
                    <div class="text-pink-500 w-full p-4 justify-center gap-2 relative flex items-center flex-col *:p-5 *:lg:rounded-none *:rounded-xl *:transition-colors lg:px-5 font-mc lg:text-4xl text-3xl">
                        <NuxtLink
                            to="/"
                            :class="{'active-link': $route.path === '/'}"
                            class="hover:bg-[#ec273f] text-nowrap w-full btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center">
                            About me
                        </NuxtLink>
                        <NuxtLink to="/arts" 
                            :class="{'active-link': $route.path === '/arts'}"
                            class="hover:bg-[#ec273f] text-nowrap w-full btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center">
                            Arts
                        </NuxtLink>
                        <button
                            :class="{'active-link': $route.path === '/blog'}"
                            class="hover:bg-[#ec273f] text-nowrap w-full btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center">
                            Blog
                        </button>
                        <NuxtLink
                            to="/facts"
                            :class="{'active-link': $route.path === '/facts'}"
                            class="hover:bg-[#ec273f] text-nowrap w-full btn-heart text-white/60 bg-[#6b2643] npatch-btn hover:text-white shadow hover:shadow-lg text-center">
                            Facts
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <NuxtPage />
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

<style>
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
