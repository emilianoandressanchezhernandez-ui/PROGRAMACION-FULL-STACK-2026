<?php
$productos = [
    [ "nombre"=> "Alfajor", "precio"=> 20, "stock"=> 5, "id" => 0, "categoria" => "Comida"],
    [ "nombre"=> "PC", "precio"=> 20000, "stock"=> 3, "id" => 1, "categoria" => "Electrónica"],
    [ "nombre"=> "Mesa", "precio"=> 800, "stock"=> 0, "id" => 2, "categoria" => "Muebles"]
];

function mostrarProductos($productos){
    foreach ($productos as $producto) {
        echo $producto["nombre"] . ", Precio: " . $producto["precio"] . ", Stock: " . $producto["stock"] . ", Categoria: " . $producto["categoria"] . "\n";
    }
}

function productosPorStock($productos){
    $productosConStock = [];
    foreach ($productos as $producto) {
        if ($producto["stock"] > 0) {
            $productosConStock[] = $producto;
        }
    }
    return $productosConStock;
}

function buscarProductoPorId($productos, $id){
    foreach ($productos as $producto) {
        if ($producto["id"] === $id) {
            return $producto;
        }
    }
    return null;
}

function calcularValorInventario($productos){
    $totalInventario = 0;
    foreach($productos as $producto){
        $totalInventario += $producto["precio"] * $producto["stock"];
    }
    return $totalInventario;
}

function obtenerProductoMasCaro($productos){
    $productoMasCaro = null;
    foreach ($productos as $producto){
        if($productoMasCaro === null || $producto["precio"] > $productoMasCaro["precio"]) {
            $productoMasCaro = $producto;
            }
    }
    return $productoMasCaro;
}

echo "Productos:  \n";
mostrarProductos($productos);

echo "\nProductos con stock:\n";
$productosDisponibles = productosPorStock($productos);
foreach ($productosDisponibles as $producto) {
    echo $producto["nombre"] . "\n";
}

echo "Producto buscado por id: \n";
$producto = buscarProductoPorId($productos, 1);
if($producto !== null){
    echo "Nombre: ". $producto["nombre"]. "\n";
} else {
    echo "El producto con el id buscado no existe \n";
}

echo "valor inventario: \n";
$total = calcularValorInventario($productos);
echo "$".$total . "\n";

echo "Producto más caro: \n";
$masCaro = obtenerProductoMasCaro($productos);
echo $masCaro["nombre"] . "\n";