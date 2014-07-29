var _ = require('lodash-node');

function oldestAge(data){
  return _.max(data, function(x){
    return x.age;
  });
};

function alive(data) {
  var filtData = _.filter(data, function(nam){
    return nam.age !== undefined;
  })
   return _.pluck(filtData, 'name');
};

function oldName(data){
  return oldestAge(data).name;
};


