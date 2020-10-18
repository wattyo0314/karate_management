<template>
  <v-app>
    <header>
      <v-app-bar color="primary" app clipped-left>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>道場生管理</v-toolbar-title>
        <v-spacer />
        <v-toolbar-title class="center">渡邊佐資</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer app v-model="drawer" clipped fixed color="blue lighten-3">
        <v-container>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class='title'>
                  管理メニュー
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          <v-divider />
          <v-list dense nav>
            <nuxt-link to="#">
              <v-list-item v-for="nav_list in navlists" :key="nav_list.name">
                <v-list-item-icon>
                  <v-icon>
                    {{nav_list.icon}}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    {{nav_list.name}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </nuxt-link>
          </v-list>
        </v-container>
        </v-navigation-drawer>
    </header>
    <Nuxt/>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      navlists: [
        {name: '生徒管理',icon: 'mdi-vuetify'},
        {name: 'Customization',icon: 'mdi-cogs'},
      ]
    }
  }
}
</script>

<style scoped>

</style>