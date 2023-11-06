import IntroSurvey from '../screens/second_part/IntroSurvey';
import LifeSS from '../screens/second_part/LifeSS';
import SurveySuccess from '../screens/second_part/SurveySuccess';


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
    {
        name: 'SurveySuccess',
        component: SurveySuccess,
        options: {headerShown: false}
    },

];
