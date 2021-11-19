<?php

if (!defined('ABSPATH'))
    exit;
responsive_tabs_with_accordions_user_capabilities();

$styledata = Array('id' => 13, 'style_name' => 'style13', 'css' => 'heading-font-size |20| heading-font-color |#ffffff| heading-background-color |rgba(186, 186, 186, 1)| heading-font-active-color |#ffffff| heading-background-active-color |rgba(185, 0, 209, 1)|heading-font-familly |Open+Sans| heading-font-weight |500| heading-text-align |center| heading-width |200| heading-padding |15| heading-margin-right |10| heading-margin-bottom |15| heading-border-radius |30| heading-box-shadow-Blur |10| heading-box-shadow-color |rgba(212, 212, 212, 1)| content-font-size |16| content-font-color |#666666| content-background-color || content-padding-top |30| content-padding-right |30| content-padding-bottom |30| content-padding-left |30| content-line-height |1.5| content-font-familly |Open+Sans| content-font-weight |300| content-font-align |center| content-border-radius |0|content-box-shadow-Blur |0| content-box-shadow-color |rgba(196, 196, 196, 1)| heading-font-style |normal| content-box-shadow-Horizontal |0| content-box-shadow-Vertical |0| content-box-shadow-Spread |0| heading-box-shadow-Horizontal |0| heading-box-shadow-Vertical |0| heading-box-shadow-Spread |0| custom-css ||||||||||');
$listdata = Array(
    0 => Array('id' => 1, 'styleid' => 13, 'title' => 'Default Title', 'files' => '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus laoreet sapien quis ultrices. Vestibulum id pretium mauris. Ut et vehicula lorem. Sed eget tincidunt quam, non volutpat est. Suspendisse eu neque quis nibh tincidunt dapibus sodales a purus. Praesent consectetur, velit eget pharetra convallis, arcu felis porta velit, at feugiat ex nunc scelerisque mauris. Phasellus tempus odio id diam pretium, ultricies feugiat dolor consequat. Nullam ullamcorper est eu erat faucibus maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>  <p>&nbsp;</p> <p>Maecenas condimentum ut erat vel tempus. Praesent rhoncus ac enim vitae iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam accumsan sem eget congue mollis. Suspendisse eu libero tortor. Integer semper laoreet ante, at fermentum eros. Vestibulum convallis neque eget dolor auctor maximus. Ut varius venenatis nisl quis tempor. Aliquam feugiat turpis vel tristique scelerisque. Phasellus egestas commodo tortor, ut cursus urna cursus ut. Nullam vestibulum eget purus eget congue. Donec non placerat erat.</p>', 'css' => 'fas fa-address-book'),
    1 => Array('id' => 2, 'styleid' => 13, 'title' => 'Default Title', 'files' => '<p>Maecenas condimentum ut erat vel tempus. Praesent rhoncus ac enim vitae iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam accumsan sem eget congue mollis. Suspendisse eu libero tortor. Integer semper laoreet ante, at fermentum eros. Vestibulum convallis neque eget dolor auctor maximus. Ut varius venenatis nisl quis tempor. Aliquam feugiat turpis vel tristique scelerisque. Phasellus egestas commodo tortor, ut cursus urna cursus ut. Nullam vestibulum eget purus eget congue. Donec non placerat erat.</p>  <p>&nbsp;</p> <p>Vestibulum consectetur erat eu lectus convallis, et fringilla erat tempus. Nunc eget mauris non massa rutrum eleifend ac sed tortor. Maecenas in nunc eu turpis porta aliquet. Sed vel tortor quis libero rhoncus ultricies. Morbi pretium mi nibh, eget ultricies dolor porttitor vitae. Curabitur consectetur id eros imperdiet euismod. Sed ac justo nec magna pellentesque malesuada non quis purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean malesuada diam vel faucibus pulvinar. Pellentesque eget feugiat mi. Pellentesque vehicula imperdiet justo et tincidunt. Fusce et dui sapien. Nunc vulputate est sed tortor accumsan, ut venenatis arcu finibus. Vestibulum dignissim arcu eget lectus sagittis, nec faucibus libero feugiat.</p>', 'css' => 'fab fa-algolia'),
    2 => Array('id' => 3, 'styleid' => 13, 'title' => 'Default Title', 'files' => '<p>Vestibulum consectetur erat eu lectus convallis, et fringilla erat tempus. Nunc eget mauris non massa rutrum eleifend ac sed tortor. Maecenas in nunc eu turpis porta aliquet. Sed vel tortor quis libero rhoncus ultricies. Morbi pretium mi nibh, eget ultricies dolor porttitor vitae. Curabitur consectetur id eros imperdiet euismod. Sed ac justo nec magna pellentesque malesuada non quis purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean malesuada diam vel faucibus pulvinar. Pellentesque eget feugiat mi. Pellentesque vehicula imperdiet justo et tincidunt. Fusce et dui sapien. Nunc vulputate est sed tortor accumsan, ut venenatis arcu finibus. Vestibulum dignissim arcu eget lectus sagittis, nec faucibus libero feugiat.</p> <p>&nbsp;</p> <p>Vestibulum congue feugiat suscipit. Mauris tempor magna arcu, sit amet convallis enim consequat vitae. Pellentesque et turpis nec neque mattis mattis. Aliquam sed varius purus. Sed ultricies tellus sapien, sit amet viverra lorem viverra non. Vivamus in venenatis erat, at scelerisque lacus. Etiam porttitor placerat ligula a condimentum. Sed tempor sed sem at dignissim.</p>', 'css' => 'fab fa-adn'),
    3 => Array('id' => 4, 'styleid' => 13, 'title' => 'Default Title', 'files' => '<p>Vestibulum congue feugiat suscipit. Mauris tempor magna arcu, sit amet convallis enim consequat vitae. Pellentesque et turpis nec neque mattis mattis. Aliquam sed varius purus. Sed ultricies tellus sapien, sit amet viverra lorem viverra non. Vivamus in venenatis erat, at scelerisque lacus. Etiam porttitor placerat ligula a condimentum. Sed tempor sed sem at dignissim.</p>    <p>&nbsp;</p>       <p>Fusce sed pellentesque ligula, non tincidunt nunc. In sit amet lacus id lorem molestie consequat. Sed volutpat maximus ex, a ornare felis posuere sit amet. In condimentum posuere fringilla. Fusce suscipit nunc at mi posuere cursus. Sed facilisis egestas varius. Integer tristique ornare placerat. Vestibulum posuere a massa nec pulvinar. Donec nec odio ipsum. Nam tempus dignissim lobortis.</p>', 'css' => 'fas fa-ambulance')
);
echo '<input type="hidden" name="oxi-tabs-data-' . $styledata['id'] . '" id="oxi-tabs-data-' . $styledata['id'] . '" value="' . $styledata['css'] . '">';
echo ctu_admin_style_layouts($styledata, $listdata);
