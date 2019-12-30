'use strict';

import Serializable from 'php-serialize';

var onRun = function(context) {
    var value = context.clickedRowValue();
    var result = Serializable.unserialize(value);

    SystemService.notify("Field value deserialized", "It's on your clipboard");
    SystemService.insertToClipboard(JSON.stringify(result));
};

global.onRun = onRun;