// Define color mappings
var colorMap = {
    "A": [141, 211, 98],     // Green
    "T": [12, 99, 164],     // Blue
    "C": [247, 178, 43],   // Yellow
    "G": [234, 77, 72]      // Red
};

// Helper to create RGBColor
function createRGBColor(r, g, b) {
    var color = new RGBColor();
    color.red = r;
    color.green = g;
    color.blue = b;
    return color;
}

// Main function
function colorLettersInTextFrame(textFrame) {
    var contents = textFrame.contents;
    var textRange = textFrame.textRange;

    for (var i = 0; i < contents.length; i++) {
        var letter = contents[i].toUpperCase();
        if (colorMap[letter]) {
            var rgb = colorMap[letter];
            var charRange = textRange.characters[i];
            charRange.characterAttributes.fillColor = createRGBColor(rgb[0], rgb[1], rgb[2]);
        }
    }
}

function processSelectedTextFrames() {
    if (app.documents.length === 0) {
        alert("No document open.");
        return;
    }

    var selection = app.activeDocument.selection;
    if (selection.length === 0) {
        alert("Please select at least one text frame.");
        return;
    }

    var foundTextFrame = false;

    for (var i = 0; i < selection.length; i++) {
        if (selection[i] instanceof TextFrame) {
            foundTextFrame = true;
            colorLettersInTextFrame(selection[i]);
        }
    }

    if (!foundTextFrame) {
        alert("No text frames selected.");
    }
}

// Run the function
processSelectedTextFrames();
