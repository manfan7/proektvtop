!(function (e) {
	function n(n) {
		for (
			var r, a, c = n[0], s = n[1], u = n[2], d = 0, f = [];
			d < c.length;
			d++
		)
			(a = c[d]),
				Object.prototype.hasOwnProperty.call(i, a) && i[a] && f.push(i[a][0]),
				(i[a] = 0);
		for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
		for (l && l(n); f.length; ) f.shift()();
		return o.push.apply(o, u || []), t();
	}
	function t() {
		for (var e, n = 0; n < o.length; n++) {
			for (var t = o[n], r = !0, c = 1; c < t.length; c++) {
				var s = t[c];
				0 !== i[s] && (r = !1);
			}
			r && (o.splice(n--, 1), (e = a((a.s = t[0]))));
		}
		return e;
	}
	var r = {},
		i = { 0: 0 },
		o = [];
	function a(n) {
		if (r[n]) return r[n].exports;
		var t = (r[n] = { i: n, l: !1, exports: {} });
		return e[n].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
	}
	(a.m = e),
		(a.c = r),
		(a.d = function (e, n, t) {
			a.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
		}),
		(a.r = function (e) {
			"undefined" != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(a.t = function (e, n) {
			if ((1 & n && (e = a(e)), 8 & n)) return e;
			if (4 & n && "object" == typeof e && e && e.__esModule) return e;
			var t = Object.create(null);
			if (
				(a.r(t),
				Object.defineProperty(t, "default", { enumerable: !0, value: e }),
				2 & n && "string" != typeof e)
			)
				for (var r in e)
					a.d(
						t,
						r,
						function (n) {
							return e[n];
						}.bind(null, r)
					);
			return t;
		}),
		(a.n = function (e) {
			var n =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return a.d(n, "a", n), n;
		}),
		(a.o = function (e, n) {
			return Object.prototype.hasOwnProperty.call(e, n);
		}),
		(a.p = "/");
	var c = (window.webpackJsonp = window.webpackJsonp || []),
		s = c.push.bind(c);
	(c.push = n), (c = c.slice());
	for (var u = 0; u < c.length; u++) n(c[u]);
	var l = s;
	o.push([4, 1]), t();
})([
	,
	function (e, n, t) {
		var r = t(2);
		"string" == typeof r && (r = [[e.i, r, ""]]);
		var i = { insert: "head", singleton: !1 };
		t(3)(r, i);
		r.locals && (e.exports = r.locals);
	},
	function (e, n, t) {},
	,
	function (e, n, t) {
		"use strict";
		t.r(n);
		t(0);
		var r = document,
			i = function (e) {
				var n =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
				return n.querySelectorAll(e);
			},
			o = function (e) {
				var n =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
				return n.querySelector(e);
			};
		function a(e, n, t, r) {
			var i = window.document.createElement("link"),
				o = n || window.document.getElementsByTagName("script")[0],
				a = window.document.styleSheets;
			return (
				(i.rel = "stylesheet"),
				(i.href = e),
				(i.media = "only x"),
				r && (i.onload = r),
				o.parentNode.insertBefore(i, o),
				(i.onloadcssdefined = function (e) {
					for (var n, t = 0; t < a.length; t++)
						a[t].href && a[t].href === i.href && (n = !0);
					n
						? e()
						: setTimeout(function () {
								i.onloadcssdefined(e);
						  });
				}),
				i.onloadcssdefined(function () {
					i.media = t || "all";
				}),
				i
			);
		}
		function c(e, n) {
			(e.onload = function () {
				(e.onload = null), n && n.call(e);
			}),
				"isApplicationInstalled" in navigator &&
					"onloadcssdefined" in e &&
					e.onloadcssdefined(n);
		}
		function s(e, n, t, r, i, o, a) {
			try {
				var c = e[o](a),
					s = c.value;
			} catch (e) {
				return void t(e);
			}
			c.done ? n(s) : Promise.resolve(s).then(r, i);
		}
		var u,
			l,
			d = {
				load:
					((u = regeneratorRuntime.mark(function e(n) {
						return regeneratorRuntime.wrap(function (e) {
							for (;;)
								switch ((e.prev = e.next)) {
									case 0:
										return e.abrupt(
											"return",
											new Promise(function (e, t) {
												n || t("".concat(n, " not found"));
												var r = document.createElement("script");
												(r.src = "./vendors/swiper/swiper-bundle.min.js"),
													o(".scripts-area").appendChild(r),
													(r.onload = function () {
														c(
															a("./vendors/swiper/swiper-bundle.min.css"),
															function (n) {
																return e(!0);
															}
														);
													});
											})
										);
									case 1:
									case "end":
										return e.stop();
								}
						}, e);
					})),
					(l = function () {
						var e = this,
							n = arguments;
						return new Promise(function (t, r) {
							var i = u.apply(e, n);
							function o(e) {
								s(i, t, r, o, a, "next", e);
							}
							function a(e) {
								s(i, t, r, o, a, "throw", e);
							}
							o(void 0);
						});
					}),
					function (e) {
						return l.apply(this, arguments);
					}),
				init: function (e) {
					new Swiper(e, {
						autoplay: { delay: 3e3 },
						speed: 1e3,
						spaceBetween: 30,
						effect: "fade",
						fadeEffect: { crossFade: !0 },
					});
				},
				init_test: function (e) {
					var n = 4;
					innerWidth <= 1230 && (n = 3),
						innerWidth <= 950 && (n = 2),
						innerWidth <= 630 && (n = 1),
						new Swiper(e, {
							slidesPerView: n,
							spaceBetween: 30,
							navigation: { nextEl: ".test-next", prevEl: ".test-prev" },
						});
				},
				init_portfolio: function (e) {
					var n = 4;

					new Swiper(e, {
						slidesPerView: n,
						loop: true,
						spaceBetween: 30,

						navigation: {
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						},
						breakpoints: {
							1500: {
								spaceBetween: 20,
								slidesPerView: 4,
							},
							980: {
								spaceBetween: 20,
								slidesPerView: 3,
							},
							640: {
								spaceBetween: 10,
								slidesPerView: 2,
							},
							0: {
								spaceBetween: 5,
								slidesPerView: 1,
							},
						},
					});
				},
				init_clients: function (e, n) {
					new Swiper(e, {
						breakpoints: {
							1110: {
								spaceBetween: 30,
								slidesPerView: 5,
							},
							850: {
								spaceBetween: 30,
								slidesPerView: 3,
							},
							630: {
								spaceBetween: 30,
								slidesPerView: 2,
							},
							0: {
								spaceBetween: 30,
								slidesPerView: 1,
							},
						},

						spaceBetween: 30,
						loop: true,
						navigation: {
							nextEl: ".clients_next".concat(n),
							prevEl: ".clients_prev".concat(n),
						},
					});
				},
				init_process: function (e) {
					new Swiper(e, {
						autoplay: { delay: 2e3 },
						speed: 1e3,
						spaceBetween: 30,
					});
				},
			};
		function f(e, n, t, r, i, o, a) {
			try {
				var c = e[o](a),
					s = c.value;
			} catch (e) {
				return void t(e);
			}
			c.done ? n(s) : Promise.resolve(s).then(r, i);
		}
		var p = {
			load: (function () {
				var e = (function (e) {
					return function () {
						var n = this,
							t = arguments;
						return new Promise(function (r, i) {
							var o = e.apply(n, t);
							function a(e) {
								f(o, r, i, a, c, "next", e);
							}
							function c(e) {
								f(o, r, i, a, c, "throw", e);
							}
							a(void 0);
						});
					};
				})(
					regeneratorRuntime.mark(function e() {
						return regeneratorRuntime.wrap(function (e) {
							for (;;)
								switch ((e.prev = e.next)) {
									case 0:
										return e.abrupt(
											"return",
											new Promise(function (e) {
												if (!o(".process")) return e(!1);
												var n = document.createElement("script");
												(n.src = "https://www.youtube.com/iframe_api"),
													o(".scripts-area").appendChild(n),
													(n.onload = function () {
														return e(!0);
													});
											})
										);
									case 1:
									case "end":
										return e.stop();
								}
						}, e);
					})
				);
				return function () {
					return e.apply(this, arguments);
				};
			})(),
			init: function () {
				window.YT.ready(function () {
					new window.YT.Player("player", {
						height: "945",
						width: "945",
						videoId: "M7lc1UVf-VE",
						playerVars: { autoplay: 0, loop: 1, mute: 1 },
						events: { onReady: v, onStateChange: w },
					});
				});
			},
			observe: function () {
				var e;
				document.addEventListener("yt", function (n) {
					return (e = n.detail.obj);
				}),
					new IntersectionObserver(
						function (n, t) {
							n[0].isIntersecting && e && e.playVideo();
						},
						{ threshold: 0.5 }
					).observe(o(".process"));
			},
		};
		function v(e) {
			var n = new CustomEvent("yt", { detail: { obj: e.target } });
			document.dispatchEvent(n);
		}
		function w(e) {
			var n = Object.entries(window.YT.PlayerState);
			console.log(
				n.find(function (n) {
					return n[1] === e.data;
				})[0]
			);
		}
		function h(e, n, t, r, i, o, a) {
			try {
				var c = e[o](a),
					s = c.value;
			} catch (e) {
				return void t(e);
			}
			c.done ? n(s) : Promise.resolve(s).then(r, i);
		}
		function g() {
			return (g = (function (e) {
				return function () {
					var n = this,
						t = arguments;
					return new Promise(function (r, i) {
						var o = e.apply(n, t);
						function a(e) {
							h(o, r, i, a, c, "next", e);
						}
						function c(e) {
							h(o, r, i, a, c, "throw", e);
						}
						a(void 0);
					});
				};
			})(
				regeneratorRuntime.mark(function e() {
					return regeneratorRuntime.wrap(function (e) {
						for (;;)
							switch ((e.prev = e.next)) {
								case 0:
									return (e.next = 2), d.load(o(".header-swiper"));
								case 2:
									if (((e.t0 = e.sent), !e.t0)) {
										e.next = 5;
										break;
									}
									d.init(o(".header-swiper .swiper")),
										d.init_test(o(".swiper.test-swiper")),
										d.init_portfolio(o(".swiper.swiper-portfolio")),
										d.init_clients(o(".swiper.clients-swiper1"), 1),
										d.init_clients(o(".swiper.clients-swiper2"), 2),
										d.init_process(o(".process-swiper"));
								case 5:
									return (e.next = 7), p.load();
								case 7:
									if (((e.t1 = e.sent), !e.t1)) {
										e.next = 10;
										break;
									}
									p.init(), p.observe();
								case 10:
									i("footer .hidden").forEach(function (e) {
										e.addEventListener("click", function (e) {
											var n = e.target.dataset.content;
											(e.target.innerHTML = n),
												e.target.classList.add("opened");
										});
									}),
										m(),
										y(),
										b(),
										E();
								case 15:
								case "end":
									return e.stop();
							}
					}, e);
				})
			)).apply(this, arguments);
		}
		function m() {
			if (!o("header .lang"))
				return (
					(e = "header .lang not found"),
					void console.log("%c ".concat(e), "color: #6c0101")
				);
			var e;
			o("header .lang .w").addEventListener("click", function (e) {
				o("header .lang").classList.toggle("open");
			}),
				i("header .lang ul li").forEach(function (e) {
					e.addEventListener("click", function (e) {
						(o(".lang .w label").innerHTML = e.target.dataset.label),
							o("img.selected").setAttribute("src", o("img", e.target).src),
							o("header .lang").classList.remove("open");
					});
				});
		}
		function y() {
			innerWidth > 940 ||
				i("header ul.c img").forEach(function (e) {
					e.addEventListener("click", function (e) {
						e.target.nextElementSibling.click();
					});
				});
		}
		function b() {
			o("img.burger") &&
				o("img.burger").addEventListener("click", function (e) {
					o("header").classList.toggle("open"),
						o(".mobile_menu").classList.toggle("open");
				});
		}
		function E() {
			function e() {
				innerWidth > 750 ||
					(o(".cases section").nextElementSibling &&
						"yellow" != !o(".cases section").nextElementSibling.classList[0] &&
						(o(".cases .yellow.more").remove(),
						o("#masonry").insertAdjacentHTML(
							"afterend",
							'<button class="yellow more">Смотреть еще</button>'
						)));
			}
			(window.onresize = function () {
				return e();
			}),
				e();
		}
		function x() {
			!(function () {
				g.apply(this, arguments);
			})();
		}
		"loading" !== document.readyState
			? x()
			: document.addEventListener("DOMContentLoaded", x);
		t(1);
	},
]);
