<?php
$edad = 18;
function esMayorDeEdad($edad) {
    return $edad >= 18;
}
if (esMayorDeEdad($edad)) {
    echo "sos mayor";
} else {
    echo "sos menor";
}