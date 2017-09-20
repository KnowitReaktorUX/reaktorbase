module.exports = function (handlebars) {
  var times   =  require('./times'),
      lorem   =  require('./lorem'),
      json = require('./json'),
      ifCond = require('./ifCond'),
      concat = require('./concat'),
      helpers = {
          times: times,
          lipsumtitle: lorem.lipsumtitle,
          lipsum: lorem.lipsum,
          json: json,
          ifCond: ifCond,
          concat: concat
      };

  return helpers;
}
