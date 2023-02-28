/*<template>
  <div>
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
</div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import axios from 'axios';

const posts = reactive([]);
const users = reactive([]);
const loading = ref(true);

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];
const userMap = computed(() => {
  // Create a map of user IDs to user objects
  return users.value.reduce((map, user) => {
    map[user.id] = user;
    return map;
  }, {});
});

const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data;
    console.log(posts.value);
  } catch (error) {
    console.log(error);
  }
};

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    users.value = response.data;
    console.log(users.value);
  } catch (error) {
    console.log(error);
  }
};

const fetchData = async () => {
  loading.value = true;
  await Promise.all([fetchPosts(), fetchUsers()]);
  loading.value = false;
};

const getUser = (userId) => {
  // Look up the user object for a given user ID
  return userMap.value[userId];
};

onMounted(fetchData);

</script>
*/