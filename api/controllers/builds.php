<?php
include_once __DIR__ . '/../models/build.php';
header('Content-Type: application/json');
if ($_REQUEST['action'] === 'index') {
  echo json_encode(Builds::all());
} elseif ($_REQUEST['action'] === 'post') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $new_build = new Build(
    null,  
    $body_object->cpu, 
    $body_object->cpucooler, $body_object->motherboard, 
    $body_object->memory, 
    $body_object->storage, 
    $body_object->videocard, 
    $body_object->compcase, 
    $body_object->powersupply, 
    $body_object->os, 
    $body_object->fan, 
    $body_object->monitor, 
    $body_object->keyboard, 
    $body_object->mouse); 
  $all_builds = Builds::create($new_build);
  echo json_encode($all_builds);
} else if ($_REQUEST['action'] === 'update'){
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_build = new Build(
    $_REQUEST['id'], 
    $body_object->cpu, 
    $body_object->cpucooler, 
    $body_object->motherboard, 
    $body_object->memory,
    $body_object->storage, 
    $body_object->videocard, 
    $body_object->compcase, 
    $body_object->powersupply, 
    $body_object->os, 
    $body_object->fan, 
    $body_object->monitor,
    $body_object->keyboard, 
    $body_object->mouse);
  $all_builds = Builds::update($updated_build);
  echo json_encode($all_builds);
  } else if ($_REQUEST['action'] === 'delete') {
    $all_builds = Builds::delete($_REQUEST['id']);
    echo json_encode($all_builds);
  }
 ?>