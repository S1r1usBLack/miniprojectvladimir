import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lodash from  'lodash'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import directives from '@/components/directives/index'
import components from '@/components/UI'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
const app=createApp(App);
loadFonts()
components.forEach(component=>{
    app.component(component.name,component)
})
directives.forEach( directive =>{app.directive(directive.name,directive)})

router.beforeEach((to,from,next)=>{
    if(to.matched.some(record=>record.meta.requiresAuth)){
        if(!localStorage.getItem('token')){
            next('/')
        }
        else{
            next()
        }
    }
    else{
        next()
    }
})


app
    .use(lodash)
    .use(router)
    .use(vuetify, {
  iconfont: 'md'
})
    .use(store)
    .mount('#app')
