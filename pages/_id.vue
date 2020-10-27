<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-card-title>
                                    <StudentDetail :firstName="student.firstName">
                                </StudentDetail>
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
                student: ''
            }
        },
        components: { StudentDetail },
        created () {
            const studentId = this.$route.params.id
            console.log(studentId)
            db.collection('student').where('docId', '==', studentId).get().doc.data()
        },
        computed: {
        ...mapGetters({students: 'getStudents' })
        },
    }
</script>
