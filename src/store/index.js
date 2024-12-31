import { createStore } from 'vuex';
import friendModule from './friend';

export default createStore({
  modules: {
    friend: friendModule
  }
});