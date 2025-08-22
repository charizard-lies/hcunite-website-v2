<script setup>
import CouncilCard from '../components/CouncilCard.vue';

const councillors = {
    "ExCo": {
        "Tok Jun Yi Alaric": {
            "position": "President"
        },
        "Yam Yen Yee": {
            "position": "Vice President"
        },
        "Chen Enying": {
            "position": "General Treasurer"
        },
        "Tng Guang Hong, Zak": {
            "position": "General Secretary"
        },
        "Wu Sichen Daniel": {
            "position": "General Secretary"
        },
        "Joshua Ng Tian Ian": {
            "position": "PubCo Chairperson"
        },
        "Tho Ching Shuen, Shannon": {
            "position": "SECCo Chairperson"
        },
        "Ho Xin Ping Julia": {
            "position": "SnR Chairperson"
        },
        "Teo Jin Yuan": {
            "position": "WelCo Chairperson"
        },
        "Jenelle Kan Rui Yee": {
            "position": "CIP Council President"
        },
        "Lim Xin, Jewell": {
            "position": "Green Council President"
        },
        "Lin Zongkai": {
            "position": "SNEC President"
        }
    },
    "EcaCo": {
        "Jenelle Kan Rui Yee": {
            "position": "CIP Council President"
        },
        "Rachel Yong Swee Kee": {
            "position": "CIP Council Attaché"
        },
        "Lim Xin, Jewell": {
            "position": "Green Council President"
        },
        "Natthanich Mekadenaumporn": {
            "position": "Green Council Attaché"
        },
        "Lin Zongkai": {
            "position": "SNEC President"
        },
        "Loh Wan Ling": {
            "position": "SNEC Attaché"
        },
        "Tok Jun Yi Alaric": {
            "position": "NSE Attaché"
        },
    },
    "PubCo": {
        "Joshua Ng Tian Ian": {
            "position": "Chairperson"
        },
        "Kimberly See Su Xin": {
            "position": "Secretary-Treasurer"
        },
        "Koh Rui En, Rachel": {
            "position": "Art Director"
        },
        "Siau Hwee Wen": {
            "position": "Art Director"
        },
        "Gwee Kang Ting": {
            "position": "Media Director"
        },
        "Nathanael Goh Wei Hao": {
            "position": "Media Director"
        },
        "Breanna Lim Yen Ru": {
            "position": "MOCH Coordinator"
        },
        "Ding Jinbo": {
            "position": "MOCH Coordinator"
        },
        "Ethan Yeo Zhen Xiang": {
            "position": "MOCH Coordinator"
        },
        "Yam Yen Yee": {
            "position": "NSE Attaché"
        }
    },
    "SecCo": {
        "Tho Ching Shuen, Shannon": {
            "position": "Chairperson"
        },
        "Kho Wei Xuan": {
            "position": "Secretary-Treasurer"
        },
        "Jayden Liew Heng Feng": {
            "position": "Student Engagement Coordinator"
        },
        "Lim Chong Zheng": {
            "position": "Student Engagement Coordinator"
        },
        "Amanda Tan Ying Hui": {
            "position": "Song I/C"
        },
        "Yung Cheng Ze, Javier": {
            "position": "Song I/C"
        },
        "Julia Wong": {
            "position": "Dance I/C"
        },
        "Liong Kai Rui Reyes": {
            "position": "Dance I/C"
        },
        "Dylan Pang": {
            "position": "Cheer I/C"
        },
        "Yi Jianhong": {
            "position": "Cheer I/C"
        },
        "Wu Sichen Daniel": {
            "position": "NSE Attaché"
        }
    },
    "SnR": {
        "Ho Xin Ping Julia": {
            "position": "Chairperson"
        },
        "Wong Kai Ray": {
            "position": "Secretary-Treasurer"
        },
        "Luke Tham Yuanyang": {
            "position": "Apollo Faculty Head"
        },
        "Sng Yun Wen Faith": {
            "position": "Apollo Deputy Faculty Head"
        },
        "Kam Xun Rui Dylan": {
            "position": "Ares Faculty Head"
        },
        "Zhang Yanyu": {
            "position": "Ares Deputy Faculty Head"
        },
        "Lin En": {
            "position": "Artemis Faculty Head"
        },
        "Tan Shi Ya Shianne": {
            "position": "Artemis Deputy Faculty Head"
        },
        "Zaccheus Tan Meng Tze": {
            "position": "Athena Faculty Head"
        },
        "Esther Tan Ee": {
            "position": "Athena Deputy Faculty Head"
        },
        "Tng Guang Hong, Zak": {
            "position": "NSE Attaché"
        }
    },
    "WelCo": {
        "Teo Jin Yuan": {
            "position": "Chairperson"
        },
        "Bennett Lee Shuen Meng": {
            "position": "Secretary-Treasurer"
        },
        "Althea Ng Jing En": {
            "position": "Welfare Member"
        },
        "Lee Kay Yong, Branson": {
            "position": "Welfare Member"
        },
        "Mahendran S/O Ravindran": {
            "position": "Welfare Member"
        },
        "Mak Yee Huen Cherlyn": {
            "position": "Welfare Member"
        },
        "Ong Zi Quan, Gavin": {
            "position": "Welfare Member"
        },
        "Wu Pei En": {
            "position": "Welfare Member"
        },
        "Chen Enying": {
            "position": "NSE Attaché"
        }
    }
}

</script>

<template>
<!-- hero section -->
    <section class="mt-30 pb-12">
        <h1 class="z-20 text-black lg:text-8xl w-full text-center p-4">49TH STUDENTS' COUNCIL</h1>
        <img src="/images/50th/50th_HCSC.jpg" alt="background" class="z-0 w-full">
        <div class="p-6">
            <p class="centered-text-block">
            (FROM LEFT TO RIGHT)
            <br><br>Front row:
            <br>Jenelle Kan Rui Yee; Joshua Ng Tian Ian; Chen Enying; Tng Guang Hong, Zak; Mr Kor Zhi Yang (Teacher Advisor); Ms Ying Min (Teacher Advisor); Ms Germaine Tan Su Yin (Teacher Advisor); Mr Chan Kwok Leong (Deputy Principal / Studies (College)); Yam Yen Yee; Mr Pang Choon How (Principal); Tok Jun Yi Alaric; Dr Lim Hong Seng Melvyn (Deputy Principal / Student Development (College)); Mrs Sim-Lim Siew Hui (Principal Consultant / Student Development); Dr Sin Yee Theng (Teacher Advisor); Mr Benjamin Goh Wen Xuan (Teacher Advisor); Wu Sichen Daniel; Ho Xin Ping Julia; Teo Jin Yuan; Tho Ching Shuen, Shannon; Lim Xin, Jewell
            <br><br>Second Row:
            <br>Sng Yun Wen Faith; Althea Ng Jing En; Amanda Tan Ying Hui; Gwee Kang Ting; Wu Pei En; Mak Yee Huen Cherlyn; Kimberly See Su Xin; Julia Wong; Kho Wei Xuan; Breanna Lim Yen Ru; Zhang Yanyu; Tan Shi Ya Shianne; Rachel Yong Swee Kee; Ding Jinbo; Siau Hwee Wen; Loh Wan Ling; Esther Tan Ee; Natthanich Mekadenaumporn; Koh Rui En, Rachel
            <br><br>Third Row:
            <br>Nathanael Goh Wei Hao; Wong Kai Ray; Zaccheus Tan Meng Tze; Dylan Pang; Jayden Liew Heng Feng; Lim Chong Zheng; Lee Kay Yong, Branson; Liong Kai Rui Reyes; Kam Xun Rui Dylan; Luke Tham Yuanyang; Ethan Yeo Zhen Xiang; Yi Jianhong; Bennett Lee Shuen Meng; Mahendran S/O Ravindran 
            <br><br>Not In Picture:
            <br>Lin En; Ong Zi Quan, Gavin; Yung Cheng Ze, Javier
            </p>
        </div>
    </section>

    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
    
    <section class="w-full py-15 px-6">
        <div class="w-full">
            <p class="centered-text-block mt-6 ">
                The 49th Hwa Chong Students' Council is committed to building a united Hwa Chong family through acceptance, 
                care and trust! As Councillors elected by our peers, we carry the responsibility of being the voice of the students, 
                and look towards creating a wholesome environment in the school. 
                The Students' Council is here for you, whenever and wherever you need it. Let's soar together, as one Hwa Chong!
            </p>
        </div>
    </section>

    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <section class="py-12 px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/49th/49th_ExCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">EXCO</h2>
                    <button @click="$refs.nse.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:py-3 sm:max-w-[50%] md:max-w-[30%] lg:text-sm sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/49th/49th_EcaCo.png" alt="">
                    <h2 class="ml-6 font-semibold">ECACO</h2>
                    <button @click="$refs.ecaco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/49th/49th_PubCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">PUBCO</h2>
                    <button @click="$refs.pubco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/49th/49th_SecCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">SECCO</h2>
                    <button @click="$refs.secco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/49th/49th_SnR.jpg" alt="">
                    <h2 class="ml-6 font-semibold">SNR</h2>
                    <button @click="$refs.snr.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/49th/49th_WelCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">WELCO</h2>
                    <button @click="$refs.welco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
        </div>
    </section>

    <!-- nse -->
    <section ref="nse" class="pb-12 pt-8 px-3">
        <h2 class="text-center text-black p-8">
            THE EXECUTIVE
            COMMITTEE
            (EXCO)
        </h2>
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/49th/49th_ExCo.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-90">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>Front row:
                <br>Chen Enying; Yam Yen Yee; Tho Ching Shuen, Shannon; Ho Xin Ping Julia; Jenelle Kan Rui Yee
                <br><br>Second Row:
                <br>Teo Jin Yuan; Lin Zongkai; Joshua Ng Tian Ian; Tok Jun Yi Alaric; Tng Guang Hong, Zak; Wu Sichen Daniel
                <br><br>Not In Picture:
                <br>Lim Xin, Jewell
            </p>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['ExCo']" 
            :key="name" 
            :name="name" 
            council="ExCo" 
            year="49th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- ecaco -->
    <section ref="ecaco" class="pb-12 px-3">
        <h2 class="text-center text-black p-8">
            THE EXTENDED COUNCIL ATTACHE 
            COMMITTEE
            (ECACO)
        </h2>
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/49th/49th_EcaCo.png" alt="background" class="w-full h-full z-0 object-cover brightness-90">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>Front row:
                <br>Tok Jun Yi Alaric; Lim Xin, Jewell; Jenelle Kan Rui Yee;  Lin Zongkai
                <br><br>Second row:
                <br>Natthanich Mekadenaumporn; Rachel Yong Swee Kee; Loh Wan Ling
                <br><br>Teacher Advisor:
                <br>Ms Germaine Tan
            </p>
            
            <div class="my-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

            <p class="max-w-[700px] mx-auto font-poppins">
                The Extended Council Attaché Committee (ECACo) comprises 6 Councillors who serve as attachés to the CIP Council, 
                Green Council and SNEC. Each of these attachés will serve in both the Students' Council and their respective Councils, 
                acting as a bridge to facilitate better communication between both leadership bodies. In doing so, 
                we hope to be able to better align the direction of the 4 Councils to better serve the students, 
                be it through pushing out more initiatives or supporting one another!
            </p>

            <div class="mt-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['EcaCo']" 
            :key="name" 
            :name="name" 
            council="EcaCo" 
            year="49th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- pubco -->
    <section ref="pubco" class="pb-12 px-3">
        <h2 class="text-center text-black p-8">
            THE PUBLICATIONS AND PUBLICITY
            COMMITTEE
            (PUBCO)
        </h2>
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/49th/49th_PubCo.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-90">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>Front row:
                <br>Breanna Lim Yen Ru; Yam Yen Yee; Joshua Ng Tian Ian; Kimberly See Su Xin; Ding Jinbo
                <br><br>Second row:
                <br>Nathanael Goh Wei Hao; Gwee Kang Ting; Siau Hwee Wen; Koh Rui En, Rachel; Ethan Yeo Zhen Xiang
                <br><br>Teacher Advisor:
                <br>Mr Kor Zhi Yang 
            </p>

            <div class="my-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

            <p class="max-w-[700px] mx-auto font-poppins">
                The 49th Publications and Publicity Committee (PubCo) takes charge of the Council's social media presence 
                through HCUnite on its various social media platforms. 
                PubCo aims to promote engagement between the Council and our peers through our publications and publicity materials. 
                PubCo is also in charge of Hwa Chong's Own Media, otherwise affectionately known as MOCH. 
                Through our work, PubCo hopes to promote a common identity for the Council and the school!
            </p>
            
            <div class="mt-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['PubCo']" 
            :key="name" 
            :name="name" 
            council="PubCo" 
            year="49th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- secco -->
    <section ref="secco" class="pb-12 px-3">
        <h2 class="text-center text-black p-8">
            THE STUDENT ENGAGEMENT AND CULTURE COMMITTEE (SECCO)
        </h2>
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/49th/49th_SecCo.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-90">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>Front row:
                <br>Amanda Tan Ying Hui; Yung Cheng Ze, Javier; Kho Wei Xuan; Tho Ching Shuen, Shannon; Liong Kai Rui Reyes; Julia Wong
                <br><br>Second Row:
                <br>Jayden Liew Heng Feng; Yi Jianhong; Wu Sichen Daniel; Dylan Pang; Lim Chong Zheng
                <br><br>Teacher Advisor:
                <br>Mr Goh Wen Xuan Benjamin
            </p>

            <div class="my-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

            <p class="max-w-[700px] mx-auto font-poppins">
                The 49th Student Engagement and Culture Committee (SECCo) seeks to establish a strong school identity 
                and build a sense of belonging among Hwa Chongians. 
                This is achieved through supporting the various co-curricular activities (CCAs) 
                (e.g. during cheering season) and contributing to and promoting our rich culture of 
                song, dance and cheer (fondly known as SODACHE). As the 49th SECCo, 
                we aspire to inspire more students to embody school pride, love and appreciation for the 
                unique and vibrant culture of Hwa Chong.
            </p>

            <div class="mt-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['SecCo']" 
            :key="name" 
            :name="name" 
            council="SecCo" 
            year="49th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- snr -->
    <section ref="snr" class="pb-12 px-3">
        <h2 class="text-center text-black p-8">
            THE SOCIAL AND RELATIONS COMMITTEE
            (SNR)
        </h2>
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/49th/49th_SnR.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-90">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>Front row:
                <br>Wong Kai Ray; Ho Xin Ping Julia; Tng Guang Hong, Zak
                <br><br>Second row:
                <br>Zhang Yanyu; Sng Yun Wen Faith; Tan Shi Ya Shianne; Esther Tan Ee
                <br><br>Third row:
                <br>Kam Xun Rui Dylan; Luke Tham Yuanyang; Lin En; Zaccheus Tan Meng Tze
                <br><br>Teacher Advisor:
                <br>Ms Ying Min
            </p>

            <div class="my-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

            <p class="max-w-[700px] mx-auto font-poppins">
                The 49th Social and Relations Committee (SnR) serves to encourage greater interaction and 
                understanding among students, as well as between the Students' Council and the student body. 
                SnR also strives to unite the student body at the Faculty level and maintain good relations with other Councils, 
                within and outside of the school. SnR comprises passionate Councillors who strongly desire to 
                strengthen the 4Facs1Hwach spirit and add colour to the lives of their fellow Hwa Chongians. 
                By working together with various student bodies, SnR endeavours to make Hwa Chong a vibrant and exciting community!
            </p>

            <div class="mt-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['SnR']" 
            :key="name" 
            :name="name" 
            council="SnR" 
            year="49th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- welco -->
    <section ref="welco" class="pb-12 px-3">
        <h2 class="text-center text-black p-8">
            THE WELFARE
            COMMITTEE
            (WELCO)
        </h2>
        <div class=" aspect-3/2 rounded-xl overflow-hidden relative">
            <img src="/images/49th/49th_WelCo.jpg" alt="background" class="w-full h-full z-0 object-cover brightness-90">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>Front row:
                <br>Lee Kay Yong, Branson; Bennett Lee Shuen Meng; Teo Jin Yuan; Chen Enying; Althea Ng Jing En
                <br><br>Second row:
                <br>Ong Zi Quan, Gavin; Mak Yee Huen Cherlyn; Wu Pei En; Mahendran S/O Ravindran
                <br><br>Teacher Advisor:
                <br>Dr Sin Yee Theng 
            </p>

            <div class="my-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

            <p class="max-w-[700px] mx-auto font-poppins">
                WelCo champions the welfare of the student population with heart and dedication. 
                The committee aims to properly address the needs of, and improve services for, 
                the students so as to facilitate a conducive learning environment for all Hwa Chongians. 
                The Committee also takes ownership of the maintenance and upgrading of the Common Room, 
                and is constantly looking for ways to serve the student body better. As we say in WelCo, 
                "Your Welfare Is Our Affair". The 49th WelCo hopes to do their best to make your day a little better.
            </p>

            <div class="mt-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['WelCo']" 
            :key="name" 
            :name="name" 
            council="WelCo" 
            year="49th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>
</template>