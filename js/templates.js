(function(){ window.JST || (window.JST = {}) 
window.JST["components"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
 for (var i=0; i<COPY.lesson_intros.length; i++) { 
;__p+='\n    ';
 if (COPY.lesson_intros[i][0] == getParameterByName('id')) { 
;__p+='\n        <h1>'+
(COPY.lesson_intros[i][1])+
'</h1>\n    ';
 } 
;__p+='\n';
 } 
;__p+='\n\n';
 for (var i=0; i<LESSON.length; i++) { 
;__p+='\n    <h3>\n        <a href="'+
(LESSON[i][2])+
'" target="_blank">'+
(LESSON[i][0])+
'</a>\n    </h3>\n    ';
 if (LESSON[i][4] !== '') { 
;__p+='\n        <p>by '+
(LESSON[i][4])+
'</p>\n    ';
 } 
;__p+='\n    <p>'+
(LESSON[i][5])+
'</p>\n';
 }
;__p+='\n\n<a class="btn btn-large btn-primary" href="lesson.html?id='+
(lessonNumber + 1)+
'">Next Lesson</a>';
}
return __p;
};

window.JST["example"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<p>This project is is running with the following settings:</p>\n\n<pre>\n'+
( config )+
'    \n</pre>\n\n<p>This project has the following COPY configured:</p>\n\n<pre>\n'+
( copy )+
'\n</pre>\n\n<p>This text is rendered from a template found at <code>'+
( template_path )+
'</code>.</p>\n';
}
return __p;
};

})();