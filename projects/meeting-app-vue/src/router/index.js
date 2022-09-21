import Router from 'vue-router';
import CalenderPage from '../components/CalenderPage';
import MeetingsPage from '../components/MeetingsPage';
import TeamsPage from '../components/TeamsPage';


const router = new Router({
    mode : 'history',
    routes  : [
        {
            name :'calender-page',
            path: '/',
            component : CalenderPage,
        },
        {
            name :'meetings-page',
            path: '/meetings',
            component : MeetingsPage,
            // children: [
            //     {
            //         name: 'filter-search-meet',
            //         path: '', // whatever comes after parent route (here nothing)
            //         component: FilterMeet
            //     },
            //     {
            //         name: 'add-meeting',
            //         path: 'add', // whatever comes after parent route (here nothing)
            //         component: AddMeeting
            //     }
            // ]
        },
        {
            name :'teams-page',
            path: '/teams',
            component : TeamsPage,
        },
    ]
});


export default router;