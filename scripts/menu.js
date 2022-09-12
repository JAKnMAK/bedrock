(function() {
	let submenus = document.querySelectorAll('.menu ul');

	submenus.forEach(submenu => {
		submenu.insertAdjacentHTML('beforebegin', '<button aria-label="open submenu">\uf107</button>');
    submenu.parentNode.classList.add('has-submenu');

		let button = submenu.parentNode.querySelector('button');
		button.addEventListener("click", function(event) {
			if (submenu.classList.contains('is-open')) {
				submenu.classList.remove('is-open');
			}
			else {
				submenu.classList.add('is-open');
			}

			this.innerText = (submenu.classList.contains('is-open') ? "\uf105" : "\uf107");

			event.preventDefault();
		});
	});
}());
