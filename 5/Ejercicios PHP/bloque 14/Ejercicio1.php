<?php
$nums = [5, 10, 15, 20, 25];
$suma = 0;
$cantidad = count($nums);

for($i = 0; $i < $cantidad; $i++) {
    $suma += $nums[$i];
}
$promedio = $suma / $cantidad;
echo "suma total: $suma \n";
echo "cantidad de elementos: $cantidad \n";
echo "promedio: $promedio \n";
