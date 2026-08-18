<?php
$productos = [
    [ "nombre"=> "Teclado", "precio"=> 1200, "stock"=> 5, "id" => 0],
    [ "nombre"=> "PC", "precio"=> 20000, "stock"=> 3, "id" => 1],
    [ "nombre"=> "Mouse", "precio"=> 800, "stock"=> 10, "id" => 2]
];
$id = 3;

function buscarProductoPorId($productos, $id) {
    foreach ($productos as $producto) {
        if ($producto["id"] == $id) {
            return $producto;
        }
    }
    return null;
}
$productoEncontrado = buscarProductoPorId($productos, $id);
if ($productoEncontrado !== null) {
    echo "Producto encontrado: " . $productoEncontrado["nombre"] . ", Precio: " . $productoEncontrado["precio"] . ", Stock: " . $productoEncontrado["stock"];
} else {
    echo "Producto no encontrado.";
}