const fs=require("fs");
fs.readFile("./cool.txt","utf-8",function(err, content) {
  if (err){
      console.log(err);
  }  
  console.log(content);
});

//const quote1="All is well!!";
// fs.writeFile("./awesome.txt",quote1,function(err){
// console.log("Completed writing");
// });

// const quote2="\n Live more,Worry less🥰";

// fs.appendFile("./awesome.txt",quote2,function(err){
//     console.log("added to the file");
// });

// fs.unlink("./backups/text1.js",function(err){
//     console.log("removed from the file");
// })

//create 10 files inside backups folder
//  const htmlData="Good Morning !!!";
// for(let i=1;i<=10;i++){
//     fs.writeFile(`./backups/text-${i}.html`,htmlData,function(err){
//         console.log("Completed writing!!",i);
//         });
//     }

//to get all the files in the specified folder

// fs.readdir("./backups",function(err, files){
//     console.log(files);
// });

//to delete 10 files from backups folder
for(let i=1; i<=10; i++){
    fs.unlink(`./backups/text-${i}.html`,function(err){
        console.log("Removed file!!",i);
    });
}


//readdir and unlink(delete)


function removeFile(file) {
    fs.unlink(`./backups/${file}`, function (err) {
        console.log("Removed the file!", file);
    });
} 


fs.readdir("./backups",function (err,files){
    console.log(files);
 files.forEach((file)=>removeFile(file));
});

setTimeout(()=>{
    console.log(3);
},1000);