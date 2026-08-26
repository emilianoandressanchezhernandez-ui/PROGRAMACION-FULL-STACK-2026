<?php
$productos = [
    [
        "nombre" => "Teclado",
        "precio" => 1000,
        "cantidad" => 2
    ],
    [
        "nombre" => "Mouse",
        "precio" => 500,
        "cantidad" => 3
    ],
    [
        "nombre" => "Auriculares",
        "precio" => 1500,
        "cantidad" => 1
    ]
];

function calcularSubtotal($producto){
    return $producto["precio"] * $producto["cantidad"];
}

function calcularTotal($productos){
    $total = 0;
    foreach ($productos as $producto) {
        $total += calcularSubtotal($producto); // llama a la otra function para no repetir codigo y suma los subtotales de cada producto
    }
    return $total;
}

function aplicarDescuento($total){
    if ($total > 3000) {
        return $total * 0.90; // es 10%
    }
    return $total;
}

$total = calcularTotal($productos);
$totalFinal = aplicarDescuento($total);

echo "LISTA DE PRODUCTOS COMPRADOS \n";
echo "--------------- \n";
foreach ($productos as $producto) {
    echo "Producto: " . $producto["nombre"] . "\n";
    echo "Precio: $" . $producto["precio"] . "\n";
    echo "Cantidad: " . $producto["cantidad"] . "\n";
    echo "Subtotal: $" . calcularSubtotal($producto) . "\n";
    echo "\n";
}

echo "Total de la compra: $" . $total . "\n";
echo "Total final con descuento por superar los $3000: $" . $totalFinal;