const fs = require('fs');
const http = require('http');
const port = 8117
const formidable = require('formidable');

const server = http.createServer((req,res)=>{
    if(req.method==='GET'){
        fs.readFile('./index.html','utf-8',(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
    
            res.writeHead(200, {
                'Content-Type':'text/html'
            });
            res.write(data);
            res.end();
        })
    
    }else if(req.method==='POST'){
       let form = new formidable.IncomingForm();

       form.parse(req, (err,fields,files)=>{
           if(err){
               console.log(err);
            }

            let file = files.upload;
            let fPath = file.path;
            let fName = file.name;
            console.log(file)


            fs.copyFile(fPath, './files/'+fName, (err) => {
                if(err){
                    console.log(err);
                    return;
                }

                fs.unlink(fPath, err => {
                if (err) {
                        console.log(err);
                    }
                });

                res.write('thank you');
                res.end();
            });


            



           
       })

       
    }
    

   
  
})

server.listen(port);

console.log(`Server listening on ${port}`);