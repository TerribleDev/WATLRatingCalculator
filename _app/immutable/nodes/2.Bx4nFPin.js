var El=Object.defineProperty;var Sl=(t,e,s)=>e in t?El(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var _e=(t,e,s)=>(Sl(t,typeof e!="symbol"?e+"":e,s),s);import{s as Tl,n as je,r as pl,c as Bl,f as Tt}from"../chunks/scheduler.BJere6X9.js";import{S as Gl,i as wl,e as i,s as v,t as u,y as Kl,c as r,d as o,f as m,z as se,a as f,b as d,k as S,h as l,g as Z,A as M,j as V,B as ul,n as dl}from"../chunks/index.BbPLKruz.js";import{w as Nl}from"../chunks/index.DfB1FV6y.js";function ve(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}class Xt{constructor(){_e(this,"gameId",Math.random().toString(36).substring(7));_e(this,"scores",[]);_e(this,"stats",this.GenerateStats())}addScore(e){this.scores.push(e),this.scores=[...this.scores],this.stats=this.GenerateStats()}removeScore(e){this.scores.splice(e,1),this.scores=[...this.scores],this.stats=this.GenerateStats()}replaceScore(e,s){this.scores[e]=s,this.scores=[...this.scores],this.stats=this.GenerateStats()}get isComplete(){return this.scores.length===10}convertScoreToNumber(e){return e==="killHit6"?6:e==="killHit8"?8:e==="killMiss"||e==="drop"?0:e}get totalScore(){return this.scores.reduce((e,s)=>e+this.convertScoreToNumber(s),0)}get KillEnabled(){const e=this.GenerateStats();return e.killAttempts<2||e.killAttempts===2&&e.drops>0}GenerateStats(){const e={totalSixKills:0,totalEightKills:0,killAttempts:0,drops:0,bulls:0};return this.scores.forEach(s=>{s===6&&(e.bulls+=1),s==="drop"&&(e.drops+=1),(s==="killHit6"||s==="killHit8"||s==="killMiss")&&(e.killAttempts+=1),s==="killHit6"&&(e.totalSixKills+=1),s==="killHit8"&&(e.totalEightKills+=1)}),e}}const kl="WATLCALC",hl=localStorage.getItem(kl),Bt=hl?JSON.parse(hl):null;let We=[];(!Bt||(Bt==null?void 0:Bt.length)===0)&&(We=[new Xt]);Bt&&Array.isArray(Bt)&&Bt.length>0&&(We=Bt.map(t=>Hl(t)));const _t=Nl(We);_t.subscribe(t=>{localStorage.setItem(kl,JSON.stringify(t))});function Hl(t){if(t instanceof Xt)return t;const e=new Xt;return e.scores=t.scores,e.stats=t.stats,e.gameId=t.gameId,e}function fl(t,e,s){const n=t.slice();return n[30]=e[s].game,n[31]=e[s].rating,n[32]=e[s].totalRating,n[34]=s,n}function bl(t,e,s){const n=t.slice();return n[35]=e[s],n[37]=s,n}function Dl(t){let e,s=Qt(t[35])+"",n,c,p;function k(){return t[14](t[37])}return{c(){e=i("button"),n=u(s),this.h()},l(E){e=r(E,"BUTTON",{class:!0});var H=f(e);n=d(H,s),H.forEach(o),this.h()},h(){S(e,"class","outline secondary")},m(E,H){Z(E,e,H),l(e,n),c||(p=M(e,"click",k),c=!0)},p(E,H){t=E,H[0]&4&&s!==(s=Qt(t[35])+"")&&V(n,s)},d(E){E&&o(e),c=!1,p()}}}function Ol(t){let e,s="Cancel",n,c;return{c(){e=i("button"),e.textContent=s,this.h()},l(p){e=r(p,"BUTTON",{class:!0,"data-svelte-h":!0}),se(e)!=="svelte-sph879"&&(e.textContent=s),this.h()},h(){S(e,"class","outline")},m(p,k){Z(p,e,k),n||(c=M(e,"click",t[13]),n=!0)},p:je,d(p){p&&o(e),n=!1,c()}}}function _l(t){let e,s;function n(k,E){return k[37]===k[1]?Ol:Dl}let c=n(t),p=c(t);return{c(){e=i("div"),p.c(),s=v()},l(k){e=r(k,"DIV",{});var E=f(e);p.l(E),s=m(E),E.forEach(o)},m(k,E){Z(k,e,E),p.m(e,null),l(e,s)},p(k,E){c===(c=n(k))&&p?p.p(k,E):(p.d(1),p=c(k),p&&(p.c(),p.m(e,s)))},d(k){k&&o(e),p.d()}}}function vl(t){let e,s,n=t[34]+1+"",c,p,k,E=t[30].totalScore+"",H,_,W,R=t[30].stats.bulls+"",O,y,$,G=t[30].stats.totalEightKills+"",at,vt,L,x=t[30].stats.totalSixKills+"",F,w,C,ot=t[30].stats.drops+"",ut,j,tt,it=t[31]+"",P,mt,z,A=gl(t[6],t[34])+"",dt,T,D=t[32]+"",gt,pt,q,et,Gt,J,wt,kt,N,X,Kt,Nt,Et,Rt;function rt(){return t[26](t[30])}function ne(){return t[27](t[34])}return{c(){e=i("tr"),s=i("td"),c=u(n),p=v(),k=i("td"),H=u(E),_=v(),W=i("td"),O=u(R),y=v(),$=i("td"),at=u(G),vt=v(),L=i("td"),F=u(x),w=v(),C=i("td"),ut=u(ot),j=v(),tt=i("td"),P=u(it),mt=v(),z=i("td"),dt=u(A),T=u("     "),gt=u(D),pt=v(),q=i("td"),et=i("button"),Gt=u("Edit"),wt=v(),kt=i("td"),N=i("button"),X=u("Delete"),Nt=v(),this.h()},l(ct){e=r(ct,"TR",{});var b=f(e);s=r(b,"TD",{class:!0});var At=f(s);c=d(At,n),At.forEach(o),p=m(b),k=r(b,"TD",{class:!0});var lt=f(k);H=d(lt,E),lt.forEach(o),_=m(b),W=r(b,"TD",{class:!0});var Zt=f(W);O=d(Zt,R),Zt.forEach(o),y=m(b),$=r(b,"TD",{class:!0});var It=f($);at=d(It,G),It.forEach(o),vt=m(b),L=r(b,"TD",{class:!0});var Ht=f(L);F=d(Ht,x),Ht.forEach(o),w=m(b),C=r(b,"TD",{class:!0});var Ut=f(C);ut=d(Ut,ot),Ut.forEach(o),j=m(b),tt=r(b,"TD",{class:!0});var st=f(tt);P=d(st,it),st.forEach(o),mt=m(b),z=r(b,"TD",{class:!0});var Dt=f(z);dt=d(Dt,A),T=d(Dt,"     "),gt=d(Dt,D),Dt.forEach(o),pt=m(b),q=r(b,"TD",{});var Mt=f(q);et=r(Mt,"BUTTON",{});var Vt=f(et);Gt=d(Vt,"Edit"),Vt.forEach(o),Mt.forEach(o),wt=m(b),kt=r(b,"TD",{});var nt=f(kt);N=r(nt,"BUTTON",{});var Lt=f(N);X=d(Lt,"Delete"),Lt.forEach(o),nt.forEach(o),Nt=m(b),b.forEach(o),this.h()},h(){S(s,"class","tdSmall"),S(k,"class","tdSmall"),S(W,"class","tdSmall"),S($,"class","tdSmall"),S(L,"class","tdSmall"),S(C,"class","tdSmall"),S(tt,"class","tdSmall"),S(z,"class","tdSmall"),et.disabled=J=t[30]===t[2],N.disabled=Kt=t[30]===t[2]},m(ct,b){Z(ct,e,b),l(e,s),l(s,c),l(e,p),l(e,k),l(k,H),l(e,_),l(e,W),l(W,O),l(e,y),l(e,$),l($,at),l(e,vt),l(e,L),l(L,F),l(e,w),l(e,C),l(C,ut),l(e,j),l(e,tt),l(tt,P),l(e,mt),l(e,z),l(z,dt),l(z,T),l(z,gt),l(e,pt),l(e,q),l(q,et),l(et,Gt),l(e,wt),l(e,kt),l(kt,N),l(N,X),l(e,Nt),Et||(Rt=[M(et,"click",rt),M(N,"click",ne)],Et=!0)},p(ct,b){t=ct,b[0]&64&&E!==(E=t[30].totalScore+"")&&V(H,E),b[0]&64&&R!==(R=t[30].stats.bulls+"")&&V(O,R),b[0]&64&&G!==(G=t[30].stats.totalEightKills+"")&&V(at,G),b[0]&64&&x!==(x=t[30].stats.totalSixKills+"")&&V(F,x),b[0]&64&&ot!==(ot=t[30].stats.drops+"")&&V(ut,ot),b[0]&64&&it!==(it=t[31]+"")&&V(P,it),b[0]&64&&A!==(A=gl(t[6],t[34])+"")&&V(dt,A),b[0]&64&&D!==(D=t[32]+"")&&V(gt,D),b[0]&68&&J!==(J=t[30]===t[2])&&(et.disabled=J),b[0]&68&&Kt!==(Kt=t[30]===t[2])&&(N.disabled=Kt)},d(ct){ct&&o(e),Et=!1,pl(Rt)}}}function ml(t){let e,s=(t[30].isComplete||!t[30].isComplete&&t[2]!==t[30])&&vl(t);return{c(){s&&s.c(),e=dl()},l(n){s&&s.l(n),e=dl()},m(n,c){s&&s.m(n,c),Z(n,e,c)},p(n,c){n[30].isComplete||!n[30].isComplete&&n[2]!==n[30]?s?s.p(n,c):(s=vl(n),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(n){n&&o(e),s&&s.d(n)}}}function Cl(t){let e,s,n,c="WATL rating simulator",p,k,E,H,_,W=t[2].totalScore+"",R,O,y,$,G=t[2].scores.length+1+"",at,vt,L,x,F,w,C,ot,ut,j,tt,it,P,mt,z,A,dt,T,D,gt,pt,q,et,Gt,J,wt,kt,N,X,Kt=Qt("killHit6")+"",Nt,Et,Rt,rt,ne=Qt("killHit8")+"",ct,b,At,lt,Zt=Qt("killMiss")+"",It,Ht,Ut,st,Dt=Qt("drop")+"",Mt,Vt,nt,Lt,ae,oe,Y,Pt,ze="Past Games",me,Ot,Je="Delete All",ge,pe,ke,B,Ee,yt=t[5].rating+"",ie,Se,Te,Be,$t=t[5].totalGames+"",re,Ge,we,Ke,xt=t[5].average+"",ce,Ne,He,De,te=t[5].kills+"",ue,Oe,Ce,Re,ee=t[5].bulls+"",de,Ae,Ie,Ue,le=t[5].totalScore+"",he,Me,Ft,St,jt,Ye="<tr><th>Game</th> <th>Score</th> <th>Bulls</th> <th>Kills 8</th> <th>Kills 6</th> <th>Drops</th> <th>Rating</th> <th>Total Rating</th> <th></th> <th></th></tr>",Ve,qt,Le,Qe,Wt=ve(t[2].scores),I=[];for(let a=0;a<Wt.length;a+=1)I[a]=_l(bl(t,Wt,a));let zt=ve(t[6]),U=[];for(let a=0;a<zt.length;a+=1)U[a]=ml(fl(t,zt,a));return{c(){e=i("meta"),s=v(),n=i("h1"),n.textContent=c,p=v(),k=i("section"),E=i("div"),H=i("div"),_=u("Score "),R=u(W),O=v(),y=i("div"),$=u("Throw: "),at=u(G),vt=v(),L=i("div");for(let a=0;a<I.length;a+=1)I[a].c();x=v(),F=i("section"),w=i("div"),C=i("button"),ot=u("0"),ut=v(),j=i("button"),tt=u("1"),it=v(),P=i("button"),mt=u("2"),z=v(),A=i("button"),dt=u("3"),T=v(),D=i("button"),gt=u("4"),pt=v(),q=i("button"),et=u("5"),Gt=v(),J=i("button"),wt=u("6"),kt=v(),N=i("div"),X=i("button"),Nt=u(Kt),Rt=v(),rt=i("button"),ct=u(ne),At=v(),lt=i("button"),It=u(Zt),Ut=v(),st=i("button"),Mt=u(Dt),Vt=v(),nt=i("button"),Lt=u("New Game"),oe=v(),Y=i("section"),Pt=i("h2"),Pt.textContent=ze,me=v(),Ot=i("button"),Ot.textContent=Je,ge=i("br"),pe=i("br"),ke=v(),B=i("p"),Ee=u("Rating: "),ie=u(yt),Se=v(),Te=i("br"),Be=u(`
		Games: `),re=u($t),Ge=v(),we=i("br"),Ke=u(`
		Average: `),ce=u(xt),Ne=v(),He=i("br"),De=u(`
		Kills: `),ue=u(te),Oe=v(),Ce=i("br"),Re=u(`
		Bulls: `),de=u(ee),Ae=v(),Ie=i("br"),Ue=u(`
		Score: `),he=u(le),Me=v(),Ft=i("div"),St=i("table"),jt=i("thead"),jt.innerHTML=Ye,Ve=v(),qt=i("tbody");for(let a=0;a<U.length;a+=1)U[a].c();this.h()},l(a){const g=Kl("svelte-eoqcji",document.head);e=r(g,"META",{name:!0,content:!0}),g.forEach(o),s=m(a),n=r(a,"H1",{class:!0,"data-svelte-h":!0}),se(n)!=="svelte-1dgqe5j"&&(n.textContent=c),p=m(a),k=r(a,"SECTION",{});var h=f(k);E=r(h,"DIV",{class:!0});var ht=f(E);H=r(ht,"DIV",{});var Pe=f(H);_=d(Pe,"Score "),R=d(Pe,W),Pe.forEach(o),O=m(ht),y=r(ht,"DIV",{});var Fe=f(y);$=d(Fe,"Throw: "),at=d(Fe,G),Fe.forEach(o),ht.forEach(o),vt=m(h),L=r(h,"DIV",{class:!0});var Xe=f(L);for(let Ct=0;Ct<I.length;Ct+=1)I[Ct].l(Xe);Xe.forEach(o),h.forEach(o),x=m(a),F=r(a,"SECTION",{});var fe=f(F);w=r(fe,"DIV",{});var Q=f(w);C=r(Q,"BUTTON",{class:!0});var Ze=f(C);ot=d(Ze,"0"),Ze.forEach(o),ut=m(Q),j=r(Q,"BUTTON",{class:!0});var ye=f(j);tt=d(ye,"1"),ye.forEach(o),it=m(Q),P=r(Q,"BUTTON",{class:!0});var $e=f(P);mt=d($e,"2"),$e.forEach(o),z=m(Q),A=r(Q,"BUTTON",{class:!0});var xe=f(A);dt=d(xe,"3"),xe.forEach(o),T=m(Q),D=r(Q,"BUTTON",{class:!0});var tl=f(D);gt=d(tl,"4"),tl.forEach(o),pt=m(Q),q=r(Q,"BUTTON",{class:!0});var el=f(q);et=d(el,"5"),el.forEach(o),Gt=m(Q),J=r(Q,"BUTTON",{class:!0});var ll=f(J);wt=d(ll,"6"),ll.forEach(o),Q.forEach(o),kt=m(fe),N=r(fe,"DIV",{});var ft=f(N);X=r(ft,"BUTTON",{class:!0});var sl=f(X);Nt=d(sl,Kt),sl.forEach(o),Rt=m(ft),rt=r(ft,"BUTTON",{class:!0});var nl=f(rt);ct=d(nl,ne),nl.forEach(o),At=m(ft),lt=r(ft,"BUTTON",{class:!0});var al=f(lt);It=d(al,Zt),al.forEach(o),Ut=m(ft),st=r(ft,"BUTTON",{class:!0});var ol=f(st);Mt=d(ol,Dt),ol.forEach(o),Vt=m(ft),nt=r(ft,"BUTTON",{class:!0});var il=f(nt);Lt=d(il,"New Game"),il.forEach(o),ft.forEach(o),fe.forEach(o),oe=m(a),Y=r(a,"SECTION",{});var bt=f(Y);Pt=r(bt,"H2",{"data-svelte-h":!0}),se(Pt)!=="svelte-l8fwex"&&(Pt.textContent=ze),me=m(bt),Ot=r(bt,"BUTTON",{"data-svelte-h":!0}),se(Ot)!=="svelte-8d121d"&&(Ot.textContent=Je),ge=r(bt,"BR",{}),pe=r(bt,"BR",{}),ke=m(bt),B=r(bt,"P",{});var K=f(B);Ee=d(K,"Rating: "),ie=d(K,yt),Se=m(K),Te=r(K,"BR",{}),Be=d(K,`
		Games: `),re=d(K,$t),Ge=m(K),we=r(K,"BR",{}),Ke=d(K,`
		Average: `),ce=d(K,xt),Ne=m(K),He=r(K,"BR",{}),De=d(K,`
		Kills: `),ue=d(K,te),Oe=m(K),Ce=r(K,"BR",{}),Re=d(K,`
		Bulls: `),de=d(K,ee),Ae=m(K),Ie=r(K,"BR",{}),Ue=d(K,`
		Score: `),he=d(K,le),K.forEach(o),Me=m(bt),Ft=r(bt,"DIV",{class:!0});var rl=f(Ft);St=r(rl,"TABLE",{class:!0});var be=f(St);jt=r(be,"THEAD",{"data-svelte-h":!0}),se(jt)!=="svelte-1hm9y2w"&&(jt.innerHTML=Ye),Ve=m(be),qt=r(be,"TBODY",{});var cl=f(qt);for(let Ct=0;Ct<U.length;Ct+=1)U[Ct].l(cl);cl.forEach(o),be.forEach(o),rl.forEach(o),bt.forEach(o),this.h()},h(){document.title="Home",S(e,"name","description"),S(e,"content","Figure out ratings"),S(n,"class","center svelte-155hhec"),S(E,"class","stats svelte-155hhec"),S(L,"class","flexrow svelte-155hhec"),S(C,"class","flexrowButton svelte-155hhec"),C.disabled=t[4],S(j,"class","flexrowButton svelte-155hhec"),j.disabled=t[4],S(P,"class","flexrowButton svelte-155hhec"),P.disabled=t[4],S(A,"class","flexrowButton svelte-155hhec"),A.disabled=t[4],S(D,"class","flexrowButton svelte-155hhec"),D.disabled=t[4],S(q,"class","flexrowButton svelte-155hhec"),q.disabled=t[4],S(J,"class","flexrowButton svelte-155hhec"),J.disabled=t[4],S(X,"class","flexrowButton svelte-155hhec"),X.disabled=Et=t[4]||!t[2].KillEnabled&&!Jt(t[7])&&!Yt(t[7]),S(rt,"class","flexrowButton svelte-155hhec"),rt.disabled=b=t[4]||!t[2].KillEnabled&&!Jt(t[7])&&!Yt(t[7]),S(lt,"class","flexrowButton svelte-155hhec"),lt.disabled=Ht=t[4]||!t[2].KillEnabled&&!Jt(t[7])&&!Yt(t[7]),S(st,"class","flexrowButton svelte-155hhec"),st.disabled=t[4],nt.disabled=ae=!t[2].isComplete,S(nt,"class","contrast"),S(St,"class",""),S(Ft,"class","overflow-auto")},m(a,g){l(document.head,e),Z(a,s,g),Z(a,n,g),Z(a,p,g),Z(a,k,g),l(k,E),l(E,H),l(H,_),l(H,R),l(E,O),l(E,y),l(y,$),l(y,at),l(k,vt),l(k,L);for(let h=0;h<I.length;h+=1)I[h]&&I[h].m(L,null);Z(a,x,g),Z(a,F,g),l(F,w),l(w,C),l(C,ot),l(w,ut),l(w,j),l(j,tt),l(w,it),l(w,P),l(P,mt),l(w,z),l(w,A),l(A,dt),l(w,T),l(w,D),l(D,gt),l(w,pt),l(w,q),l(q,et),l(w,Gt),l(w,J),l(J,wt),l(F,kt),l(F,N),l(N,X),l(X,Nt),l(N,Rt),l(N,rt),l(rt,ct),l(N,At),l(N,lt),l(lt,It),l(N,Ut),l(N,st),l(st,Mt),l(N,Vt),l(N,nt),l(nt,Lt),Z(a,oe,g),Z(a,Y,g),l(Y,Pt),l(Y,me),l(Y,Ot),l(Y,ge),l(Y,pe),l(Y,ke),l(Y,B),l(B,Ee),l(B,ie),l(B,Se),l(B,Te),l(B,Be),l(B,re),l(B,Ge),l(B,we),l(B,Ke),l(B,ce),l(B,Ne),l(B,He),l(B,De),l(B,ue),l(B,Oe),l(B,Ce),l(B,Re),l(B,de),l(B,Ae),l(B,Ie),l(B,Ue),l(B,he),l(Y,Me),l(Y,Ft),l(Ft,St),l(St,jt),l(St,Ve),l(St,qt);for(let h=0;h<U.length;h+=1)U[h]&&U[h].m(qt,null);Le||(Qe=[M(C,"click",t[15]),M(j,"click",t[16]),M(P,"click",t[17]),M(A,"click",t[18]),M(D,"click",t[19]),M(q,"click",t[20]),M(J,"click",t[21]),M(X,"click",t[22]),M(rt,"click",t[23]),M(lt,"click",t[24]),M(st,"click",t[25]),M(nt,"click",t[9]),M(Ot,"click",t[10])],Le=!0)},p(a,g){if(g[0]&4&&W!==(W=a[2].totalScore+"")&&V(R,W),g[0]&4&&G!==(G=a[2].scores.length+1+"")&&V(at,G),g[0]&6){Wt=ve(a[2].scores);let h;for(h=0;h<Wt.length;h+=1){const ht=bl(a,Wt,h);I[h]?I[h].p(ht,g):(I[h]=_l(ht),I[h].c(),I[h].m(L,null))}for(;h<I.length;h+=1)I[h].d(1);I.length=Wt.length}if(g[0]&16&&(C.disabled=a[4]),g[0]&16&&(j.disabled=a[4]),g[0]&16&&(P.disabled=a[4]),g[0]&16&&(A.disabled=a[4]),g[0]&16&&(D.disabled=a[4]),g[0]&16&&(q.disabled=a[4]),g[0]&16&&(J.disabled=a[4]),g[0]&148&&Et!==(Et=a[4]||!a[2].KillEnabled&&!Jt(a[7])&&!Yt(a[7]))&&(X.disabled=Et),g[0]&148&&b!==(b=a[4]||!a[2].KillEnabled&&!Jt(a[7])&&!Yt(a[7]))&&(rt.disabled=b),g[0]&148&&Ht!==(Ht=a[4]||!a[2].KillEnabled&&!Jt(a[7])&&!Yt(a[7]))&&(lt.disabled=Ht),g[0]&16&&(st.disabled=a[4]),g[0]&4&&ae!==(ae=!a[2].isComplete)&&(nt.disabled=ae),g[0]&32&&yt!==(yt=a[5].rating+"")&&V(ie,yt),g[0]&32&&$t!==($t=a[5].totalGames+"")&&V(re,$t),g[0]&32&&xt!==(xt=a[5].average+"")&&V(ce,xt),g[0]&32&&te!==(te=a[5].kills+"")&&V(ue,te),g[0]&32&&ee!==(ee=a[5].bulls+"")&&V(de,ee),g[0]&32&&le!==(le=a[5].totalScore+"")&&V(he,le),g[0]&77){zt=ve(a[6]);let h;for(h=0;h<zt.length;h+=1){const ht=fl(a,zt,h);U[h]?U[h].p(ht,g):(U[h]=ml(ht),U[h].c(),U[h].m(qt,null))}for(;h<U.length;h+=1)U[h].d(1);U.length=zt.length}},i:je,o:je,d(a){a&&(o(s),o(n),o(p),o(k),o(x),o(F),o(oe),o(Y)),o(e),ul(I,a),ul(U,a),Le=!1,pl(Qe)}}}function Rl(t){return t.map((e,s)=>{const n=t.slice(0,s+1),c=qe(n);return{game:e,rating:qe([e]),totalRating:c?Math.round(c*1e4)/1e4:0}})}function Jt(t){return t==="killHit6"||t==="killHit8"||t==="killMiss"}function Yt(t){return t==="drop"}function Al(t){return t.length<1?0:t.reduce((s,n)=>s+n.totalScore,0)/t.length}function gl(t,e){const s=t[e],n=t[e-1];return n?s.totalRating>n.totalRating?"👆":s.totalRating<n.totalRating?"👇":"-":"-"}function qe(t){if(t.length===0)return 0;const s=Al(t),n=Il(t),c=Ul(t);return s*8+n*500+c*2}function Il(t){const e=t.length*10;let s=0;for(const n of t)for(const c of n.scores)(c===6||c===8||c==="killHit6"||c==="killHit8")&&s++;return s/e}function Ul(t){return t.reduce((e,s)=>s.stats.totalEightKills+s.stats.totalSixKills+e,0)}function Ml(t){const e=t.reduce((n,c)=>({bulls:c.stats.bulls+n.bulls,kills:c.stats.totalEightKills+c.stats.totalSixKills+n.kills,drops:c.stats.drops+n.drops,totalScore:c.totalScore+n.totalScore}),{bulls:0,kills:0,drops:0,totalScore:0}),s=qe(t);return{...e,average:e.totalScore&&t.length?Math.round(e.totalScore/t.length*1e4)/1e4:0,rating:s?Math.round(s*100)/100:0,totalGames:t.length}}function Qt(t){if(typeof t=="number")return t.toString();switch(t){case"killHit6":return"Kill 6";case"killHit8":return"Kill 8";case"killMiss":return"Miss";case"drop":return"Drop"}}function Vl(t,e,s){let n,c,p,k,E,H,_;Bl(t,_t,T=>s(3,_=T));const W=!1;let R="",O=-1;function y(T){n.addScore(T),Tt(_t,_=[..._],_)}function $(T){n.replaceScore(O,T),s(1,O=-1),Tt(_t,_=[..._],_)}function G(T){O===-1?y(T):$(T),Tt(_t,_=[..._],_)}function at(){if(!n.isComplete)return;_[_.length-1]!==n?Tt(_t,_=[..._],_):Tt(_t,_=[..._,new Xt],_),s(0,R=""),s(1,O=-1)}function vt(){Tt(_t,_=[new Xt],_)}const L=()=>{s(1,O=-1)},x=T=>s(1,O=T),F=()=>{G(0)},w=()=>{G(1)},C=()=>{G(2)},ot=()=>{G(3)},ut=()=>{G(4)},j=()=>{G(5)},tt=()=>{G(6)},it=()=>{G("killHit6")},P=()=>{G("killHit8")},mt=()=>{G("killMiss")},z=()=>{G("drop")},A=T=>{s(0,R=T.gameId)},dt=T=>{const D=Tt(_t,_=_.filter((gt,pt)=>pt!==T),_);D.length<1&&D.push(new Xt),Tt(_t,_=D,_),s(0,R="")};return t.$$.update=()=>{t.$$.dirty[0]&9&&s(2,n=R&&_.find(T=>T.gameId===R)||_[_.length-1]),t.$$.dirty[0]&6&&s(7,c=O>-1?n.scores[O]:null),t.$$.dirty[0]&8&&s(12,p=_.filter(T=>T.isComplete)),t.$$.dirty[0]&4096&&s(6,k=Rl(p)),t.$$.dirty[0]&4096&&s(5,E=Ml(p)),t.$$.dirty[0]&6&&s(4,H=n.isComplete&&O===-1)},[R,O,n,_,H,E,k,c,G,at,vt,W,p,L,x,F,w,C,ot,ut,j,tt,it,P,mt,z,A,dt]}class ql extends Gl{constructor(e){super(),wl(this,e,Vl,Cl,Tl,{ssr:11},null,[-1,-1])}get ssr(){return this.$$.ctx[11]}}export{ql as component};