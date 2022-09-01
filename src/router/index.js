import { createRouter, createWebHistory } from "vue-router";
import Header from '../components/HeaderMd.vue'
import Hello from '../components/HelloWorld.vue'
import SignupPage from '../components/SignupPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: SignupPage
    },

]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: function (to, _from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return { el: to.hash, behavior: "smooth" };
		} else {
			window.scrollTo(0, 0);
		}
	}
})

export default router