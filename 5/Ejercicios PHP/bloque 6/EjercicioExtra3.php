<?php
$num1 = 10;
$num2 = 5;
$opcion = 5;

switch($opcion) {
    case 1:
        $resultado = $num1 + $num2;
        echo "resultado de la suma: ". $resultado;
        break;
    case 2:
        $resultado = $num1 - $num2;
        echo "resultado de la resta: ". $resultado;
        break;
    case 3:
        $resultado = $num1 * $num2;
        echo "resultado de la multiplicación: ". $resultado;
        break;
    case 4:
        $resultado = $num1 / $num2;    
        echo "resultado de la división: ". $resultado;
        break;
    default:
        echo "Opción incorrecta.";
        break;
}