import{a as u,S as m,i as p}from"./assets/vendor-BAQQTdrx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(i){return u("https://pixabay.com/api/",{params:{key:"55699245-ea32969c729087c9356aa5786",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:{hits:r}})=>r).catch(r=>{throw new Error(r.message)})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),f=new m(".gallery-item",{sourceAttr:"data-origin",captionsData:"alt"});function h(i){c.innerHTML=i.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:o,downloads:d})=>`<li class="gallery-item" data-origin="${s}">
              <img src='${r}' alt='${a}' />
              <div class="img-desc-container">
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Likes</p>
                    <p>${e}</p>
                </div>
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Views</p>
                    <p>${t}</p>
                </div>
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Comments</p>
                    <p>${o}</p>
                </div>
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Downloads</p>
                    <p>${d}</p>
                </div>
              </div>
          </li>`).join(""),f.refresh()}function y(){c.innerHTML=""}function L(){l.classList.add("is-open")}function v(){l.classList.remove("is-open")}function n(i){p.show({message:i,backgroundColor:"red",messageColor:"white",maxWidth:432,iconUrl:"./img/error-icon.svg",position:"bottomRight"})}const w=document.querySelector(".form");w.addEventListener("submit",b);function b(i){i.preventDefault(),y();const r=i.target.elements.searchtext;if(r.value.trim()===""){console.log("Your input is empty");return}L(),g(r.value.trim()).then(s=>{if(!s.length){n("Sorry, there are no images matching your search query. Please try again!");return}h(s)}).catch(s=>{n(s.message)}).finally(()=>{v(),i.target.reset()})}
//# sourceMappingURL=index.js.map
