<template>
  <app-page>
    <page-header>
      <template #title>Images</template>
    </page-header>
    <page-body>
      <div class="row">
        <router-link
          v-for="image in gallery.images"
          :key="image.id"
          :to="`/images/${image.id}`"
          class="col-6">
          <q-img :src="image.url" :ratio="1" />
        </router-link>
      </div>
    </page-body>
  </app-page>
</template>

<script setup lang="ts">
import { useGallery } from 'src/compositions/gallery';
const gallery = useGallery();
</script>
