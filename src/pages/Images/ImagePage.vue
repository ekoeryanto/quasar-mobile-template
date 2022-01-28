<template>
  <app-page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back label="Images" />
      </template>
      <template #title>Image</template>
    </page-header>
    <page-body>
      <transition
        appear
        enter-active-class="animated fadeIn slower"
        leave-active-class="animated fadeOut slower">
        <div v-if="image">
          <q-img
            :src="image.url"
            class="no-pointer-events"
            no-transition
            no-spinner />
          <div class="q-pa-lg">
            <div class="text-h5 q-mb-md">{{ image.caption }}</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              deserunt explicabo illo quidem distinctio sint, consectetur illum
              non, necessitatibus esse incidunt. Facilis accusantium suscipit
              enim quod unde quae itaque sit.
            </p>
          </div>
        </div>
      </transition>
    </page-body>
  </app-page>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useGallery } from 'src/compositions/gallery';

let route = useRoute();
let gallery = useGallery();
let image = ref();

onActivated(() => {
  image.value = gallery.getImage(route.params?.id.toString());
});

onDeactivated(() => {
  image.value = null;
});
</script>
