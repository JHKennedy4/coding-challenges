<?php
require './activityModelCore.php';

class Activity extends activityModelCore
{

    // Process data from client request
    public function processEventRequest($data) {

        // $options = ['click', 'mouseover', 'dblclick'];
        // if (in_array($data['event'] 
        $this->saveUserEvent($data['user_id']);
        die($data['event']);
    }

    // Log user activity
    public function saveUserEvent($data) {
        // Imaginary call to a data store which understands SQL:
        // $success = query('Insert into userEvent (userId, eventType, timestamp) Values($data['userId'], $data['type'], Now())')
        $success = true; // Placeholder return value for purposes of this test
        return $success;
    }
}
