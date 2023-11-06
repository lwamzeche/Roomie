import IntroSurvey from '../screens/second_part/IntroSurvey';
import LifeSS from '../screens/second_part/LifeSS';


export const LifeSSNavigator = [
    { 
        name: 'IntroSurvey',
        component: IntroSurvey,
        options: {headerShown: false}
    },
    {
        name: 'LifeSS',
        component: LifeSS,
        options: {headerShown: false}
    },
];
