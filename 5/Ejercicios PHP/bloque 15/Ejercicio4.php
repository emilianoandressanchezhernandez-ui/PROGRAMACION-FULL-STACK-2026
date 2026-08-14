<?php
$producto = [
    "nombre"=> "Teclado",
    "precio"=> 1200,
    "stock"=> 5
];
$cantProducSoli = 3;

if ($cantProducSoli <= $producto["stock"]){
    $total = $cantProducSoli * $producto["precio"];

    $producto["stock"] -= $cantProducSoli;

    echo "venta: \n";
    echo "producto: ". $producto["nombre"]. "\n";
    echo "cantidad: ". $cantProducSoli. "\n";
    echo "total: $". $total. "\n";
    echo "stock restante: ". $producto["stock"]. "\n";
} else {
    echo "no hay suficiente stock para realizar la venta.\n";
}