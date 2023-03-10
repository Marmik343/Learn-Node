const fs = require('fs');

// reading files
fs.readFile('./docs/blog.txt', (err , data) =>{ // This is an asyncronous call, meaning it will take time to execute, anycode written after the fs.readFile will execute first.
    if(err){
        console.log(err);
    }
    console.log(data); // we get a buffer
    console.log(data.toString()); // we get the actual string

});

console.log('last line'); // this will execute first


//writing files - if we run this on an not existing file, it would create a new file and write the data to it.
fs.writeFile('./docs/blog.txt', 'Hello , World!!', () => {  //since this is also an async function it will take a callback function.
    console.log("file was written");
});




//directories -  to create a new directory

if(!fs.existsSync('./assets')){ // node will check this.
    fs.mkdir('./assets', (err) => {  // again like before, this is an async function.
    if(err){
        console.log(err);
    }
    console.log('folder created!')
}); // run once and the folder will be created, it run again will throw error, "file already exixts"
}else{
    fs.rmdir('./assets',(err) => {
        if(err){
        console.log(err);
    }
    console.log('folder deleted');
    });
}

//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {  //This method is used to delete the file.
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}
