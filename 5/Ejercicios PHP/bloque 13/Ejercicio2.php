<?php
$notas = [ 3, 6, 7, 9, 10];
$contadorAlto = 0;
for($i = 0; $i < count($notas); $i++){
    if($notas[$i] >= 6 ){
        $contadorAlto++;
    }
}
echo "hay $contadorAlto notas mayores o iguales a 6 \n";