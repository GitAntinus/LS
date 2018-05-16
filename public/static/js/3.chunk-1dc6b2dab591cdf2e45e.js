/*!
 * Direct.js
 * Antinux Innovation
 * Author: Eric Deng
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3,20],{524:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(a(2)),i=h(a(11)),o=h(a(4)),l=h(a(10)),r=h(a(3)),s=h(a(5)),u=h(a(1)),d=a(18),c=a(15),f=(a(518),h(a(576)),h(a(27)),h(a(547)),h(a(535)),h(a(531)),h(a(533)),h(a(532)),h(a(536)),a(240)),_=(h(a(534)),h(a(517)),h(a(516))),m=h(a(234)),p=h(a(515)),v=a(235);function h(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,o.default)(this,t);var a=(0,r.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return a.function=function(){a.props.loadPortContent({url:"/api/eng_getWordAndRecord",body:{username:a.props.username,article_id:a.props.articleId,all_words:"{'hello','sunshine'}"}})},a}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.function()}},{key:"render",value:function(){var e=this.props.content;return console.log(e),u.default.createElement(u.default.Fragment,null,u.default.createElement("div",null,void 0==e[0]?null:e.map(function(e,t){return u.default.createElement("div",{key:t},e.translate,u.default.createElement("br",null))})))}}]),t}(u.default.PureComponent);t.default=(0,p.default)([(0,_.default)({}),m.default,(0,d.connect)(function(e){return{logined:e.UserManager.logined,username:e.UserManager.name,articleId:e.EnglishArticle.articleId,content:e.PortTest.content}},function(e){return(0,n.default)({},(0,c.bindActionCreators)(f.actions,e),(0,c.bindActionCreators)(v.actions,e))})],x)},531:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(140)),i=o(a(542));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)(i.default,{enter:1e3,exit:1e3})},532:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(140)),i=o(a(538));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)(i.default,{enter:1e3,exit:1e3})},533:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(140)),i=o(a(540));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)(i.default,{enter:1e3,exit:1e3})},534:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(2)),i=r(a(1)),o=r(a(519)),l=a(237);function r(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.default)(function(e){return i.default.createElement(l.view,(0,n.default)({},e,{onCancel:function(){e.onCancel(),e.closeWindow()},onSuccess:function(){e.onSuccess(),e.closeWindow()}}))})},535:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(11)),i=c(a(4)),o=c(a(10)),l=c(a(3)),r=c(a(5)),s=c(a(1)),u=c(a(546)),d=c(a(61));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.children,n=t.loading,i=t.wasLoaded,o=t.lastFailed,l=t.reloader,r=t.info,c=t.center;return s.default.createElement(s.default.Fragment,null,n?(e=Math.random())<.3?s.default.createElement("div",{className:c&&u.default.makeLoadingCenter},s.default.createElement("div",{className:u.default.spinner1},s.default.createElement("div",{className:u.default.bounce1}),s.default.createElement("div",{className:u.default.bounce2}),s.default.createElement("div",{className:u.default.bounce3}))):e<.7?s.default.createElement("div",{className:c&&u.default.makeLoadingCenter},s.default.createElement("div",{className:u.default.spinner2},s.default.createElement("div",{className:u.default.doubleBounce1}),s.default.createElement("div",{className:u.default.doubleBounce2}))):s.default.createElement("div",{className:c&&u.default.makeLoadingCenter},s.default.createElement("div",{className:u.default.spinner3},s.default.createElement("div",{className:u.default.rect1}),s.default.createElement("div",{className:u.default.rect2}),s.default.createElement("div",{className:u.default.rect3}),s.default.createElement("div",{className:u.default.rect4}),s.default.createElement("div",{className:u.default.rect5}))):o?s.default.createElement("div",{onClick:l,className:u.default.bigNote+" "+c&&u.default.makeLoadingCenter},s.default.createElement(d.default,{info:i?"Latest request failed, click here to reload":"Request failed, please check your network state.Click here to reload"})):s.default.createElement(d.default,{info:r}),i?a:null)}}]),t}(s.default.PureComponent);t.default=f},536:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(a(140)),i=o(a(544));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)(i.default,{enter:1e3,exit:1e3})},537:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2cML4IoWiExEkZO0sTfEfZ,.tyAWxaUchede0CHVd45ur{top:100%;position:absolute;transition:all 1s ease}._3w4pjqt52cM4L6hLqXYIr6,._17XJROM6-Ux9b9XSgW-H8F{position:absolute;top:0}._1aiffLNrQiECx_Nr3C75FX{position:absolute;transition:all 1s ease;bottom:0}._3xXwzEo4V_1mZvoF8iIeXH{position:absolute;bottom:100%}",""]),t.locals={appear:"tyAWxaUchede0CHVd45ur",enter:"_2cML4IoWiExEkZO0sTfEfZ",appearActive:"_3w4pjqt52cM4L6hLqXYIr6",enterActive:"_17XJROM6-Ux9b9XSgW-H8F",exit:"_1aiffLNrQiECx_Nr3C75FX",exitActive:"_3xXwzEo4V_1mZvoF8iIeXH"}},538:function(e,t,a){var n=a(537);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,i);n.locals&&(e.exports=n.locals)},539:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._1MB2CPIXnGs299kvhBK9he,._4nHhH23J6HHgL3WQn2Cmc{margin-left:100%;transition:all 1s ease}._3YtvA49RRGLswoNfhyVtmJ,.nHHIBTPjx84LGjREEdO6z{margin-left:0}._2nhxmm_wA4M6pU4bIMEWQ3{transition:all 1s ease;margin-left:0}._3rH-R-o3GPvP6_spojv6WQ{margin-left:-100%}",""]),t.locals={appear:"_1MB2CPIXnGs299kvhBK9he",enter:"_4nHhH23J6HHgL3WQn2Cmc",appearActive:"nHHIBTPjx84LGjREEdO6z",enterActive:"_3YtvA49RRGLswoNfhyVtmJ",exit:"_2nhxmm_wA4M6pU4bIMEWQ3",exitActive:"_3rH-R-o3GPvP6_spojv6WQ"}},540:function(e,t,a){var n=a(539);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,i);n.locals&&(e.exports=n.locals)},541:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2FhIUrruATA8itEcYzssWZ,._2LRUnY4nDm_iOtCCv48qD1{margin-left:-100%;transition:all 1s ease}._3qAk4proA4V6T4M7vVzel-,._23llk2LtnhfRpmAM7MTF69{margin-left:0}._2Dx8h_HACeSegArVmbMCNe{transition:all 1s ease;margin-left:0}._3nCXf4vTE55VjM0ptCCTtq{margin-left:100%}",""]),t.locals={appear:"_2LRUnY4nDm_iOtCCv48qD1",enter:"_2FhIUrruATA8itEcYzssWZ",appearActive:"_3qAk4proA4V6T4M7vVzel-",enterActive:"_23llk2LtnhfRpmAM7MTF69",exit:"_2Dx8h_HACeSegArVmbMCNe",exitActive:"_3nCXf4vTE55VjM0ptCCTtq"}},542:function(e,t,a){var n=a(541);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,i);n.locals&&(e.exports=n.locals)},543:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._1cF_ThJjqPqZVuf2aeL-lH,._14-JVUikn1uujhjbLnIpce{position:absolute;bottom:100%;transition:all 1s ease}._1o2kBpQkFx99fadlNqzkxY,._33zRnWg_CpUyPAJAN5SFpf{position:absolute;bottom:0}._1aKoUKfFVSrPNinYsUukwT{position:absolute;transition:all 1s ease;top:0}._1Pb_20tVQM_qliDxsi_bDj{position:absolute;top:100%}",""]),t.locals={appear:"_1cF_ThJjqPqZVuf2aeL-lH",enter:"_14-JVUikn1uujhjbLnIpce",appearActive:"_33zRnWg_CpUyPAJAN5SFpf",enterActive:"_1o2kBpQkFx99fadlNqzkxY",exit:"_1aKoUKfFVSrPNinYsUukwT",exitActive:"_1Pb_20tVQM_qliDxsi_bDj"}},544:function(e,t,a){var n=a(543);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,i);n.locals&&(e.exports=n.locals)},545:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._2l8ISGcXEQrzJAo1dzjDR2{width:100%;text-align:center}._2l8ISGcXEQrzJAo1dzjDR2>div{width:30px;height:30px;background-color:#375997;border-radius:100%;display:inline-block;-webkit-animation:GSTh3p9Dm_BI6Aa-jfvsm 1.4s infinite ease-in-out;animation:GSTh3p9Dm_BI6Aa-jfvsm 1.4s infinite ease-in-out;animation-fill-mode:both}._2l8ISGcXEQrzJAo1dzjDR2 ._1sApYLXa_7rMcsHYAijRqA{animation-delay:-.32s}._2l8ISGcXEQrzJAo1dzjDR2 ._38ah3QPYUqAiB6B1vTim5W{animation-delay:-.16s}@keyframes GSTh3p9Dm_BI6Aa-jfvsm{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}._2lQxoLYxvxI_ru1LFLaUmU{width:60px;height:60px;position:relative;margin:100px auto}._1AgOBFiNeL4MewWj_CVzRp,.xaCLjW2KCMJOQVL3IB_Xx{width:100%;height:100%;border-radius:50%;background-color:#67cf22;opacity:.6;position:absolute;top:0;left:0;animation:-xFJqfslZ6fQjPpxsMWkg 2s infinite ease-in-out}.xaCLjW2KCMJOQVL3IB_Xx{animation-delay:-1s}@keyframes -xFJqfslZ6fQjPpxsMWkg{0%,to{transform:scale(0)}50%{transform:scale(1)}}._3glBlbjm56WjIEG36Vuw7o{margin:100px auto;width:60px;height:60px;text-align:center;font-size:10px}._3glBlbjm56WjIEG36Vuw7o>div{background-color:#2f3641;height:100%;width:6px;display:inline-block;margin-left:2px;margin-right:2px;animation:_24VUdXNdGqcukAY9GeCWFd 1.2s infinite ease-in-out}._3glBlbjm56WjIEG36Vuw7o ._13CqLTg4z6vTLXsQm1idxK{animation-delay:-1.1s}._3glBlbjm56WjIEG36Vuw7o ._17wpNgpYcNCKoD17gDRAo3{animation-delay:-1s}._3glBlbjm56WjIEG36Vuw7o .sn1DJ3CoK_HqAfm3CSzgX{animation-delay:-.9s}._3glBlbjm56WjIEG36Vuw7o ._1x_ahiaUGbc9YjGWu5dOUP{animation-delay:-.8s}@keyframes _24VUdXNdGqcukAY9GeCWFd{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}.oaWd_Q2OzHNmpOi7IxDeP{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}._3T6YZvJXTSBYIV-mI2HeFu{font-size:20px}",""]),t.locals={spinner1:"_2l8ISGcXEQrzJAo1dzjDR2",bouncedelay:"GSTh3p9Dm_BI6Aa-jfvsm",bounce1:"_1sApYLXa_7rMcsHYAijRqA",bounce2:"_38ah3QPYUqAiB6B1vTim5W",spinner2:"_2lQxoLYxvxI_ru1LFLaUmU",doubleBounce1:"_1AgOBFiNeL4MewWj_CVzRp",doubleBounce2:"xaCLjW2KCMJOQVL3IB_Xx",bounce:"-xFJqfslZ6fQjPpxsMWkg",spinner3:"_3glBlbjm56WjIEG36Vuw7o",stretchdelay:"_24VUdXNdGqcukAY9GeCWFd",rect2:"_13CqLTg4z6vTLXsQm1idxK",rect3:"_17wpNgpYcNCKoD17gDRAo3",rect4:"sn1DJ3CoK_HqAfm3CSzgX",rect5:"_1x_ahiaUGbc9YjGWu5dOUP",makeLoadingCenter:"oaWd_Q2OzHNmpOi7IxDeP",bigNote:"_3T6YZvJXTSBYIV-mI2HeFu"}},546:function(e,t,a){var n=a(545);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,i);n.locals&&(e.exports=n.locals)},575:function(e,t,a){(t=e.exports=a(13)(!1)).push([e.i,"._3NVA0ES5dLIKNquNVoo97Y{font-family:cursive;font-size:30px;color:blue;text-align:center}._1IifyYPyAvWsV1g8Atq5Id{position:relative;left:5%;width:60%}._3DRVybI16bd-0IbnOpttA6{position:relative;width:100%;height:100px}.Nf_im2OUaelNZbjn_QEbE{position:absolute;right:35%}",""]),t.locals={pageTitle:"_3NVA0ES5dLIKNquNVoo97Y",chtoengall:"_1IifyYPyAvWsV1g8Atq5Id",textarea:"_3DRVybI16bd-0IbnOpttA6",ShowEngAndReturn:"Nf_im2OUaelNZbjn_QEbE"}},576:function(e,t,a){var n=a(575);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(12)(n,i);n.locals&&(e.exports=n.locals)}}]);