// globals
var $lesson = null;
var lessonNumber = null;


// funcs
var getParameterByName = function(name) {
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');

    var regex = new RegExp("[\\?&]" + name + '=([^&#]*)');
    var results = regex.exec(location.search);;

    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var renderLesson = function() {
    var context = LESSON;
    context.lessonNumber = parseInt(lessonNumber);
    var html = JST.components(context);

    $lesson.html(html)
}

// enclosure
var onDocumentReady = function() {
    if (getParameterByName('id') !== '') {
        $lesson = $('#lesson');
        lessonNumber = getParameterByName('id');

        window.LESSON = COPY['lesson_' + lessonNumber]

        renderLesson();
    }
}

$(document).ready(onDocumentReady)