// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

import Vue from 'vue'


// global
// Vue.component('my-header', {
// 	template: '<p>This is my header</p>'
// })
var myHeaderChild = {
	template: '<p>I am my header child</p>'
}
var myHeader = {
	template: '<p>This is my header 2<my-header-child></my-header-child></p>',
	components: {
		'my-header-child': myHeaderChild
	}
}

new Vue({
	el: '#app',
	template: '<App/>',
	data: {
		word: 'hello world'
	},
	components: {
		'my-header': myHeader,
		App
	}
})
