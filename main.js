$(document).ready(function() {
    let boton1Clicked = false;
    let boton2Clicked = false;

    // 1. Cambiar tamaño de fuente del título
    $('#boton1').click(function() {
        boton1Clicked = true;
        $('#liga .titulo').css('font-size', function(index, oldValue) {
            return (parseInt(oldValue) + 5) + 'px';
        });
        checkButtonClicks();
    });

    // 2. Resaltar equipo al pasar el mouse por boton2
    $('#boton2').hover(
        function() {
            $('#barcelona').addClass('highlight');
        },
        function() {
            $('#barcelona').removeClass('highlight');
        }
    );

    // 3. Ocultar fila de la tabla al doble clic en boton3
    $('#boton3').dblclick(function() {
        $('#clasificacion tr').filter(function() {
            return $(this).find('td:contains("Atlético de Madrid")').length > 0;
        }).hide();
    });

    // 4. Desvanecer noticias al hacer clic en boton4
    $('#boton4').click(function() {
        $('.noticia').fadeOut(1000);
    });

    // 5. Alternar negrita en la descripción de la liga
    $('.descripcion').hover(
        function() {
            $(this).css('font-weight', 'bold');
        },
        function() {
            $(this).css('font-weight', 'normal');
        }
    );

    // 6. Alertar el nombre del equipo al hacer clic en el título del equipo
    $('.nombre-equipo').click(function() {
        alert($(this).text());
    });

    // 7. Agregar borde a todas las celdas de datos al hacer doble clic en el encabezado de la tabla
    $('th').dblclick(function() {
        $('td').css('border', '2px solid red');
    });

    // 8. Subrayar el título de noticias al pasar el mouse
    $('.titulo-noticia').hover(
        function() {
            $(this).css('text-decoration', 'underline');
        },
        function() {
            $(this).css('text-decoration', 'none');
        }
    );

    // 9. Cambiar color del texto de la tabla si ambos botones han sido clicados
    function checkButtonClicks() {
        if (boton1Clicked && boton2Clicked) {
            $('td').css('color', 'green');
        }
    }

    $('#boton2').click(function() {
        boton2Clicked = true;
        checkButtonClicks();
    });

    // 10. Ocultar Real Madrid CF al inicio y mostrarlo con un botón
    $("#real-madrid").hide(); // Ya está oculto por la clase 'hidden'
    $('<button id="mostrarRealMadrid">Mostrar Real Madrid CF</button>').appendTo('body').click(function() {
        $('#real-madrid').toggle();
    });
});
