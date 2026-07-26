<?php
$precio = 100;
$presupuesto = 350;
$stock = 10;
$cantidadSolicitada = 8;
if (($precio * $cantidadSolicitada <= $presupuesto) && ($cantidadSolicitada <= $stock)) {
    echo "Compra realizada con éxito";
} else {
    echo "No se puede realizar la compra";
}