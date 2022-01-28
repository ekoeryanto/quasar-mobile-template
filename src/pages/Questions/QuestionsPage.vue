<template>
  <app-page>
    <page-header>
      <template #title>Questions</template>
    </page-header>
    <page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">What is your Question?</div>

        <q-list bordered separator>
          <q-item v-ripple to="/questions/answer" clickable>
            <q-item-section>How do I do this?</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary" :name="$q.iconSet.chevron.right" />
            </q-item-section>
          </q-item>
          <q-item v-ripple to="/questions/answer" clickable>
            <q-item-section>How do I do that?</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary" :name="$q.iconSet.chevron.right" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </page-body>
  </app-page>
</template>

<script setup lang="ts"></script>
