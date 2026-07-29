<?php
$precioUnitario = 100;
$cantidadComprada = 5;
$precioTotal = $precioUnitario * $cantidadComprada;

if ($cantidadComprada >= 5){
    $descuento = $precioTotal / 100 * 10;
    $precioTotal = $precioTotal - $descuento;
    echo "El descuento es: $$descuento \n";
}
echo "subtotal es: $" . ($precioUnitario * $cantidadComprada) . "\n";
echo "El precio total es: $$precioTotal";