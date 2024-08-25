<template>
    <div>
        <ContentDoc class="w-1/3 flex" v-if="$route.params.id" :path="'/' + $route.params.id">
            <template v-slot="{ doc }">
                <div class="flex flex-col w-full items-center">
                    <p class="npatch-angled text-nowrap py-4 font-pixel text-[#ffbfc6] text-3xl px-9">
                        {{ doc.title }}
                    </p>
                    <div
                        class="npatch-window break-words whitespace-normal flex flex-row flex-wrap text-white relative bg-[#2c1e31] p-5 text-1xl">
                        <ContentRenderer :value="doc" />
                    </div>
                </div>
            </template>
            <template #not-found>
                <h1>Document not found</h1>
            </template>
        </ContentDoc>
        <ContentList v-else path="/">
            <template #default="{ list }">
                <NuxtLink v-for="article in list" :to="'/blog' + article._path"
                    class="npatch-window flex font-pixel md:flex-row flex-col text-white relative -mt-[1.5 bg-[#2c1e31] w-full p-2 text-1xl">
                    <p
                        class="size-[10rem] bg-[#ec273f] text-center flex h-fit flex-col text-[0.5rem] select-none items-center justify-center">
                        <Icon size="10rem" name="noto:rabbit" />
                    </p>
                    <div class="hover:bg-[#ec273f]/70 transition-colors p-2 w-full">
                        <p class="text-3xl">{{ article.title }}</p>
                        <p class="text-xl">{{ article.description }}</p>
                    </div>
                </NuxtLink>
            </template>
            <template #not-found>
                <p>No articles found.</p>
            </template>
        </ContentList>
    </div>
</template>

<style>
h1 {
    @apply text-5xl font-bold mb-4;
}

h2 {
    @apply text-4xl font-bold leading-8 mb-4;
}

h3 {
    @apply text-3xl font-bold leading-8 mb-4;
}

h4 {
    @apply text-2xl font-bold leading-8 mb-3;
}

h5 {
    @apply text-xl font-bold leading-8 mb-2;
}

h6 {
    @apply text-lg font-bold leading-8 mb-2;
}
</style>