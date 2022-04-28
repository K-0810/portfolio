document.body.classList.toggle('js-drawer');

document.addEventListener('DOMContentLoaded', function(event) {
	const drawer = document.getElementById('drawer');

	drawer.setAttribute('aria-expanded', 'false');
	drawer.onclick = function() {
		if(this.getAttribute('aria-expanded') == 'false') {
			this.setAttribute('aria-expanded', 'true');
		}else{
			this.setAttribute('aria-expanded', 'false');
		}
	}
});


// accessible hamburger menu
// https://www.youtube.com/watch?v=5ewZ5ej1rmo
// https://glitch.com/edit/#!/site-navigation?path=index.html%3A36%3A11

// https://shibajuku.net/make-hamburger-button/
// https://qiita.com/s-kato/items/d101e6c1a94dc9d55dba