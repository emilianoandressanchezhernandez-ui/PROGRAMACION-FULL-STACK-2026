<?php
$productos = [
    [ "nombre"=> "Teclado", "precio"=> 1200, "stock"=> 5, "id" => 0],
    [ "nombre"=> "PC", "precio"=> 20000, "stock"=> 0, "id" => 1],
    [ "nombre"=> "Mouse", "precio"=> 800, "stock"=> 10, "id" => 2]
];

function obtenerProductosConStock($productos){
    $productosConStock = [];
    foreach ($productos as $producto) {
        if ($producto["stock"] > 0) {
            $productosConStock[] = $producto;
        }
    }
    return $productosConStock;
}

$productosDisponibles = obtenerProductosConStock($productos);
foreach ($productosDisponibles as $producto) {
    echo "Producto: " . $producto["nombre"] . ", Precio: " . $producto["precio"] . ", Stock: " . $producto["stock"] . "\n";
}