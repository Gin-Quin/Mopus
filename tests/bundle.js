(function() {
const møpus=(()=>{let n={},e=new Set,r=0;return function(t,a){if(t){if(!a){return (typeof n[t]!='function'||e.has(t)||(e.add(t),n[t]=n[t]())),n[t]};r||(n[t]=a)}else r=1}})()
møpus('Super.js', function(module={exports:{}}) {
const {exports} = module
class X {}
class E extends X {
	constructor() {
		super()
		this.x = 111
	}
	hello() {}
}
return module.exports
})
møpus()
møpus('Super.js')
})()