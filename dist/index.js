"use strict";var q=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var d=q(function(H,p){
var g=require('@stdlib/array-base-assert-is-accessor-array/dist'),s=require('@stdlib/random-base-lognormal/dist');function O(a,e,u,i,c,n,f,t){var r,v,l;if(r={arity:0,fcn:null},f){if(e===0&&c===0)return g(a)?v=a.get(u):v=a[u],g(i)?l=i.get(n):l=i[n],r.fcn=s.factory(v,l,t),r;r.fcn=s.factory(t)}else r.fcn=s;return r.arity+=2,r}p.exports=O
});var h=q(function(I,b){
var R=require('@stdlib/strided-base-nullary/dist'),j=require('@stdlib/strided-base-binary/dist'),o=d();function w(a,e,u,i,c,n,f,t){var r=o(e,u,0,i,c,0,arguments.length>7,t);return r.arity===0?(R([n],[a],[f],r.fcn),n):(j([e,i,n],[a],[u,c,f],r.fcn),n)}b.exports=w
});var k=q(function(J,A){
var z=require('@stdlib/strided-base-nullary/dist').ndarray,B=require('@stdlib/strided-base-binary/dist').ndarray,C=d();function D(a,e,u,i,c,n,f,t,r,v,l){var y=C(e,u,i,c,n,f,arguments.length>10,l);return y.arity===0?(z([t],[a],[r],[v],y.fcn),t):(B([e,c,t],[a],[u,n,r],[i,f,v],y.fcn),t)}A.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=h(),F=k();E(x,"ndarray",F);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
