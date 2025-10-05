// i will create the first server 
const http = require('http');

const server = http.createServer((request, response)=>{

  // console.log(request.url,request.headers,request.method);// method ye batayega ki kya hone wala hai like get hai ya post hai ya khuch aur phir hedders poori hedder ki info batayega aur url base address batayega ki abhi konse wale address p ho tum
});


const PORT =3000;
server.listen(PORT, ()=>{
  console.log('Hello World');
});

