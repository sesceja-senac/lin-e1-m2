window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    $('.preloader').fadeOut(300);

    document.querySelector('.pin-inglaterra').addEventListener('mouseover', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa-1.png')
    })
    document.querySelector('.pin-inglaterra').addEventListener('mouseout', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa.png')
    })

    document.querySelector('.pin-eua').addEventListener('mouseover', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa-2.png')
    })
    document.querySelector('.pin-eua').addEventListener('mouseout', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa.png')
    })

    document.querySelector('.pin-canada').addEventListener('mouseover', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa-3.png')
    })
    document.querySelector('.pin-canada').addEventListener('mouseout', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa.png')
    })

    document.querySelector('.pin-nz').addEventListener('mouseover', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa-4.png')
    })
    document.querySelector('.pin-nz').addEventListener('mouseout', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa.png')
    })

    document.querySelector('.pin-irlanda').addEventListener('mouseover', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa-5.png')
    })
    document.querySelector('.pin-irlanda').addEventListener('mouseout', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa.png')
    })

    document.querySelector('.pin-af').addEventListener('mouseover', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa-6.png')
    })
    document.querySelector('.pin-af').addEventListener('mouseout', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa.png')
    })

    document.querySelector('.pin-india').addEventListener('mouseover', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa-7.png')
    })
    document.querySelector('.pin-india').addEventListener('mouseout', function(){
      document.getElementById('mymap').setAttribute('src', 'images/mapa/mapa.png')
    })
})

