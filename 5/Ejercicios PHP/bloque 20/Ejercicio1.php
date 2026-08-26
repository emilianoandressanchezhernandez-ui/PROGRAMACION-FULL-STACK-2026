<?php
$persona = ["nombre" => "emiliano", "edad" => 18, "ciudad" => "San Jose", "sexo" => "hombre"];

$json = json_encode($persona);

echo $json;