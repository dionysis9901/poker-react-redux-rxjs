(this["webpackJsonpdionysis-koufis-react-poker"]=this["webpackJsonpdionysis-koufis-react-poker"]||[]).push([[0],{39:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/cards.css.b35479c8.map"},41:function(e,t,a){e.exports=a.p+"static/media/poker.c4b9c7b4.png"},48:function(e,t,a){e.exports=a(63)},53:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),i=a(41),l=a.n(i),u=(a(53),function(e){var t=e.gameStart,a=e.gameOn,n=e.getUserName;return a?r.a.createElement(g,null):r.a.createElement("div",{className:"login"},r.a.createElement("h2",{className:"login__heading"},"Welcome To The Poker Game"),r.a.createElement("img",{className:"login__img",src:l.a,alt:"poker logo"}),r.a.createElement("p",{className:"login__tutorial"},"Enter Your Name & Press button to Begin!"),r.a.createElement("form",{className:"login__form"},r.a.createElement("input",{type:"text",placeholder:"Insert Your Name Here",className:"login__input",onChange:function(e){return n(e.target.value)}})),r.a.createElement("button",{onClick:t,className:"login__btn"},"You Versus CPU"),r.a.createElement("p",{className:"login__footer"},"Made by Dionysis Koufis Using",r.a.createElement("span",{role:"img","aria-label":"react"},"\u269b\ufe0f")))}),o=a(6),d=function(e){return function(e){var t=Object(o.c)((function(e){return e})),a=t.name,n=t.gameOn,c=Object(o.b)();return r.a.createElement(u,{name:a,gameOn:n,gameStart:function(){return c({type:"SETTING_GAME"})},getUserName:function(e){return c(function(e){return{type:"GET_USER_NAME",payload:{name:e}}}(e))}})}}(u),m=(a(59),a(39),a(40),function(e){var t=e.rank,a=e.suit,n=e.selected,c=e.cardSelected;return r.a.createElement("label",{htmlFor:"c-".concat(t).concat(a.slice(0,1).toUpperCase()),className:"card rank-".concat(t," ").concat(a),onChange:c},r.a.createElement("span",{className:"rank"},t.toUpperCase()),r.a.createElement("span",{className:"suit",dangerouslySetInnerHTML:{__html:"&".concat(a,";")}}),r.a.createElement("input",{type:"checkbox",name:"c-".concat(t).concat(a.slice(0,1).toUpperCase()),id:"c-".concat(t).concat(a.slice(0,1).toUpperCase()),value:"select",selected:n}))}),p=function(e){var t=e.hand,a=e.cardSelected;return r.a.createElement("div",null,r.a.createElement("div",{className:"handRow"},r.a.createElement("div",{className:"playingCards"},r.a.createElement("ul",{className:"table"},t.map((function(e){var n=e.rank,c=e.suit,s=e.selected,i=e.index;return r.a.createElement("li",{key:i},r.a.createElement(m,{hand:t,rank:n,suit:c,cardSelected:a,selected:s}))}))))))},h=function(e){return function(e){var t=Object(o.c)((function(e){return e})).playerHand,a=Object(o.b)();return r.a.createElement(p,{hand:t,cardSelected:function(e){return a((t=e.target.selected,n=e.target.id,{type:"CARD_SELECTED",payload:{selected:t,id:n}}));var t,n}})}}(p),f=function(e){var t=e.playerResult,a=e.cpuResult,n=e.winner;return null===t&&null===a&&null===n?r.a.createElement("div",{className:"stats"},r.a.createElement("p",{className:"awaitingRound"},"Waiting Round to finish")):r.a.createElement("div",{className:"stats"},r.a.createElement("div",{className:"stats__player"},"Player: ",t),r.a.createElement("div",{className:"stats__cpu"},"CPU: ",a),r.a.createElement("div",{className:"stats__winner"},"Winner:",r.a.createElement("span",{className:"stats__winner__mod"},n)))},y=function(e){var t=e.rank,a=e.suit;return r.a.createElement("div",{className:'card back href="#"'},r.a.createElement("span",{className:"rank"},t.toUpperCase()),r.a.createElement("span",{className:"suit",dangerouslySetInnerHTML:{__html:"&".concat(a,";")}}))},E=function(e){var t=e.hand;return r.a.createElement("div",null,r.a.createElement("div",{className:"handRow"},r.a.createElement("div",{className:"playingCards"},r.a.createElement("ul",{className:"table"},t.map((function(e,t){var a=e.rank,n=e.suit;return r.a.createElement("li",{key:t},r.a.createElement(y,{rank:a,suit:n}))}))))))},k=function(e){return function(e){var t=Object(o.c)((function(e){return e})).cpuHand;Object(o.b)();return r.a.createElement(E,{hand:t})}}(E),_=(a(60),function(e){var t=e.name,a=e.homePage,n=e.resultPlayer,c=e.resultCpu,s=e.winner,i=e.newRound,l=e.goToHome,u=e.cardsSelected,o=e.changeCards,m=e.playerMoney,p=e.cpuMoney,y=e.bidMoney,E=e.activeBid;return a?r.a.createElement(d,null):r.a.createElement("div",{className:"pokerMain"},r.a.createElement("div",{className:"pokerMain__console"},r.a.createElement("h2",{className:"pokerMain__console__tittle"},"Poker Console"),r.a.createElement("p",{className:"pokerMain__console__cardsSelection"},"You have selected"," ",r.a.createElement("span",{className:"colored"},u.length)," ",u.length<=1?r.a.createElement("p",{className:"cardText"},"card"):r.a.createElement("p",{className:"cardText"},"cards")),r.a.createElement("button",{className:"pokerMain__console__btnChange",onClick:o},"Change Cards"),r.a.createElement("p",{className:"console__playerMoney"},"Your Money : ",m,"\ud83d\udcb2"),r.a.createElement("p",{className:"console__cpuMoney"},"Host Money : ",p,"\ud83d\udcb2"),r.a.createElement("div",{className:"console__buttonsBid"},r.a.createElement("p",{className:"console__bidText"},"Bid:"),r.a.createElement("button",{className:"console__btnBid",disabled:m<=100,onClick:function(){return y(100)}},"100\ud83d\udcb2"),r.a.createElement("button",{className:"console__btnBid",disabled:!(m>=200),onClick:function(){return y(200)}},"200\ud83d\udcb2")),r.a.createElement("p",null,"Active Bids: ",r.a.createElement("span",{className:"colored"},E,"\ud83d\udcb2")),r.a.createElement(f,{playerResult:n,cpuResult:c,winner:s}),r.a.createElement("button",{className:"pokerMain__reset",onClick:i},"Reset"),r.a.createElement("button",{className:"pokerMain__toHome",onClick:l},"Back To Home Screen")),r.a.createElement("div",{className:"pokerMain__handsContainer"},r.a.createElement("div",{className:"pokerMain__box"},r.a.createElement("p",{className:"pokerMain__box__player"},t)),r.a.createElement(h,null),r.a.createElement("div",{className:"pokerMain__box"},r.a.createElement("p",{className:"pokerMain__box__host"},"Host")),r.a.createElement(k,null)))}),g=function(e){return function(e){var t=Object(o.c)((function(e){return e})),a=t.name,n=t.homePage,c=t.gameOn,s=t.resultPlayer,i=t.resultCpu,l=t.winner,u=t.cardsSelected,d=t.playerMoney,m=t.cpuMoney,p=t.activeBid,h=Object(o.b)();return r.a.createElement(_,{name:a,gameOn:c,homePage:n,resultPlayer:s,resultCpu:i,winner:l,cardsSelected:u,playerMoney:d,cpuMoney:m,changeCards:function(){return h({type:"CHANGE_CARDS"})},newRound:function(){return h({type:"RESET"})},goToHome:function(){return h({type:"GO_TO_HOME"})},bidMoney:function(e){return h(function(e){return{type:"PLAYER_BID",payload:{money:e}}}(e))},activeBid:p})}}(_),b=(a(61),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(17),v=a(68),N=a(67),C=a(29),w=a(5),S={name:"You",gameOn:!1,homePage:!0,deck:null,playerHand:null,cpuHand:null,playerMoney:200,cpuMoney:200,activeBid:0,resultPlayer:null,resultCpu:null,winner:null,cardsSelected:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_USER_NAME":return Object(w.a)({},e,{name:n.name});case"SETTING_GAME":return Object(w.a)({},e,{gameOn:!0,homePage:!1});case"DECK_CREATION":return Object(w.a)({},e,{deck:n.deck});case"DECK_SERVED":return Object(w.a)({},e);case"GIVE_CARDS_TO_PLAYERS":return Object(w.a)({},e,{playerHand:n.playerHand,cpuHand:n.cpuHand});case"GO_TO_HOME":return Object(w.a)({},e,{homePage:!0,gameOn:!1,name:"You"});case"FIND_WINNER":return Object(w.a)({},e,{resultPlayer:n.playerCombo,resultCpu:n.cpuCombo});case"WINNER_FOUND":return Object(w.a)({},e,{winner:n.winner});case"RESET":return Object(w.a)({},e,{gameOn:!1,homePage:!0,deck:null,playerHand:null,cpuHand:null,playerMoney:200,cpuMoney:200,activeBid:0,resultPlayer:null,resultCpu:null,winner:null,cardsSelected:[]});case"CARD_SELECTED":return Object(w.a)({},e);case"ADD_OR_REMOVE_CARD":if(!n.newCard[0].selected)return n.newCard[0].selected=!n.newCard[0].selected,n.newCard[0].id=n.id,Object(w.a)({},e,{cardsSelected:[].concat(Object(C.a)(e.cardsSelected),[n.newCard[0]])});if(n.newCard[0].selected)return n.newCard[0].selected=!n.newCard[0].selected,Object(w.a)({},e,{cardsSelected:e.cardsSelected.filter((function(e){return n.newCard[0].id!==e.id}))});case"CHANGE_CARDS":return Object(w.a)({},e,{playerHand:e.playerHand.filter((function(e){return!0!==e.selected})),cardsSelected:[]});case"FILL_PLAYER_HAND_WITH_CARDS":return Object(w.a)({},e,{playerHand:[].concat(Object(C.a)(n.replacedCards),Object(C.a)(e.playerHand))});case"PLAYER_BID":return Object(w.a)({},e,{playerMoney:e.playerMoney-n.money,activeBid:e.activeBid+n.money});case"CPU_BID":return Object(w.a)({},e,{cpuMoney:e.cpuMoney-n.money,activeBid:e.activeBid+n.money});default:return S}},D=a(43),H=a(66),T=a(69),j=a(46),A=a(34),M=a(35),P=a(12),I=a.n(P),B=function(){function e(){Object(A.a)(this,e),this.deck=[],this.playerHand=[],this.cpuHand=[],this.ranks=[{rank:"2",weight:1},{rank:"3",weight:2},{rank:"4",weight:3},{rank:"5",weight:4},{rank:"6",weight:5},{rank:"7",weight:6},{rank:"8",weight:7},{rank:"9",weight:8},{rank:"10",weight:9},{rank:"j",weight:10},{rank:"q",weight:11},{rank:"k",weight:12},{rank:"a",weight:13}],this.weights=[1,2,3,4,5,6,7,8,9,10,11,12,13],this.suits=["hearts","clubs","diams","spades"],this.createDeck=this.createDeck.bind(this),this.shuffleDeck=this.shuffleDeck.bind(this),this.createNewDeck=this.createNewDeck.bind(this),this.getPlayerHand=this.getPlayerHand.bind(this),this.getCpuHand=this.getCpuHand.bind(this),this.getCardsByNumber=this.getCardsByNumber.bind(this),this.createNewDeck()}return Object(M.a)(e,[{key:"createDeck",value:function(){for(var e=0;e<this.suits.length;e++)for(var t=0;t<this.ranks.length;t++){var a={rank:this.ranks[t].rank,weight:this.ranks[t].weight,suit:this.suits[e],selected:!1};this.deck.push(a)}this.shuffleDeck()}},{key:"shuffleDeck",value:function(){this.deck=this.deck.map((function(e,t){return e.index=t,e}));for(var e=this.deck.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),a=[this.deck[t],this.deck[e]];this.deck[e]=a[0],this.deck[t]=a[1]}}},{key:"getPlayerHand",value:function(){return this.playerHand=this.deck.slice(46,51),this.playerHand}},{key:"getCpuHand",value:function(){return this.cpuHand=this.deck.slice(41,46),this.deck=this.deck.slice(0,42),this.cpuHand}},{key:"getCardsByNumber",value:function(e){var t=this.deck.slice(0,e);return this.deck=this.deck.slice(e,42),t}},{key:"createNewDeck",value:function(){return this.deck=[],this.createDeck(),this.deck}}]),e}(),U=function(){function e(t){var a;Object(A.a)(this,e),this.ranks=Object(P.groupBy)(t,"rank"),this.suits=Object(P.groupBy)(t,"suit"),this.rankTimes=Object(P.groupBy)(this.ranks,"length"),this.suitsTimes=Object(P.groupBy)(this.suits,"length"),this.maxInARow=(a=t.map((function(e){return e.weight})),I.a.chain(a).sortBy().uniq().map((function(e,t){return e-t})).groupBy().orderBy("length").last().value().length)}return Object(M.a)(e,[{key:"getOfSameRank",value:function(e){return this.rankTimes[e]||[]}},{key:"hasOfSameRank",value:function(e){return this.getOfSameRank(e).length}},{key:"getOfSameSuit",value:function(e){return this.suitsTimes[e]||[]}},{key:"hasOfSameSuit",value:function(e){return this.getOfSameSuit(e).length}},{key:"hasAce",value:function(){return!!this.ranks.A}},{key:"hasInARow",value:function(e){return this.maxInARow>=e}}]),e}(),x={RoyalFlush:function(e){return e.hasInARow(5)&&e.hasOfSameSuit(5)&&e.hasAce()},StraightFlush:function(e){return e.hasInARow(5)&&e.hasOfSameSuit(5)},FourOfAKind:function(e){return e.hasOfSameRank(4)},FullHouse:function(e){return e.hasOfSameRank(3)&&e.hasOfSameRank(2)},Flush:function(e){return e.hasOfSameSuit(5)},Straight:function(e){return e.hasInARow(5)},ThreeOfAKind:function(e){return e.hasOfSameRank(3)},TwoPair:function(e){return e.hasOfSameRank(2)>=2},OnePair:function(e){return e.hasOfSameRank(2)},HighCard:function(e){return e.hasOfSameRank(1)>=5}},F=function(e){return Object.entries(x).find((function(t){return(0,Object(j.a)(t,2)[1])(e)}))[0]},G=function(e){switch(e){case"RoyalFlush":return 10;case"StraightFlush":return 9;case"FourOfAKind":return 8;case"FullHouse":return 7;case"Flush":return 6;case"Straight":return 5;case"ThreeOfAKind":return 4;case"TwoPair":return 3;case"OnePair":return 2;case"HighCard":return 1;default:console.log("Error Occured")}},L=new B,Y=(L.deck,L.getPlayerHand),W=L.getCpuHand,K=L.createNewDeck,V=(L.shuffleDeck,L.getCardsByNumber),q=function(e){return e.ofType("SETTING_GAME").pipe(Object(D.a)((function(){return function(e){return{type:"DECK_CREATION",payload:{deck:e}}}(K())})))},J=function(e){return e.ofType("DECK_CREATION").pipe(Object(D.a)((function(){return{type:"DECK_SERVED"}})))},$=function(e){return e.ofType("DECK_SERVED").pipe(Object(D.a)((function(){return e=Y(),t=W(),{type:"GIVE_CARDS_TO_PLAYERS",payload:{playerHand:e,cpuHand:t}};var e,t})))},z=function(e,t){return e.ofType("FIND_WINNER").pipe(Object(D.a)((function(){return function(e){return{type:"WINNER_FOUND",payload:{winner:e}}}(function(e,t){var a=G(e),n=G(t);return a>n?"Player":n>a?"CPU":"Tie"}(t.value.resultPlayer,t.value.resultCpu))})))},Q=function(e){return e.ofType("RESET").pipe(Object(H.a)({type:"SETTING_GAME"}))},X=function(e,t){return e.ofType("CARD_SELECTED").pipe(Object(D.a)((function(e){return function(e,t){return{type:"ADD_OR_REMOVE_CARD",payload:{newCard:e,id:t}}}(t.value.playerHand.filter((function(t){var a="c-".concat(t.rank).concat(t.suit.slice(0,1).toUpperCase());if(e.payload.id===a)return t})),e.payload.id)})))},Z=function(e,t){return e.ofType("CHANGE_CARDS").pipe(Object(D.a)((function(){var e=5-t.value.playerHand.length;return{type:"FILL_PLAYER_HAND_WITH_CARDS",payload:{replacedCards:V(e)}}})))},ee=function(e,t){return e.ofType("PLAYER_BID").pipe(Object(T.a)(1e3),Object(D.a)((function(){var e=t.value.activeBid;return{type:"CPU_BID",payload:{money:e}}})))},te=function(e,t){return e.ofType("CPU_BID").pipe(Object(T.a)(600),Object(D.a)((function(){return function(e,t){return{type:"FIND_WINNER",payload:{playerCombo:e,cpuCombo:t}}}(F(new U(t.value.playerHand)),F(new U(t.value.cpuHand)))})))},ae=function(){var e=[q,J,$,te,z,Q,X,Z,ee],t=v.a.apply(void 0,e),a=Object(N.a)(),n=[a],r=Object(O.d)(R,Object(O.c)(O.a.apply(void 0,n),window.devToolsExtension?window.devToolsExtension():function(e){return e}));return a.run(t),r}();s.a.render(r.a.createElement(o.a,{store:ae},r.a.createElement(b,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.f4cc2c9a.chunk.js.map