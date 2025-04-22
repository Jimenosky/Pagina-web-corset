console.log('Cargando Cards')

const dataCards = [
    {
        "title":"Corset Satinado Esmeralda con Lazos",
        "url_image":"./img/nuevo-ingreso1.jpg",
        "desc":"corset de satén en un sofisticado tono esmeralda. Presenta delicados lazos en los hombros que añaden un toque femenino y ajustable, junto con un favorecedor volante en el bajo. Ideal para realzar tu figura con un estilo moderno y chic.",
        "cta":"Comprar",
        "link":"https://store.playstation.com/es-es/product/EP0006-CUSA00503_00-DA3GAMEOFTHEYEAR",
        "precio": "$75",
        "medidas": "Busto: 80-90 cm (ajustable por los lazos), Cintura: 60-70 cm"
    },
    {
        "title":" Corset Toile de Jouy con Lazos",
        "url_image":"./img/nuevo-ingreso2.jpg",
        "desc":"Sofisticado corset de estampado Toile de Jouy en blanco y negro, un clásico atemporal con un toque romántico. Presenta delicados lazos negros en los hombros que permiten un ajuste personalizado y añaden un detalle elegante. Ideal para crear looks con carácter y un aire vintage moderno.",
        "cta":"comprar",
        "link":"https://store.playstation.com/es-es/product/EP0006-CUSA00503_00-DA3GAMEOFTHEYEAR",
        "precio": "$85",
        "medidas": "Busto: 82-92 cm (ajustable por los lazos), Cintura: 62-72 cm",
    },
    {
        "title":" Corset Marrón Rústico con Encaje y Lazos",
        "url_image":"./img/nuevo-ingreso3.jpg",
        "desc":"Elegante corset en un tono marrón terroso, con un delicado ribete de encaje crema en el escote que añade un toque vintage. Presenta tirantes ajustables con lazos negros que aportan un detalle femenino y permiten personalizar el ajuste. Perfecto para un look con encanto rústico y sofisticado.",
        "cta":"comprar",
        "link":"https://store.playstation.com/es-es/product/EP0006-CUSA00503_00-DA3GAMEOFTHEYEAR",
        "precio": "$65", 
        "medidas": "Busto: 78-88 cm (ajustable por los lazos), Cintura: 58-68 cm"
    },
    {
        "title":"Corset Vintage Azul y Beige con Lazos",
        "url_image":"./img/nuevo-ingreso4.jpg",
        "desc":"Elegante corset de estilo vintage con un delicado estampado en tonos azul y beige. Presenta detalles de ribete blanco en el escote y tirantes ajustables con lazos de satén azul oscuro, añadiendo un toque de sofisticación y permitiendo un ajuste personalizado. Ideal para crear looks con un aire romántico y retro.",
        "cta":"comprar",
        "link":"https://store.playstation.com/es-es/product/EP0006-CUSA00503_00-DA3GAMEOFTHEYEAR",
        "precio": "$70", 
        "medidas": "Busto: 81-91 cm (ajustable por los lazos), Cintura: 61-71 cm"      
    },

];

(function () {
    let CARD = {
        init: function() {
            let _self = this;
            this.insertData(_self);
        },

        insertData: function(_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));

            });
        },

        tplCardItem: function(item, index) {
            let additionalInfo = '';
            if (item.precio) {
                additionalInfo += `<p class='card-price'>Precio: ${item.precio}</p>`;
            }
            if (item.medidas) {
                additionalInfo += `<p class='card-measures'>Medidas: ${item.medidas}</p>`;
            }

            return(`<div class='card-item id=card-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                    <p class='card-title'>${item.title}</p>
                    ${additionalInfo}
                    <p class='card-desc'>${item.desc}</p>
                    <a class='card-cta' target='blank' href=${item.link}>${item.cta}</a>
                </div>
            </div>`)
        },
    }
    CARD.init();

})();