import{P as w}from"./PageTitle-9dd52246.js";import{_ as y,a as C,b as P,c as f,d as x,e as A,f as M,g as S,h as U,i as I,j as k,k as H,l as L,m as B,n as X,o as $,p as T,q,r as F,s as z,t as D,u as N,v as O,w as E,x as Y,y as Z,z as R,A as K,B as Q,C as G,D as J,E as W,F as ee,G as se,H as _e,I as te,J as ie,K as oe,L as ae,M as ge,N as le,O as re,P as ce,Q as be,R as ve,S as me,T as pe,U as de,V as ne,W as he,X as je,Y as ue,Z as Ve,$ as we,a0 as ye,a1 as Ce,a2 as Pe,a3 as fe,a4 as xe,a5 as Ae,a6 as Me,a7 as Se,a8 as Ue,a9 as Ie,aa as ke,ab as He,ac as Le,ad as Be,ae as Xe,af as $e,ag as Te,ah as qe,ai as Fe,aj as ze,ak as De,al as Ne,am as Oe,an as Ee,ao as Ye,ap as Ze,aq as Re,ar as Ke,as as Qe,at as Ge,au as Je,av as We,aw as es,ax as ss,ay as _s,az as ts,aA as is,aB as os,aC as as,aD as gs,aE as ls,aF as rs,aG as cs,aH as bs,aI as vs,aJ as ms,aK as ps,aL as ds,aM as ns,aN as hs,aO as js,aP as us,aQ as Vs,aR as ws,aS as ys,aT as Cs,aU as Ps,aV as fs,aW as xs,aX as As,aY as Ms,aZ as Ss,a_ as Us,a$ as Is,b0 as ks,b1 as Hs,b2 as Ls,b3 as Bs,b4 as Xs,b5 as $s,b6 as Ts,b7 as qs,b8 as Fs,b9 as zs,ba as Ds,bb as Ns,bc as Os,bd as Es,be as Ys,bf as Zs,bg as Rs,bh as Ks,bi as Qs,bj as Gs,bk as Js,bl as Ws,bm as e_,bn as s_,bo as __,bp as t_,bq as i_}from"./4-4e259c50.js";import{_ as m,I as h,Q as o_,r as l,o,c as r,a as s,b as v,P as a_,D as g_,B as d,C as j,V as l_,F as n,d as r_}from"./index-12c34f5f.js";import{P as c_}from"./Pagination-746c71cc.js";const b_={components:{Icon:h},emits:["closeModal"],name:"VehiclePopup",props:{videoUrl:{type:String,required:!0}},methods:{closeModalAction(){this.$emit("closeModal"),o_()}}},v_={class:"vehicle-popup"},m_={class:"vehicle-popup__content"},p_={class:"vehicle-popup__video"},d_=["src"];function n_(t,_,a,p,c,e){const g=l("Icon");return o(),r("div",v_,[s("div",{onClick:_[1]||(_[1]=(...i)=>e.closeModalAction&&e.closeModalAction(...i)),class:"vehicle-popup__wrap"},[s("div",m_,[s("div",p_,[s("iframe",{src:a.videoUrl,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:"",class:"vehicle-popup__video-iframe"},null,8,d_),s("button",{onClick:_[0]||(_[0]=(...i)=>e.closeModalAction&&e.closeModalAction(...i)),class:"vehicle-popup__cross"},[v(g,{src:"cross-btn",width:"24",height:"24",class:"vehicle-popup__cross-icon"})])])])])])}const u=m(b_,[["render",n_]]),h_={name:"VehicleVideoItem",components:{VehiclePopup:u,Icon:h},props:{vehicleVideo:{type:Object,required:!0}},data(){return{openedModal:!1}},methods:{getImgFileUrl(t){return new URL(Object.assign({"../../assets/imgs/Arrow-Bottom.svg":y,"../../assets/imgs/Bg.jpg":C,"../../assets/imgs/Logo.svg":P,"../../assets/imgs/LogoCompany.svg":f,"../../assets/imgs/LogoLight.svg":x,"../../assets/imgs/about/Kia.png":A,"../../assets/imgs/about/Nissan.png":M,"../../assets/imgs/about/features.jpg":S,"../../assets/imgs/about/team.jpg":U,"../../assets/imgs/blog/1.jpg":I,"../../assets/imgs/blog/1/1.jpg":k,"../../assets/imgs/blog/1/2.jpg":H,"../../assets/imgs/blog/1/3.jpg":L,"../../assets/imgs/blog/1/4.jpg":B,"../../assets/imgs/blog/1/5.jpg":X,"../../assets/imgs/blog/1/article-bg.jpg":$,"../../assets/imgs/blog/2.jpg":T,"../../assets/imgs/blog/2/1.jpg":q,"../../assets/imgs/blog/2/2.jpg":F,"../../assets/imgs/blog/2/3.jpg":z,"../../assets/imgs/blog/2/4.jpg":D,"../../assets/imgs/blog/2/5.jpg":N,"../../assets/imgs/blog/2/article-bg.jpg":O,"../../assets/imgs/blog/3.jpg":E,"../../assets/imgs/blog/3/1.jpg":Y,"../../assets/imgs/blog/3/2.jpg":Z,"../../assets/imgs/blog/3/3.jpg":R,"../../assets/imgs/blog/3/4.jpg":K,"../../assets/imgs/blog/3/5.jpg":Q,"../../assets/imgs/blog/3/article-bg.jpg":G,"../../assets/imgs/blog/4/1.jpg":J,"../../assets/imgs/blog/4/2.jpg":W,"../../assets/imgs/blog/4/3.jpg":ee,"../../assets/imgs/blog/4/4.jpg":se,"../../assets/imgs/blog/4/5.jpg":_e,"../../assets/imgs/blog/4/article-bg.jpg":te,"../../assets/imgs/blog/5/1.jpg":ie,"../../assets/imgs/blog/5/2.jpg":oe,"../../assets/imgs/blog/5/3.jpg":ae,"../../assets/imgs/blog/5/4.jpg":ge,"../../assets/imgs/blog/5/5.jpg":le,"../../assets/imgs/blog/5/article-bg.jpg":re,"../../assets/imgs/blog/6/1.jpg":ce,"../../assets/imgs/blog/6/2.jpg":be,"../../assets/imgs/blog/6/3.jpg":ve,"../../assets/imgs/blog/6/4.jpg":me,"../../assets/imgs/blog/6/5.jpg":pe,"../../assets/imgs/blog/6/article-bg.jpg":de,"../../assets/imgs/blog/7/1.jpg":ne,"../../assets/imgs/blog/7/2.jpg":he,"../../assets/imgs/blog/7/3.jpg":je,"../../assets/imgs/blog/7/4.jpg":ue,"../../assets/imgs/blog/7/5.jpg":Ve,"../../assets/imgs/blog/7/article-bg.jpg":we,"../../assets/imgs/blog/8/1.jpg":ye,"../../assets/imgs/blog/8/2.jpg":Ce,"../../assets/imgs/blog/8/3.jpg":Pe,"../../assets/imgs/blog/8/4.jpg":fe,"../../assets/imgs/blog/8/5.jpg":xe,"../../assets/imgs/blog/8/article-bg.jpg":Ae,"../../assets/imgs/blog/9/1.jpg":Me,"../../assets/imgs/blog/9/2.jpg":Se,"../../assets/imgs/blog/9/3.jpg":Ue,"../../assets/imgs/blog/9/4.jpg":Ie,"../../assets/imgs/blog/9/5.jpg":ke,"../../assets/imgs/blog/9/article-bg.jpg":He,"../../assets/imgs/cars/1/exterior/1.jpeg":Le,"../../assets/imgs/cars/1/exterior/2.jpeg":Be,"../../assets/imgs/cars/1/exterior/3.jpeg":Xe,"../../assets/imgs/cars/1/exterior/4.jpeg":$e,"../../assets/imgs/cars/1/interior/5.jpeg":Te,"../../assets/imgs/cars/1/interior/6.jpeg":qe,"../../assets/imgs/cars/10/exterior/1.jpeg":Fe,"../../assets/imgs/cars/10/exterior/2.jpeg":ze,"../../assets/imgs/cars/10/exterior/3.jpeg":De,"../../assets/imgs/cars/10/interior/4.jpeg":Ne,"../../assets/imgs/cars/10/interior/5.jpeg":Oe,"../../assets/imgs/cars/2/exterior/1.jpeg":Ee,"../../assets/imgs/cars/2/exterior/2.jpeg":Ye,"../../assets/imgs/cars/2/interior/3.jpeg":Ze,"../../assets/imgs/cars/2/interior/4.jpeg":Re,"../../assets/imgs/cars/3/exterior/1.jpeg":Ke,"../../assets/imgs/cars/3/interior/2.jpeg":Qe,"../../assets/imgs/cars/3/interior/3.jpeg":Ge,"../../assets/imgs/cars/3/interior/4.jpeg":Je,"../../assets/imgs/cars/4/exterior/1.jpeg":We,"../../assets/imgs/cars/4/exterior/2.jpeg":es,"../../assets/imgs/cars/4/exterior/3.jpeg":ss,"../../assets/imgs/cars/5/exterior/1.jpeg":_s,"../../assets/imgs/cars/5/exterior/2.jpeg":ts,"../../assets/imgs/cars/5/exterior/3.jpeg":is,"../../assets/imgs/cars/5/interior/4.jpeg":os,"../../assets/imgs/cars/5/interior/5.jpeg":as,"../../assets/imgs/cars/5/interior/7.jpeg":gs,"../../assets/imgs/cars/5/interior/8.jpeg":ls,"../../assets/imgs/cars/6/exterior/1.jpeg":rs,"../../assets/imgs/cars/6/exterior/2.jpeg":cs,"../../assets/imgs/cars/6/interior/3.jpeg":bs,"../../assets/imgs/cars/6/interior/4.jpeg":vs,"../../assets/imgs/cars/6/interior/5.jpeg":ms,"../../assets/imgs/cars/6/interior/7.jpeg":ps,"../../assets/imgs/cars/7/exterior/4.jpeg":ds,"../../assets/imgs/cars/7/exterior/5.jpeg":ns,"../../assets/imgs/cars/7/exterior/6.jpeg":hs,"../../assets/imgs/cars/7/interior/1.jpeg":js,"../../assets/imgs/cars/7/interior/2.jpeg":us,"../../assets/imgs/cars/7/interior/3.jpeg":Vs,"../../assets/imgs/cars/8/exterior/1.jpeg":ws,"../../assets/imgs/cars/8/exterior/2.jpeg":ys,"../../assets/imgs/cars/8/exterior/3.jpeg":Cs,"../../assets/imgs/cars/8/interior/4.jpeg":Ps,"../../assets/imgs/cars/8/interior/5.jpeg":fs,"../../assets/imgs/cars/8/interior/6.jpeg":xs,"../../assets/imgs/cars/8/interior/7.jpeg":As,"../../assets/imgs/cars/9/exterior/1.jpeg":Ms,"../../assets/imgs/cars/9/exterior/2.jpeg":Ss,"../../assets/imgs/cars/9/exterior/3.jpeg":Us,"../../assets/imgs/cars/9/interior/4.jpeg":Is,"../../assets/imgs/cars/9/interior/5.jpeg":ks,"../../assets/imgs/favicon.ico":Hs,"../../assets/imgs/home/advantages/bg3.svg":Ls,"../../assets/imgs/home/advantages/bg4.svg":Bs,"../../assets/imgs/home/choose-vehicle/car1.png":Xs,"../../assets/imgs/home/choose-vehicle/car2.png":$s,"../../assets/imgs/home/how-work/Honda_Accord.png":Ts,"../../assets/imgs/home/how-work/Lexus.png":qs,"../../assets/imgs/home/main-carousel/CAR.png":Fs,"../../assets/imgs/home/main-carousel/Nissan.png":zs,"../../assets/imgs/home/main-carousel/TRUCK.png":Ds,"../../assets/imgs/home/main-carousel/VAN.png":Ns,"../../assets/imgs/home/main-screen/Background.svg":Os,"../../assets/imgs/home/steps/X1.png":Es,"../../assets/imgs/home/steps/X2.png":Ys,"../../assets/imgs/loan-rates/Chevrolet.jpg":Zs,"../../assets/imgs/loan-rates/Ford.jpg":Rs,"../../assets/imgs/mobile/Logo.svg":Ks,"../../assets/imgs/page-title-bg.jpg":Qs,"../../assets/imgs/preloader.svg":Gs,"../../assets/imgs/reviews/1.jpg":Js,"../../assets/imgs/select-arrow.svg":Ws,"../../assets/imgs/svg/sprite.svg":e_,"../../assets/imgs/vehicle-videos/1.jpg":s_,"../../assets/imgs/vehicle-videos/2.jpg":__,"../../assets/imgs/vehicle-videos/3.jpg":t_,"../../assets/imgs/vehicle-videos/4.jpg":i_})[`../../assets/imgs/${t}`],self.location).href},openModal(){this.openedModal=!0,a_()},closeModal(){this.openedModal=!1}}},j_={class:"vehicle-video"},u_={class:"vehicle-video__img-wrap"},V_=["src","alt"],w_={class:"vehicle-video__play-btn-icon"};function y_(t,_,a,p,c,e){const g=l("Icon"),i=l("VehiclePopup");return o(),r(n,null,[s("div",j_,[s("div",u_,[s("img",{src:e.getImgFileUrl(a.vehicleVideo.poster),alt:`${a.vehicleVideo.title} poster`,class:"vehicle-video__img"},null,8,V_),s("button",{onClick:_[0]||(_[0]=(...b)=>e.openModal&&e.openModal(...b)),class:"vehicle-video__play-btn"},[s("span",w_,[v(g,{src:"play-btn",class:"vehicle-video__play-btn-icon-play"})])])]),s("div",{onClick:_[1]||(_[1]=(...b)=>e.openModal&&e.openModal(...b)),class:"vehicle-video__title"},g_(a.vehicleVideo.title),1)]),(o(),d(l_,{to:"body"},[c.openedModal?(o(),d(i,{key:0,onCloseModal:e.closeModal,"video-url":a.vehicleVideo.videoUrl},null,8,["onCloseModal","video-url"])):j("",!0)]))],64)}const C_=m(h_,[["render",y_]]),P_={name:"VehicleVideosAll",components:{VehiclePopup:u,Pagination:c_,VehicleVideoItem:C_},data(){return{activePage:1,allVideos:[{currentPage:1,lastPage:4,totalItems:16,items:[{id:1,title:"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",poster:"vehicle-videos/1.jpg",videoUrl:"https://www.youtube.com/embed/X7qEjYMuAcw"},{id:2,title:"VAC's Vehicle Shoot #11: Toyota Highlander",poster:"vehicle-videos/2.jpg",videoUrl:"https://www.youtube.com/embed/PtFPj1ml0yg"},{id:3,title:"VAC's Vehicle Shoot #09: 2019 Mazda CX-5",poster:"vehicle-videos/3.jpg",videoUrl:"https://www.youtube.com/embed/XSSdfHZDH90"},{id:4,title:"Some Vehicles VAC Offers!",poster:"vehicle-videos/4.jpg",videoUrl:"https://www.youtube.com/embed/LVhC17roLBI"}]},{currentPage:2,lastPage:4,totalItems:16,items:[{id:1,title:"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",poster:"vehicle-videos/3.jpg",videoUrl:"https://www.youtube.com/embed/XSSdfHZDH90"},{id:2,title:"VAC's Vehicle Shoot #11: Toyota Highlander",poster:"vehicle-videos/4.jpg",videoUrl:"https://www.youtube.com/embed/LVhC17roLBI"},{id:3,title:"VAC's Vehicle Shoot #09: 2019 Mazda CX-5",poster:"vehicle-videos/1.jpg",videoUrl:"https://www.youtube.com/embed/X7qEjYMuAcw"},{id:4,title:"Some Vehicles VAC Offers!",poster:"vehicle-videos/2.jpg",videoUrl:"https://www.youtube.com/embed/PtFPj1ml0yg"}]},{currentPage:3,lastPage:4,totalItems:16,items:[{id:1,title:"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",poster:"vehicle-videos/3.jpg",videoUrl:"https://www.youtube.com/embed/XSSdfHZDH90"},{id:2,title:"VAC's Vehicle Shoot #11: Toyota Highlander",poster:"vehicle-videos/1.jpg",videoUrl:"https://www.youtube.com/embed/X7qEjYMuAcw"},{id:3,title:"VAC's Vehicle Shoot #09: 2019 Mazda CX-5",poster:"vehicle-videos/4.jpg",videoUrl:"https://www.youtube.com/embed/LVhC17roLBI"},{id:4,title:"Some Vehicles VAC Offers!",poster:"vehicle-videos/2.jpg",videoUrl:"https://www.youtube.com/embed/PtFPj1ml0yg"}]},{currentPage:4,lastPage:4,totalItems:16,items:[{id:1,title:"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",poster:"vehicle-videos/2.jpg",videoUrl:"https://www.youtube.com/embed/PtFPj1ml0yg"},{id:2,title:"VAC's Vehicle Shoot #11: Toyota Highlander",poster:"vehicle-videos/1.jpg",videoUrl:"https://www.youtube.com/embed/X7qEjYMuAcw"},{id:3,title:"VAC's Vehicle Shoot #09: 2019 Mazda CX-5",poster:"vehicle-videos/4.jpg",videoUrl:"https://www.youtube.com/embed/LVhC17roLBI"},{id:4,title:"Some Vehicles VAC Offers!",poster:"vehicle-videos/3.jpg",videoUrl:"https://www.youtube.com/embed/XSSdfHZDH90"}]}]}},computed:{activePageVideos(){return this.allVideos.find(t=>t.currentPage===this.activePage)}},mounted(){this.$router.push({name:"vehicle-videos",query:{page:this.activePage}})},methods:{onChangePage(t){this.$router.push({name:"vehicle-videos",query:{page:t}}),this.activePage=t}}},f_={class:"vehicle-videos-all"},x_={class:"container"},A_={key:0,class:"vehicle-videos-all__content"};function M_(t,_,a,p,c,e){const g=l("VehicleVideoItem"),i=l("Pagination");return o(),r("section",f_,[s("div",x_,[e.activePageVideos?(o(),r("div",A_,[(o(!0),r(n,null,r_(e.activePageVideos.items,(b,V)=>(o(),d(g,{"vehicle-video":b,key:`vehicle-video-${V}`},null,8,["vehicle-video"]))),128))])):j("",!0),v(i,{modelValue:c.activePage,"onUpdate:modelValue":e.onChangePage,"total-items":e.activePageVideos.totalItems,"current-page":e.activePageVideos.currentPage,"last-page":e.activePageVideos.lastPage},null,8,["modelValue","onUpdate:modelValue","total-items","current-page","last-page"])])])}const S_=m(P_,[["render",M_]]),U_={name:"VehicleVideosView",components:{VehicleVideosAll:S_,PageTitle:w}};function I_(t,_,a,p,c,e){const g=l("PageTitle"),i=l("VehicleVideosAll");return o(),r(n,null,[v(g,{title:"Vehicle videos"}),v(i)],64)}const X_=m(U_,[["render",I_]]);export{X_ as default};
