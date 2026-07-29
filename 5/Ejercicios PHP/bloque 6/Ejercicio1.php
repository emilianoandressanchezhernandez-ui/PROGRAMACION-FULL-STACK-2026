<?php
$edad = 20;
$entrada = 1000;
if ($edad > 12){
    $entrada = $entrada / 100 * 50;
}
echo "El precio de la entrada es: $entrada";