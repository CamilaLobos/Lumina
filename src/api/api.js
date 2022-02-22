const items = [
    {
        id : 1,
        title : 'Camisa Flora',
        description : 'La camisa mas canchera ;)',
        price : 950,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item6374foto73463th.jpg'
    },
    {
        id : 2,
        title : 'Jean Mamba',
        description : 'Jean negro, el más cómodo de todo el condado',
        price : 1500,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item5777foto63978.jpg'
    },
    {
        id : 3,
        title : 'Campera Rocket',
        description : 'Campera impermeable, para ni preocuparte por el frío',
        price : 2500,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item17057foto78718th.jpg'
    }
]

const promesa = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve(items);
    }, 2000) //dos segundos
});

function getItems(){
    return promesa;
}

export {
    getItems,
}