import { ADMIN_ROUTE, LESSONS_ROUTE, LESSON_ROUTE, AWARDS_ROUTE, MATERIALS_ROUTE, PROFILE_ROUTE, MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAINLESSONS_ROUTE, MAINAWARDS_ROUTE, MAINREPORTS_ROUTE, MAINMATERIALS_ROUTE, EVENTS_ROUTE, EVENT_ROUTE, GAMES_ROUTE } from "./utils/consts"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Awards from "./pages/Awards"
import Event from "./pages/Event"
import Events from "./pages/Events"
import Lessons from "./pages/Lessons"
import Main from "./pages/Main"
import MainAwards from "./pages/MainAwards"
import MainLessons from "./pages/MainLessons"
import MainMaterials from "./pages/MainMaterials"
import MainReports from "./pages/MainReports"
import Materials from "./pages/Materials"
import Profile from "./pages/Profile"
import Games from "./pages/Games"
import LessonPage from './components/LessonPage';


export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: LESSONS_ROUTE /* + '/:lessonID' */,
    Component: Lessons
  },
  {
    path: LESSON_ROUTE + '/:lessonID',
    Component: LessonPage
  },
  {
    path: GAMES_ROUTE,
    Component: Games
  },
  {
    path: AWARDS_ROUTE,
    Component: Awards
  },
  {
    path: MATERIALS_ROUTE,
    Component: Materials
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile
  },
]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: MAINLESSONS_ROUTE,
    Component: MainLessons
  },
  {
    path: MAINAWARDS_ROUTE,
    Component: MainAwards
  },
  {
    path: MAINREPORTS_ROUTE,
    Component: MainReports
  },
  {
    path: MAINMATERIALS_ROUTE,
    Component: MainMaterials
  },
  {
    path: EVENTS_ROUTE,
    Component: Events
  },    
  {
    path: EVENT_ROUTE + '/:eventID',
    Component: Event
  },      
]