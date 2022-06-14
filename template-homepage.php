<?php
/** Template Name: Homepage Template */
use Timber\Timber;
use Timber\Post;

get_header();

$context = Timber::context();

$timber_post     = new Post();
$context['post'] = $timber_post;

Timber::render( 'homepage.twig', $context );

get_footer();