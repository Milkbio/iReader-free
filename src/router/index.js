import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/ebook'
        },
        {
            path: '/ebook',
            name: 'ebook',
            component: () => import(/* webpackChunkName: 'Ebook' */ '@/Ebook')
        }/*,
        {
            path: '/Hello',
            name: 'HelloWorld',
            component: () => import(/!* webpackChunkName: 'HelloWord' *!/ '@/components/HelloWorld')
        },
        {
            path: '/Hello',
            name: 'HelloWorld',
            component: () => import(/!* webpackChunkName: 'HelloWord' *!/ '@/components/HelloWorld')
        }*/
    ]
})