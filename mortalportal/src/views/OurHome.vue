<!-- Mel -->

<template >
    <!-- Navigation Bar -->
    <!-- <q-scroll-area style="height: 100vh; max-width: 100vw;" :thumb-style="thumbStyle" :bar-style="barStyle"> -->
    <q-scroll-area style="height: 100vh; max-width: 100vw;" :thumb-style="thumbStyle" :bar-style="barStyle">

        <div class="q-pa-none">


            <q-toolbar class="text-white q-my-none shadow-2 bg-white" id="navbar">

                <q-toolbar-title shrink>
                    <router-link to="/home/angel" style="color: white; text-decoration: none">
                        <q-img src="../assets/MainLogo2.png" style="width:170px"></q-img>
                    </router-link>
                </q-toolbar-title>
                <q-space />
                <div class="lt-xs mainMenu">

                    <q-btn rounded flat label="Chats" @click="gotoChat()" class="text-black " @mouseover="hover3 = true"
                        @mouseleave="hover3 = false" v-if="hover3 == false && targetP == 'angel'" />
                    <q-btn rounded flat label="Chats" @click="gotoChat()" class="text-teal-5" @mouseover="hover3 = true"
                        @mouseleave="hover3 = false" v-if="hover3 == true && targetP == 'angel'" />

                    <q-btn rounded flat label="My Account" @click="handleClick()" class="text-black "
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == false && targetP == 'angel'" />
                    <q-btn rounded flat label="My Account" @click="handleClick()" class="text-secondary"
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == true && targetP == 'angel'" />

                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-black" @mouseover="hover2 = true"
                        @mouseleave="hover2 = false" v-if="hover2 == false && targetP == 'angel'" />
                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-secondary "
                        @mouseover="hover2 = true" @mouseleave="hover2 = false"
                        v-if="hover2 == true && targetP == 'angel'" />

                    <q-btn rounded flat label="Chats" @click="gotoChat()" class="text-black " @mouseover="hover3 = true"
                        @mouseleave="hover3 = false" v-if="hover3 == false && targetP == 'mortal'" />
                    <q-btn rounded flat label="Chats" @click="gotoChat()" class="text-dark" @mouseover="hover3 = true"
                        @mouseleave="hover3 = false" v-if="hover3 == true && targetP == 'mortal'" />

                    <q-btn rounded flat label="My Account" @click="handleClick()" class="text-black "
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == false && targetP == 'mortal'" />
                    <q-btn rounded flat label="My Account" @click="handleClick()" class="text-dark"
                        @mouseover="hover = true" @mouseleave="hover = false"
                        v-if="hover == true && targetP == 'mortal'" />

                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-black" @mouseover="hover2 = true"
                        @mouseleave="hover2 = false" v-if="hover2 == false && targetP == 'mortal'" />
                    <q-btn rounded flat label="Log Out" @click="exit()" class="text-dark " @mouseover="hover2 = true"
                        @mouseleave="hover2 = false" v-if="hover2 == true && targetP == 'mortal'" />
                </div>

                <div class="gt-s hamburgMenu">
                    <!-- <q-btn flat dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->
                    <q-btn-dropdown flat dense dropdown-icon="menu" class="text-black">
                        <q-list>
                            <q-item-label header>Menu</q-item-label>
                            <q-item clickable v-ripple>
                                <q-item-section avatar>
                                    <q-icon name="chat" />
                                </q-item-section>
                                <q-item-section @click=gotoChat()>Chats</q-item-section>
                            </q-item>
                            <q-item clickable v-ripple>
                                <q-item-section avatar>
                                    <q-icon name="person" />
                                </q-item-section>
                                <q-item-section @click="handleClick()">My Account</q-item-section>
                            </q-item>
                            <q-item clickable v-ripple>
                                <q-item-section avatar>
                                    <q-icon name="logout" />
                                </q-item-section>
                                <q-item-section @click="exit()">Log Out</q-item-section>
                            </q-item>
                        </q-list>
                    </q-btn-dropdown>
                </div>

            </q-toolbar>
        </div>



        <table align="center">
            <tr>
                <td class="actionbtns">
                    <q-btn v-if="targetP == 'angel'" class="text-secondary" flat rounded v-model="Selection"
                        @click='angelBtn'>
                        <h5>Angel</h5>
                    </q-btn>
                    <q-btn v-else flat rounded v-model="Selection" @click='angelBtn'>
                        <h5>Angel</h5>
                    </q-btn>
                </td>
                <td width:10px>
                    |
                </td>
                <td class="actionbtns">
                    <q-btn v-if="targetP == 'mortal'" flat color="dark" rounded v-model="Selection" @click="mortalBtn">
                        <h5>Mortal</h5>
                    </q-btn>
                    <q-btn v-else flat rounded v-model="Selection" @click="mortalBtn">
                        <h5>Mortal</h5>
                    </q-btn>
                </td>
            </tr>
        </table>


        <!-- Angel -->
        <div v-if="Selection == 'Angel' && targetP == 'angel'">

            <table align="center">
                <tr style="width:36vw">
                    <td align='center'>
                        <q-btn v-if="activeBtn == 'Find'" v-model="activeBtn" class="actionbtns bg-secondary text-white"
                            @click="FindBtn">Find</q-btn>
                        <q-btn v-else v-model="activeBtn" class="actionbtns  text-black" @click="FindBtn">Find</q-btn>
                    </td>
                    <td align='center'>
                        <q-btn v-if="activeBtn == 'Saved'" v-model="activeBtn"
                            class="actionbtns bg-secondary text-white" @click="SavedBtn">Saved</q-btn>
                        <q-btn v-else v-model="activeBtn" class="actionbtns text-black" @click="SavedBtn">Saved</q-btn>
                    </td>
                    <td align='center'>
                        <q-btn v-if="activeBtn == 'Active'" v-model="activeBtn"
                            class="actionbtns bg-secondary text-white" @click="ActiveBtn">Active</q-btn>
                        <q-btn v-else v-model="activeBtn" class="actionbtns text-black" @click="ActiveBtn">Active
                        </q-btn>
                    </td>

                </tr>
                <tr v-if="activeBtn == 'Find'">
                    <td colspan="3" align='left'>
                        <q-input rounded outlined label="Search" class="search text-black" v-model="search"
                            color="secondary" text-color="white">
                        </q-input>
                    </td>
                </tr>
            </table>
            <div>

                <q-card class="dCard bg-accent rounded-borders" v-if="activeBtn == 'Find'">
                    <q-card-section>
                        <div class="text-h5">Filter</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <q-list>
                            <h6 class="location">Location</h6>

                            <q-expansion-item label="Central" class="Expand2">
                                <q-scroll-area style="height: 200px;width:auto">
                                    <q-card class="qCard bg-accent">
                                        <div v-for="station in stationCentral" :key="station" class="qcardsec">
                                            <q-checkbox v-model=selectedLoc :val=station.name :label=station.name
                                                color="black" />
                                        </div>
                                    </q-card>
                                </q-scroll-area>
                            </q-expansion-item>


                            <q-expansion-item label="East" class="Expand2">
                                <q-scroll-area style="height: 200px;width:100%">
                                    <q-card class="qCard bg-accent">
                                        <div v-for="station in stationEast" :key="station" class="qcardsec">
                                            <q-checkbox v-model=selectedLoc :val=station.name :label=station.name
                                                color="black" />
                                        </div>
                                    </q-card>
                                </q-scroll-area>
                            </q-expansion-item>

                            <q-expansion-item label="North" class="Expand2">
                                <q-scroll-area style="height: 200px;width:100%">
                                    <q-card class="qCard bg-accent">
                                        <div v-for="station in stationNorth" :key="station" class="qcardsec">
                                            <q-checkbox v-model=selectedLoc :val=station.name :label=station.name
                                                color="black" />
                                        </div>
                                    </q-card>
                                </q-scroll-area>
                            </q-expansion-item>

                            <q-expansion-item label="North-East" class="Expand2">
                                <q-scroll-area style="height: 200px;width:100%">
                                    <q-card class="qCard bg-accent">
                                        <div v-for="station in stationNorthEast" :key="station" class="qcardsec">
                                            <q-checkbox v-model=selectedLoc :val=station.name :label=station.name
                                                color="black" />
                                        </div>
                                    </q-card>
                                </q-scroll-area>
                            </q-expansion-item>

                            <q-expansion-item label="West" class="Expand2">
                                <q-scroll-area style="height: 200px;width:100%">
                                    <q-card class="qCard bg-accent">
                                        <div v-for="station in stationWest" :key="station" class="qcardsec">
                                            <q-checkbox v-model=selectedLoc :val=station.name :label=station.name
                                                color="black" />
                                        </div>
                                    </q-card>
                                </q-scroll-area>
                            </q-expansion-item>

                        </q-list>

                        <q-list>
                            <h6 class="location">Category</h6>
                            <div v-for="task in tasks" :key="task" class='Expand2'>
                                <q-checkbox v-model=category :val=task :label=task color="black" />
                            </div>

                        </q-list>
                    </q-card-section>
                </q-card>


            </div>

            <div class="containerAngel boxAngel" v-if="activeBtn == 'Find'">
                <figure v-for="post in searchForTask" v-bind:key="post.id">
                    <q-card class="my-card grid-item bg-white text-black">
                        <img :src="post.file">
                        <q-card-section class="fontAlign">
                            Mortal: {{ post.username }} <br>
                            Task: {{ post.name }}<br>
                            Date: {{ post.date }}<br>
                            Time: {{ post.time }}<br>
                            Amount: ${{ post.price }}<br>
                            <q-btn class="q-mt-md bg-secondary text-white" @click="iTask(post.id, post.username)">
                                <b>Details</b>
                            </q-btn>
                        </q-card-section>
                    </q-card>
                </figure>
            </div>
            <div v-else-if="activeBtn == 'Saved'" class="containerMortal boxMortal">
                <figure v-for="post in searchForSavedTask " v-bind:key="post.id">
                    <q-card class="my-card grid-item bg-white text-black">
                        <img :src="post.file">
                        <q-card-section class="fontAlign">
                            Mortal: {{ post.username }} <br>
                            Task: {{ post.name }}<br>
                            Date: {{ post.date }}<br>
                            Time: {{ post.time }}<br>
                            Amount: ${{ post.price }}<br>

                            <div v-if="completedCheck(post) == 'pending'" class="text-secondary text-bold">
                                Status: Pending
                            </div>
                            <div v-else-if="post.accepted != null" class="text-secondary text-bold">
                                Status: In Progress
                            </div>
                            <div v-else-if="activeCheck(post)" class="text-secondary text-bold">
                                Status: Saved
                            </div>

                            <div v-if="completedCheck(post) != 'pending'">
                                <q-btn class="q-mt-md bg-secondary text-white" @click="iTask(post.id, post.username)">
                                    <b>Details</b>
                                </q-btn>
                            </div>
                        </q-card-section>
                    </q-card>
                </figure>
            </div>

            <div v-else-if="activeBtn == 'Active'" class="containerMortal boxMortal">
                <figure v-for="post in searchForActiveTask " v-bind:key="post.id">
                    <q-card class="my-card grid-item bg-white text-black">
                        <img :src="post.file">
                        <q-card-section class="fontAlign">
                            Mortal: {{ post.username }} <br>
                            Task: {{ post.name }}<br>
                            Date: {{ post.date }}<br>
                            Time: {{ post.time }}<br>
                            Amount: ${{ ownOffer(post) }}<br>

                            <div v-if="completedCheck(post) == 'pending'" class="text-secondary text-bold">
                                Status: Pending
                            </div>
                            <div v-else-if="post.accepted != null" class="text-secondary text-bold">
                                Status: In Progress
                            </div>
                            <div v-else-if="activeCheck(post)" class="text-secondary text-bold">
                                Status: Offered
                            </div>

                            <div v-if="completedCheck(post) != 'pending'">
                                <q-btn class="q-mt-md bg-secondary text-white" @click="iTask(post.id, post.username)">
                                    <b>Details</b>
                                </q-btn>
                            </div>
                        </q-card-section>
                    </q-card>
                </figure>
            </div>
        </div>

        <!-- Mortal -->
        <div v-else>
            <q-btn class="bg-dark text-white" @click=goToTask>New Post</q-btn>
            <div class="containerMortal boxMortal">
                <figure v-for="post in MortalTasks" v-bind:key="post.id">
                    <div v-if="post.username == currUser">
                        <q-card class="my-card grid-item" style="background: white">
                            <img :src="post.file">
                            <q-card-section class="fontAlign">
                                Task: {{ post.name }}<br>
                                Date: {{ post.date }}<br>
                                Time: {{ post.time }}<br>
                                Amount: ${{ post.price }}<br>

                                <div v-if="post.accepted == null">
                                    <q-btn class="q-mr-lg bg-dark text-white" v-if="post.username == currUser"
                                        @click="iTask(post.id, post.username)" size="sm"><b>Edit</b>
                                    </q-btn>
                                    <q-btn v-if="offerCheck(post) != null" class="bg-dark text-white"
                                        @click="viewOffer(post.id)" size="sm"><b>View Offers</b></q-btn>

                                </div>

                                <div v-else-if="completedCheck(post) == 'pending'" class="text-dark text-bold">
                                    Status: Pending<br>
                                    <q-btn @click="confirmCompletion(post.id, post.username)"
                                        class="bg-dark text-white"> Confirm
                                    </q-btn>
                                </div>
                                <div v-else class="text-dark text-bold">
                                    Status: In Progress
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </figure>
            </div>
        </div>
    </q-scroll-area>

</template>

<script>
import axios from 'axios';
import { ref } from 'vue'
import { useCounterStore } from "@/store/store";
const storeName = useCounterStore()


export default {
    setup() {
        return {
            thumbStyle: {
                right: '4px',
                borderRadius: '5px',
                backgroundColor: '#27A69A',
                width: '5px',
                opacity: 0.75
            },

            barStyle: {
                right: '2px',
                borderRadius: '9px',
                width: '9px',
                opacity: 0.2
            }
        }
    },

    name: 'PageIndex',
    data() {
        return {
            isLoading: true,
            useData: false,
            useWifi: false,
            posts: {},
            angel: false,
            mortal: false,
            search: '',
            searchPost: [],
            activeBtn: 'Find',
            interactedTasks: [],
            Selection: 'Angel',
            currUser: storeName.username,
            targetP: 'angel',
            statusCount: ref(0),
            filter: false,
            filterLoc: [],
            filterCat: [],
            stationCentral: [{ name: 'Bartley' }, { name: 'Bayfront' }, { name: 'Beauty World' }, { name: 'Bencoolen' }, { name: 'Bendemeer' },
            { name: 'Bishan' }, { name: 'Boon Keng' }, { name: 'Botanic Gardens' }, { name: 'Braddell' }, { name: 'Bras Basah' },
            { name: 'Bugis' }, { name: 'Caldecott' }, { name: 'City Hall' }, { name: 'Clarke Quay' }, { name: 'Dakota' }, { name: 'Dhoby Ghaut' },
            { name: 'Downtown' }, { name: 'Esplanade' }, { name: 'Farrer Park' }, { name: 'Farrer Road' }, { name: 'Fort Canning' }
                , { name: 'Geylang Bahru' }, { name: 'HarbourFront' }, { name: 'Haw Par Villa' }, { name: 'Holland Village' }, { name: 'Jalan Besar' },
            { name: 'Kallang' }, { name: 'Kembangan' }, { name: 'Kent Ridge' }, { name: 'Labrador Park' }, { name: 'Lavender' }, { name: 'Little India' },
            { name: 'Lorong Chuan' }, { name: 'MacPherson' }, { name: 'Marina Bay' }, { name: 'Marina South Pier' }, { name: 'Marymount' }, { name: 'Mattar' },
            { name: 'Mountbatten' }, { name: 'Newton' }, { name: 'Nicoll Highway' }, { name: 'Novena' }, { name: 'one-north' }, { name: 'Orchard' }, { name: 'Outram Park' },
            { name: 'Pasir Panjang' }, { name: 'Paya Lebar' }, { name: 'Potong Pasir' }, { name: 'Promenade' }, { name: 'Queenstown' }, { name: 'Raffles Place' },
            { name: 'Redhill' }, { name: 'Rochor' }, { name: 'Sixth Avenue' }, { name: 'Somerset' }, { name: 'Stadium' }, { name: 'Stevens' }, { name: 'Tai Seng' },
            { name: 'Tan Kah Kee' }, { name: 'Tanjong Pagar' }, { name: 'Telok Ayer' }, { name: 'Telok Blangah' }, { name: 'Tiong Bahru' }, { name: 'Toa Payoh' },
            { name: 'Ubi' }, { name: 'Woodleigh' },],
            stationEast: [{ name: 'Aljunied' }, { name: 'Bedok' }, { name: 'Bedok North' }, { name: 'Bedok Reservoir' }, { name: 'Changi Airport' }, { name: 'Eunos' }, { name: 'Expo' }, { name: 'Kaki Bukit' },
            { name: 'Pasir Ris' }, { name: 'Simei' }, { name: 'Tampines' }, { name: 'Tampines East' }, { name: 'Tampines West' }, { name: 'Tanah Merah' }, { name: 'Upper Changi' },],
            stationNorth: [{ name: 'Admiralty' }, { name: 'Canberra' }, { name: 'Khatib' }, { name: 'Kranji' }, { name: 'Marsiling' }, { name: 'Sembawang' }, { name: 'Woodlands' }, { name: 'Woodlands North' },
            { name: 'Woodlands South' }, { name: 'Yio Chu Kang' }, { name: 'Yishun' },],
            stationNorthEast: [{ name: 'Ang Mo Kio' }, { name: 'Buangkok' }, { name: 'Hougang' }, { name: 'Kovan' }, { name: 'Punggol' }, { name: 'Sengkang' }, { name: 'Serangoon' },],
            stationWest: [{ name: 'Boon Lay' }, { name: 'Bukit Batok' }, { name: 'Bukit Gombak' }, { name: 'Bukit Panjang' }, { name: 'Buona Vista' }, { name: 'Cashew' },
            { name: 'Chinatown' }, { name: 'Chinese Garden' }, { name: 'Choa Chu Kang' }, { name: 'Clementi' }, { name: 'Commonwealth' }, { name: 'Dover' }, { name: 'Gul Circle' },
            { name: 'Hillview' }, { name: 'Joo Koon' }, { name: 'Jurong East' }, { name: 'King Albert Park' }, { name: 'Lakeside' }, { name: 'Pioneer' }, { name: 'Tuas Crescent' },
            { name: 'Tuas Link' }, { name: 'Tuas West Road' }, { name: 'Yew Tee' },],
            selectedLoc: ref([]),
            category: ref([]),
            tasks: [
                'Shopping', 'Physical', 'Assignment/Project', 'Hardware/Software'
            ],
            completeTaskDialog: false,
            focus_id: '',
            menuItems: [
                {
                    label: "My Account",
                    to: "/profile",
                    icon: "person"
                },
                {
                    label: "My Tasks",
                    to: "/profile",
                    icon: "assignment"
                },
                {
                    label: "Logout",
                    to: "/",
                    icon: "exit_to_app"
                }
            ],
            style: '',
            Active: false,
            hover: false,
            hover2: false,
            hover3: false,


        }
    }

    , methods: {
        getPost() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/TaskData.json')
                .then(response => {
                    this.posts = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getOwnTask() {
            axios.get('https://dreemteem-829c5-default-rtdb.firebaseio.com/Login/' + storeName.username + '/tasksInteracted.json')
                .then(response => {
                    this.interactedTasks = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        goToTask() {
            this.$router.push('/task')
        },
        iTask(id, username) {
            console.log(username)
            this.$router.push({ name: 'Task Details', params: { id: id, poster: username } })
        },
        FindBtn() {
            this.activeBtn = 'Find'
            console.log(this.activeBtn)
        },
        SavedBtn() {
            this.activeBtn = 'Saved'
            console.log(this.activeBtn)
        },
        ActiveBtn() {
            this.activeBtn = 'Active'
            console.log(this.activeBtn)
        },
        angelBtn() {
            this.Selection = 'Angel'
            this.targetP = 'angel'
            this.thumbStyle.backgroundColor = '#27A69A'


        },
        mortalBtn() {
            this.Selection = 'Mortal'
            this.targetP = 'mortal'
            this.thumbStyle.backgroundColor = '#C5CAE9'

        },
        viewOffer(id) {

            this.$router.push({ name: 'Offers', params: { id: id } })
        },
        ownOffer(iOffer) {
            if (iOffer.accepted == null) {
                for (var cOffer in iOffer.offer) {
                    if (cOffer == this.currUser) {
                        return iOffer.offer[cOffer].offer
                    }
                }
            } else {
                for (var eOffer in iOffer.accepted) {
                    if (eOffer == this.currUser) {
                        return iOffer.accepted[eOffer].offer
                    }
                }
            }
        },
        activeCheck(currPost) {
            console.log(currPost)
            var values = Object.values(currPost)

            var result = values.filter(post => post.angel == this.currUser && post.status == 'saved')
            console.log(result)

            return result
        },
        completedCheck(currPost) {

            if (currPost.accepted == null) {
                return null
            }
            else {
                var values = Object.values(currPost.accepted)
                var result = values.filter(post => post.status == 'pending')
                if (result.length > 0) {
                    return 'pending'
                }
                else {
                    return null
                }
            }

        },
        confirmCompletion(id, username) {
            this.$router.push({ name: 'Task Details', params: { id: id, poster: username } })
        },
        completeCheck(post) {
            if (post.accepted == null) {
                return null
            }
            else {
                var values = Object.values(post.accepted)
                var result = values.filter(accept => accept.status == 'completed')
                if (result.length == 0) {
                    return null
                }
                else {
                    return 'completed'
                }
            }
        },
        offerCheck(post) {
            if (post.offer == null) {
                return null
            }
            else {
                var values = Object.values(post.offer)
                var result = values.filter(offer => offer.status == 'offer')
                if (result.length == 0) {
                    return null
                }
                else {
                    return 'offer'
                }
            }
        },
        handleClick() {
            this.$router.push('/profile')
        },
        gotoSaved() {
            this.$router.push('/home/angel')
            // need to include a way to select the saved tasks filter
        },
        gotoChat() {
            this.$router.push('/chat')
        },
        exit() {
            storeName.username = ''
            storeName.email = ''
            storeName.name = ''
            this.$router.push({ name: 'Landing' })
        },


    },

    computed: {
        searchForTask() {
            var values = Object.values(this.posts)
            if (this.selectedLoc.length == 0 && this.category.length == 0) {
                var unFiltered = values.filter(post =>
                    post.name.toLowerCase().includes(this.search.toLowerCase()) &&
                    post.username != this.currUser &&
                    post.accepted == null
                )
                return unFiltered
            } else {
                var loc = Object.values(this.selectedLoc)
                var cat = Object.values(this.category)
                var filtered = values.filter(post =>
                    post.name.toLowerCase().includes(this.search.toLowerCase()) &&
                    (cat.filter(eCat => post.category == eCat).length > 0 ||
                        loc.filter(eLoc => post.loc == eLoc).length > 0) &&
                    post.username != this.currUser &&
                    post.accepted == null
                )
                return filtered
            }
        },
        searchForSavedTask() {
            var allTask = Object.values(this.posts)
            console.log(this.interactedTasks)
            if (this.interactedTasks == null || this.interactedTasks == undefined) {
                return []
            }
            if (this.interactedTasks.saved == null || this.interactedTasks.saved == undefined) {
                return []
            } else {
                var values = Object.values(this.interactedTasks.saved)
                var result = allTask.filter(post => (values.filter(task => task.taskid == post.id && task.status == 'saved' && post.accepted == null)).length > 0)
                console.log(result)
                return result
            }

        },
        searchForActiveTask() {
            var allTask = Object.values(this.posts)
            if (this.interactedTasks == null) {
                return []
            } else {
                var values = Object.values(this.interactedTasks.active)
                var result = allTask.filter(post =>
                    (values.filter(task =>
                        task.taskid == post.id && (task.status == 'accepted' || task.status == 'offer' || task.status == 'pending'))).length > 0)
                return result
            }
        },
        MortalTasks() {
            var values = Object.values(this.posts)
            var result = values.filter(post => post.username == this.currUser && this.completeCheck(post) != 'completed')
            return result
        },
        searchOffer() {
            var values = Object.values(this.posts)
            var result = values.filter(post => post.username == this.currUser && this.offerCheck(post) == 'offer')
            return result
        }


    },


    created() {
        this.getPost();
        this.getOwnTask();
        if (this.$route.params.targetP == 'angel') {
            this.targetP = 'angel'

        }
        else {
            this.targetP = 'mortal'
        }
        if (storeName.username == '') {
            this.$router.push('/login')
        }
        else {
            this.currUser = storeName.username
        }
        if (this.$route.params.saved == 'saved') {
            this.activeBtn = 'Saved'
        }
    },

}
</script>

<style lang="scss" scoped>
.Expand2 {
    margin-left: 1.5vw;
    text-align: left;
    font-size: medium;
    width: 100%
}

.location {
    text-align: left;
    margin-left: 1vw;
    margin-top: 1vh;
    margin-bottom: 1vh;
}

.qcardsec {
    /* float: left; */
    column-span: 1;
    text-align: left;
    font-size: small;
}

.qCard {
    column-count: 1;
    text-align: left;
    width: auto;
    display: block
}


.qcardsec {
    width: auto;
}

.dCard {
    width: 20vw;
    float: left;
    margin-left: 5vw;
    border-radius: 0px;
    display: block
}

.dActions {
    clear: left;
}

.search {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 37vw;

}

.actionbtns {
    width: 12vw;
}

.my-card {
    max-width: 250px;
    width: 100%;

}

.grid-item {
    max-width: 300px;
    display: block;
}

.boxAngel {
    padding: 0px 10% 50px 5%;
}

.boxMortal {
    padding: 50px 10%;
}

.fontAlign {
    text-align: left;
    padding-left: 30px;
}

.hamburgMenu {
    display: none;
}

.mainMenu {
    display: block
}

// ----------------------------------


/////////////////////////////////////////////////////////////

body {
    background-color: #000;
    font: 1.1em Arial, Helvetica, sans-serif;

}

img {
    max-width: 100%;
    display: block;
    border-radius: 10%;
}

figure {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
}

figure>q-card {
    grid-row: 1 / -1;
    grid-column: 1;
}

.containerAngel {
    column-count: 3;
    column-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
}

.containerMortal {
    column-count: 4;
    column-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
}


@media (max-width: 1190px) {
    .containerAngel {
        grid-template-columns: repeat(3, 1fr);
        column-count: 3;
        column-gap: 10px;
    }

    .containerMortal {
        column-count: 3;
        column-gap: 10px;
        grid-template-columns: repeat(5, 1fr);
    }

    .q-card {
        max-width: 100%;
    }

}

@media (max-width: 800px) {
    .containerAngel {
        grid-template-columns: repeat(2, 1fr);
        column-count: 2;
        column-gap: 10px;
    }

    .containerMortal {
        column-count: 2;
        column-gap: 10px;
        grid-template-columns: repeat(5, 1fr);
    }

    .q-card {
        max-width: 100%;
    }

    .qcardsec {
        /* float: left; */
        column-span: 1;
        text-align: left;
        font-size: x-small;
    }

}

@media (max-width:700px) {
    .dCard {
        display: none
    }
}

@media (max-width: 600px) {
    .containerAngel {
        grid-template-columns: repeat(2, 1fr);
        column-count: 2;
        column-gap: 10px;
    }

    .containerMortal {
        column-count: 2;
        column-gap: 10px;
        grid-template-columns: repeat(5, 1fr);
    }

    .q-card {
        max-width: 100%;
    }
}

@media (max-width: 500px) {
    .containerAngel {
        grid-template-columns: repeat(1, 1fr);
        column-count: 1;
        column-gap: 10px;
    }

    .q-card {
        max-width: 100%;
    }
}

@media (max-width:700px) {
    .hamburgMenu {
        display: block;
    }

    .mainMenu {
        display: none;
    }
}

body {
    background-color: #000;
    width: 100%;
    height: 100%;
}
</style>
