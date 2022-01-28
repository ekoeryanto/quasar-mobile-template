<template>
  <q-layout
    view="lHh Lpr lFf"
    :class="{ 'ios-browser-swiping-back': navigation.iosBrowserSwipingBack }">
    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        no-caps>
        <q-route-tab
          v-for="navItem in navigation.navItems"
          :key="navItem.root"
          :to="navItem.to"
          :label="navItem.label"
          :icon="navItem.icon" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useNavigation } from 'src/compositions/navigation';

const navigation = useNavigation();
</script>
