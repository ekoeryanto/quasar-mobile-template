<template>
  <q-btn
    :icon="$q.iconSet.chevron.left"
    color="primary"
    flat
    rounded
    dense
    no-caps
    @click="$router.goBack" />
</template>

<script setup lang="ts"></script>
