<?php
$nota = 9;
if ($nota == 11 || $nota == 12){
    echo "Excelente";
} elseif ($nota == 9 || $nota == 10){
    echo "Muy bueno";
} elseif ($nota >= 6 && $nota <=8 ){
    echo "Aprobado";
} elseif ($nota >= 0 && $nota < 6){
    echo "Insuficiente";
} else {
    echo "Nota inválida";
}