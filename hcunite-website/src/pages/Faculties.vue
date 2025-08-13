<script></script>

<template>
    <!-- hero section -->
    <section class="flex flex-col gap-12 p-6">
        <div class="mt-20">
            <h1>FACULTIES</h1>
            <p>Click on the different logos to learn more about the faculty!</p>
        </div>
        <div class="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="rounded-xl shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="/apollo">
                    <img class=" aspect-square object-cover" src="../assets/faculties/Apollo.png" alt="">
                </router-link>
                <h3 class="ml-8 my-4">Apollo</h3>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="/ares">
                    <img class=" aspect-square object-cover" src="../assets/faculties/Ares.png" alt="">
                </router-link>
                <h3 class="ml-8 my-4">Ares</h3>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="/artemis">
                    <img class=" aspect-square object-cover" src="../assets/faculties/Artemis.png" alt="">
                </router-link>
                <h3 class="ml-8 my-4">Artemis</h3>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl border-gray-100 border-1 overflow-hidden transition-shadow duration-300">
                <router-link to="/athena">
                    <img class=" aspect-square object-cover" src="../assets/faculties/Athena.png" alt="">
                </router-link>
                <h3 class="ml-8 my-4">Athena</h3>
            </div>
        </div>
        
    </section>

    <section class="w-full px-6">
        <div class="w-full py-15">
            <h2 class="!text-left centered-text-block">Address by SnR Chairperson</h2>
            <p class="mt-6 centered-text-block">
                Apollo, Artemis, Ares and Athena - Welcome to the Faculties of Hwa Chong! The faculty system presents a home within a home, another reinforced pillar of support for our students. Sorted by subject combinations and classes, each faculty possesses a unique identity, each with a special flair that students can identify with. The sights and sounds of the Faculty are encapsulated in the wide array of welfare initiatives, ranging from Faculty Brunch to Faculty Community Involvement Programme (FCIP). 
                <br><br>Each faculty houses souls brimming with passion for building a community , embellished by electrifying dances and thunderous cheers. This is the work of the Faculty Committees — a group of highly committed students that champion the well-being of every student, navigating them through their Hwa Chong Journey. As such, the voices of the Faculties are amplified, translating into reverberating waves of laughter and joy on campus. 
                <br><br>Together, they form a fusion of cultures, more affectionately known as the “4Facs1Hwach” Family that we all know and love. The faculties add exuberance to the vibrant kaleidoscope of school life, hopefully leaving fond, everlasting memories of a uniquely Hwa Chong life in every student after your two years with us.
                <br><br><br><b>Tan Yu Ming</b>
                <br><br>Social and Relations Committee Chairperson
                <br><br>51st Hwa Chong Students’ Council
            </p>
        </div>
    </section>
</template>