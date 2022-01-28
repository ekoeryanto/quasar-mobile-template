import { useNavigation } from './../compositions/navigation';
import { Pinia } from 'pinia';
import { boot } from 'quasar/wrappers';

import AppPage from 'src/components/AppPage.vue';
import PageHeader from 'components/PageHeader.vue';
import PageBody from 'components/PageBody.vue';
import PageHeaderBtnBack from 'components/PageHeaderBtnBack.vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $goBack: () => void;
  }
}

declare module 'vue-router' {
  interface Router {
    goBack: () => void;
  }
}

export default boot(({ app, router, store }) => {
  app.component('AppPage', AppPage);
  app.component('PageHeader', PageHeader);
  app.component('PageBody', PageBody);
  app.component('PageHeaderBtnBack', PageHeaderBtnBack);

  const navigation = useNavigation(store as unknown as Pinia);
  const goBack = () => {
    const segments = router.currentRoute.value.path.split('/');
    if (segments.length > 2) {
      segments.pop();
      const path = segments.join('/');
      router.push(path);
    }
  };

  router.goBack = goBack;

  app.config.globalProperties.goBack = goBack;
  app.provide('goBack', goBack);

  router.afterEach((to, from) => {
    const fromRootPath = `/${from.path.split('/')[1]}`;
    const toRootPath = `/${to.path.split('/')[1]}`;

    // if we navigated to a different 'section'
    if (fromRootPath !== toRootPath) {
      // don't use page transition
      navigation.usePageTransition = false;
    }
    // we navigated to the same section
    else {
      // use page transition
      navigation.usePageTransition = true;

      if (from.path === to.path && to.path !== toRootPath) {
        router.push(toRootPath);
      }
    }

    // update to property on nav item, whenever we change route
    updateNavItem();

    function updateNavItem() {
      const navItemIndex = navigation.navItems.findIndex(
        (navItem) => navItem.root === toRootPath
      );
      navigation.navItems[navItemIndex].to = to.path;
    }
  });
});
