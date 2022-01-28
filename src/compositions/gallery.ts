import { defineStore } from 'pinia';

export const useGallery = defineStore('$gallery', {
  state: () => ({
    images: [
      {
        id: 'id1',
        url: '/images/1.jpg',
        caption: 'Tiger',
      },
      {
        id: 'id2',
        url: '/images/2.jpg',
        caption: 'Man',
      },
      {
        id: 'id3',
        url: '/images/3.jpg',
        caption: 'Mountains',
      },
      {
        id: 'id4',
        url: '/images/4.jpg',
        caption: 'Road in Mountains',
      },
      {
        id: 'id5',
        url: '/images/5.jpg',
        caption: 'Nightime Hills',
      },
      {
        id: 'id6',
        url: '/images/6.jpg',
        caption: 'Cute dog',
      },
    ],
  }),

  actions: {
    getImage(imageId: string) {
      return this.images.filter((image) => image.id === imageId)[0];
    },
  },
});
