<?php

$composer_autoload = __DIR__ . '/vendor/autoload.php';
if ( file_exists( $composer_autoload ) ) {
	require_once $composer_autoload;
	$timber = new Timber\Timber();
}


require_once(__DIR__ . '/inc/setup.php');
require_once(__DIR__ . '/inc/helpers.php');
require_once(__DIR__ . '/inc/enqueue.php');