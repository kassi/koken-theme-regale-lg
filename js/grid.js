$(function () { var n = $K.lazy.load, i = $K.lazy.init, o = !1, e = 0, t = parseInt($('#grid').attr('class').replace('col-', ''), 10), d = function (i) { i && n(); }, c = function (n) { $K.lazy.init(), setTimeout(function () { $K.lazy.load(!0); $(window).trigger('grid-loaded'); }, 100); }, a = $('<div/>').css('width', '100%').addClass('column condensed'); $K.lazy.load = d, $K.lazy.init = i, (function () { for (var n = '', i = 0, o = t; i < o; i++)n += $('#grid').html(); $('#grid').html(n); }()); var l = function () { o = !1, $('#container > .item').each(function (n, i) { var o = $('.column:eq(' + e + ')'); $(i).appendTo(o), o.find('.item:last').clone().appendTo(a), e = e + 1 >= t ? 0 : e + 1; }), window.setTimeout(function () { var n, i; $('.column').each(function (o, e) { (!n || $(e).outerHeight(!0) > n.outerHeight(!0)) && (n = $(e)), (!i || $(e).outerHeight(!0) < i.outerHeight(!0)) && (i = $(e)); }); var o = n.find('.item:last'); o.css('display', 'none'), window.setTimeout(function () { n.outerHeight(!0) - i.outerHeight(!0) > i.outerHeight(!0) / 3 && o.appendTo(i), o.css('display', 'block'), d(!0); }, 1); }, 50); }; $(window).off('.rjs').on('k-scroll.rjs', function () { return d(!0), !o && void (($(document).scrollTop() + $('#grid').offset().top > $('#grid').offset().top + $('#grid').height() - 3 * $(window).height() || $('.k-lazy-loading').length < 15) && (o = !0, $K.infinity.next())); }), $K.infinity.check = $.noop; var r, s = function () { clearTimeout(r), !window.matchMedia || window.matchMedia('(min-width: 767px)').matches ? ($('.column').show(), $('.column.condensed').hide()) : ($('.column.condensed').length ? $('.column.condensed').show() : $('.column').parent().append(a), $('.column:not(".condensed")').hide()), c(), $K.responsiveImages(); }; $(window).on('k-infinite-loaded', l).trigger('k-infinite-loaded'), $(window).on('resize', function () { clearTimeout(r), r = window.setTimeout(s, 200); }).trigger('resize'), c(); });
