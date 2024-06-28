<template>
    <div class="h-dvh absolute w-dvw flex flex-col items-center">
        <div
            class="md:-rotate-[45deg] md:w-[180vw] md:h-[170vw] md:rounded-none rounded-2xl fixed md:right-[15%] md:top-[70%] inline-flex md:justify-end justify-center bg-white">
            <div
                class="text-pink-500 p-4 h-fit w-92 gap-2 flex md:items-end items-center flex-col *:p-5 *:md:rounded-none *:rounded-xl *:transition-all md:px-5 md:pt-[15%] font-extrabold font-montserrat text-5xl">
                <button @mouseover="showTooltip('about')" @mouseout="hideTooltip" ref="aboutBtn"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">About
                    me</button>
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
                            class="fixed bottom-0 left-0 w-90 shadow-md p-5 bg-white rounded-md">
                            Just me
                        </p>
                        <p v-if="tooltip === 'social'" key="social"
                            class="fixed bottom-0 left-0 w-90 shadow-md p-5 bg-white rounded-md">
                            All of me
                        </p>
                        <p v-show="tooltip === 'blog'" key="blog"
                            class="fixed bottom-0 left-0 w-90 shadow-md p-5 bg-white rounded-md">
                            Me being me
                        </p>
                    </TransitionGroup>
                </div>

            <img class="fixed bottom-0 right-0 w-90 -z-10" src="/yotsuba.png">
        </div>
    </div>
</template>

<script>
import { ref, computed, nextTick } from 'vue';
export default {
    setup() {
        const tooltip = ref('');
        const tooltipStyles = ref({});
        const aboutBtn = ref(null);
        const socialBtn = ref(null);
        const blogBtn = ref(null);
        const showTooltip = async (type) => {
            tooltip.value = type;
        };
        const hideTooltip = () => {
            tooltip.value = '';
        };
        return {
            tooltip,
            tooltipStyles,
            aboutBtn,
            socialBtn,
            blogBtn,
            showTooltip,
            hideTooltip,
        };
    },
};
</script>

<style>
html {
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/pattern.png');
    animation: backgroundAnim 5s linear infinite;
}

@keyframes backgroundAnim {
    from {
        background-position: 0 0;
    }

    to {
        background-position: -100% -100%;
    }
}
</style>