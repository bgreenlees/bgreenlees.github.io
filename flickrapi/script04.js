var getJSON = function(url, successHandler, errorHandler) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status == 200) {
      successHandler && successHandler(xhr.response);
    } else {
      errorHandler && errorHandler(status);
    }
  };
  xhr.send();
};

getJSON('https://mathiasbynens.be/demo/ip', function(data) {
  alert('Your public IP address is: ' + data.ip);
}, function(status) {
  alert('Something went wrong.');
});