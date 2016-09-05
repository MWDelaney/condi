<?php

/**
 * Condition
 *
 * The conditional function for the project. Must return "true" if the condition is met.
 */
 if (basename($_SERVER['PHP_SELF']) == basename(__FILE__)) { die(); };

namespace Condi\Condition;

/**
 * The conditional function.
 * If this function returns true, the "True" template will be displayed.
 * Otherwise the "False" template will be displayed.
 *
 * Uncomment and modify the example you wish to use, or write your own conditional statement
 * @return boolean
 */
function condition() {

	/**
	 * Birthday example
	 * Returns true if today is the day (month and day) of the the value in $birthdate
	 *
	 *  $birthdate = '1979-07-01'; // The birthday to check for
	 *  $time = strtotime($birthdate);
	 *  if(date('m-d') == date('m-d', $time)) {
	 *  	return true;
	 *  }
	 *
	 */

	 /**
		* Date range example
		* Returns true if today is between $firstday and $lastday
		*
		*  $current_time = time();
		*  $firstday = strtotime("22 September");
		*  $lastday = strtotime("21 December");
		*  if(($current_time >= $firstday && $current_time <= $lastday)){
		*  		return true;
		*  }
		*
		*/

	/**
	 * Demo conditional, always returns true
	 * @var integer
	 */
	$i = 1;
	if($i) {
		return true;
	}
}
