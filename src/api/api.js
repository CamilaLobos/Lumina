const items = [{
        id: 1,
        title: 'Camisa Flora',
        description: 'La camisa mas canchera ;)',
        price: 5400,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item6374foto73463th.jpg',
        category: 'ropa'
    },
    {
        id: 2,
        title: 'Jean Mamba',
        description: 'Jean negro, el más cómodo de todo el condado',
        price: 7500,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item5777foto63978.jpg',
        category: 'ropa'
    },
    {
        id: 3,
        title: 'Campera Rocket',
        description: 'Campera impermeable, para ni preocuparte por el frío',
        price: 15000,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item17057foto78718th.jpg',
        category: 'ropa'
    },
    {
        id: 4,
        title: 'Venice Jr. Malva/White',
        description: 'Zapatilla urbana con capellada de cotton canvas, forreria acolchada y suela de goma.',
        price: 12000,
        pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/180/816/products/zapas-dia-1_-1731-f599f05a8bbb544fb116221323060076-1024-10241-32054ca170e2c232de16348191480017-640-0.jpg',
        category: 'zapatillas'
    },
    {
        id: 5,
        title: 'Reloj Next Digital',
        description: 'Hora y fecha digitales - Alarma, cronometro y luz - sumergible hasta 100m - Lente de cristal mineral',
        price: 10000,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item12225foto60418.jpg',
        category: 'accesorios'
    },
    {
        id: 6,
        title: 'Cap Rip Curl Flowers',
        description: 'Cap Rip Curl Flowers',
        price: 4000,
        pictureUrl: 'https://www.cristobalcolon.com/fullaccess/item4076foto91284.jpg',
        category: 'accesorios'
    }
]

const promesa = new Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve(items);
    }, 500)
});

function getItems() {
    return promesa;
}

export {
    getItems,
}