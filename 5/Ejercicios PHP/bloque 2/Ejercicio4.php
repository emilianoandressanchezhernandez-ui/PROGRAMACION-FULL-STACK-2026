<?php
$minutosCompletos = 330;
$horas = intdiv($minutosCompletos, 60); // intdiv() devuelve la parte entera de la división
$minutos = $minutosCompletos % 60;
echo "$minutosCompletos minutos son $horas horas y $minutos minutos.";