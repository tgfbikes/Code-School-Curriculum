'use strict';

var $ = require('jquery');

var ajax = function (url, data, success, error, type='POST') {
  
  $.ajax({
    url: 'http://localhost:3000' + url,
    datatype: 'json',
    contentType: 'application/json',
    type: type,
    data: JSON.stringify(data),
    success: function (data) {
      success(data);
    },
    error: function (xhr, status, err) {
      error(xhr, status, err);
    }
  });
  
};

module.exports = ajax;