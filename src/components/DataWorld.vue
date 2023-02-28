<template>
  <v-container>
    

    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Autor
          </th>
          <th class="text-left">
            Titulo
          </th>
          <th class="text-left">
            Posts
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.title">
          <td>{{ getUser(post.userId).name }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
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

      posts: [],
      users: [],
      loading: true,
      search: '',

      
    };
    
  },

  computed: {
    userMap() {
      // Create a map of user IDs to user objects
      return this.users.reduce((map, user) => {
        map[user.id] = user;
        return map;
      }, {});
    }
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

    getUser(userId) {
      // Look up the user object for a given user ID
      return this.userMap[userId];
    },
  },
  mounted() {
    this.fetchData();
  }
};


</script>


