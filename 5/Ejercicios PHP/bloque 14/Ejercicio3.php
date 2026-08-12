<?php
$notas = [5, 4, 3, 9, 10];
$cantidad = count($notas);
$aprobados = 0;
$desaprobados = 0;
for($i = 0; $i < $cantidad; $i++){
    if($notas[$i] >= 5){
        echo "tu nota es: $notas[$i] y estas aprobado \n";        
        $aprobados++;
    } elseif($notas[$i] < 5){
        echo "tu nota es: $notas[$i] y estas reprobado \n";
        $desaprobados++;
    }
}
$promedio = array_sum($notas) / $cantidad;
echo "cantidad de aprobados: $aprobados \n";
echo "cantidad de desaprobados: $desaprobados \n";
echo "promedio: $promedio \n";