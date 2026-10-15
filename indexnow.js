// Ping IndexNow (Bing, Yandex, etc.) with every URL in dist/sitemap.xml. Run after deploy: npm run indexnow
const fs=require('fs');const key=fs.readFileSync(__dirname+'/.indexnow-key','utf8').trim();
const urlList=[...fs.readFileSync(__dirname+'/dist/sitemap.xml','utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json; charset=utf-8'},
body:JSON.stringify({host:'mainstreetai.tools',key,keyLocation:`https://mainstreetai.tools/${key}.txt`,urlList})})
.then(async r=>{console.log('IndexNow',r.status,r.statusText,urlList.length,'URLs',await r.text());});
