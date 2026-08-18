<?php
$productos = [
    [ "nombre"=> "Teclado", "precio"=> 1200, "stock"=> 5, "id" => 0],
    [ "nombre"=> "PC", "precio"=> 20000, "stock"=> 3, "id" => 1],
    [ "nombre"=> "Mouse", "precio"=> 800, "stock"=> 10, "id" => 2]
];
$idBuscado = 2;
foreach ($productos as $producto) {
    if ($producto["id"] === $idBuscado) {
        echo "Producto encontrado: " . $producto["nombre"] . ", Precio: $" . $producto["precio"] . ", Stock: " . $producto["stock"] . "\n";
        break; // para q no vuelva a recorrer el array una vez encontrado
    }
}
