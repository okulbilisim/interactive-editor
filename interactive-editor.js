(function () {

  var interactiveeditor = function() { return 'interactive-editor'; };


  interactiveeditor.empty = function() { return ''; };
  if(typeof module !== 'undefined' && module.exports) {
    module.exports = interactive-editor;
  } else if (window) {
    window.interactiveeditor = interactiveeditor;
  }
}());
