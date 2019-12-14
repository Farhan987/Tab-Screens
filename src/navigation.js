import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BussinessInformation from "./screens/BussinessInformation/BussinessInformation";
import EditMenuScreen from "./screens/EditMenu/editMenuScreen";
import MostOrderedItem from "./screens/MostOrderedItem/MostOrderedItem";
import OpeningHours from "./screens/OpeningHours/OpeningHours";
import OrderHistoryScreen from "./screens/OrderHistory/OrderHistoryScreen";
import ReviewScreen from "./screens/ReviewsScreens/reviewScreen";
import UserPanelScreen from "./screens/UserPanel/UserPanelScreen";
import TabViewScreen from "./screens/statisticScreen/TabViewScreen";
import HomeScreen from "./screens/statisticScreen/HomeScreen";
// const AuthStackNavigator = createSwitchNavigator(
//   {},
//   {
//     initialRouteName: "SplashScreen"
//   }
// );

// const AdminStackNavigator = createStackNavigator(
//   {},
//   {
//     initialRouteName: "AdminDashboardScreen"
//   }
// );

// const UserStackNavigator = createStackNavigator(
//   {},
//   {
//     initialRouteName: "TaskListScreen"
//   }
// );

const AppNavigator = createSwitchNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    TabViewScreen: { screen: TabViewScreen },
    EditMenuScreen: { screen: EditMenuScreen },
    ReviewScreen: { screen: ReviewScreen },
    OrderHistoryScreen: { screen: OrderHistoryScreen },
    UserPanelScreen: { screen: UserPanelScreen },
    OpeningHours: { screen: OpeningHours },
    MostOrderedItem: { screen: MostOrderedItem },
    BussinessInformation: { screen: BussinessInformation }
  },
  {
    initialRouteName: "HomeScreen"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
