<?php
$num = 5;
function esPar($num) {
    return $num % 2 == 0;
}
if (esPar($num)) {
    echo "El número es par";
} else {
    echo "El número es impar";
}