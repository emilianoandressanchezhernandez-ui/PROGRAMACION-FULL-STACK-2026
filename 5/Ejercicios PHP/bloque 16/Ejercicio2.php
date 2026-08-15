<?php
$productos = [
    [ "nombre"=> "Teclado", "precio"=> 1200],
    [ "nombre"=> "PC", "precio"=> 20000],
    [ "nombre"=> "Mouse", "precio"=> 800]
];

$productos [0]["stock"] = 5;
$productos [1]["stock"] = 0;
$productos [2]["stock"] = 10;

foreach ($productos as $producto) {
    if($producto["stock"] > 0){
    echo "Nombre: " . $producto["nombre"] . ", Precio: $" . $producto["precio"] . ", Stock: " . $producto["stock"] . "\n";
    }
}