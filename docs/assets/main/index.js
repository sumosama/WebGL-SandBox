System.register("chunks:///_virtual/main",["./QRReader.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/QRReader.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,i,a,n,s,o,p,u,l,c,m;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){n=e.cclegacy,s=e._decorator,o=e.Sprite,p=e.UITransform,u=e.assetManager,l=e.SpriteFrame,c=e.Texture2D,m=e.Component}],execute:function(){var f,d,g,h,w,b,R;n._RF.push({},"5bf33rj9ItAapgEgp5nAXI5","QRReader",void 0);var v=s.ccclass,y=s.property;e("QRReader",(f=v("QRReader"),d=y(o),g=y(p),f((b=r((w=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return r=e.call.apply(e,[this].concat(n))||this,i(r,"sprite",b,a(r)),i(r,"spriteTransform",R,a(r)),r.spriteFrame=null,r.isStarted=!1,r.loaded=!1,r}t(r,e);var n=r.prototype;return n.start=function(){this.isStarted=window.startWebcam()},n.update=function(e){this.isStarted&&this.updateImage()},n.stopCamera=function(){window.stopWebcam(),this.isStarted=!1},n.updateImage=function(){var e=this,r=window.getWebcamImage();null!=r[0]&&u.loadRemote(r[0],{ext:".jpeg"},(function(t,i){if(t)console.log(t.message);else{e.spriteFrame=new l;var a=new c;a.image=i,e.spriteFrame.texture=a,e.sprite.spriteFrame=e.spriteFrame;var n=r[1]/r[2];e.spriteTransform.width=e.spriteTransform.height*n}}))},r}(m)).prototype,"sprite",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=r(w.prototype,"spriteTransform",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=w))||h));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});