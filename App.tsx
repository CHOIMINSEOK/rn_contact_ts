import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {MindingTodayScreen} from './src/view/MindingTodayTabScreen';
import {MissionTabScreen} from './src/view/MissionTabScreen';
import {FeedbackTabScreen} from './src/view/FeedbackTabScreen';
import {ReportTabScreen} from './src/view/ReportTabScreen';
import {MenuTabScreen} from './src/view/MenuTabScreen';

const TabNavigator = createBottomTabNavigator({
  Today: MindingTodayScreen,
  Mission: MissionTabScreen,
  Feedback: FeedbackTabScreen,
  Report: ReportTabScreen,
  Menu: MenuTabScreen,
});

export default createAppContainer(TabNavigator);
