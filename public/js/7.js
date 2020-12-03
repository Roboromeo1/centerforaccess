(window.webpackJsonp=window.webpackJsonp||[]).push([[7,25,53,62],{Ridq:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var a={props:{placement:{type:String,default:"right-0"}},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}},mounted:function(){var t=this;document.addEventListener("click",(function(e){e.stopPropagation(),t.$el.contains(e.target)||(t.open=!1)}))}},i=s("KHd+"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative inline-block text-left",on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.open=!1}}},[s("div",{on:{click:function(e){return t.toggle()}}},[t._t("button")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"origin-top-right absolute mt-2 w-auto rounded-md shadow-lg z-40",class:[t.placement]},[t._t("content")],2)])}),[],!1,null,null,null).exports},"Sn+W":function(t,e,s){"use strict";s.r(e);var a=s("emqX"),i=s("vY6u"),r=s("iOOf"),n=s("lduI"),l=s("VVrn"),o=s("zRJh"),c=s("QZnT"),u={components:{VInputColor:a.a,VInputDate:i.a,VModal:r.a,VAlert:l.a,VTabs:o.b,VTab:o.a,VRenderlessSelect:n.a},props:{users:{type:Array,default:[]}},data:function(){return{form:new c.b({name:"",description:"",timeline:"",color:"indigo",visibility:1,team_members:[]})}},methods:{show:function(){this.$refs.modal.show()},hide:function(){this.$refs.modal.hide()},store:function(){var t=this;this.form.processing=!0,this.$inertia.post(route("app:projects.store"),this.form.data()).then((function(){t.form.processing=!1,t.$page.errors.none()&&(t.hide(),t.form.reset())}))}}},d=s("KHd+"),m=Object(d.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-modal",{ref:"modal"},[s("div",{staticClass:"bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"},[s("div",{staticClass:"p-6"},[s("h3",{staticClass:"font-medium text-lg"},[t._v(t._s(t.$trans("headings.create-project")))])]),t._v(" "),t.$page.errors.has("plan.limit")?s("div",{staticClass:"px-6"},[s("v-alert",{attrs:{variant:"warning",show:""}},[t._v("\n                "+t._s(t.$page.errors.first("plan.limit"))+"\n            ")])],1):t._e(),t._v(" "),s("v-tabs",[s("v-tab",{attrs:{name:t.$trans("headings.general-info"),active:""}},[s("div",{staticClass:"flex flex-col px-6 pt-6 pb-6"},[s("div",{staticClass:"mb-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label",attrs:{for:"project-name"}},[t._v(t._s(t.$trans("labels.name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input",attrs:{id:"project-name",placeholder:t.$trans("placeholders.project-name")},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.$page.errors.has("name")?s("p",{staticClass:"invalid-feedback"},[t._v(t._s(t.$page.errors.first("name")))]):t._e()])]),t._v(" "),s("div",{staticClass:"mb-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label",attrs:{for:"project-description"}},[t._v(t._s(t.$trans("labels.description")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-input",attrs:{id:"project-description",placeholder:t.$trans("placeholders.project-description")},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}}),t._v(" "),t.$page.errors.has("description")?s("p",{staticClass:"invalid-feedback"},[t._v(t._s(t.$page.errors.first("description")))]):t._e()])]),t._v(" "),s("div",{staticClass:"mb-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label",attrs:{for:"project-timeline"}},[t._v(t._s(t.$trans("labels.timeline")))]),t._v(" "),s("v-input-date",{attrs:{id:"project-timeline",mode:"range",placeholder:"YYYY-MM-DD to YYYY-MM-DD"},model:{value:t.form.timeline,callback:function(e){t.$set(t.form,"timeline",e)},expression:"form.timeline"}})],1)]),t._v(" "),s("div",{staticClass:"mb-6"},[s("v-input-color",{attrs:{label:t.$trans("labels.project-color")},model:{value:t.form.color,callback:function(e){t.$set(t.form,"color",e)},expression:"form.color"}})],1),t._v(" "),s("div",[s("div",{staticClass:"relative flex items-start"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.visibility,expression:"form.visibility",modifiers:{number:!0}}],staticClass:"form-radio",attrs:{id:"visibility-only-me",type:"radio",value:"1"},domProps:{checked:t._q(t.form.visibility,t._n("1"))},on:{change:function(e){t.$set(t.form,"visibility",t._n("1"))}}})]),t._v(" "),s("div",{staticClass:"pl-7 text-sm leading-5"},[s("label",{staticClass:"font-medium text-gray-700",attrs:{for:"visibility-only-me"}},[t._v("\n                                    "+t._s(t.$trans("labels.only-me"))+"\n                                    "),s("span",{staticClass:"block font-normal text-gray-500"},[t._v(t._s(t.$trans("labels.subtexts.you-see-this-project")))])])])]),t._v(" "),s("div",{staticClass:"relative flex items-start mt-4"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.visibility,expression:"form.visibility",modifiers:{number:!0}}],staticClass:"form-radio",attrs:{id:"visibility-team-members",type:"radio",value:"2"},domProps:{checked:t._q(t.form.visibility,t._n("2"))},on:{change:function(e){t.$set(t.form,"visibility",t._n("2"))}}})]),t._v(" "),s("div",{staticClass:"pl-7 text-sm leading-5"},[s("label",{staticClass:"font-medium text-gray-700",attrs:{for:"visibility-team-members"}},[t._v("\n                                    "+t._s(t.$trans("labels.team-members"))+"\n                                    "),s("span",{staticClass:"block font-normal text-gray-500"},[t._v(t._s(t.$trans("labels.subtexts.team-members-see-this-project")))])])])]),t._v(" "),s("div",{staticClass:"relative flex items-start mt-4"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.visibility,expression:"form.visibility",modifiers:{number:!0}}],staticClass:"form-radio",attrs:{id:"visibility-organization",type:"radio",value:"3"},domProps:{checked:t._q(t.form.visibility,t._n("3"))},on:{change:function(e){t.$set(t.form,"visibility",t._n("3"))}}})]),t._v(" "),s("div",{staticClass:"pl-7 text-sm leading-5"},[s("label",{staticClass:"font-medium text-gray-700",attrs:{for:"visibility-organization"}},[t._v("\n                                    "+t._s(t.$trans("labels.organization"))+"\n                                    "),s("span",{staticClass:"block font-normal text-gray-500"},[t._v(t._s(t.$trans("labels.subtexts.organization-see-this-project")))])])])])])])]),t._v(" "),s("v-tab",{attrs:{name:t.$trans("headings.team-members"),disabled:2!==t.form.visibility}},[s("v-renderless-select",{attrs:{mode:"multiple","item-text":"name","item-value":"uuid",items:t.users,"toggle-select":""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.items,i=e.search,r=e.isSelected,n=e.select;return s("div",{staticClass:"flex flex-col",staticStyle:{height:"530px"}},[s("div",{staticClass:"px-6 pt-6"},[s("input",{staticClass:"form-input",attrs:{placeholder:t.$trans("placeholders.search-users")},on:{input:function(t){return i(t.target.value)}}})]),t._v(" "),s("div",{staticClass:"mt-4 pb-2 flex flex-col overflow-y-auto"},t._l(a,(function(e){return s("a",{staticClass:"flex items-center px-6 py-3 hover:bg-gray-100",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),n(e)}}},[s("div",[r(e)?s("div",{staticClass:"flex items-center justify-center w-5 h-5 p-1 overflow-hidden rounded-full bg-green-400 text-green-100"},[s("svg",{staticClass:"w-4 h-4 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M0 11l2-2 5 5L18 3l2 2L7 18z"}})])]):s("div",{staticClass:"flex items-center justify-center w-5 h-5 p-1 overflow-hidden rounded-full border"})]),t._v(" "),s("div",{staticClass:"flex flex-col ml-6"},[s("p",{staticClass:"text-sm leading-5 text-gray-700 group-hover:text-gray-900"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"text-xs leading-4 text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150"},[t._v(t._s(e.email))])]),t._v(" "),s("div",{staticClass:"ml-auto"},[s("img",{staticClass:"avatar avatar-sm",attrs:{src:e.avatar_url,alt:"avatar"}})])])})),0)])}}]),model:{value:t.form.team_members,callback:function(e){t.$set(t.form,"team_members",e)},expression:"form.team_members"}})],1)],1),t._v(" "),s("div",{staticClass:"bg-gray-50 p-4 sm:px-6 sm:py-4 sm:flex sm:flex-row-reverse"},[s("button",{staticClass:"btn btn-indigo",attrs:{type:"button",disabled:t.form.processing},on:{click:function(e){return t.store()}}},[t._v("\n                "+t._s(t.$trans("labels.save-project"))+"\n            ")]),t._v(" "),s("button",{staticClass:"btn btn-flat mr-3",attrs:{type:"button"},on:{click:function(e){return t.hide()}}},[t._v("\n                "+t._s(t.$trans("labels.cancel"))+"\n            ")])])],1)])}),[],!1,null,null,null);e.default=m.exports},SwdE:function(t,e,s){"use strict";s.r(e);var a=s("rpDG"),i=s("Sn+W"),r=s("3+qG"),n=s("Ridq"),l=s("45DL"),o=s("yOFB"),c={metaInfo:function(){return{title:this.$trans("headings.projects")}},props:{filters:{type:Object}},components:{VAppDefaultLayout:a.default,VEmptyView:r.default,VDropdown:n.a,VPagination:l.a,VAlert:o.a},data:function(){return{filtersForm:{status:this.filters.status,visibility:this.filters.visibility,search:this.filters.search}}},watch:{filtersForm:{deep:!0,handler:_.throttle((function(){var t=_.pickBy(this.filtersForm);this.$inertia.replace(this.route("app:projects.index",Object.keys(t).length?t:{remember:"forget"}))}),150)}},methods:{showCreateProjectModal:function(){this.$modal(i.default,{users:this.$page.users})}}},u=s("KHd+"),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-default-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[s("h1",{staticClass:"text-2xl font-semibold text-gray-900"},[t._v(t._s(t.$trans("headings.projects")))])]},proxy:!0}])},[t._v(" "),[s("div",{staticClass:"container mx-auto flex flex-col flex-1 px-4 sm:px-6 md:px-8 py-4"},[t.$page.flash?s("v-alert",{attrs:{dismissible:""}},[t._v(t._s(t.$page.flash))]):t._e(),t._v(" "),s("div",{staticClass:"flex flex-col sm:flex-row flex-col-reverse items-center justify-between mb-6"},[s("div",{staticClass:"w-full sm:w-1/2"},[s("div",{staticClass:"mt-1 flex rounded-md shadow-sm"},[s("div",{staticClass:"relative flex-grow focus-within:z-10"},[s("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[s("svg",{staticClass:"h-5 w-5 text-gray-400 fill-current",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}})])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filtersForm.search,expression:"filtersForm.search"}],staticClass:"form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:text-sm sm:leading-5",attrs:{placeholder:t.$trans("placeholders.search")},domProps:{value:t.filtersForm.search},on:{input:function(e){e.target.composing||t.$set(t.filtersForm,"search",e.target.value)}}})]),t._v(" "),s("v-dropdown",{scopedSlots:t._u([{key:"button",fn:function(){return[s("button",{staticClass:"btn btn-gray leading-6 sm:text-sm sm:leading-5 -ml-px rounded-l-none"},[s("svg",{staticClass:"h-4 w-4 text-gray-400 fill-current",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M12 12l8-8V0H0v4l8 8v8l4-4v-4z"}})]),t._v(" "),s("span",{staticClass:"ml-2"},[t._v(t._s(t.$trans("labels.filters")))])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"dropdown-menu p-4"},[s("div",{staticClass:"form-group mb-6"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$trans("labels.status")))]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.filtersForm.status,expression:"filtersForm.status"}],staticClass:"form-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filtersForm,"status",e.target.multiple?s:s[0])}}},[s("option",{domProps:{value:null}},[t._v(t._s(t.$trans("labels.all")))]),t._v(" "),s("option",{attrs:{value:"ongoing"}},[t._v(t._s(t.$trans("labels.ongoing")))]),t._v(" "),s("option",{attrs:{value:"overdue"}},[t._v(t._s(t.$trans("labels.overdue")))]),t._v(" "),s("option",{attrs:{value:"completed"}},[t._v(t._s(t.$trans("labels.completed")))]),t._v(" "),s("option",{attrs:{value:"archived"}},[t._v(t._s(t.$trans("labels.archived")))])])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$trans("labels.visibility")))]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.filtersForm.visibility,expression:"filtersForm.visibility"}],staticClass:"form-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filtersForm,"visibility",e.target.multiple?s:s[0])}}},[s("option",{domProps:{value:null}},[t._v(t._s(t.$trans("labels.all")))]),t._v(" "),s("option",{attrs:{value:"only_me"}},[t._v(t._s(t.$trans("labels.only-me")))]),t._v(" "),s("option",{attrs:{value:"team_members"}},[t._v(t._s(t.$trans("labels.team-members")))]),t._v(" "),s("option",{attrs:{value:"organization"}},[t._v(t._s(t.$trans("labels.organization")))])])])])]},proxy:!0}])})],1)]),t._v(" "),s("div",{staticClass:"flex items-center justify-end w-full mb-4 sm:mb-0 sm:w-1/2 -mx-2"},[s("div",{staticClass:"px-0 sm:px-2"},[s("button",{staticClass:"btn btn-indigo",on:{click:function(e){return t.showCreateProjectModal()}}},[t._v("\n                            "+t._s(t.$trans("labels.create-project"))+"\n                        ")])])])]),t._v(" "),t.$page.projects.data.length?s("div",{staticClass:"bg-white shadow overflow-hidden rounded-md"},[s("ul",t._l(t.$page.projects.data,(function(e){return s("li",{staticClass:"border-b border-gray-100 last:border-0"},[s("inertia-link",{staticClass:"block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out",attrs:{href:t.route("app:projects.show",e.uuid)}},[s("div",{staticClass:"px-6 py-4 flex items-center"},[s("div",{staticClass:"min-w-0 flex-1 md:grid md:grid-cols-8 md:gap-4"},[s("div",{staticClass:"md:col-span-4"},[s("div",[s("div",{staticClass:"text-sm leading-5 font-medium text-indigo-600 truncate"},[t._v("\n                                                "+t._s(e.name)+"\n                                            ")]),t._v(" "),s("div",{staticClass:"mt-2 flex"},[s("div",{staticClass:"flex items-center text-sm leading-5 text-gray-500 truncate"},[s("span",[t._v(t._s(e.description))])])])])]),t._v(" "),s("div",{staticClass:"mt-2 md:col-span-2 sm:mt-0"},[s("div",[s("div",{staticClass:"flex items-center text-sm leading-5 text-gray-500"},[s("svg",{staticClass:"flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 fill-current",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}})]),t._v(" "),s("span",{staticClass:"font-medium"},[t._v(t._s(e.pending_tasks))]),t._v(" "+t._s(t.$trans("labels.tasks-left"))+"\n                                            ")]),t._v(" "),s("div",{staticClass:"mt-2 flex items-center text-sm leading-5 text-gray-500"},[s("svg",{staticClass:"flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 fill-current",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"}})]),t._v(" "),e.days_left&&e.days_left>0?s("span",[s("span",{staticClass:"font-medium"},[t._v(t._s(e.days_left))]),t._v(" "+t._s(t.$trans("labels.days-left"))+"\n                                                ")]):0===e.days_left?s("span",{staticClass:"text-red-700"},[t._v("\n                                                     "+t._s(t.$trans("labels.overdue-today"))+"\n                                                ")]):e.days_left&&e.days_left<0?s("span",{staticClass:"text-red-700"},[s("span",{staticClass:"font-medium"},[t._v(t._s(-1*e.days_left))]),t._v(" "+t._s(t.$trans("labels.days-overdue"))+"\n                                                ")]):s("span",[t._v("\n                                                    -\n                                                ")])])])]),t._v(" "),s("div",{staticClass:"mt-2 flex items-center md:col-span-1 sm:mt-0"},["ongoing"===e.status?s("span",{staticClass:"badge badge-indigo"},[t._v(t._s(t.$trans("labels.ongoing")))]):"overdue"===e.status?s("span",{staticClass:"badge badge-red"},[t._v(t._s(t.$trans("labels.overdue")))]):"completed"===e.status?s("span",{staticClass:"badge badge-green"},[t._v(t._s(t.$trans("labels.completed")))]):"archived"===e.status?s("span",{staticClass:"badge"},[t._v(t._s(t.$trans("labels.organization")))]):t._e()]),t._v(" "),e.team_members.length?s("div",{staticClass:"mt-4 flex-shrink-0 flex items-center sm:mt-0"},[s("div",{staticClass:"avatar-group"},t._l(e.team_members,(function(t){return s("img",{staticClass:"avatar avatar-xs",attrs:{src:t.avatar_url,alt:t.name,title:t.name}})})),0)]):t._e()]),t._v(" "),s("div",{staticClass:"ml-5 flex-shrink-0"},[s("svg",{staticClass:"h-5 w-5 text-gray-400 fill-current",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])])])])],1)})),0),t._v(" "),s("v-pagination",{attrs:{links:t.$page.projects.links}})],1):s("div",{staticClass:"flex justify-center mt-6"},[s("div",{staticClass:"flex flex-col items-center"},[s("v-empty-view",{attrs:{message:t.$trans("messages.no-data-to-show-here")}})],1)])],1)]],2)}),[],!1,null,null,null);e.default=d.exports},VVrn:function(t,e,s){"use strict";var a=s("yOFB");s.d(e,"a",(function(){return a.a}))},emqX:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var a={props:{value:{type:String,default:null},label:{type:String,default:null}},data:function(){return{color:this.value,colors:["blue","red","green","indigo","orange","purple","teal","pink"]}},methods:{select:function(t){this.color=t,this.$emit("input",this.color)}}},i=s("KHd+"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.label?s("label",{staticClass:"block text-sm font-medium leading-5 text-gray-700",domProps:{textContent:t._s(t.label)}}):t._e(),t._v(" "),s("div",{staticClass:"flex flex-wrap items-center mt-1 -mx-1"},t._l(t.colors,(function(e){return s("div",{staticClass:"px-1"},[s("a",{staticClass:"bg-gray-600 flex items-center text-white text-xs justify-center w-6 h-6 overflow-hidden rounded-md focus:outline-none focus:shadow-outline-blue",class:["bg-"+e+"-400"],attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.select(e)}}},[e===t.color?s("svg",{staticClass:"w-4 h-4 fill-current inline-block",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M0 11l2-2 5 5L18 3l2 2L7 18z"}})]):t._e()])])})),0)])}),[],!1,null,null,null).exports},iOOf:function(t,e,s){"use strict";var a=s("wRFS");s.d(e,"a",(function(){return a.a}))},lduI:function(t,e,s){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.d(e,"a",(function(){return i}));var i={props:{value:{type:[Array,String,Number],default:null},items:{type:Array,default:[]},mode:{type:String,default:"single",validator:function(t){return["single","multiple"].includes(t)}},itemText:{type:String,default:"text"},itemValue:{type:String,default:"id"},toggleSelect:{type:Boolean,default:!1},filter:{type:Function,default:function(){var t=this;return this.items.filter((function(e){return t.getItemText(e).toString().toLowerCase().match(t.searchQuery.toLowerCase())}))}}},data:function(){return{selected:[],searchQuery:""}},computed:{filteredItems:function(){return this.filter()}},watch:{value:function(t){this.selected=[],this.setInternalValue(t)}},mounted:function(){this.setInternalValue(this.value)},render:function(){return this.$scopedSlots.default({items:this.filteredItems,select:this.select,selected:"single"===this.mode?this.selected[0]:this.selected,search:this.search,isSelected:this.isSelected,getItemText:this.getItemText,getItemValue:this.getItemValue})},methods:{getItemText:function(t){return"object"===a(t)?(t.hasOwnProperty(this.itemText)||console.warn("Unable to retrieve item text. The specified item-text does not exists."),t[this.itemText]):t},getItemValue:function(t){return"object"===a(t)?(t.hasOwnProperty(this.itemValue)||console.warn("Unable to retrieve item text. The specified item-value does not exists."),t[this.itemValue]):t},select:function(t){var e=this,s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];"single"===this.mode&&(this.toggleSelect&&this.isSelected(t)?this.selected=[]:this.selected=[t]),"multiple"===this.mode&&(this.toggleSelect&&this.isSelected(t)?this.selected=this.selected.filter((function(s){return e.getItemValue(s)!==e.getItemValue(t)})):this.selected.push(t)),s&&("single"===this.mode&&this.selected.length>0?this.$emit("input",this.getItemValue(this.selected[0])):this.$emit("input",null),"multiple"===this.mode&&this.selected.length>0&&this.$emit("input",this.selected.map((function(t){return e.getItemValue(t)}))))},isSelected:function(t){var e=this;return"single"===this.mode?this.getItemValue(this.selected[0])===this.getItemValue(t):"multiple"===this.mode?this.selected.some((function(s){return e.getItemValue(s)===e.getItemValue(t)})):void 0},search:function(t){this.searchQuery=t},setInternalValue:function(t){var e=this;_.isArray(t)||(t=[t]),this.items.forEach((function(s){t.includes(e.getItemValue(s))&&e.select(s,!1)}))}}}},rpDG:function(t,e,s){"use strict";s.r(e);var a={components:{VNavMenu:s("sHez").default},data:function(){return{sidebarOpen:!1}}},i=s("KHd+"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-screen flex overflow-hidden bg-gray-100",attrs:{id:"app"}},[s("div",{staticClass:"md:hidden"},[s("div",{staticClass:"fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300",class:{"opacity-75 pointer-events-auto":t.sidebarOpen,"opacity-0 pointer-events-none":!t.sidebarOpen},on:{click:function(e){t.sidebarOpen=!1}}}),t._v(" "),s("div",{staticClass:"fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300 ",class:{"translate-x-0":t.sidebarOpen,"-translate-x-full":!t.sidebarOpen}},[s("div",{staticClass:"absolute top-0 right-0 -mr-14 p-1"},[t.sidebarOpen?s("button",{staticClass:"flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600",on:{click:function(e){t.sidebarOpen=!1}}},[s("svg",{staticClass:"h-6 w-6 text-white",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]):t._e()]),t._v(" "),s("v-nav-menu")],1)]),t._v(" "),s("div",{staticClass:"hidden md:flex md:flex-shrink-0"},[s("div",{staticClass:"flex flex-col w-64 bg-gray-800"},[s("v-nav-menu")],1)]),t._v(" "),s("div",{staticClass:"flex flex-col w-0 flex-1 overflow-hidden"},[s("div",{staticClass:"md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3"},[s("button",{staticClass:"-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150",on:{click:function(e){e.stopPropagation(),t.sidebarOpen=!0}}},[s("svg",{staticClass:"h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),s("main",{staticClass:"flex flex-col flex-1 relative z-0 overflow-y-auto pt-6 focus:outline-none",attrs:{tabindex:"0"}},[s("div",{staticClass:"flex items-center px-4 mb-4 sm:px-6 lg:px-8"},[t._t("header")],2),t._v(" "),t._t("default")],2)])])}),[],!1,null,null,null);e.default=r.exports},sHez:function(t,e,s){"use strict";s.r(e);var a=s("KHd+"),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-0 flex-1 flex flex-col pb-4 overflow-y-auto"},[s("div",{staticClass:"flex items-center flex-shrink-0 bg-gray-900 py-4 px-4 mb-4"},[s("inertia-link",{attrs:{href:t.route("app:dashboard")}},[s("img",{staticClass:"h-8 w-auto select-none",attrs:{src:t.$page.logo_dark,alt:"logo"}})])],1),t._v(" "),s("div",{staticClass:"flex-shrink-0 flex px-6 pt-1"},[s("inertia-link",{staticClass:"flex-shrink-0 group block focus:outline-none",attrs:{href:t.route("app:profile.edit")}},[s("div",{staticClass:"flex items-center"},[s("div",[s("img",{staticClass:"inline-block h-9 w-9 rounded-full",attrs:{src:t.$page.user.avatar_url,alt:t.$page.user.name}})]),t._v(" "),s("div",{staticClass:"ml-3"},[s("p",{staticClass:"text-sm leading-5 font-medium text-white"},[t._v("\n                        "+t._s(t.$page.user.name)+"\n                    ")]),t._v(" "),s("p",{staticClass:"text-xs leading-4 font-medium text-gray-400 group-hover:text-gray-300 group-focus:underline transition ease-in-out duration-150"},[t._v("\n                        "+t._s(t.$trans("labels.profile-settings"))+"\n                    ")])])])])],1),t._v(" "),s("nav",{staticClass:"mt-5 bg-gray-800"},[s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:dashboard")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:dashboard")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.dashboard"))+"\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:projects.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:projects.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.projects"))+"\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:tasks.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:tasks.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.my-tasks"))+"\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:calendar.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:calendar.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.calendar"))+"\n        ")])],1),t._v(" "),s("nav",{staticClass:"flex flex-col flex-1 mt-3 bg-gray-800"},[s("div",{staticClass:"px-6 mb-2"},[s("span",{staticClass:"text-sm text-gray-500 font-semibold"},[t._v("\n                "+t._s(t.$trans("labels.favorites"))+"\n            ")])]),t._v(" "),t._l(t.$page.favorite_projects,(function(e){return s("inertia-link",{key:e.uuid,staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("app:projects.show",{project:e.uuid})}},[s("div",{staticClass:"w-3 h-3 overflow-hidden rounded-full mr-3"},[s("div",{staticClass:"w-full h-full",class:["bg-"+e.color+"-400"]})]),t._v("\n            "+t._s(e.name)+"\n        ")])}))],2),t._v(" "),s("nav",[s("inertia-link",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("app:users.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.settings"))+"\n        ")]),t._v(" "),s("a",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("logout")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"}})]),t._v("\n\n            "+t._s(t.$trans("labels.logout"))+"\n        ")])],1)])}),[],!1,null,null,null);e.default=i.exports},vY6u:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var a={props:{value:{type:String,default:null},mode:{type:String,default:"single",validator:function(t){return["single","multiple","range"].includes(t)}},inline:{type:Boolean,default:!1}},data:function(){return{date:""}},mounted:function(){var t=this;this.date=this.value;var e=flatpickr(this.$refs.input,{defaultDate:this.value,dateFormat:"Y-m-d",mode:this.mode,inline:this.inline,onChange:function(s,a){a===t.date?e.clear():(t.date=a,t.$emit("input",t.date))}})}},i=s("KHd+"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],ref:"input",staticClass:"form-input",class:{hidden:t.inline},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})}),[],!1,null,null,null).exports},yOFB:function(t,e,s){"use strict";var a={props:{variant:{type:String,default:"success",validator:function(t){return["success","warning","failure"].includes(t)}},dismissible:{type:Boolean,default:!1}},data:function(){return{visible:!0}},computed:{alertClass:function(){return["alert","alert-"+this.variant]}},watch:{"$page.flash":{deep:!0,handler:function(){this.visible=!0}}}},i=s("KHd+"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.visible?s("div",{class:t.alertClass},[s("p",[t._t("default")],2),t._v(" "),t.dismissible?s("button",{staticClass:"flex items-center p-1 focus:outline-none ml-auto",on:{click:function(e){t.visible=!1}}},[s("svg",{staticClass:"w-3 h-3 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"}})])]):t._e()]):t._e()}),[],!1,null,null,null);e.a=r.exports},zRJh:function(t,e,s){"use strict";s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return r}));var a={data:function(){return{tabs:[],mobileTab:null}},mounted:function(){var t=this;this.tabs.forEach((function(e){e.isVisible&&(t.mobileTab=e)}))},created:function(){this.tabs=this.$children},methods:{setActive:function(t){t.disabled||this.tabs.map((function(e){t.id===e.id?t.isVisible=!0:e.isVisible=!1}))}}},i=s("KHd+"),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"bg-gray-50 p-6 sm:hidden"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.mobileTab,expression:"mobileTab"}],staticClass:"form-select",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.mobileTab=e.target.multiple?s:s[0]},function(e){return t.setActive(t.mobileTab)}]}},t._l(t.tabs,(function(e){return s("option",{attrs:{disabled:e.disabled},domProps:{value:e}},[t._v(t._s(e.name))])})),0)]),t._v(" "),s("div",{staticClass:"hidden sm:block"},[s("div",{staticClass:"border-b border-gray-200"},[s("nav",{staticClass:"-mb-px flex"},t._l(t.tabs,(function(e){return s("a",{staticClass:"flex-1 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-600 focus:outline-none",class:{"border-indigo-500 text-indigo-500 focus:text-indigo-800 focus:border-indigo-700":e.isVisible,"text-gray-300 cursor-not-allowed":e.disabled},attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.setActive(e)}}},[t._v("\n                    "+t._s(e.name)+"\n                ")])})),0)])]),t._v(" "),t._t("tab",[t._t("default")])],2)}),[],!1,null,null,null).exports,n={props:{name:{type:String,default:null,required:!0},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{isVisible:this.active}},computed:{id:function(){return this.name.toLowerCase().replace(/ /g,"-")}}},l=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("section",{directives:[{name:"show",rawName:"v-show",value:this.isVisible,expression:"isVisible"}]},[this._t("default")],2)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=7.js.map?id=13d112d43ec2798e35be