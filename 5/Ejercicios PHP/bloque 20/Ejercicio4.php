<?php
$productos = [
    [ "nombre"=> "Teclado", "precio"=> 1200, "stock"=> 5, "id" => 0],
    [ "nombre"=> "PC", "precio"=> 20000, "stock"=> 3, "id" => 1],
    [ "nombre"=> "Mouse", "precio"=> 800, "stock"=> 10, "id" => 2]
];

function buscarProductoPorId($productos, $id){
    foreach ($productos as $producto) {
        if ($producto["id"] == $id) {
            return $producto;
        }
    }
    return null;
}

$producto = buscarProductoPorId($productos, 3);

if ($producto !== null) {
    $respuesta = [
        "logrado" => true,
        "producto" => $producto
    ];
} else {
    $respuesta = [
        "logrado" => false,
        "mensaje" => "Producto no encontrado"
    ];
}

echo json_encode($respuesta);