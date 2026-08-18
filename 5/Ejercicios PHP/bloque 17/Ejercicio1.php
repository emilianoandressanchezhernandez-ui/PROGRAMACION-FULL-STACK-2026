<?php
$productos = [
    [ "nombre"=> "Teclado", "precio"=> 1200, "stock"=> 5],
    [ "nombre"=> "PC", "precio"=> 20000, "stock"=> 3],
    [ "nombre"=> "Mouse", "precio"=> 800, "stock"=> 10]
];
$buscarProducto = "Mouse";
$encontrado = false;
foreach ($productos as $producto) {
    if ($producto["nombre"] == $buscarProducto) {
        echo "Producto encontrado: " . $producto["nombre"] . ", Precio: $" . $producto["precio"] . ", Stock: " . $producto["stock"] . "\n";
        $encontrado = true;
        break;
    }
}
if (!$encontrado) {
    echo "Producto no encontrado: " . $buscarProducto . "\n";
}
