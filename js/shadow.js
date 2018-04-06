function fetchDocument(url) {
  var xhr = new XMLHttpRequest();
  return new Promise(function(resolve, reject) {
    xhr.open('GET', url, true);
    xhr.responseType = 'document';
    xhr.setRequestHeader('Accept', 'text/html');
    xhr.onload = function() {
      resolve(xhr.responseXML);
    };
    xhr.send();
  });
}

(window.AMP = window.AMP || []).push(function(AMP) {
  var container = document.getElementById('main');
  var url = container.getAttribute('data-src');
  fetchDocument(url).then(function(doc) {
    var ampedDoc = AMP.attachShadowDoc(container, doc, url);
  });
});
