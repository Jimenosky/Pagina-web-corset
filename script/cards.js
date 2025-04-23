console.log('Cargando Cards');

const dataNuevosIngresos = [
    {
        "title": "Corset Satinado Esmeralda con Lazos",
        "url_image": "./img/nuevo-ingreso1.jpg",
        "desc": "Corset de satén en un sofisticado tono esmeralda. Presenta delicados lazos en los hombros que añaden un toque femenino y ajustable, junto con un favorecedor volante en el bajo. Ideal para realzar tu figura con un estilo moderno y chic.",
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
        "precio": "$75",
        "medidas": "Busto: 78-88 cm (ajustable por los lazos), Cintura: 58-68 cm"
    },
    {
        "title": "Corset Vintage Azul y Beige con Lazos",
        "url_image": "./img/nuevo-ingreso4.jpg",
        "desc": "Elegante corset de estilo vintage con un delicado estampado en tonos azul y beige. Presenta detalles de ribete blanco en el escote y tirantes ajustables con lazos de satén azul oscuro, añadiendo un toque de sofisticación y permitiendo un ajuste personalizado. Ideal para crear looks con un aire romántico y retro.",
        "cta": "Añadir al carrito",
        "precio": "$85",
        "medidas": "Busto: 81-91 cm (ajustable por los lazos), Cintura: 61-71 cm"
    },

];

const dataNuestrosCorsets = [
    {
        "title": "Corset Noche Estelar - Brillo y Elegancia en Negro",
        "url_image": "./img/nuestrocorset1.jpg",
        "desc": "Deslumbra en la oscuridad con este espectacular corset negro. Cubierto de brillantes destellos y adornado con elegantes drapeados de cuentas, captura la esencia de una noche estrellada. Su diseño sofisticado realza la figura, convirtiéndote en el centro de atención en cualquier evento. ¡Atrévete a brillar con este corset único!",
        "cta": "Añadir al carrito",
        "precio": "$170",
        "medidas": "Busto: 86-91 cm, Cintura: 66-71cm"
    },
    {
        "title": "Corset Esmeralda Nocturna - Elegancia Oscura con Toques de Brillo",
        "url_image": "./img/nuestrocorset2.jpg",
        "desc": "Sumérgete en un mundo de misterio y sofisticación con este impresionante corset negro. Su intrincado diseño se realza con delicados bordados, brillantes lentejuelas y toques de pedrería verde esmeralda que evocan la magia de la noche. Perfecto para quienes buscan una pieza audaz y elegante que capture todas las miradas.",
        "cta": "Añadir al carrito",
        "precio": "$180",
        "medidas": "Busto: 88-93 cm, Cintura: 68-73 cm"
    },
    {
        "title": "Corset Blanco Nupcial - Elegancia y Encanto Floral",
        "url_image": "./img/nuestrocorset3.jpg",
        "desc": "Envuélvete en la pureza y la sofisticación con este hermoso corset blanco. Su diseño presenta delicados encajes florales que evocan un aire romántico y nupcial. Perfecto para ocasiones especiales donde quieras lucir elegante y femenina con un toque de encanto atemporal.",
        "cta": "Añadir al Carrito",
        "precio": "$115",
        "medidas": "Busto: 84-89cm, Cintura:  64-69cm"
    },
    {
        "title": "Corset Pasión Deslumbrante - Rojo, Negro y Brillo Intenso",
        "url_image": "./img/nuestrocorset4.jpg",
        "desc": "Enciende la noche con este corset audaz y espectacular. Su vibrante base roja, adornada con intrincados detalles en negro y un deslumbrante acabado de pedrería, irradia pasión y sofisticación. Perfecto para quienes desean destacar con una piezaStatement que no pasará desapercibida.",
        "cta": "Añadir al carrito",
        "precio": "$130",
        "medidas": "Busto: 90-95cm, Cintura: 70-75cm"
    }
];

const dataOfertasyDescuentos = [
    {
        "title": "Oferta de Paquete de 2 Corsets Clásicos",
        "url_image": "./img/corsetOyD2.png", 
        "desc": "Aprovecha nuestro oferta de un paquete especial con estos dos corsets clásicos a un precio increíble. Oferta tiempo limitado.",
        "precio_original": "$150",
        "precio_descuento": "$125",
        "cta": "Añadir al carrito"
    },
    {
        "title": "Corset Elegante y unico con 20% de Descuento",
        "url_image": "./img/corsetOyD1.jpg",
        "desc": "Para ocasiones especiales donde quieras destacar con un toque de romance y elegancia. ¡No pierdas la oportunidad de añadir esta joya a tu colección!.",
        "precio_original": "$85",
        "precio_descuento": "$68",
        "cta": "Añadir al carrito"
    },
    {
        "title": "Oferta de Paquete de 2 Corsets con Diseño de Querubines",
        "url_image": "./img/corsetOyD3.jpg",
        "desc": "Lleva a casa este par de delicados corsets con un hermoso diseño de querubines. ¡Aprovecha esta oferta especial y luce un estilo celestial!",
        "precio_original": "$105",
        "precio_descuento": "$80",
        "cta": "Añadir al carrito"
    },
];

(function () {
    let CARD = {
        init: function () {
            let _self = this;
            this.insertData('.existing-cards-container', _self, dataNuevosIngresos);
            this.insertData('.nuestros-corsets-cards-container', _self, dataNuestrosCorsets);
            this.insertData('.OfertasyDescuentos-corsets-cards-container', _self, dataOfertasyDescuentos);
            this.setupAddToCartFeedback(); // Nueva función para la retroalimentación
        },

        setupAddToCartFeedback: function () {
            const botonesAgregar = document.querySelectorAll('.card-cta');
        
            botonesAgregar.forEach(boton => {
                boton.addEventListener('click', () => {
                    const mensajeElement = boton.nextElementSibling; // Obtiene el siguiente elemento (el span)
                    if (mensajeElement && mensajeElement.classList.contains('carrito-mensaje')) {
                        mensajeElement.style.display = 'inline'; // Muestra el mensaje
                        setTimeout(() => {
                            mensajeElement.style.display = 'none'; // Oculta el mensaje después de 2 segundos
                        }, 2000);
                    }
                });
            });
        },

        insertData: function (selector, _self, data) {
            const container = document.querySelector(selector);
            data.map(function (item, index) {
                container.insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
            });
        },

        tplCardItem: function (item, index) {
            let additionalInfo = '';
            let precioHTML = '';

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
                        <button class='card-cta'>${item.cta}</button>
                        <span class='carrito-mensaje' style='display:none; color: lime;'>¡Añadido!</span>
                    </div>
                </div>`)
        },
    }
    CARD.init();

})();