import { expect } from 'chai';
import { shallowMount } from '@/../test/utils';
import Login from '@/views/login/login.vue';

describe('Login.vue', () => {
  it('params presentation', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Login, {
      propsData: { msg },
      mocks: {
        $t: m => m
      }
    });
    expect(wrapper.vm.params).to.be.deep.equal({ name: '', password: '' });
  });
});
