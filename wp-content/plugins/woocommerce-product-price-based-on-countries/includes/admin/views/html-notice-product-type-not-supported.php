<?php
/**
 * Admin View: Notice - Product type NOT supported
 *
 * @package WCPBC/Views
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<p style="display:none;border-left-color:#ffb900;position:relative;" class="notice-pbc wc-price-based-country-upgrade-notice wc-pbc-show-if-not-supported product-type-<?php echo esc_attr( $value ); ?>">
	<a style="padding: 12px;text-decoration:none;" class="notice-dismiss pbc-hide-notice" data-nonce="<?php echo esc_attr( wp_create_nonce( 'pbc-hide-notice' ) ); ?>" data-notice="<?php echo esc_attr( $notice ); ?>" href="#"></a>
	<?php
		// translators: HTML tags.
		printf( esc_html( __( 'Hi, this product type is not supported by %1$sPrice Based on Country%2$s. Use it with caution.', 'wc-price-based-country' ) ), '<strong>', '</strong>' );
	?>
</p>
