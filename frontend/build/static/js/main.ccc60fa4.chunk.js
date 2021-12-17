(this.webpackJsonptask_manager=this.webpackJsonptask_manager||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(1),c=n(30),l=n.n(c),s=(n(35),n(36),n(5)),o=n(6),i=n(4),d=(n(41),n(12)),u=n(0);var b=function(e){var t=e.title,n=Object(r.useState)(!1),a=Object(s.a)(n,2),c=a[0],l=a[1],b=Object(r.useState)(!1),x=Object(s.a)(b,2),p=x[0],j=x[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{className:"w-full pt-3 pb-4 px-5 bg-gray-800 flex flex-row justify-between",children:[Object(u.jsxs)("div",{id:"header-left",className:"flex flex-col",children:[Object(u.jsx)("p",{className:"text-md text-left text-white font-semibold text-mono uppercase mb-3",children:"task manager"}),Object(u.jsxs)("p",{className:"text-2xl text-left text-gray-300 font-mono",children:[Object(u.jsx)(d.b,{to:"/",className:"transition-colors duration-200 hover:text-white",children:"Home"})," ",void 0!==t&&"/ ".concat(t)]})]}),Object(u.jsxs)("div",{id:"header-right",className:"flex flex-row content-start",children:[Object(u.jsxs)("div",{className:"toggle px-4 py-1 flex flex-row justify-center content-start",children:[Object(u.jsx)("span",{className:"text-xl px-2 ".concat(!p&&"text-yellow-400"," ").concat(p&&"text-gray-300"),children:Object(u.jsx)(o.a,{icon:i.e})}),Object(u.jsx)("input",{type:"checkbox",id:"dark-mode-switch",onChange:function(){j(!p)}}),Object(u.jsx)("label",{htmlFor:"dark-mode-switch",className:"",children:" "}),Object(u.jsx)("span",{className:"text-xl px-2 ".concat(!p&&"text-gray-300"," ").concat(p&&"text-purple-500"),children:Object(u.jsx)(o.a,{icon:i.a})})]}),Object(u.jsx)("div",{className:"text-3xl transition-colors duration-200 text-gray-300 hover:text-white cursor-pointer",onClick:function(){l(!c)},children:Object(u.jsx)(o.a,{icon:i.h})})]})]}),Object(u.jsxs)("div",{id:"user-menu",className:"bg-gray-50 text-black text-left py-4 w-1/3 md:w-1/6 absolute top-12 right-10 rounded-lg rounded-tr-none shadow-2xl transition-all duration-500 origin-top-right ".concat(c&&"transform scale-100"," ").concat(!c&&"hidden transform scale-0"),children:[Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("p",{className:"p-2 px-6  transition-colors duration-300 hover:bg-gray-200",children:"Profile"})}),Object(u.jsx)("div",{className:"divider border border-gray-200"}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("p",{className:"p-2 px-6  transition-colors duration-300 hover:bg-gray-200",children:"Help"})}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("p",{className:"p-2 px-6  transition-colors duration-300 hover:bg-gray-200",children:"Sign Out"})})]})]})},x=n(10),p=n.n(x),j=n(14);var g=function(e){var t=e.task,n=e.handleDelete;return Object(u.jsxs)("div",{id:t.id,className:"task-card flex flex-col justify-between bg-gray-50 border rounded-md p-2 my-1",draggable:"true",children:[Object(u.jsx)("p",{className:"text-left",children:t.title}),Object(u.jsxs)("div",{className:"flex flex-row justify-end",children:[Object(u.jsx)("div",{className:"px-1 text-gray-800 inline-block transform-all duration-200 cursor-pointer hover:text-gray-50 hover:bg-blue-500 hover:shadow-xl",children:Object(u.jsx)(o.a,{icon:i.b,className:"text-xs"})}),Object(u.jsx)("div",{className:"px-2 text-gray-800 inline-block transform-all duration-200 cursor-pointer hover:text-gray-50 hover:bg-red-500 hover:shadow-xl",onClick:n,children:Object(u.jsx)(o.a,{icon:i.f,className:"text-xs"})})]})]})};var f=function(e){e.taskGroupId,e.task;var t=e.handleTaskCreation,n=e.hidePanel;return Object(u.jsx)("div",{className:"absolute left-0 right-0 flex justify-center z-10",children:Object(u.jsx)("div",{className:" w-1/2 top-32",children:Object(u.jsxs)("div",{className:"flex flex-col pt-2 pb-10 bg-gray-100 shadow-2xl",children:[Object(u.jsx)("div",{className:"flex flex-row justify-end px-2",children:Object(u.jsx)("div",{className:"px-3 py-1 bg-red-600 transition-all duration-300 hover:bg-red-700 text-white cursor-pointer",onClick:n,children:Object(u.jsx)(o.a,{icon:i.f})})}),Object(u.jsxs)("form",{id:"task-form",action:"",className:"flex flex-col text-center px-10",onSubmit:function(e){!function(e){e.preventDefault();var n=document.querySelector("#task-name"),a=document.querySelector("#task-desc"),r=n.value,c=a.value;n.value="",a.value="",t(r,c)}(e)},children:[Object(u.jsx)("input",{type:"text",name:"",id:"task-name",placeholder:"Task Name...",className:"m-2 bg-transparent focus:outline-none text-gray-800 border-b-2 border-gray-800 text-md p-2"}),Object(u.jsx)("textarea",{rows:"4",cols:"50",id:"task-desc",className:"resize-none text-md p-2 bg-transparent border-2 border-gray-800 rounded-lg focus:outline-none m-2",placeholder:"Comments..."}),Object(u.jsxs)("div",{className:"labels-container border-2 border-gray-800 rounded-lg p-3 flex flex-col m-2",children:[Object(u.jsxs)("div",{className:"selected-labels border-b-2 border-gray-300 p-2 flex flex-col",children:[Object(u.jsx)("p",{className:"text-left text-md font-mono text-gray-500 uppercase mb-2 underline",children:"Selected:"}),Object(u.jsx)("div",{className:"flex flex-row justify-start",children:Object(u.jsx)("div",{className:"label-check cursor-pointer rounded-md inline-block shadow-lg px-4 py-1",children:"Label"})})]}),Object(u.jsxs)("div",{className:"unselected-labels p-2 flex flex-col",children:[Object(u.jsx)("p",{className:"text-left text-md font-mono text-gray-500 uppercase mb-2 underline",children:"Other Labels:"}),Object(u.jsx)("div",{className:"flex flex-row justify-start",children:Object(u.jsx)("div",{className:"label-check cursor-pointer rounded-md inline-block shadow-lg px-4 py-1",children:"Label"})})]})]}),Object(u.jsx)("div",{className:"flex flex-row justify-center",children:Object(u.jsx)("input",{type:"submit",name:"createTask",value:"Save Task",id:"",className:"w-1/2 m-2 p-2 border-2 border-gray-800 bg-transparent text-gray-800 transition-all duration-300 hover:bg-gray-800 hover:text-white"})})]})]})})})},m=n(20),h=n.n(m),y={graphql_uri:"/graphql/",fontawesome_link:Object(u.jsx)("a",{href:"https://fontawesome.com/",target:"_blank",rel:"nooperner noreferrer",className:"text-gray-200 italic",children:"FontAwesome"}),react_link:Object(u.jsx)("a",{href:"https://reactjs.org/",target:"_blank",rel:"nooperner noreferrer",className:"text-gray-200 italic",children:"React JS"}),tailwind_link:Object(u.jsx)("a",{href:"https://tailwindcss.com/",target:"_blank",rel:"nooperner noreferrer",className:"text-gray-200 italic",children:"Tailwind CSS"}),profile_link:Object(u.jsx)("a",{href:"http://prtkgoswami.github.io/",target:"_blank",rel:"nooperner noreferrer",children:"Pratik Goswami"}),sample_collection_data:[{id:"123876",title:"List 1",collections:[{id:"26351",title:"Collection 1",tasks:[{id:"914795",title:"Task 1",labels:["new"],collectionId:"26351"},{id:"914796",title:"Task 2",labels:["new"],collectionId:"26351"},{id:"914797",title:"Exercitationem voluptatum neque a ea aut! Modi numquam id culpa quis.",labels:["new"],collectionId:"26351"},{id:"914798",title:"Task 4",labels:["new"],collectionId:"26351"}]},{id:"26352",title:"Collection 2",tasks:[{id:"914799",title:"Task 1",labels:["new"],collectionId:"26352"},{id:"914800",title:"Task 2",labels:["new"],collectionId:"26352"},{id:"914801",title:"Task 3",labels:["new"],collectionId:"26352"},{id:"914802",title:"Task 4",labels:["new"],collectionId:"26352"}]},{id:"26353",title:"Collection 3",tasks:[{id:"914804",title:"Task 1",labels:["new"],collectionId:"26353"},{id:"914805",title:"Task 2",labels:["new"],collectionId:"26353"}]},{id:"26354",title:"Collection 4",tasks:[]},{id:"26355",title:"Collection 5",tasks:[{id:"914806",title:"Task 1",labels:["new"],collectionId:"26355"}]}]},{id:"123877",title:"List 2 is the best one of all Lists in the Sample Data",collections:[]},{id:"123878",title:"List 3",collections:[]},{id:"123879",title:"List 4",collections:[]}],sample_labels_data:[{id:"29786",title:"new",color:"#F9FAFB"},{id:"29787",title:"in-progress",color:"#FCD34D"},{id:"29788",title:"completed",color:"#34D399"},{id:"29789",title:"cancelled",color:"#EF4444"}]};var v={getAllLists:function(){return"\n        {\n            getAllLists {\n                id\n                title\n            }\n        }\n    "},createList:function(e){return'\n        mutation {\n            createList (list: {title: "'.concat(e,'"}) {\n                id\n                title\n            }\n        }\n    ')},deleteList:function(e){return'\n        mutation {\n            deleteList(list_id: "'.concat(e,'")\n        }\n    ')},updateList:function(e,t){return'\n        mutation {\n            updateList (\n                list_id: "'.concat(e,'",\n                list: {title: "').concat(t,'"}\n            ) {\n                id\n                title\n                taskGroups\n            }\n        }\n    ')},getAllTaskGroupsByListId:function(e){return'\n        {\n            getAllTaskGroupsByList (list_id: "'.concat(e,'") {\n                id\n                title\n                tasks {\n                    id\n                    title\n                    description\n                }\n            }\n        }\n    ')},createTaskGroup:function(e,t){return'\n        mutation {\n            createTaskGroup (\n                list_id: "'.concat(e,'",\n                taskGroup: {title: "').concat(t,'"}\n            ) {\n                id\n                title\n                tasks {\n                    id\n                    title\n                    description\n                    labels\n                }\n            }\n        }\n    ')},deleteTaskGroup:function(e,t){return'\n        mutation {\n            deleteTaskGroup (\n                list_id: "'.concat(e,'", \n                group_id: "').concat(t,'"\n              )\n        }\n    ')},updateTaskGroup:function(e,t){return'\n        mutation {\n            updateTaskGroup (\n                group_id: "'.concat(e,'",\n                taskGroup: {title: "').concat(t,'"}\n            ) {\n                id\n                title\n                tasks {\n                    id\n                    title\n                    description\n                    labels\n                }\n            }\n        }\n    ')},getAllTasksByTaskGroup:function(e){return'\n        {\n            getAllTasksByTaskGroup (group_id: "'.concat(e,'") {\n                id\n                title\n                description\n                labels\n            }\n        }\n    ')},createTask:function(e,t,n,a){var r;return r=void 0===a||a===[]?[]:a,'\n        mutation {\n            createTask (\n                group_id: "'.concat(e,'",\n                task: {\n                    title: "').concat(t,'",\n                    description: "').concat(n,'",\n                    labels: ["').concat(r,'"]\n                }\n            ) {\n                id\n                title\n                description\n                labels\n            }\n        }\n    ')},deleteTask:function(e,t){return'\n        mutation {\n            deleteTask (\n                group_id: "'.concat(e,'",\n                task_id: "').concat(t,'"\n            )\n        }\n    ')},updateTask:function(e,t,n,a,r){return'\n        mutation {\n            updateTask (\n                group_id: "'.concat(e,'",\n                task_id: "').concat(t,'",\n                task: {\n                    title: "').concat(n,'",\n                    description: "').concat(a,'",\n                    labels: ').concat(r,"\n                }\n            ) {\n                id\n                title\n                description\n                labels\n            }\n        }\n    ")},getAllLabels:function(){return"\n        {\n            getAllLabels {\n                id\n                title\n                color\n            }\n        }\n    "},getLabelsByTask:function(e,t){return'\n        {\n            getLabelsByTask (\n                group_id: "'.concat(e,'",\n                task_id: "').concat(t,'"\n            ) {\n                id\n                title\n                color\n            }\n        }\n    ')},createLabel:function(e,t){return'\n        mutation {\n            createLabel (\n                label: {\n                    title: "'.concat(e,'"\n                    color: "').concat(t,'"\n                }\n            ) {\n                id\n                title\n                color\n            }\n        }\n    ')},deleteLabel:function(e){return'\n        mutation {\n            deleteLabel (id: "'.concat(e,'")\n        }\n    ')},updateLabel:function(e,t,n){return'\n        mutation {\n            updateLabel (\n                id : "'.concat(e,'", \n                label: {\n                    title: "').concat(t,'",\n                    color: "').concat(n,'"\n                }\n            ) {\n                id\n                title\n                color\n            }\n        }\n    ')},sendQuery:function(e,t){return console.log(e),h.a.post(y.graphql_uri,{query:e})}};var k=function(e){var t=e.taskgroup,n=e.labels,c=e.handleGroupDelete,l=Object(r.useState)(!1),d=Object(s.a)(l,2),b=d[0],x=d[1],p=Object(r.useState)(t.tasks),j=Object(s.a)(p,2),m=j[0],h=j[1],y=Object(r.useState)(!1),k=Object(s.a)(y,2),O=k[0],w=k[1];function N(e){v.sendQuery(v.deleteTask(t.id,e)).then((function(e){v.sendQuery(v.getAllTasksByTaskGroup(t.id)).then((function(e){console.log(e),h(e.data.data.getAllTasksByTaskGroup)}))}))}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{id:t.id,className:"taskgroup-card w-full md:w-1/2 lg:w-1/4",draggable:"true",children:Object(u.jsxs)("div",{className:"taskgroup-card-body p-2 pb-4 bg-gray-800 dark:bg-gray-400 cursor-pointer m-1 border border-transparent rounded-lg  shadow-2xl",children:[Object(u.jsxs)("div",{className:"title-bar border-b border-gray-50 dark:border-gray-800 mb-2 py-1 flex flex-row justify-between",children:[Object(u.jsx)("input",{type:"text",className:"title-text disabled:bg-transparent text-lg text-left text-gray-800 disabled:text-gray-50 dark:text-gray-800 disabled:text-white",defaultValue:t.title,disabled:!b}),Object(u.jsxs)("div",{className:"button-group flex flex-row",children:[Object(u.jsx)("div",{className:"px-2 mx-1 rounded-sm hover:bg-blue-500 hover:bg-opacity-70 transition-all duration-500",onClick:function(){x(!b)},title:"Edit taskgroup Name",children:Object(u.jsx)(o.a,{icon:i.b,className:"text-gray-50 dark:text-gray-800"})}),Object(u.jsx)("div",{className:"px-2 mx-1 rounded-sm hover:bg-green-500 hover:bg-opacity-70 transition-all duration-500",title:"Add New Task",children:Object(u.jsx)(o.a,{icon:i.c,className:"text-gray-50 dark:text-gray-800"})}),Object(u.jsx)("div",{className:"px-2 mx-1 rounded-sm hover:bg-red-600 hover:bg-opacity-70 transition-all duration-500",title:"Delete taskgroup",onClick:c,children:Object(u.jsx)(o.a,{icon:i.f,className:"text-gray-50 dark:text-gray-800"})})]})]}),Object(u.jsx)("div",{className:"task-container flex flex-col max-h-60 px-2 py-1 ".concat(m.length>0&&"overflow-y-scroll"),children:m.length>0&&m.map((function(e,t){return Object(u.jsx)(g,{task:e,handleDelete:function(){return N(e.id)}},e.id)}))}),Object(u.jsx)("div",{className:"new-task bg-gray-50 dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-100 dark:text-gray-50 dark:hover:bg-opacity-90 hover:bg-opacity-70 border border-transparent rounded-md p-2 mx-2 mt-1 my-1",onClick:function(){w(!0)},children:Object(u.jsx)("p",{className:"text-center",children:"New Task"})})]})}),O&&Object(u.jsx)(f,{taskGroupId:t.id,task:void 0,handleTaskCreation:function(e,r){return function(e,r){w(!1);for(var c="",l=0;l<n.length;l++){var s=n[l];if("new"===s.title){c=s.id;break}}v.sendQuery(v.createTask(t.id,e,r,[c])).then((function(e){console.log(e),h((function(t){return[].concat(Object(a.a)(t),[e.data.data.createTask])}))}))}(e,r)},hidePanel:function(){return w(!1)}})]})},O=(n(61),n(2));var w=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(!1),x=Object(s.a)(l,2),g=x[0],f=x[1],m=function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.sendQuery(v.getAllLists()).then((function(e){console.log(e),c(e.data.data.getAllLists)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){m()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)("div",{className:"flex flex-row justify-center",children:[Object(u.jsxs)("div",{className:"flex flex-row flex-wrap w-2/3 justify-start",children:[0===n.length&&Object(u.jsx)("p",{className:"mt-20 w-full text-2xl md:text-4xl lg:text-6xl font-mono font-bold text-center text-gray-800 opacity-40 uppercase",children:"Start your First Project"}),n.map((function(e){return Object(u.jsx)("div",{id:"list-".concat(e.id),className:"w-1/2 p-5",children:Object(u.jsxs)("div",{className:"bg-gray-200 h-full flex flex-col justify-between w-full p-5 border rounded-lg shadow-xl",children:[Object(u.jsx)(d.b,{to:"/list/",state:{list_id:e.id,list_name:e.title},className:"flex text-xl text-left text-gray-800 border-b border-gray-600 mb-5 cursor-pointer",children:Object(u.jsx)("p",{children:e.title})}),Object(u.jsx)("div",{className:"flex flex-row justify-between",children:Object(u.jsx)("div",{className:"bg-transparent transition-all duration-300 hover:bg-red-600 border border-transparent rounded-md shadow-2xl text-gray-800 hover:text-white px-2 py-1 cursor-pointer",onClick:function(){!function(e){var t=document.querySelector("#list-".concat(e));console.log("Deleting "+e),console.log(t),v.sendQuery(v.deleteList(e)).then((function(e){console.log(e),m()}))}(e.id)},children:Object(u.jsx)(o.a,{icon:i.g,className:""})})})]})},e.id)})),Object(u.jsx)("div",{className:"w-1/2 p-5 flex flex-row justify-center",children:Object(u.jsxs)("div",{className:"bg-gray-200 bg-opacity-60 hover:bg-opacity-100 cursor-pointer h-full flex flex-col justify-between content-center w-full p-7 text-center border rounded-lg shadow-xl",onClick:function(){f(!0)},children:[Object(u.jsx)("p",{children:Object(u.jsx)(o.a,{icon:i.d,className:"text-5xl mb-3 text-gray-800 opacity-40"})}),Object(u.jsx)("p",{className:"text-xl font-light font-mono text-gray-800",children:"New List"})]})})]}),g&&Object(u.jsx)("div",{className:"absolute w-1/2 top-60",children:Object(u.jsxs)("div",{className:"flex flex-col pt-2 pb-10 bg-gray-100 shadow-2xl",children:[Object(u.jsx)("div",{className:"flex flex-row justify-end px-2",children:Object(u.jsx)("div",{className:"px-3 py-1 bg-red-600 transition-all duration-300 hover:bg-red-700 text-white cursor-pointer",onClick:function(){f(!1)},children:Object(u.jsx)(o.a,{icon:i.f})})}),Object(u.jsxs)("form",{action:"",className:"flex flex-col text-center px-10",onSubmit:function(){!function(){var e=document.querySelector("#new-list-input"),t=e.value;e.value="",f(!1),console.log("Creating New List with name "+t),v.sendQuery(v.createList(t)).then((function(e){console.log(e),c((function(t){return[].concat(Object(a.a)(t),[e.data.data.createList])}))}))}()},children:[Object(u.jsx)("input",{type:"text",name:"",id:"new-list-input",placeholder:"List Name...",className:"m-2 bg-transparent focus:outline-none text-gray-800 border-b-2 border-gray-800 text-xl p-2"}),Object(u.jsx)("div",{className:"flex flex-row justify-center",children:Object(u.jsx)("input",{type:"submit",name:"createList",value:"Create List",id:"",className:"w-1/2 m-2 p-2 border-2 border-gray-800 bg-transparent text-gray-800 transition-all duration-300 hover:bg-gray-800 hover:text-white"})})]})]})})]})]})};var N=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)({}),d=Object(s.a)(l,2),x=d[0],g=d[1],f=Object(r.useState)(!1),m=Object(s.a)(f,2),h=m[0],y=m[1],w=(Object(O.g)().postSlug,Object(O.e)().state),N=w.list_id,L=w.list_name,T=function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.sendQuery(v.getAllTaskGroupsByListId(N)).then((function(e){console.log(e),c(e.data.data.getAllTaskGroupsByList)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.sendQuery(v.getAllLabels()).then((function(e){console.log(e),g(e.data.data.getAllLabels)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){T(),S()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{title:L}),Object(u.jsxs)("div",{className:"flex flex-row justify-center",children:[Object(u.jsxs)("div",{className:"taskgroup-container w-full flex flex-row flex-wrap content-start px-10 mt-5",children:[n.length>0&&n.map((function(e,t){return Object(u.jsx)(k,{taskgroup:e,labels:x,handleGroupDelete:function(){return t=e.id,void v.sendQuery(v.deleteTaskGroup(N,t)).then((function(e){console.log(e),T()}));var t}},e.id)})),Object(u.jsx)("div",{id:"new-taskgroup",className:"w-full md:w-1/2 lg:w-1/4",children:Object(u.jsxs)("div",{className:"taskgroup-card-body p-4 bg-gray-400 bg-opacity-40 cursor-pointer text-center m-1 border border-transparent rounded-lg shadow-xl transition-all duration-200 hover:shadow-2xl hover:bg-opacity-60",onClick:y,children:[Object(u.jsx)("p",{children:Object(u.jsx)(o.a,{icon:i.d,className:"text-5xl mb-3 dark:text-gray-200 text-gray-800 opacity-40"})}),Object(u.jsx)("p",{className:"text-xl font-light font-mono dark:text-gray-200 text-gray-800",children:"New Task Group"})]})})]}),h&&Object(u.jsx)("div",{className:"absolute w-1/2 top-60",children:Object(u.jsxs)("div",{className:"flex flex-col pt-2 pb-10 bg-gray-100 shadow-2xl",children:[Object(u.jsx)("div",{className:"flex flex-row justify-end px-2",children:Object(u.jsx)("div",{className:"px-3 py-1 bg-red-600 transition-all duration-300 hover:bg-red-700 text-white cursor-pointer",onClick:function(){y(!1)},children:Object(u.jsx)(o.a,{icon:i.f})})}),Object(u.jsxs)("form",{action:"",className:"flex flex-col text-center px-10",onSubmit:function(e){!function(e){e.preventDefault();var t=document.querySelector("#taskgroup-name"),n=t.value;t.value="",console.log(n),y(!1),v.sendQuery(v.createTaskGroup(N,n)).then((function(e){console.log(e),c((function(t){return[].concat(Object(a.a)(t),[e.data.data.createTaskGroup])}))}))}(e)},children:[Object(u.jsx)("input",{type:"text",name:"",id:"taskgroup-name",placeholder:"Task Group Name...",className:"m-2 bg-transparent focus:outline-none text-gray-800 border-b-2 border-gray-800 text-xl p-2"}),Object(u.jsx)("div",{className:"flex flex-row justify-center",children:Object(u.jsx)("input",{type:"submit",name:"CreateTaskGroup",value:"Create Task Group",id:"",className:"w-1/2 m-2 p-2 border-2 border-gray-800 bg-transparent text-gray-800 transition-all duration-300 hover:bg-gray-800 hover:text-white"})})]})]})})]})]})};var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)}))};l.a.render(Object(u.jsx)(d.a,{children:Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{path:"/",element:Object(u.jsx)(w,{})}),Object(u.jsx)(O.a,{path:"/list",children:Object(u.jsx)(O.a,{path:"",element:Object(u.jsx)(N,{})})})]})}),document.getElementById("root"));var T=document.querySelector("#dark-mode-switch");T.addEventListener("change",(function(){T.checked?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}));var S=document.querySelector(".taskgroup-container"),_=document.querySelectorAll(".taskgroup-card"),C=document.querySelectorAll(".task-container"),G=document.querySelectorAll(".task-card");_.forEach((function(e){e.addEventListener("dragstart",(function(t){t.stopPropagation(),console.log("Dragging "+e.id),e.classList.add("dragging","opacity-80")})),e.addEventListener("dragend",(function(t){t.stopPropagation(),e.classList.remove("dragging","opacity-80")})),e.addEventListener("dragover",(function(t){if(t.preventDefault(),t.stopPropagation(),!e.classList.contains("dragging")){var n=document.querySelector(".dragging");null!==n&&n.classList.contains("collection-card")&&(void 0===e.previousSibling||null===e.previousSibling?S.insertBefore(n,e):S.insertBefore(n,e.nextSibling))}}))})),G.forEach((function(e){e.addEventListener("dragstart",(function(t){t.stopPropagation(),e.classList.add("task-dragging","opacity-80"),console.log("Current parent of task "+e.id+": "+e.parentNode.parentNode.parentNode.id)})),e.addEventListener("dragend",(function(t){t.stopPropagation(),e.classList.remove("task-dragging","opacity-80"),console.log("Dropped parent of task "+e.id+": "+e.parentNode.parentNode.parentNode.id)}))})),C.forEach((function(e){e.addEventListener("dragover",(function(t){t.preventDefault(),t.stopPropagation();var n=document.querySelector(".task-dragging");if(null!==n&&n.classList.contains("task-card")){var r=function(e,t){return Object(a.a)(e.querySelectorAll(".task-card:not(.task-dragging)")).reduce((function(e,n){var a=n.getBoundingClientRect(),r=t-a.top-a.height/2;return r<0&&r>e.offset?{offset:r,element:n}:e}),{offset:Number.NEGATIVE_INFINITY}).element}(e,t.clientY);null==r?e.appendChild(n):e.insertBefore(n,r)}}))})),document.querySelectorAll(".label-check").forEach((function(e){e.addEventListener("click",(function(){e.classList.contains("active")?e.classList.remove("active","bg-blue-400"):e.classList.add("active","bg-blue-400")}))})),L()}},[[62,1,2]]]);
//# sourceMappingURL=main.ccc60fa4.chunk.js.map