console.log('Cargando Acordion');

const dataAccordion = [
    {
        title: "¿Cuáles son los beneficios de usar un corset?",
        desc: "Los corsets pueden ofrecer soporte para la espalda, ayudar a mejorar la postura, definir la cintura y proporcionar una silueta más estilizada. Algunas personas también los usan por motivos estéticos o para eventos especiales.",
      },
      {
        title: "¿Cómo debo cuidar mi corset?",
        desc: "La mayoría de los corsets no se pueden lavar a máquina. Se recomienda limpiarlos a mano con un paño húmedo y jabón suave, y luego dejarlos secar al aire completamente. Evita doblarlos bruscamente para no dañar las varillas.",
      },
      {
        title: "¿Cuánto tiempo puedo usar un corset al día?",
        desc: "Para principiantes, se recomienda comenzar con períodos cortos de tiempo (1-2 horas) e ir aumentando gradualmente a medida que el cuerpo se acostumbra. Escucha siempre a tu cuerpo y no fuerces si sientes molestias.",
      },
    ];

(function () {
    let ACCORDION = {
        init: function () {
            let _self = this;
            this.insertData(_self);
            this.eventhandler(_self);

        },

        insertData: function (_self) {
            dataAccordion.map(function (item, index) {
                document
                    .querySelector('.main-accordion-container')
                    .insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
            })
        },

        eventhandler: function (_self) {
            let arrayRefs = document.querySelectorAll('.accordion-title');
            for (let x = 0; x < arrayRefs.length; x++) {
                arrayRefs[x].addEventListener('click', function (event) {
                    //console.log('event: ', event);
                    _self.showTab(event.target);
                })
            }
        },

        tplAccordionItem: function (item) {
            return (`<div class='accordion-item'>
                <div class='accordion-title'><p>${item.title}</p></div>
                <div class='accordion-desc'><p>${item.desc}</p></div>
                </div>`

            )
        },

        showTab: function (refItem) {
            let activeTab = document.querySelector('tab-active')
            if (activeTab) {
                activeTab.classList.remove('tab-active')
            }
            console.log('show Tab ', refItem);
            refItem.parentElement.classList.toggle('tab-active');
        },

    }
    ACCORDION.init();



})();

