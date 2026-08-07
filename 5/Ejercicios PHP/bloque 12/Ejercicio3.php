<?php
$precios = [5, 10, 15, 20, 25]; 
foreach ($precios as $precio) {
    echo "El precio es: $$precio \n";
}
echo count($precios) . " hay precios en total";