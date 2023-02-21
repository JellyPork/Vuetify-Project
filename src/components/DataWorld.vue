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

    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            User
          </th>
          <th class="text-left">
            Posts
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td v-for="(post, index) in posts.slice(0, 1)" :key="index">{{post.title}}</td>
        </tr>
      </tbody>
    </v-table>

  </v-container>
</template>

<script>
import axios from 'axios';

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

      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Body', value: 'body' }
      ],
      userHeaders: [
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' }
      ],

      posts: [],
      users: [],
      loading: true,
      search: '',

      
    };
    
  },
  methods: {
    
    goToPage(route) {
      this.$router.push(route)
    },
    
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.posts = response.data;
        console.log(this.posts);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
        console.log(this.users);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchData() {
      this.loading = true;
      await Promise.all([this.fetchPosts(), this.fetchUsers()]);
      this.loading = false;
    },
  },
  mounted() {
    this.fetchData();
  }
};
</script>