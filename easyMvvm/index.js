import initState from './core/init/state'
import initRender from './core/init/render'
import callHook from './core/lifecycle/lifecycle';

const ProxyMvvm = function (options) {
  this._options = options
  initState(this)
  callHook('created', this)
  initRender(this)
  callHook('mounted', this)
}

export default ProxyMvvm