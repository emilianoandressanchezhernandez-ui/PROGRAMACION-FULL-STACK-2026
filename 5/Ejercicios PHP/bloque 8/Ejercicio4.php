<?php
$suma = 0;
for($i=1; $i<= 100; $i++){
    if($i % 3 == 0){
        $suma = $suma + $i;
    }
}
echo "la suma de los multiplos de 3 entre 1 y 100 es: ". $suma;