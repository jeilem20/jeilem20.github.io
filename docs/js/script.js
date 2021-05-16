let pagina = 1;

document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
    crearGaleria2();
    crearGaleria3();
    crearGaleria4();
    crearGaleria5();
   mostrarSeccion();
   cambiarSeccion();
  navegacionFija()
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for( let i = 1; i <= 28; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `/img/logos/${i}.jpg`;
        imagen.dataset.imagenId = i; 

       const lista = document.createElement('LI');
       lista.appendChild(imagen);

       galeria.appendChild(lista);
    }
}

  
function crearGaleria2() {

        for( let i = 1; i <= 8; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `/img/etiquetas/${i}.jpg`;
        imagen.dataset.imagenId = i; 

      const galeria = document.querySelector('.galeria-imagenes-2');
      const lista = document.createElement('li');
      lista.appendChild(imagen);
      galeria.appendChild(lista);

    }
}

function crearGaleria3() {

        for( let i = 1; i <= 9; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `/img/publicidad/${i}.jpg`;
        imagen.dataset.imagenId = i; 

      const galeria = document.querySelector('.galeria-imagenes-3');
      const lista = document.createElement('li');
      lista.appendChild(imagen);
      galeria.appendChild(lista);

    }
}

function crearGaleria4() {

        for( let i = 1; i <= 5; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `/img/ilustraciones/${i}.jpg`;
        imagen.dataset.imagenId = i; 

      const galeria = document.querySelector('.galeria-imagenes-4');
      const lista = document.createElement('li');
      lista.appendChild(imagen);
      galeria.appendChild(lista); 

    }
}

function crearGaleria5() {

        for( let i = 1; i <= 8; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `/img/pag/${i}.jpg`;
        imagen.dataset.imagenId = i; 

      const galeria = document.querySelector('.galeria-imagenes-5');
      const lista = document.createElement('li');
      lista.appendChild(imagen);
      galeria.appendChild(lista); 
  
    }
}


function mostrarSeccion() {

    // Eliminar mostrar-seccion de la sección anterior
    const seccionAnterior = document.querySelector('.mostrar-seccion');
    if( seccionAnterior ) {
        seccionAnterior.classList.remove('mostrar-seccion');
    }

    const seccionActual = document.querySelector(`#paso-${pagina}`);
      seccionActual.classList.add('mostrar-seccion');

    // Eliminar la clase de actual en el tab anterior
    const tabAnterior = document.querySelector('.enlaces .actual');
    if(tabAnterior) {
        tabAnterior.classList.remove('actual');
    }
  
    // Resalta el Tab Actual
    const tab = document.querySelector(`[data-paso="${pagina}"]`);
    tab.classList.add('actual');

}


function cambiarSeccion() {
    const enlaces = document.querySelectorAll('a');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();
            pagina = parseInt(e.target.dataset.paso);

            // Llamar la función de mostrar sección
            mostrarSeccion();
        })
    })
}

function navegacionFija() {

    const barra = document.querySelector('.navegacion');

    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( entries => {
        entries[0].isIntersecting
            ? barra.classList.remove('fijo')
        
            : barra.classList.add('fijo')
       
    });
    // Elemento a observar
    observer.observe(document.querySelector('.encabezado'));
    
}