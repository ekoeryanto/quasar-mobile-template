<template>
  <app-page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back label="Questions" />
      </template>
      <template #title>Answer</template>
    </page-header>
    <page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">How do I do this?</div>

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

<script setup lang="ts"></script>
