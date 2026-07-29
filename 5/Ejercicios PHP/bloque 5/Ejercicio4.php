<?php
$edad = 18;
$entrada = true;
$estaAcompañado = true;
if (($edad >= 18 && $entrada) || $estaAcompañado) {
    echo "Acceso permitido";
} else {
    echo "Acceso denegado";
}