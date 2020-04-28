import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Navigator from './src/navigation/Appnavigator';

const App = () => (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );

export default App;