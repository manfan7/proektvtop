/*меню*/
jQuery(document).ready(function ($) {
	/*мобильное	меню*/
	$(".mobil-menu .parent>a").each(function (i, elem) {
		$(this)
			.clone()
			.wrap('<li class="two-parent"></li>')
			.parent()
			.prependTo($(this).next());
	});

	/*	let parentItem = $('.mobil-menu .parent').index();
	console.log (parentItem);
	$('.mobil-menu .parent>a').clone().wrap('<li class="two-parent"></li>').parent().prependTo($('.mobil-menu .parent>a').next());		*/
	$(".mobil-menu .dl-submenu li.two-parent").prepend(
		'<a href="#" class="dl-back"><img src="./assets/img/icons/icon_back.png" alt=""></a> <a href="#" class="closeMenu"><img src="./assets/img/icons/icon_cross.png" alt=""></a>'
	);

	$(".mobil-menu .two-parent a.closeMenu").click(function () {
		$(".mobile_menu").removeClass("open");
		$("header").removeClass("open");
	});

	$(".mobil-menu").dlmenu();
	tabs();
	//угол меню
});
document.addEventListener("click", (event) => {
	let mobileMenu = document.querySelector(".mobile_menu");
	let header = document.querySelector("header");
	if (
		!event.target.classList.contains("mobil-menu") &&
		mobileMenu.classList.contains("open") &&
		!event.target.classList.contains("burger")
	) {
		mobileMenu.classList.remove("open");
		header.classList.remove("open");
	}
});
const tabs = () => {
	function bindTabs(
		titleClass,
		contentClass,
		activeClass,
		startTitleClass,
		startContentClass
	) {
		const title = document.querySelectorAll(titleClass);
		const content = document.querySelectorAll(contentClass);
		const startTitle = document.querySelector(startTitleClass);
		const startContent = document.querySelector(startContentClass);

		// Обработчик кликов на табах
		title.forEach((item) =>
			item.addEventListener("click", () => {
				if (item.classList.contains(activeClass)) {
					return;
				}

				title.forEach((element) => {
					element.classList.remove(activeClass);
				});

				item.classList.add(activeClass);

				content.forEach((element) => {
					element.classList.remove(activeClass);
				});

				const activeContent = document.querySelector("#" + item.dataset.tab);
				activeContent.classList.add(activeClass);
			})
		);

		// При первой загрузке страницы, активны эти табы
		startTitle.classList.add(activeClass);
		startContent.classList.add(activeClass);
	}

	// Табы со знаменитостями
	bindTabs(
		".whyus__item-content--left",
		".tab-content",
		"active",
		'[data-tab="tab-1"]',
		"#tab-1"
	);
};

let acc = document.getElementsByClassName("toggleControl");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("activetoggle");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
