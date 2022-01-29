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
            :src="image"
            class="no-pointer-events"
            no-transition
            :ratio="1"
            no-spinner />
          <div class="q-pa-lg">
            <div class="text-h5 q-mb-md">{{ $route.params.id }}</div>
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

let route = useRoute();
let image = ref<string | null>(null);

onActivated(() => {
  image.value = `https://picsum.photos/id/${route.params.id}/600`;
});

onDeactivated(() => {
  image.value = null;
});
</script>
