const miPromesa = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({
            id: 1,
            name : 'Jabon',
            description : 'Jabon de coco para lavar las manos',
            stock : 10
        })
    }, 3000)
});

miPromesa.then(function(resultado){
    console.log(resultado);
})