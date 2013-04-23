#include "../_common/helpers.js"

(function() {
	function init() {
		store_measurement_units(doc);
	}
	function done() {
		restore_measurement_units(doc);
	}

	var script_name = remove_file_extension( get_filename($.fileName) );
	var doc = app.activeDocument;

	init();

	var len = app.selection.length;
	if (len === 0) {
		alert("select a text frame first");
		return;
	}

	for (var i = 0; i < len; i++) {
		var sel = app.selection[i];

		if (sel.constructor.name != "TextFrame") {
			alert("selection is not a text frame → ignoring it");
			continue;
		}
		
	}

	done();
})();
