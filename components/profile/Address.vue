<template>
<div>
    <small class="ml-6">※郵便番号を入力すると自動で住所が出力されます。</small>
    <v-row dense>
      <v-col cols="2" class="ml-5">
        <!-- 郵便番号入力 -->
        <ValidationProvider v-slot="{ errors, valid}" name="郵便番号" rules="required|numeric">
          <v-badge left color="error" content="必須">
            <v-text-field
            label="郵便番号"
            outlined
            placeholder="1234567"
            v-model="zipcode"
            :error-messages="errors"
            :success='valid'
            @blur="fetchAddress" />
          </v-badge>
        </ValidationProvider>
      </v-col>
    </v-row>
    <v-col class="ml-2">
    <!-- 住所・番地入力 -->
    <ValidationProvider v-slot="{ errors, valid}" name="住所" rules="required">
      <v-badge left color="error" content="必須" >
        <v-text-field
        label="住所・番地"
        outlined
        placeholder="長岡京市〇〇"
        v-model="address"
        :error-messages="errors"
        :success='valid'
        style="width:365px;"/>
      </v-badge>
    </ValidationProvider>
    </v-col>
</div>
</template>

<script>
import axiosJsonpAdapter from 'axios-jsonp'
const ZIPCODE_API_URL = 'http://zipcloud.ibsnet.co.jp/api/search'
export default {
  data() {
    return {
      address: '',
      zipcode: '',
    }
  },
  methods: {
    async fetchAddress() {
      // 郵便番号のバリデーションチェック
      const reg = /^\d{7}$/
      if (!reg.test(this.zipcode)) return
      // 住所apiを叩く
      const res = await this.$axios.$get(ZIPCODE_API_URL, {
        adapter: axiosJsonpAdapter,
        params: {
          zipcode: this.zipcode
        }
      })
      // 存在しない郵便番号でapiを叩くと200以外のステータスが返ってくる
      if (res.status !== 200) return
      if (res.results === null) return
       // 返却されたデータを挿入する
      this.address = res.results[0].address1 + res.results[0].address2 + res.results[0].address3
    },
  },
}
</script>