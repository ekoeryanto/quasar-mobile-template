<template>
  <app-page>
    <page-header>
      <template #title>Home</template>
    </page-header>
    <page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">Let's create a Badass iOS app!</div>

        <q-btn
          to="/home/child"
          label="Go to Child Page"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps />

        <q-btn
          to="/questions/answer"
          label="Go to Child Page in another section"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps />

        <p v-for="i in 20" :key="i">
          Lorems ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          aperiam suscipit blanditiis iusto earum, velit adipisci sequi ex
          ipsum, aut non. Doloremque iusto eius at quibusdam blanditiis ex vero
          eaque?
        </p>
      </div>
    </page-body>
  </app-page>
</template>

<script setup lang="ts"></script>
