import { createPinia, Pinia } from 'pinia';
import { unref, Ref } from 'vue';
import { StoreParams } from '@quasar/app';
import { HasSsr } from 'quasar';
// import example from './module-example'
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

declare module '@quasar/app' {
  interface QSsrContext {
    state?: Ref<never> | never | null;
  }
}

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Pinia;
  }
}

declare module 'pinia' {
  interface Pinia {
    replaceState(state: never): void;
  }
}

export default (params: StoreParams) => {
  const pinia = createPinia();

  if (process.env.SERVER && params?.ssrContext) {
    params.ssrContext.onRendered(function () {
      // unwrapping the state for serialization
      if (params.ssrContext?.state) {
        params.ssrContext.state = unref(params.ssrContext?.state);
      }
    });
  }

  if (process.env.CLIENT) {
    pinia.replaceState = function (state: never) {
      pinia.state.value = state;
    };
  }

  return pinia;
};
