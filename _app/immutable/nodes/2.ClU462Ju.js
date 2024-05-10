var El=Object.defineProperty;var Sl=(t,e,s)=>e in t?El(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var _e=(t,e,s)=>(Sl(t,typeof e!="symbol"?e+"":e,s),s);import{s as Tl,n as je,r as pl,c as wl,f as Tt}from"../chunks/scheduler.BJere6X9.js";import{S as Bl,i as Gl,e as i,s as v,t as c,y as Kl,c as r,d as a,f as m,z as se,a as h,b as d,k as S,h as l,g as Z,A as M,j as V,B as cl,n as dl}from"../chunks/index.BbPLKruz.js";import{w as Nl}from"../chunks/index.DfB1FV6y.js";function ve(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}class Xt{constructor(){_e(this,"gameId",Math.random().toString(36).substring(7));_e(this,"scores",[]);_e(this,"stats",this.GenerateStats())}addScore(e){this.scores.push(e),this.scores=[...this.scores],this.stats=this.GenerateStats()}removeScore(e){this.scores.splice(e,1),this.scores=[...this.scores],this.stats=this.GenerateStats()}replaceScore(e,s){this.scores[e]=s,this.scores=[...this.scores],this.stats=this.GenerateStats()}get isComplete(){return this.scores.length===10}convertScoreToNumber(e){return e==="killHit6"?6:e==="killHit8"?8:e==="killMiss"||e==="drop"?0:e}get totalScore(){return this.scores.reduce((e,s)=>e+this.convertScoreToNumber(s),0)}get KillEnabled(){const e=this.GenerateStats();return e.killAttempts<2||e.killAttempts===2&&e.drops>0}GenerateStats(){const e={totalSixKills:0,totalEightKills:0,killAttempts:0,drops:0,bulls:0};return this.scores.forEach(s=>{s===6&&(e.bulls+=1),s==="drop"&&(e.drops+=1),(s==="killHit6"||s==="killHit8"||s==="killMiss")&&(e.killAttempts+=1),s==="killHit6"&&(e.totalSixKills+=1),s==="killHit8"&&(e.totalEightKills+=1)}),e}}const kl="WATLCALC",fl=localStorage.getItem(kl),wt=fl?JSON.parse(fl):null;let We=[];(!wt||(wt==null?void 0:wt.length)===0)&&(We=[new Xt]);wt&&Array.isArray(wt)&&wt.length>0&&(We=wt.map(t=>Hl(t)));const _t=Nl(We);_t.subscribe(t=>{localStorage.setItem(kl,JSON.stringify(t))});function Hl(t){if(t instanceof Xt)return t;const e=new Xt;return e.scores=t.scores,e.stats=t.stats,e.gameId=t.gameId,e}function hl(t,e,s){const o=t.slice();return o[30]=e[s].game,o[31]=e[s].rating,o[32]=e[s].totalRating,o[34]=s,o}function bl(t,e,s){const o=t.slice();return o[35]=e[s],o[37]=s,o}function Dl(t){let e,s=Qt(t[35])+"",o,u,p;function k(){return t[14](t[37])}return{c(){e=i("button"),o=c(s),this.h()},l(E){e=r(E,"BUTTON",{class:!0});var H=h(e);o=d(H,s),H.forEach(a),this.h()},h(){S(e,"class","outline secondary scorebtn svelte-w4xm65")},m(E,H){Z(E,e,H),l(e,o),u||(p=M(e,"click",k),u=!0)},p(E,H){t=E,H[0]&4&&s!==(s=Qt(t[35])+"")&&V(o,s)},d(E){E&&a(e),u=!1,p()}}}function Ol(t){let e,s="Cancel",o,u;return{c(){e=i("button"),e.textContent=s,this.h()},l(p){e=r(p,"BUTTON",{class:!0,"data-svelte-h":!0}),se(e)!=="svelte-sph879"&&(e.textContent=s),this.h()},h(){S(e,"class","outline")},m(p,k){Z(p,e,k),o||(u=M(e,"click",t[13]),o=!0)},p:je,d(p){p&&a(e),o=!1,u()}}}function _l(t){let e,s;function o(k,E){return k[37]===k[1]?Ol:Dl}let u=o(t),p=u(t);return{c(){e=i("div"),p.c(),s=v()},l(k){e=r(k,"DIV",{});var E=h(e);p.l(E),s=m(E),E.forEach(a)},m(k,E){Z(k,e,E),p.m(e,null),l(e,s)},p(k,E){u===(u=o(k))&&p?p.p(k,E):(p.d(1),p=u(k),p&&(p.c(),p.m(e,s)))},d(k){k&&a(e),p.d()}}}function vl(t){let e,s,o=t[34]+1+"",u,p,k,E=t[30].totalScore+"",H,_,W,R=t[30].stats.bulls+"",O,y,$,B=t[30].stats.totalEightKills+"",ot,vt,L,x=t[30].stats.totalSixKills+"",F,G,C,at=t[30].stats.drops+"",ct,j,tt,it=t[31]+"",P,mt,z,A=gl(t[6],t[34])+"",dt,T,D=t[32]+"",gt,pt,q,et,Bt,J,Gt,kt,N,X,Kt,Nt,Et,Rt;function rt(){return t[26](t[30])}function ne(){return t[27](t[34])}return{c(){e=i("tr"),s=i("td"),u=c(o),p=v(),k=i("td"),H=c(E),_=v(),W=i("td"),O=c(R),y=v(),$=i("td"),ot=c(B),vt=v(),L=i("td"),F=c(x),G=v(),C=i("td"),ct=c(at),j=v(),tt=i("td"),P=c(it),mt=v(),z=i("td"),dt=c(A),T=c("     "),gt=c(D),pt=v(),q=i("td"),et=i("button"),Bt=c("Edit"),Gt=v(),kt=i("td"),N=i("button"),X=c("Delete"),Nt=v(),this.h()},l(ut){e=r(ut,"TR",{});var b=h(e);s=r(b,"TD",{class:!0});var At=h(s);u=d(At,o),At.forEach(a),p=m(b),k=r(b,"TD",{class:!0});var lt=h(k);H=d(lt,E),lt.forEach(a),_=m(b),W=r(b,"TD",{class:!0});var Zt=h(W);O=d(Zt,R),Zt.forEach(a),y=m(b),$=r(b,"TD",{class:!0});var It=h($);ot=d(It,B),It.forEach(a),vt=m(b),L=r(b,"TD",{class:!0});var Ht=h(L);F=d(Ht,x),Ht.forEach(a),G=m(b),C=r(b,"TD",{class:!0});var Ut=h(C);ct=d(Ut,at),Ut.forEach(a),j=m(b),tt=r(b,"TD",{class:!0});var st=h(tt);P=d(st,it),st.forEach(a),mt=m(b),z=r(b,"TD",{class:!0});var Dt=h(z);dt=d(Dt,A),T=d(Dt,"     "),gt=d(Dt,D),Dt.forEach(a),pt=m(b),q=r(b,"TD",{});var Mt=h(q);et=r(Mt,"BUTTON",{});var Vt=h(et);Bt=d(Vt,"Edit"),Vt.forEach(a),Mt.forEach(a),Gt=m(b),kt=r(b,"TD",{});var nt=h(kt);N=r(nt,"BUTTON",{});var Lt=h(N);X=d(Lt,"Delete"),Lt.forEach(a),nt.forEach(a),Nt=m(b),b.forEach(a),this.h()},h(){S(s,"class","tdSmall"),S(k,"class","tdSmall"),S(W,"class","tdSmall"),S($,"class","tdSmall"),S(L,"class","tdSmall"),S(C,"class","tdSmall"),S(tt,"class","tdSmall"),S(z,"class","tdSmall"),et.disabled=J=t[30]===t[2],N.disabled=Kt=t[30]===t[2]},m(ut,b){Z(ut,e,b),l(e,s),l(s,u),l(e,p),l(e,k),l(k,H),l(e,_),l(e,W),l(W,O),l(e,y),l(e,$),l($,ot),l(e,vt),l(e,L),l(L,F),l(e,G),l(e,C),l(C,ct),l(e,j),l(e,tt),l(tt,P),l(e,mt),l(e,z),l(z,dt),l(z,T),l(z,gt),l(e,pt),l(e,q),l(q,et),l(et,Bt),l(e,Gt),l(e,kt),l(kt,N),l(N,X),l(e,Nt),Et||(Rt=[M(et,"click",rt),M(N,"click",ne)],Et=!0)},p(ut,b){t=ut,b[0]&64&&E!==(E=t[30].totalScore+"")&&V(H,E),b[0]&64&&R!==(R=t[30].stats.bulls+"")&&V(O,R),b[0]&64&&B!==(B=t[30].stats.totalEightKills+"")&&V(ot,B),b[0]&64&&x!==(x=t[30].stats.totalSixKills+"")&&V(F,x),b[0]&64&&at!==(at=t[30].stats.drops+"")&&V(ct,at),b[0]&64&&it!==(it=t[31]+"")&&V(P,it),b[0]&64&&A!==(A=gl(t[6],t[34])+"")&&V(dt,A),b[0]&64&&D!==(D=t[32]+"")&&V(gt,D),b[0]&68&&J!==(J=t[30]===t[2])&&(et.disabled=J),b[0]&68&&Kt!==(Kt=t[30]===t[2])&&(N.disabled=Kt)},d(ut){ut&&a(e),Et=!1,pl(Rt)}}}function ml(t){let e,s=(t[30].isComplete||!t[30].isComplete&&t[2]!==t[30])&&vl(t);return{c(){s&&s.c(),e=dl()},l(o){s&&s.l(o),e=dl()},m(o,u){s&&s.m(o,u),Z(o,e,u)},p(o,u){o[30].isComplete||!o[30].isComplete&&o[2]!==o[30]?s?s.p(o,u):(s=vl(o),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(o){o&&a(e),s&&s.d(o)}}}function Cl(t){let e,s,o,u="WATL rating simulator",p,k,E,H,_,W=t[2].totalScore+"",R,O,y,$,B=(t[2].scores.length<10?t[2].scores.length+1:t[2].scores.length)+"",ot,vt,L,x,F,G,C,at,ct,j,tt,it,P,mt,z,A,dt,T,D,gt,pt,q,et,Bt,J,Gt,kt,N,X,Kt=Qt("killHit6")+"",Nt,Et,Rt,rt,ne=Qt("killHit8")+"",ut,b,At,lt,Zt=Qt("killMiss")+"",It,Ht,Ut,st,Dt=Qt("drop")+"",Mt,Vt,nt,Lt,oe,ae,Y,Pt,ze="Past Games",me,Ot,Je="Delete All",ge,pe,ke,w,Ee,yt=t[5].rating+"",ie,Se,Te,we,$t=t[5].totalGames+"",re,Be,Ge,Ke,xt=t[5].average+"",ue,Ne,He,De,te=t[5].kills+"",ce,Oe,Ce,Re,ee=t[5].bulls+"",de,Ae,Ie,Ue,le=t[5].totalScore+"",fe,Me,Ft,St,jt,Ye="<tr><th>Game</th> <th>Score</th> <th>Bulls</th> <th>Kills 8</th> <th>Kills 6</th> <th>Drops</th> <th>Rating</th> <th>Total Rating</th> <th></th> <th></th></tr>",Ve,qt,Le,Qe,Wt=ve(t[2].scores),I=[];for(let n=0;n<Wt.length;n+=1)I[n]=_l(bl(t,Wt,n));let zt=ve(t[6]),U=[];for(let n=0;n<zt.length;n+=1)U[n]=ml(hl(t,zt,n));return{c(){e=i("meta"),s=v(),o=i("h1"),o.textContent=u,p=v(),k=i("section"),E=i("div"),H=i("div"),_=c("Score "),R=c(W),O=v(),y=i("div"),$=c("Throw: "),ot=c(B),vt=v(),L=i("div");for(let n=0;n<I.length;n+=1)I[n].c();x=v(),F=i("section"),G=i("div"),C=i("button"),at=c("0"),ct=v(),j=i("button"),tt=c("1"),it=v(),P=i("button"),mt=c("2"),z=v(),A=i("button"),dt=c("3"),T=v(),D=i("button"),gt=c("4"),pt=v(),q=i("button"),et=c("5"),Bt=v(),J=i("button"),Gt=c("6"),kt=v(),N=i("div"),X=i("button"),Nt=c(Kt),Rt=v(),rt=i("button"),ut=c(ne),At=v(),lt=i("button"),It=c(Zt),Ut=v(),st=i("button"),Mt=c(Dt),Vt=v(),nt=i("button"),Lt=c("New Game"),ae=v(),Y=i("section"),Pt=i("h2"),Pt.textContent=ze,me=v(),Ot=i("button"),Ot.textContent=Je,ge=i("br"),pe=i("br"),ke=v(),w=i("p"),Ee=c("Rating: "),ie=c(yt),Se=v(),Te=i("br"),we=c(`
		Games: `),re=c($t),Be=v(),Ge=i("br"),Ke=c(`
		Average: `),ue=c(xt),Ne=v(),He=i("br"),De=c(`
		Kills: `),ce=c(te),Oe=v(),Ce=i("br"),Re=c(`
		Bulls: `),de=c(ee),Ae=v(),Ie=i("br"),Ue=c(`
		Score: `),fe=c(le),Me=v(),Ft=i("div"),St=i("table"),jt=i("thead"),jt.innerHTML=Ye,Ve=v(),qt=i("tbody");for(let n=0;n<U.length;n+=1)U[n].c();this.h()},l(n){const g=Kl("svelte-eoqcji",document.head);e=r(g,"META",{name:!0,content:!0}),g.forEach(a),s=m(n),o=r(n,"H1",{class:!0,"data-svelte-h":!0}),se(o)!=="svelte-1dgqe5j"&&(o.textContent=u),p=m(n),k=r(n,"SECTION",{});var f=h(k);E=r(f,"DIV",{class:!0});var ft=h(E);H=r(ft,"DIV",{});var Pe=h(H);_=d(Pe,"Score "),R=d(Pe,W),Pe.forEach(a),O=m(ft),y=r(ft,"DIV",{});var Fe=h(y);$=d(Fe,"Throw: "),ot=d(Fe,B),Fe.forEach(a),ft.forEach(a),vt=m(f),L=r(f,"DIV",{class:!0});var Xe=h(L);for(let Ct=0;Ct<I.length;Ct+=1)I[Ct].l(Xe);Xe.forEach(a),f.forEach(a),x=m(n),F=r(n,"SECTION",{});var he=h(F);G=r(he,"DIV",{});var Q=h(G);C=r(Q,"BUTTON",{class:!0});var Ze=h(C);at=d(Ze,"0"),Ze.forEach(a),ct=m(Q),j=r(Q,"BUTTON",{class:!0});var ye=h(j);tt=d(ye,"1"),ye.forEach(a),it=m(Q),P=r(Q,"BUTTON",{class:!0});var $e=h(P);mt=d($e,"2"),$e.forEach(a),z=m(Q),A=r(Q,"BUTTON",{class:!0});var xe=h(A);dt=d(xe,"3"),xe.forEach(a),T=m(Q),D=r(Q,"BUTTON",{class:!0});var tl=h(D);gt=d(tl,"4"),tl.forEach(a),pt=m(Q),q=r(Q,"BUTTON",{class:!0});var el=h(q);et=d(el,"5"),el.forEach(a),Bt=m(Q),J=r(Q,"BUTTON",{class:!0});var ll=h(J);Gt=d(ll,"6"),ll.forEach(a),Q.forEach(a),kt=m(he),N=r(he,"DIV",{});var ht=h(N);X=r(ht,"BUTTON",{class:!0});var sl=h(X);Nt=d(sl,Kt),sl.forEach(a),Rt=m(ht),rt=r(ht,"BUTTON",{class:!0});var nl=h(rt);ut=d(nl,ne),nl.forEach(a),At=m(ht),lt=r(ht,"BUTTON",{class:!0});var ol=h(lt);It=d(ol,Zt),ol.forEach(a),Ut=m(ht),st=r(ht,"BUTTON",{class:!0});var al=h(st);Mt=d(al,Dt),al.forEach(a),Vt=m(ht),nt=r(ht,"BUTTON",{class:!0});var il=h(nt);Lt=d(il,"New Game"),il.forEach(a),ht.forEach(a),he.forEach(a),ae=m(n),Y=r(n,"SECTION",{});var bt=h(Y);Pt=r(bt,"H2",{"data-svelte-h":!0}),se(Pt)!=="svelte-l8fwex"&&(Pt.textContent=ze),me=m(bt),Ot=r(bt,"BUTTON",{"data-svelte-h":!0}),se(Ot)!=="svelte-8d121d"&&(Ot.textContent=Je),ge=r(bt,"BR",{}),pe=r(bt,"BR",{}),ke=m(bt),w=r(bt,"P",{});var K=h(w);Ee=d(K,"Rating: "),ie=d(K,yt),Se=m(K),Te=r(K,"BR",{}),we=d(K,`
		Games: `),re=d(K,$t),Be=m(K),Ge=r(K,"BR",{}),Ke=d(K,`
		Average: `),ue=d(K,xt),Ne=m(K),He=r(K,"BR",{}),De=d(K,`
		Kills: `),ce=d(K,te),Oe=m(K),Ce=r(K,"BR",{}),Re=d(K,`
		Bulls: `),de=d(K,ee),Ae=m(K),Ie=r(K,"BR",{}),Ue=d(K,`
		Score: `),fe=d(K,le),K.forEach(a),Me=m(bt),Ft=r(bt,"DIV",{class:!0});var rl=h(Ft);St=r(rl,"TABLE",{class:!0});var be=h(St);jt=r(be,"THEAD",{"data-svelte-h":!0}),se(jt)!=="svelte-1hm9y2w"&&(jt.innerHTML=Ye),Ve=m(be),qt=r(be,"TBODY",{});var ul=h(qt);for(let Ct=0;Ct<U.length;Ct+=1)U[Ct].l(ul);ul.forEach(a),be.forEach(a),rl.forEach(a),bt.forEach(a),this.h()},h(){document.title="Home",S(e,"name","description"),S(e,"content","Figure out ratings"),S(o,"class","center svelte-w4xm65"),S(E,"class","stats svelte-w4xm65"),S(L,"class","flexrow svelte-w4xm65"),S(C,"class","flexrowButton svelte-w4xm65"),C.disabled=t[4],S(j,"class","flexrowButton svelte-w4xm65"),j.disabled=t[4],S(P,"class","flexrowButton svelte-w4xm65"),P.disabled=t[4],S(A,"class","flexrowButton svelte-w4xm65"),A.disabled=t[4],S(D,"class","flexrowButton svelte-w4xm65"),D.disabled=t[4],S(q,"class","flexrowButton svelte-w4xm65"),q.disabled=t[4],S(J,"class","flexrowButton svelte-w4xm65"),J.disabled=t[4],S(X,"class","flexrowButton svelte-w4xm65"),X.disabled=Et=t[4]||!t[2].KillEnabled&&!Jt(t[7])&&!Yt(t[7]),S(rt,"class","flexrowButton svelte-w4xm65"),rt.disabled=b=t[4]||!t[2].KillEnabled&&!Jt(t[7])&&!Yt(t[7]),S(lt,"class","flexrowButton svelte-w4xm65"),lt.disabled=Ht=t[4]||!t[2].KillEnabled&&!Jt(t[7])&&!Yt(t[7]),S(st,"class","flexrowButton svelte-w4xm65"),st.disabled=t[4],nt.disabled=oe=!t[2].isComplete,S(nt,"class","contrast"),S(St,"class",""),S(Ft,"class","overflow-auto")},m(n,g){l(document.head,e),Z(n,s,g),Z(n,o,g),Z(n,p,g),Z(n,k,g),l(k,E),l(E,H),l(H,_),l(H,R),l(E,O),l(E,y),l(y,$),l(y,ot),l(k,vt),l(k,L);for(let f=0;f<I.length;f+=1)I[f]&&I[f].m(L,null);Z(n,x,g),Z(n,F,g),l(F,G),l(G,C),l(C,at),l(G,ct),l(G,j),l(j,tt),l(G,it),l(G,P),l(P,mt),l(G,z),l(G,A),l(A,dt),l(G,T),l(G,D),l(D,gt),l(G,pt),l(G,q),l(q,et),l(G,Bt),l(G,J),l(J,Gt),l(F,kt),l(F,N),l(N,X),l(X,Nt),l(N,Rt),l(N,rt),l(rt,ut),l(N,At),l(N,lt),l(lt,It),l(N,Ut),l(N,st),l(st,Mt),l(N,Vt),l(N,nt),l(nt,Lt),Z(n,ae,g),Z(n,Y,g),l(Y,Pt),l(Y,me),l(Y,Ot),l(Y,ge),l(Y,pe),l(Y,ke),l(Y,w),l(w,Ee),l(w,ie),l(w,Se),l(w,Te),l(w,we),l(w,re),l(w,Be),l(w,Ge),l(w,Ke),l(w,ue),l(w,Ne),l(w,He),l(w,De),l(w,ce),l(w,Oe),l(w,Ce),l(w,Re),l(w,de),l(w,Ae),l(w,Ie),l(w,Ue),l(w,fe),l(Y,Me),l(Y,Ft),l(Ft,St),l(St,jt),l(St,Ve),l(St,qt);for(let f=0;f<U.length;f+=1)U[f]&&U[f].m(qt,null);Le||(Qe=[M(C,"click",t[15]),M(j,"click",t[16]),M(P,"click",t[17]),M(A,"click",t[18]),M(D,"click",t[19]),M(q,"click",t[20]),M(J,"click",t[21]),M(X,"click",t[22]),M(rt,"click",t[23]),M(lt,"click",t[24]),M(st,"click",t[25]),M(nt,"click",t[9]),M(Ot,"click",t[10])],Le=!0)},p(n,g){if(g[0]&4&&W!==(W=n[2].totalScore+"")&&V(R,W),g[0]&4&&B!==(B=(n[2].scores.length<10?n[2].scores.length+1:n[2].scores.length)+"")&&V(ot,B),g[0]&6){Wt=ve(n[2].scores);let f;for(f=0;f<Wt.length;f+=1){const ft=bl(n,Wt,f);I[f]?I[f].p(ft,g):(I[f]=_l(ft),I[f].c(),I[f].m(L,null))}for(;f<I.length;f+=1)I[f].d(1);I.length=Wt.length}if(g[0]&16&&(C.disabled=n[4]),g[0]&16&&(j.disabled=n[4]),g[0]&16&&(P.disabled=n[4]),g[0]&16&&(A.disabled=n[4]),g[0]&16&&(D.disabled=n[4]),g[0]&16&&(q.disabled=n[4]),g[0]&16&&(J.disabled=n[4]),g[0]&148&&Et!==(Et=n[4]||!n[2].KillEnabled&&!Jt(n[7])&&!Yt(n[7]))&&(X.disabled=Et),g[0]&148&&b!==(b=n[4]||!n[2].KillEnabled&&!Jt(n[7])&&!Yt(n[7]))&&(rt.disabled=b),g[0]&148&&Ht!==(Ht=n[4]||!n[2].KillEnabled&&!Jt(n[7])&&!Yt(n[7]))&&(lt.disabled=Ht),g[0]&16&&(st.disabled=n[4]),g[0]&4&&oe!==(oe=!n[2].isComplete)&&(nt.disabled=oe),g[0]&32&&yt!==(yt=n[5].rating+"")&&V(ie,yt),g[0]&32&&$t!==($t=n[5].totalGames+"")&&V(re,$t),g[0]&32&&xt!==(xt=n[5].average+"")&&V(ue,xt),g[0]&32&&te!==(te=n[5].kills+"")&&V(ce,te),g[0]&32&&ee!==(ee=n[5].bulls+"")&&V(de,ee),g[0]&32&&le!==(le=n[5].totalScore+"")&&V(fe,le),g[0]&77){zt=ve(n[6]);let f;for(f=0;f<zt.length;f+=1){const ft=hl(n,zt,f);U[f]?U[f].p(ft,g):(U[f]=ml(ft),U[f].c(),U[f].m(qt,null))}for(;f<U.length;f+=1)U[f].d(1);U.length=zt.length}},i:je,o:je,d(n){n&&(a(s),a(o),a(p),a(k),a(x),a(F),a(ae),a(Y)),a(e),cl(I,n),cl(U,n),Le=!1,pl(Qe)}}}function Rl(t){return t.map((e,s)=>{const o=t.slice(0,s+1),u=qe(o);return{game:e,rating:qe([e]),totalRating:u?Math.round(u*1e4)/1e4:0}})}function Jt(t){return t==="killHit6"||t==="killHit8"||t==="killMiss"}function Yt(t){return t==="drop"}function Al(t){return t.length<1?0:t.reduce((s,o)=>s+o.totalScore,0)/t.length}function gl(t,e){const s=t[e],o=t[e-1];return o?s.totalRating>o.totalRating?"👆":s.totalRating<o.totalRating?"👇":"-":"-"}function qe(t){if(t.length===0)return 0;const s=Al(t),o=Il(t),u=Ul(t);return s*8+o*500+u*2}function Il(t){const e=t.length*10;let s=0;for(const o of t)for(const u of o.scores)(u===6||u===8||u==="killHit6"||u==="killHit8")&&s++;return s/e}function Ul(t){return t.reduce((e,s)=>s.stats.totalEightKills+s.stats.totalSixKills+e,0)}function Ml(t){const e=t.reduce((o,u)=>({bulls:u.stats.bulls+o.bulls,kills:u.stats.totalEightKills+u.stats.totalSixKills+o.kills,drops:u.stats.drops+o.drops,totalScore:u.totalScore+o.totalScore}),{bulls:0,kills:0,drops:0,totalScore:0}),s=qe(t);return{...e,average:e.totalScore&&t.length?Math.round(e.totalScore/t.length*1e4)/1e4:0,rating:s?Math.round(s*100)/100:0,totalGames:t.length}}function Qt(t){if(typeof t=="number")return t.toString();switch(t){case"killHit6":return"Kill 6";case"killHit8":return"Kill 8";case"killMiss":return"Miss";case"drop":return"Drop"}}function Vl(t,e,s){let o,u,p,k,E,H,_;wl(t,_t,T=>s(3,_=T));const W=!1;let R="",O=-1;function y(T){o.addScore(T),Tt(_t,_=[..._],_)}function $(T){o.replaceScore(O,T),s(1,O=-1),Tt(_t,_=[..._],_)}function B(T){O===-1?y(T):$(T),Tt(_t,_=[..._],_)}function ot(){if(!o.isComplete)return;_[_.length-1]!==o?Tt(_t,_=[..._],_):Tt(_t,_=[..._,new Xt],_),s(0,R=""),s(1,O=-1)}function vt(){Tt(_t,_=[new Xt],_)}const L=()=>{s(1,O=-1)},x=T=>s(1,O=T),F=()=>{B(0)},G=()=>{B(1)},C=()=>{B(2)},at=()=>{B(3)},ct=()=>{B(4)},j=()=>{B(5)},tt=()=>{B(6)},it=()=>{B("killHit6")},P=()=>{B("killHit8")},mt=()=>{B("killMiss")},z=()=>{B("drop")},A=T=>{s(0,R=T.gameId)},dt=T=>{const D=Tt(_t,_=_.filter((gt,pt)=>pt!==T),_);D.length<1&&D.push(new Xt),Tt(_t,_=D,_),s(0,R="")};return t.$$.update=()=>{t.$$.dirty[0]&9&&s(2,o=R&&_.find(T=>T.gameId===R)||_[_.length-1]),t.$$.dirty[0]&6&&s(7,u=O>-1?o.scores[O]:null),t.$$.dirty[0]&8&&s(12,p=_.filter(T=>T.isComplete)),t.$$.dirty[0]&4096&&s(6,k=Rl(p)),t.$$.dirty[0]&4096&&s(5,E=Ml(p)),t.$$.dirty[0]&6&&s(4,H=o.isComplete&&O===-1)},[R,O,o,_,H,E,k,u,B,ot,vt,W,p,L,x,F,G,C,at,ct,j,tt,it,P,mt,z,A,dt]}class ql extends Bl{constructor(e){super(),Gl(this,e,Vl,Cl,Tl,{ssr:11},null,[-1,-1])}get ssr(){return this.$$.ctx[11]}}export{ql as component};
