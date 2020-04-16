import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Game from './pages/Game';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Game: { screen: Game },
    },
    {
      defaultNavigationOptions: {
        headerShown: false,
      },
    },
  ),
);

export default Routes;
