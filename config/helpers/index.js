module.exports = function (handlebars) {
  var times   =  require('./times'),
      cat     =  require('./cat')(handlebars),
      claude  =  require('./claude')(handlebars),
      lorem   =  require('./lorem'),
      addClasses   =  require('./addClasses'),
      showSubmenus   =  require('./showSubmenus'),
      if_eq   =  require('./if_eq'),
      json = require('./json'),
      ifCond = require('./ifCond'),
      concat = require('./concat'),
      helpers = {
          times: times,
          lipsumtitle: lorem.lipsumtitle,
          lipsum: lorem.lipsum,
          cat: cat,
          claude: claude,
          addClasses: addClasses,
          showSubmenus: showSubmenus,
          if_eq: if_eq,
          json: json,
          ifCond: ifCond,
          concat: concat
      };

  return helpers;
}
