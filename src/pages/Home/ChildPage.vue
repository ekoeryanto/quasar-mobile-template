<template>
  <app-page>
    <page-header>
      <template #buttons-left>
        <page-header-btn-back label="Home" />
      </template>
      <template #title>Child</template>
    </page-header>
    <page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">This is a Child Page!</div>

        <q-btn
          to="/home/child/grandchild"
          label="Go to Grandchild Page"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps />

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
