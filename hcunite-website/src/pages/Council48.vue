<script setup>
import CouncilCard from '../components/CouncilCard.vue';

const councillors = {
    
}
</script>

<template>
<!-- hero section -->
    <section class="mt-30 pb-12">
        <h1 class="z-20 text-black lg:text-8xl w-full text-center">48TH STUDENTS' COUNCIL</h1>
    </section>

    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <section class="py-12 px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-contain object-bottom" src="/images/48th/48th_ExCo.png" alt="">
                    <h2 class="ml-6 font-semibold">EXCO</h2>
                    <button @click="$refs.nse.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:py-3 sm:max-w-[50%] md:max-w-[30%] lg:text-sm sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-contain object-bottom" src="/images/48th/48th_EcaCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">ECACO</h2>
                    <button @click="$refs.ecaco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-contain object-bottom" src="/images/48th/48th_PubCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">PUBCO</h2>
                    <button @click="$refs.pubco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-contain object-bottom" src="/images/48th/48th_SecCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">SECCO</h2>
                    <button @click="$refs.secco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-contain object-bottom" src="/images/48th/48th_SnR.jpg" alt="">
                    <h2 class="ml-6 font-semibold">SNR</h2>
                    <button @click="$refs.snr.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-contain object-bottom" src="/images/48th/48th_WelCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">WELCO</h2>
                    <button @click="$refs.welco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
        </div>
    </section>

    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <!-- nse -->
    <section ref="nse" class="pb-12 px-3">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/50th/50th_ExCo.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-90">
            <h1 class="absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.5em] text-3xl/10 sm:text-5xl/18 lg:tracking-[0.4em] lg:text-8xl/33">
                THE EXECUTIVE<br>
                COMMITTEE<br>
                (ExCo)
            </h1>
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                The ExCo consists of the Non-Standing Executive Committee (NSE) as well as the 
                chairpersons of each Standing Committee, and the Presidents of the Extended Councils. 
                Each NSE member is attached to one Standing Committee and each ExCo is attached to one Working Committee. 
                The ExCo is responsible for steering the council direction, 
                while pushing boundaries to lead the council to greater heights. 
                On an individual level, ExCo is committed to supporting each and every councillor to pursue their passions, 
                and partner them in their council journey ahead.
            </p>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <CouncilCard v-for="(data,name) in councillors['ExCo']" 
            :key="name" 
            :name="name" 
            council="ExCo" 
            year="50th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- ecaco -->
    <section ref="ecaco" class="pb-12 px-3">
        <div class="aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/50th/50th_EcaCo.jpg" alt="background" class="w-full h-full z-0 object-cover">
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
                The Extended Council Attaché Committee comprises 6 Councillors who serve as Presidents and attachés 
                to the Community Involvement Programme Council, Green Council and Students' National Education Council. 
                Each of these Presidents and attachés will serve in both the Students’ Council and their Extended Councils, 
                acting as a bridge to promote better communication between leadership bodies. 
                In doing so, they work to build meaningful collaborations 
                that will create a holistic experience for the student body.
            </p>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <CouncilCard v-for="(data,name) in councillors['EcaCo']" 
            :key="name" 
            :name="name" 
            council="EcaCo" 
            year="50th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- pubco -->
    <section ref="pubco" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/50th/50th_PubCo.jpg" alt="background" class="w-full h-full z-0 object-cover">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.4em] text-2xl/10 sm:text-5xl/18 lg:tracking-[0.2em] lg:text-8xl/25">
                THE PUBLICATIONS<br>
                AND PUBLICITY<br>
                COMMITTEE<br>
                (PUBCO)
            </h1>
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                Through the use of HCUNite and the Council Board, 
                the Publication and Publicity Committee publicises council events and initiatives, 
                aiming to increase communication and transparency between the student body and the Students’ Council. 
                Moreover, initiatives such as MOCH, which stands for Hwa Chong’s Own Media, 
                are dedicated to promoting a common identity for the Council and the school, 
                while aspiring to make student life more exciting! 
            </p>
        </div>

        <div class="px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <CouncilCard v-for="(data,name) in councillors['PubCo']" 
            :key="name" 
            :name="name" 
            council="PubCo" 
            year="50th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- secco -->
    <section ref="secco" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/50th/50th_SecCo.jpg" alt="background" class="w-full h-full z-0 object-cover">
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
                By spearheading common experiences, 
                the Student Engagement and Culture Committee aspires to be the champion of our school’s culture and identity, 
                fostering a strong sense of belonging to the school, and keeping the Hwa Chong spirit burning bright. 
                The Committee is also the torchbearer of our school’s vibrant song, dance and cheer culture, also known as SODACHE. 
                The 50th Student Engagement and Culture Committee works to strengthen student bonds and 
                create memories that will last a lifetime. 
            </p>
        </div>

        <div class="px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <CouncilCard v-for="(data,name) in councillors['SecCo']" 
            :key="name" 
            :name="name" 
            council="SecCo" 
            year="50th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- snr -->
    <section ref="snr" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/50th/50th_SnR.jpg" alt="background" class="w-full h-full z-0 object-cover">
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
                championing grassroot efforts that connect with the student body. 
                Through building bonds and promoting interactions with the student body, 
                the Committee strives to inculcate a unified sense of belonging to the school across all domains, 
                ensuring that Hwa Chong continues to be an inviting home for all. 
                In addition, the committee spearheads external communications with Councils from other institutions, 
                laying the grounds for prospective collaborations to further vitalise the experience of students in Hwa Chong. 
            </p>
        </div>

        <div class="px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <CouncilCard v-for="(data,name) in councillors['SnR']" 
            :key="name" 
            :name="name" 
            council="SnR" 
            year="50th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- welco -->
    <section ref="welco" class="pb-12 px-3 ">
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/50th/50th_WelCo.jpg" alt="background" class="w-full h-full z-0 object-cover">
            <h1 class="w-full absolute top-[50%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center font-inter font-black text-white tracking-[0.5em] text-2xl/10 sm:text-5xl/20 lg:tracking-[0.4em] lg:text-8xl/40">
                THE WELFARE<br>
                COMMITTEE<br>
                (WELCO)
            </h1>
        </div>

        <div class="px-6 py-12 text-center md:text-left">
            <p class="max-w-[700px] mx-auto font-poppins">
                The Welfare Committee champions the welfare of the student population with heart and dedication. 
                The Committee strives to promote the well being of the student population for a 
                conducive learning environment for all Hwa Chongians. 
                Through infrastructure such as the Common Room and Welfare Room, the Committee reaches out to the student body, 
                rendering services and hosting activities that add vibrancy to the student experience. 
                As the saying in the Welfare Committee goes, “Your Welfare Is Our Affair”. 
                The 50th Welfare Committee hopes to do their best to make your day a little better. 
            </p>
        </div>

        <div class="px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
            <CouncilCard v-for="(data,name) in councillors['WelCo']" 
            :key="name" 
            :name="name" 
            council="WelCo" 
            year="50th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>
</template>