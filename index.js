import{i as o,S as n}from"./assets/vendor-2QhdLxO2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(e){if(e.ep)return;e.ep=!0;const l=s(e);fetch(e.href,l)}})();async function c(a,r){const s="48580405-254aeb3d0592dc0b65db12949";try{const e=await(await fetch(`https://pixabay.com/api/?key=${s}&q=${a}&min_width=360&image_type=photo&orientation=horizontal&safesearch=true`)).json();e.hits.length===0?o.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):r(e.hits)}catch{o.error({title:"Error",message:"Something went wrong. Please try again later."})}}function d(a){const r=document.getElementById("gallery");let s="";a.forEach(t=>{s+=`<li class="gallery-item">
                <a href="${t.largeImageURL}" >
                  <img src="${t.webformatURL}" alt="${t.tags}" data-source="${t.largeImageURL}">
                </a>
                <ul class="gallery-info">
                    <li class="gallery-info-item">
                        <p class="gallery-item-title">Likes</p>
                        <p class="gallery-item-value">${t.likes}</p>
                    </li>
                    <li class="gallery-info-item">
                        <p class="gallery-item-title">Views</p>
                        <p class="gallery-item-value">${t.views}</p>
                    </li>
                      <li class="gallery-info-item">
                        <p class="gallery-item-title">Comments</p>
                        <p class="gallery-item-value">${t.comments}</p>
                    </li>
                      <li class="gallery-info-item">
                        <p class="gallery-item-title">Downloads</p>
                        <p class="gallery-item-value">${t.downloads}</p>
                    </li>
                </ul>

            </li>`}),r.innerHTML=s,new n(".gallery-item",{captionsData:"alt",captionDelay:250})}const y=document.getElementById("searchForm");y.addEventListener("submit",async a=>{const r=document.getElementById("searchQuery"),s=document.getElementById("submitButton"),t=document.getElementById("loader"),e=document.getElementById("gallery");a.preventDefault();const l=r.value.trim();l&&(t.style.display="block",e.style.display="none",s.disabled=r.disabled=!0,await c(l,d),s.disabled=r.disabled=!1,t.style.display="none",e.style.display="flex")});
//# sourceMappingURL=index.js.map
