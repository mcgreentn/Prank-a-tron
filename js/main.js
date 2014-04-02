// These are all the word substitutions we want to dp
replacements = {
    'the'       : 'teh',
    'lose'      : 'loose',
    'there'     : 'their',
    'too'       : 'to',
    'weird'     : 'wierd',
    'its'       : 'it\'s',
    'definitely': 'definately',
    'then'      : 'than',
    'a lot'     : 'alot',
    'whether'   : 'weather',
    'and'       : 'end',
    'four'      : 'for'
}

// We look for whenever the contents of text inputs and textareas change
$('input[type="text"], textarea').on('change keyup paste', function() {
    var contents = $(this).val();

    // We go through all of the words in our replacements dictionary
    for (key in replacements) {
        // Then, replace the word with with its substitute by building a regular expression
        var regex = new RegExp(key);
        contents = contents.replace(regex, replacements[key]);
    }
    // Finally, set the content string with all of the replacements made
    // as the contents of the text input/text area
    $(this).val(contents);
});