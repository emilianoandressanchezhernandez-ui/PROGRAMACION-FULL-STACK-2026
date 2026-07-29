<?php
$nomProducto = "Alfajor";
$precio = 25;
$stock = 20;
$cantidadSolicitada = 21;

if($stock >= $cantidadSolicitada && $cantidadSolicitada < 10){
    $precioTotal = $precio * $cantidadSolicitada;
    echo "El precio total es: $". $precioTotal;
} elseif ($cantidadSolicitada >= 10 && $cantidadSolicitada <= $stock) {
    $precioTotal = $precio * $cantidadSolicitada;
    $descuento = $precioTotal / 100 * 15;
    $precioConDescuento = $precioTotal - $descuento;
    echo "El precio total tiene un 15% de descuento, quedaría en $". $precioConDescuento;
} elseif ($cantidadSolicitada > $stock){
    echo "Error, no hay suficiente stock";
}