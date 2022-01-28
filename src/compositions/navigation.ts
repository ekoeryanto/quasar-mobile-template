import { defineStore } from 'pinia';
import {
  mdiHomeOutline as iHome,
  mdiHeadQuestionOutline as iQuestion,
  mdiImageAlbum as iGallery,
} from '@quasar/extras/mdi-v6';
export const useNavigation = defineStore('$navigation', {
  state: () => ({
    navItems: [
      {
        root: '/home',
        to: '/home',
        icon: iHome,
        label: 'Home',
      },
      {
        root: '/questions',
        to: '/questions',
        icon: iQuestion,
        label: 'Questions',
      },
      {
        root: '/images',
        to: '/images',
        icon: iGallery,
        label: 'Images',
      },
    ],

    usePageTransition: false,
    iosBrowserSwipingBack: false,
  }),
});
