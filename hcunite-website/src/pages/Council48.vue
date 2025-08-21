<script setup>
import CouncilCard from '../components/CouncilCard.vue';

const councillors = {
    "ExCo": {
        "Javen Justin Suki": {
            "position": "President, EcaCo Attaché",
            "description": "Hi everyone, I’m Javen! I promise my personality is more interesting than my surname :D I’m red-green colourblind, but I (probably) can differentiate between an Athena and Ares faculty shirt :)"
        },
        "Evelyne Chua": {
            "position": "Vice President, SECCo Attaché",
            "description": "Hello! I’m Evelyne and the extra E in my name stands for eyebags. Rest assured (or not) that it’s for you and the school that I burn the midnight oil."
        },
        "Nicole Naomi Tan": {
            "position": "General Secretary, PubCo Attaché",
            "description": "Hello everyone! I am Nicole and my friends have told me that I have the voice of an angel! Just like how Adele, grammy-award winning singer, said hello from the other side, I’ll say hello too!"
        },
        "Toh En Yu Dylan": {
            "position": "General Secretary, SnR Attaché",
            "description": "Hello everyone, I am Dylan! I stand at 5cm below Singapore’s average height, but I promise to see all of you and your issues, doing my best to solve them. :) ! Oh, I aim to be a Jake Peralta one day."
        },
        "Tan Yan Zhong": {
            "position": "General Treasurer, WelCo Attaché",
            "description": "Hi guys! I’m Yan Zhong, I may not be able to count past 10 but you can count on me :P I also stand at 178cm tall which is equivalent to 2 Dylans!"
        },
        "Tang Teen Chih Luke": {
            "position": "SECCo Chairperson",
            "description": "Yo I’m Luke! most people call me handsome but you can call me tonight if you want to replace sodache as the loml :D hmu im always down for sodache sessions!"
        },
        "David Wang Jia Bao": {
            "position": "PubCo Chairperson",
            "description": "Hi everyone I'm David, and unlike my Math test I will not fail to give my all for you guys! Please say hi to me even if i look like im dead i promise i'm rly friendly <3"
        },
        "Janice Goh Jia Li": {
            "position": "SnR Chairperson",
            "description": "Hello everyone, I am Janice! I love making people laugh (with my slightly questionable puns) and I put being NICE in JaNICE :”) so feel free to come say hi to me and tell me any jokes <33"
        },
        "Nicale Yee": {
            "position": "WelCo Chairperson",
            "description": "Hi everyone! Nicale here — part of the <160 gang but I assure you no order is too tall for me (especially if it’s for you guys :D) 🌻Feel free to say hello and expect an enthusiastic Hi! In return <3"
        }
    },
    "EcaCo": {
        "Cheryl Ow Yu Leng": {
            "position": "CIP Council Attaché",
            "description": "Hi!! I’m Cheryl, I drink rather healthily (no bubble tea, no coffee, just water💧 ). I reassure you that I’ll put 我的 (water) very best effort to listen to you :D"
        },
        "Isabella Rotschaedl": {
            "position": "CIP Council Attaché",
            "description": "Hello! I’m Isabella (Rotschaedl) and many people say i’m Janice’s doppelgänger! I hope my service to the school will be one of a kind, just like my surname :-) See y’all around!"
        },
        "Jennifer Lee": {
            "position": "Green Council Attaché",
            "description": "Annyeong! It’s Jennifer, the only Korean in council.. Just like KPop making your heart beat, I hope to be the KPop for you >< hmu if you wanna learn Korean heh"
        },
        "Raphael Isaiah Lim Keah Way": {
            "position": "Green Council Attaché",
            "description": "Hey Hwa Chong! I’m Raphael, but some might call me by my catholic name, Isaiah! I’m a huge 吃货 so don’t be afraid to ask me about food recommendations :D"
        },
        "Joshua Ng Chun How": {
            "position": "SNEC Attaché",
            "description": "Wassup, I’m Joshua, but you can call me Josh. And no, I didn’t participate in the Battle of the Josh, but I’m still able to josh around with ya. 😜"
        },
        "Shen Wen'na": {
            "position": "SNEC Attaché",
            "description": "Yozzies everybody! I'm Wen'na and the extra apostrophe in my name stands for extra cool 😎 and extra fun 🤩"
        },
        "Javen Justin Suki": {
            "position": "NSE Attaché",
            "description": "Hi everyone, I’m Javen! I promise my personality is more interesting than my surname :D I’m red-green colourblind, but I (probably) can differentiate between an Athena and Ares faculty shirt :)"
        }
    },
    "PubCo": {
        "David Wang Jia Bao": {
            "position": "Chairperson",
            "description": "Hi everyone I'm David, and unlike my Math test I will not fail to give my all for you guys! Please say hi to me even if i look like im dead i promise i'm rly friendly <3"
        },
        "Liu Zi Jian": {
            "position": "Secretary-Treasurer",
            "description": "Hello I’m Zi Jian, and thanks for taking the time to visit this HCUnite webpage, much love from PubCo <3"
        },
        "Tan Sing Kuang": {
            "position": "Art Director",
            "description": "Hi everyone! I am Sing Kuang and I love to nap in the afternoon then proceed to sleep early at night, effectively wasting my life away!"
        },
        "Jacob Tseng Wei-Jie": {
            "position": "Art Director",
            "description": "Hello everyone, I’m Jacob! I usually like meat to be cooked medium rare, but for you I’ll do a job well done."
        },
        "Stephanie Ann Koh Shu Hui": {
            "position": "Media Director",
            "description": "Hi guys I'm Steph, one of the media directors in charge of this website and I'm the tallest councillor!"
        },
        "Jonathan Koh Zhaoyun": {
            "position": "Media Director",
            "description": "Hi guys I'm Jon, one of the media directors in charge of this website and I'm taller than Steph!"
        },
        "Lim Shu Wei, Samantha": {
            "position": "MOCH Coordinator",
            "description": "Hello dajias I’m Sam but you can call me Sister Sam because I’m your Fam :D My normal sleep schedule is 2pm - 10pm"
        },
        "Sara Chen Yi Hsin": {
            "position": "MOCH Coordinator",
            "description": "Hi I’m Sara :D my friends say my texting is as dry as the sara-ha (sahara?) desert but i swear i’m friendlier in real life!"
        },
        "Siau Hui Xin": {
            "position": "MOCH Coordinator",
            "description": "Hey guys this is Hui :) I am 1cm short of 160cm BUT I’ll never be short of passion for serving yallz! <3"
        },
        "Peng Zikang": {
            "position": "MOCH Coordinator",
            "description": "Hi guys, I'm Zikang, and I love sleeping but I would never sleep on my promises! I’m very approachable and I can be your best PENG-you"
        },
        "Nicole Naomi Tan": {
            "position": "NSE Attaché",
            "description": "Hello everyone! I am Nicole and my friends have told me that I have the voice of an angel! Just like how Adele, grammy-award winning singer, said hello from the other side, I’ll say hello too!"
        }
    },
    "SecCo": {
        "Tang Teen Chih Luke": {
            "position": "Chairperson",
            "description": "Yo I’m Luke! most people call me handsome but you can call me tonight if you want to replace sodache as the loml :D hmu im always down for sodache sessions!"
        },
        "Chia Leanne": {
            "position": "Secretary-Treasurer",
            "description": "Hi everyone, I’m Leanne! Although my hairline has been receding, you can rest assured that my love for sodache and the school will never recede <3"
        },
        "Zhu Bolin": {
            "position": "Song I/C",
            "description": "Helloooo I’m Bolin and yes, I like bowling 🎳 I love music too, so hmu for song recos 🎶 :)"
        },
        "Chong Yin Shan Charlene": {
            "position": "Song I/C",
            "description": "Helloo I'm Charlene and my eyes might only open less than 1cm, but I promise I've got my eyes set on (you) serving the school!"
        },
        "Lee Ling Yuan, Kevyn": {
            "position": "Dance I/C",
            "description": "Konnichiwassup I’m Kevyn, and my zodiac sign is dollar sign <3"
        },
        "Yang Supeng": {
            "position": "Dance I/C",
            "description": "Hi everyone I’m Supeng :) music gets me on my feet, but nothing is more exciting than serving the school :D I may look fierce but i'm actually really nice😳 so don’t be afraid to say hi whenever!!"
        },
        "Lau Tse En": {
            "position": "Cheer I/C",
            "description": "Hi I’m Tse En, just like my name EN which means grateful, rest assured that it is my honor to serve you and this school. Approach me whenever ;)"
        },
        "Josiah Olive Ang Liang Ing": {
            "position": "Cheer I/C",
            "description": "Hey everyone, I'm Josiah :) I have small eyes but a big heart to serve you so hmu if you ever need someone to cheer you up!"
        },
        "Chong El Sa": {
            "position": "Student Engagement Coordinator",
            "description": "Hiii! I’m El Sa and the cold never bothered me anyway! Sooo, don’t be shy and come say hello to me anytime because I hope to warm up your day! :))"
        },
        "Chong Jia Hao, Jordan": {
            "position": "Student Engagement Coordinator",
            "description": "Heyy guys, I'm Jordan and the cold does bother me :” Nevertheless, I assure you that I'm very friendly and cool :D so hmu because I hope to spread JO-y to all of you!"
        },
        "Evelyne Chua": {
            "position": "NSE Attaché",
            "description": "Hello! I’m Evelyne and the extra E in my name stands for eyebags. Rest assured (or not) that it’s for you and the school that I burn the midnight oil."
        }
    },
    "SnR": {
        "Janice Goh Jia Li": {
            "position": "Chairperson",
            "description": "Hello everyone, I am Janice! I love making people laugh (with my slightly questionable puns) and I put being NICE in JaNICE :”) so feel free to come say hi to me and tell me any jokes <33"
        },
        "Ong Chi Juay": {
            "position": "Secretary-Treasurer",
            "description": "Hi everyone I'm Chi Juay! Currently having a hard time thinking of a writeup because serving you is the only thing on my mind 🙃"
        },
        "Low Ying Shan, Ignatius": {
            "position": "Ares Faculty Head",
            "description": "Hi friends I’m Iggy :D Slide into my DMs at 3am and we can agree on why LIHO milk tea with pearl 0% sugar + less ice is the superior bubble tea 😎"
        },
        "Leow Yi Xuan": {
            "position": "Ares Deputy Faculty Head",
            "description": "Hello everyone! I’m Yi Xuan :) I may have terrible stamina, but I’ll always run the extra mile for you :-) I am YI-sy to approach, so do say hi!"
        },
        "Keslyn Poh Jen En": {
            "position": "Apollo Faculty Head",
            "description": "Hey everyone! I’m Keslyn :-) I hope that in my term, I can help A-POH-lo achieve it’s fullest POH-tential! See you around school, and don’t be afraid to say hello!"
        },
        "Timothy Chia Chen": {
            "position": "Apollo Deputy Faculty Head",
            "description": "Hi guys I’m Timothy! Just like Jerome, I love to serve the school and I’ve always got Chia back :D"
        },
        "Phua Kai Jie": {
            "position": "Artemis Faculty Head",
            "description": "Hey everyone! I’m Kai Jie, and I'm in snr because I'm sociable and I've got good relations with others!! Really looking forward to the year ahead :)"
        },
        "Leong Guang Shian": {
            "position": "Artemis Deputy Faculty Head",
            "description": "Greetings eVERYBODYY! I’m Guang Shian and I'm part of the real Wolfgang (not Mozart or the guy called Puck)!"
        },
        "Lee Zhi Ning Dawn": {
            "position": "Athena Faculty Head",
            "description": "Hello everyone! I’m Dawn and you’re watching Disney Channel :”) Jokes aside, I assure you that no task is too (dawn)ting for me and i’ll owl-ways be there for you :)"
        },
        "Jerome Ang Shun Kang": {
            "position": "Athena Deputy Faculty Head",
            "description": "Hi I’m Jerome I love to serve, LOOKS. Interact with Jerome and Jerome will consider playing the kazoo for you :)! We will have A-HOOT time sheesh."
        },
        "Toh En Yu Dylan": {
            "position": "NSE Attaché",
            "description": "Hello everyone, I am Dylan! I stand at 5cm below Singapore’s average height, but I promise to see all of you and your issues, doing my best to solve them. :) ! Oh, I aim to be a Jake Peralta one day."
        }
    },
    "WelCo": {
        "Nicale Yee": {
            "position": "Chairperson",
            "description": "Hi everyone! Nicale here — part of the <160 gang but I assure you no order is too tall for me (especially if it’s for you guys :D) 🌻Feel free to say hello and expect an enthusiastic Hi! In return <3"
        },
        "Yang Chenghan, Roy": {
            "position": "Secretary-Treasurer",
            "description": "Hi everyone! I’m Roy — part of the >180 gang but I assure you that I will never be short of the passion to serve you!! You’d probably find me on houseparty at 2am or somewhere in school so do say hi let’s talk weee :D"
        },
        "Neo Jing Yi": {
            "position": "Welfare Member",
            "description": "Hi friends!! I’m Jing Yi helping with 20% of the liushabao sales in school :”) Just like the bao, I might be small but my fillings for you are always there 🥟 So say hi anytime and you will always get another back!"
        },
        "Marcus Seet Kai Feng": {
            "position": "Welfare Member",
            "description": "Hey everyone, most people call me Marcus, but you can call me anytime :-) for your welfare needs! My friends would say I’m loud and sociable, so feel free to say hi! :DDD"
        },
        "Bennett Ho Cheng Xun": {
            "position": "Welfare Member",
            "description": "Hi I’m Bennett! And I’ve got nothing much to say other than to stay tuned for many cool welfare initiatives coming your way! :)"
        },
        "Brandon Hoon Jing Feng": {
            "position": "Welfare Member",
            "description": "Hi guys! I’m Brandon, the one who has probably already slid into your dms, my friends call me slimy but I think I’m just trying to improve your welfare!"
        },
        "Pierson Loh Bin-En": {
            "position": "Welfare Member",
            "description": "Hey guys I’m Pierson! You can always rely on me for Pier support, but there’s always a chance I’m taking a nap 😪 Anyways, feel free to drop by and say hi!"
        },
        "Tan Yan Zhong": {
            "position": "NSE Attaché",
            "description": "Hi guys! I’m Yan Zhong, I may not be able to count past 10 but you can count on me :P I also stand at 178cm tall which is equivalent to 2 Dylans!"
        }
    }
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

    <!-- exco -->
    <section ref="nse" class="pb-12 px-3">
        <h2 class="text-center text-black p-8">
            THE EXECUTIVE
            COMMITTEE
            (EXCO)
        </h2>
        <div class="rounded-xl overflow-hidden relative">
            <img src="/images/48th/48th_ExCo.png" alt="background" class="w-full max-w-[900px] m-auto z-0 object-contain object-center brightness-90">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>First row:
                <br>Toh En Yu Dylan; Evelyne Chua; Javen Justin Suki; Nicole Naomi Tan; Tan Yan Zhong
                <br><br>Second Row:
                <br>Janice Goh Jia Li; David Wang Jia Bao; Tang Teen Chih Luke; Nicale Yee
                <br><br>Teacher Advisors:
                <br>Ms Su Yin Germaine Tan; Mr Benjamin Goh; Mr Kor Zhi Yang; Dr Sin Yee Theng; Ms Ying Min
            </p>

            <div class="mt-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['ExCo']" 
            :key="name" 
            :name="name" 
            council="ExCo" 
            year="48th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- ecaco -->
    <section ref="ecaco" class="pb-12 px-3">
        <h2 class="text-center text-black p-8">
            THE EXTENDED COUNCIL ATTACHÉ COMMITTEE (ECACO)
        </h2>
        <div class="rounded-xl overflow-hidden relative">
            <img src="/images/48th/48th_EcaCo.jpg" alt="background" class="rounded-xl w-full max-w-[900px] m-auto z-0 object-contain object-center">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>First row:
                <br>Cheryl Ow Yu Leng; Isabella Rotschaedl; Javen Justin Suki; Shen Wen'na
                <br><br>Second row:
                <br>Jennifer Lee; Raphael Isaiah Lim Keah Way; Joshua Ng Chun How
                <br><br>Teacher Advisor:
                <br>Ms Su Yin Germaine Tan
            </p>

            <div class="my-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

            <p class="max-w-[700px] mx-auto font-poppins">
                Re-established this year, the Extended Council Attaché Committee (ECACo) comprises 6 Councillors 
                who serve as attachés to the CIP Council, Green Council and SNEC Council. 
                Each of these attachés will serve in both the Students’ Council and their respective Councils, 
                acting as a bridge to facilitate better communication between both leadership bodies. 
                In doing so, we hope to be able to better align the direction of the 4 Councils to better serve the students, 
                be it through pushing out more initiatives or supporting one another!
            </p>

            <div class="mt-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['EcaCo']" 
            :key="name" 
            :name="name" 
            council="EcaCo" 
            year="48th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- pubco -->
    <section ref="pubco" class="pb-12 px-3">
        <h2 class="text-center text-black p-8">
            THE PUBLICATIONS AND PUBLICITY COMMITTEE (PUBCO)
        </h2>
        <div class="rounded-xl overflow-hidden relative">
            <img src="/images/48th/48th_PubCo.jpg" alt="background" class="rounded-xl w-full max-w-[900px] m-auto z-0 object-contain object-center">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>First row:
                <br>Jacob Tseng Wei-Jie; Peng Zikang; Liu Zi Jian; David Wang Jia Bao; Nicole Naomi Tan; Stephanie Ann Koh Shu Hui
                <br><br>Second Row:
                <br>Jonathan Koh Zhaoyun; Siau Hui Xin; Tan Sing Kuang; Lim Shu Wei, Samantha; Sara Chen Yi Hsin
                <br><br>Teacher Advisor:
                <br>Mr Kor Zhi Yang
            </p>

            <div class="my-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

            <p class="max-w-[700px] mx-auto font-poppins">
                The 48th Publications and Publicity Committee (PubCo) 
                takes charge of the Council's social media presence through HCUnite on its various social media platforms. 
                PubCo aims to promote engagement between the Council and our peers through our publications and publicity materials. 
                PubCo is also in charge of Hwa Chong's Own Media, otherwise affectionately known as MOCH, 
                where lifestyle articles and school-related topics are written for the enjoyment of our peers. 
                Through our work, PubCo hopes to promote a common identity for the Council and the College!
            </p>

            <div class="mt-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['PubCo']" 
            :key="name" 
            :name="name" 
            council="PubCo" 
            year="48th" 
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
        <div class="rounded-xl overflow-hidden relative">
            <img src="/images/48th/48th_SecCo.jpg" alt="background" class="rounded-xl w-full max-w-[900px] m-auto z-0 object-contain object-center">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>First row:
                <br>Chong El Sa; Chong Yin Shan Charlene; Chia Leanne; Tang Teen Chih Luke; Evelyne Chua; Chong Jia Hao, Jordan
                <br><br>Second row:
                <br>Yang Supeng; Zhu Bolin; Lau Tse En; Lee Ling Yuan, Kevyn; Josiah Olive Ang Liang Ing
                <br><br>Teacher Advisors:
                <br>Ms Su Yin Germaine Tan; Mr Benjamin Goh
            </p>

            <div class="my-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

            <p class="max-w-[700px] mx-auto font-poppins">
                School cheers, mass dances, college songs - Student Engagement and Culture Committee (SECCo) 
                seeks to establish a strong identity and build a sense of belonging among Hwa Chongians. 
                This is achieved through supporting the various co-cirricular activities (CCAs) (e.g. during cheering season) 
                and contributing to and promoting our rich culture of song, dance and cheer (fondly known as SODACHE). 
                SECCo strives to inspire more students to embody school pride, love and appreciation for the 
                unique and vibrant culture of Hwa Chong. We want to remind you of the love Hwa Chong has for you, 
                and the love you have for Hwa Chong!
            </p>

            <div class="mt-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['SecCo']" 
            :key="name" 
            :name="name" 
            council="SecCo" 
            year="48th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- snr -->
    <section ref="snr" class="pb-12 px-3">
        <h2 class="text-center text-black p-8">
            THE SOCIAL AND RELATIONS (SNR)
        </h2>
        <div class="rounded-xl overflow-hidden relative">
            <img src="/images/48th/48th_SnR.jpg" alt="background" class="rounded-xl w-full max-w-[900px] m-auto z-0 object-contain object-center">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>First row:
                <br>Leow Yi Xuan; Jerome Ang Shun Kang; Ong Chi Juay; Janice Goh Jia Li; Toh En Yu Dylan; Lee Zhi Ning Dawn
                <br><br>Second row:
                <br>Timothy Chia Chen; Phua Kai Jie; Lucien Leong Guang Shian; Low Ying Shan, Ignatius; Keslyn Poh Jen En
                <br><br>Teacher Advisor:
                <br>Ms Ying Min
            </p>

            <div class="my-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

            <p class="max-w-[700px] mx-auto font-poppins">
                The 48th Social and Relations (SnR) serves to encourage greater interaction and understanding among students, 
                as well as between the Students' Council and the student body. 
                SnR also strives to unite the student body at the faculty level and maintain good relations with other Councils, 
                in and out of the College. SnR comprises passionate Councillors who strongly desire to strengthen the 
                4Facs1Hwach spirit and add colour to the lives of their fellow Hwa Chongians. 
                By working together with various student bodies, SnR endeavours to make Hwa Chong a vibrant and exciting community!
            </p>

            <div class="mt-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['SnR']" 
            :key="name" 
            :name="name" 
            council="SnR" 
            year="48th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>

    <!-- welco -->
    <section ref="welco" class="pb-12 px-3">
        <h2 class="text-center text-black p-8">
            THE WELFARE COMMITTEE (WELCO)
        </h2>
        <div class="rounded-xl overflow-hidden relative">
            <img src="/images/48th/48th_WelCo.jpg" alt="background" class="rounded-xl w-full max-w-[900px] m-auto z-0 object-contain object-center">
        </div>

        <div class="px-6 py-12 text-justify md:text-justify">
            <p class="max-w-[700px] mx-auto font-poppins">
                (FROM LEFT TO RIGHT)
                <br><br>First row:
                <br>Neo Jing Yi; Yang ChengHan, Roy; Nicale Yee; Tan Yan Zhong; Pierson Loh Bin-En
                <br><br>Second row:
                <br>Marcus Seet Kai Feng; Bennett Ho Cheng Xun; Brandon Hoon Jing Feng
                <br><br>Teacher Advisors:
                <br>Ms Nicole Ann Law Li Ling, Mr Goh Wen Xuan Benjamin
            </p>

            <div class="my-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

            <p class="max-w-[700px] mx-auto font-poppins">
                United together by our desire to serve the student population to the best of our abilities, 
                the 48th Welfare Committee (WelCo) aims to make Hwa Chong a home for both the student population and the staff. 
                By implementing meaningful initiatives according to the needs of the students and 
                providing more convenient platforms to gather feedback, 
                WelCo aspires to make the time here in Hwa Chong for both staff and students a memorable one. 
                Dedicated to making Hwa Chong a more conducive environment for everyone, 
                WelCo strives to bridge the gap between the student population as well as the school administration. 
                Together, WelCo wholeheartedly pledges to be a listening ear for students. Because in WelCo, "Your Welfare is our Affair".
            </p>

            <div class="mt-12 h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
        </div>

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
            <CouncilCard v-for="(data,name) in councillors['WelCo']" 
            :key="name" 
            :name="name" 
            council="WelCo" 
            year="48th" 
            :position="data['position']" 
            :description="data['description']" 
            />
        </div>
    </section>
</template>