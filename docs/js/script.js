let pagina = 1;

document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
    crearGaleria2();
    crearGaleria3();
    crearGaleria4();
    crearGaleria5();
   mostrarSeccion();
   cambiarSeccion();
  navegacionFija();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for( let i = 1; i <= 32; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `../img/logos/${i}.jpg`;
        imagen.dataset.imagenId = i; 

        imagen.onclick = mostrarImagen;

       const lista = document.createElement('LI');
       lista.appendChild(imagen);

       galeria.appendChild(lista);
    }
}


function mostrarImagen(e) {
    const id = parseInt( e.target.dataset.imagenId );

    // Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `../img/logos2/${id}.jpg`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // Cuando se da click, cerrar la imagen
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    // Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    // Cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen)

    // Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

  
function crearGaleria2() {

        for( let i = 1; i <= 8; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `../img/etiquetas/${i}.jpg`;
      

      const galeria = document.querySelector('.galeria-imagenes-2');
      const lista = document.createElement('li');
      lista.appendChild(imagen);
      galeria.appendChild(lista);

    }
}

function crearGaleria3() {

        for( let i = 1; i <= 9; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `../img/publicidad/${i}.jpg`;
       

      const galeria = document.querySelector('.galeria-imagenes-3');
      const lista = document.createElement('li');
      lista.appendChild(imagen);
      galeria.appendChild(lista);

    }
}

function crearGaleria4() {

        for( let i = 1; i <= 7; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `../img/ilustraciones/${i}.jpg`;
       

      const galeria = document.querySelector('.galeria-imagenes-4');
      const lista = document.createElement('li');
      lista.appendChild(imagen);
      galeria.appendChild(lista); 

    }
}

function crearGaleria5() {

        for( let i = 1; i <= 8; i++ ) {
        const imagen = document.createElement('IMG');
        imagen.src = `../img/pag/${i}.jpg`;
      

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

    const tabAnterior = document.querySelector('.enlaces .actual');
    if(tabAnterior) {
        tabAnterior.classList.remove('actual');
    }
 
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

