<template>
    <Link rel="stylesheet" href="https://unpkg.com/98.css" />
    <div class="w-dvw h-dvh no-tailwind flex flex-col items-center justify-center">
        <div class="window w-[50%]" >
            <div class="title-bar">
                <div class="title-bar-text">About me</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="gap-5 flex window-body flex-row">
                <img class="w-56" src="/pfp.png">
                <div class="w-fit">
                    <h1 class="text-xl">Hi, im NilluDev!</h1>
                </div>
            </div>
        </div>
    </div>
</template>