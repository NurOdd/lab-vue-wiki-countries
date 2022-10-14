import {createRouter, createWebHistory} from 'vue-router';

const routes= [
    {
        path: "/",
        name: "countries",
        components: () => import (),
        children: [
            {
            path: ":code",
            name: 'details',
            component: () => import()
            }
        ];
        const router = createRouter({
            history: createWebHistory
        })
    }
]