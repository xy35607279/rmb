import { createLocalVue, shallowMount as sMount, mount as mnt } from '@vue/test-utils';
import ElementUI from 'element-ui';

const localVue = createLocalVue();
localVue.use(ElementUI);
export function shallowMount(component, config = {}) {
  return sMount(component, {
    ...config,
    localVue
  });
}

export function mount(component, config = {}) {
  return mnt(component, {
    ...config,
    localVue
  });
}

