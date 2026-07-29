<?php
$metodoPago = "transferencia";

switch ($metodoPago) {
    case "efectivo":
        echo "metodo de pago: efectivo \n";
        echo "descuento: 10%";
        break;

    case "tarjeta":
        echo "metodo de pago: tarjeta \n";
        echo "Descuento: Sin descuento,queda en precio normal";
        break;

    case "transferencia":
        echo "metodo de pago: transferencia \n";
        echo "descuento: 5%";
        break;
}