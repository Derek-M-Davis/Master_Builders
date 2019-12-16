<?php
$dbconn = pg_connect("host=localhost dbname=builds");

class Build {
  public $id;
  public $cpu;
  public $cpuCooler;
  public $motherboard;
  public $memory;
  public $storage;
  public $videoCard;
  public $compCase;
  public $powerSupply;
  public $os;
  public $fan;
  public $monitor;
  public $keyboard;
  public $mouse;
  public function __construct($id, $cpu, $cpuCooler, $motherboard, $memory, $storage, $videoCard, $compCase, $powerSupply, $os, $fan, $monitor, $keyboard, $mouse){
    $this->id = $id;
    $this->cpu = $cpu;
    $this->cpuCooler = $cpuCooler;
    $this->motherboard = $motherboard;
    $this->memory = $memory;
    $this->storage = $storage;
    $this->videoCard = $videoCard;
    $this->compCase = $compCase;
    $this->powerSupply = $powerSupply;
    $this->os = $os;
    $this->fan = $fan;
    $this->monitor = $monitor;
    $this->keyboard = $keyboard;
    $this->mouse = $mouse;
  }
}
class Builds {
  static function all(){
    $builds = array();
    $results = pg_query("SELECT * FROM builds");
    $row_object = pg_fetch_object($results);
    while($row_object){
      $new_build = new Build(
        intval($row_object->id),
        $row_object->cpu,
        $row_object->cpuCooler,
        $row_object->motherboard,
        $row_object->memory,
        $row_object->storage,
        $row_object->videoCard,
        $row_object->compCase,
        $row_object->powerSupply,
        $row_object->os,
        $row_object->fan,
        $row_object->monitor,
        $row_object->keyboard,
        $row_object->mouse      
      );
      $builds[] = $new_build;
      $row_object = pg_fetch_object($results);
    }
    return $builds;
  }
  static function create($build){
    $query = "INSERT INTO builds (cpu, cpuCooler ,motherboard, memory, storage, videoCard, compCase, powerSupply, os, fan, monitor, keyboard, mouse) VALUES ($1, $2, $3, $4, $5 ,$6 ,$7 ,$8 ,$9 ,$10 ,$11 ,$12 , $13)";
    $query_params = array($build->cpu, $build->cpuCooler, $build->motherboard,  $build->memory, $build->storage, $build->videoCard, $build->compCase, $build->powerSupply, $build->os, $build->fan, $build->monitor, $build->keyboard, $build->mouse);
    pg_query_params($query, $query_params);
    return self::all();
  }
  static function update($updated_build){
      $query = "UPDATE builds SET cpu = $1, cpuCooler = $2, motherboard = $3, memory = $4, storage = $5, videoCard = $6, compCase = $7, powerSupply = $8, os = $9, fan = $10, monitor = $11, keyboard = $12, mouse = $13 WHERE id = $14";
      $query_params = array($updated_build->cpu, $updated_build->cpuCooler, $updated_build->motherboard, $updated_build->memory, $updated_build->storage, $updated_build->videoCard, $updated_build->compCase, $updated_build->powerSupply, $updated_build->os, $updated_build->fan, $updated_build->monitor, $updated_build->keyboard, $updated_build->mouse, $updated_build->id);
      $result = pg_query_params($query, $query_params);
      return self::all();
    }
    static function delete($id){
      $query = "DELETE FROM builds WHERE id = $1";
      $query_params = array($id);
      $result = pg_query_params($query, $query_params);
      return self::all();
    }
}
 ?>