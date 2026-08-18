<?php
$nums =[ 5, 10];
function sumarNumeros($nums){
    $suma = 0;
    foreach($nums as $num){
        $suma += $num;
    }
    return $suma;
}
echo sumarNumeros($nums);