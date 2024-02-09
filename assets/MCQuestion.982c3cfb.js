var C=Object.defineProperty,T=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(i,r,n)=>r in i?C(i,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[r]=n,w=(i,r)=>{for(var n in r||(r={}))M.call(r,n)&&f(i,n,r[n]);if(k)for(var n of k(r))S.call(r,n)&&f(i,n,r[n]);return i},v=(i,r)=>T(i,L(r));import{D as p,P as H,L as D,v as N,j as s,k as o,l as c,y as u,H as I,m as b,G as j,F as _,x,M as R,N as A,E as h}from"./index.247793cd.js";import"./axios.fbe93d3f.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";const B={data(){return{timing:null,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,starttime:Date.now(),ended:null,inttime:109090,viewDetails:!1,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(i,r,n){var t;if((t=JSON.parse(localStorage.getItem("math_24_cycle")))==null?void 0:t.roll){if(i.query.type=="free"){n();return}if(i.query.type=="paid"){let a=i.query.cycle,d;if(a!="mega"?d=localStorage.getItem(`math_24_cycle_${a}`):["math_24_cycle_1","math_24_cycle_2","math_24_cycle_2","math_24_cycle_4"].forEach(l=>{localStorage.getItem(l)&&(d=!0)}),d){n();return}else{n({name:"Access",query:{cycle:a=="mega"?1:a}});return}}}n({path:"/login"})},methods:{endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0,p.get(`/exams/${this.$route.params.id}`).then(i=>{let r=i.data.exam;if(new Date(r.start_time).getTime()>Date.now()){this.$router.push("/");return}let n=JSON.parse(localStorage.getItem("math_24_cycle")).roll;p.get(`/questions/${this.$route.params.id}?roll=${n}`).then(m=>{m.data.hasParticipated?(this.result=m.data.result?m.data.result:["","Time's up"],this.solution=m.data.questions,this.unknown=!1,this.loading=!1):(this.unknown=!0,this.questions=m.data.questions,this.loading=!1,this.showRemaining(this.end),this.autoSubmit())})})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let i=this.solution.reduce((r,n)=>(n.correct==n.selected?(r+=10,this.status.Correct+=1):n.selected?(r-=2.5,this.status.Wrong+=1):this.status.Not_Answered+=1,r),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${i}, Correct ${this.status.Correct} Wrong ${this.status.Wrong} Not Answered ${this.status.Not_Answered}`}).then(()=>{this.retake=!1,this.show=!1,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=i,this.solution=this.solution.map(r=>v(w({},r),{selected:""})),window.scroll(0,0)})},submitAns(){let i=Date.now()-this.starttime;this.eload=!0;let r=this.questions.reduce((d,e)=>(e.correct==e.selected?(d+=10,this.status.Correct+=1):e.selected?(d-=2.5,this.status.Wrong+=1):this.status.Not_Answered+=1,d),0);clearTimeout(this.timing);let{roll:n,name:m,college:t}=JSON.parse(localStorage.getItem("math_24_cycle")),a=this.questions.map((d,e)=>{let g=[d.a,d.b,d.c,d.d].indexOf(d.selected);return{id:e,s:g}}).filter(d=>d.s>-1);p.post("/participate?id="+this.$route.params.id,{roll:n,name:m,attempt:localStorage.getItem(`attempt${this.$route.params.id}`)||1,score:r,college:t,duration:i,submission:JSON.stringify(a)}).then(()=>{clearTimeout(this.timing),parseInt(this.$route.query.q||this.questions.length),this.$swal({icon:"success",title:"Successfully Submitted",text:`You Scored ${r}`}).then(()=>{localStorage.removeItem(`attempt${this.$route.params.id}`),this.gotoLeaderboard(),window.scroll(0,0)})})},gotoLeaderboard(){this.$router.replace("/")},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(i){this.show=!0;const r=setInterval(()=>{const n=i-Date.now();if(n<0){clearInterval(r);return}const m=Math.floor(n/this._days),t=Math.floor(n%this._days/this._hours),a=Math.floor(n%this._hours/this._minutes),d=Math.floor(n%this._minutes/this._seconds);this.second=d<10?"0"+d:d,this.minute=a<10?"0"+a:a,this.hours=t<10?"0"+t:t,this.days=m<10?"0"+m:m},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:v(w({},H(["user"])),{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>D.state.currentTime})},y=i=>(R("data-v-08af1dc7"),i=i(),A(),i),E={key:0,class:"py-5 mx-auto mt-5 rounded bg-gray-50 md:w-2/3"},Q={class:"py-3 text-center"},W={key:0,class:"my-4 text-2xl font-bold text-gray-900 ma-auto"},O={key:0},Y={key:1,class:"text-center text-gray-900"},J={key:0,class:"my-5 text-center"},V={key:1,class:"text-center"},z=["textContent"],F={key:2,class:"text-center"},P=y(()=>c("button",{class:"btn loading btn-circle"},null,-1)),G=[P],K={key:3,class:"my-4 font-semibold text-center text-gray-900"},U={key:1,class:"pb-10"},X={class:"py-4 text-center"},Z={class:"text-2xl font-bold text-gray-900"},q=y(()=>c("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),ee={class:"mx-2 text-gray-900 md:w-2/3 md:mx-auto"},te=["src"],se=["innerHTML"],oe={class:"btn btn-sm"},re={class:"mt-2"},ne=["src","onClick"],ie=["innerHTML","onClick"],le=["src","onClick"],ce=["innerHTML","onClick"],de=["src","onClick"],ae=["innerHTML","onClick"],ue=["src","onClick"],he=["innerHTML","onClick"],ge={class:"mb-10 text-center"},me={key:2,class:"pb-10"},be={class:"py-4 text-center"},_e={class:"text-2xl font-bold text-gray-900"},ye=y(()=>c("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),we={class:"mx-2 md:w-2/3 md:mx-auto"},ve=["src"],pe=["innerHTML"],ke={class:"btn btn-sm"},fe={class:"mt-2"},xe=["src","onClick"],Ce={key:1,class:"mt-3"},Te=["innerHTML","onClick"],Le=["src","onClick"],Me=["innerHTML","onClick"],Se=["src","onClick"],He=["innerHTML","onClick"],De=["src","onClick"],Ne=["innerHTML","onClick"],Ie={key:0,class:"my-2 text-center"},je={key:1,class:"mb-10 text-center"},Re=["disabled"],Ae={key:3,class:"white--text fixed__timer"},$e={class:"text-white bg-blue-500 border border-white shadow"},Be={key:1,class:"flex items-center justify-center w-full h-screen"},Ee=y(()=>c("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[c("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[c("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),c("div",{class:"text-lg"},"Loading ...")],-1)),Qe=[Ee];function We(i,r,n,m,t,a){const d=N("router-link");return t.loading?(s(),o("div",Be,Qe)):(s(),o("div",{key:0,onContextmenu:e=>!1},[!t.unknown&&!t.loading&&!t.retake?(s(),o("div",E,[c("div",Q,[t.result[1]?(s(),o("h2",W,[t.result[1]!=="Time's up"?(s(),o("span",O,"You Scored:")):u("",!0),I(" "+b(t.result[1]),1)])):u("",!0),t.result[1]=="Time's up"?(s(),o("p",Y,"But you can still give the exam. Click 'Test yourself again'.")):u("",!0)]),!t.retake&&t.solution.length>0?(s(),o("div",J,[new Date(t.ended).getTime()<a.currentTime?(s(),j(d,{key:0,to:`/ranking/${this.$route.params.id}`,class:"mx-auto my-2 btn btn-primary",text:"View Your Rank"},null,8,["to"])):u("",!0)])):u("",!0),!t.retake&&t.solution.length>0?(s(),o("div",V,[c("button",{class:"mx-auto btn btn-primary",onClick:r[0]||(r[0]=(...e)=>a.startRetake&&a.startRetake(...e)),textContent:b("Test Yourself Again")},null,8,z)])):(s(),o("div",F,G)),!t.retake&&t.solution.length>0?(s(),o("div",K," Retake exam score will not be recorded ")):u("",!0)])):u("",!0),t.retake?(s(),o("div",U,[c("div",X,[c("h1",Z," Retake Exam - "+b(this.$route.params.id),1),q]),c("div",ee,[(s(!0),o(_,null,x(t.solution,(e,l)=>(s(),o("div",{key:l,class:h(["p-5 mx-auto my-3 text-lg text-gray-900 bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.solution[l].selected}])},[e.question.includes("drive.google.com")?(s(),o("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,te)):(s(),o("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,se)),c("span",oe,"Q No. "+b(l+1),1),c("div",re,[e.a.includes("drive.google.com")?(s(),o("img",{key:0,src:e.a,onClick:g=>t.solution[l].selected=e.a,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white "}`]),alt:""},null,10,ne)):(s(),o(_,{key:1},[e.a?(s(),o("div",{key:0,innerHTML:e.a,onClick:g=>t.solution[l].selected=e.a,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,ie)):u("",!0)],64)),e.b.includes("drive.google.com")?(s(),o("img",{key:2,src:e.b,onClick:g=>t.solution[l].selected=e.b,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,le)):(s(),o(_,{key:3},[e.b?(s(),o("div",{key:0,innerHTML:e.b,onClick:g=>t.solution[l].selected=e.b,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,ce)):u("",!0)],64)),e.c.includes("drive.google.com")?(s(),o("img",{key:4,src:e.c,onClick:g=>t.solution[l].selected=e.c,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,de)):(s(),o(_,{key:5},[e.c?(s(),o("div",{key:0,innerHTML:e.c,onClick:g=>t.solution[l].selected=e.c,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,ae)):u("",!0)],64)),e.d.includes("drive.google.com")?(s(),o("img",{key:6,src:e.d,onClick:g=>t.solution[l].selected=e.d,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,ue)):(s(),o(_,{key:7},[e.d?(s(),o("div",{key:0,innerHTML:e.d,onClick:g=>t.solution[l].selected=e.d,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,he)):u("",!0)],64))])],2))),128)),c("div",ge,[c("button",{onClick:r[1]||(r[1]=(...e)=>a.retakeResult&&a.retakeResult(...e)),class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"}," Submit ")])])])):u("",!0),t.questions.length>0?(s(),o("div",me,[c("div",be,[c("h1",_e," Exam - "+b(this.$route.params.id),1),ye]),c("div",we,[(s(!0),o(_,null,x(t.questions,(e,l)=>(s(),o("div",{key:l,class:h(["p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.questions[l].selected}])},[e.question.includes("drive.google.com")?(s(),o("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,ve)):(s(),o("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,pe)),c("span",ke,"Q No. "+b(l+1),1),c("div",fe,[e.a.includes("drive.google.com")?(s(),o("img",{key:0,src:e.a,onClick:g=>t.questions[l].selected=e.a,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,xe)):(s(),o("div",Ce,[e.a?(s(),o("div",{key:0,innerHTML:e.a,onClick:g=>t.questions[l].selected=e.a,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Te)):u("",!0),e.b.includes("drive.google.com")?(s(),o("img",{key:1,src:e.b,onClick:g=>t.questions[l].selected=e.b,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Le)):(s(),o(_,{key:2},[e.b?(s(),o("div",{key:0,innerHTML:e.b,onClick:g=>t.questions[l].selected=e.b,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Me)):u("",!0)],64)),e.c.includes("drive.google.com")?(s(),o("img",{key:3,src:e.c,onClick:g=>t.questions[l].selected=e.c,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Se)):(s(),o(_,{key:4},[e.c?(s(),o("div",{key:0,innerHTML:e.c,onClick:g=>t.questions[l].selected=e.c,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,He)):u("",!0)],64)),e.d.includes("drive.google.com")?(s(),o("img",{key:5,src:e.d,onClick:g=>t.questions[l].selected=e.d,class:h(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,De)):(s(),o(_,{key:6},[e.d?(s(),o("div",{key:0,innerHTML:e.d,onClick:g=>t.questions[l].selected=e.d,class:h(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Ne)):u("",!0)],64))]))])],2))),128)),t.viewDetails?(s(),o("div",Ie,[c("button",{onClick:r[2]||(r[2]=(...e)=>a.gotoLeaderboard&&a.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):u("",!0),t.viewDetails?u("",!0):(s(),o("div",je,[c("button",{onClick:r[3]||(r[3]=(...e)=>a.submitAns&&a.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},b(t.eload?"Loading...":"Submit"),9,Re)]))])])):u("",!0),t.show?(s(),o("div",Ae,[c("div",$e,b(t.minute)+" : "+b(t.second),1)])):u("",!0)],32))}var ze=$(B,[["render",We],["__scopeId","data-v-08af1dc7"]]);export{ze as default};
