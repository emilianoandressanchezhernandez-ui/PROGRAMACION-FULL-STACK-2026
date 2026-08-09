<?php
$nombres = ["Emi", "Ro", "Augu", "Juan", "Glo"];
$encontrado = false;
$nomBuscado = "Glo";
for($i = 0; $i < count($nombres); $i++){
    if($nombres[$i] == $nomBuscado){
        $encontrado = true;
    }
}
if($encontrado){
    echo "El nombre " . $nomBuscado . " se encontró \n";
} else {
    echo "El nombre " . $nomBuscado . " no existe \n";
}

if(in_array($nomBuscado, $nombres)){
    echo "El nombre " . $nomBuscado . " se encontró \n";
} else {
    echo "El nombre " . $nomBuscado . " no existe \n";
}