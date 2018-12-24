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
    
    initEditorContent(); 
    $('#btnRenderHTML').click(function(){
        runIframe(); 

    });

    
});

function iframeLoaded(){
    $('#outputIframe').contents().find('body').append('<script>' + editorJavascript.getValue() + '<\/script>');
}

function runIframe() {
    var _editorHTML = editorHTML.getValue();
    var iframe = document.getElementById('outputIframe');
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(_editorHTML);
    iframe.contentWindow.document.close();
	
    $('#outputIframe').contents().find('head').append('<style>' + editorCSS.getValue() + '</style>');
    //add onload event to iframe to ensure editor script is applied after other scripts have loaded/ executed onload events
    $('#outputIframe').contents().find('body').append('<script>window.onload = function() {parent.iframeLoaded();}<\/script>');
}

function initEditorContent(){

    let externalHTML = ""; 
    $.get("iFrameHTML/initialComic.html", function( externalHTML ) {
        editorHTML.setValue(externalHTML); 
    });
    
    editorHTML.focus();
    editorHTML.gotoLine(3,0, true);
    editorHTML.indent(); editorHTML.indent(); 

    editorJavascript.resize(); 
}