<template>
  <v-app>
    <v-main class="pt-0">
      <v-container>
        <!-- <v-row class="ml-5 mt-1" dense> -->
        <!-- <v-col cols="2"> 入門日:{{ entranced }} </v-col>
            </v-row> -->
        <v-row class="ml-5 mt-1" dense>
          <!-- 道場生の姓名入力 -->
          <v-col cols="2">
            <ValidationProvider v-slot="{ errors, valid }" name="姓" rules="required|zenkaku">
              <v-badge left color="error" content="必須">
                <v-text-field
                  label="姓"
                  outlined
                  placeholder="田中"
                  required
                  :error-messages="errors"
                  :success="valid"
                  v-model="familyName"
                  @change="updateValue"
                />
              </v-badge>
            </ValidationProvider>
          </v-col>
          <v-col cols="2">
            <ValidationProvider v-slot="{ errors, valid }" name="名" rules="required|zenkaku">
              <v-text-field
                label="名"
                outlined
                placeholder="太郎"
                required
                :error-messages="errors"
                :success="valid"
                v-model="firstName"
                @change="updateValue"
              />
            </ValidationProvider>
          </v-col>
          <v-spacer />
          <!-- 保護者氏名入力 -->
          <v-col cols="2">
            <ValidationProvider v-slot="{ errors, valid }" name="保護者姓" rules="required|zenkaku">
              <v-badge left color="error" content="必須">
                <v-text-field
                  label="保護者姓"
                  outlined
                  placeholder="田中"
                  v-model="parentsFamilyName"
                  required
                  :error-messages="errors"
                  :success="valid"
                  @change="updateValue"
                />
              </v-badge>
            </ValidationProvider>
          </v-col>
          <v-col cols="2">
            <ValidationProvider v-slot="{ errors, valid }" name="保護者名" rules="required|zenkaku">
              <v-text-field
                label="保護者名"
                outlined
                placeholder="次郎"
                v-model="parentsFirstName"
                required
                :error-messages="errors"
                :success="valid"
                @change="updateValue"
              />
            </ValidationProvider>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row class="ml-5" dense>
          <v-col cols="2">
            <!-- 道場生姓名フリガナ入力 -->
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="フリガナ"
              rules="required|katakana"
            >
              <v-badge left color="error" content="必須">
                <v-text-field
                  label="フリガナ"
                  outlined
                  placeholder="タナカ"
                  v-model="familyNameKana"
                  required
                  :error-messages="errors"
                  :success="valid"
                  @change="updateValue"
                />
              </v-badge>
            </ValidationProvider>
          </v-col>
          <v-col cols="2">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="フリガナ"
              rules="required|katakana"
            >
              <v-text-field
                label="フリガナ"
                outlined
                placeholder="タロウ"
                v-model="firstNameKana"
                required
                :error-messages="errors"
                :success="valid"
                @change="updateValue"
              />
            </ValidationProvider>
          </v-col>
          <v-col />
          <v-col cols="2">
            <!-- 道場生姓名フリガナ入力 -->
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="フリガナ"
              rules="required|katakana"
            >
              <v-badge left color="error" content="必須">
                <v-text-field
                  label="フリガナ"
                  outlined
                  placeholder="タナカ"
                  v-model="familyNameKana"
                  required
                  :error-messages="errors"
                  :success="valid"
                  @change="updateValue"
                />
              </v-badge>
            </ValidationProvider>
          </v-col>
          <v-col cols="2">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="フリガナ"
              rules="required|katakana"
            >
              <v-text-field
                label="フリガナ"
                outlined
                placeholder="タロウ"
                v-model="parentsFirstNameKana"
                required
                :error-messages="errors"
                :success="valid"
                @change="updateValue"
              />
            </ValidationProvider>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row class="ml-5" dense>
          <v-col cols="6">
            <!-- 性別入力 -->
            <ValidationProvider v-slot="{ errors, valid }" name="性別" rules="required">
              <v-badge left color="error" content="必須">
                <v-radio-group
                  v-model="gender"
                  required
                  :error-messages="errors"
                  :success="valid"
                  row
                  @change="updateValue"
                >
                  <template v-slot:label>
                    <div>性別：</div>
                  </template>
                  <v-radio value="male">
                    <template v-slot:label>
                      <div>男性</div>
                    </template>
                  </v-radio>
                  <v-radio value="female">
                    <template v-slot:label>
                      <div>女性</div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-badge>
            </ValidationProvider>
          </v-col>
          <v-col cols="2">
            <!-- 続柄入力 -->
            <ValidationProvider v-slot="{ errors, valid }" name="続柄" rules="required|zenkaku">
              <v-badge left color="error" content="必須">
                <v-text-field
                  label="続柄"
                  outlined
                  placeholder="父"
                  v-model="relationship"
                  required
                  :error-messages="errors"
                  :success="valid"
                  @change="updateValue"
                />
              </v-badge>
            </ValidationProvider>
          </v-col>
          <v-spacer />
        </v-row>
        <v-row dense>
          <v-col cols="2" class="ml-5">
            <!-- 生年月日入力 -->
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <ValidationProvider v-slot="{ errors, valid }" name="生年月日" rules="required">
                  <v-badge left color="error" content="必須">
                    <v-text-field
                      label="生年月日"
                      v-model="date"
                      readonly
                      v-on="on"
                      :error-messages="errors"
                      :success="valid"
                      @change="updateValue"
                    />
                  </v-badge>
                </ValidationProvider>
              </template>
              <v-date-picker
                ref="picker"
                locale="jp-ja"
                v-model="date"
                :day-format="date => new Date(date).getDate()"
                :max="new Date().toISOString().substr(0, 10)"
                :picker-date="pickerDate"
                min="1950-01-01"
                @change="
                  save;
                  updateValue;
                "
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-spacer />
          <v-col cols="2">
            <!-- 連絡先入力 -->
            <ValidationProvider v-slot="{ errors, valid }" name="連絡先" rules="phone|required">
              <v-badge left color="error" content="必須">
                <v-text-field
                  label="連絡先"
                  outlined
                  placeholder="00000000000"
                  v-model="phoneNumber"
                  :error-messages="errors"
                  :success="valid"
                  @change="updateValue"
                />
              </v-badge>
            </ValidationProvider>
          </v-col>
          <v-spacer />
        </v-row>
        <small class="ml-6">※郵便番号を入力すると自動で住所が出力されます。</small>
        <v-row dense>
          <v-col cols="2" class="ml-5">
            <!-- 郵便番号入力 -->
            <ValidationProvider v-slot="{ errors, valid }" name="郵便番号" rules="required|numeric">
              <v-badge left color="error" content="必須">
                <v-text-field
                  label="郵便番号"
                  outlined
                  placeholder="1234567"
                  v-model="zipcode"
                  :error-messages="errors"
                  :success="valid"
                  @blur="fetchAddress"
                  @change="updateValue"
                />
              </v-badge>
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-col class="ml-2">
          <!-- 住所・番地入力 -->
          <ValidationProvider v-slot="{ errors, valid }" name="住所" rules="required">
            <v-badge left color="error" content="必須">
              <v-text-field
                label="住所・番地"
                outlined
                placeholder="長岡京市〇〇"
                v-model="address"
                :error-messages="errors"
                :success="valid"
                style="width:365px;"
                @change="updateValue"
              />
            </v-badge>
          </ValidationProvider>
        </v-col>
        <v-row dense>
          <v-col cols="5" class="ml-5">
            <!-- 建物名・マンション名入力 -->
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="建物名・マンション名"
              rules="zenkaku"
            >
              <v-badge left color="grey lighten-1" content="任意">
                <v-text-field
                  label="建物名・マンション名"
                  outlined
                  placeholder="〇〇マンション101号室"
                  v-model="building"
                  :error-messages="errors"
                  :success="valid"
                  style="width:365px;"
                  @change="updateValue"
                />
              </v-badge>
            </ValidationProvider>
          </v-col>
        </v-row>
        <v-col>
          <ValidationProvider v-slot="{ errors, valid }" name="備考欄" rules="zenkaku">
            <v-badge left color="grey lighten-1" content="任意">
              <!-- 備考欄入力 -->
              <v-textarea
                label="備考欄"
                outlined
                placeholder="例）喘息持ちです"
                v-model="message"
                :error-messages="errors"
                :success="valid"
                style="width:365px;"
                @change="updateValue"
              />
            </v-badge>
          </ValidationProvider>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import axiosJsonpAdapter from 'axios-jsonp';
const ZIPCODE_API_URL = 'http://zipcloud.ibsnet.co.jp/api/search';
export default {
  name: 'Student',
  data() {
    return {
      familyName: '',
      firstName: '',
      parentsFamilyName: '',
      parentsFirstName: '',
      familyNameKana: '',
      firstNameKana: '',
      parentsFirstNameKana: '',
      gender: '',
      relationship: '',
      pickerDate: '',
      phoneNumber: '',
      address: '',
      zipcode: '',
      date: null,
      menu: false,
      building: '',
      message: '',
      // updateValue: null,
    };
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
      // 再入力に備えて、入力が終わったら同期する
      this.pickerDate = date;
    },
    async fetchAddress() {
      // 郵便番号のバリデーションチェック
      const reg = /^\d{7}$/;
      if (!reg.test(this.zipcode)) return;
      // 住所apiを叩く
      const res = await this.$axios.$get(ZIPCODE_API_URL, {
        adapter: axiosJsonpAdapter,
        params: {
          zipcode: this.zipcode,
        },
      });
      // 存在しない郵便番号でapiを叩くと200以外のステータスが返ってくる
      if (res.status !== 200) return;
      if (res.results === null) return;
      // 返却されたデータを挿入する
      this.address = res.results[0].address1 + res.results[0].address2 + res.results[0].address3;
    },
    updateValue() {
      this.$emit(
        'change',
        this.familyName,
        this.firstName,
        this.familyNameKana,
        this.firstNameKana,
        this.parentsFamilyName,
        this.parentsFirstName,
        this.parentsFirstNameKana,
        this.gender,
        this.relationship,
        this.date,
        this.pickerDate,
        this.phoneNumber,
        this.zipcode,
        this.address,
        this.building,
        this.message
      );
    },
  },
  computed: {
    // 入門日を記載する
  },
  watch: {
    menu(val) {
      val &&
        setTimeout(
          () =>
            // 年から選ぶようにする
            (this.$refs.picker.activePicker = 'YEAR')
          // 選び始めたら初期化
          // (this.pickerDate = null)
        );
    },
  },
};
</script>
