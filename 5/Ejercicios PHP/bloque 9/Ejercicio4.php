<?php
$ahorro = 0;
$mes = 0;
while ($ahorro <= 5000){
    $ahorro = $ahorro + 500;
    $mes++;
    echo "mes $mes: $" . $ahorro . "\n";
}
echo "para alcanzar o superar $5000 necesitas $mes meses \n";