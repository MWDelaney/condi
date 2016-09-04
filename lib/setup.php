<?php

use Condi\Condition;

$condi_includes = [
	'lib/config.php',    		// Configuration settings
	'lib/condition.php',    // The conditional functio
];
foreach ($condi_includes as $file) {
	require_once $file;
}
unset($file);

/**
 * Body classes
 */
function body_classes() {
	return (Condition\condition()) ? 'true' : '';
}
