const products = [
    {
        id : 1,
        title : 'Camisa Flora',
        desciption : 'Camisa con deco floreada',
        price : 950,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item6374foto73463th.jpg'
    },
    {
        id : 2,
        title : 'Jean Mamba',
        desciption : 'Jean negro con roturas',
        price : 1500,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item5777foto63978.jpg'
    },
    {
        id : 3,
        title : 'Campera Rocket',
        desciption : 'Campera impermeable',
        price : 2500,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item17057foto78718th.jpg'
    }
]

const promesa = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve(products);
    }, 2000) //dos segundos
});

function getProducts(){
    return promesa;
}

export {
    getProducts,
}