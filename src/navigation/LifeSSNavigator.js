import IntroSurvey from '../screens/second_part/IntroSurvey';
import LifeSS from '../screens/second_part/LifeSS';
import SleepHabit from '../screens/second_part/SleepHabit';
import SurveySuccess from '../screens/second_part/SurveySuccess';

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
    name: 'SurveySuccess',
    component: SurveySuccess,
    options: {headerShown: true},
  },
];
