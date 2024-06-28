<template>
    <div
        class="h-dvh absolute w-dvw flex flex-col items-center justify-center shadow-pink-500 shadow-lg transition-all">
        <img class="xl:top-[35%] xl:left-[30%] lg:top-[20%] lg:right-[10%] top-[10%] fixed lg:rotate-[45deg] xl:w-[50rem] lg:w-[30rem] w-52 -z-10"
            src="/yotsuba.png">
        <div
            class="lg:-rotate-[45deg] lg:w-[180vw] lg:h-[170vw] lg:rounded-none rounded-2xl fixed xl:right-[15%] xl:top-[70%] lg:right-[0%] lg:top-[40%] inline-flex lg:justify-end justify-center bg-white">
            <div
                class="text-pink-500 p-4 h-fit w-92 gap-2 flex lg:items-end items-center flex-col *:p-5 *:lg:rounded-none *:rounded-xl *:transition-all lg:px-5 lg:pt-[15%] font-extrabold font-montserrat text-5xl">
                <NuxtLink to="/about" @mouseover="showTooltip('about')" @mouseout="hideTooltip" ref="aboutBtn"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">About
                    me</NuxtLink>
                <button @mouseover="showTooltip('social')" @mouseout="hideTooltip" ref="socialBtn"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">Social
                    Media</button>
                <button @mouseover="showTooltip('blog')" @mouseout="hideTooltip" ref="blogBtn"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">Blog</button>
            </div>
        </div>
        <div class="text-pink-500 text-4xl font-montserrat font-extrabold">
            <div>
                <TransitionGroup tag="div" enter-active-class="transition duration-200 ease-out"
                    leave-active-class="transition duration-200 ease-out"
                    enter-from-class="opacity-0 transform translate-x-[-50px]"
                    enter-to-class="opacity-100 transform translate-x-0"
                    leave-from-class="opacity-100 transform translate-x-0"
                    leave-to-class="opacity-0 transform translate-x-[-50px]">
                    <p v-show="tooltip === 'about'" key="about"
                        class="fixed bottom-0 left-0 w-90 shadow-lg p-5 bg-white rounded-lg">
                        Just me
                    </p>
                    <p v-if="tooltip === 'social'" key="social"
                        class="fixed bottom-0 left-0 w-90 shadow-lg p-5 bg-white rounded-lg">
                        All of me
                    </p>
                    <p v-show="tooltip === 'blog'" key="blog"
                        class="fixed bottom-0 left-0 w-90 shadow-lg p-5 bg-white rounded-lg">
                        Me being me
                    </p>
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>

<script>
const tooltip = ref('');
const showTooltip = async (type) => {
    tooltip.value = type;
};
const hideTooltip = () => {
    tooltip.value = '';
};
</script>