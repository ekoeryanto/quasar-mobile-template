<template>
  <app-page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back label="Child" />
      </template>
      <template #title>Grandchild</template>
    </page-header>
    <page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">How deep is this?</div>
        <q-option-group
          v-model="group"
          :options="options"
          color="primary"
          class="q-mb-md"
          inline />
        <p v-for="i in 20" :key="i">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          aperiam suscipit blanditiis iusto earum, velit adipisci sequi ex
          ipsum, aut non. Doloremque iusto eius at quibusdam blanditiis ex vero
          eaque?
        </p>
      </div>
    </page-body>
  </app-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let group = ref('op1');

let options = [
  {
    label: 'Kinda deep',
    value: 'op1',
  },
  {
    label: 'Very deep',
    value: 'op2',
  },
  {
    label: 'So Deep!',
    value: 'op3',
  },
];
</script>
