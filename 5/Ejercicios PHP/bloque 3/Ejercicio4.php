<?php
$stockDisponible = 10;
$cantidadSolicitada = 5;
$precio = 25;
$presupuestoCliente = 100;

if ($cantidadSolicitada <= $stockDisponible) {
    $costoTotal = $cantidadSolicitada * $precio;

    if ($costoTotal <= $presupuestoCliente) {
        echo "Podes comprar. Costo total: $" . $costoTotal;
    } else {
        echo "Te falta plata. Costo total: $" . $costoTotal;
    }
} else {
    echo "No hay suficiente stock disponible.";
}