<script></script>

<template>
    <!-- hero section -->
    <section class="flex flex-col gap-12 p-12">
        <div class="mt-18">
            <h1 class="text-5xl md:text-7xl lg:text-9xl font-black font-inter">FACULTIES</h1>
            <p class="font-poppins text-xs md:text-base">Click on the different logos to learn more about the faculty!</p>
        </div>
        <div class="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-12 lg:gap-3">
            <div class="rounded-xl pb-3 shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="/apollo">
                    <img class=" aspect-square object-cover" src="../assets/informal_council_pic.jpg" alt="">
                </router-link>
                <h2 class="ml-3 mt-3 font-poppins text-xl">Apollo</h2>
            </div>
            <div class="rounded-xl pb-3 shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="\Apollo">
                    <img class=" aspect-square object-cover" src="../assets/informal_council_pic.jpg" alt="">
                </router-link>
                <h2 class="ml-3 mt-3 font-poppins text-xl">Ares</h2>
            </div>
            <div class="rounded-xl pb-3 shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="\Apollo">
                    <img class=" aspect-square object-cover" src="../assets/informal_council_pic.jpg" alt="">
                </router-link>
                <h2 class="ml-3 mt-3 font-poppins text-xl">Artemis</h2>
            </div>
            <div class="rounded-xl pb-3 shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="\Apollo">
                    <img class=" aspect-square object-cover" src="../assets/informal_council_pic.jpg" alt="">
                </router-link>
                <h2 class="ml-3 mt-3 font-poppins text-xl">Athena</h2>
            </div>
        </div>
        
    </section>

    <section class="w-full">
        <div class="w-full py-15 px-[10%] lg:px-0 lg:w-[60%] lg:max-w-[900px] m-auto text-justify font-poppins font-normal">
            <h2 class="text-4xl lg:text-6xl">Address by SnR Chairperson</h2>
            <p class="text-xs mt-6 lg:text-base">
                yap yap yap
                <br><br>Teo Jie Jun Jayden
                <br><br>Social and Relations Committee Chairperson
                <br><br>52nd Hwa Chong Students’ Council
            </p>
        </div>
    </section>
</template>