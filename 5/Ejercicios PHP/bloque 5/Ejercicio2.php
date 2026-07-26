<?php
$rol1 = "Administrador";
$rol2 = "Docente";
if ($rol1 == "Administrador" || $rol2 == "Docente") {
    echo "Acceso permitido";
} else {
    echo "Acceso denegado";
}