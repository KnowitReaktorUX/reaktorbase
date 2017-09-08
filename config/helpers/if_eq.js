module.exports = function (a, b, block) {
		if (a == b) {
				return block.fn(this);
		} else {
				return block.inverse(this);
		}
};
