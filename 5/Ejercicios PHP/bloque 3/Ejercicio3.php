<?php
$numero = 10;
$texto = "10";

$comparacion1 = $numero == $texto; // compara si dos variables tienen el mismo valor
$comparacionIdentica2 = $numero === $texto; // compara si dos varuiables tienen el mismo valor y tipo

if ($comparacion1) {
    echo "El número y el texto son iguales en valor.\n";
} else {
    echo "El número y el texto no son iguales en valor.\n";
}

if ($comparacionIdentica2) {
    echo "El número y el texto son idénticos tanto en valor como en tipo.\n";
} else {
    echo "El número y el texto no son idénticos tanto en valor como en tipo.\n";
}