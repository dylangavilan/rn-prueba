import Navigator from './navigator';
import { Provider } from 'react-redux';
import store from './app/store.js';

export default function App() {

  return (
    <Provider store={store}>
        <Navigator />
    </Provider>
  );
}

