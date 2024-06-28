<template>
    <div class="h-dvh absolute flex flex-col items-center">
        <div class="-rotate-[46deg] absolute w-[50rem] h-[90rem] -top-[4rem] pt-5 pl-10 -left-[3rem] inline-flex justify-end bg-white">
            <div
                class="text-pink-500 h-fit w-92 gap-2 flex items-end flex-col *:p-5 *:transition-all px-5 py-40 font-extrabold font-montserrat text-5xl">
                <button ref="aboutBtn" @mouseover="showTooltip('about')" @mouseout="hideTooltip"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">About
                    me</button>
                <button ref="socialBtn" @mouseover="showTooltip('social')" @mouseout="hideTooltip"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">Social
                    Media</button>
                <button ref="blogBtn" @mouseover="showTooltip('blog')" @mouseout="hideTooltip"
                    class="hover:bg-pink-500 hover:text-white uppercase shadow hover:shadow-lg active:translate-x-5 active:-translate-y-5">Blog</button>
            </div>
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
            await nextTick(); // Espera a DOM atualizar
            const btn = type === 'about' ? aboutBtn.value : type === 'social' ? socialBtn.value : blogBtn.value;
            const rect = btn.getBoundingClientRect();
            tooltipStyles.value = {
                top: `${rect.top + window.scrollY + btn.offsetHeight / 9}px`,
                left: `${rect.left + window.scrollX + btn.offsetWidth + 1000}px`,
            };
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