<?php
$notas = [5, 4, 3, 9, 10];

for($i = 0; $i < count($notas); $i++){
    if($notas[$i] >= 5){
        echo "tu nota es: $notas[$i] y estas aprobado \n";        
    } elseif($notas[$i] < 5){
        echo "tu nota es: $notas[$i] y estas reprobado \n";
    }
}