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

add_action('init', 'create_venue_post_type');
function create_venue_post_type(){
    register_post_type('venue',
        array(
            'labels' => array(
                'name' => __('Venues'),
                'singular_name' => __('Venue')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'venues'),
        )
    );
}

add_action('init', 'create_beverage_post_type');
function create_beverage_post_type(){
    register_post_type('beverage',
        array(
            'labels' => array(
                'name' => __('Beverages'),
                'singular_name' => __('Beverage')
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'beverages'),
        )
    );
}
