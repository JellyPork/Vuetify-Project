<template>
  <v-container>
    
  

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
            <v-btn prepend-icon="mdi-vuetify" variant="outlined" @click="reloadImage()">
              Reload
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
const imageUrl = ref('https://random.imagecdn.app/500/150');
function reloadImage(){
  this.imageUrl = "https://random.responsiveimages.io/v1/docs" + new Date().getTime();
}
</script>