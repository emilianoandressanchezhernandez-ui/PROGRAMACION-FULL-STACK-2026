<?php
$nums = [5, 10, 15, 20, 25];
$suma = array_sum($nums);
$promedio = $suma / count($nums);
$mayor = max($nums);
$menor = min($nums);
$pares = 0;
$impares = 0;
for($i = 0; $i < count($nums); $i++) {
    if($nums[$i] % 2 == 0){
        echo "El número $nums[$i] es par \n";
        $pares++;
    } else {
        echo "El número $nums[$i] es impar \n";
        $impares++;
    }
}
echo "suma total: $suma \n";
echo "promedio: $promedio \n";
echo "mayor: $mayor \n";
echo "menor: $menor \n";
echo "cantidad de pares: $pares \n";
echo "cantidad de impares: $impares \n";