'use strict';
var _ = require('lodash');

function Scope() {
  this.$$watchers = [];
}

function initWatchVal(){}

/**
* Função $watch: permite atribuir uma função watcher ao Scope. Um
* watcher é alguma coisa que é notificada quando uma mudança ocorre no escopo.
*/
Scope.prototype.$watch = function (watchFn, listenerFn) {
  var watcher = {
    watchFn: watchFn,
    listenerFn: listenerFn,
    last: initWatchVal
  };

  this.$$watchers.push(watcher);
};

/**
* Função $digest: chamar a watcher function e comparar seu valor de retorno para
* verificar se o valor foi alterado. Se o valor difere, o watcher está dirty e
* o listener correspondente deve ser chamado.
*
* Itera por todos os watchers e chama o listener correspondente  quando o valor muda
*/
Scope.prototype.$digest = function () {
  var self = this;
  var newValue, oldValue;
  // itera por todos os watchers registrados no scopo
  _.forEach(this.$$watchers, function (watcher) {
    // chama a watch function com o scope como parâmetro
    newValue = watcher.watchFn(self);
    oldValue = watcher.last;
    if (newValue !== oldValue) {
      watcher.last = newValue;
      // e chama a listenerFunction correspondente
      watcher.listenerFn(newValue, (oldValue === initWatchVal ? newValue : oldValue), self);
    }

  });
};

module.exports = Scope;
