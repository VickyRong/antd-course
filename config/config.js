export default {
    singular: true,
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
        {
            path: '/',
            component: 'Helloworld',
        },
        {
            path: '/helloworld',
            component: 'Helloworld'
        },
        {
            path: '/puzzlecard',
            component: './Puzzlecard'
        },
        {
            path: '/dashboard',
            routes: [
                { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
            ]
        },
        ]
    }],
    proxy:{
        '/dev':{
            target:'http://jsonplaceholder.typicode.com',
            changeOrigin:true,
            pathRewrite: { "^/dev": "" }
        }
    },
    plugins:[
        ['umi-plugin-react',{
            antd:true,
            dva:true
        }]
    ]
    
}