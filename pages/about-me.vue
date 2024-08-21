<template>
    <div class="w-dvw h-dvh flex flex-col items-center justify-center">
        <div class="bg-white outline-2 rounded-t-xl rounded-b-md outline outline-[#FF0050] md:w-[50%] w-[80%]">
            <div class="w-full bg-[#FF0050] text-white justify-between font-bold flex p-1.5 rounded-t-xl">
                <div>About me</div>
                <div>
                    <NuxtLink to="/">
                        <button class="bg-white w-5 h-5 flex items-center justify-center rounded-md text-[#FF0050]"><Icon name="mdi:close"/></button>
                    </NuxtLink>
                </div>
            </div>
            <div class="gap-5 p-5 flex window-body flex-col items-center md:flex-row">
                <img class="w-56 rounded-sm border border-[#FF0050]" src="/pfp.png">
                <div class="w-fit text-lg">
                    <h1 class="text-xl font-mono font-bold">Hi, I'm NilluDev!</h1>
                    <p class="text-sm font-mono">I'm a <span
                            class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">Roblox developer</span> from
                        <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">Brazil</span>. I also make
                        <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">drawings</span>, <span class="text-[#FF0050] hover:bg-[#FF0050] hover:text-white">music</span>, and many things you can enjoy around with.
                    </p>
                    <img src="" />
                </div>
            </div>
        </div>
    </div>
</template>