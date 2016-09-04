<?php
namespace Condi\Setup;

/** Config
*/
$title = "Condi, conditional site framework";

/**
 * Condition
 */
function condition() {
	return true;
}

/**
 * Body classes
 */
function classes() {
	return (condition()) ? 'true' : 'false';
}
