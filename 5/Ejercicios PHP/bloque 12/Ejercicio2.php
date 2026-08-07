<?php
$nombres = ["Emi", "Ro", "Juan", "Augu", "Mia"];
for ($i = 0; $i < count($nombres); $i++) {
    echo $nombres[$i] . "\n";
}
foreach ($nombres as $nombre) {
    echo $nombre . "\n";
}