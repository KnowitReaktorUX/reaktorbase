module.exports = function (n, block) {
	var accum = '';
	for (var i = 0; i < n; ++i) {
		accum += block.fn(i);
	}
	return accum;
};
/*(function() {
	module.exports.register = function(Handlebars, options) {
		Handlebars.registerHelper('times', function (n, block) {
			var accum = '';
			for (var i = 0; i < n; ++i) {
				accum += block.fn(i);
			}
			return accum;
		});
	};
}).call(this);
*/
