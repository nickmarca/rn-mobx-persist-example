import {observable, decorate, action} from 'mobx';
import {create, persist} from 'mobx-persist';
import {AsyncStorage} from 'react-native';

const hydrate = create({
   storage: AsyncStorage,
});

class Store {
   count = 0;

   add() {
      this.count++;
   }
}

const schema = {
  count: true,
};

decorate(Store, {
   count: observable,
   add: action.bound,
});

const store = new Store();

const persistingStore = persist(schema)(store);
hydrate('count', persistingStore);

export default persistingStore;