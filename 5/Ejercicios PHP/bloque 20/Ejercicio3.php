<?php
$producto = ["id" => 1, "nombre" => "Teclado", "precio" => 1000];

$respuesta = [
    "logrado" => true,
    "mensaje" => "Producto encontrado",
    "producto" => $producto
];

$json = json_encode($respuesta);

echo $json;