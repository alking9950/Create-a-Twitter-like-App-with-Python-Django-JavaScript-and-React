(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=(n(15),n(7)),s=n.n(o),i=(n(16),n(2)),u=n(1);function m(e,t,n,a){var r;a&&(r=JSON.stringify(a));var c=new XMLHttpRequest,l="http://localhost:80/api".concat(t);c.responseType="json",c.open(e,l);var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var r=n[a].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");c.setRequestHeader("Content-Type","application/json"),o&&(c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.setRequestHeader("X-CSRFToken",o)),c.onload=function(){403===c.status&&("Authentication credentials were not provided."===c.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(c.response,c.status)},c.onerror=function(e){console.log("error",e),n({message:"The request was an error"},400)},c.send(r)}function d(e,t){var n="/tweets/feed/";null!==t&&void 0!==t&&(n=t.replace("http://localhost/api","")),m("GET",n,e)}function f(e,t,n){var a="/tweets/";e&&(a="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(a=n.replace("http://localhost/api","")),m("GET",a,t)}var p=n(8),w=(n(18),n(5),n(9));function b(e){var t=e.tweet,n=e.action,a=e.didPerformAction,c=t.likes?t.likes:0,l=e.className?e.className:"btn btn-primary btn-sm",o=n.display?n.display:"Action",s=function(e,t){console.log(e,t),200!==t&&201!==t||!a||a(e,t)},i="like"===n.type?"".concat(c," ").concat(o):o;return r.a.createElement("button",{className:l,onClick:function(e){e.preventDefault(),function(e,t,n){m("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,s)}},i)}function v(e){var t=e.username;return r.a.createElement("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)}},e.children)}function E(e){var t=e.user,n=!0===e.includeFullName?"".concat(t.first_name," ").concat(t.last_name," "):null;return r.a.createElement(r.a.Fragment,null,n,r.a.createElement(v,{username:t.username},"@",t.username))}function h(e){var t=e.user;return r.a.createElement(v,{username:t.username},r.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]))}function g(e,t){g=function(e,t){return new c(e,void 0,t)};var n=Object(w.a)(RegExp),a=RegExp.prototype,r=new WeakMap;function c(e,t,a){var c=n.call(this,e,t);return r.set(c,a||r.get(e)),c}function l(e,t){var n=r.get(t);return Object.keys(n).reduce(function(t,a){return t[a]=e[n[a]],t},Object.create(null))}return Object(p.a)(c,n),c.prototype.exec=function(e){var t=a.exec.call(this,e);return t&&(t.groups=l(t,this)),t},c.prototype[Symbol.replace]=function(e,t){if("string"===typeof t){var n=r.get(this);return a[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,function(e,t){return"$"+n[t]}))}if("function"===typeof t){var c=this;return a[Symbol.replace].call(this,e,function(){var e=[];return e.push.apply(e,arguments),"object"!==typeof e[e.length-1]&&e.push(l(e,c)),t.apply(this,e)})}return a[Symbol.replace].call(this,e,t)},g.apply(this,arguments)}function j(e){var t=e.tweet;return t.parent?r.a.createElement(O,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function O(e){var t=e.tweet,n=e.didRetweet,c=e.hideActions,l=e.isRetweet,o=e.retweeter,s=Object(a.useState)(e.tweet?e.tweet:null),i=Object(u.a)(s,2),m=i[0],d=i[1],f=e.className?e.className:"col-10 mx-auto col-md-6";f=!0===l?"".concat(f," p-2 border rounded"):f;var p=window.location.pathname.match(g(/([0-9]+)/,{tweetid:1})),w=p?p.groups.tweetid:-1,v="".concat(t.id)==="".concat(w),O=function(e,t){200===t?d(e):201===t&&n&&n(e)};return r.a.createElement("div",{className:f},!0===l&&r.a.createElement("div",{className:"mb-2"},r.a.createElement("span",{className:"small text-muted"},"Retweet via ",r.a.createElement(E,{user:o}))),r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:""},r.a.createElement(h,{user:t.user})),r.a.createElement("div",{className:"col-11"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(E,{includeFullName:!0,user:t.user})),r.a.createElement("p",null,t.content),r.a.createElement(j,{tweet:t,retweeter:t.user})),r.a.createElement("div",{className:"btn btn-group px-0"},m&&!0!==c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{tweet:m,didPerformAction:O,action:{type:"like",display:"Likes"}}),r.a.createElement(b,{tweet:m,didPerformAction:O,action:{type:"unlike",display:"Unlike"}}),r.a.createElement(b,{tweet:m,didPerformAction:O,action:{type:"retweet",display:"Retweet"}})),!0===v?null:r.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))))}function y(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)([]),s=Object(u.a)(o,2),m=s[0],d=s[1],p=Object(a.useState)(null),w=Object(u.a)(p,2),b=w[0],v=w[1],E=Object(a.useState)(!1),h=Object(u.a)(E,2),g=h[0],j=h[1];Object(a.useEffect)(function(){var t=Object(i.a)(e.newTweets).concat(c);t.length!==m.length&&d(t)},[e.newTweets,m,c]),Object(a.useEffect)(function(){if(!1===g){f(e.username,function(e,t){200===t?(v(e.next),console.log(e),l(e.results),j(!0)):alert("There was an error")})}},[c,g,j,e.username]);var y=function(e){var t=Object(i.a)(c);t.unshift(e),l(t);var n=Object(i.a)(m);n.unshift(m),d(n)};return r.a.createElement(r.a.Fragment,null,m.map(function(e,t){return r.a.createElement(O,{tweet:e,didRetweet:y,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})}),null!==b&&r.a.createElement("button",{onClick:function(t){t.preventDefault(),null!==b&&f(e.username,function(e,t){if(200===t){v(e.next);var n=Object(i.a)(m).concat(e.results);l(n),d(n)}else alert("There was an error")},b)},className:"btn btn-outline-primary"},"Load next"))}function N(e){var t=r.a.createRef(),n=e.didTweet,a=function(e,t){201===t?n(e):(console.log(e),alert("An error occured please try again"))};return r.a.createElement("div",{className:e.className},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;console.log("new value",n),m("POST","/tweets/create/",a,{content:n}),t.current.value=""}},r.a.createElement("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}function k(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)([]),s=Object(u.a)(o,2),m=s[0],f=s[1],p=Object(a.useState)(null),w=Object(u.a)(p,2),b=w[0],v=w[1],E=Object(a.useState)(!1),h=Object(u.a)(E,2),g=h[0],j=h[1];Object(a.useEffect)(function(){var t=Object(i.a)(e.newTweets).concat(c);t.length!==m.length&&f(t)},[e.newTweets,m,c]),Object(a.useEffect)(function(){if(!1===g){d(function(e,t){200===t?(v(e.next),console.log(e),l(e.results),j(!0)):alert("There was an error")})}},[c,g,j,e.username]);var y=function(e){var t=Object(i.a)(c);t.unshift(e),l(t);var n=Object(i.a)(m);n.unshift(m),f(n)};return r.a.createElement(r.a.Fragment,null,m.map(function(e,t){return r.a.createElement(O,{tweet:e,didRetweet:y,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})}),null!==b&&r.a.createElement("button",{onClick:function(e){e.preventDefault(),null!==b&&d(function(e,t){if(200===t){v(e.next);var n=Object(i.a)(m).concat(e.results);l(n),f(n)}else alert("There was an error")},b)},className:"btn btn-outline-primary"},"Load next"))}function T(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],l=n[1],o="false"!==e.canTweet;return r.a.createElement("div",{className:e.className},!0===o&&r.a.createElement(N,{didTweet:function(e){var t=Object(i.a)(c);t.unshift(e),l(t)},className:"col-12 mb-3"}),r.a.createElement(y,Object.assign({newTweets:c},e)))}function x(e){var t=e.tweetId,n=Object(a.useState)(!1),c=Object(u.a)(n,2),l=c[0],o=c[1],s=Object(a.useState)(null),i=Object(u.a)(s,2),d=i[0],f=i[1],p=function(e,t){200===t?f(e):alert("There was an error finding your tweet.")};return Object(a.useEffect)(function(){!1===l&&(!function(e,t){m("GET","/tweets/".concat(e,"/"),t)}(t,p),o(!0))},[t,l,o]),null===d?null:r.a.createElement(O,{tweet:d,className:e.className})}var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("div",null,r.a.createElement(T,null)),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=document.getElementById("root");R&&l.a.render(r.a.createElement(S,null),R);var A=r.a.createElement,q=document.getElementById("tweetme-2");if(q){var C=A(T,q.dataset);l.a.render(C,q)}var F=document.getElementById("tweetme-2-feed");if(F){var L=A(function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),c=n[0],l=n[1],o="false"!==e.canTweet;return r.a.createElement("div",{className:e.className},!0===o&&r.a.createElement(N,{didTweet:function(e){var t=Object(i.a)(c);t.unshift(e),l(t)},className:"col-12 mb-3"}),r.a.createElement(k,Object.assign({newTweets:c},e)))},F.dataset);l.a.render(L,F)}document.querySelectorAll(".tweetme-2-detail").forEach(function(e){l.a.render(A(x,e.dataset),e)}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[10,1,2]]]);
//# sourceMappingURL=main.211cfe2e.chunk.js.map