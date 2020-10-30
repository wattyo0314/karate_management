<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col>
                        <v-row justify="center">
                            <v-icon class="ml-5">
                            mdi-account
                            </v-icon>
                            <h1 class="ml-5">生徒情報</h1>
                            <v-spacer></v-spacer>
                        </v-row>
                        <v-divider color="blue"/>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="10">
                        <v-card>
                            <v-list dense>
                                <v-list-item-group>
                                    <!-- 名前表示欄 -->
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title class="font-weight-black">名前</v-list-item-title>
                                        </v-list-item-content>
                                        <v-divider class="mx-4"
                                        vertical></v-divider>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                {{this.familyName}} {{this.firstName}}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-divider></v-divider>
                                    <!-- カナ表示欄 -->
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title class="font-weight-black">名前カナ</v-list-item-title>
                                        </v-list-item-content>
                                        <v-divider class="mx-4"
                                        vertical></v-divider>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                {{this.familyNameKana}} {{this.firstNameKana}}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-divider></v-divider>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title class="font-weight-black">性別</v-list-item-title>
                                        </v-list-item-content>
                                        <v-divider class="mx-4"
                                        vertical></v-divider>
                                        <v-list-item-content>
                                            <v-list-item-title v-if="this.gender == 'male'">
                                                男性
                                            </v-list-item-title>
                                            <v-list-item-title v-else>
                                                女性
                                            </v-list-item-title>
                                        </v-list-item-content>
                                </v-list-item>
                                    <v-divider></v-divider>
                                </v-list-item-group>
                            </v-list>
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
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                firstName:'',
                familyName: '',
                firstNameKana: '',
                familyNameKana: '',
                gender: 'male',
            }
        },
        created () {
            const studentId = this.$route.params.id
            db.collection('students').doc(studentId).get().then(doc =>{
                const studentData = (doc.id, '=>', doc.data());
                this.firstName = studentData.firstName
                this.familyName = studentData.familyName
                this.familyNameKana = studentData.familyNameKana
                this.firstNameKana = studentData.firstNameKana
                this.gender = studentData.gender
                console.log(this.gender)
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
