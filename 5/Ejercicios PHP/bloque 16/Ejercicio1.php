<?php
$productos = [
    [ "nombre"=> "Teclado", "precio"=> 1200],
    [ "nombre"=> "PC", "precio"=> 20000],
    [ "nombre"=> "Mouse", "precio"=> 800]
];

foreach ($productos as $producto) {
    echo "Nombre: " . $producto["nombre"] . ", Precio: $" . $producto["precio"] . "\n";
}