module.exports = function (hasSubmenu, block) {
	    if(hasSubmenu == "yes") {
				return '<li class="active"><a href="#">Försäkringar</a><ul><li><a href="#">Medlemsförsäkringar</a></li><li class="active"><a href="#">Avtalsförsäkringar</a></li><li><a href="#">För dig inom gruvavtalet</a></li></ul></li>'
			}else {
			 	return '<li><a href="#">Försäkringar</a></li>'
			}
};
