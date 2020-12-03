(window.webpackJsonp=window.webpackJsonp||[]).push([[39,52,57],{"+oUc":function(t,s,e){"use strict";e.d(s,"a",(function(){return n}));var a={extends:e("H8ri").a,props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},i=e("KHd+"),n=Object(i.a)(a,void 0,void 0,!1,null,null,null).exports},DMAz:function(t,s,e){"use strict";e.r(s);var a=e("yQXo"),i=e("+oUc"),n={metaInfo:function(){return{title:this.$trans("headings.dashboard")}},components:{VAppDefaultLayout:a.default,VChartLine:i.a},data:function(){return{customersByMonthChart:{data:{labels:[this.$trans("labels.jan"),this.$trans("labels.feb"),this.$trans("labels.mar"),this.$trans("labels.apr"),this.$trans("labels.may"),this.$trans("labels.jun"),this.$trans("labels.jul"),this.$trans("labels.aug"),this.$trans("labels.sep"),this.$trans("labels.oct"),this.$trans("labels.nov"),this.$trans("labels.dec")],datasets:[{backgroundColor:"#b4c6fc",borderColor:"#b4c6fc",pointBackgroundColor:"#fff",data:this.$page.customers_by_month}]},options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{beginAtZero:!0},gridLines:{display:!1}}]}}}}}},l=e("KHd+"),r=Object(l.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-app-default-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[e("h1",{staticClass:"text-2xl font-semibold text-gray-900"},[t._v(t._s(t.$trans("headings.dashboard")))])]},proxy:!0}])},[t._v(" "),[e("div",{staticClass:"container mx-auto px-4 sm:px-6 md:px-8 py-4"},[e("div",{staticClass:"grid grid-cols-1 gap-6 mt-5 mb-6 sm:grid-cols-2 lg:grid-cols-4"},[e("div",{staticClass:"bg-white overflow-hidden shadow rounded-lg"},[e("div",{staticClass:"px-4 py-5 sm:p-6"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"flex-shrink-0 bg-indigo-500 rounded-md p-3"},[e("svg",{staticClass:"h-6 w-6 text-white",attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"}})])]),t._v(" "),e("div",{staticClass:"ml-5 w-0 flex-1"},[e("dl",[e("dt",{staticClass:"text-sm leading-5 font-medium text-gray-500 truncate"},[t._v("\n                                        "+t._s(t.$trans("headings.active-subscriptions"))+"\n                                    ")]),t._v(" "),e("dd",{staticClass:"flex items-baseline"},[e("div",{staticClass:"text-2xl leading-8 font-semibold text-gray-900"},[t._v("\n                                            "+t._s(t.$page.stats.active_subscriptions)+"\n                                        ")])])])])])])]),t._v(" "),e("div",{staticClass:"bg-white overflow-hidden shadow rounded-lg"},[e("div",{staticClass:"px-4 py-5 sm:p-6"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"flex-shrink-0 bg-indigo-500 rounded-md p-3"},[e("svg",{staticClass:"h-6 w-6 text-white",attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"}})])]),t._v(" "),e("div",{staticClass:"ml-5 w-0 flex-1"},[e("dl",[e("dt",{staticClass:"text-sm leading-5 font-medium text-gray-500 truncate"},[t._v("\n                                        "+t._s(t.$trans("headings.incomplete-subscriptions"))+"\n                                    ")]),t._v(" "),e("dd",{staticClass:"flex items-baseline"},[e("div",{staticClass:"text-2xl leading-8 font-semibold text-gray-900"},[t._v("\n                                            "+t._s(t.$page.stats.incomplete_subscriptions)+"\n                                        ")])])])])])])]),t._v(" "),e("div",{staticClass:"bg-white overflow-hidden shadow rounded-lg"},[e("div",{staticClass:"px-4 py-5 sm:p-6"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"flex-shrink-0 bg-indigo-500 rounded-md p-3"},[e("svg",{staticClass:"h-6 w-6 text-white",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}})])]),t._v(" "),e("div",{staticClass:"ml-5 w-0 flex-1"},[e("dl",[e("dt",{staticClass:"text-sm leading-5 font-medium text-gray-500 truncate"},[t._v("\n                                        "+t._s(t.$trans("headings.total-customers"))+"\n                                    ")]),t._v(" "),e("dd",{staticClass:"flex items-baseline"},[e("div",{staticClass:"text-2xl leading-8 font-semibold text-gray-900"},[t._v("\n                                            "+t._s(t.$page.stats.total_customers)+"\n                                        ")])])])])])])]),t._v(" "),e("div",{staticClass:"bg-white overflow-hidden shadow rounded-lg"},[e("div",{staticClass:"px-4 py-5 sm:p-6"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"flex-shrink-0 bg-indigo-500 rounded-md p-3"},[e("svg",{staticClass:"h-6 w-6 text-white",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}})])]),t._v(" "),e("div",{staticClass:"ml-5 w-0 flex-1"},[e("dl",[e("dt",{staticClass:"text-sm leading-5 font-medium text-gray-500 truncate"},[t._v("\n                                        "+t._s(t.$trans("headings.new-customers"))+"\n                                    ")]),t._v(" "),e("dd",{staticClass:"flex items-baseline"},[e("div",{staticClass:"text-2xl leading-8 font-semibold text-gray-900"},[t._v("\n                                            "+t._s(t.$page.stats.new_customers)+"\n                                        ")])])])])])])])]),t._v(" "),e("div",{staticClass:"mt-5 grid grid-cols-1 mb-6"},[e("div",{staticClass:"flex flex-col bg-white rounded-lg shadow"},[e("div",{staticClass:"p-4"},[e("span",{staticClass:"font-semibold text-gray-500"},[t._v("\n                            "+t._s(t.$trans("headings.monthly-customers"))+"\n                        ")])]),t._v(" "),e("div",{staticClass:"p-4"},[e("v-chart-line",{attrs:{data:t.customersByMonthChart.data,options:t.customersByMonthChart.options,height:400}})],1)])])])]],2)}),[],!1,null,null,null);s.default=r.exports},fDts:function(t,s,e){"use strict";e.r(s);var a=e("KHd+"),i=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"h-0 flex-1 flex flex-col pb-4 overflow-y-auto"},[e("div",{staticClass:"flex items-center flex-shrink-0 bg-gray-900 py-4 px-4 mb-4"},[e("inertia-link",{attrs:{href:t.route("admin:dashboard")}},[e("img",{staticClass:"h-8 w-auto select-none",attrs:{src:t.$page.logo_dark,alt:"logo"}})])],1),t._v(" "),e("div",{staticClass:"flex-shrink-0 flex px-6 pt-1"},[e("inertia-link",{staticClass:"flex-shrink-0 group block focus:outline-none",attrs:{href:t.route("admin:profile.edit")}},[e("div",{staticClass:"flex items-center"},[e("div",[e("img",{staticClass:"inline-block h-9 w-9 rounded-full",attrs:{src:t.$page.user.avatar_url,alt:t.$page.user.name}})]),t._v(" "),e("div",{staticClass:"ml-3"},[e("p",{staticClass:"text-sm leading-5 font-medium text-white"},[t._v("\n                        "+t._s(t.$page.user.name)+"\n                    ")]),t._v(" "),e("p",{staticClass:"text-xs leading-4 font-medium text-gray-400 group-hover:text-gray-300 group-focus:underline transition ease-in-out duration-150"},[t._v("\n                        "+t._s(t.$trans("labels.edit-profile"))+"\n                    ")])])])])],1),t._v(" "),e("nav",{staticClass:"mt-5 bg-gray-800"},[e("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("admin:dashboard")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("admin:dashboard")}},[e("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.dashboard"))+"\n        ")]),t._v(" "),e("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("admin:subscriptions.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("admin:subscriptions.index")}},[e("svg",{staticClass:"h-4 w-4 fill-current mr-3",attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.subscriptions"))+"\n        ")]),t._v(" "),e("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("admin:plans.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("admin:plans.index")}},[e("svg",{staticClass:"h-4 w-4 fill-current mr-3",attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.plans"))+"\n        ")]),t._v(" "),e("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("admin:customers.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("admin:customers.index")}},[e("svg",{staticClass:"h-4 w-4 fill-current mr-3",attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.customers"))+"\n        ")])],1),t._v(" "),e("nav",{staticClass:"mt-auto"},[e("inertia-link",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("admin:system-settings.edit")}},[e("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.settings"))+"\n        ")]),t._v(" "),e("a",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("logout")}},[e("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.logout"))+"\n        ")])],1)])}),[],!1,null,null,null);s.default=i.exports},yQXo:function(t,s,e){"use strict";e.r(s);var a={components:{VNavMenu:e("fDts").default},data:function(){return{sidebarOpen:!1}}},i=e("KHd+"),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"h-screen flex overflow-hidden bg-gray-100",attrs:{id:"app"}},[e("div",{staticClass:"md:hidden"},[e("div",{staticClass:"fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300",class:{"opacity-75 pointer-events-auto":t.sidebarOpen,"opacity-0 pointer-events-none":!t.sidebarOpen},on:{click:function(s){t.sidebarOpen=!1}}}),t._v(" "),e("div",{staticClass:"fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300 ",class:{"translate-x-0":t.sidebarOpen,"-translate-x-full":!t.sidebarOpen}},[e("div",{staticClass:"absolute top-0 right-0 -mr-14 p-1"},[t.sidebarOpen?e("button",{staticClass:"flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600",on:{click:function(s){t.sidebarOpen=!1}}},[e("svg",{staticClass:"h-6 w-6 text-white",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]):t._e()]),t._v(" "),e("v-nav-menu")],1)]),t._v(" "),e("div",{staticClass:"hidden md:flex md:flex-shrink-0"},[e("div",{staticClass:"flex flex-col w-64 bg-gray-800"},[e("v-nav-menu")],1)]),t._v(" "),e("div",{staticClass:"flex flex-col w-0 flex-1 overflow-hidden"},[e("div",{staticClass:"md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3"},[e("button",{staticClass:"-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150",on:{click:function(s){s.stopPropagation(),t.sidebarOpen=!0}}},[e("svg",{staticClass:"h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),e("main",{staticClass:"flex flex-col flex-1 relative z-0 overflow-y-auto pt-6 focus:outline-none",attrs:{tabindex:"0"}},[e("div",{staticClass:"flex items-center px-4 mb-4 sm:px-6 lg:px-8"},[t._t("header")],2),t._v(" "),t._t("default")],2)])])}),[],!1,null,null,null);s.default=n.exports}}]);
//# sourceMappingURL=39.js.map?id=56a775ce28f98e151865