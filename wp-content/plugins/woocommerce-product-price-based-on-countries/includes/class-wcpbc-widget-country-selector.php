<?php
/**
 * WooCommerce Price Based Country Selector Widget.
 *
 * @version 1.8.0
 * @package WCPBC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


/**
 * WCPBC_Widget_Country_Selector Class
 */
class WCPBC_Widget_Country_Selector extends WC_Widget {

	/**
	 * Other countries text.
	 *
	 * @var string
	 */
	private static $_other_countries_text = '';

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->widget_description = __( 'A country switcher for your store.', 'wc-price-based-country' );
		$this->widget_id          = 'wcpbc_country_selector';
		$this->widget_name        = __( 'WooCommerce Country Switcher', 'wc-price-based-country' );
		$this->settings           = apply_filters( 'wc_price_based_country_widget_settings', array(
			'title'                      => array(
				'type'  => 'text',
				'std'   => __( 'Country', 'wc-price-based-country' ),
				'label' => __( 'Title', 'wc-price-based-country' ),
			),
			'other_countries_text'       => array(
				'type'  => 'text',
				'std'   => __( 'Other countries', 'wc-price-based-country' ),
				'label' => __( 'Other countries text', 'wc-price-based-country' ),
			),
			'remove_other_countries_pro' => array(
				'type'  => 'wcpbc_remove_other_countries_pro',
				'std'   => '',
				'label' => __( 'Remove "Other countries" from switcher.', 'wc-price-based-country' ),
			),
		) );

		add_action( 'woocommerce_widget_field_wcpbc_remove_other_countries_pro', array( $this, 'remove_other_countries_field' ), 10, 4 );

		parent::__construct();
	}

	/**
	 * Outputs the settings update form.
	 *
	 * @param string $key Field key.
	 * @param string $value Field value.
	 * @param array  $setting An array of settings.
	 * @param array  $instance Widget instance.
	 */
	public static function remove_other_countries_field( $key, $value, $setting, $instance ) {
	?>
		<p>
			<input class="checkbox" disabled="disabled" name="remove_other_countries_pro" type="checkbox" />
			<label style="opacity: 0.7;" for="remove_other_countries_pro"><?php echo esc_html( $setting['label'] ); ?></label>
			<span style="display: block; font-size: 12px; font-style: italic; margin-left: 22px;">
				<?php
					// Translators: HTML tags.
					printf( esc_html__( '%1$sUpgrade to Pro to remove Other countries%2$s', 'wc-price-based-country' ), '<a target="_blank" rel="noopener noreferrer" class="cta-button" href="https://www.pricebasedcountry.com/pricing/?utm_source=widget&amp;utm_medium=banner&amp;utm_campaign=Get_Pro">', '</a>' );
				?>
			</span>
		</p>
	<?php
	}

	/**
	 * Widget function.
	 *
	 * @see WP_Widget
	 * @param array $args Array of arguments.
	 * @param array $instance Widget instance.
	 * @return void
	 */
	public function widget( $args, $instance ) {

		$all_countries = WC()->countries->get_countries();
		$base_country  = wc_get_base_location();

		$countries[ $base_country['country'] ] = $all_countries[ $base_country['country'] ];

		foreach ( WCPBC_Pricing_Zones::get_zones() as $zone ) {
			foreach ( $zone->get_countries() as $country ) {
				if ( ! array_key_exists( $country, $countries ) ) {
					$countries[ $country ] = $all_countries[ $country ];
				}
			}
		}

		wcpbc_maybe_asort_locale( $countries );

		// Add other countries.
		$other_country               = key( array_diff_key( $all_countries, $countries ) );
		$countries[ $other_country ] = $instance['other_countries_text'];

		/**
		 * Allow developers filter the list of countries
		 */
		do_action_ref_array( 'wc_price_based_country_widget_before_selected', array( &$other_country, &$countries, $base_country['country'], $instance ) );

		// Set selected country and display.
		$selected_country = wcpbc_get_woocommerce_country();

		if ( ! array_key_exists( $selected_country, $countries ) ) {
			$selected_country = $other_country;
		}

		$widget_data = wp_json_encode( array(
			'instance' => $instance,
			'id'       => $this->widget_id,
		) );

		$this->widget_start( $args, $instance );

		echo '<div class="wc-price-based-country wc-price-based-country-refresh-area" data-area="widget" data-id="' . esc_attr( md5( $widget_data ) ) . '" data-options="' . esc_attr( $widget_data ) . '">';
		wc_get_template( 'country-selector.php', array(
			'countries'        => $countries,
			'selected_country' => $selected_country,
		), 'woocommerce-product-price-based-on-countries/', wcpbc()->plugin_path() . '/templates/' );
		echo '</div>';

		$this->widget_end( $args );
	}
}
?>
