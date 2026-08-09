<?php
$num = [5, 10, 15, 20, 25];
$sumaFor = 0;
$sumaArray = 0;
for($i = 0; $i < count($num); $i++){
    $sumaFor += $num[$i];
}

echo "suma con for: $sumaFor \n";

$sumaArray = array_sum($num);
echo "suma con array_sum: $sumaArray \n";