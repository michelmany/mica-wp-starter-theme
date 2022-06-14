<?php

add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );

function enqueue_scripts() {
	// CSS
	wp_enqueue_style( 'main', mix('main.css'), array(), '1.0.0', 'all' );

	// JS
	wp_enqueue_script( 'main', mix('main.js'), array(), '1.0.0', true );
}