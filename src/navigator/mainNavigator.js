import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn411158792Navigator from '../features/SignIn411158792/navigator';
import BlankScreen10158790Navigator from '../features/BlankScreen10158790/navigator';
import BlankScreen9158789Navigator from '../features/BlankScreen9158789/navigator';
import BlankScreen8158788Navigator from '../features/BlankScreen8158788/navigator';
import BlankScreen7158787Navigator from '../features/BlankScreen7158787/navigator';
import BlankScreen6158786Navigator from '../features/BlankScreen6158786/navigator';
import BlankScreen5158785Navigator from '../features/BlankScreen5158785/navigator';
import BlankScreen4158784Navigator from '../features/BlankScreen4158784/navigator';
import CopyOfBlankScreen3158483Navigator from '../features/CopyOfBlankScreen3158483/navigator';
import BlankScreen3158440Navigator from '../features/BlankScreen3158440/navigator';
import BlankScreen2158265Navigator from '../features/BlankScreen2158265/navigator';
import BlankScreen0158191Navigator from '../features/BlankScreen0158191/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn411158792: { screen: SignIn411158792Navigator },
BlankScreen10158790: { screen: BlankScreen10158790Navigator },
BlankScreen9158789: { screen: BlankScreen9158789Navigator },
BlankScreen8158788: { screen: BlankScreen8158788Navigator },
BlankScreen7158787: { screen: BlankScreen7158787Navigator },
BlankScreen6158786: { screen: BlankScreen6158786Navigator },
BlankScreen5158785: { screen: BlankScreen5158785Navigator },
BlankScreen4158784: { screen: BlankScreen4158784Navigator },
CopyOfBlankScreen3158483: { screen: CopyOfBlankScreen3158483Navigator },
BlankScreen3158440: { screen: BlankScreen3158440Navigator },
BlankScreen2158265: { screen: BlankScreen2158265Navigator },
BlankScreen0158191: { screen: BlankScreen0158191Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
