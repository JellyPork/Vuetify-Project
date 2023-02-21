<template>
  <v-app-bar color="yellow" app>
    <v-btn icon @click="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="goToPage(item.route)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Home",
          route: "/",
        },
        {
          title: "Data",
          route: "/data-page",
        },
      ],
    };
  },

  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
  },
};
</script>
