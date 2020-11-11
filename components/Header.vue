<template>
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
            <v-list-item-title class="title">
              管理メニュー
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list dense nav>
          <v-list-group
            v-for="nav_list in nav_lists"
            :key="nav_list.name"
            :prepend-icon="nav_list.icon"
            no-action
            :append-icon="nav_list.lists ? undefined : ''"
          >
            <template v-slot:activator>
              <v-list-item v-if="nav_list.lists">
                <v-list-item-content>
                  <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-else :to="nav_list.link">
                <v-list-item-content>
                  <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item v-for="list in nav_list.lists" :key="list.name" :to="list.link">
              <v-list-item-content>
                <v-list-item-title>{{ list.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      nav_lists: [
        {
          name: '生徒管理',
          icon: 'mdi-account',
          link: '',
          lists: [
            {
              name: '生徒一覧',
              link: '/',
            },
            {
              name: '生徒登録',
              link: '/add',
            },
          ],
        },
      ],
    };
  },
};
</script>
