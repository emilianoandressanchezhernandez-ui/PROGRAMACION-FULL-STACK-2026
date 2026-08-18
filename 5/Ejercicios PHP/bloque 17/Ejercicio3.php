<?php
$productos = [
    [ "nombre"=> "Teclado", "precio"=> 1200, "stock"=> 5, "id" => 0],
    [ "nombre"=> "PC", "precio"=> 20000, "stock"=> 3, "id" => 1],
    [ "nombre"=> "Mouse", "precio"=> 800, "stock"=> 10, "id" => 2]
];
$productoMasCaro = null;
foreach ($productos as $producto) {
    if ($productoMasCaro === null || $producto["precio"] > $productoMasCaro["precio"]) {
        $productoMasCaro = $producto;
    }
}
if ($productoMasCaro !== null) {
    echo "Producto más caro: " . $productoMasCaro["nombre"] . ", Precio: $" . $productoMasCaro["precio"] . "\n";
} else {
    echo "No hay productos disponibles \n";
}