<?php
  //make sure I have access to my DB functions
  require 'colorsDb.php';

  //get all colors
  $colors = getColors();

  //send them back to the client as JSON
  echo json_encode($colors);
?>