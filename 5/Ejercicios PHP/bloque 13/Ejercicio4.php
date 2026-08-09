<?php
$num = [5, 20, 23, -5, 4342, 122];
$mayor = $num[0];
for($i = 0; $i < count($num); $i++){
    if($num[$i] > $mayor){
        $mayor = $num[$i];
    }
}
echo "El número mayor es: $mayor \n";

$mayor = max($num);
echo "El número mayor es: $mayor \n";