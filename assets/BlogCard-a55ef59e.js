import{_ as t,a as o,b as l,c as b,d as r,e as m,f as v,g as p,h as c,i as j,j as n,k as d,l as h,m as x,n as u,o as f,p as w,q as B,r as k,s as C,t as L,u as N,v as A,w as U,x as y,y as F,z as R,A as V,B as D,C as E,D as I,E as K,F as O,G as X,H as q,I as H,J as S,K as T,L as z,M as G,N as J,O as M,P,Q,R as W,S as Y,T as Z,U as $,V as ss,W as _s,X as es,Y as gs,Z as as,$ as is,a0 as ts,a1 as os,a2 as ls,a3 as bs,a4 as rs,a5 as ms,a6 as vs,a7 as ps,a8 as cs,a9 as js,aa as ns,ab as ds,ac as hs,ad as xs,ae as us,af as fs,ag as ws,ah as Bs,ai as ks,aj as Cs,ak as Ls,al as Ns,am as As,an as Us,ao as ys,ap as Fs,aq as Rs,ar as Vs,as as Ds,at as Es,au as Is,av as Ks,aw as Os,ax as Xs,ay as qs,az as Hs,aA as Ss,aB as Ts,aC as zs,aD as Gs,aE as Js,aF as Ms,aG as Ps,aH as Qs,aI as Ws,aJ as Ys,aK as Zs,aL as $s,aM as s_,aN as __,aO as e_,aP as g_,aQ as a_,aR as i_,aS as t_,aT as o_,aU as l_,aV as b_,aW as r_,aX as m_,aY as v_,aZ as p_,a_ as c_,a$ as j_,b0 as n_,b1 as d_,b2 as h_,b3 as x_,b4 as u_,b5 as f_,b6 as w_,b7 as B_,b8 as k_,b9 as C_,ba as L_,bb as N_,bc as A_,bd as U_,be as y_,bf as F_,bg as R_,bh as V_,bi as D_,bj as E_,bk as I_,bl as K_,bm as O_,bn as X_,bo as q_,bp as H_}from"./4-f8b98c72.js";import{_ as S_,r as T_,o as z_,c as G_,b as J_,E as M_,a as s,D as g}from"./index-1520b079.js";const P_={name:"BlogCard",props:{article:{type:Object,required:!0}},methods:{getImgFileUrl(e){return new URL(Object.assign({"../../assets/imgs/Arrow-Bottom.svg":t,"../../assets/imgs/Bg.jpg":o,"../../assets/imgs/Logo.svg":l,"../../assets/imgs/LogoCompany.svg":b,"../../assets/imgs/LogoLight.svg":r,"../../assets/imgs/about/Kia.png":m,"../../assets/imgs/about/Nissan.png":v,"../../assets/imgs/about/features.jpg":p,"../../assets/imgs/about/team.jpg":c,"../../assets/imgs/blog/1.jpg":j,"../../assets/imgs/blog/1/1.jpg":n,"../../assets/imgs/blog/1/2.jpg":d,"../../assets/imgs/blog/1/3.jpg":h,"../../assets/imgs/blog/1/4.jpg":x,"../../assets/imgs/blog/1/5.jpg":u,"../../assets/imgs/blog/1/article-bg.jpg":f,"../../assets/imgs/blog/2.jpg":w,"../../assets/imgs/blog/2/1.jpg":B,"../../assets/imgs/blog/2/2.jpg":k,"../../assets/imgs/blog/2/3.jpg":C,"../../assets/imgs/blog/2/4.jpg":L,"../../assets/imgs/blog/2/5.jpg":N,"../../assets/imgs/blog/2/article-bg.jpg":A,"../../assets/imgs/blog/3.jpg":U,"../../assets/imgs/blog/3/1.jpg":y,"../../assets/imgs/blog/3/2.jpg":F,"../../assets/imgs/blog/3/3.jpg":R,"../../assets/imgs/blog/3/4.jpg":V,"../../assets/imgs/blog/3/5.jpg":D,"../../assets/imgs/blog/3/article-bg.jpg":E,"../../assets/imgs/blog/4/1.jpg":I,"../../assets/imgs/blog/4/2.jpg":K,"../../assets/imgs/blog/4/3.jpg":O,"../../assets/imgs/blog/4/4.jpg":X,"../../assets/imgs/blog/4/5.jpg":q,"../../assets/imgs/blog/4/article-bg.jpg":H,"../../assets/imgs/blog/5/1.jpg":S,"../../assets/imgs/blog/5/2.jpg":T,"../../assets/imgs/blog/5/3.jpg":z,"../../assets/imgs/blog/5/4.jpg":G,"../../assets/imgs/blog/5/5.jpg":J,"../../assets/imgs/blog/5/article-bg.jpg":M,"../../assets/imgs/blog/6/1.jpg":P,"../../assets/imgs/blog/6/2.jpg":Q,"../../assets/imgs/blog/6/3.jpg":W,"../../assets/imgs/blog/6/4.jpg":Y,"../../assets/imgs/blog/6/5.jpg":Z,"../../assets/imgs/blog/6/article-bg.jpg":$,"../../assets/imgs/blog/7/1.jpg":ss,"../../assets/imgs/blog/7/2.jpg":_s,"../../assets/imgs/blog/7/3.jpg":es,"../../assets/imgs/blog/7/4.jpg":gs,"../../assets/imgs/blog/7/5.jpg":as,"../../assets/imgs/blog/7/article-bg.jpg":is,"../../assets/imgs/blog/8/1.jpg":ts,"../../assets/imgs/blog/8/2.jpg":os,"../../assets/imgs/blog/8/3.jpg":ls,"../../assets/imgs/blog/8/4.jpg":bs,"../../assets/imgs/blog/8/5.jpg":rs,"../../assets/imgs/blog/8/article-bg.jpg":ms,"../../assets/imgs/blog/9/1.jpg":vs,"../../assets/imgs/blog/9/2.jpg":ps,"../../assets/imgs/blog/9/3.jpg":cs,"../../assets/imgs/blog/9/4.jpg":js,"../../assets/imgs/blog/9/5.jpg":ns,"../../assets/imgs/blog/9/article-bg.jpg":ds,"../../assets/imgs/cars/1/exterior/1.jpeg":hs,"../../assets/imgs/cars/1/exterior/2.jpeg":xs,"../../assets/imgs/cars/1/exterior/3.jpeg":us,"../../assets/imgs/cars/1/exterior/4.jpeg":fs,"../../assets/imgs/cars/1/interior/5.jpeg":ws,"../../assets/imgs/cars/1/interior/6.jpeg":Bs,"../../assets/imgs/cars/10/exterior/1.jpeg":ks,"../../assets/imgs/cars/10/exterior/2.jpeg":Cs,"../../assets/imgs/cars/10/exterior/3.jpeg":Ls,"../../assets/imgs/cars/10/interior/4.jpeg":Ns,"../../assets/imgs/cars/10/interior/5.jpeg":As,"../../assets/imgs/cars/2/exterior/1.jpeg":Us,"../../assets/imgs/cars/2/exterior/2.jpeg":ys,"../../assets/imgs/cars/2/interior/3.jpeg":Fs,"../../assets/imgs/cars/2/interior/4.jpeg":Rs,"../../assets/imgs/cars/3/exterior/1.jpeg":Vs,"../../assets/imgs/cars/3/interior/2.jpeg":Ds,"../../assets/imgs/cars/3/interior/3.jpeg":Es,"../../assets/imgs/cars/3/interior/4.jpeg":Is,"../../assets/imgs/cars/4/exterior/1.jpeg":Ks,"../../assets/imgs/cars/4/exterior/2.jpeg":Os,"../../assets/imgs/cars/4/exterior/3.jpeg":Xs,"../../assets/imgs/cars/5/exterior/1.jpeg":qs,"../../assets/imgs/cars/5/exterior/2.jpeg":Hs,"../../assets/imgs/cars/5/exterior/3.jpeg":Ss,"../../assets/imgs/cars/5/interior/4.jpeg":Ts,"../../assets/imgs/cars/5/interior/5.jpeg":zs,"../../assets/imgs/cars/5/interior/7.jpeg":Gs,"../../assets/imgs/cars/5/interior/8.jpeg":Js,"../../assets/imgs/cars/6/exterior/1.jpeg":Ms,"../../assets/imgs/cars/6/exterior/2.jpeg":Ps,"../../assets/imgs/cars/6/interior/3.jpeg":Qs,"../../assets/imgs/cars/6/interior/4.jpeg":Ws,"../../assets/imgs/cars/6/interior/5.jpeg":Ys,"../../assets/imgs/cars/6/interior/7.jpeg":Zs,"../../assets/imgs/cars/7/exterior/4.jpeg":$s,"../../assets/imgs/cars/7/exterior/5.jpeg":s_,"../../assets/imgs/cars/7/exterior/6.jpeg":__,"../../assets/imgs/cars/7/interior/1.jpeg":e_,"../../assets/imgs/cars/7/interior/2.jpeg":g_,"../../assets/imgs/cars/7/interior/3.jpeg":a_,"../../assets/imgs/cars/8/exterior/1.jpeg":i_,"../../assets/imgs/cars/8/exterior/2.jpeg":t_,"../../assets/imgs/cars/8/exterior/3.jpeg":o_,"../../assets/imgs/cars/8/interior/4.jpeg":l_,"../../assets/imgs/cars/8/interior/5.jpeg":b_,"../../assets/imgs/cars/8/interior/6.jpeg":r_,"../../assets/imgs/cars/8/interior/7.jpeg":m_,"../../assets/imgs/cars/9/exterior/1.jpeg":v_,"../../assets/imgs/cars/9/exterior/2.jpeg":p_,"../../assets/imgs/cars/9/exterior/3.jpeg":c_,"../../assets/imgs/cars/9/interior/4.jpeg":j_,"../../assets/imgs/cars/9/interior/5.jpeg":n_,"../../assets/imgs/favicon.ico":d_,"../../assets/imgs/home/advantages/bg3.svg":h_,"../../assets/imgs/home/advantages/bg4.svg":x_,"../../assets/imgs/home/choose-vehicle/car1.png":u_,"../../assets/imgs/home/choose-vehicle/car2.png":f_,"../../assets/imgs/home/how-work/Honda_Accord.png":w_,"../../assets/imgs/home/how-work/Lexus.png":B_,"../../assets/imgs/home/main-carousel/CAR.png":k_,"../../assets/imgs/home/main-carousel/Nissan.png":C_,"../../assets/imgs/home/main-carousel/TRUCK.png":L_,"../../assets/imgs/home/main-carousel/VAN.png":N_,"../../assets/imgs/home/main-screen/Background.svg":A_,"../../assets/imgs/home/steps/X1.png":U_,"../../assets/imgs/home/steps/X2.png":y_,"../../assets/imgs/loan-rates/Chevrolet.jpg":F_,"../../assets/imgs/loan-rates/Ford.jpg":R_,"../../assets/imgs/mobile/Logo.svg":V_,"../../assets/imgs/page-title-bg.jpg":D_,"../../assets/imgs/reviews/1.jpg":E_,"../../assets/imgs/select-arrow.svg":I_,"../../assets/imgs/svg/sprite.svg":K_,"../../assets/imgs/vehicle-videos/1.jpg":O_,"../../assets/imgs/vehicle-videos/2.jpg":X_,"../../assets/imgs/vehicle-videos/3.jpg":q_,"../../assets/imgs/vehicle-videos/4.jpg":H_})[`../../assets/imgs/${e}`],self.location).href}}},Q_={class:"blog-card"},W_={class:"blog-card__img-wrap"},Y_=["src"],Z_={class:"blog-card__description"},$_={class:"blog-card__date text"},se={class:"blog-card__title title-text"};function _e(e,ee,_,ge,ae,a){const i=T_("router-link");return z_(),G_("div",Q_,[J_(i,{to:{name:"article",params:{id:_.article.id}}},{default:M_(()=>[s("div",W_,[s("img",{src:a.getImgFileUrl(_.article.img),alt:"article image",class:"blog-card__img"},null,8,Y_)]),s("div",Z_,[s("div",$_,g(_.article.date),1),s("div",se,g(_.article.title),1)])]),_:1},8,["to"])])}const oe=S_(P_,[["render",_e]]);export{oe as B};
