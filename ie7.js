/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'bloxflip\'">' + entity + '</span>' + html;
	}
	var icons = {
		'bfi-bulb': '&#xe908;',
		'bfi-bulb-outline': '&#xe909;',
		'bfi-logo': '&#xe900;',
		'bfi-logo-outline': '&#xe901;',
		'bfi-settings-outline': '&#xe906;',
		'bfi-settings': '&#xe907;',
		'bfi-unlock-outline': '&#xe902;',
		'bfi-unlock': '&#xe903;',
		'bfi-diamond': '&#xe904;',
		'bfi-diamond-outline': '&#xe905;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/bfi-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
