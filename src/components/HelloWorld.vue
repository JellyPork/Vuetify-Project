<template>
  <v-container>
    
    <v-app-bar color="yellow" app>
      
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="goToPage(item.route)">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="200"
          :key="imageUrl"
          :src="imageUrl"
          cover
          class="text-white"
        >
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ms-1 mb-2">Today</div>

          
          <v-card-actions>
            <v-btn prepend-icon="mdi-vuetify" variant="outlined" @click="reloadImage">
              Reload
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        {
          title: 'Home',
          route: '/'
        },
        {
          title: 'Data',
          route: '/data-page'
        }
      ],
      imageUrl: 'https://random.imagecdn.app/500/150',
      messages: [
        {
          from: 'Me',
          time: '8:00 AM',
          message: 'Good morning!',
          color: 'green',
        },
        {
          from: 'Friend',
          time: '8:15 AM',
          message: 'Good morning! How are you?',
          color: 'blue',
        },
        {
          from: 'Me',
          time: '8:20 AM',
          message: "I'm doing well, thanks. How about you?",
          color: 'green',
        },
        {
          from: 'Friend',
          time: '8:25 AM',
          message: "I'm doing pretty good too. Just a bit tired.",
          color: 'blue',
        },
      ],
    };
  },
  methods: {
    reloadImage() {
      this.imageUrl = "https://random.responsiveimages.io/v1/docs" + new Date().getTime();
    },
    goToPage(route) {
      this.$router.push(route)
    }
  }
};
  
</script>