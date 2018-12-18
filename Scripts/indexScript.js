"use strict"

let editorHTML = ace.edit("editorHTML", {
    theme: "ace/theme/tomorrow",
    mode: "ace/mode/html",
    autoScrollEditorIntoView: true,
    minLines: 10,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
let editorCSS = ace.edit("editorCSS", {
    theme: "ace/theme/tomorrow_night_blue",
    mode: "ace/mode/css",
    autoScrollEditorIntoView: true,
    minLines: 10,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
let editorJavascript = ace.edit("editorJavascript", {
    theme: "ace/theme/tomorrow_night_bright",
    mode: "ace/mode/javascript",
    autoScrollEditorIntoView: true,
    minLines: 10,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});

$(function() {
	$('[data-toggle="tooltip"]').tooltip(); 
	
    $('#btnRenderHTML').click(function(){
        runIframe(); 
    });

    setupEditors(); 
});

function runIframe() {
    var _editorHTML = editorHTML.getValue();
	var _editorCSS = editorCSS.getValue();
    var iframe = document.getElementById('outputIframe');
    iframe.contentWindow.document.open();
	//iframe.contentWindow.document.write(_editorCSS);
	
	//$('#outputIframe').contents().find('body').html(editorHTML.getValue()); 
	//$('#outputIframe').contents().find('head').append(editorCSS.getValue()); 
	//$(window.frames['outputIframe'].document).append(editorHTML.getValue());
	//$('head', window.frames['outputIframe'].document).append(editorCSS.getValue());
    iframe.contentWindow.document.write(_editorHTML);
    iframe.contentWindow.document.close();
	
	$('#outputIframe').contents().find('head').append('<style>' + editorCSS.getValue() + '</style>');
}

function setupEditors(){
    
    editorHTML.setValue("<!DOCTYPE html>\n\u0009<body>\n\n\u0009</body>\n</html>", 1);
    editorHTML.focus();
    editorHTML.gotoLine(3,0, true);
    editorHTML.indent(); editorHTML.indent(); 
}