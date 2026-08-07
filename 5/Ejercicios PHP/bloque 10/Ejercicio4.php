<?php
$precio = 200;
$cantidad = 3;
function calcularTotal($precio, $cantidad) {
    $total = $precio * $cantidad;
    return $total;
}
echo calcularTotal($precio, $cantidad);