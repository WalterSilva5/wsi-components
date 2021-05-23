(()=>{"use strict";const a={WsiButtons:{WsiButton:{template:'\n        <button class="btn btn-lg cfit-button px-3"\n        ><slot><b>BUTTON</b></slot></button>\n    '},WsiButtonFloat:{template:'\n    <div class="col-4" style="border:1px solid black;">\n        <div class="col-md-4 ml-auto"  style="border:1px solid black;">\n                <div style="border:1px solid black;">\n                    <div class="col-12 ml-auto" style="border:1px solid black;">\n                        <wsi_button id="botao_opcoes" class="w3-black" style="border:1px solid black;">\n                            <div class="row justify-content-center text-center">\n                                <div class="col-4">\n                                    <img class="img-fluid" src="/static/cfit/img/conta.png">\n                                </div>\n                            </div>\n                    </wsi_button>\n                    <div style="position:absolute;z-index: 99;">\n                        <div class="col-sm-12  botao_opcoes_class">\n                            <div id="painel" class="cfit-div-dark py-2 px-2 col-lg-12 rounded  botao_opcoes_class"\n                                style="display:none; z-index: max">\n                                <div>\n                                    <div class="my-2">\n                                        <a href="#">\n                                            <wsi_button class="col-sm-12 w3-red botao_opcoes_class"><b class=" botao_opcoes_class">OPÇÕES</b>\n                                            </wsi_button>\n                                        </a>\n                                    </div>\n                                    <div class="my-2">\n                                        <a href="/login/logout">\n                                            <wsi_button class="col-sm-12 w3-red botao_opcoes_class"><b class=" botao_opcoes_class">SAIR</b>\n                                            </wsi_button>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    '}},WsiModal:{template:'\n    \x3c!-- modal login --\x3e\n    <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">\n        <div class="modal-dialog modal-dialog-centered" role="document">\n            <div class="modal-content w3-black rounded" style="background-color: rgb(5.8%, 5.8%, 5.8%);">\n                <div class="modal-header w3-border-black" style="background-color: rgb(5.8%, 5.8%, 5.8%);">\n                    <h1 class="h1 w-100 text-center font-weight-bold"><slot name="modal_header"></slot></h1>\n                    <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">\n                        <span aria-hidden="true">&times;</span>\n                    </button>\n                </div>\n                <div class="modal-body" style="background-color: rgb(5.8%, 5.8%, 5.8%);">\n                    <slot name="modal_body"></slot>\n                </div>\n            </div>\n        </div>\n    </div>\n    \x3c!-- end modal login --\x3e\n    '},WsiLogin:{template:'\n    <div class="row d-flex justify-content-center text-center">\n        <div class="container mx-2 cfit-div-dark rounded">\n            <div class="col-12 py-4">\n                <form id="form-login" autocomplete="off" class="container">\n                    <label for="login_usuario" class="p-0 float-left font-weight-bold">Usuario <span class="text-danger login_usuario_invalid"\n                        style="display:none">* CAMPO OBRIGATORIO!</span></label>\n                    <input class="form-control form-control-lg" name="login_usuario" id="login_usuario" type="text" v-model="login_usuario" v-bind:value>\n                    <div class="my-2">\n                        <label for="login_senha" class=" p-0 float-left font-weight-bold"><b>Senha</b><span class="login_senha_invalid text-danger"\n                                style="display:none">* CAMPO OBRIGATORIO</span></label>\n                        <input class="form-control form-control-lg login_senha" name="login_senha" id="login_senha" type="password"\n                        v-model="login_senha" v-bind:value>\n                    </div>\n                    <div class="alert alert-danger my-2 login_alert" role="alert" style="display: none">\n                        <h3 class="login_alert_msg"></h3>\n                    </div>\n                </form>\n                <wsi_button class="mx-1 mt-4 w3-xlarge col-8 w3-orange" v-on:click="efetuar_login">LOGIN</wsi_button>\n                <div class="mt-5">\n                    <div class="col-12 d-flex justify-content-center">\n                        <div>\n                            Não cadastrado?\n                            <button data-target="#modal_cadastro" data-toggle="modal" id="btn_cadastre_se"\n                                class="btn btn-dark w3-text-orange">\n                                <b class="font-weight-bold h5">CADASTRE-SE</b>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    ',data:()=>({login_usuario:"",login_senha:""}),watch:{login_usuario(a,s){this.login_usuario=a.toUpperCase().replace(/\s/g,"")},login_senha(a,s){this.login_senha=a}},methods:{efetuar_login:function(){let a=function(a){$(".login_alert_msg").text(a),$(".login_alert").show()};""==this.login_usuario?$(".login_usuario_invalid").show():$(".login_usuario_invalid").hide(),""==this.login_senha?$(".login_senha_invalid").show():$(".login_senha_invalid").hide(),""!=this.login_usuario&&""!=this.login_senha?$.ajax({type:"post",url:"/login/efetuar_login/",data:{login_usuario:this.login_usuario,login_senha:this.login_senha},success:function(s){"ok"==s?($("#form-login").trigger("reset"),window.location.replace("/home")):"nao_cadastrado"==s?a("USUARIO NÃO CADASTRADO"):"usuario_menor_que_4"==s?a("USUARIO INVALIDO"):"senha_invalida"==s?a("VERIFIQUE SUA SENHA!"):"conta_bloqueada"==s?a("CONTA BLOQUEADA!"):console.log(s)},error:function(s){a(s.statusText),console.log(s)}}):a("PREENCHA TODOS OS CAMPOS")}}},WsiCadastro:{template:'\n    <div id="form_cadastro_div" class="cfit-div-dark rounded col-md-12">\n        <form id="form_cadastro" autocomplete="off">\n            <div class="text-left">\n                <div class="col-12 my-2">\n                    <label for="cadastro_nome" class="h5"><b>NOME</b></label>\n                    <span id="cadastro_nome_erro" class="text-danger"></span>\n                    <input class="form-control" id="cadastro_nome" v-model="cadastro_nome" v-bind:value>\n                </div>\n                <div class="col-12 my-2">\n                    <label for="cadastro_usuario" class="h5"><b>LOGIN</b></label>\n                    <span id="cadastro_usuario_erro" class="text-danger"></span>\n                    <input class="form-control" id="cadastro_usuario" v-model="cadastro_usuario" v-bind:value>\n                </div>\n                <div class="col-12 my-2">\n                    <label for="cadastro_senha" class="h5"><b>SENHA</b></label>\n                    <span id="cadastro_senha_erro" class="text-danger"></span>\n                    <input class="form-control" id="cadastro_senha" type="password" required v-model="cadastro_senha"\n                        v-bind:value>\n                        <wsi_button id="exibir_senha" class="col-12 btn-sm" type="button">EXIBIR SENHA</wsi_button>\n                </div>\n                <div class="col-12 my-2">\n                    <label for="cadastro_confirme_senha" class="h5"><b>CONFIRME A SENHA</b></label>\n                    <span id="cadastro_confirme_senha_erro" class="text-danger"></span>\n                    <input class="form-control" id="cadastro_confirme_senha" type="password" required\n                        v-model="cadastro_confirme_senha" v-bind:value>\n                </div>\n            </div>\n        </form>\n        <h5 id="cadastro_alert_erro" class="alert alert-danger" style="display: none"></h5>\n        <h5 id="cadastro_alert_sucesso" class="alert alert-success" style="display: none"><b>SUCESSO! JÁ PODE FAZER LOGIN.</b></h5>\n        <wsi_button id="button_cadastrar" class="w3-orange mx-1 my-3" v-on:click="cadastrar_usuario">CADASTRAR</wsi_button>\n    </div>\n    ',data:()=>({cadastro_nome_valid:!1,cadastro_usuario_valid:!1,cadastro_senha_valid:!1,cadastro_nome:"",cadastro_usuario:"",cadastro_email:"",cadastro_senha:"",cadastro_confirme_senha:""}),watch:{cadastro_nome(a,s){this.cadastro_nome=a.toUpperCase(),this.cadastro_nome.length<5?$("#cadastro_nome_erro").text(" *NOME DEVE TER NO MINIMO 5 LETRAS"):$("#cadastro_nome_erro").text(" ")},cadastro_usuario(a,s){this.cadastro_usuario=a.toUpperCase().replace(/\s/g,""),this.cadastro_usuario.length<5?$("#cadastro_usuario_erro").text(" *LOGIN DEVE TER NO MINIMO 5 LETRAS"):($("#cadastro_usuario_erro").text(" "),this.cadastro_usuario_valid=!0)},cadastro_email(a,s){this.cadastro_email=a},cadastro_senha(a,s){this.cadastro_senha=a.replace(/\s/g,""),this.cadastro_senha.length<5?$("#cadastro_senha_erro").text("* A SENHA DEVE SER MAIOR"):/^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})/.exec(this.cadastro_senha)?($("#cadastro_senha_erro").text(""),this.cadastro_confirme_senha!=this.cadastro_senha?$("#cadastro_confirme_senha_erro").text("SENHAS NÃO CORRESPONDEM"):($("#cadastro_confirme_senha_erro").text(" "),this.cadastro_senha_valid=!0)):$("#cadastro_senha_erro").text("* A senha deve conter no mínimo 1 caracteres em maiúsculo e 1 número!")},cadastro_confirme_senha(a,s){this.cadastro_confirme_senha=a.replace(/\s/g,""),this.cadastro_confirme_senha!=this.cadastro_senha?$("#cadastro_confirme_senha_erro").text("SENHAS NÃO CORRESPONDEM"):($("#cadastro_confirme_senha_erro").text(" "),this.cadastro_senha_valid=!0)}},methods:{cadastrar_usuario:function(){let a=function(a){$("#cadastro_alert_erro").text(a),$("#cadastro_alert_erro").show(),$("#cadastro_alert_sucesso").hide()};this.cadastro_usuario_valid&&this.cadastro_senha_valid?$.ajax({type:"post",url:"/cadastro/cadastrar/",data:{cadastro_usuario:this.cadastro_usuario,cadastro_senha:this.cadastro_senha},success:function(s){"cadastro_efetuado"==s?($("#cadastro_alert_sucesso").show(),$("#cadastro_alert_erro").hide(),$("#form_cadastro").trigger("reset")):"ja_cadastrado"==s?a("USUARIO JÁ ESTÁ CADASTRADO!"):"usuario_menor_que_4"==s&&a("NOME DE USUARIO DEVE TER PELO MENOS 4 LETRAS!")},error:function(s){console.log(s),a(s.statusText)}}):(a("PREENCHA TODOS OS CAMPOS"),this.cadastro_usuario_valid?$("#cadastro_usuario_invalid").hide():$("#cadastro_usuario_invalid").show(),this.cadastro_senha_valid?$("#cadastro_senha_invalid").hide():$("#cadastro_senha_invalid").show())}}},WsiInputComps:{WsiInput:{template:'\n    <input type="text" class="form-control">\n    '},WsiInputGroupLeft:{template:'\n    <div class="input-group mb-2">\n      <div class="input-group-prepend">\n        <div class="input-group-text"><slot name="slot_label_left"></slot></div>\n      </div>\n      <slot name="slot_input"></slot>\n    </div>\n    '}},WsiCardComps:{WsiCardPlaylist:{template:'\n    <div class="col-xs-4" style="width:100%;max-width:none;padding:0;">\n        <div class="cfit-card" style="height:350px; border-radius:3px; display:none;">\n            <h3 class="container text-center" style="text-shadow: 1px 1px 15px #2b2b2b"><b><slot name="playlist_title"></slot></b></h3>\n            <div class="container"><slot name="playlist_img"></slot></div>\n            <div class="text-center container-fluid font-weight-bold" style="overflow:hidden; font-family:\'Lucida Console\', monospace,\'Courier New\';">\n                <h6 style="text-shadow: 0px 1px 5px #2b2b2b"><slot name="playlist_descricao"></slot></h6>\n            </div>\n        </div>\n    </div>\n    '}},WsiVideoPlayerIframe:{template:`\n        <div class="col-lg-6 mx-0 float-left px-0" style="min-height:350px;">\n            <div class="embed-responsive embed-responsive-16by9">\n                    <iframe src="${self.link}" frameborder="0" scrolling seamless="" allowfullscreen></iframe>\n                    <div style="width: 80px; height: 80px; position: absolute; opacity: 0; right: 0px; top: 0px;">&nbsp;\n                    </div>\n            </div>\n    </div>\n    `,data:()=>({link:""})}},s=Vue.createApp({});s.component("wsi_button",a.WsiButtons.WsiButton),s.component("wsi_button_float",a.WsiButtons.WsiButtonFloat),s.component("wsi_modal",a.WsiModal),s.component("wsi_login",a.WsiLogin),s.component("wsi_cadastro",a.WsiCadastro),s.component("wsi_card_playlist",a.WsiCardComps.WsiCardPlaylist),s.component("wsi_input",a.WsiInputComps.WsiInput),s.component("wsi_input_group_left",a.WsiInputComps.WsiInputGroupLeft),s.component("wsi_video_player_iframe",a.WsiVideoPlayerIframe),s.mount("#app"),$(document).ready($("#year").text((new Date).getFullYear()))})();