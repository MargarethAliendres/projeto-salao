"use strict";(self.webpackChunkprojeto_venda=self.webpackChunkprojeto_venda||[]).push([[121],{1121:(x,u,s)=>{s.r(u),s.d(u,{ProdutosModule:()=>i});var p=s(6895),a=s(7809),o=s(1571);const g=[{id:2,descricao:"Monitor muito bom",preco:1200.5,descricaoPreco:"\xc0 vista no PIX",imagem:"././assets/2.jpg",quantidadeEstoque:2},{id:3,descricao:"Teclado excelente",preco:749.99,descricaoPreco:"\xc0 vista no PIX",imagem:"././assets/3.jpg",quantidadeEstoque:50},{id:4,descricao:"Fone para quem joga FPS",preco:599.99,descricaoPreco:"\xc0 vista no PIX",imagem:"././assets/4.jpg",quantidadeEstoque:1e3},{id:6,descricao:"Fone de ouvido bom",preco:399.99,descricaoPreco:"\xc0 vista no PIX",imagem:"././assets/6.jpg",quantidadeEstoque:70},{id:8,descricao:"Combo de placa de v\xeddeos",preco:18449.99,descricaoPreco:"\xc0 vista no PIX",imagem:"././assets/7.jpg",quantidadeEstoque:15},{id:9,descricao:"Processador Ryzen",preco:1e3,descricaoPreco:"\xc0 vista no PIX",imagem:"././assets/8.jpg",quantidadeEstoque:25},{id:10,descricao:"Notebook bom",preco:2500,descricaoPreco:"\xc0 vista no PIX",imagem:"././assets/9.jpg",quantidadeEstoque:10},{id:11,descricao:"Notebook excelente",preco:4500,descricaoPreco:"\xc0 vista no PIX",imagem:"././assets/10.jpg",quantidadeEstoque:35}];class n{constructor(){this.produtos=g}getAll(){return this.produtos}getOne(t){return this.produtos.find(r=>r.id=t)}}function m(e,t){if(1&e&&(o.TgZ(0,"div",2)(1,"a",3),o._UZ(2,"img",4),o.qZA()()),2&e){const r=t.$implicit;o.xp6(1),o.MGl("routerLink","/produtos/",r.id,""),o.xp6(1),o.Q6J("src",r.imagem,o.LSH)}}n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"});class d{constructor(t,r){this.produtosService=t,this.route=r}ngOnInit(){const t=this.produtosService.getAll();this.route.queryParamMap.subscribe(r=>{const l=r.get("descricao")?.toLowerCase();this.produtos=l?t.filter(v=>v.descricao.toLowerCase().includes(l)):t})}}d.\u0275fac=function(t){return new(t||d)(o.Y36(n),o.Y36(a.gz))},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"]],template:function(t,r){1&t&&(o.TgZ(0,"section",0),o.YNc(1,m,3,2,"div",1),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngForOf",r.produtos))},dependencies:[p.sg,a.rH],styles:[".product-list[_ngcontent-%COMP%]{padding:10px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:10px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:300px;background-color:#fff;box-shadow:#63636333 0 2px 8px;margin-bottom:10px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-description[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]});const f=[{path:"",component:d}];class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({imports:[a.Bz.forChild(f),a.Bz]});var P=s(433);class i{}i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[p.ez,c,P.u5]})}}]);