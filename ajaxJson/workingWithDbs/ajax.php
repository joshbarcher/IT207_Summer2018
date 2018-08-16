<?php
  //make sure I have access to my DB functions
  require 'colorsDb.php';

  switch ($_GET['command'])
  {
    case 'retrieve':
      getAllColors();
      break;
    case 'insert':
      insertNewColor();
      break;
  }

  //different types of commands are handled below...
  //************************************************

  function insertNewColor()
  {
    $name = $_GET['name'];
    $red = $_GET['red'];
    $green = $_GET['green'];
    $blue = $_GET['blue'];
    
    insertColor($name, $red, $green, $blue);
  }

  function getAllColors()
  {
    //get all colors
    $colors = getColors();

    //send them back to the client as JSON
    echo json_encode($colors);
  }
?>