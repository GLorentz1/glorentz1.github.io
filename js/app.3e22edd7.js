(function(o){function t(t){for(var i,r,s=t[0],l=t[1],c=t[2],d=0,h=[];d<s.length;d++)r=s[d],n[r]&&h.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(o[i]=l[i]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var o,t=0;t<a.length;t++){for(var e=a[t],i=!0,s=1;s<e.length;s++){var l=e[s];0!==n[l]&&(i=!1)}i&&(a.splice(t--,1),o=r(r.s=e[0]))}return o}var i={},n={app:0},a=[];function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=o,r.c=i,r.d=function(o,t,e){r.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:e})},r.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},r.t=function(o,t){if(1&t&&(o=r(o)),8&t)return o;if(4&t&&"object"===typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var i in o)r.d(e,i,function(t){return o[t]}.bind(null,i));return e},r.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return r.d(t,"a",t),t},r.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),e()})({0:function(o,t,e){o.exports=e("56d7")},"034f":function(o,t,e){"use strict";var i=e("64a9"),n=e.n(i);n.a},"56d7":function(o,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),n=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{attrs:{id:"app"}},[e("controller")],1)},a=[],r=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[null!=o.controller?e("login-nav",{attrs:{controller:o.controller},on:{login:o.Login,logout:function(t){o.logged=!1},showBooks:function(t){o.userBooks=!0},showTransactions:o.ShowTransactionsModal}}):o._e(),o.logged?e("book-views",{attrs:{userType:o.loginType,books:o.controller.items},on:{solicitaLivro:o.SolicitaLivro,createBook:o.CreateBook}}):e("h1",[o._v("Faça login para visualizar os livros")]),!0===o.logged?e("user-books-modal",{attrs:{showModal:o.userBooks,books:this.controller.GetUserById(this.activeUser).providedBooks},on:{closeModal:function(t){o.userBooks=!1},removeBook:o.RemoveBook}}):o._e(),!0===o.logged&&0!=o.loginType?e("transactions-modal",{attrs:{showModal:o.transModal,transactions:this.transactionsToShow},on:{closeModal:o.CloseTransModal}}):o._e(),e("create-book-modal",{attrs:{showModal:o.createBookModal},on:{closeModal:function(t){o.createBookModal=!1},bookCreated:o.BookCreated}})],1)},s=[],l=(e("6b54"),function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("div",[i("log-in-modal",{attrs:{showModal:o.logInModal,controller:o.controller},on:{closeModal:function(t){o.logInModal=!1},sucess:o.LoginSucess}}),i("b-navbar",{attrs:{variant:"dark",type:"dark",fixed:"top"}},[i("b-navbar-brand",{attrs:{href:"#"}},[i("img",{staticClass:"d-inline-block align-top",attrs:{src:e("cf05"),alt:"Kitten",width:"30",height:"30"}}),o._v("\n      BookaBook\n    ")]),i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-nav-item-dropdown",{attrs:{right:""}},[i("template",{slot:"button-content"},[i("em",[o._v(o._s(this.controller.GetUserById(this.activeUser).name||"Usuário"))])]),o.loggedIn&&0===o.loginType?i("b-dropdown-item",{on:{click:o.ShowItems}},[o._v("Ver Livros")]):o._e(),!o.loggedIn||1!==o.loginType&&2!==o.loginType?o._e():i("b-dropdown-item",{on:{click:o.ShowTransactions}},[o._v("Ver Transações")]),o.loggedIn?i("b-dropdown-item",{on:{click:o.Profile}},[o._v("Perfil")]):o._e(),o.loggedIn?i("b-dropdown-item",{on:{click:o.Signout}},[o._v("Sair")]):o._e(),o.loggedIn?o._e():i("b-dropdown-item",{on:{click:o.Signin}},[o._v("Entrar")]),o.loggedIn?o._e():i("b-dropdown-item",[o._v("Cadastrar")])],2)],1)],1),0==o.loginType?i("h1",[o._v("Login Aluno")]):o._e(),1==o.loginType?i("h1",[o._v("Login Bibliotecario")]):o._e(),2==o.loginType?i("h1",[o._v("Login Coordenador")]):o._e()],1)}),c=[],u=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("b-modal",{attrs:{title:"Entrar","hide-footer":"",centered:"","no-close-on-backdrop":"","no-close-on-esc":""},model:{value:o.showModal,callback:function(t){o.showModal=t},expression:"showModal"}},[e("div",{staticClass:"d-block"},[e("b-form",{on:{submit:o.onSubmit}},[e("b-form-group",{attrs:{id:"input-group-1",label:"Endereço de E-mail:","label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Digite seu e-mail"},model:{value:o.form.email,callback:function(t){o.$set(o.form,"email",t)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"Senha:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Digite sua senha"},model:{value:o.form.password,callback:function(t){o.$set(o.form,"password",t)},expression:"form.password"}})],1),e("b-button",{staticClass:"mt-3",attrs:{block:"",type:"submit"}},[o._v("Entrar")])],1)],1),e("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:o.HideModal}},[o._v("Cancelar")])],1)],1)},d=[],h=(e("7514"),{name:"login-modal",props:{showModal:{required:!0,default:!1},controller:{required:!0}},data:function(){return{form:{email:"",password:""}}},methods:{HideModal:function(){this.$emit("closeModal")},LogIn:function(){var o,t=this,e=this.controller.Login(this.form.email,this.form.password);0==e?o=this.controller.students.find(function(o){return o.email===t.form.email}).id:1==e?o=this.controller.librarians.find(function(o){return o.email===t.form.email}).id:2==e&&(o=this.controller.coordinators.find(function(o){return o.email===t.form.email}).id),-1!=e&&this.$emit("sucess",e,o),this.HideModal()},onSubmit:function(o){o.preventDefault(),this.LogIn()}}}),m=h,f=e("2877"),b=Object(f["a"])(m,u,d,!1,null,null,null),p=b.exports,v={name:"LoginNav",components:{LogInModal:p},props:{controller:{required:!0}},data:function(){return{loggedIn:!1,activeUser:null,logInModal:!1,loginType:null}},methods:{ShowItems:function(){this.$emit("showBooks")},Signout:function(){this.loggedIn=!1,this.activeUser=null,this.loginType=-1,this.$emit("logout")},Signin:function(){this.logInModal=!0},LoginSucess:function(o,t){this.loggedIn=!0,this.loginType=o,this.activeUser=t,this.$emit("login",o,t)},Profile:function(){},ShowTransactions:function(){this.$emit("showTransactions",this.loginType)}},mounted:function(){}},g=v,k=Object(f["a"])(g,l,c,!1,null,null,null),M=k.exports,_=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[null!=o.selectedBook?e("BookModal",{attrs:{showModal:o.bookModal,book:o.selectedBook,userType:o.userType},on:{closeModal:o.CloseBookModal,livroSolicitado:o.SolicitaLivro}}):o._e(),0===o.userType?e("b-button",{attrs:{variant:"success"},on:{click:o.CreateBook}},[o._v("+ Adicionar Livro")]):o._e(),o._l(o.books,function(t){return e("div",{key:t.book.isbn,staticClass:"text-center my-3"},[e("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:t.book.autor,expression:"book.book.autor",modifiers:{hover:!0}}],attrs:{title:t.book.titulo},on:{click:function(e){return o.OpenBookModal(t)}}},[o._v(o._s(t.book.titulo))])],1)})],2)},w=[],S=(e("c5f6"),function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("b-modal",{attrs:{title:o.book.book.titulo,"hide-footer":"",centered:"","no-close-on-backdrop":"","no-close-on-esc":""},model:{value:o.showModal,callback:function(t){o.showModal=t},expression:"showModal"}},[e("div",{staticClass:"d-block"},[e("ul",[e("li",[o._v("Título: "+o._s(o.book.book.titulo))]),e("li",[o._v("ISBN: "+o._s(o.book.book.isbn))]),e("li",[o._v("Autor: "+o._s(o.book.book.autor))]),e("li",[o._v("Categoria: "+o._s(o.book.book.categoria))]),e("li",[o._v("Dono: "+o._s(o.book.owner.name))]),o.book.available?e("li",[o._v("Disponível: Sim")]):o._e(),o.book.available?o._e():e("li",[o._v("Disponível: Não")])])]),0===o.userType?e("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:o.Select}},[o._v("Solicitar")]):o._e(),e("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:o.HideModal}},[o._v("Fechar")])],1)],1)}),B=[],y={name:"book-modal",props:{showModal:{required:!0,default:!1},book:{required:!0,default:null},userType:{type:Number,required:!0,default:-1}},methods:{HideModal:function(){this.$emit("closeModal")},Select:function(){this.$emit("livroSolicitado"),this.HideModal()}},mounted:function(){}},I=y,C=Object(f["a"])(I,S,B,!1,null,null,null),O=C.exports,T={name:"BookViews",props:{books:{default:null},userType:{type:Number,required:!0,default:-1}},components:{BookModal:O},data:function(){return{users:[],selectedBook:null,bookModal:!1}},methods:{OpenBookModal:function(o){this.selectedBook=o,this.bookModal=!0},CloseBookModal:function(){this.bookModal=!1},SolicitaLivro:function(){this.$emit("solicitaLivro",this.selectedBook)},CreateBook:function(){this.$emit("createBook")}},mounted:function(){}},j=T,x=(e("d665"),Object(f["a"])(j,_,w,!1,null,"60d3e5d2",null)),L=x.exports,A=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("b-modal",{attrs:{title:"Meus Livros","hide-footer":"",centered:"","no-close-on-backdrop":"","no-close-on-esc":""},model:{value:o.showModal,callback:function(t){o.showModal=t},expression:"showModal"}},[e("div",{staticClass:"d-block"},[e("ul",o._l(o.books,function(t){return e("li",{key:t.isbn},[e("b-row",[e("b-col",{attrs:{sm:"9"}},[o._v(o._s(t.titulo))]),e("b-col",{attrs:{sm:"3"}},[e("b-button",{attrs:{size:"sm",right:""},on:{click:function(e){return o.RemoveBook(t.isbn)}}},[o._v("Remover")])],1)],1),e("br")],1)}),0)]),e("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:o.HideModal}},[o._v("Fechar")])],1)],1)},N=[],P={name:"user-book-modal",props:{showModal:{required:!0,default:!1},books:{required:!0,default:null}},methods:{HideModal:function(){this.$emit("closeModal")},RemoveBook:function(o){this.$emit("removeBook",o)}},mounted:function(){}},R=P,$=Object(f["a"])(R,A,N,!1,null,null,null),D=$.exports,H=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("b-modal",{attrs:{title:"Transações","hide-footer":"",centered:"","no-close-on-backdrop":"","no-close-on-esc":""},model:{value:o.showModal,callback:function(t){o.showModal=t},expression:"showModal"}},[e("div",{staticClass:"d-block"},[e("ul",o._l(o.transactions,function(t){return e("li",{key:t.item.book.isbn},[o._v("\n          "+o._s(t.item.book.titulo)+"\n          "),e("b-row",[e("b-col",{attrs:{sm:"6"}},[o._v("Dono: "+o._s(t.item.owner.name))]),e("b-col",{attrs:{sm:"6"}},[o._v("Recipiente: "+o._s(t.receiver.name))])],1),o._v("\n          Data de devolução: "+o._s(t.returnDate)+"\n          "),e("br"),e("br")],1)}),0)]),e("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:o.HideModal}},[o._v("Fechar")])],1)],1)},U=[],q={name:"transactions-modal",props:{showModal:{required:!0,default:!1},transactions:{required:!0,default:null}},methods:{HideModal:function(){this.$emit("closeModal")}},mounted:function(){}},E=q,F=Object(f["a"])(E,H,U,!1,null,null,null),J=F.exports,K=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",[e("b-modal",{attrs:{title:"Disponibilizar livro","hide-footer":"",centered:"","no-close-on-backdrop":"","no-close-on-esc":""},model:{value:o.showModal,callback:function(t){o.showModal=t},expression:"showModal"}},[e("div",{staticClass:"d-block"},[e("b-form",{on:{submit:o.onSubmit}},[e("b-form-group",{attrs:{id:"input-group-1",label:"Título:","label-for":"input-1"}},[e("b-form-input",{attrs:{id:"input-1",required:"",placeholder:"Digite o nome do livro"},model:{value:o.form.titulo,callback:function(t){o.$set(o.form,"titulo",t)},expression:"form.titulo"}})],1),e("b-form-group",{attrs:{id:"input-group-3",label:"Autor:","label-for":"input-3"}},[e("b-form-input",{attrs:{id:"input-3",required:"",placeholder:"Digite o autor do livro"},model:{value:o.form.autor,callback:function(t){o.$set(o.form,"autor",t)},expression:"form.autor"}})],1),e("b-form-group",{attrs:{id:"input-group-4",label:"Categoria:","label-for":"input-4"}},[e("b-form-input",{attrs:{id:"input-4",required:"",placeholder:"Digite a categoria do livro"},model:{value:o.form.categoria,callback:function(t){o.$set(o.form,"categoria",t)},expression:"form.categoria"}})],1),e("b-form-group",{attrs:{id:"input-group-2",label:"ISBN:","label-for":"input-2"}},[e("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Digite o ISBN do livro"},model:{value:o.form.isbn,callback:function(t){o.$set(o.form,"isbn",t)},expression:"form.isbn"}})],1),e("b-button",{staticClass:"mt-3",attrs:{block:"",type:"submit"}},[o._v("Disponibilizar")])],1)],1),e("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:o.HideModal}},[o._v("Cancelar")])],1)],1)},G=[],z={name:"create-book-modal",props:{showModal:{required:!0,default:!1}},data:function(){return{form:{titulo:"",isbn:"",autor:"",categoria:""}}},methods:{HideModal:function(){this.$emit("closeModal")},onSubmit:function(o){o.preventDefault(),this.$emit("bookCreated",this.form),this.HideModal()}}},V=z,W=Object(f["a"])(V,K,G,!1,null,null,null),Y=W.exports,Z=e("308d"),Q=e("6bb5"),X=e("4e2b"),oo=(e("ac6a"),e("d225")),to=e("b0b4"),eo=e("ca52"),io=function(){function o(){Object(oo["a"])(this,o),this.coordinators=[],this.librarians=[],this.students=[],this.schools=[],this.items=[],this.transactions=[]}return Object(to["a"])(o,[{key:"AddCoord",value:function(o,t,e,i,n,a){var r=new so(o,t,e,i,n,a);this.coordinators.push(r)}},{key:"AddLibrarian",value:function(o,t,e,i,n,a,r){var s=o.RegisterLibrarian(t,e,i,n,a,r);this.librarians.push(s)}},{key:"AddStudent",value:function(o,t,e,i,n,a,r){var s=o.RegisterStudent(t,e,i,n,a,r);this.students.push(s)}},{key:"AddSchool",value:function(o,t,e,i,n,a){var r=new co(o,t,e,i,n,a);this.schools.push(r)}},{key:"AddTransaction",value:function(o,t,e){if(o.available){var i=t.WithdrawBook(o,e);this.transactions.push(i)}}},{key:"AddItem",value:function(o,t,e,i,n){var a=o.ProvideBook(t,e,i,n);this.items.push(a)}},{key:"RemoveItem",value:function(o,t){o.RemoveBook(t),this.items.splice(this.items.indexOf(this.items.find(function(o){return o.book.isbn===t})),1)}},{key:"Login",value:function(o,t){var e=this.students.find(function(t){return t.email===o});if(-1!=this.students.indexOf(e)){if(e.password===t)return 0}else{var i=this.librarians.find(function(t){return t.email===o});if(-1!=this.librarians.indexOf(i)){if(i.password===t)return 1}else{var n=this.coordinators.find(function(t){return t.email===o});if(-1!=this.coordinators.indexOf(n)&&n.password===t)return console.log("Login coordenador bem sucedido"),2}}return-1}},{key:"GetUserById",value:function(o){var t=this.students.find(function(t){return t.id===o});if(-1!=this.students.indexOf(t))return t;var e=this.librarians.find(function(t){return t.id===o});if(-1!=this.librarians.indexOf(e))return e;var i=this.coordinators.find(function(t){return t.id===o});return-1!=this.coordinators.indexOf(i)?i:-1}},{key:"Populate",value:function(){var o=this;this.AddCoord("_"+Math.random().toString(36).substr(2,9),"Clara Schmidt","clarabschmidt@hotmail.com","clara","5555555",989898),this.AddCoord("_"+Math.random().toString(36).substr(2,9),"Pedro Weber Mendonca","pedroweberm@gmail.com","pedro","00000000000",987654321),this.AddCoord("_"+Math.random().toString(36).substr(2,9),"Gustavo Acauan Lorentz","gus.aca.lo@gmail.com","gustavo","69696969669",999999999),this.AddLibrarian(this.coordinators[0],"_"+Math.random().toString(36).substr(2,9),"Ana","ana@gmail.com","eusouaana","9",5),this.AddLibrarian(this.coordinators[1],"_"+Math.random().toString(36).substr(2,9),"Joao","joao@gmail.com","eusouojoao","8",4),this.AddLibrarian(this.coordinators[2],"_"+Math.random().toString(36).substr(2,9),"Pimenta","pimenta@gmail.com","eusouopimenta","7",3),this.AddSchool("Colegio mae de deus","90",this.coordinators[2],"Rua mario totta",65,this.librarians[0]),this.AddSchool("Colegio Joao Pualo I","77",this.coordinators[0],"Pedra Redonda",99,this.librarians[1]),this.AddSchool("Colegio Marista Rosario",87,this.coordinators[1],"Centro",65,this.librarians[2]),this.AddStudent(this.coordinators[0],"_"+Math.random().toString(36).substr(2,9),"Gustavinho","lalalasmurfs@gmail.com","gremio",this.schools[0],"Zona sul"),this.AddStudent(this.coordinators[1],"_"+Math.random().toString(36).substr(2,9),"Pedrinho","peter.wm@hotmail.com","inter",this.schools[1],"Zona sull"),this.AddStudent(this.coordinators[1],"_"+Math.random().toString(36).substr(2,9),"Pimentinha","pimenta@hotmail.com","reuso",this.schools[2],"Campus do vale"),eo.books.forEach(function(t){o.AddItem(o.students[Math.floor(3*Math.random())],t.nome,t.ISBN,t.autor,t.categoria)})}}]),o}(),no=function o(t,e,i,n){Object(oo["a"])(this,o),this.id=t,this.name=e,this.email=i,this.password=n},ao=function(o){function t(o,e,i,n,a,r){var s;return Object(oo["a"])(this,t),s=Object(Z["a"])(this,Object(Q["a"])(t).call(this,o,e,i,n)),s.cpf=a,s.phoneNumber=r,s}return Object(X["a"])(t,o),Object(to["a"])(t,[{key:"RegisterStudent",value:function(o,t,e,i,n,a){var r=new ro(o,t,e,i,n,a);return r}}]),t}(no),ro=function(o){function t(o,e,i,n,a,r){var s;return Object(oo["a"])(this,t),s=Object(Z["a"])(this,Object(Q["a"])(t).call(this,o,e,i,n)),s.school=a,s.adress=r,s.providedBooks=[],s}return Object(X["a"])(t,o),Object(to["a"])(t,[{key:"RegisterBook",value:function(o,t,e,i){var n=new uo(o,t,e,i);return n}},{key:"ProvideBook",value:function(o,t,e,i){var n=this.RegisterBook(o,t,e,i);this.providedBooks.push(n);var a=new ho(n,this);return a}},{key:"RemoveBook",value:function(o){this.providedBooks.splice(this.providedBooks.indexOf(this.providedBooks.find(function(t){return t.isbn===o})),1)}},{key:"WithdrawBook",value:function(o,t){var e=this.school.librarian.RegisterTransaction(o,this,t);return o.available=!1,e}}]),t}(no),so=function(o){function t(){return Object(oo["a"])(this,t),Object(Z["a"])(this,Object(Q["a"])(t).apply(this,arguments))}return Object(X["a"])(t,o),Object(to["a"])(t,[{key:"RegisterLibrarian",value:function(o,t,e,i,n,a){var r=new lo(o,t,e,i,n,a);return r}}]),t}(ao),lo=function(o){function t(o,e,i,n){var a;return Object(oo["a"])(this,t),a=Object(Z["a"])(this,Object(Q["a"])(t).call(this,o,e,i,n)),a.transactions=[],a}return Object(X["a"])(t,o),Object(to["a"])(t,[{key:"RegisterTransaction",value:function(o,t,e){var i=new mo(o,t,e);return this.transactions.push(i),i}}]),t}(ao),co=function o(t,e,i,n,a,r){Object(oo["a"])(this,o),this.name=t,this.cnpj=e,this.coordinator=i,this.librarian=r,this.adress=n,this.phoneNumber=a},uo=function o(t,e,i,n){Object(oo["a"])(this,o),this.titulo=t,this.isbn=e,this.autor=i,this.categoria=n},ho=function o(t,e){Object(oo["a"])(this,o),this.book=t,this.owner=e,this.available=!0},mo=function o(t,e,i){Object(oo["a"])(this,o),this.item=t,this.receiver=e,this.returnDate=i,this.completed=!1},fo={name:"Controller",components:{LoginNav:M,BookViews:L,UserBooksModal:D,TransactionsModal:J,CreateBookModal:Y},data:function(){return{controller:null,logged:!1,loginType:-1,activeUser:null,userBooks:!1,transModal:!1,transactionsToShow:[],createBookModal:!1}},methods:{SolicitaLivro:function(o){var t=this.controller.GetUserById(this.activeUser),e=new Date,i=e.getDate()+7,n=e.getMonth(),a=e.getFullYear();i%31!=i&&(i%=31,n+=1),n%12!=n&&(n%=13,a+=1);var r=i.toString()+"/"+n.toString()+"/"+a.toString();this.controller.AddTransaction(o,t,r)},Login:function(o,t){this.loginType=o,this.activeUser=t,this.logged=!0},Logout:function(){this.loginType=-1,this.activeUser=null,this.logged=!1},RemoveBook:function(o){this.controller.RemoveItem(this.controller.GetUserById(this.activeUser),o)},ShowTransactionsModal:function(){1===this.loginType?this.transactionsToShow=this.controller.GetUserById(this.activeUser).transactions:2===this.loginType&&(this.transactionsToShow=this.controller.transactions),this.transModal=!0},CloseTransModal:function(){this.transModal=!1,this.transactionsToShow=[]},CreateBook:function(){this.createBookModal=!0},BookCreated:function(o){this.controller.AddItem(this.controller.GetUserById(this.activeUser),o.titulo,o.isbn,o.autor,o.categoria)}},mounted:function(){this.controller=new io,this.controller.Populate()}},bo=fo,po=Object(f["a"])(bo,r,s,!1,null,null,null),vo=po.exports,go={name:"app",components:{Controller:vo}},ko=go,Mo=(e("034f"),Object(f["a"])(ko,n,a,!1,null,null,null)),_o=Mo.exports,wo=e("5f5b");e("f9e3"),e("2dd8");i["default"].config.productionTip=!1,i["default"].use(wo["a"]),new i["default"]({render:function(o){return o(_o)}}).$mount("#app")},"64a9":function(o,t,e){},7017:function(o,t,e){},ca52:function(o){o.exports={books:[{ISBN:1,nome:"Como Fazer Amigos e Influenciar Pessoas",autor:"Dale Carnegie",categoria:"Autoajuda"},{ISBN:2,nome:"Mindset: A Nova Psicologia do Sucesso",autor:"Carol Dweck",categoria:"Autoajuda"},{ISBN:3,nome:"Mr. Mercedes",autor:"Stephen King",categoria:"Suspense"},{ISBN:4,nome:"Hacking Para Leigos",autor:"Kevin Beaver",categoria:"Informativo"},{ISBN:5,nome:"Superinteligência",autor:"Nick Bostrom",categoria:"Informativo"},{ISBN:6,nome:"Homo Deus: Uma Breve História do Amanhã",autor:"Yuval Harari",categoria:"Informativo"},{ISBN:7,nome:"21 Lições para o Século 21",autor:"Yuval Harari",categoria:"Informativo"},{ISBN:8,nome:"Achados e perdidos",autor:"Stephen King",categoria:"Suspense"},{ISBN:9,nome:"Como Evitar Preocupacoes E Comecar A Viver",autor:"Dale Carnegie",categoria:"Autoajuda"},{ISBN:10,nome:"Harry Potter e a Pedra Filosofal",autor:"J. K. Rowling",categoria:"Fantastico"},{ISBN:11,nome:"Harry Potter e a Câmara Secreta",autor:"J. K. Rowling",categoria:"Fantastico"},{ISBN:12,nome:"Harry Potter e o Prisioneiro de Azkaban",autor:"J. K. Rowling",categoria:"Fantastico"},{ISBN:13,nome:"Harry Potter e o Cálice de Fogo",autor:"J. K. Rowling",categoria:"Fantastico"},{ISBN:14,nome:"Harry Potter e a Ordem da Fênix",autor:"J. K. Rowling",categoria:"Fantastico"},{ISBN:15,nome:"Harry Potter e o Enigma do Príncipe",autor:"J. K. Rowling",categoria:"Fantastico"},{ISBN:16,nome:"Harry Potter e as Relíquias da Morte",autor:"J. K. Rowling",categoria:"Fantastico"},{ISBN:17,nome:"Cinquenta Tons de Cinza",autor:"E. L. James",categoria:"Romance"},{ISBN:18,nome:"Cinquenta Tons mais Escuros",autor:"E. L. James",categoria:"Romance"},{ISBN:19,nome:"Cinquenta Tons de Liberdade",autor:"E. L. James",categoria:"Romance"},{ISBN:20,nome:"UML 2 for Dummies",autor:"Michael Jesse Chonoles",categoria:"Informativo"},{ISBN:21,nome:"After: Depois da verdade",autor:"Anna Todd",categoria:"Romance"}]}},cf05:function(o,t,e){o.exports=e.p+"img/logo.5ab0e2ef.png"},d665:function(o,t,e){"use strict";var i=e("7017"),n=e.n(i);n.a}});
//# sourceMappingURL=app.3e22edd7.js.map