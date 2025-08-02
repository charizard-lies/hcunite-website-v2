<script setup>
    import { onMounted } from 'vue'

    onMounted(() => {
    if (!document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
        const script = document.createElement('script')
        script.type = 'module'
        script.src = 'https://w.behold.so/widget.js'
        document.head.appendChild(script)
    }
    })
</script>

<template>
    <!-- hero section -->
     <section class="w-full h-screen flex flex-col">
            <!-- hero widget -->
             <div class="w-full h-full overflow-hidden relative">
                <router-link to="/Council52">
                    <img src="../assets/informal_council_pic.jpg" alt="background" class="z-0 absolute w-full h-full object-cover">

                    <h1 class="p-12 absolute bottom-0 z-20 text-white">HWA CHONG STUDENTS' COUNCIL</h1>
                </router-link>
             </div>
     </section>

    <!-- why were here section -->
    <section class="w-full">
        <div class="flex flex-row justify-center xl:justify-between xl:gap-10 w-full py-30 px-[10%] lg:px-0 lg:w-[60%] lg:max-w-[900px] m-auto">
            <!-- text div -->
            <div class="font-poppins text-center m-auto xl:mx-0 xl:text-left">
                <h2 class="m-auto">Why we're here:</h2>
                <p class=" text-md mt-6 lg:text-lg max-w-lg m-auto">
                    We are committed to building a united Hwa Chong family. 
                    <br>We are here for you, whenever and wherever you need it. 
                    <br><br>We are the Hwa Chong Students’ Council.
                </p>
            </div>
            <div>
                <img src="" alt="photo" class="hidden xl:block size-100 bg-red-50 rounded-xl">
            </div>
        </div>
    </section>

    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <!-- insta section -->
    <section class="w-full py-15 px-6 text-center sm:text-left">
        <div class="m-auto sm:max-w-[650px] flex flex-col sm:flex-row sm:justify-between  sm:items-end">
            <h3 class="mb-3"> Follow our Instagram!</h3>
            <h3 class="text-3xl font-poppins text-hwachred mb-3 bg-red-50 border-1 border-hwachred rounded-xl p-3">@HCUNITE</h3>
        </div>
        <behold-widget class="rounded-xl" feed-id="jc8RM2ufBxJ7fUp50RC9"></behold-widget>
     </section>
    
    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
    <!-- pubs note section -->
     <section class="w-full">
        <div class="w-full py-15 px-[10%] text-center lg:text-left lg:w-[60%] lg:px-0 lg:max-w-[900px] m-auto">
            <h2 class="">Publication and Publicity Committee’s Note:</h2>
            <p class="text-md mt-6 lg:text-lg">
                31st August 2024
                <br><br>Hello! Welcome to HCUnite.com! We'd like to thank you for taking the time to visit our Website! Hopefully you've found what you were looking for and that (HC)ULIKE our Website!
                <br><br>If you have any feedback with regard to HCUnite and any of our related initiatives, we would love to hear it. Please feel free to share your feedback with us in the form below:
            </p>
            <a class="text-white font-poppins text-md inline-block bg-black hover:bg-hwachred rounded-full p-6 mt-6 lg:text-lg transition-colors duration-300" href="https://docs.google.com/forms/d/e/1FAIpQLSdGMzgk4LTGrJUL52nhbXky8hGFeRRt1c9PfcAaEFKppeCexA/closedform" target="_blank">Feedback</a>
        </div>
        
    </section>
</template>

<!-- FUTURE UPDATES:
transitions (hero widgets, buttons, nav bar) -->

