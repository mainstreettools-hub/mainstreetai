// Local preview server: clean URLs + /api/subscribe (mimics Vercel). node serve.js [port]
const http=require('http'),fs=require('fs'),path=require('path');const sub=require('./api/subscribe');const D=path.join(__dirname,'dist');
const M={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.txt':'text/plain; charset=utf-8','.xml':'application/xml'};
http.createServer((req,res)=>{const u=decodeURIComponent(req.url.split('?')[0]);
 if(u==='/api/subscribe'){let b='';req.on('data',c=>b+=c);req.on('end',()=>{req.body=b;res.status=c=>{res.statusCode=c;return res};res.json=o=>{res.setHeader('Content-Type','application/json');res.end(JSON.stringify(o))};sub(req,res)});return;}
 const cands=[u,u+'.html',path.join(u,'index.html')];for(const c of cands){const f=path.join(D,path.normalize(c));if(f.startsWith(D)&&fs.existsSync(f)&&fs.statSync(f).isFile()){res.setHeader('Content-Type',M[path.extname(f)]||'application/octet-stream');return fs.createReadStream(f).pipe(res);}}
 res.statusCode=404;res.end('Not found');}).listen(process.argv[2]||8080);
