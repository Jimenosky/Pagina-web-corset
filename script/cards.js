console.log('Cargando Cards');

const dataNuevosIngresos = [
    {
        "title": "Corset Satinado Esmeralda con Lazos",
        "url_image": "./img/nuevo-ingreso1.jpg",
        "desc": "corset de satén en un sofisticado tono esmeralda. Presenta delicados lazos en los hombros que añaden un toque femenino y ajustable, junto con un favorecedor volante en el bajo. Ideal para realzar tu figura con un estilo moderno y chic.",
        "cta": "Añadir al carrito",
        "precio": "$75",
        "medidas": "Busto: 80-90 cm (ajustable por los lazos), Cintura: 60-70 cm"
    },
    {
        "title": " Corset Toile de Jouy con Lazos",
        "url_image": "./img/nuevo-ingreso2.jpg",
        "desc": "Sofisticado corset de estampado Toile de Jouy en blanco y negro, un clásico atemporal con un toque romántico. Presenta delicados lazos negros en los hombros que permiten un ajuste personalizado y añaden un detalle elegante. Ideal para crear looks con carácter y un aire vintage moderno.",
        "cta": "Añadir al carrito",
        "precio": "$85",
        "medidas": "Busto: 82-92 cm (ajustable por los lazos), Cintura: 62-72 cm",
    },
    {
        "title": " Corset Marrón Rústico con Encaje y Lazos",
        "url_image": "./img/nuevo-ingreso3.jpg",
        "desc": "Elegante corset en un tono marrón terroso, con un delicado ribete de encaje crema en el escote que añade un toque vintage. Presenta tirantes ajustables con lazos negros que aportan un detalle femenino y permiten personalizar el ajuste. Perfecto para un look con encanto rústico y sofisticado.",
        "cta": "Añadir al carrito",
        "precio": "$65",
        "medidas": "Busto: 78-88 cm (ajustable por los lazos), Cintura: 58-68 cm"
    },
    {
        "title": "Corset Vintage Azul y Beige con Lazos",
        "url_image": "./img/nuevo-ingreso4.jpg",
        "desc": "Elegante corset de estilo vintage con un delicado estampado en tonos azul y beige. Presenta detalles de ribete blanco en el escote y tirantes ajustables con lazos de satén azul oscuro, añadiendo un toque de sofisticación y permitiendo un ajuste personalizado. Ideal para crear looks con un aire romántico y retro.",
        "cta": "Añadir al carrito",
        "precio": "$70",
        "medidas": "Busto: 81-91 cm (ajustable por los lazos), Cintura: 61-71 cm"
    },

];

const dataNuestrosCorsets = [
    {
        "title": "Corset Floral Romántico",
        "url_image": "./img/corset1.jpg",
        "desc": "Corset con un delicado estampado floral...",
        "cta": "Ver Detalles",
        "precio": "$90",
        "medidas": "Busto: 79-89 cm, Cintura: 59-69 cm"
    },
    {
        "title": "Corset de Cuero Elegante",
        "url_image": "./img/corset2.jpg",
        "desc": "Corset de cuero sintético de alta calidad...",
        "cta": "Comprar Ahora",
        "precio": "$110",
        "medidas": "Busto: 83-93 cm, Cintura: 63-73 cm"
    },
    {
        "title": "Corset Negro Clásico",
        "url_image": "./img/corset3.jpg",
        "desc": "Un básico imprescindible...",
        "cta": "Añadir al Carrito",
        "precio": "$75",
        "medidas": "Busto: 77-87 cm, Cintura: 57-67 cm"
    },
    {
        "title": "Corset Bordado Exclusivo",
        "url_image": "./img/corset4.jpg",
        "desc": "Corset con detalles bordados únicos...",
        "cta": "Descubrir",
        "precio": "$130",
        "medidas": "Busto: 85-95 cm, Cintura: 65-75 cm"
    }
];

const dataOfertasyDescuentos = [
    {
        "title": "Corset Elegante y unico con 20% de Descuento",
        "url_image": "./img/corsetOyD1.jpg",
        "desc": "Llévate este hermoso corset elegante con un increíble 20% de descuento por tiempo limitado.",
        "precio_original": "$80",
        "precio_descuento": "$60",
        "cta": "Añadir al carrito"
    },
    {
        "title": "Oferta de Paquete de 2 Corsets Clásicos",
        "url_image": "./img/corsetOyD2.png", 
        "desc": "Aprovecha nuestro oferta de un paquete especial con estos dos corsets clásicos a un precio increíble. Oferta tiempo limitado.",
        "precio_original": "$160",
        "precio_descuento": "$130",
        "cta": "Añadir al carrito"
    },
    {
        "title": "Paquete ",
        "url_image": "./img/corsetOyD3.jpg",
        "desc": "Un básico imprescindible...",
        "cta": "Añadir al Carrito",
        "precio": "$75",
        "medidas": "Busto: 77-87 cm, Cintura: 57-67 cm"
    },
];

(function () {
    let CARD = {
        init: function () {
            let _self = this;
            this.insertData('.existing-cards-container', _self, dataNuevosIngresos);
            this.insertData('.nuestros-corsets-cards-container', _self, dataNuestrosCorsets);
            this.insertData('.OfertasyDescuentos-corsets-cards-container', _self, dataOfertasyDescuentos);
        },

        insertData: function (selector, _self, data) {
            const container = document.querySelector(selector);
            data.map(function (item, index) {
                container.insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
            });
        },

        

        tplCardItem: function (item, index) {
            let additionalInfo = '';
            let precioHTML = ''; // Variable para almacenar el HTML de los precios
          
            if (item.precio_original && item.precio_descuento) {
              precioHTML = `
                <p class='precio-original'>Precio Original: <del>${item.precio_original}</del></p>
                <p class='precio-descuento'>Precio Ahora: ${item.precio_descuento}</p>
              `;
            } else if (item.precio) {
              precioHTML = `<p class='card-price'>Precio: ${item.precio}</p>`;
            }
          
            if (item.medidas) {
              additionalInfo += `<p class='card-measures'>Medidas: ${item.medidas}</p>`;
            }
          
            return (`<div class='card-item id=card-number-${index}'>
                <img src='${item.url_image}'>
                <div class='card-info'>
                  <p class='card-title'>${item.title}</p>
                  ${precioHTML}
                  ${additionalInfo}
                  <p class='card-desc'>${item.desc}</p>
                  <a class='card-cta' target='blank' href=${item.link}>${item.cta}</a>
                </div>
              </div>`)
          },
    }
    CARD.init();

})();