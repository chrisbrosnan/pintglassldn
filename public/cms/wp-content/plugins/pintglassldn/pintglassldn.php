<?php
/**
 * @package PintglassLDN
 * @version 1.0
 */
/*
Plugin Name: PintglassLDN Functions
Plugin URI: https://pintglassldn.com
Description: Custom functions for PintglassLDN
Author: Chris Brosnan
Version: 1.0.0
Author URI: https://pintglassldn.com
*/

add_action('init', 'add_custom_post_types');
function add_custom_post_types(){
    register_post_type('venue',
        array(
            'labels' => [
                'name' => __('Venues'),
                'singular_name' => __('Venue')
            ],
            'public' => true,
            'has_archive' => true,
            'rewrite' => [
                'slug' => 'venues'
            ],
            'supports' => [
                'title', 'editor', 'thumbnail'
            ],
            'show_ui' => true,
        )
    );
    register_post_type('beverage',
        array(
            'labels' => array(
                'name' => __('Beverages'),
                'singular_name' => __('Beverage')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => [
                'slug' => 'venues'
            ],
            'supports' => [
                'title', 'editor', 'thumbnail'
            ],
            'show_ui' => true,
        )
    );
}

add_action('init', 'add_custom_taxonomies');
function add_custom_taxonomies(){
    register_taxonomy('location', 'venue',
        array(
            'labels' => [
                'name'          => __('Locations'),
                'singular_name' => __('Location')
            ],
            'hierarchical' => true,
        )
    );
    register_taxonomy('type', 'beverage',
        array(
            'labels' => [
                'name'          => __('Types'),
                'singular_name' => __('Type')
            ],
            'hierarchical' => true,
        )
    );
}
