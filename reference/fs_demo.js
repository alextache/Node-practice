const fs = require('fs');
const path = require('path'); 

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if(err) throw err;
//     console.log('Folder created...');
// });

// Create and write to file 
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', function(err){
//     if(err) throw err;
//     console.log('File written...');

//     // Edit append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node.js...!', function(err){
//         if(err) throw err;
//         console.log('I love node.js...');
//     });

// });

// Read File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data){
//     if(err) throw err;
//     console.log(data);
// });

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err){
    if(err) throw err;
    console.log('File renamed...');
});