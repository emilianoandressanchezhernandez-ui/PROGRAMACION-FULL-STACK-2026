<?php
$contPares = 0;
for($i=1; $i <= 50; $i++){
    if($i % 2 == 0){
        $contPares++;
    }
}
echo "cantidad totoal de pares: ". $contPares;