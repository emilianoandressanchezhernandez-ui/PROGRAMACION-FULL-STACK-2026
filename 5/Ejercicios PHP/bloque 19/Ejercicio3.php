<?php
$usuarios = [
    [
        "id" => 1,
        "nombre" => "Emiliano Sánchez",
        "usuario" => "emiliano",
        "contraseña" => "1234",
        "rol" => "admin",
        "activo" => true
    ],
    [
        "id" => 2,
        "nombre" => "Gabriel Rendon",
        "usuario" => "gabriel",
        "contraseña" => "abcd",
        "rol" => "profe",
        "activo" => true
    ],
    [
        "id" => 3,
        "nombre" => "Thiago Ferragut",
        "usuario" => "thiago",
        "contraseña" => "5678",
        "rol" => "alumno",
        "activo" => false
    ]
];

function buscarUsuario($usuarios, $nombreUsuario){
    foreach($usuarios as $usuario){
        if($usuario["usuario"] == $nombreUsuario){
            return $usuario;
        }
    }
    return null;
}

function comprobarContra($usuario, $contraseña){
    if($usuario["contraseña"] == $contraseña){
        return true;
    }
    return false;
}

function comprobarActivo($usuario){
    if($usuario["activo"] == true){
        return true;
    }
    return false;
}

function mostrarRol($usuario){
    if ($usuario["rol"] == "admin") {
        return "hola admin";
    } elseif ($usuario["rol"] == "profe") {
        return "hola profe";
    } elseif ($usuario["rol"] == "alumno") {
        return "hola alumno";
    } else {
        return "No se conoce el rol";
    }
}

// la unica function que recibe el array completo es buscarUsuario, esto porq si se encuentra el usuario buscado, lo guarda en $usuario, y las demas solo trabajan con ese usuario, si no se encuentra, no entra a las demas

$nombreUsuario = "gabriel";
$contraseña = "abcd";

$usuarioEncontrado = buscarUsuario($usuarios, $nombreUsuario);

if ($usuarioEncontrado == null) {
    echo "No se encontro al usuario";
} else {
    if (!comprobarContra($usuarioEncontrado, $contraseña)) {
        echo "Contraseña incorrecta";
    } else {
        if (!comprobarActivo($usuarioEncontrado)) {
            echo "El usuario está inactivo";
        } else {
            echo mostrarRol($usuarioEncontrado);
        }
    }
}