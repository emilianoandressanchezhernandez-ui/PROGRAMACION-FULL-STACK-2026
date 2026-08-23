<?php
$notas = [ 3, 5, 7, 9, 10, 2, 4, 6, 8, 1];

echo "Notas: \n";
function mostrarNotas($notas){
    foreach ($notas as $nota) {
        echo $nota . "\n";
    }
}
mostrarNotas($notas);

function Promedio($notas){
    $suma = 0;
    foreach ($notas as $nota) {
        $suma += $nota;
    }
    return $suma / count($notas);
}
echo "Promedio: ". Promedio($notas) ."\n";

function notaMasAlta($notas){
    $notaMaxima = $notas[0];
    foreach ($notas as $nota) {
        if ($nota > $notaMaxima) {
            $notaMaxima = $nota;
        }
    }
    return $notaMaxima;
}
echo "Nota más alta: ". notaMasAlta($notas) ."\n";

function notaMasBaja($notas){
    $notaMinima = $notas[0];
    foreach ($notas as $nota) {
        if ($nota < $notaMinima) {
            $notaMinima = $nota;
        }
    }
    return $notaMinima;
}
echo "Nota más baja: ". notaMasBaja($notas) ."\n";

function contarAprobados($notas){
    $aprobados = 0;
    foreach ($notas as $nota) {
        if ($nota >= 5) {
            $aprobados++;
        }
    }
    return $aprobados;
}
echo "Aprobados: ". contarAprobados($notas) ."\n";

function contarDesaprobados($notas){
    $desaprobados = 0;
    foreach ($notas as $nota) {
        if ($nota < 5) {
            $desaprobados++;
        }
    }
    return $desaprobados;
}
echo "Desaprobados: ". contarDesaprobados($notas) ."\n";


// podria poner las llamadas a las funciones de ultimo y todas juntas, pero ta, me quedó para ir descartanto puntos