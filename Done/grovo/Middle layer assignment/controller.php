<?php
date_default_timezone_set('UTC');
require './activityModel.php';

$activity = new Activity();

$data = json_decode(file_get_contents('php://input'), true);

$activity->processEventRequest($data);
