<?php
$productos = [
    [ "nombre"=> "Teclado", "precio"=> 1200, "stock"=> 5],
    [ "nombre"=> "PC", "precio"=> 20000, "stock"=> 3],
    [ "nombre"=> "Mouse", "precio"=> 800, "stock"=> 10]
];

foreach ($productos as $producto) {
    if($producto["precio"] > 1000){
    echo "Nombre: " . $producto["nombre"] . ", Precio: $" . $producto["precio"] . "\n";
    }
}