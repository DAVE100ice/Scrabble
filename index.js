$(document).ready(function () {
	
	// Make Cells
	makeCells();

	// Add Cell Multipliers
	addMultipliers();
});

/**
 * Make cells
 */
function makeCells() {
	// Main board
	mainBoard = $('#main-board');

	// Run loop to multiply cell
	for(var i = 1; i <= 225; i++) {
		cell = '<div class="cell" id="cell-'+i+'"></div>';
		mainBoard.append(cell)
	}

	// Add test tiles
	$('#cell-87').addClass('tile').append('<span class="letter">T</span><span class="point">1</span>');
	$('#cell-88').addClass('tile').append('<span class="letter">E</span><span class="point">1</span>');
	$('#cell-89').addClass('tile').append('<span class="letter">S</span><span class="point">1</span>');
	$('#cell-90').addClass('tile').append('<span class="letter">T</span><span class="point">1</span>');
}

/**
 * Add cell multipliers
 */
function addMultipliers() {
	// Double letter cells
	multiplier = {
		'double-letter':	[4, 12, 37, 39, 53, 46, 60, 93, 97, 99, 103, 109, 117, 123, 127, 129, 133, 166, 173, 180, 187, 189, 214, 222],
		'triple-letter':	[21, 25, 81, 85, 77, 89, 137, 141, 145, 149, 201, 205],
		'double-word':		[17, 33, 49, 65, 29, 43, 57, 71, 161, 177, 193, 209, 155, 169, 183, 197],
		'triple-word':		[1, 8, 15, 106, 120, 211, 218, 225]
	}
	
	// Multiply
	for(type in multiplier) {
		multiplier[type].forEach(cell => {
			$('#cell-'+cell).addClass(type);
		});
	}
}