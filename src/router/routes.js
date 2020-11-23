const index = () => import('@/views/Index')
const login = () => import('@/views/Login')
const userHome = () => import('@/views/user/Home')
// const userLogin = () => import('@/views/user/Login')
const userRegister = () => import('@/views/user/Register')
const userProfile = () => import('@/views/user/Profile')
const userMessage = () => import('@/views/user/Message')

const conferenceCreate = () => import('@/views/conference/Create')
const conferenceList = () => import('@/views/conference/List')
const conferenceDetail = () => import('@/views/conference/Detail')
const conferenceParticipate = () => import('@/views/conference/Participate')

const hotelHome = () => import('@/views/hotel/Home')
// const hotelLogin = () => import('@/views/Login')
const hotelProfile = () => import('@/views/hotel/Profile')
const hotelReservation = () => import('@/views/hotel/Reservation')

const driverHome = () => import('@/views/driver/Home')
// const driverLogin = () => import('@/views/driver/Login')
const driverProfile = () => import('@/views/driver/Profile')
const driverReservation = () => import('@/views/driver/Reservation')

const adminHome = () => import('@/views/admin/Home')
// const adminLogin = () => import('@/views/admin/Login')
const adminSupervise = () => import('@/views/admin/Supervise')
const adminConference = () => import('@/views/admin/Conference')
const adminHotel = () => import('@/views/admin/Hotel')
const adminDriver = () => import('@/views/admin/Driver')
const adminSystem = () => import('@/views/admin/System')

export default [
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
      path: '/login',
      name: '登录',
      component: login,
    },
    // 用户
    {
        path: '/user/home',
        component: userHome
    },
    {
        path: '/user/register',
        component: userRegister
    },
    {
        path: '/user/profile',
        component: userProfile
    },
    {
        path: '/user/message',
        component: userMessage
    },
    // 会议
    {
        path: '/conference/create',
        component: conferenceCreate
    },
    {
        path: '/conference/list',
        component: conferenceList
    },
    {
        path: '/conference/detail',
        component: conferenceDetail
    },
    {
        path: '/conference/participate',
        component: conferenceParticipate
    },
    // 酒店
    {
        path: '/hotel/home',
        component: hotelHome
    },
    {
        path: '/hotel/profile',
        component: hotelProfile
    },
    {
        path: '/hotel/reservation',
        component: hotelReservation
    },
    // 司机
    {
        path: '/driver/home',
        component: driverHome
    },
    {
        path: '/driver/profile',
        component: driverProfile
    },
    {
        path: '/driver/reservation',
        component: driverReservation
    },
    // 管理员
    {
        path: '/admin/home',
        component: adminHome
    },
    {
        path: '/admin/supervise',
        component: adminSupervise,
        children: [
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
    },
    {
        path: '/admin/system',
        component: adminSystem
    }
]
