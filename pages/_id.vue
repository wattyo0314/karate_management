<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-card-title>
                                    <StudentDetail :firstName="this.firstName">
                                </StudentDetail>
                                <!-- 名前：{{this.firstName}} -->
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <div class="itemContainer">
        </div>
        <div class="button">
            <nuxt-link to="/">戻る</nuxt-link>
        </div>
    </v-app>
</template>

<script>
    import axios from 'axios';
    import { db } from '~/plugins/firebase.js'
    import StudentDetail from '~/components/StudentDetail.vue'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                firstName :'',
                student: []
            }
        },
        components: { StudentDetail },
        created () {
            const studentId = this.$route.params.id
            db.collection('students').doc(studentId).get().then(doc =>{
                const studentData = (doc.id, '=>', doc.data());
                this.firstName = studentData.firstName
            })
            // db.collection('students').doc(studentId).get().then((query) =>{
            //     query.forEach((doc) =>{
            //         const studentData = doc.data();
            //         student.push([data.firstName])
            //         this.firstName = data.firstName;
            //         console.log(this.firstName)
            //     })
            // })
        },
        computed: {
        ...mapGetters({students: 'getStudents' })
        },
    }
</script>
