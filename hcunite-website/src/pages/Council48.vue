<script setup>
import CouncilCard from '../components/CouncilCard.vue';
</script>

<template>

<!-- hero section -->
    <section class="mt-30 pb-12">
        <h1 class="z-20 text-black lg:text-8xl w-full text-center">48TH STUDENTS' COUNCIL</h1>
    </section>
    
    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <section class="py-12 px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden font-poppins font-normal hover:scale-105 hover:shadow-lg transition-scale duration-500">
                    <img class="w-full grow object-cover rounded-xl" src="../assets/informal_council_pic.jpg" alt="">
                    <h2 class="ml-6 font-semibold">EXCO</h2>
                    <button @click="$refs.nse.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:py-3 sm:max-w-[50%] md:max-w-[30%] lg:text-sm sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden font-poppins font-normal hover:scale-105 hover:shadow-lg transition-scale duration-500">
                    <img class="w-full grow object-cover rounded-xl" src="../assets/informal_council_pic.jpg" alt="">
                    <h2 class="ml-6 font-semibold">ECACO</h2>
                    <button @click="$refs.ecaco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden font-poppins font-normal hover:scale-105 hover:shadow-lg transition-scale duration-500">
                    <img class="w-full grow object-cover rounded-xl" src="../assets/informal_council_pic.jpg" alt="">
                    <h2 class="ml-6 font-semibold">PUBCO</h2>
                    <button @click="$refs.pubco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden font-poppins font-normal hover:scale-105 hover:shadow-lg transition-scale duration-500">
                    <img class="w-full grow object-cover rounded-xl" src="../assets/informal_council_pic.jpg" alt="">
                    <h2 class="ml-6 font-semibold">SECCO</h2>
                    <button @click="$refs.secco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden font-poppins font-normal hover:scale-105 hover:shadow-lg transition-scale duration-500">
                    <img class="w-full grow object-cover rounded-xl" src="../assets/informal_council_pic.jpg" alt="">
                    <h2 class="ml-6 font-semibold">SNR</h2>
                    <button @click="$refs.snr.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden font-poppins font-normal hover:scale-105 hover:shadow-lg transition-scale duration-500">
                    <img class="w-full grow object-cover rounded-xl" src="../assets/informal_council_pic.jpg" alt="">
                    <h2 class="ml-6 font-semibold">WELCO</h2>
                    <button @click="$refs.welco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
        </div>
    </section>

    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <!-- exco -->
    <section ref="nse" class="pb-12 px-3">
        <h1 class="text-center py-12">
            EXCO
        </h1>
        <div class="w-full relative">
            <img src="../assets/48th_done_54/48th_ExCo.png" alt="background" class="z-0 w-full max-w-[900px] m-auto object-center object-contain">
        </div>
        <div class="p-6">
            <p class="centered-text-block">
                (FROM LEFT TO RIGHT)
                <br><br>First row:
                <br><br>Toh En Yu Dylan; Evelyne Chua; Javen Justin Suki; Nicole Naomi Tan; Tan Yan Zhong
                <br><br>Second Row:
                <br><br>Janice Goh Jia Li; David Wang Jia Bao; Tang Teen Chih Luke; Nicale Yee
                <br><br>Teacher Advisors:
                <br><br>Ms Su Yin Germaine Tan; Mr Benjamin Goh; Mr Kor Zhi Yang; Dr Sin Yee Theng; Ms Ying Min
            </p>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <CouncilCard name="Anya Wong Ann Ya" council="EcaCo" year="51st" position="ecaco guy" description="blah blah"></CouncilCard>
            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <h4 class="text-lg sm:text-xl">hii</h4>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>
            
        </div>
    </section>

    <!-- ecaco -->
    <section ref="ecaco" class="pb-12 px-3">
        <div class="aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="../assets/informal_council_pic.jpg" alt="background" class="w-full h-full z-0 object-cover">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.3em] text-2xl/10 sm:text-5xl/18 lg:tracking-[0.4em] lg:text-8xl/25">
                THE EXTENDED-<br>
                COUNCIL<br>
                ATTACHE<br>
                COMMITTEE<br>
                (ECACO)
            </h1>
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                The Extended Council Attaché Committee comprises the Councillors who serve as Presidents and Vice-Presidents 
                to the Values-In-Action Council, Green Council and Students' National Education Council. 
                Each of these Presidents and Vice Presidents will serve in both the Students' Council and their 
                Extended Councils, acting as a bridge to promote better communication between leadership bodies. 
                In doing so, they work to build meaningful collaborations that will create a 
                holistic experience for the student body.
            </p>
        </div>

        <div class="px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>
            
        </div>
    </section>

    <!-- pubco -->
    <section ref="pubco" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="../assets/informal_council_pic.jpg" alt="background" class="w-full h-full z-0 object-cover">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.4em] text-2xl/10 sm:text-5xl/18 lg:tracking-[0.2em] lg:text-8xl/25">
                THE PUBLICATIONS<br>
                AND PUBLICITY<br>
                COMMITTEE<br>
                (PUBCO)
            </h1>
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                Through the use of HCunite and the Council Board, the Publication and Publicity Committee 
                publicises council events and initiatives, aiming to increase communication and transparency 
                between the student body and the Students' Council. 
                Moreover, our team is also dedicated to promoting a common identity for the Council and the school, 
                while aspiring to make student life more exciting!
            </p>
        </div>

        <div class="px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>
            
        </div>
    </section>

    <!-- secco -->
    <section ref="secco" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="../assets/informal_council_pic.jpg" alt="background" class="w-full h-full z-0 object-cover">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.5em] text-2xl/10 sm:text-5xl/18 lg:tracking-[0.3em] lg:text-8xl/30">
                THE STUDENT<br>
                ENGAGEMENT<br>
                AN CULTURE<br>
                COMMITTEE<br>
                (SECCO)
            </h1>
        </div>

        <div class="px-6 py-12 text-center md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                By forging common experiences, the Student Engagement and Culture committee aspires to be 
                the champion of our school's culture and identity, fostering a strong sense of belonging to the school, 
                and keeping the Hwa Chong spirit burning bright. 
                The committee is also the torchbearer of our school's vibrant song, dance and cheer culture, also known as SODACHE. 
                The Student Engagement and Culture Committee works to strengthen student bonds and 
                create memories that will last a lifetime.
            </p>
        </div>

        <div class="px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>
            
        </div>
    </section>

    <!-- snr -->
    <section ref="snr" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="../assets/informal_council_pic.jpg" alt="background" class="w-full h-full z-0 object-cover">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.5em] text-2xl/10 sm:text-5xl/18 lg:tracking-[0.3em] lg:text-8xl/30">
                THE SOCIAL<br>
                AND RELATIONS<br>
                COMMITTEE<br>
                (SNR)
            </h1>
        </div>

        <div class="px-6 py-12 text-center md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                The Social and Relations Committee seeks to be the eyes and ears of the council, 
                championing grassroot efforts to connect with the student body on a deeper level. 
                Through building bonds and promoting interactions between the council and the student body, 
                the committee strives to inculcate a unified sense of belonging to the school across all domains, 
                promoting the #Facs1Hwach spirit that we all know and love! In addition, the committee spearheads external communications 
                with external Councils from other institutions, 
                laying the groundwork for prospective collaborations to further vitalise the experience of Hwa Chongians.
            </p>
        </div>

        <div class="px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>
            
        </div>
    </section>

    <!-- welco -->
    <section ref="welco" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="../assets/informal_council_pic.jpg" alt="background" class="w-full h-full z-0 object-cover">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.5em] text-2xl/10 sm:text-5xl/20 lg:tracking-[0.4em] lg:text-8xl/40">
                THE WELFARE<br>
                COMMITTEE<br>
                (WELCO)
            </h1>
        </div>

        <div class="px-6 py-12 text-center md:text-left">
            <p class="max-w-[700px] mx-auto font-poppins">
                The Welfare Committee champions the welfare of the student population with heart and dedication. 
                The committee strives to promote the well being of the student population for a conducive learning environment for all HwaChongians. 
                Through infrastructure such as the Common Room and Welfare Room, the committee reaches out to the student body, 
                rendering services and hosting activities that add vibrancy to the student experience. 
                As the saying in the Welfare Committee goes, "Your Welfare Is Our Affair". 
                The 51st Welfare Committee hopes to do their best to let you smile a little wider, laugh a little louder.
            </p>
        </div>

        <div class="px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>

            <div>
                <img src="../assets/informal_council_pic.jpg" alt="" class="rounded-xl m-auto w-full aspect-3/4 object-cover">
                <div class="p-3 sm:p-6 w-full m-auto font-poppins">
                    <h2 class="text-2xl sm:text-3xl">Name</h2>
                    <p class="text-xs sm:text-sm text-justify">hi i’m sin yie. i enjoy counting money at benches, but i lost count yesterday when i heard a loud scream.</p>
                </div>
            </div>
            
        </div>
    </section>
</template>