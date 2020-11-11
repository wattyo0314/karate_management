<template>
  <v-app>
    <Header />
    <Title :title="title" />
    <Nuxt />
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue';
import Title from '~/components/Title.vue';
export default {
  components: {
    Header,
    Title,
  },
  data() {
    return {
      title: '',
    };
  },
  created() {
    this.$nuxt.$on('updateTitle', this.setTitle);
  },
  methods: {
    setTitle(title) {
      this.title = title || '';
    },
  },
};
</script>
