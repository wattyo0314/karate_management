<template>
  <v-container>
    <v-main>
      <v-row>
        <v-col>
          <v-row justify="center">
            <v-icon class="ml-5">
              mdi-account
            </v-icon>
            <h1 class="ml-5">{{ title }}</h1>
            <v-spacer></v-spacer>
          </v-row>
          <v-divider color="blue" />
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
