import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const index = () => import('@/views/Index')

const userIndex = () => import("@/views/user/Index")
const userHome = () => import('@/views/user/Home')
const userProfile = () => import('@/views/user/Profile')
const userMessage = () => import('@/views/user/Message')

const conferenceIndex = () => import('@/views/conference/Index')
const conferenceCreate = () => import('@/views/conference/Create')
const conferenceList = () => import('@/views/conference/List')
const conferenceDetail = () => import('@/views/conference/Detail')
const conferenceParticipate = () => import('@/views/conference/Participate')

const hotelIndex = () => import('@/views/hotel/Index')
const hotelDetail = () => import('@/views/hotel/Detail')
const hotelProfile = () => import('@/views/hotel/Profile')
const hotelReservation = () => import('@/views/hotel/Reservation')

const driverIndex = () => import('@/views/driver/Index')
// const driverHome = () => import('@/views/driver/Home')
const driverProfile = () => import('@/views/driver/Profile')
const driverReservation = () => import('@/views/driver/Reservation')
const driverDetail = () => import('@/views/driver/Detail')

const adminIndex = () => import("@/views/admin/Index")
const adminHome = () => import('@/views/admin/Home')
// const adminSupervise = () => import('@/views/admin/Supervise')
const adminUser =()=>import('@/views/admin/User')
const adminConference = () => import('@/views/admin/Conference')
const adminHotel = () => import('@/views/admin/Hotel')
const adminDriver = () => import('@/views/admin/Driver')
const adminSystem = () => import('@/views/admin/System')
const personalInfo = () => import('@/views/admin/Supervise')
const adminMail = () => import('@/views/admin/User')


export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: '主页',
            component: index
        },
        {
            path: '/user/',
            redirect: '/user/home',
            component: userIndex,
            children: [
                {
                    path: 'home',
                    component: userHome
                },
                {
                    path: 'profile',
                    component: userProfile
                },
                {
                    path: 'message',
                    component: userMessage
                },
            ]
        },

        // 会议
        {
            path: '/conference/',
            redirect: '/conference/list',
            component: conferenceIndex,
            children: [
                {
                    path: 'create',
                    component: conferenceCreate
                },
                {
                    path: 'list',
                    component: conferenceList
                },
                {
                    path: 'detail/:id',
                    component: conferenceDetail
                },
                {
                    path: 'participate',
                    component: conferenceParticipate
                },
            ]
        },

        // 酒店
        {
            path: '/hotel/',
            redirect: '/hotel/reservation',
            component: hotelIndex,
            children: [
                {
                    path: 'reservation/',
                    component: hotelReservation
                },
                {
                    path: 'profile',
                    component: hotelProfile
                },
                {
                    path: 'detail/:id',
                    component: hotelDetail
                },
            ]
        },

        // 司机
        {
            path: '/driver/',
            redirect: '/driver/reservation',
            component: driverIndex,
            children: [
                // {
                //     path: 'home',
                //     component: driverHome
                // },
                {
                    path: 'profile',
                    component: driverProfile
                },
                {
                    path: 'reservation',
                    component: driverReservation
                },
                {
                    path: 'detail/:id',
                    component: driverDetail
                },
            ]
        },

        // 管理员
        {
            path: '/admin/',
            redirect: '/admin/home',
            component: adminIndex,
            children:[
                {
                    path: 'home',
                    component: adminHome,
                },
                {
                    path: 'user',
                    component: adminUser,
                },
                {
                    path: 'conference',
                    component: adminConference
                },
                {
                    path: 'hotel',
                    component: adminHotel
                },
                {
                    path: 'driver',
                    component: adminDriver
                },
                {
                    path: 'personalInfo',
                    component: personalInfo
                },
                {
                    path: 'message',
                    component: adminMail
                },
            ]
        },
/*        {
            path: '/admin/supervise/',
            component: userIndex,
            children: [
                {
                    path: 'user',
                    component: adminUser,
                },
                {
                    path: 'conference',
                    component: adminConference
                },
                {
                    path: 'hotel',
                    component: adminHotel
                },
                {
                    path: 'driver',
                    component: adminDriver
                },
            ]
        },*/
        {
            path: '/admin/system',
            component: adminSystem
        }
    ]
})
