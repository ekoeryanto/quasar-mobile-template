<template>
  <div class="page absolute-top fit bg-white shadow-4">
    <div
      v-touch-swipe.mouse.right="handleSwipeRight"
      class="page-nudger fit"
      :class="{ 'nudge-left': hasActiveChildPage }">
      <slot />
    </div>

    <router-view v-slot="{ Component }">
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        :css="
          navigation.usePageTransition && !navigation.iosBrowserSwipingBack
        ">
        <keep-alive>
          <component
            :is="Component"
            @page-activated="hasActiveChildPage = true"
            @page-deactivated="hasActiveChildPage = false" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { ref, onActivated, onDeactivated, computed } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { useNavigation } from 'src/compositions/navigation';

let navigation = useNavigation();

let emit = defineEmits(['pageActivated', 'pageDeactivated']);

onActivated(() => {
  emit('pageActivated');
});
onDeactivated(() => {
  emit('pageDeactivated');
  if (isIosBrowser.value) {
    navigation.iosBrowserSwipingBack = false;
  }
});

let router = useRouter();
let { platform } = useQuasar();
let hasActiveChildPage = ref(false);

let isIosBrowser = computed(
  () => platform.is.ios && !platform.is.cordova && !platform.is.capacitor
);

const handleSwipeRight = () => {
  if (isIosBrowser.value) {
    navigation.iosBrowserSwipingBack = true;
  } else {
    router.goBack();
  }
};
</script>
