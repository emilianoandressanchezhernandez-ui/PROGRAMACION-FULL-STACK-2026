<?php
$producto = [
    "nombre"=> "Teclado",
    "precio"=> 1200,
    "stock"=> 5
];

echo "nombre: ". $producto["nombre"]. "\n";
echo "precio: $". $producto["precio"]. "\n";
echo "stock: ". $producto["stock"]. "\n";

$producto["precio"] += 300;
$producto["stock"] -= 3;
$producto["categoria"] = "Periféricos";

echo "producto actualizado: \n";
echo "nombre: ". $producto["nombre"]. "\n";
echo "precio: $". $producto["precio"]. "\n";
echo "stock: ". $producto["stock"]. "\n";
echo "categoria: ". $producto["categoria"]. "\n";