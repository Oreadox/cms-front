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
// const hotelDetail = () => import('@/views/hotel/Detail')
const hotelProfile = () => import('@/views/hotel/Profile')
const hotelReservation = () => import('@/views/hotel/Reservation')
const hotelMail = ()=> import('@/views/hotel/HotelMail')

const driverIndex = () => import('@/views/driver/Index')
// const driverHome = () => import('@/views/driver/Home')
const driverProfile = () => import('@/views/driver/Profile')
const driverReservation = () => import('@/views/driver/Reservation')
// const driverDetail = () => import('@/views/driver/Detail')
const driverMail = ()=> import('@/views/driver/DriverMail')

const adminIndex = () => import("@/views/admin/Index")
const adminHome = () => import('@/views/admin/Home')
// const adminSupervise = () => import('@/views/admin/Supervise')
const adminUser =()=>import('@/views/admin/User')
const adminConference = () => import('@/views/admin/Conference')
const adminHotel = () => import('@/views/admin/Hotel')
const adminDriver = () => import('@/views/admin/Driver')
const adminSystem = () => import('@/views/admin/System')
const personalInfo = () => import('@/views/admin/personalInfo')
const adminMail = () => import('@/views/admin/Mail')


export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            name: '主页',
            component: index,
            meta: { title: 'Home--会务管理系统' },
        },
        {
            path: '/user/',
            redirect: '/user/home',
            component: userIndex,
            children: [
                {
                    path: 'home',
                    component: userHome,
                    meta: { title: '用户主页--会务管理系统' },
                },
                {
                    path: 'profile',
                    component: userProfile,
                    meta: { title: '个人信息--会务管理系统' },
                },
                {
                    path: 'message',
                    component: userMessage,
                    meta: { title: '个人信箱--会务管理系统' },
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
                    component: conferenceCreate,
                    meta: { title: '创建会议--会务管理系统' },
                },
                {
                    path: 'list',
                    component: conferenceList,
                    meta: { title: '会议列表--会务管理系统' },
                },
                {
                    path: 'detail/:id',
                    component: conferenceDetail,
                    meta: { title: '会议详情--会务管理系统' },
                },
                {
                    path: 'participate/:id',
                    component: conferenceParticipate,
                    meta: { title: '参加会议--会务管理系统' },
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
                    component: hotelReservation,
                    meta: { title: '酒店预订--会务管理系统' },
                },
                {
                    path: 'profile',
                    component: hotelProfile,
                    meta: { title: '酒店信息--会务管理系统' },
                },
                // {
                //     path: 'detail/:id',
                //     component: hotelDetail,
                //     meta: { title: 'hotelDetail' },
                // },
                {
                    path: 'message',
                    component: hotelMail,
                    meta: { title: '酒店信箱--会务管理系统' },
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
                    component: driverProfile,
                    meta: { title: '司机--会务管理系统' },
                },
                {
                    path: 'reservation',
                    component: driverReservation,
                    meta: { title: '预约--会务管理系统' },
                },
                // {
                //     path: 'detail/:id',
                //     component: driverDetail,
                //     meta: { title: '详情--会务管理系统' },
                // },
                {
                    path: 'message',
                    component: driverMail,
                    meta: { title: '司机信箱--会务管理系统' },
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
                    meta: { title: '管理员主页--会务管理系统' },
                },
                {
                    path: 'user',
                    component: adminUser,
                    meta: { title: '用户管理--会务管理系统' },
                },
                {
                    path: 'conference',
                    component: adminConference,
                    meta: { title: '会议管理--会务管理系统' },
                },
                {
                    path: 'hotel',
                    component: adminHotel,
                    meta: { title: '酒店管理--会务管理系统' },
                },
                {
                    path: 'driver',
                    component: adminDriver,
                    meta: { title: '司机管理--会务管理系统' },
                },
                {
                    path: 'personalInfo',
                    component: personalInfo,
                    meta: { title: '管理员信息--会务管理系统' },
                },
                {
                    path: 'message',
                    component: adminMail,
                    meta: { title: '信箱--会务管理系统' },
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
            component: adminSystem,
            meta: { title: '高级模式--会务管理系统' },
        }
    ]
})
