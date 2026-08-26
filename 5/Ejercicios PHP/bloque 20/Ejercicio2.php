<?php
$productos = [
    [ "nombre"=> "Teclado", "precio"=> 1200, "stock"=> 5, "id" => 0],
    [ "nombre"=> "PC", "precio"=> 20000, "stock"=> 3, "id" => 1],
    [ "nombre"=> "Mouse", "precio"=> 800, "stock"=> 10, "id" => 2]
];

$json = json_encode($productos);
echo $json;