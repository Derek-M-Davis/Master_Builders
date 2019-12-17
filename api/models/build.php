<?php
$dbconn = null;
if(getenv('DATABASE_URL')){
    $connectionConfig = parse_url(getenv('DATABASE_URL'));
    $host = $connectionConfig['host'];
    $user = $connectionConfig['user'];
    $password = $connectionConfig['pass'];
    $port = $connectionConfig['port'];
    $dbname = trim($connectionConfig['path'],'/');
    $dbconn = pg_connect(
        "host=".$host." ".
        "user=".$user." ".
        "password=".$password." ".
        "port=".$port." ".
        "dbname=".$dbname
    );
} else {
    $dbconn = pg_connect("host=localhost dbname=builds");
}

class Build {
  public $id;
  public $cpu;
  public $cpucooler;
  public $motherboard;
  public $memory;
  public $storage;
  public $videocard;
  public $compcase;
  public $powersupply;
  public $os;
  public $fan;
  public $monitor;
  public $keyboard;
  public $mouse;
  public function __construct($id, $cpu, $cpucooler, $motherboard, $memory, $storage, $videocard, $compcase, $powersupply, $os, $fan, $monitor, $keyboard, $mouse){
    $this->id = $id;
    $this->cpu = $cpu;
    $this->cpucooler = $cpucooler;
    $this->motherboard = $motherboard;
    $this->memory = $memory;
    $this->storage = $storage;
    $this->videocard = $videocard;
    $this->compcase = $compcase;
    $this->powersupply = $powersupply;
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
        $row_object->cpucooler,
        $row_object->motherboard,
        $row_object->memory,
        $row_object->storage,
        $row_object->videocard,
        $row_object->compcase,
        $row_object->powersupply,
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
    $query = "INSERT INTO builds (cpu, cpucooler ,motherboard, memory, storage, videocard, compcase, powersupply, os, fan, monitor, keyboard, mouse) VALUES ($1, $2, $3, $4, $5 ,$6 ,$7 ,$8 ,$9 ,$10 ,$11 ,$12 , $13)";
    $query_params = array($build->cpu, $build->cpucooler, $build->motherboard,  $build->memory, $build->storage, $build->videocard, $build->compcase, $build->powersupply, $build->os, $build->fan, $build->monitor, $build->keyboard, $build->mouse);
    pg_query_params($query, $query_params);
    return self::all();
  }
  static function update($updated_build){
      $query = "UPDATE builds SET cpu = $1, cpucooler = $2, motherboard = $3, memory = $4, storage = $5, videocard = $6, compcase = $7, powersupply = $8, os = $9, fan = $10, monitor = $11, keyboard = $12, mouse = $13 WHERE id = $14";
      $query_params = array(
        $updated_build->cpu, $updated_build->cpucooler, $updated_build->motherboard, $updated_build->memory, $updated_build->storage, $updated_build->videocard, $updated_build->compcase, $updated_build->powersupply, $updated_build->os,
        $updated_build->fan, $updated_build->monitor, $updated_build->keyboard, $updated_build->mouse,
        $updated_build->id);
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
