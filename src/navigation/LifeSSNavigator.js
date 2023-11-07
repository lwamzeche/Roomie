import GamingHabits from '../screens/second_part/GamingHabit';
import IntroSurvey from '../screens/second_part/IntroSurvey';
import LifeSS from '../screens/second_part/LifeSS';
import Nationality from '../screens/second_part/Nationality';
import SleepHabit from '../screens/second_part/SleepHabit';
import smokingHabits from '../screens/second_part/SmokingHabits';
import SurveySuccess from '../screens/second_part/SurveySuccess';
import TinDorm from '../screens/second_part/TimeInDorm';

export const LifeSSNavigator = [
  {
    name: 'IntroSurvey',
    component: IntroSurvey,
    options: {headerShown: true},
  },
  {
    name: 'LifeSS',
    component: LifeSS,
    options: {headerShown: true},
  },
  {
    name: 'SleepHabit',
    component: SleepHabit,
    options: {headerShown: true},
  },
  {
    name: 'SmokingHabits',
    component: smokingHabits,
    options: {headerShown: true},
  },
  {
    name: 'GamingHabits',
    component: GamingHabits,
    options: {headerShown: true},
  },
  {
    name: 'TinDorm',
    component: TinDorm,
    options: {headerShown: true},
  },
  {
    name: 'Nationality',
    component: Nationality,
    options: {headerShown: true},
  },
  {
    name: 'SurveySuccess',
    component: SurveySuccess,
    options: {headerShown: true},
  },
];
