<?php
$nota1 = 2;
$nota2 = 8;
$nota3 = 3;
function calcularPromedio($nota1, $nota2, $nota3) {
    return ($nota1 + $nota2 + $nota3) / 3;
}
echo calcularPromedio($nota1, $nota2, $nota3) . "\n";

function esAprobado($promedio) {
    if ($promedio >= 6) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
echo esAprobado(calcularPromedio($nota1, $nota2, $nota3));