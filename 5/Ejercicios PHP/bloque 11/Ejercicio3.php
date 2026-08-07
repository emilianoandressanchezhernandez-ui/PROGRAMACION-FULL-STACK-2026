<?php
$precio = 5000;
$descuento = 10;
function calcularPrecioFinal($precio, $descuento) {
    $precioFinal = $precio - ($precio / 100 * $descuento);
    return $precioFinal;
}
echo calcularPrecioFinal($precio, $descuento);