<script setup>
import CouncilCard from '../components/CouncilCard.vue';

const councillors = {
    "ExCo": {
        "Koh Ting Jia": {
            "position": "President, EleCo Attaché",
            "description": "HUAT’S 🧧UP 🆙 EVERYONE I’m Ting Jia 😆! Despite being a scolio-sis 🧍🏻‍♀️, I got your back 🩻 and will do my utmost best in serving 💅 the school 🏫! While I can’t dance well, Joel sure can DisCo 🕺!"
        },
        "Joel Ho Wei Ming": {
            "position": "Vice President, O1Co Attaché",
            "description": "Ho… Ho… Ho it's Joel 🎅! Your friendly neighbourhood Santa Claus 🎄 I'm here to bring you gifts all year round 🥳🥳🥳!"
        },
        "Ho Zoan": {
            "position": "General Secretary, O1Co Attaché",
            "description": "Hi I'm Zoan, I often sit in Starbucks and do work to feel like a main character… I also think people who sit on Central Plaza floors are cool."
        },
        "Ng Tze Kiat, David": {
            "position": "General Secretary, MAFCo Attaché",
            "description": "Hi I'm David, I often sit on the Central Plaza floor to feel like a main character… I also think people who sit in Starbucks and do work are cool."
        },
        "Chua Wei Jun": {
            "position": "General Treasurer, PromCo Attaché",
            "description": "Hi I'm Wei Jun, I often sit at the Council benches to count money and feel like a main character… I also think people who sit at the benches are cool."
        },
        "Charmaine Chew": {
            "position": "PubCo Chairperson, CNYCo Attaché",
            "description": "Hi I'm Charmaine and the CHAR in my name stands for Chewy Hewey Awey Rawr 🙀🥶😘"
        },
        "Tew Yang Zhi, Coen": {
            "position": "SECCo Chairperson, TDCo Attaché",
            "description": "Blackpink in your area? More like SECCO in your area. SODACHE is my passion, and yours should be too!"
        },
        "Brendan Lau Zhengxin": {
            "position": "SnR Chairperson, OHCo Attaché",
            "description": "Hay there 👨‍🌾 i’m Brendan and am a happy member of the SnR farm :D Let’s hope for a great harvest this council term and I'll strive to put a smile on your face :)"
        },
        "Rachelle Sim Kye Yee": {
            "position": "WelCo Chairperson, MAFCo Attaché",
            "description": "Hello I’m Rachelle — sorry to disappoint but it’s still pronounced as Rachel 😅 Rest assured that my dedication to serving y’all is never-ending (just like my Duolingo streak 💯)"
        },
        "Wee Cohen": {
            "position": "CIPC President, PromCo Member",
            "description": "Hello everyone I’m Cohen!! I’m here to create a hwa chong family that loves to give back to our community 🫶🏻 I live by a simple motto: weeeeeeeee 😆!!"
        },
        "Foo Yong Huei Rebecca": {
            "position": "Green Council President, CNYCo Member",
            "description": "Hi I’m Rebecca! I love green, earth and geog (I kind of want to be a farmer) let’s make hwach sustainable together!"
        },
        "Chen Yufan": {
            "position": "SNEC President, EleCo Member",
            "description": "Hello I’m Yufan 😆! Once again my only personality trait is I dislike all sweet food 😞 (yes my favourite drink is plain water 💧) Anyways I’m here to connect SNEC to Council yay 🫵🫵"
        }
    },
    "EcaCo": {
        "Wee Cohen": {
            "position": "President of Community Involvement Programme Council (CIPC), PromCo Member",
            "description": "Hello everyone I’m Cohen!! I’m here to create a hwa chong family that loves to give back to our community 🫶🏻 I live by a simple motto: weeeeeeeee 😆!!"
        },
        "Foo Yong Huei Rebecca": {
            "position": "President of Green Council, CNYCo Member",
            "description": "Hi I’m Rebecca! I love green, earth and geog (I kind of want to be a farmer) let’s make hwach sustainable together!"
        },
        "Chen Yufan": {
            "position": "President of Student National Education Council (SNEC), EleCo Member",
            "description": "Hello I’m Yufan 😆! Once again my only personality trait is I dislike all sweet food 😞 (yes my favourite drink is plain water 💧) Anyways I’m here to connect SNEC to Council yay 🫵🫵"
        },
        "Tan Hai Yang": {
            "position": "Community Involvement Programme Council Attaché, MAFCo Member",
            "description": "Hai everyone I'm Hai Yang 🌊 feel free to say Hai if you see me around - be it in school or in a comment on your SL proposal 😇😅"
        },
        "Tristan Chua Zi Heng": {
            "position": "Green Council Attaché, O1Co Member",
            "description": "Hello I'm Tristan! If you need me to fix something, just sound it out! (Relationships and grades not included 😔)"
        },
        "Arin Ong Zi Yun": {
            "position": "Student National Education Council Attaché, OHCo Member",
            "description": "Helloooo I’m Arin! I enjoy taekwondo and I secretly have an insane number of jackets 😄! Feel free to hmu and say hi and I’m sure my response will not let you down 🤠"
        },
        "Koh Ting Jia": {
            "position": "NSE Attaché, EleCo Attaché",
            "description": "Hello I’m Ting Jia and I love Singapore 🇸🇬, cookies 🍪 and recycling ♻️!"
        }
    },
    "PubCo": {
        "Charmaine Chew": {
            "position": "Chairperson, CNYCo Attaché",
            "description": "Hi I’m Charmaine and the char in my name stands for chewy hewey awey rawr 🙀🥶😘"
        },
        "Yeo Zhi An Edmund": {
            "position": "Secretary-Treasurer, OHCo Member, EleCo Member",
            "description": "Hi I’m Edmund and the edm in my name stands for eewey dewey mewey moo 🔥‼️😘"
        },
        "Ho Zoan": {
            "position": "NSE Attaché, O1Co Member",
            "description": "Hi I’m Zoan and the zo in my name stands for zewey oewey awey nawrr 😎🥵😘"
        },
        "Ho Kelly": {
            "position": "Media Director, EleCo Secretary-Treasurer, MAFCo Member",
            "description": "Did you know that MD stands for Much Doing (because we do so much) 🏋️💪😘"
        },
        "Keon Tan Kai Eik": {
            "position": "Media Director, CNYCo Chairperson, MAFCo Member",
            "description": "Did you know that MD stands for Myfavouriteeventiscny and Dbesteventiscny 🤯🧧😘"
        },
        "Tan Li Zhi, Pristine": {
            "position": "Media Director, CNYCo Secretary-Treasurer, TDCo Member",
            "description": "Did you know that MD stands for Mala Dala woahh MDs so spicy 🥵🌶️😘"
        },
        "Amandia Lim Wan Zhen": {
            "position": "MOCH, OHCo Member, EleCo Member",
            "description": "Hello I’m Amandia and MOCH in my name stands for Mala Obsessed Carrot Hater 🥕🤮😘"
        },
        "Bek Joon Hao": {
            "position": "MOCH, OHCo Chairperson, EleCo Member",
            "description": "Hello I’m Joon Hao and MOCH in my name stands for Masterful Optics Cinematic Highlights 📹📷😘"
        },
        "Javier Cheng Kai Heng": {
            "position": "MOCH, OHCo Member, CNYCo Member",
            "description": "Hello I’m Javier and the MOCH in my name stands for Mister Openhouse and Chinesenewyear Huatness 🏠 🧧😘"
        },
        "Yang Peiduo": {
            "position": "MOCH, OHCo Member, O1Co Member",
            "description": "Hello I'm Peiduo and the MOCH in my name stands for Muffin Obsession and Chocolate High 🧁🍫😘"
        }
    },
    "SecCo": {
        "Tew Yang Zhi, Coen": {
            "position": "Chairperson, TDCo Attaché",
            "description": "Blackpink in your area? More like SECCO in your area. SODACHE is my passion and yours should be too!"
        },
        "Kaleb Teo Tze Hsiang": {
            "position": "Secretary-Treasurer, OHCo Member, EleCo Member",
            "description": "I take Lit to make your lives lit 🔥🔥🔥"
        },
        "Ng Tze Kiat, David": {
            "position": "NSE Attaché, MAFCo Attaché",
            "description": "Hi I’m David, the letters ATT on my pink SECCo shirt actually stand for Anyday Tap Tapcrosscrosspointpoint 🕺 Currently attaché’d to SODACHE 🔗♥️"
        },
        "Ng Aaron": {
            "position": "Student Engagement Coordinator (SNC), O1Co Chairperson, PromCo Member",
            "description": "Wassup am A a ron and I'm a super necessary councillor, aka SNC, my jokes can be pretty lame but I aargue that I'm hilarious"
        },
        "Toh Yu Qi": {
            "position": "Student Engagement Coordinator (SNC), EleCo Chairperson, PromCo Member",
            "description": "Helloo i’m Yu Qi and SNC stands for super noisy committee 😍 but the noise is to make your life noice-r 🫵"
        },
        "Joanne Tan Kai Xin": {
            "position": "Song I/C, MAFCo Secretary-Treasurer, O1Co Member",
            "description": "My name is Joanne and I became the Song I/C after I heard a constant humming in class and decided that was my calling 🤔😃"
        },
        "Poon Wai Yew Gabriel": {
            "position": "Song I/C, TDCo Secretary-Treasurer, O1Co Member",
            "description": "My name is Gabriel, I’m the other Song I/C, and I want to apologise to my classmates for humming manjianghong in class 🙏😭"
        },
        "Nicole Yong Xue Min": {
            "position": "Dance I/C, PromCo Chairperson, CNYCo Member",
            "description": "Okayyy let’s do this one last time, my name is Nicole Yong, I was bitten by a radioactive spider and for like the last 4 years I’ve been the one and only kid who has been going without a proper sleep schedule, you wouldn’t want to know the rest"
        },
        "Liu Rui Yi Winnie": {
            "position": "Dance I/C, TDCo Member, O1Co Member",
            "description": "Hi I’m Winnie, your silly goofy dance I/C 😮‍💨 who delights in the whimsical and enjoys drowning herself in every shade of pink"
        },
        "Freya Low Huai Ning": {
            "position": "Cheer I/C, PromCo Member, EleCo Member",
            "description": "Why watch Barbie when you can watch us dance, dance the night away!"
        },
        "Loh Guan Yang": {
            "position": "Cheer I/C, PromCo Member, EleCo Member",
            "description": "Hi, I’m Guan Yang and I daresay I add the yang guang to each of your lives :)"
        }
    },
    "SnR": {
        "Brendan Lau Zhengxin": {
            "position": "Chairperson, OHCo Attaché",
            "description": "Hay there 👨‍🌾 I’m Brendan and am a happy member of the SnR farm :D let’s hope for a great harvest this council term and I’ll strive to put a smile on your face :)"
        },
        "Chen Xiaohan": {
            "position": "Secretary-Treasurer, MAFCo Member, EleCo Member",
            "description": "Hellooo I’m Xiaohan your SnR sec-treas (≧◡≦) ,, in my Seraphic-n-Relaxing time, I like to do ballet, play badminton or basketball,, if you need one more person for these just hmu hehe ヽ(>∀<)ノ"
        },
        "Joel Ho Wei Ming": {
            "position": "NSE Attaché, O1Co Attaché",
            "description": "🎅 Ho…ho…ho it's Joel! Your friendly neighbourhood santa claus 🎄 I'm here to bring you gifts all year round 🥳🥳🥳"
        },
        "Soh Jia Min": {
            "position": "Apollo Faculty Head, MAFCo Member",
            "description": "Hi I'm Jia Min and I'm the shortest Faculty Head ☀️☀️ Together with Junjian, Apollo's average height is the shortest. #ItIsATeamEffort"
        },
        "Zhang Junjian": {
            "position": "Apollo Deputy Faculty Head, O1Co Member",
            "description": "Hi I’m Junjian and I'm the tallest Faculty Head ☀️☀️ Because of Jia Min, Apollo's average height is the shortest. #TeamGoalzzz"
        },
        "Christiaan Tan Kok Hao": {
            "position": "Ares Faculty Head, O1Co Member",
            "description": "Hey I am Christiaan and I’m the Ares Faculty Head! 🔥🔥 I look forward to serving you and treating everyone like NEIGHbours! 🐴😲"
        },
        "Ee Zhao Hui": {
            "position": "Ares Deputy Faculty Head, MAFCo Member",
            "description": "Hi I am Zhao Hui and I'm your other Ares Faculty Head! 🔥🔥 While challenging the God of WAR is never easy, just know that we will NEIGH-ver give up!! ❤️‍🔥⚔️"
        },
        "Loy Ji Xuan Kyler": {
            "position": "Artemis Faculty Head, PromCo Member",
            "description": "Hi I am Kyler and I'm the one that has to put up with Sarah for my council term 😒 Inhaling too long is no good - get ready to EXHALE this 🐺"
        },
        "Sarah Hannah Koh Shi En": {
            "position": "Artemis Deputy Faculty Head, O1Co Member",
            "description": "Hi I am Sarah and I’m the one that has to entertain Kyler for my council term 🙄 When life is goofy you have to adapt, so get ready to inhale THAT 💙"
        },
        "Li Jiayi": {
            "position": "Athena Faculty Head, TDCo Member",
            "description": "Hi I’m Jiayi & I’m stuck with Yap Yu En 😞😞 but don’t worry we will help Yu make your school life more ENtertaining cuz u r A-then-a(out) of ten 😉😉 p.s I like pandas"
        },
        "Yap Yu En": {
            "position": "Athena Deputy Faculty Head, O1Co Member",
            "description": "Hi I’m Jace & I’m stuck with Li Jiayi for my council term 😐 BUT I’m here to 加一 to your Hwa Chong journey and to create OwlHoot together"
        }
    },
    "WelCo": {
        "Rachelle Sim Kye Yee": {
            "position": "Chairperson, MAFCo Attaché",
            "description": "Hello I’m Rachelle — sorry to disappoint but it’s still pronounced as “Rachel” 😅 Rest assured that my dedication to serving y’all is never-ending (just like my Duolingo streak 💯)"
        },
        "Faith Tan Ting Hui": {
            "position": "Secretary-Treasurer, TDCo Member, CNYCo Member",
            "description": "Hello I’m Faith, but unfortunately, I do not have much faith in myself 😅 live laugh love welco 🫶"
        },
        "Chua Wei Jun": {
            "position": "NSE Attaché, PromCo Attaché",
            "description": "Hi I'm Wei Jun, I often sit at the Council benches to count money and feel like a main character… I also think people who sit at the benches are cool."
        },
        "Arjithaa Balaji": {
            "position": "Member, OHCo Member, CNYCo Member",
            "description": "Hey Hwa Chong, I am the girl with the longest hair in school… I can be the rapunzel who pulls you up 🫵🏼🫶🏼"
        },
        "Emelin Neo Jiarou": {
            "position": "Member, TDCo Chairperson, CNYCo Member",
            "description": "Hi all I’m Emelin and I am quite short but my love for you is massive."
        },
        "Lee Zong Hong, Anthony": {
            "position": "Member, OHCo Secretary-Treasurer, EleCo Member",
            "description": "What’s up people I’m Anthony, part of the most Wel-Co-ming committee, I’m standing at a very respectable height of 158 🤩"
        },
        "Lim Chun Kai, Axel": {
            "position": "Member, O1Co Secretary-Treasurer, MAFCo Member",
            "description": "Hey guys I'm Axel and I strongly believe in the concept of bigger bank account🏦 🤑, better person 😉"
        },
        "Lua Wei An": {
            "position": "Member, MAFCo Chairperson, O1Co Member",
            "description": "Hello I’m Wei An and every time I get a haircut I feel like my identity is under crisis but it’s ok I will continue selling my combo meals at the welfare bench either way ❤️"
        },
        "Quan Wenlin": {
            "position": "Member, PromCo Secretary-Treasurer, O1Co Member",
            "description": "Hi I'm Wenlin and I'm here to give my Quan Bu 🫨"
        }
    }
}
</script>

<template>
<!-- hero section -->
    <section class="mt-30 pb-12">
        <h1 class="z-20 text-black lg:text-8xl w-full text-center">50TH STUDENTS' COUNCIL</h1>
        <div class="w-full h-screen relative">
            <img src="/images/50th/50th_HCSC.jpg" alt="background" class="z-0 absolute w-full h-full object-cover">
        </div>
        <div class="p-6">
            <p class="centered-text-block">
            (FROM LEFT TO RIGHT)
            <br><br>Front row:
            <br>Mr Ang Yong Qin (Teacher Advisor); Ms Ying Min (Teacher Advisor); Dr Lim Hong Seng Melvyn (Deputy Principal / Student Development (College)); Joel Ho Wei Ming; Mr Pang Choon How (Principal); Koh Ting Jia; Mrs Sim-Lim Siew Hui (Principal Consultant / Student Development); Ms Germaine Tan Su Yin (Teacher Advisor); Dr Sin Yee Theng (Teacher Advisor); Mrs Raj-Priyahlatha Nainar (Teacher Advisor)
            <br><br>Second Row:
            <br>Charmaine Chew; Tew Yang Zhi, Coen; Chen Yufan; Foo Yong Huei Rebecca; Rachelle Sim Kye Yee; Ng Tze Kiat, David; Ho Zoan; Chua Wei Jun; Brendan Lau Zhengxin; Wee Cohen
            <br><br>Third Row:
            <br>Tan Hai Yang; Lee Zong Hong, Anthony; Javier Cheng Kai Heng; Arin Ong Zi Yun; Joanne Tan Kai Xin; Chen Xiaohan; Quan Wenlin; Poon Wai Yew Gabriel; Zhang Junjian; Christiaan Tan Kok Hao; Sarah Hannah Koh Shi En; Lim Chun Kai, Axel; Loh Guan Yang
            <br><br>Fourth Row:
            <br>Soh Jia Min; Freya Low Huai Ning; Ho Kelly; Faith Tan Ting Hui; Bek Joon Hao; Ee Zhao Hui; Amandia Lim Wan Zhen; Nicole Yong Xue Min; Arjithaa Balaji; Emelin Neo Jiarou; Liu Rui Yi Winnie
            <br><br>Fifth row:
            <br>Yap Yu En; Keon Tan Kai Eik; Lua Wei An; Loy Ji Xuan Kyler; Yeo Zhi An Edmund; Ng Aaron; Kaleb Teo Tze Hsiang; Yang Peiduo; Li Jiayi; Toh Yu Qi
            <br><br>Not in picture:
            <br>Tan Li Zhi, Pristine; Tristan Chua Zi Heng
            </p>
        </div>
    </section>

    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>
    
    <section class="w-full py-15 px-6">
        <div class="w-full">
            <h2 class="!text-left centered-text-block">A short message from the 50th...</h2>
            <p class="centered-text-block mt-6 ">
                Just as the rising sun beckons a new dawn, we look forward to sunlit possibilities as we mark our Golden Jubilee milestone. 
                Embarking on HCSC’s 50th year, we pledge to embody the school’s vision, 
                to Live with Passion and Lead with Compassion, serving Hwa Chong and her charges with unwavering spirit and honour.
            </p>
        </div>
    </section>
    
    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <section class="w-full py-15 px-6">
        <div class="w-full">
            <h2 class="centered-text-block">Our Committees</h2>
            <p class="centered-text-block mt-6">
                The HCSC consists of the Executive Committee, the 5 Standing Committees (SC), and the 7 Working Committees (WC).
                <br><br>Headed by the Executive Committee (ExCo), the 5 SCs work together over their 2 Council Terms to best serve the students and their needs, in their differently unique aspects. 
                The 5 SCs consist of: the Extended Council Attaché Committee (ECACo), the Publications and Publicity Committee (PubCo), 
                the Student Engagement and Culture Committee (SECCo), the Social and Relations Committee (SnR), and the Welfare Committee (WelCo).
                <br><br>The 7 WCs serve to organise 7 Working Events, namely Teachers’ Day (TDCo), Mid-Autumn Festival (MAFCo), Senior Promenade (PromCo), 
                Open House (OHCo), Orientation (O1Co), Chinese New Year (CNYCo) and Elections (EleCo). 
                Each WC consists of its elected Chairperson, Secretary-Treasurer, ExCo Attaché, and members.
            </p>
        </div>
    </section>

    <div class="h-px w-[60%] max-w-[900px] bg-hwachred m-auto"></div>

    <section class="py-12 px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/50th/50th_ExCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">EXCO</h2>
                    <button @click="$refs.nse.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:py-3 sm:max-w-[50%] md:max-w-[30%] lg:text-sm sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/50th/50th_EcaCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">ECACO</h2>
                    <button @click="$refs.ecaco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/50th/50th_PubCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">PUBCO</h2>
                    <button @click="$refs.pubco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/50th/50th_SecCo.jpg" alt="">
                    <h2 class="ml-6 font-semibold">SECCO</h2>
                    <button @click="$refs.secco.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/50th/50th_SnR.jpg" alt="">
                    <h2 class="ml-6 font-semibold">SNR</h2>
                    <button @click="$refs.snr.scrollIntoView({ behavior: 'smooth' })" class="py-6 sm:max-w-[50%] sm:py-3 md:max-w-[30%] sm:mb-6 sm:ml-6 sm:rounded-full text-white font-poppins inline-block bg-black hover:bg-hwachred transition-colors duration-300">View</button>
                </div>
                <div class="grow flex flex-col gap-6 rounded-xl overflow-hidden bg-gray-100 border-1 border-gray-200 font-poppins font-normal">
                    <img class="w-full grow object-cover" src="/images/50th/50th_WelCo.jpg" alt="">
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

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
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

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
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

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
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
                AND CULTURE<br>
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

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
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

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
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

        <div class="px-3 sm:px-6 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[1000px] m-auto">
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