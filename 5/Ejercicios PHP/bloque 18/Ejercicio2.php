<?php
$notas = [ 5, 1, 3, 8, 9];
function contarAprobados($notas){
    $aprobados = 0;
    foreach($notas as $nota){
        if($nota >= 6){
            $aprobados++;
        }
    }
    return $aprobados;
}
echo "las notas mayores o iguales a 6 son: " . contarAprobados($notas);