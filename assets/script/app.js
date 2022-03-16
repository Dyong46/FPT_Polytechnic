var btnSearch = document.querySelector('.button-search')

btnSearch.addEventListener('click', function () {
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})