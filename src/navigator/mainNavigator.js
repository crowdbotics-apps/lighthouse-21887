import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen3158483Navigator from '../features/CopyOfBlankScreen3158483/navigator';
import BlankScreen3158440Navigator from '../features/BlankScreen3158440/navigator';
import BlankScreen2158265Navigator from '../features/BlankScreen2158265/navigator';
import BlankScreen0158191Navigator from '../features/BlankScreen0158191/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
