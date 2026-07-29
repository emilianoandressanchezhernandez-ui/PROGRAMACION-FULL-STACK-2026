<?php
$totalCompra = 5000;
if($totalCompra < 1000){
    echo "El total es: $totalCompra";
} elseif ($totalCompra >= 1000 && $totalCompra <= 4999) {
    $descuento = $totalCompra / 100 * 10;
    $totalConDescuento = $totalCompra - $descuento;
    echo "El total es: $$totalCompra y tiene un descuento del 10%, quedaría un total de $" .  $totalConDescuento . "\n";
    echo "el descuento equivale a $". $descuento;
} else {
    $descuento = $totalCompra / 100 * 20;
    $totalConDescuento = $totalCompra - $descuento;
    echo "El total es: $$totalCompra y tiene un descuento del 20%, quedaría un total de $" . $totalConDescuento . "\n";
    echo "el descuento equivale a $" . $descuento;
}