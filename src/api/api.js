const items = [
    {
        id : 1,
        title : 'Camisa Flora',
        description : 'La camisa mas canchera ;)',
        price : 950,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item6374foto73463th.jpg',
        category: 'ropa'
    },
    {
        id : 2,
        title : 'Jean Mamba',
        description : 'Jean negro, el más cómodo de todo el condado',
        price : 1500,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item5777foto63978.jpg',
        category: 'ropa'
    },
    {
        id : 3,
        title : 'Campera Rocket',
        description : 'Campera impermeable, para ni preocuparte por el frío',
        price : 2500,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item17057foto78718th.jpg',
        category: 'ropa'
    },
    {
        id : 4,
        title : 'VENICE JR MALVA/WHITE',
        description : 'Zapatilla urbana con capellada de cotton canvas, forreria acolchada y suela de goma.',
        price : 3500,
        pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/180/816/products/zapas-dia-1_-1731-f599f05a8bbb544fb116221323060076-1024-10241-32054ca170e2c232de16348191480017-640-0.jpg',
        category: 'zapatillas'
    }
]

const promesa = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve(items);
    }, 500)
});

function getItems(){
    return promesa;
}

export {
    getItems,
}