(function(){"use strict";var t={633:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(8935),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"home"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("div",{on:{click:t.incrementClicks}},[t._v("Bored?")])]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[n("div",{staticClass:"navbar-nav"},[n("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/quiz"}},[n("div",{on:{click:t.incrementClicks}},[t._v("Death Quiz")])]),n("router-link",{staticClass:"nav-item nav-link active",attrs:{to:"/kanye"}},[n("div",{on:{click:t.incrementClicks}},[t._v("Kanye Quotes")])]),n("div",{staticClass:"nav-item nav-link active",on:{click:t.incrementClicks}},[t._v("Clicks: "+t._s(t.clicks))])],1)])],1),n("router-view",{staticClass:"view-content"}),n("footer",{attrs:{id:"foot"}},[n("a",{staticClass:"git-link",attrs:{href:"https://github.com/jakitch/bored"},on:{click:t.incrementClicks}},[n("img",{attrs:{src:"/images/gitlight.png"}})])])],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],o={methods:{incrementClicks:function(){this.$root.$data.numButtonsClicked++}},computed:{clicks:function(){return this.$root.$data.numButtonsClicked}}},r=o,u=n(1001),c=(0,u.Z)(r,s,a,!1,null,null,null),l=c.exports,d=n(2809),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("typewriter",{staticClass:"bored-type",attrs:{replace:t.replace,"type-replace":100,"replace-interval":1250}},[t._v(" Bored? ")]),n("div",{staticClass:"button",on:{click:t.switchToRandomPage}},[t._v("Click Me")]),n("h2",[t._v("Number of buttons clicked: "),n("br"),t._v(t._s(t.numButtonsClicked))])],1)},f=[],v=n(1680),m={name:"HomeView",components:{Typewriter:v.Z},data:function(){return{replace:[{from:"Bored?",to:"Click below!"}]}},methods:{switchToRandomPage:function(){this.$root.$data.numButtonsClicked++,Math.random()<.5?this.$router.push("/quiz"):this.$router.push("/kanye")}},computed:{numButtonsClicked:function(){return this.$root.$data.numButtonsClicked},title:function(){return"wut?"}}},p=m,k=(0,u.Z)(p,h,f,!1,null,"7bb0417e",null),g=k.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h1",[t._v("Inspiration from Kanye")]),n("img",{attrs:{src:"images/Kanye-West.jpg"}}),n("div",{staticClass:"button",on:{click:t.getQuote}},[t._v("New Quote")]),n("h2",[t._v(t._s(t.quote)),n("br"),n("br"),t._v("--Kayne West")])])},q=[],C=(n(1539),n(6699),n(2023),{name:"KanyeView",data:function(){return{kanyeQuote:""}},created:function(){this.fetchQuote(this)},methods:{fetchQuote:function(){this.fetchQuoteHelper(this)},fetchQuoteHelper:function(t){var e="https://api.kanye.rest";fetch(e).then((function(t){return t.json()})).then((function(e){function n(t){return!(t.includes("fuck")||t.includes("shit")||t.includes("sex")||t.includes("porn"))}t.kanyeQuote!==e.quote&&n(e.quote)?t.kanyeQuote=e.quote:t.fetchQuote()}))},getQuote:function(){this.$root.$data.numButtonsClicked++,this.fetchQuote()}},computed:{quote:function(){return'"'.concat(this.kanyeQuote,'"')}}}),w=C,_=(0,u.Z)(w,b,q,!1,null,"67a21509",null),Q=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h1",[t._v("Death Quiz")]),t.failedQuiz?t._e():n("img",{attrs:{id:"quizImg",src:"images/Skull.png"}}),t.failedQuiz?n("img",{attrs:{id:"deathImg",src:"images/Flame.png"}}):t._e(),t.quizBegun?t._e():n("h2",{staticClass:"question"},[t._v("Answer a question wrong and you die.")]),t.quizBegun?n("h2",{staticClass:"question"},[t._v(t._s(t.currentQuestion))]):t._e(),t.quizBegun?t._e():n("div",{staticClass:"button",on:{click:t.beginQuiz}},[t._v("Begin Quiz")]),t.failedQuiz?n("div",{staticClass:"button",on:{click:t.reset}},[t._v("Retry?")]):t._e(),t.completedQuiz?n("div",{staticClass:"button",on:{click:t.reset}},[t._v("Play Again?")]):t._e(),!t.quizBegun||t.failedQuiz||t.completedQuiz?t._e():n("div",{staticClass:"button-container"},[n("div",{staticClass:"quizButton",on:{click:function(e){return t.checkAnswer(!0)}}},[t._v("True")]),n("div",{staticClass:"quizButton",on:{click:function(e){return t.checkAnswer(!1)}}},[t._v("False")])])])},z=[],B={name:"QuizView",data:function(){return{quizBegun:!1,failedQuiz:!1,completedQuiz:!1,question:"",answer:!1,questionList:this.$root.$data.questions,questionIndex:-1}},methods:{shuffleQuestions:function(){for(var t=this.questionList.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),n=this.questionList[t];this.questionList[t]=this.questionList[e],this.questionList[e]=n}},selectQuestion:function(){var t=this.questionList[++this.questionIndex];this.question=t.question,this.answer=t.answer},beginQuiz:function(){this.$root.$data.numButtonsClicked++,this.quizBegun=!0,this.shuffleQuestions(),this.selectQuestion()},checkAnswer:function(t){this.$root.$data.numButtonsClicked++,this.answer===t?(console.log(this.questionIndex),this.questionList.length===this.questionIndex+1?(this.question="YOU SURVIVED!!!",this.completedQuiz=!0):this.selectQuestion()):(this.question="YOU DIED!!!",this.failedQuiz=!0)},reset:function(){this.questionIndex=-1,this.$root.$data.numButtonsClicked++,this.quizBegun=!0,this.failedQuiz=!1,this.completedQuiz=!1,this.shuffleQuestions(),this.selectQuestion()}},computed:{currentQuestion:function(){return this.question}}},$=B,x=(0,u.Z)($,y,z,!1,null,"243db6a6",null),I=x.exports;i.Z.use(d.Z);var O=[{path:"/",name:"home",component:g},{path:"/kanye",name:"kanye",component:Q},{path:"/quiz",name:"quiz",component:I}],Z=new d.Z({mode:"history",base:"/",routes:O}),T=Z,j=n(789),L=[{id:0,question:"Idina Menzel sings 'let it go' 20 times in 'Let It Go' from Frozen.",answer:!1},{id:1,question:"The Great Wall of China is longer than the distance between London and Beijing.",answer:!0},{id:2,question:"Australia is wider than the moon.",answer:!0},{id:3,question:"The only letter not in the periodic table is the letter J.",answer:!0},{id:4,question:"Venus is the hottest planet in the solar system.",answer:!0},{id:5,question:"Cardi B's real name is Cardigan Backyardigan.",answer:!1},{id:6,question:"Goldfish have a two second memory.",answer:!1},{id:7,question:"There are 14 bones in a human foot.",answer:!1},{id:8,question:"In a deck of cards, the king has a mustache.",answer:!1},{id:9,question:"Hippos sweat a red substance.",answer:!0}],A=L;i.Z.config.productionTip=!1,i.Z.use(j.Z);var M={numButtonsClicked:0,questions:A};new i.Z({router:T,data:M,render:function(t){return t(l)}}).$mount("#app")}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={id:i,loaded:!1,exports:{}};return t[i](a,a.exports,n),a.loaded=!0,a.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,a){if(!i){var o=1/0;for(l=0;l<t.length;l++){i=t[l][0],s=t[l][1],a=t[l][2];for(var r=!0,u=0;u<i.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(r=!1,a<o&&(o=a));if(r){t.splice(l--,1);var c=s();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[i,s,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,a,o=i[0],r=i[1],u=i[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(u)var l=u(n)}for(e&&e(i);c<o.length;c++)a=o[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},i=self["webpackChunkbored"]=self["webpackChunkbored"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(633)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.752a7013.js.map