import MainNavigator from './screens';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

export default function App() {

  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
