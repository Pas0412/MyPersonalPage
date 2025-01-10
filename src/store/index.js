import { createStore } from 'vuex';
import friendModule from './friend';
import statistic from './statistic';
import collection from './collection';

export default createStore({
  modules: {
    friend: friendModule,
    statistic: statistic,
    collection: collection,
  }
});