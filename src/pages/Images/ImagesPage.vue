<template>
  <app-page>
    <page-header>
      <template #title>Images</template>
    </page-header>
    <page-body>
      <div class="row">
        <router-link
          v-for="image in 25"
          :key="image"
          :to="`/images/${image}`"
          class="col-6">
          <q-img :src="`https://picsum.photos/id/${image}/600`" :ratio="1" />
        </router-link>
      </div>
    </page-body>
  </app-page>
</template>

<script setup lang="ts"></script>
