<?php
$num = [1, 2, 3, 4, 5];
for($i = 0; $i < count($num); $i++){
    if($num[$i] % 2 == 0){
        echo $num[$i] . " es par \n";
    }
}