<?php
$productos = [
    [ "nombre"=> "Teclado", "precio"=> 1200, "stock"=> 5],
    [ "nombre"=> "PC", "precio"=> 20000, "stock"=> 3],
    [ "nombre"=> "Mouse", "precio"=> 800, "stock"=> 10]
];
$valorInventarioPorProducto = [];
$valorTotalInventario = 0;

echo "Valor del inventario por producto:\n";
foreach ($productos as $producto) {
    $valorInventarioPorProducto[$producto["nombre"]] = $producto["precio"] * $producto["stock"];
    $valorTotalInventario += $valorInventarioPorProducto[$producto["nombre"]];

    echo "Producto: " . $producto["nombre"] . ", Valor del inventario: $" . $valorInventarioPorProducto[$producto["nombre"]] . "\n";
}
echo "Valor total del inventario: $" . $valorTotalInventario . "\n";