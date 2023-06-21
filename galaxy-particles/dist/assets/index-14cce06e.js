(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="152",gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ih=0,Ba=1,Nh=2,sc=1,Fh=2,vn=3,On=0,It=1,gn=2,Fn=0,Vi=1,Eo=2,Va=3,za=4,Oh=5,Oi=100,kh=101,Bh=102,Ga=103,Ha=104,Vh=200,zh=201,Gh=202,Hh=203,oc=204,ac=205,Wh=206,Xh=207,qh=208,jh=209,Kh=210,Yh=0,$h=1,Zh=2,Mo=3,Jh=4,Qh=5,ep=6,tp=7,lc=0,np=1,ip=2,bn=0,rp=1,sp=2,op=3,ap=4,lp=5,cc=300,Hi=301,Wi=302,wo=303,So=304,ds=306,yo=1e3,Jt=1001,To=1002,Rt=1003,Wa=1004,zs=1005,Wt=1006,cp=1007,gr=1008,ni=1009,up=1010,dp=1011,uc=1012,hp=1013,$n=1014,Zn=1015,br=1016,pp=1017,fp=1018,zi=1020,mp=1021,Qt=1023,_p=1024,vp=1025,Jn=1026,Xi=1027,gp=1028,bp=1029,xp=1030,Ep=1031,Mp=1033,Gs=33776,Hs=33777,Ws=33778,Xs=33779,Xa=35840,qa=35841,ja=35842,Ka=35843,wp=36196,Ya=37492,$a=37496,Za=37808,Ja=37809,Qa=37810,el=37811,tl=37812,nl=37813,il=37814,rl=37815,sl=37816,ol=37817,al=37818,ll=37819,cl=37820,ul=37821,qs=36492,Sp=36283,dl=36284,hl=36285,pl=36286,dc=3e3,Qn=3001,yp=3200,Tp=3201,Cp=0,Ap=1,ei="",Ve="srgb",sn="srgb-linear",hc="display-p3",js=7680,Pp=519,fl=35044,ml="300 es",Co=1035;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let l=0,d=a.length;l<d;l++)a[l].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,Ao=180/Math.PI;function xr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[s&255]+Ct[s>>8&255]+Ct[s>>16&255]+Ct[s>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function Rp(s,e){return(s%e+e)%e}function Ys(s,e,t){return(1-t)*s+t*e}function _l(s){return(s&s-1)===0&&s!==0}function Lp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Or(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*i-d*a+e.x,this.y=l*a+d*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,a,l,d,u,p,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=u,m[3]=t,m[4]=l,m[5]=p,m[6]=i,m[7]=d,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,d=i[0],u=i[3],p=i[6],h=i[1],m=i[4],_=i[7],g=i[2],x=i[5],S=i[8],E=a[0],b=a[3],f=a[6],L=a[1],R=a[4],P=a[7],C=a[2],N=a[5],k=a[8];return l[0]=d*E+u*L+p*C,l[3]=d*b+u*R+p*N,l[6]=d*f+u*P+p*k,l[1]=h*E+m*L+_*C,l[4]=h*b+m*R+_*N,l[7]=h*f+m*P+_*k,l[2]=g*E+x*L+S*C,l[5]=g*b+x*R+S*N,l[8]=g*f+x*P+S*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],d=e[4],u=e[5],p=e[6],h=e[7],m=e[8];return t*d*m-t*u*h-i*l*m+i*u*p+a*l*h-a*d*p}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],d=e[4],u=e[5],p=e[6],h=e[7],m=e[8],_=m*d-u*h,g=u*p-m*l,x=h*l-d*p,S=t*_+i*g+a*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=_*E,e[1]=(a*h-m*i)*E,e[2]=(u*i-a*d)*E,e[3]=g*E,e[4]=(m*t-a*p)*E,e[5]=(a*l-u*t)*E,e[6]=x*E,e[7]=(i*p-h*t)*E,e[8]=(d*t-i*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,l,d,u){const p=Math.cos(l),h=Math.sin(l);return this.set(i*p,i*h,-i*(p*d+h*u)+d+e,-a*h,a*p,-a*(-h*d+p*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply($s.makeScale(e,t)),this}rotate(e){return this.premultiply($s.makeRotation(-e)),this}translate(e,t){return this.premultiply($s.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new qe;function pc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const vl={};function vr(s){s in vl||(vl[s]=!0,console.warn(s))}function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Dp=new qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Up=new qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ip(s){return s.convertSRGBToLinear().applyMatrix3(Up)}function Np(s){return s.applyMatrix3(Dp).convertLinearToSRGB()}const Fp={[sn]:s=>s,[Ve]:s=>s.convertSRGBToLinear(),[hc]:Ip},Op={[sn]:s=>s,[Ve]:s=>s.convertLinearToSRGB(),[hc]:Np},jt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return sn},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=Fp[e],a=Op[t];if(i===void 0||a===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return a(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let xi;class fc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=ls("canvas")),xi.width=e.width,xi.height=e.height;const i=xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),l=a.data;for(let d=0;d<l.length;d++)l[d]=Gi(l[d]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gi(t[i]/255)*255):t[i]=Gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class mc{constructor(e=null){this.isSource=!0,this.uuid=xr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let d=0,u=a.length;d<u;d++)a[d].isDataTexture?l.push(Js(a[d].image)):l.push(Js(a[d]))}else l=Js(a);i.url=l}return t||(e.images[this.uuid]=i),i}}function Js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kp=0;class Bt extends oi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Jt,a=Jt,l=Wt,d=gr,u=Qt,p=ni,h=Bt.DEFAULT_ANISOTROPY,m=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=xr(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=d,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=p,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===Qn?Ve:ei),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yo:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yo:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ve?Qn:dc}set encoding(e){vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qn?Ve:ei}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=cc;Bt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,a=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*i+d[8]*a+d[12]*l,this.y=d[1]*t+d[5]*i+d[9]*a+d[13]*l,this.z=d[2]*t+d[6]*i+d[10]*a+d[14]*l,this.w=d[3]*t+d[7]*i+d[11]*a+d[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,l;const p=e.elements,h=p[0],m=p[4],_=p[8],g=p[1],x=p[5],S=p[9],E=p[2],b=p[6],f=p[10];if(Math.abs(m-g)<.01&&Math.abs(_-E)<.01&&Math.abs(S-b)<.01){if(Math.abs(m+g)<.1&&Math.abs(_+E)<.1&&Math.abs(S+b)<.1&&Math.abs(h+x+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,P=(x+1)/2,C=(f+1)/2,N=(m+g)/4,k=(_+E)/4,J=(S+b)/4;return R>P&&R>C?R<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(R),a=N/i,l=k/i):P>C?P<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),i=N/a,l=J/a):C<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(C),i=k/l,a=J/l),this.set(i,a,l,t),this}let L=Math.sqrt((b-S)*(b-S)+(_-E)*(_-E)+(g-m)*(g-m));return Math.abs(L)<.001&&(L=1),this.x=(b-S)/L,this.y=(_-E)/L,this.z=(g-m)/L,this.w=Math.acos((h+x+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ii extends oi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(vr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qn?Ve:ei),this.texture=new Bt(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Wt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _c extends Bt{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bp extends Bt{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,l,d,u){let p=i[a+0],h=i[a+1],m=i[a+2],_=i[a+3];const g=l[d+0],x=l[d+1],S=l[d+2],E=l[d+3];if(u===0){e[t+0]=p,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(u===1){e[t+0]=g,e[t+1]=x,e[t+2]=S,e[t+3]=E;return}if(_!==E||p!==g||h!==x||m!==S){let b=1-u;const f=p*g+h*x+m*S+_*E,L=f>=0?1:-1,R=1-f*f;if(R>Number.EPSILON){const C=Math.sqrt(R),N=Math.atan2(C,f*L);b=Math.sin(b*N)/C,u=Math.sin(u*N)/C}const P=u*L;if(p=p*b+g*P,h=h*b+x*P,m=m*b+S*P,_=_*b+E*P,b===1-u){const C=1/Math.sqrt(p*p+h*h+m*m+_*_);p*=C,h*=C,m*=C,_*=C}}e[t]=p,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,l,d){const u=i[a],p=i[a+1],h=i[a+2],m=i[a+3],_=l[d],g=l[d+1],x=l[d+2],S=l[d+3];return e[t]=u*S+m*_+p*x-h*g,e[t+1]=p*S+m*g+h*_-u*x,e[t+2]=h*S+m*x+u*g-p*_,e[t+3]=m*S-u*_-p*g-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,a=e._y,l=e._z,d=e._order,u=Math.cos,p=Math.sin,h=u(i/2),m=u(a/2),_=u(l/2),g=p(i/2),x=p(a/2),S=p(l/2);switch(d){case"XYZ":this._x=g*m*_+h*x*S,this._y=h*x*_-g*m*S,this._z=h*m*S+g*x*_,this._w=h*m*_-g*x*S;break;case"YXZ":this._x=g*m*_+h*x*S,this._y=h*x*_-g*m*S,this._z=h*m*S-g*x*_,this._w=h*m*_+g*x*S;break;case"ZXY":this._x=g*m*_-h*x*S,this._y=h*x*_+g*m*S,this._z=h*m*S+g*x*_,this._w=h*m*_-g*x*S;break;case"ZYX":this._x=g*m*_-h*x*S,this._y=h*x*_+g*m*S,this._z=h*m*S-g*x*_,this._w=h*m*_+g*x*S;break;case"YZX":this._x=g*m*_+h*x*S,this._y=h*x*_+g*m*S,this._z=h*m*S-g*x*_,this._w=h*m*_-g*x*S;break;case"XZY":this._x=g*m*_-h*x*S,this._y=h*x*_-g*m*S,this._z=h*m*S+g*x*_,this._w=h*m*_+g*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],l=t[8],d=t[1],u=t[5],p=t[9],h=t[2],m=t[6],_=t[10],g=i+u+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(m-p)*x,this._y=(l-h)*x,this._z=(d-a)*x}else if(i>u&&i>_){const x=2*Math.sqrt(1+i-u-_);this._w=(m-p)/x,this._x=.25*x,this._y=(a+d)/x,this._z=(l+h)/x}else if(u>_){const x=2*Math.sqrt(1+u-i-_);this._w=(l-h)/x,this._x=(a+d)/x,this._y=.25*x,this._z=(p+m)/x}else{const x=2*Math.sqrt(1+_-i-u);this._w=(d-a)/x,this._x=(l+h)/x,this._y=(p+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,l=e._z,d=e._w,u=t._x,p=t._y,h=t._z,m=t._w;return this._x=i*m+d*u+a*h-l*p,this._y=a*m+d*p+l*u-i*h,this._z=l*m+d*h+i*p-a*u,this._w=d*m-i*u-a*p-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,l=this._z,d=this._w;let u=d*e._w+i*e._x+a*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=d,this._x=i,this._y=a,this._z=l,this;const p=1-u*u;if(p<=Number.EPSILON){const x=1-t;return this._w=x*d+t*this._w,this._x=x*i+t*this._x,this._y=x*a+t*this._y,this._z=x*l+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(p),m=Math.atan2(h,u),_=Math.sin((1-t)*m)/h,g=Math.sin(t*m)/h;return this._w=d*_+this._w*g,this._x=i*_+this._x*g,this._y=a*_+this._y*g,this._z=l*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(l),i*Math.cos(l),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*a,this.y=l[1]*t+l[4]*i+l[7]*a,this.z=l[2]*t+l[5]*i+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,l=e.elements,d=1/(l[3]*t+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*a+l[12])*d,this.y=(l[1]*t+l[5]*i+l[9]*a+l[13])*d,this.z=(l[2]*t+l[6]*i+l[10]*a+l[14])*d,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,l=e.x,d=e.y,u=e.z,p=e.w,h=p*t+d*a-u*i,m=p*i+u*t-l*a,_=p*a+l*i-d*t,g=-l*t-d*i-u*a;return this.x=h*p+g*-l+m*-u-_*-d,this.y=m*p+g*-d+_*-l-h*-u,this.z=_*p+g*-u+h*-d-m*-l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*a,this.y=l[1]*t+l[5]*i+l[9]*a,this.z=l[2]*t+l[6]*i+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,l=e.z,d=t.x,u=t.y,p=t.z;return this.x=a*p-l*u,this.y=l*d-i*p,this.z=i*u-a*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qs.copy(this).projectOnVector(e),this.sub(Qs)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new H,gl=new ri;class Er{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ei.copy(e.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei);else{const a=e.geometry;if(a!==void 0)if(t&&a.attributes!==void 0&&a.attributes.position!==void 0){const l=a.attributes.position;for(let d=0,u=l.count;d<u;d++)hn.fromBufferAttribute(l,d).applyMatrix4(e.matrixWorld),this.expandByPoint(hn)}else a.boundingBox===null&&a.computeBoundingBox(),Ei.copy(a.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei)}const i=e.children;for(let a=0,l=i.length;a<l;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),kr.subVectors(this.max,hr),Mi.subVectors(e.a,hr),wi.subVectors(e.b,hr),Si.subVectors(e.c,hr),Ln.subVectors(wi,Mi),Dn.subVectors(Si,wi),Wn.subVectors(Mi,Si);let t=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-Wn.z,Wn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,Wn.z,0,-Wn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-Wn.y,Wn.x,0];return!eo(t,Mi,wi,Si,kr)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,Mi,wi,Si,kr))?!1:(Br.crossVectors(Ln,Dn),t=[Br.x,Br.y,Br.z],eo(t,Mi,wi,Si,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const dn=[new H,new H,new H,new H,new H,new H,new H,new H],hn=new H,Ei=new Er,Mi=new H,wi=new H,Si=new H,Ln=new H,Dn=new H,Wn=new H,hr=new H,kr=new H,Br=new H,Xn=new H;function eo(s,e,t,i,a){for(let l=0,d=s.length-3;l<=d;l+=3){Xn.fromArray(s,l);const u=a.x*Math.abs(Xn.x)+a.y*Math.abs(Xn.y)+a.z*Math.abs(Xn.z),p=e.dot(Xn),h=t.dot(Xn),m=i.dot(Xn);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>u)return!1}return!0}const Vp=new Er,pr=new H,to=new H;class hs{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vp.setFromPoints(e).getCenter(i);let a=0;for(let l=0,d=e.length;l<d;l++)a=Math.max(a,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(pr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(to)),this.expandByPoint(pr.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new H,no=new H,Vr=new H,Un=new H,io=new H,zr=new H,ro=new H;class vc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){no.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(no);const l=e.distanceTo(t)*.5,d=-this.direction.dot(Vr),u=Un.dot(this.direction),p=-Un.dot(Vr),h=Un.lengthSq(),m=Math.abs(1-d*d);let _,g,x,S;if(m>0)if(_=d*p-u,g=d*u-p,S=l*m,_>=0)if(g>=-S)if(g<=S){const E=1/m;_*=E,g*=E,x=_*(_+d*g+2*u)+g*(d*_+g+2*p)+h}else g=l,_=Math.max(0,-(d*g+u)),x=-_*_+g*(g+2*p)+h;else g=-l,_=Math.max(0,-(d*g+u)),x=-_*_+g*(g+2*p)+h;else g<=-S?(_=Math.max(0,-(-d*l+u)),g=_>0?-l:Math.min(Math.max(-l,-p),l),x=-_*_+g*(g+2*p)+h):g<=S?(_=0,g=Math.min(Math.max(-l,-p),l),x=g*(g+2*p)+h):(_=Math.max(0,-(d*l+u)),g=_>0?l:Math.min(Math.max(-l,-p),l),x=-_*_+g*(g+2*p)+h);else g=d>0?-l:l,_=Math.max(0,-(d*g+u)),x=-_*_+g*(g+2*p)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(no).addScaledVector(Vr,g),x}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const i=pn.dot(this.direction),a=pn.dot(pn)-i*i,l=e.radius*e.radius;if(a>l)return null;const d=Math.sqrt(l-a),u=i-d,p=i+d;return p<0?null:u<0?this.at(p,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,l,d,u,p;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),m>=0?(l=(e.min.y-g.y)*m,d=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,d=(e.min.y-g.y)*m),i>d||l>a||((l>i||isNaN(i))&&(i=l),(d<a||isNaN(a))&&(a=d),_>=0?(u=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(u=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),i>p||u>a)||((u>i||i!==i)&&(i=u),(p<a||a!==a)&&(a=p),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,i,a,l){io.subVectors(t,e),zr.subVectors(i,e),ro.crossVectors(io,zr);let d=this.direction.dot(ro),u;if(d>0){if(a)return null;u=1}else if(d<0)u=-1,d=-d;else return null;Un.subVectors(this.origin,e);const p=u*this.direction.dot(zr.crossVectors(Un,zr));if(p<0)return null;const h=u*this.direction.dot(io.cross(Un));if(h<0||p+h>d)return null;const m=-u*Un.dot(ro);return m<0?null:this.at(m/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,a,l,d,u,p,h,m,_,g,x,S,E,b){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=a,f[1]=l,f[5]=d,f[9]=u,f[13]=p,f[2]=h,f[6]=m,f[10]=_,f[14]=g,f[3]=x,f[7]=S,f[11]=E,f[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/yi.setFromMatrixColumn(e,0).length(),l=1/yi.setFromMatrixColumn(e,1).length(),d=1/yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*d,t[9]=i[9]*d,t[10]=i[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,l=e.z,d=Math.cos(i),u=Math.sin(i),p=Math.cos(a),h=Math.sin(a),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=d*m,x=d*_,S=u*m,E=u*_;t[0]=p*m,t[4]=-p*_,t[8]=h,t[1]=x+S*h,t[5]=g-E*h,t[9]=-u*p,t[2]=E-g*h,t[6]=S+x*h,t[10]=d*p}else if(e.order==="YXZ"){const g=p*m,x=p*_,S=h*m,E=h*_;t[0]=g+E*u,t[4]=S*u-x,t[8]=d*h,t[1]=d*_,t[5]=d*m,t[9]=-u,t[2]=x*u-S,t[6]=E+g*u,t[10]=d*p}else if(e.order==="ZXY"){const g=p*m,x=p*_,S=h*m,E=h*_;t[0]=g-E*u,t[4]=-d*_,t[8]=S+x*u,t[1]=x+S*u,t[5]=d*m,t[9]=E-g*u,t[2]=-d*h,t[6]=u,t[10]=d*p}else if(e.order==="ZYX"){const g=d*m,x=d*_,S=u*m,E=u*_;t[0]=p*m,t[4]=S*h-x,t[8]=g*h+E,t[1]=p*_,t[5]=E*h+g,t[9]=x*h-S,t[2]=-h,t[6]=u*p,t[10]=d*p}else if(e.order==="YZX"){const g=d*p,x=d*h,S=u*p,E=u*h;t[0]=p*m,t[4]=E-g*_,t[8]=S*_+x,t[1]=_,t[5]=d*m,t[9]=-u*m,t[2]=-h*m,t[6]=x*_+S,t[10]=g-E*_}else if(e.order==="XZY"){const g=d*p,x=d*h,S=u*p,E=u*h;t[0]=p*m,t[4]=-_,t[8]=h*m,t[1]=g*_+E,t[5]=d*m,t[9]=x*_-S,t[2]=S*_-x,t[6]=u*m,t[10]=E*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Gp)}lookAt(e,t,i){const a=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),In.crossVectors(i,Ot),In.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),In.crossVectors(i,Ot)),In.normalize(),Gr.crossVectors(Ot,In),a[0]=In.x,a[4]=Gr.x,a[8]=Ot.x,a[1]=In.y,a[5]=Gr.y,a[9]=Ot.y,a[2]=In.z,a[6]=Gr.z,a[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,l=this.elements,d=i[0],u=i[4],p=i[8],h=i[12],m=i[1],_=i[5],g=i[9],x=i[13],S=i[2],E=i[6],b=i[10],f=i[14],L=i[3],R=i[7],P=i[11],C=i[15],N=a[0],k=a[4],J=a[8],M=a[12],D=a[1],ie=a[5],ne=a[9],V=a[13],j=a[2],Q=a[6],ae=a[10],$=a[14],z=a[3],he=a[7],re=a[11],Ae=a[15];return l[0]=d*N+u*D+p*j+h*z,l[4]=d*k+u*ie+p*Q+h*he,l[8]=d*J+u*ne+p*ae+h*re,l[12]=d*M+u*V+p*$+h*Ae,l[1]=m*N+_*D+g*j+x*z,l[5]=m*k+_*ie+g*Q+x*he,l[9]=m*J+_*ne+g*ae+x*re,l[13]=m*M+_*V+g*$+x*Ae,l[2]=S*N+E*D+b*j+f*z,l[6]=S*k+E*ie+b*Q+f*he,l[10]=S*J+E*ne+b*ae+f*re,l[14]=S*M+E*V+b*$+f*Ae,l[3]=L*N+R*D+P*j+C*z,l[7]=L*k+R*ie+P*Q+C*he,l[11]=L*J+R*ne+P*ae+C*re,l[15]=L*M+R*V+P*$+C*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],l=e[12],d=e[1],u=e[5],p=e[9],h=e[13],m=e[2],_=e[6],g=e[10],x=e[14],S=e[3],E=e[7],b=e[11],f=e[15];return S*(+l*p*_-a*h*_-l*u*g+i*h*g+a*u*x-i*p*x)+E*(+t*p*x-t*h*g+l*d*g-a*d*x+a*h*m-l*p*m)+b*(+t*h*_-t*u*x-l*d*_+i*d*x+l*u*m-i*h*m)+f*(-a*u*m-t*p*_+t*u*g+a*d*_-i*d*g+i*p*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],l=e[3],d=e[4],u=e[5],p=e[6],h=e[7],m=e[8],_=e[9],g=e[10],x=e[11],S=e[12],E=e[13],b=e[14],f=e[15],L=_*b*h-E*g*h+E*p*x-u*b*x-_*p*f+u*g*f,R=S*g*h-m*b*h-S*p*x+d*b*x+m*p*f-d*g*f,P=m*E*h-S*_*h+S*u*x-d*E*x-m*u*f+d*_*f,C=S*_*p-m*E*p-S*u*g+d*E*g+m*u*b-d*_*b,N=t*L+i*R+a*P+l*C;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/N;return e[0]=L*k,e[1]=(E*g*l-_*b*l-E*a*x+i*b*x+_*a*f-i*g*f)*k,e[2]=(u*b*l-E*p*l+E*a*h-i*b*h-u*a*f+i*p*f)*k,e[3]=(_*p*l-u*g*l-_*a*h+i*g*h+u*a*x-i*p*x)*k,e[4]=R*k,e[5]=(m*b*l-S*g*l+S*a*x-t*b*x-m*a*f+t*g*f)*k,e[6]=(S*p*l-d*b*l-S*a*h+t*b*h+d*a*f-t*p*f)*k,e[7]=(d*g*l-m*p*l+m*a*h-t*g*h-d*a*x+t*p*x)*k,e[8]=P*k,e[9]=(S*_*l-m*E*l-S*i*x+t*E*x+m*i*f-t*_*f)*k,e[10]=(d*E*l-S*u*l+S*i*h-t*E*h-d*i*f+t*u*f)*k,e[11]=(m*u*l-d*_*l-m*i*h+t*_*h+d*i*x-t*u*x)*k,e[12]=C*k,e[13]=(m*E*a-S*_*a+S*i*g-t*E*g-m*i*b+t*_*b)*k,e[14]=(S*u*a-d*E*a-S*i*p+t*E*p+d*i*b-t*u*b)*k,e[15]=(d*_*a-m*u*a+m*i*p-t*_*p-d*i*g+t*u*g)*k,this}scale(e){const t=this.elements,i=e.x,a=e.y,l=e.z;return t[0]*=i,t[4]*=a,t[8]*=l,t[1]*=i,t[5]*=a,t[9]*=l,t[2]*=i,t[6]*=a,t[10]*=l,t[3]*=i,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),l=1-i,d=e.x,u=e.y,p=e.z,h=l*d,m=l*u;return this.set(h*d+i,h*u-a*p,h*p+a*u,0,h*u+a*p,m*u+i,m*p-a*d,0,h*p-a*u,m*p+a*d,l*p*p+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,l,d){return this.set(1,i,l,0,e,1,d,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,l=t._x,d=t._y,u=t._z,p=t._w,h=l+l,m=d+d,_=u+u,g=l*h,x=l*m,S=l*_,E=d*m,b=d*_,f=u*_,L=p*h,R=p*m,P=p*_,C=i.x,N=i.y,k=i.z;return a[0]=(1-(E+f))*C,a[1]=(x+P)*C,a[2]=(S-R)*C,a[3]=0,a[4]=(x-P)*N,a[5]=(1-(g+f))*N,a[6]=(b+L)*N,a[7]=0,a[8]=(S+R)*k,a[9]=(b-L)*k,a[10]=(1-(g+E))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let l=yi.set(a[0],a[1],a[2]).length();const d=yi.set(a[4],a[5],a[6]).length(),u=yi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Kt.copy(this);const h=1/l,m=1/d,_=1/u;return Kt.elements[0]*=h,Kt.elements[1]*=h,Kt.elements[2]*=h,Kt.elements[4]*=m,Kt.elements[5]*=m,Kt.elements[6]*=m,Kt.elements[8]*=_,Kt.elements[9]*=_,Kt.elements[10]*=_,t.setFromRotationMatrix(Kt),i.x=l,i.y=d,i.z=u,this}makePerspective(e,t,i,a,l,d){const u=this.elements,p=2*l/(t-e),h=2*l/(i-a),m=(t+e)/(t-e),_=(i+a)/(i-a),g=-(d+l)/(d-l),x=-2*d*l/(d-l);return u[0]=p,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=h,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,a,l,d){const u=this.elements,p=1/(t-e),h=1/(i-a),m=1/(d-l),_=(t+e)*p,g=(i+a)*h,x=(d+l)*m;return u[0]=2*p,u[4]=0,u[8]=0,u[12]=-_,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=-2*m,u[14]=-x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yi=new H,Kt=new wt,zp=new H(0,0,0),Gp=new H(1,1,1),In=new H,Gr=new H,Ot=new H,bl=new wt,xl=new ri;class ps{constructor(e=0,t=0,i=0,a=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,l=a[0],d=a[4],u=a[8],p=a[1],h=a[5],m=a[9],_=a[2],g=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Lt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Lt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hp=0;const El=new H,Ti=new ri,fn=new wt,Hr=new H,fr=new H,Wp=new H,Xp=new ri,Ml=new H(1,0,0),wl=new H(0,1,0),Sl=new H(0,0,1),qp={type:"added"},yl={type:"removed"};class Nt extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new H,t=new ps,i=new ri,a=new H(1,1,1);function l(){i.setFromEuler(t,!1)}function d(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new wt},normalMatrix:{value:new qe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(Ml,e)}rotateY(e){return this.rotateOnAxis(wl,e)}rotateZ(e){return this.rotateOnAxis(Sl,e)}translateOnAxis(e,t){return El.copy(e).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ml,e)}translateY(e){return this.translateOnAxis(wl,e)}translateZ(e){return this.translateOnAxis(Sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(fr,Hr,this.up):fn.lookAt(Hr,fr,this.up),this.quaternion.setFromRotationMatrix(fn),a&&(fn.extractRotation(a.matrixWorld),Ti.setFromRotationMatrix(fn),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const d=this.children[i].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let a=0,l=this.children.length;a<l;a++){const d=this.children[a].getObjectsByProperty(e,t);d.length>0&&(i=i.concat(d))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const l=t[i];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,d=a.length;l<d;l++){const u=a[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function l(u,p){return u[p.uuid]===void 0&&(u[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const p=u.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const _=p[h];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let p=0,h=this.material.length;p<h;p++)u.push(l(e.materials,this.material[p]));a.material=u}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const p=this.animations[u];a.animations.push(l(e.animations,p))}}if(t){const u=d(e.geometries),p=d(e.materials),h=d(e.textures),m=d(e.images),_=d(e.shapes),g=d(e.skeletons),x=d(e.animations),S=d(e.nodes);u.length>0&&(i.geometries=u),p.length>0&&(i.materials=p),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),S.length>0&&(i.nodes=S)}return i.object=a,i;function d(u){const p=[];for(const h in u){const m=u[h];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Nt.DEFAULT_UP=new H(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new H,mn=new H,so=new H,_n=new H,Ci=new H,Ai=new H,Tl=new H,oo=new H,ao=new H,lo=new H;let Wr=!1;class Zt{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Yt.subVectors(e,t),a.cross(Yt);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,i,a,l){Yt.subVectors(a,t),mn.subVectors(i,t),so.subVectors(e,t);const d=Yt.dot(Yt),u=Yt.dot(mn),p=Yt.dot(so),h=mn.dot(mn),m=mn.dot(so),_=d*h-u*u;if(_===0)return l.set(-2,-1,-1);const g=1/_,x=(h*p-u*m)*g,S=(d*m-u*p)*g;return l.set(1-x-S,S,x)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,i,a,l,d,u,p){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),this.getInterpolation(e,t,i,a,l,d,u,p)}static getInterpolation(e,t,i,a,l,d,u,p){return this.getBarycoord(e,t,i,a,_n),p.setScalar(0),p.addScaledVector(l,_n.x),p.addScaledVector(d,_n.y),p.addScaledVector(u,_n.z),p}static isFrontFacing(e,t,i,a){return Yt.subVectors(i,t),mn.subVectors(e,t),Yt.cross(mn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Yt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,l){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),Zt.getInterpolation(e,this.a,this.b,this.c,t,i,a,l)}getInterpolation(e,t,i,a,l){return Zt.getInterpolation(e,this.a,this.b,this.c,t,i,a,l)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,l=this.c;let d,u;Ci.subVectors(a,i),Ai.subVectors(l,i),oo.subVectors(e,i);const p=Ci.dot(oo),h=Ai.dot(oo);if(p<=0&&h<=0)return t.copy(i);ao.subVectors(e,a);const m=Ci.dot(ao),_=Ai.dot(ao);if(m>=0&&_<=m)return t.copy(a);const g=p*_-m*h;if(g<=0&&p>=0&&m<=0)return d=p/(p-m),t.copy(i).addScaledVector(Ci,d);lo.subVectors(e,l);const x=Ci.dot(lo),S=Ai.dot(lo);if(S>=0&&x<=S)return t.copy(l);const E=x*h-p*S;if(E<=0&&h>=0&&S<=0)return u=h/(h-S),t.copy(i).addScaledVector(Ai,u);const b=m*S-x*_;if(b<=0&&_-m>=0&&x-S>=0)return Tl.subVectors(l,a),u=(_-m)/(_-m+(x-S)),t.copy(a).addScaledVector(Tl,u);const f=1/(b+E+g);return d=E*f,u=g*f,t.copy(i).addScaledVector(Ci,d).addScaledVector(Ai,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jp=0;class Mr extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=Vi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=oc,this.blendDst=ac,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==On&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const d=[];for(const u in l){const p=l[u];delete p.metadata,d.push(p)}return d}if(t){const l=a(e.textures),d=a(e.images);l.length>0&&(i.textures=l),d.length>0&&(i.images=d)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$t={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function co(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=jt.workingColorSpace){return this.r=e,this.g=t,this.b=i,jt.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=jt.workingColorSpace){if(e=Rp(e,1),t=Lt(t,0,1),i=Lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,d=2*i-l;this.r=co(d,l,e+1/3),this.g=co(d,l,e),this.b=co(d,l,e-1/3)}return jt.toWorkingColorSpace(this,a),this}setStyle(e,t=Ve){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=a[1],u=a[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){const i=bc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return jt.fromWorkingColorSpace(At.copy(this),e),Math.round(Lt(At.r*255,0,255))*65536+Math.round(Lt(At.g*255,0,255))*256+Math.round(Lt(At.b*255,0,255))}getHexString(e=Ve){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.fromWorkingColorSpace(At.copy(this),t);const i=At.r,a=At.g,l=At.b,d=Math.max(i,a,l),u=Math.min(i,a,l);let p,h;const m=(u+d)/2;if(u===d)p=0,h=0;else{const _=d-u;switch(h=m<=.5?_/(d+u):_/(2-d-u),d){case i:p=(a-l)/_+(a<l?6:0);break;case a:p=(l-i)/_+2;break;case l:p=(i-a)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=m,e}getRGB(e,t=jt.workingColorSpace){return jt.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ve){jt.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,a=At.b;return e!==Ve?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=i,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(Xr);const i=Ys($t.h,Xr.h,t),a=Ys($t.s,Xr.s,t),l=Ys($t.l,Xr.l,t);return this.setHSL(i,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*a,this.g=l[1]*t+l[4]*i+l[7]*a,this.b=l[2]*t+l[5]*i+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new rt;rt.NAMES=bc;class xc extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new H,qr=new je;class qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,l){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),a=Ft(a,this.array),l=Ft(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ec extends qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mc extends qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ti extends qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Kp=0;const Ht=new wt,uo=new Nt,Pi=new H,kt=new Er,mr=new Er,Mt=new H;class xn extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pc(e)?Mc:Ec)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new qe().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const l=e[i];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new ti(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const l=t[i];kt.setFromBufferAttribute(l),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const u=t[l];mr.setFromBufferAttribute(u),this.morphTargetsRelative?(Mt.addVectors(kt.min,mr.min),kt.expandByPoint(Mt),Mt.addVectors(kt.max,mr.max),kt.expandByPoint(Mt)):(kt.expandByPoint(mr.min),kt.expandByPoint(mr.max))}kt.getCenter(i);let a=0;for(let l=0,d=e.count;l<d;l++)Mt.fromBufferAttribute(e,l),a=Math.max(a,i.distanceToSquared(Mt));if(t)for(let l=0,d=t.length;l<d;l++){const u=t[l],p=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)Mt.fromBufferAttribute(u,h),p&&(Pi.fromBufferAttribute(e,h),Mt.add(Pi)),a=Math.max(a,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,l=t.normal.array,d=t.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*u),4));const p=this.getAttribute("tangent").array,h=[],m=[];for(let D=0;D<u;D++)h[D]=new H,m[D]=new H;const _=new H,g=new H,x=new H,S=new je,E=new je,b=new je,f=new H,L=new H;function R(D,ie,ne){_.fromArray(a,D*3),g.fromArray(a,ie*3),x.fromArray(a,ne*3),S.fromArray(d,D*2),E.fromArray(d,ie*2),b.fromArray(d,ne*2),g.sub(_),x.sub(_),E.sub(S),b.sub(S);const V=1/(E.x*b.y-b.x*E.y);isFinite(V)&&(f.copy(g).multiplyScalar(b.y).addScaledVector(x,-E.y).multiplyScalar(V),L.copy(x).multiplyScalar(E.x).addScaledVector(g,-b.x).multiplyScalar(V),h[D].add(f),h[ie].add(f),h[ne].add(f),m[D].add(L),m[ie].add(L),m[ne].add(L))}let P=this.groups;P.length===0&&(P=[{start:0,count:i.length}]);for(let D=0,ie=P.length;D<ie;++D){const ne=P[D],V=ne.start,j=ne.count;for(let Q=V,ae=V+j;Q<ae;Q+=3)R(i[Q+0],i[Q+1],i[Q+2])}const C=new H,N=new H,k=new H,J=new H;function M(D){k.fromArray(l,D*3),J.copy(k);const ie=h[D];C.copy(ie),C.sub(k.multiplyScalar(k.dot(ie))).normalize(),N.crossVectors(J,ie);const V=N.dot(m[D])<0?-1:1;p[D*4]=C.x,p[D*4+1]=C.y,p[D*4+2]=C.z,p[D*4+3]=V}for(let D=0,ie=P.length;D<ie;++D){const ne=P[D],V=ne.start,j=ne.count;for(let Q=V,ae=V+j;Q<ae;Q+=3)M(i[Q+0]),M(i[Q+1]),M(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const a=new H,l=new H,d=new H,u=new H,p=new H,h=new H,m=new H,_=new H;if(e)for(let g=0,x=e.count;g<x;g+=3){const S=e.getX(g+0),E=e.getX(g+1),b=e.getX(g+2);a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,E),d.fromBufferAttribute(t,b),m.subVectors(d,l),_.subVectors(a,l),m.cross(_),u.fromBufferAttribute(i,S),p.fromBufferAttribute(i,E),h.fromBufferAttribute(i,b),u.add(m),p.add(m),h.add(m),i.setXYZ(S,u.x,u.y,u.z),i.setXYZ(E,p.x,p.y,p.z),i.setXYZ(b,h.x,h.y,h.z)}else for(let g=0,x=t.count;g<x;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),d.fromBufferAttribute(t,g+2),m.subVectors(d,l),_.subVectors(a,l),m.cross(_),i.setXYZ(g+0,m.x,m.y,m.z),i.setXYZ(g+1,m.x,m.y,m.z),i.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(u,p){const h=u.array,m=u.itemSize,_=u.normalized,g=new h.constructor(p.length*m);let x=0,S=0;for(let E=0,b=p.length;E<b;E++){u.isInterleavedBufferAttribute?x=p[E]*u.data.stride+u.offset:x=p[E]*m;for(let f=0;f<m;f++)g[S++]=h[x++]}return new qt(g,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,i=this.index.array,a=this.attributes;for(const u in a){const p=a[u],h=e(p,i);t.setAttribute(u,h)}const l=this.morphAttributes;for(const u in l){const p=[],h=l[u];for(let m=0,_=h.length;m<_;m++){const g=h[m],x=e(g,i);p.push(x)}t.morphAttributes[u]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let u=0,p=d.length;u<p;u++){const h=d[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const p in i){const h=i[p];e.data.attributes[p]=h.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let _=0,g=h.length;_<g;_++){const x=h[_];m.push(x.toJSON(e.data))}m.length>0&&(a[p]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],_=l[h];for(let g=0,x=_.length;g<x;g++)m.push(_[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,m=d.length;h<m;h++){const _=d[h];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new wt,nn=new vc,jr=new hs,Al=new H,Ri=new H,Li=new H,Di=new H,ho=new H,Kr=new H,Yr=new je,$r=new je,Zr=new je,Pl=new H,Rl=new H,Ll=new H,Jr=new H,Qr=new H;class Nn extends Nt{constructor(e=new xn,t=new xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,d=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(l&&u){Kr.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const m=u[p],_=l[p];m!==0&&(ho.fromBufferAttribute(_,e),d?Kr.addScaledVector(ho,m):Kr.addScaledVector(ho.sub(t),m))}t.add(Kr)}return t}raycast(e,t){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(l),nn.copy(e.ray).recast(e.near),!(jr.containsPoint(nn.origin)===!1&&(nn.intersectSphere(jr,Al)===null||nn.origin.distanceToSquared(Al)>(e.far-e.near)**2))&&(Cl.copy(l).invert(),nn.copy(e.ray).applyMatrix4(Cl),!(i.boundingBox!==null&&nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const a=this.geometry,l=this.material,d=a.index,u=a.attributes.position,p=a.attributes.uv,h=a.attributes.uv1,m=a.attributes.normal,_=a.groups,g=a.drawRange;if(d!==null)if(Array.isArray(l))for(let x=0,S=_.length;x<S;x++){const E=_[x],b=l[E.materialIndex],f=Math.max(E.start,g.start),L=Math.min(d.count,Math.min(E.start+E.count,g.start+g.count));for(let R=f,P=L;R<P;R+=3){const C=d.getX(R),N=d.getX(R+1),k=d.getX(R+2);i=es(this,b,e,nn,p,h,m,C,N,k),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=E.materialIndex,t.push(i))}}else{const x=Math.max(0,g.start),S=Math.min(d.count,g.start+g.count);for(let E=x,b=S;E<b;E+=3){const f=d.getX(E),L=d.getX(E+1),R=d.getX(E+2);i=es(this,l,e,nn,p,h,m,f,L,R),i&&(i.faceIndex=Math.floor(E/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(l))for(let x=0,S=_.length;x<S;x++){const E=_[x],b=l[E.materialIndex],f=Math.max(E.start,g.start),L=Math.min(u.count,Math.min(E.start+E.count,g.start+g.count));for(let R=f,P=L;R<P;R+=3){const C=R,N=R+1,k=R+2;i=es(this,b,e,nn,p,h,m,C,N,k),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=E.materialIndex,t.push(i))}}else{const x=Math.max(0,g.start),S=Math.min(u.count,g.start+g.count);for(let E=x,b=S;E<b;E+=3){const f=E,L=E+1,R=E+2;i=es(this,l,e,nn,p,h,m,f,L,R),i&&(i.faceIndex=Math.floor(E/3),t.push(i))}}}}function Yp(s,e,t,i,a,l,d,u){let p;if(e.side===It?p=i.intersectTriangle(d,l,a,!0,u):p=i.intersectTriangle(a,l,d,e.side===On,u),p===null)return null;Qr.copy(u),Qr.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Qr);return h<t.near||h>t.far?null:{distance:h,point:Qr.clone(),object:s}}function es(s,e,t,i,a,l,d,u,p,h){s.getVertexPosition(u,Ri),s.getVertexPosition(p,Li),s.getVertexPosition(h,Di);const m=Yp(s,e,t,i,Ri,Li,Di,Jr);if(m){a&&(Yr.fromBufferAttribute(a,u),$r.fromBufferAttribute(a,p),Zr.fromBufferAttribute(a,h),m.uv=Zt.getInterpolation(Jr,Ri,Li,Di,Yr,$r,Zr,new je)),l&&(Yr.fromBufferAttribute(l,u),$r.fromBufferAttribute(l,p),Zr.fromBufferAttribute(l,h),m.uv1=Zt.getInterpolation(Jr,Ri,Li,Di,Yr,$r,Zr,new je),m.uv2=m.uv1),d&&(Pl.fromBufferAttribute(d,u),Rl.fromBufferAttribute(d,p),Ll.fromBufferAttribute(d,h),m.normal=Zt.getInterpolation(Jr,Ri,Li,Di,Pl,Rl,Ll,new H),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:p,c:h,normal:new H,materialIndex:0};Zt.getNormal(Ri,Li,Di,_.normal),m.face=_}return m}class wr extends xn{constructor(e=1,t=1,i=1,a=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:l,depthSegments:d};const u=this;a=Math.floor(a),l=Math.floor(l),d=Math.floor(d);const p=[],h=[],m=[],_=[];let g=0,x=0;S("z","y","x",-1,-1,i,t,e,d,l,0),S("z","y","x",1,-1,i,t,-e,d,l,1),S("x","z","y",1,1,e,i,t,a,d,2),S("x","z","y",1,-1,e,i,-t,a,d,3),S("x","y","z",1,-1,e,t,i,a,l,4),S("x","y","z",-1,-1,e,t,-i,a,l,5),this.setIndex(p),this.setAttribute("position",new ti(h,3)),this.setAttribute("normal",new ti(m,3)),this.setAttribute("uv",new ti(_,2));function S(E,b,f,L,R,P,C,N,k,J,M){const D=P/k,ie=C/J,ne=P/2,V=C/2,j=N/2,Q=k+1,ae=J+1;let $=0,z=0;const he=new H;for(let re=0;re<ae;re++){const Ae=re*ie-V;for(let de=0;de<Q;de++){const K=de*D-ne;he[E]=K*L,he[b]=Ae*R,he[f]=j,h.push(he.x,he.y,he.z),he[E]=0,he[b]=0,he[f]=N>0?1:-1,m.push(he.x,he.y,he.z),_.push(de/k),_.push(1-re/J),$+=1}}for(let re=0;re<J;re++)for(let Ae=0;Ae<k;Ae++){const de=g+Ae+Q*re,K=g+Ae+Q*(re+1),q=g+(Ae+1)+Q*(re+1),le=g+(Ae+1)+Q*re;p.push(de,K,le),p.push(K,q,le),z+=6}u.addGroup(x,z,M),x+=z,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qi(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Pt(s){const e={};for(let t=0;t<s.length;t++){const i=qi(s[t]);for(const a in i)e[a]=i[a]}return e}function $p(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function wc(s){return s.getRenderTarget()===null?s.outputColorSpace:sn}const Zp={clone:qi,merge:Pt};var Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=Qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?t.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[a]={type:"m4",value:d.toArray()}:t.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sc extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xt extends Sc{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,l=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,h=d.fullHeight;l+=d.offsetX*a/p,t-=d.offsetY*i/h,a*=d.width/p,i*=d.height/h}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Ii=1;class ef extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const a=new Xt(Ui,Ii,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(1,0,0),this.add(a);const l=new Xt(Ui,Ii,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(-1,0,0),this.add(l);const d=new Xt(Ui,Ii,e,t);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(0,1,0),this.add(d);const u=new Xt(Ui,Ii,e,t);u.layers=this.layers,u.up.set(0,0,1),u.lookAt(0,-1,0),this.add(u);const p=new Xt(Ui,Ii,e,t);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,1),this.add(p);const h=new Xt(Ui,Ii,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[a,l,d,u,p,h]=this.children,m=e.getRenderTarget(),_=e.toneMapping,g=e.xr.enabled;e.toneMapping=bn,e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,a),e.setRenderTarget(i,1),e.render(t,l),e.setRenderTarget(i,2),e.render(t,d),e.setRenderTarget(i,3),e.render(t,u),e.setRenderTarget(i,4),e.render(t,p),i.texture.generateMipmaps=x,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(m),e.toneMapping=_,e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class yc extends Bt{constructor(e,t,i,a,l,d,u,p,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,i,a,l,d,u,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tf extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(vr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qn?Ve:ei),this.texture=new yc(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new wr(5,5,5),l=new si({name:"CubemapFromEquirect",uniforms:qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Fn});l.uniforms.tEquirect.value=t;const d=new Nn(a,l),u=t.minFilter;return t.minFilter===gr&&(t.minFilter=Wt),new ef(1,10,this).update(e,d),t.minFilter=u,d.geometry.dispose(),d.material.dispose(),this}clear(e,t,i,a){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,i,a);e.setRenderTarget(l)}}const po=new H,nf=new H,rf=new qe;class jn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=po.subVectors(i,t).cross(nf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(po),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rf.getNormalMatrix(e),a=this.coplanarPoint(po).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new hs,ts=new H;class Tc{constructor(e=new jn,t=new jn,i=new jn,a=new jn,l=new jn,d=new jn){this.planes=[e,t,i,a,l,d]}set(e,t,i,a,l,d){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(l),u[5].copy(d),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,a=i[0],l=i[1],d=i[2],u=i[3],p=i[4],h=i[5],m=i[6],_=i[7],g=i[8],x=i[9],S=i[10],E=i[11],b=i[12],f=i[13],L=i[14],R=i[15];return t[0].setComponents(u-a,_-p,E-g,R-b).normalize(),t[1].setComponents(u+a,_+p,E+g,R+b).normalize(),t[2].setComponents(u+l,_+h,E+x,R+f).normalize(),t[3].setComponents(u-l,_-h,E-x,R-f).normalize(),t[4].setComponents(u-d,_-m,E-S,R-L).normalize(),t[5].setComponents(u+d,_+m,E+S,R+L).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(ts.x=a.normal.x>0?e.max.x:e.min.x,ts.y=a.normal.y>0?e.max.y:e.min.y,ts.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cc(){let s=null,e=!1,t=null,i=null;function a(l,d){t(l,d),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function sf(s,e){const t=e.isWebGL2,i=new WeakMap;function a(h,m){const _=h.array,g=h.usage,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,_,g),h.onUploadCallback();let S;if(_ instanceof Float32Array)S=s.FLOAT;else if(_ instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)S=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=s.UNSIGNED_SHORT;else if(_ instanceof Int16Array)S=s.SHORT;else if(_ instanceof Uint32Array)S=s.UNSIGNED_INT;else if(_ instanceof Int32Array)S=s.INT;else if(_ instanceof Int8Array)S=s.BYTE;else if(_ instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:x,type:S,bytesPerElement:_.BYTES_PER_ELEMENT,version:h.version}}function l(h,m,_){const g=m.array,x=m.updateRange;s.bindBuffer(_,h),x.count===-1?s.bufferSubData(_,0,g):(t?s.bufferSubData(_,x.offset*g.BYTES_PER_ELEMENT,g,x.offset,x.count):s.bufferSubData(_,x.offset*g.BYTES_PER_ELEMENT,g.subarray(x.offset,x.offset+x.count)),x.count=-1),m.onUploadCallback()}function d(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=i.get(h);m&&(s.deleteBuffer(m.buffer),i.delete(h))}function p(h,m){if(h.isGLBufferAttribute){const g=i.get(h);(!g||g.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const _=i.get(h);_===void 0?i.set(h,a(h,m)):_.version<h.version&&(l(_.buffer,h,m),_.version=h.version)}return{get:d,remove:u,update:p}}class Uo extends xn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const l=e/2,d=t/2,u=Math.floor(i),p=Math.floor(a),h=u+1,m=p+1,_=e/u,g=t/p,x=[],S=[],E=[],b=[];for(let f=0;f<m;f++){const L=f*g-d;for(let R=0;R<h;R++){const P=R*_-l;S.push(P,-L,0),E.push(0,0,1),b.push(R/u),b.push(1-f/p)}}for(let f=0;f<p;f++)for(let L=0;L<u;L++){const R=L+h*f,P=L+h*(f+1),C=L+1+h*(f+1),N=L+1+h*f;x.push(R,P,N),x.push(P,C,N)}this.setIndex(x),this.setAttribute("position",new ti(S,3)),this.setAttribute("normal",new ti(E,3)),this.setAttribute("uv",new ti(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf="vec3 transformed = vec3( position );",pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,tm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,$m=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Zm=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qm=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,a_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,c_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,p_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,x_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,U_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:of,alphamap_pars_fragment:af,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:uf,aomap_pars_fragment:df,begin_vertex:hf,beginnormal_vertex:pf,bsdfs:ff,iridescence_fragment:mf,bumpmap_pars_fragment:_f,clipping_planes_fragment:vf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:xf,color_fragment:Ef,color_pars_fragment:Mf,color_pars_vertex:wf,color_vertex:Sf,common:yf,cube_uv_reflection_fragment:Tf,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Af,displacementmap_vertex:Pf,emissivemap_fragment:Rf,emissivemap_pars_fragment:Lf,encodings_fragment:Df,encodings_pars_fragment:Uf,envmap_fragment:If,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Yf,envmap_vertex:kf,fog_vertex:Bf,fog_pars_vertex:Vf,fog_fragment:zf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Hf,lightmap_fragment:Wf,lightmap_pars_fragment:Xf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:jf,lights_pars_begin:Kf,lights_toon_fragment:$f,lights_toon_pars_fragment:Zf,lights_phong_fragment:Jf,lights_phong_pars_fragment:Qf,lights_physical_fragment:em,lights_physical_pars_fragment:tm,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:rm,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:lm,map_fragment:cm,map_pars_fragment:um,map_particle_fragment:dm,map_particle_pars_fragment:hm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:fm,morphcolor_vertex:mm,morphnormal_vertex:_m,morphtarget_pars_vertex:vm,morphtarget_vertex:gm,normal_fragment_begin:bm,normal_fragment_maps:xm,normal_pars_fragment:Em,normal_pars_vertex:Mm,normal_vertex:wm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Am,output_fragment:Pm,packing:Rm,premultiplied_alpha_fragment:Lm,project_vertex:Dm,dithering_fragment:Um,dithering_pars_fragment:Im,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:km,shadowmap_vertex:Bm,shadowmask_pars_fragment:Vm,skinbase_vertex:zm,skinning_pars_vertex:Gm,skinning_vertex:Hm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:jm,tonemapping_pars_fragment:Km,transmission_fragment:Ym,transmission_pars_fragment:$m,uv_pars_fragment:Zm,uv_pars_vertex:Jm,uv_vertex:Qm,worldpos_vertex:e_,background_vert:t_,background_frag:n_,backgroundCube_vert:i_,backgroundCube_frag:r_,cube_vert:s_,cube_frag:o_,depth_vert:a_,depth_frag:l_,distanceRGBA_vert:c_,distanceRGBA_frag:u_,equirect_vert:d_,equirect_frag:h_,linedashed_vert:p_,linedashed_frag:f_,meshbasic_vert:m_,meshbasic_frag:__,meshlambert_vert:v_,meshlambert_frag:g_,meshmatcap_vert:b_,meshmatcap_frag:x_,meshnormal_vert:E_,meshnormal_frag:M_,meshphong_vert:w_,meshphong_frag:S_,meshphysical_vert:y_,meshphysical_frag:T_,meshtoon_vert:C_,meshtoon_frag:A_,points_vert:P_,points_frag:R_,shadow_vert:L_,shadow_frag:D_,sprite_vert:U_,sprite_frag:I_},me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaTest:{value:0}}},rn={basic:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Pt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Pt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Pt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Pt([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Pt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Pt([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Pt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Pt([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Pt([me.common,me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Pt([me.lights,me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};rn.physical={uniforms:Pt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ns={r:0,b:0,g:0};function N_(s,e,t,i,a,l,d){const u=new rt(0);let p=l===!0?0:1,h,m,_=null,g=0,x=null;function S(b,f){let L=!1,R=f.isScene===!0?f.background:null;switch(R&&R.isTexture&&(R=(f.backgroundBlurriness>0?t:e).get(R)),R===null?E(u,p):R&&R.isColor&&(E(R,1),L=!0),s.xr.getEnvironmentBlendMode()){case"opaque":L=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,d),L=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,d),L=!0;break}(s.autoClear||L)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),R&&(R.isCubeTexture||R.mapping===ds)?(m===void 0&&(m=new Nn(new wr(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:qi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,k,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,m.material.toneMapped=R.colorSpace!==Ve,(_!==R||g!==R.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,_=R,g=R.version,x=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new Nn(new Uo(2,2),new si({name:"BackgroundMaterial",uniforms:qi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=R.colorSpace!==Ve,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||g!==R.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,_=R,g=R.version,x=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function E(b,f){b.getRGB(ns,wc(s)),i.buffers.color.setClear(ns.r,ns.g,ns.b,f,d)}return{getClearColor:function(){return u},setClearColor:function(b,f=1){u.set(b),p=f,E(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(b){p=b,E(u,p)},render:S}}function F_(s,e,t,i){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=i.isWebGL2?null:e.get("OES_vertex_array_object"),d=i.isWebGL2||l!==null,u={},p=b(null);let h=p,m=!1;function _(j,Q,ae,$,z){let he=!1;if(d){const re=E($,ae,Q);h!==re&&(h=re,x(h.object)),he=f(j,$,ae,z),he&&L(j,$,ae,z)}else{const re=Q.wireframe===!0;(h.geometry!==$.id||h.program!==ae.id||h.wireframe!==re)&&(h.geometry=$.id,h.program=ae.id,h.wireframe=re,he=!0)}z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(he||m)&&(m=!1,J(j,Q,ae,$),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function g(){return i.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function x(j){return i.isWebGL2?s.bindVertexArray(j):l.bindVertexArrayOES(j)}function S(j){return i.isWebGL2?s.deleteVertexArray(j):l.deleteVertexArrayOES(j)}function E(j,Q,ae){const $=ae.wireframe===!0;let z=u[j.id];z===void 0&&(z={},u[j.id]=z);let he=z[Q.id];he===void 0&&(he={},z[Q.id]=he);let re=he[$];return re===void 0&&(re=b(g()),he[$]=re),re}function b(j){const Q=[],ae=[],$=[];for(let z=0;z<a;z++)Q[z]=0,ae[z]=0,$[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ae,attributeDivisors:$,object:j,attributes:{},index:null}}function f(j,Q,ae,$){const z=h.attributes,he=Q.attributes;let re=0;const Ae=ae.getAttributes();for(const de in Ae)if(Ae[de].location>=0){const q=z[de];let le=he[de];if(le===void 0&&(de==="instanceMatrix"&&j.instanceMatrix&&(le=j.instanceMatrix),de==="instanceColor"&&j.instanceColor&&(le=j.instanceColor)),q===void 0||q.attribute!==le||le&&q.data!==le.data)return!0;re++}return h.attributesNum!==re||h.index!==$}function L(j,Q,ae,$){const z={},he=Q.attributes;let re=0;const Ae=ae.getAttributes();for(const de in Ae)if(Ae[de].location>=0){let q=he[de];q===void 0&&(de==="instanceMatrix"&&j.instanceMatrix&&(q=j.instanceMatrix),de==="instanceColor"&&j.instanceColor&&(q=j.instanceColor));const le={};le.attribute=q,q&&q.data&&(le.data=q.data),z[de]=le,re++}h.attributes=z,h.attributesNum=re,h.index=$}function R(){const j=h.newAttributes;for(let Q=0,ae=j.length;Q<ae;Q++)j[Q]=0}function P(j){C(j,0)}function C(j,Q){const ae=h.newAttributes,$=h.enabledAttributes,z=h.attributeDivisors;ae[j]=1,$[j]===0&&(s.enableVertexAttribArray(j),$[j]=1),z[j]!==Q&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,Q),z[j]=Q)}function N(){const j=h.newAttributes,Q=h.enabledAttributes;for(let ae=0,$=Q.length;ae<$;ae++)Q[ae]!==j[ae]&&(s.disableVertexAttribArray(ae),Q[ae]=0)}function k(j,Q,ae,$,z,he){i.isWebGL2===!0&&(ae===s.INT||ae===s.UNSIGNED_INT)?s.vertexAttribIPointer(j,Q,ae,z,he):s.vertexAttribPointer(j,Q,ae,$,z,he)}function J(j,Q,ae,$){if(i.isWebGL2===!1&&(j.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const z=$.attributes,he=ae.getAttributes(),re=Q.defaultAttributeValues;for(const Ae in he){const de=he[Ae];if(de.location>=0){let K=z[Ae];if(K===void 0&&(Ae==="instanceMatrix"&&j.instanceMatrix&&(K=j.instanceMatrix),Ae==="instanceColor"&&j.instanceColor&&(K=j.instanceColor)),K!==void 0){const q=K.normalized,le=K.itemSize,_e=t.get(K);if(_e===void 0)continue;const F=_e.buffer,De=_e.type,Le=_e.bytesPerElement;if(K.isInterleavedBufferAttribute){const pe=K.data,we=pe.stride,Ye=K.offset;if(pe.isInstancedInterleavedBuffer){for(let Se=0;Se<de.locationSize;Se++)C(de.location+Se,pe.meshPerAttribute);j.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Se=0;Se<de.locationSize;Se++)P(de.location+Se);s.bindBuffer(s.ARRAY_BUFFER,F);for(let Se=0;Se<de.locationSize;Se++)k(de.location+Se,le/de.locationSize,De,q,we*Le,(Ye+le/de.locationSize*Se)*Le)}else{if(K.isInstancedBufferAttribute){for(let pe=0;pe<de.locationSize;pe++)C(de.location+pe,K.meshPerAttribute);j.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pe=0;pe<de.locationSize;pe++)P(de.location+pe);s.bindBuffer(s.ARRAY_BUFFER,F);for(let pe=0;pe<de.locationSize;pe++)k(de.location+pe,le/de.locationSize,De,q,le*Le,le/de.locationSize*pe*Le)}}else if(re!==void 0){const q=re[Ae];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(de.location,q);break;case 3:s.vertexAttrib3fv(de.location,q);break;case 4:s.vertexAttrib4fv(de.location,q);break;default:s.vertexAttrib1fv(de.location,q)}}}}N()}function M(){ne();for(const j in u){const Q=u[j];for(const ae in Q){const $=Q[ae];for(const z in $)S($[z].object),delete $[z];delete Q[ae]}delete u[j]}}function D(j){if(u[j.id]===void 0)return;const Q=u[j.id];for(const ae in Q){const $=Q[ae];for(const z in $)S($[z].object),delete $[z];delete Q[ae]}delete u[j.id]}function ie(j){for(const Q in u){const ae=u[Q];if(ae[j.id]===void 0)continue;const $=ae[j.id];for(const z in $)S($[z].object),delete $[z];delete ae[j.id]}}function ne(){V(),m=!0,h!==p&&(h=p,x(h.object))}function V(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:_,reset:ne,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:D,releaseStatesOfProgram:ie,initAttributes:R,enableAttribute:P,disableUnusedAttributes:N}}function O_(s,e,t,i){const a=i.isWebGL2;let l;function d(h){l=h}function u(h,m){s.drawArrays(l,h,m),t.update(m,l,1)}function p(h,m,_){if(_===0)return;let g,x;if(a)g=s,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](l,h,m,_),t.update(m,l,_)}this.setMode=d,this.render=u,this.renderInstances=p}function k_(s,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=t.precision!==void 0?t.precision:"highp";const p=l(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const h=d||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),E=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,P=d||e.has("OES_texture_float"),C=R&&P,N=d?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:h,getMaxAnisotropy:a,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:m,maxTextures:_,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:S,maxAttributes:E,maxVertexUniforms:b,maxVaryings:f,maxFragmentUniforms:L,vertexTextures:R,floatFragmentTextures:P,floatVertexTextures:C,maxSamples:N}}function B_(s){const e=this;let t=null,i=0,a=!1,l=!1;const d=new jn,u=new qe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||i!==0||a;return a=g,i=_.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=m(_,g,0)},this.setState=function(_,g,x){const S=_.clippingPlanes,E=_.clipIntersection,b=_.clipShadows,f=s.get(_);if(!a||S===null||S.length===0||l&&!b)l?m(null):h();else{const L=l?0:i,R=L*4;let P=f.clippingState||null;p.value=P,P=m(S,g,R,x);for(let C=0;C!==R;++C)P[C]=t[C];f.clippingState=P,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,g,x,S){const E=_!==null?_.length:0;let b=null;if(E!==0){if(b=p.value,S!==!0||b===null){const f=x+E*4,L=g.matrixWorldInverse;u.getNormalMatrix(L),(b===null||b.length<f)&&(b=new Float32Array(f));for(let R=0,P=x;R!==E;++R,P+=4)d.copy(_[R]).applyMatrix4(L,u),d.normal.toArray(b,P),b[P+3]=d.constant}p.value=b,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,b}}function V_(s){let e=new WeakMap;function t(d,u){return u===wo?d.mapping=Hi:u===So&&(d.mapping=Wi),d}function i(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const u=d.mapping;if(u===wo||u===So)if(e.has(d)){const p=e.get(d).texture;return t(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const h=new tf(p.height/2);return h.fromEquirectangularTexture(s,d),e.set(d,h),d.addEventListener("dispose",a),t(h.texture,d.mapping)}else return null}}return d}function a(d){const u=d.target;u.removeEventListener("dispose",a);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}class z_ extends Sc{constructor(e=-1,t=1,i=1,a=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-e,d=i+e,u=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,d=l+h*this.view.width,u-=m*this.view.offsetY,p=u-m*this.view.height}this.projectionMatrix.makeOrthographic(l,d,u,p,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bi=4,Dl=[.125,.215,.35,.446,.526,.582],Yn=20,fo=new z_,Ul=new rt;let mo=null;const Kn=(1+Math.sqrt(5))/2,Ni=1/Kn,Il=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Kn,Ni),new H(0,Kn,-Ni),new H(Ni,0,Kn),new H(-Ni,0,Kn),new H(Kn,Ni,0),new H(-Kn,Ni,0)];class Nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){mo=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mo),e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:br,format:Qt,colorSpace:sn,depthBuffer:!1},a=Fl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G_(l)),this._blurMaterial=H_(l,e,t)}return a}_compileMaterial(e){const t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,i,a){const u=new Xt(90,1,t,i),p=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,g=m.toneMapping;m.getClearColor(Ul),m.toneMapping=bn,m.autoClear=!1;const x=new xc({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),S=new Nn(new wr,x);let E=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,E=!0):(x.color.copy(Ul),E=!0);for(let f=0;f<6;f++){const L=f%3;L===0?(u.up.set(0,p[f],0),u.lookAt(h[f],0,0)):L===1?(u.up.set(0,0,p[f]),u.lookAt(0,h[f],0)):(u.up.set(0,p[f],0),u.lookAt(0,0,h[f]));const R=this._cubeSize;is(a,L*R,f>2?R:0,R,R),m.setRenderTarget(a),E&&m.render(S,u),m.render(e,u)}S.geometry.dispose(),S.material.dispose(),m.toneMapping=g,m.autoClear=_,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Hi||e.mapping===Wi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ol());const l=a?this._cubemapMaterial:this._equirectMaterial,d=new Nn(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const p=this._cubeSize;is(t,0,0,3*p,2*p),i.setRenderTarget(t),i.render(d,fo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=Il[(a-1)%Il.length];this._blur(e,a-1,a,l,d)}t.autoClear=i}_blur(e,t,i,a,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,i,a,"latitudinal",l),this._halfBlur(d,e,i,i,a,"longitudinal",l)}_halfBlur(e,t,i,a,l,d,u){const p=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Nn(this._lodPlanes[a],h),g=h.uniforms,x=this._sizeLods[i]-1,S=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Yn-1),E=l/S,b=isFinite(l)?1+Math.floor(m*E):Yn;b>Yn&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Yn}`);const f=[];let L=0;for(let k=0;k<Yn;++k){const J=k/E,M=Math.exp(-J*J/2);f.push(M),k===0?L+=M:k<b&&(L+=2*M)}for(let k=0;k<f.length;k++)f[k]=f[k]/L;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=f,g.latitudinal.value=d==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:R}=this;g.dTheta.value=S,g.mipInt.value=R-i;const P=this._sizeLods[a],C=3*P*(a>R-Bi?a-R+Bi:0),N=4*(this._cubeSize-P);is(t,C,N,3*P,2*P),p.setRenderTarget(t),p.render(_,fo)}}function G_(s){const e=[],t=[],i=[];let a=s;const l=s-Bi+1+Dl.length;for(let d=0;d<l;d++){const u=Math.pow(2,a);t.push(u);let p=1/u;d>s-Bi?p=Dl[d-s+Bi-1]:d===0&&(p=0),i.push(p);const h=1/(u-2),m=-h,_=1+h,g=[m,m,_,m,_,_,m,m,_,_,m,_],x=6,S=6,E=3,b=2,f=1,L=new Float32Array(E*S*x),R=new Float32Array(b*S*x),P=new Float32Array(f*S*x);for(let N=0;N<x;N++){const k=N%3*2/3-1,J=N>2?0:-1,M=[k,J,0,k+2/3,J,0,k+2/3,J+1,0,k,J,0,k+2/3,J+1,0,k,J+1,0];L.set(M,E*S*N),R.set(g,b*S*N);const D=[N,N,N,N,N,N];P.set(D,f*S*N)}const C=new xn;C.setAttribute("position",new qt(L,E)),C.setAttribute("uv",new qt(R,b)),C.setAttribute("faceIndex",new qt(P,f)),e.push(C),a>Bi&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fl(s,e,t){const i=new ii(s,e,t);return i.texture.mapping=ds,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function H_(s,e,t){const i=new Float32Array(Yn),a=new H(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ol(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function kl(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Io(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function W_(s){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const p=u.mapping,h=p===wo||p===So,m=p===Hi||p===Wi;if(h||m)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let _=e.get(u);return t===null&&(t=new Nl(s)),_=h?t.fromEquirectangular(u,_):t.fromCubemap(u,_),e.set(u,_),_.texture}else{if(e.has(u))return e.get(u).texture;{const _=u.image;if(h&&_&&_.height>0||m&&_&&a(_)){t===null&&(t=new Nl(s));const g=h?t.fromEquirectangular(u):t.fromCubemap(u);return e.set(u,g),u.addEventListener("dispose",l),g.texture}else return null}}}return u}function a(u){let p=0;const h=6;for(let m=0;m<h;m++)u[m]!==void 0&&p++;return p===h}function l(u){const p=u.target;p.removeEventListener("dispose",l);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:d}}function X_(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function q_(s,e,t,i){const a={},l=new WeakMap;function d(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",d),delete a[g.id];const x=l.get(g);x&&(e.remove(x),l.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(_,g){return a[g.id]===!0||(g.addEventListener("dispose",d),a[g.id]=!0,t.memory.geometries++),g}function p(_){const g=_.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER);const x=_.morphAttributes;for(const S in x){const E=x[S];for(let b=0,f=E.length;b<f;b++)e.update(E[b],s.ARRAY_BUFFER)}}function h(_){const g=[],x=_.index,S=_.attributes.position;let E=0;if(x!==null){const L=x.array;E=x.version;for(let R=0,P=L.length;R<P;R+=3){const C=L[R+0],N=L[R+1],k=L[R+2];g.push(C,N,N,k,k,C)}}else{const L=S.array;E=S.version;for(let R=0,P=L.length/3-1;R<P;R+=3){const C=R+0,N=R+1,k=R+2;g.push(C,N,N,k,k,C)}}const b=new(pc(g)?Mc:Ec)(g,1);b.version=E;const f=l.get(_);f&&e.remove(f),l.set(_,b)}function m(_){const g=l.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&h(_)}else h(_);return l.get(_)}return{get:u,update:p,getWireframeAttribute:m}}function j_(s,e,t,i){const a=i.isWebGL2;let l;function d(g){l=g}let u,p;function h(g){u=g.type,p=g.bytesPerElement}function m(g,x){s.drawElements(l,x,u,g*p),t.update(x,l,1)}function _(g,x,S){if(S===0)return;let E,b;if(a)E=s,b="drawElementsInstanced";else if(E=e.get("ANGLE_instanced_arrays"),b="drawElementsInstancedANGLE",E===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[b](l,x,u,g*p,S),t.update(x,l,S)}this.setMode=d,this.setIndex=h,this.render=m,this.renderInstances=_}function K_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,d,u){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=u*(l/3);break;case s.LINES:t.lines+=u*(l/2);break;case s.LINE_STRIP:t.lines+=u*(l-1);break;case s.LINE_LOOP:t.lines+=u*l;break;case s.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function Y_(s,e){return s[0]-e[0]}function $_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Z_(s,e,t){const i={},a=new Float32Array(8),l=new WeakMap,d=new yt,u=[];for(let h=0;h<8;h++)u[h]=[h,0];function p(h,m,_){const g=h.morphTargetInfluences;if(e.isWebGL2===!0){const S=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,E=S!==void 0?S.length:0;let b=l.get(m);if(b===void 0||b.count!==E){let Q=function(){V.dispose(),l.delete(m),m.removeEventListener("dispose",Q)};var x=Q;b!==void 0&&b.texture.dispose();const R=m.morphAttributes.position!==void 0,P=m.morphAttributes.normal!==void 0,C=m.morphAttributes.color!==void 0,N=m.morphAttributes.position||[],k=m.morphAttributes.normal||[],J=m.morphAttributes.color||[];let M=0;R===!0&&(M=1),P===!0&&(M=2),C===!0&&(M=3);let D=m.attributes.position.count*M,ie=1;D>e.maxTextureSize&&(ie=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const ne=new Float32Array(D*ie*4*E),V=new _c(ne,D,ie,E);V.type=Zn,V.needsUpdate=!0;const j=M*4;for(let ae=0;ae<E;ae++){const $=N[ae],z=k[ae],he=J[ae],re=D*ie*4*ae;for(let Ae=0;Ae<$.count;Ae++){const de=Ae*j;R===!0&&(d.fromBufferAttribute($,Ae),ne[re+de+0]=d.x,ne[re+de+1]=d.y,ne[re+de+2]=d.z,ne[re+de+3]=0),P===!0&&(d.fromBufferAttribute(z,Ae),ne[re+de+4]=d.x,ne[re+de+5]=d.y,ne[re+de+6]=d.z,ne[re+de+7]=0),C===!0&&(d.fromBufferAttribute(he,Ae),ne[re+de+8]=d.x,ne[re+de+9]=d.y,ne[re+de+10]=d.z,ne[re+de+11]=he.itemSize===4?d.w:1)}}b={count:E,texture:V,size:new je(D,ie)},l.set(m,b),m.addEventListener("dispose",Q)}let f=0;for(let R=0;R<g.length;R++)f+=g[R];const L=m.morphTargetsRelative?1:1-f;_.getUniforms().setValue(s,"morphTargetBaseInfluence",L),_.getUniforms().setValue(s,"morphTargetInfluences",g),_.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),_.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{const S=g===void 0?0:g.length;let E=i[m.id];if(E===void 0||E.length!==S){E=[];for(let P=0;P<S;P++)E[P]=[P,0];i[m.id]=E}for(let P=0;P<S;P++){const C=E[P];C[0]=P,C[1]=g[P]}E.sort($_);for(let P=0;P<8;P++)P<S&&E[P][1]?(u[P][0]=E[P][0],u[P][1]=E[P][1]):(u[P][0]=Number.MAX_SAFE_INTEGER,u[P][1]=0);u.sort(Y_);const b=m.morphAttributes.position,f=m.morphAttributes.normal;let L=0;for(let P=0;P<8;P++){const C=u[P],N=C[0],k=C[1];N!==Number.MAX_SAFE_INTEGER&&k?(b&&m.getAttribute("morphTarget"+P)!==b[N]&&m.setAttribute("morphTarget"+P,b[N]),f&&m.getAttribute("morphNormal"+P)!==f[N]&&m.setAttribute("morphNormal"+P,f[N]),a[P]=k,L+=k):(b&&m.hasAttribute("morphTarget"+P)===!0&&m.deleteAttribute("morphTarget"+P),f&&m.hasAttribute("morphNormal"+P)===!0&&m.deleteAttribute("morphNormal"+P),a[P]=0)}const R=m.morphTargetsRelative?1:1-L;_.getUniforms().setValue(s,"morphTargetBaseInfluence",R),_.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:p}}function J_(s,e,t,i){let a=new WeakMap;function l(p){const h=i.render.frame,m=p.geometry,_=e.get(p,m);return a.get(_)!==h&&(e.update(_),a.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",u)===!1&&p.addEventListener("dispose",u),t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER)),_}function d(){a=new WeakMap}function u(p){const h=p.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:d}}const Ac=new Bt,Pc=new _c,Rc=new Bp,Lc=new yc,Bl=[],Vl=[],zl=new Float32Array(16),Gl=new Float32Array(9),Hl=new Float32Array(4);function ji(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let l=Bl[a];if(l===void 0&&(l=new Float32Array(a),Bl[a]=l),e!==0){i.toArray(l,0);for(let d=1,u=0;d!==e;++d)u+=t,s[d].toArray(l,u)}return l}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function bt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function fs(s,e){let t=Vl[e];t===void 0&&(t=new Int32Array(e),Vl[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Q_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ev(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),bt(t,e)}}function tv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),bt(t,e)}}function nv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),bt(t,e)}}function iv(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(gt(t,i))return;Hl.set(i),s.uniformMatrix2fv(this.addr,!1,Hl),bt(t,i)}}function rv(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(gt(t,i))return;Gl.set(i),s.uniformMatrix3fv(this.addr,!1,Gl),bt(t,i)}}function sv(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(gt(t,i))return;zl.set(i),s.uniformMatrix4fv(this.addr,!1,zl),bt(t,i)}}function ov(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function av(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),bt(t,e)}}function lv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),bt(t,e)}}function cv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),bt(t,e)}}function uv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function dv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),bt(t,e)}}function hv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),bt(t,e)}}function pv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),bt(t,e)}}function fv(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2D(e||Ac,a)}function mv(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Rc,a)}function _v(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Lc,a)}function vv(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Pc,a)}function gv(s){switch(s){case 5126:return Q_;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return rv;case 35676:return sv;case 5124:case 35670:return ov;case 35667:case 35671:return av;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return uv;case 36294:return dv;case 36295:return hv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return vv}}function bv(s,e){s.uniform1fv(this.addr,e)}function xv(s,e){const t=ji(e,this.size,2);s.uniform2fv(this.addr,t)}function Ev(s,e){const t=ji(e,this.size,3);s.uniform3fv(this.addr,t)}function Mv(s,e){const t=ji(e,this.size,4);s.uniform4fv(this.addr,t)}function wv(s,e){const t=ji(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Sv(s,e){const t=ji(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yv(s,e){const t=ji(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Tv(s,e){s.uniform1iv(this.addr,e)}function Cv(s,e){s.uniform2iv(this.addr,e)}function Av(s,e){s.uniform3iv(this.addr,e)}function Pv(s,e){s.uniform4iv(this.addr,e)}function Rv(s,e){s.uniform1uiv(this.addr,e)}function Lv(s,e){s.uniform2uiv(this.addr,e)}function Dv(s,e){s.uniform3uiv(this.addr,e)}function Uv(s,e){s.uniform4uiv(this.addr,e)}function Iv(s,e,t){const i=this.cache,a=e.length,l=fs(t,a);gt(i,l)||(s.uniform1iv(this.addr,l),bt(i,l));for(let d=0;d!==a;++d)t.setTexture2D(e[d]||Ac,l[d])}function Nv(s,e,t){const i=this.cache,a=e.length,l=fs(t,a);gt(i,l)||(s.uniform1iv(this.addr,l),bt(i,l));for(let d=0;d!==a;++d)t.setTexture3D(e[d]||Rc,l[d])}function Fv(s,e,t){const i=this.cache,a=e.length,l=fs(t,a);gt(i,l)||(s.uniform1iv(this.addr,l),bt(i,l));for(let d=0;d!==a;++d)t.setTextureCube(e[d]||Lc,l[d])}function Ov(s,e,t){const i=this.cache,a=e.length,l=fs(t,a);gt(i,l)||(s.uniform1iv(this.addr,l),bt(i,l));for(let d=0;d!==a;++d)t.setTexture2DArray(e[d]||Pc,l[d])}function kv(s){switch(s){case 5126:return bv;case 35664:return xv;case 35665:return Ev;case 35666:return Mv;case 35674:return wv;case 35675:return Sv;case 35676:return yv;case 5124:case 35670:return Tv;case 35667:case 35671:return Cv;case 35668:case 35672:return Av;case 35669:case 35673:return Pv;case 5125:return Rv;case 36294:return Lv;case 36295:return Dv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Ov}}class Bv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=gv(t.type)}}class Vv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=kv(t.type)}}class zv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let l=0,d=a.length;l!==d;++l){const u=a[l];u.setValue(e,t[u.id],i)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function Wl(s,e){s.seq.push(e),s.map[e.id]=e}function Gv(s,e,t){const i=s.name,a=i.length;for(_o.lastIndex=0;;){const l=_o.exec(i),d=_o.lastIndex;let u=l[1];const p=l[2]==="]",h=l[3];if(p&&(u=u|0),h===void 0||h==="["&&d+2===a){Wl(t,h===void 0?new Bv(u,s,e):new Vv(u,s,e));break}else{let _=t.map[u];_===void 0&&(_=new zv(u),Wl(t,_)),t=_}}}class as{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(t,a),d=e.getUniformLocation(t,l.name);Gv(l,d,this)}}setValue(e,t,i,a){const l=this.map[t];l!==void 0&&l.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let l=0,d=t.length;l!==d;++l){const u=t[l],p=i[u.id];p.needsUpdate!==!1&&u.setValue(e,p.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,l=e.length;a!==l;++a){const d=e[a];d.id in t&&i.push(d)}return i}}function Xl(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let Hv=0;function Wv(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=a;d<l;d++){const u=d+1;i.push(`${u===e?">":" "} ${u}: ${t[d]}`)}return i.join(`
`)}function Xv(s){switch(s){case sn:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function ql(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(i&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const d=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+Wv(s.getShaderSource(e),d)}else return a}function qv(s,e){const t=Xv(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function jv(s,e){let t;switch(e){case rp:t="Linear";break;case sp:t="Reinhard";break;case op:t="OptimizedCineon";break;case ap:t="ACESFilmic";break;case lp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function Yv(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $v(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=s.getActiveAttrib(e,a),d=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:u}}return t}function _r(s){return s!==""}function jl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(s){return s.replace(Zv,Jv)}function Jv(s,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Po(t)}const Qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(s){return s.replace(Qv,eg)}function eg(s,e,t,i){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function $l(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hi:case Wi:e="ENVMAP_TYPE_CUBE";break;case ds:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function rg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case lc:e="ENVMAP_BLENDING_MULTIPLY";break;case np:e="ENVMAP_BLENDING_MIX";break;case ip:e="ENVMAP_BLENDING_ADD";break}return e}function sg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function og(s,e,t,i){const a=s.getContext(),l=t.defines;let d=t.vertexShader,u=t.fragmentShader;const p=tg(t),h=ng(t),m=ig(t),_=rg(t),g=sg(t),x=t.isWebGL2?"":Kv(t),S=Yv(l),E=a.createProgram();let b,f,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=[S].filter(_r).join(`
`),b.length>0&&(b+=`
`),f=[x,S].filter(_r).join(`
`),f.length>0&&(f+=`
`)):(b=[$l(t),"#define SHADER_NAME "+t.shaderName,S,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),f=[x,$l(t),"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==bn?jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),d=Po(d),d=jl(d,t),d=Kl(d,t),u=Po(u),u=jl(u,t),u=Kl(u,t),d=Yl(d),u=Yl(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,b=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,f=["#define varying in",t.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=L+b+d,P=L+f+u,C=Xl(a,a.VERTEX_SHADER,R),N=Xl(a,a.FRAGMENT_SHADER,P);if(a.attachShader(E,C),a.attachShader(E,N),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E),s.debug.checkShaderErrors){const M=a.getProgramInfoLog(E).trim(),D=a.getShaderInfoLog(C).trim(),ie=a.getShaderInfoLog(N).trim();let ne=!0,V=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,C,N);else{const j=ql(a,C,"vertex"),Q=ql(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+j+`
`+Q)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(D===""||ie==="")&&(V=!1);V&&(this.diagnostics={runnable:ne,programLog:M,vertexShader:{log:D,prefix:b},fragmentShader:{log:ie,prefix:f}})}a.deleteShader(C),a.deleteShader(N);let k;this.getUniforms=function(){return k===void 0&&(k=new as(a,E)),k};let J;return this.getAttributes=function(){return J===void 0&&(J=$v(a,E)),J},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.name=t.shaderName,this.id=Hv++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=N,this}let ag=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(i),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cg(e),t.set(e,i)),i}}class cg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function ug(s,e,t,i,a,l,d){const u=new gc,p=new lg,h=[],m=a.isWebGL2,_=a.logarithmicDepthBuffer,g=a.vertexTextures;let x=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(M){return M===1?"uv1":M===2?"uv2":M===3?"uv3":"uv"}function b(M,D,ie,ne,V){const j=ne.fog,Q=V.geometry,ae=M.isMeshStandardMaterial?ne.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||ae),z=$&&$.mapping===ds?$.image.height:null,he=S[M.type];M.precision!==null&&(x=a.getMaxPrecision(M.precision),x!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",x,"instead."));const re=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ae=re!==void 0?re.length:0;let de=0;Q.morphAttributes.position!==void 0&&(de=1),Q.morphAttributes.normal!==void 0&&(de=2),Q.morphAttributes.color!==void 0&&(de=3);let K,q,le,_e;if(he){const et=rn[he];K=et.vertexShader,q=et.fragmentShader}else K=M.vertexShader,q=M.fragmentShader,p.update(M),le=p.getVertexShaderID(M),_e=p.getFragmentShaderID(M);const F=s.getRenderTarget(),De=V.isInstancedMesh===!0,Le=!!M.map,pe=!!M.matcap,we=!!$,Ye=!!M.aoMap,Se=!!M.lightMap,Oe=!!M.bumpMap,nt=!!M.normalMap,Ke=!!M.displacementMap,st=!!M.emissiveMap,lt=!!M.metalnessMap,Xe=!!M.roughnessMap,it=M.clearcoat>0,xt=M.iridescence>0,T=M.sheen>0,w=M.transmission>0,X=it&&!!M.clearcoatMap,oe=it&&!!M.clearcoatNormalMap,ce=it&&!!M.clearcoatRoughnessMap,fe=xt&&!!M.iridescenceMap,U=xt&&!!M.iridescenceThicknessMap,te=T&&!!M.sheenColorMap,W=T&&!!M.sheenRoughnessMap,ve=!!M.specularMap,xe=!!M.specularColorMap,Me=!!M.specularIntensityMap,ge=w&&!!M.transmissionMap,Ee=w&&!!M.thicknessMap,Re=!!M.gradientMap,Fe=!!M.alphaMap,ct=M.alphaTest>0,I=!!M.extensions,Y=!!Q.attributes.uv1,se=!!Q.attributes.uv2,be=!!Q.attributes.uv3;return{isWebGL2:m,shaderID:he,shaderName:M.type,vertexShader:K,fragmentShader:q,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:x,instancing:De,instancingColor:De&&V.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:F===null?s.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:sn,map:Le,matcap:pe,envMap:we,envMapMode:we&&$.mapping,envMapCubeUVHeight:z,aoMap:Ye,lightMap:Se,bumpMap:Oe,normalMap:nt,displacementMap:g&&Ke,emissiveMap:st,normalMapObjectSpace:nt&&M.normalMapType===Ap,normalMapTangentSpace:nt&&M.normalMapType===Cp,metalnessMap:lt,roughnessMap:Xe,clearcoat:it,clearcoatMap:X,clearcoatNormalMap:oe,clearcoatRoughnessMap:ce,iridescence:xt,iridescenceMap:fe,iridescenceThicknessMap:U,sheen:T,sheenColorMap:te,sheenRoughnessMap:W,specularMap:ve,specularColorMap:xe,specularIntensityMap:Me,transmission:w,transmissionMap:ge,thicknessMap:Ee,gradientMap:Re,opaque:M.transparent===!1&&M.blending===Vi,alphaMap:Fe,alphaTest:ct,combine:M.combine,mapUv:Le&&E(M.map.channel),aoMapUv:Ye&&E(M.aoMap.channel),lightMapUv:Se&&E(M.lightMap.channel),bumpMapUv:Oe&&E(M.bumpMap.channel),normalMapUv:nt&&E(M.normalMap.channel),displacementMapUv:Ke&&E(M.displacementMap.channel),emissiveMapUv:st&&E(M.emissiveMap.channel),metalnessMapUv:lt&&E(M.metalnessMap.channel),roughnessMapUv:Xe&&E(M.roughnessMap.channel),clearcoatMapUv:X&&E(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&E(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&E(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&E(M.iridescenceMap.channel),iridescenceThicknessMapUv:U&&E(M.iridescenceThicknessMap.channel),sheenColorMapUv:te&&E(M.sheenColorMap.channel),sheenRoughnessMapUv:W&&E(M.sheenRoughnessMap.channel),specularMapUv:ve&&E(M.specularMap.channel),specularColorMapUv:xe&&E(M.specularColorMap.channel),specularIntensityMapUv:Me&&E(M.specularIntensityMap.channel),transmissionMapUv:ge&&E(M.transmissionMap.channel),thicknessMapUv:Ee&&E(M.thicknessMap.channel),alphaMapUv:Fe&&E(M.alphaMap.channel),vertexTangents:nt&&!!Q.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:Y,vertexUv2s:se,vertexUv3s:be,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(Le||Fe),fog:!!j,useFog:M.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:de,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&ie.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:bn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gn,flipSided:M.side===It,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:I&&M.extensions.derivatives===!0,extensionFragDepth:I&&M.extensions.fragDepth===!0,extensionDrawBuffers:I&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const D=[];if(M.shaderID?D.push(M.shaderID):(D.push(M.customVertexShaderID),D.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ie in M.defines)D.push(ie),D.push(M.defines[ie]);return M.isRawShaderMaterial===!1&&(L(D,M),R(D,M),D.push(s.outputColorSpace)),D.push(M.customProgramCacheKey),D.join()}function L(M,D){M.push(D.precision),M.push(D.outputColorSpace),M.push(D.envMapMode),M.push(D.envMapCubeUVHeight),M.push(D.mapUv),M.push(D.alphaMapUv),M.push(D.lightMapUv),M.push(D.aoMapUv),M.push(D.bumpMapUv),M.push(D.normalMapUv),M.push(D.displacementMapUv),M.push(D.emissiveMapUv),M.push(D.metalnessMapUv),M.push(D.roughnessMapUv),M.push(D.clearcoatMapUv),M.push(D.clearcoatNormalMapUv),M.push(D.clearcoatRoughnessMapUv),M.push(D.iridescenceMapUv),M.push(D.iridescenceThicknessMapUv),M.push(D.sheenColorMapUv),M.push(D.sheenRoughnessMapUv),M.push(D.specularMapUv),M.push(D.specularColorMapUv),M.push(D.specularIntensityMapUv),M.push(D.transmissionMapUv),M.push(D.thicknessMapUv),M.push(D.combine),M.push(D.fogExp2),M.push(D.sizeAttenuation),M.push(D.morphTargetsCount),M.push(D.morphAttributeCount),M.push(D.numDirLights),M.push(D.numPointLights),M.push(D.numSpotLights),M.push(D.numSpotLightMaps),M.push(D.numHemiLights),M.push(D.numRectAreaLights),M.push(D.numDirLightShadows),M.push(D.numPointLightShadows),M.push(D.numSpotLightShadows),M.push(D.numSpotLightShadowsWithMaps),M.push(D.shadowMapType),M.push(D.toneMapping),M.push(D.numClippingPlanes),M.push(D.numClipIntersection),M.push(D.depthPacking)}function R(M,D){u.disableAll(),D.isWebGL2&&u.enable(0),D.supportsVertexTextures&&u.enable(1),D.instancing&&u.enable(2),D.instancingColor&&u.enable(3),D.matcap&&u.enable(4),D.envMap&&u.enable(5),D.normalMapObjectSpace&&u.enable(6),D.normalMapTangentSpace&&u.enable(7),D.clearcoat&&u.enable(8),D.iridescence&&u.enable(9),D.alphaTest&&u.enable(10),D.vertexColors&&u.enable(11),D.vertexAlphas&&u.enable(12),D.vertexUv1s&&u.enable(13),D.vertexUv2s&&u.enable(14),D.vertexUv3s&&u.enable(15),D.vertexTangents&&u.enable(16),M.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.skinning&&u.enable(4),D.morphTargets&&u.enable(5),D.morphNormals&&u.enable(6),D.morphColors&&u.enable(7),D.premultipliedAlpha&&u.enable(8),D.shadowMapEnabled&&u.enable(9),D.useLegacyLights&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),M.push(u.mask)}function P(M){const D=S[M.type];let ie;if(D){const ne=rn[D];ie=Zp.clone(ne.uniforms)}else ie=M.uniforms;return ie}function C(M,D){let ie;for(let ne=0,V=h.length;ne<V;ne++){const j=h[ne];if(j.cacheKey===D){ie=j,++ie.usedTimes;break}}return ie===void 0&&(ie=new og(s,D,M,l),h.push(ie)),ie}function N(M){if(--M.usedTimes===0){const D=h.indexOf(M);h[D]=h[h.length-1],h.pop(),M.destroy()}}function k(M){p.remove(M)}function J(){p.dispose()}return{getParameters:b,getProgramCacheKey:f,getUniforms:P,acquireProgram:C,releaseProgram:N,releaseShaderCache:k,programs:h,dispose:J}}function dg(){let s=new WeakMap;function e(l){let d=s.get(l);return d===void 0&&(d={},s.set(l,d)),d}function t(l){s.delete(l)}function i(l,d,u){s.get(l)[d]=u}function a(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function hg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Zl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jl(){const s=[];let e=0;const t=[],i=[],a=[];function l(){e=0,t.length=0,i.length=0,a.length=0}function d(_,g,x,S,E,b){let f=s[e];return f===void 0?(f={id:_.id,object:_,geometry:g,material:x,groupOrder:S,renderOrder:_.renderOrder,z:E,group:b},s[e]=f):(f.id=_.id,f.object=_,f.geometry=g,f.material=x,f.groupOrder=S,f.renderOrder=_.renderOrder,f.z=E,f.group=b),e++,f}function u(_,g,x,S,E,b){const f=d(_,g,x,S,E,b);x.transmission>0?i.push(f):x.transparent===!0?a.push(f):t.push(f)}function p(_,g,x,S,E,b){const f=d(_,g,x,S,E,b);x.transmission>0?i.unshift(f):x.transparent===!0?a.unshift(f):t.unshift(f)}function h(_,g){t.length>1&&t.sort(_||hg),i.length>1&&i.sort(g||Zl),a.length>1&&a.sort(g||Zl)}function m(){for(let _=e,g=s.length;_<g;_++){const x=s[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:a,init:l,push:u,unshift:p,finish:m,sort:h}}function pg(){let s=new WeakMap;function e(i,a){const l=s.get(i);let d;return l===void 0?(d=new Jl,s.set(i,[d])):a>=l.length?(d=new Jl,l.push(d)):d=l[a],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function fg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new rt};break;case"SpotLight":t={position:new H,direction:new H,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function mg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let _g=0;function vg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gg(s,e){const t=new fg,i=mg(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)a.probe.push(new H);const l=new H,d=new wt,u=new wt;function p(m,_){let g=0,x=0,S=0;for(let ie=0;ie<9;ie++)a.probe[ie].set(0,0,0);let E=0,b=0,f=0,L=0,R=0,P=0,C=0,N=0,k=0,J=0;m.sort(vg);const M=_===!0?Math.PI:1;for(let ie=0,ne=m.length;ie<ne;ie++){const V=m[ie],j=V.color,Q=V.intensity,ae=V.distance,$=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=j.r*Q*M,x+=j.g*Q*M,S+=j.b*Q*M;else if(V.isLightProbe)for(let z=0;z<9;z++)a.probe[z].addScaledVector(V.sh.coefficients[z],Q);else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity*M),V.castShadow){const he=V.shadow,re=i.get(V);re.shadowBias=he.bias,re.shadowNormalBias=he.normalBias,re.shadowRadius=he.radius,re.shadowMapSize=he.mapSize,a.directionalShadow[E]=re,a.directionalShadowMap[E]=$,a.directionalShadowMatrix[E]=V.shadow.matrix,P++}a.directional[E]=z,E++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(j).multiplyScalar(Q*M),z.distance=ae,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,a.spot[f]=z;const he=V.shadow;if(V.map&&(a.spotLightMap[k]=V.map,k++,he.updateMatrices(V),V.castShadow&&J++),a.spotLightMatrix[f]=he.matrix,V.castShadow){const re=i.get(V);re.shadowBias=he.bias,re.shadowNormalBias=he.normalBias,re.shadowRadius=he.radius,re.shadowMapSize=he.mapSize,a.spotShadow[f]=re,a.spotShadowMap[f]=$,N++}f++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(j).multiplyScalar(Q),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),a.rectArea[L]=z,L++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity*M),z.distance=V.distance,z.decay=V.decay,V.castShadow){const he=V.shadow,re=i.get(V);re.shadowBias=he.bias,re.shadowNormalBias=he.normalBias,re.shadowRadius=he.radius,re.shadowMapSize=he.mapSize,re.shadowCameraNear=he.camera.near,re.shadowCameraFar=he.camera.far,a.pointShadow[b]=re,a.pointShadowMap[b]=$,a.pointShadowMatrix[b]=V.shadow.matrix,C++}a.point[b]=z,b++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(Q*M),z.groundColor.copy(V.groundColor).multiplyScalar(Q*M),a.hemi[R]=z,R++}}L>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=me.LTC_FLOAT_1,a.rectAreaLTC2=me.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=me.LTC_HALF_1,a.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=g,a.ambient[1]=x,a.ambient[2]=S;const D=a.hash;(D.directionalLength!==E||D.pointLength!==b||D.spotLength!==f||D.rectAreaLength!==L||D.hemiLength!==R||D.numDirectionalShadows!==P||D.numPointShadows!==C||D.numSpotShadows!==N||D.numSpotMaps!==k)&&(a.directional.length=E,a.spot.length=f,a.rectArea.length=L,a.point.length=b,a.hemi.length=R,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=N+k-J,a.spotLightMap.length=k,a.numSpotLightShadowsWithMaps=J,D.directionalLength=E,D.pointLength=b,D.spotLength=f,D.rectAreaLength=L,D.hemiLength=R,D.numDirectionalShadows=P,D.numPointShadows=C,D.numSpotShadows=N,D.numSpotMaps=k,a.version=_g++)}function h(m,_){let g=0,x=0,S=0,E=0,b=0;const f=_.matrixWorldInverse;for(let L=0,R=m.length;L<R;L++){const P=m[L];if(P.isDirectionalLight){const C=a.directional[g];C.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(f),g++}else if(P.isSpotLight){const C=a.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(f),S++}else if(P.isRectAreaLight){const C=a.rectArea[E];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(f),u.identity(),d.copy(P.matrixWorld),d.premultiply(f),u.extractRotation(d),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const C=a.point[x];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(f),x++}else if(P.isHemisphereLight){const C=a.hemi[b];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(f),b++}}}return{setup:p,setupView:h,state:a}}function Ql(s,e){const t=new gg(s,e),i=[],a=[];function l(){i.length=0,a.length=0}function d(_){i.push(_)}function u(_){a.push(_)}function p(_){t.setup(i,_)}function h(_){t.setupView(i,_)}return{init:l,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:p,setupLightsView:h,pushLight:d,pushShadow:u}}function bg(s,e){let t=new WeakMap;function i(l,d=0){const u=t.get(l);let p;return u===void 0?(p=new Ql(s,e),t.set(l,[p])):d>=u.length?(p=new Ql(s,e),u.push(p)):p=u[d],p}function a(){t=new WeakMap}return{get:i,dispose:a}}class xg extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eg extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sg(s,e,t){let i=new Tc;const a=new je,l=new je,d=new yt,u=new xg({depthPacking:Tp}),p=new Eg,h={},m=t.maxTextureSize,_={[On]:It,[It]:On,[gn]:gn},g=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Mg,fragmentShader:wg}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const S=new xn;S.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Nn(S,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let f=this.type;this.render=function(C,N,k){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||C.length===0)return;const J=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(Fn),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const ne=f!==vn&&this.type===vn,V=f===vn&&this.type!==vn;for(let j=0,Q=C.length;j<Q;j++){const ae=C[j],$=ae.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const z=$.getFrameExtents();if(a.multiply(z),l.copy($.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/z.x),a.x=l.x*z.x,$.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/z.y),a.y=l.y*z.y,$.mapSize.y=l.y)),$.map===null||ne===!0||V===!0){const re=this.type!==vn?{minFilter:Rt,magFilter:Rt}:{};$.map!==null&&$.map.dispose(),$.map=new ii(a.x,a.y,re),$.map.texture.name=ae.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const he=$.getViewportCount();for(let re=0;re<he;re++){const Ae=$.getViewport(re);d.set(l.x*Ae.x,l.y*Ae.y,l.x*Ae.z,l.y*Ae.w),ie.viewport(d),$.updateMatrices(ae,re),i=$.getFrustum(),P(N,k,$.camera,ae,this.type)}$.isPointLightShadow!==!0&&this.type===vn&&L($,k),$.needsUpdate=!1}f=this.type,b.needsUpdate=!1,s.setRenderTarget(J,M,D)};function L(C,N){const k=e.update(E);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,x.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ii(a.x,a.y)),g.uniforms.shadow_pass.value=C.map.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(N,null,k,g,E,null),x.uniforms.shadow_pass.value=C.mapPass.texture,x.uniforms.resolution.value=C.mapSize,x.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(N,null,k,x,E,null)}function R(C,N,k,J){let M=null;const D=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=k.isPointLight===!0?p:u,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ie=M.uuid,ne=N.uuid;let V=h[ie];V===void 0&&(V={},h[ie]=V);let j=V[ne];j===void 0&&(j=M.clone(),V[ne]=j),M=j}if(M.visible=N.visible,M.wireframe=N.wireframe,J===vn?M.side=N.shadowSide!==null?N.shadowSide:N.side:M.side=N.shadowSide!==null?N.shadowSide:_[N.side],M.alphaMap=N.alphaMap,M.alphaTest=N.alphaTest,M.map=N.map,M.clipShadows=N.clipShadows,M.clippingPlanes=N.clippingPlanes,M.clipIntersection=N.clipIntersection,M.displacementMap=N.displacementMap,M.displacementScale=N.displacementScale,M.displacementBias=N.displacementBias,M.wireframeLinewidth=N.wireframeLinewidth,M.linewidth=N.linewidth,k.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ie=s.properties.get(M);ie.light=k}return M}function P(C,N,k,J,M){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===vn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);const ne=e.update(C),V=C.material;if(Array.isArray(V)){const j=ne.groups;for(let Q=0,ae=j.length;Q<ae;Q++){const $=j[Q],z=V[$.materialIndex];if(z&&z.visible){const he=R(C,z,J,M);s.renderBufferDirect(k,null,ne,he,C,$)}}}else if(V.visible){const j=R(C,V,J,M);s.renderBufferDirect(k,null,ne,j,C,null)}}const ie=C.children;for(let ne=0,V=ie.length;ne<V;ne++)P(ie[ne],N,k,J,M)}}function yg(s,e,t){const i=t.isWebGL2;function a(){let I=!1;const Y=new yt;let se=null;const be=new yt(0,0,0,0);return{setMask:function(ye){se!==ye&&!I&&(s.colorMask(ye,ye,ye,ye),se=ye)},setLocked:function(ye){I=ye},setClear:function(ye,et,tt,pt,Vt){Vt===!0&&(ye*=pt,et*=pt,tt*=pt),Y.set(ye,et,tt,pt),be.equals(Y)===!1&&(s.clearColor(ye,et,tt,pt),be.copy(Y))},reset:function(){I=!1,se=null,be.set(-1,0,0,0)}}}function l(){let I=!1,Y=null,se=null,be=null;return{setTest:function(ye){ye?F(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(ye){Y!==ye&&!I&&(s.depthMask(ye),Y=ye)},setFunc:function(ye){if(se!==ye){switch(ye){case Yh:s.depthFunc(s.NEVER);break;case $h:s.depthFunc(s.ALWAYS);break;case Zh:s.depthFunc(s.LESS);break;case Mo:s.depthFunc(s.LEQUAL);break;case Jh:s.depthFunc(s.EQUAL);break;case Qh:s.depthFunc(s.GEQUAL);break;case ep:s.depthFunc(s.GREATER);break;case tp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=ye}},setLocked:function(ye){I=ye},setClear:function(ye){be!==ye&&(s.clearDepth(ye),be=ye)},reset:function(){I=!1,Y=null,se=null,be=null}}}function d(){let I=!1,Y=null,se=null,be=null,ye=null,et=null,tt=null,pt=null,Vt=null;return{setTest:function($e){I||($e?F(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function($e){Y!==$e&&!I&&(s.stencilMask($e),Y=$e)},setFunc:function($e,Tt,mt){(se!==$e||be!==Tt||ye!==mt)&&(s.stencilFunc($e,Tt,mt),se=$e,be=Tt,ye=mt)},setOp:function($e,Tt,mt){(et!==$e||tt!==Tt||pt!==mt)&&(s.stencilOp($e,Tt,mt),et=$e,tt=Tt,pt=mt)},setLocked:function($e){I=$e},setClear:function($e){Vt!==$e&&(s.clearStencil($e),Vt=$e)},reset:function(){I=!1,Y=null,se=null,be=null,ye=null,et=null,tt=null,pt=null,Vt=null}}}const u=new a,p=new l,h=new d,m=new WeakMap,_=new WeakMap;let g={},x={},S=new WeakMap,E=[],b=null,f=!1,L=null,R=null,P=null,C=null,N=null,k=null,J=null,M=!1,D=null,ie=null,ne=null,V=null,j=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,$=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),ae=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ae=$>=2);let he=null,re={};const Ae=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),K=new yt().fromArray(Ae),q=new yt().fromArray(de);function le(I,Y,se,be){const ye=new Uint8Array(4),et=s.createTexture();s.bindTexture(I,et),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<se;tt++)i&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(Y,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Y+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return et}const _e={};_e[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),p.setClear(1),h.setClear(0),F(s.DEPTH_TEST),p.setFunc(Mo),Ke(!1),st(Ba),F(s.CULL_FACE),Oe(Fn);function F(I){g[I]!==!0&&(s.enable(I),g[I]=!0)}function De(I){g[I]!==!1&&(s.disable(I),g[I]=!1)}function Le(I,Y){return x[I]!==Y?(s.bindFramebuffer(I,Y),x[I]=Y,i&&(I===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Y),I===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Y)),!0):!1}function pe(I,Y){let se=E,be=!1;if(I)if(se=S.get(Y),se===void 0&&(se=[],S.set(Y,se)),I.isWebGLMultipleRenderTargets){const ye=I.texture;if(se.length!==ye.length||se[0]!==s.COLOR_ATTACHMENT0){for(let et=0,tt=ye.length;et<tt;et++)se[et]=s.COLOR_ATTACHMENT0+et;se.length=ye.length,be=!0}}else se[0]!==s.COLOR_ATTACHMENT0&&(se[0]=s.COLOR_ATTACHMENT0,be=!0);else se[0]!==s.BACK&&(se[0]=s.BACK,be=!0);be&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function we(I){return b!==I?(s.useProgram(I),b=I,!0):!1}const Ye={[Oi]:s.FUNC_ADD,[kh]:s.FUNC_SUBTRACT,[Bh]:s.FUNC_REVERSE_SUBTRACT};if(i)Ye[Ga]=s.MIN,Ye[Ha]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Ye[Ga]=I.MIN_EXT,Ye[Ha]=I.MAX_EXT)}const Se={[Vh]:s.ZERO,[zh]:s.ONE,[Gh]:s.SRC_COLOR,[oc]:s.SRC_ALPHA,[Kh]:s.SRC_ALPHA_SATURATE,[qh]:s.DST_COLOR,[Wh]:s.DST_ALPHA,[Hh]:s.ONE_MINUS_SRC_COLOR,[ac]:s.ONE_MINUS_SRC_ALPHA,[jh]:s.ONE_MINUS_DST_COLOR,[Xh]:s.ONE_MINUS_DST_ALPHA};function Oe(I,Y,se,be,ye,et,tt,pt){if(I===Fn){f===!0&&(De(s.BLEND),f=!1);return}if(f===!1&&(F(s.BLEND),f=!0),I!==Oh){if(I!==L||pt!==M){if((R!==Oi||N!==Oi)&&(s.blendEquation(s.FUNC_ADD),R=Oi,N=Oi),pt)switch(I){case Vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eo:s.blendFunc(s.ONE,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case za:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case za:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}P=null,C=null,k=null,J=null,L=I,M=pt}return}ye=ye||Y,et=et||se,tt=tt||be,(Y!==R||ye!==N)&&(s.blendEquationSeparate(Ye[Y],Ye[ye]),R=Y,N=ye),(se!==P||be!==C||et!==k||tt!==J)&&(s.blendFuncSeparate(Se[se],Se[be],Se[et],Se[tt]),P=se,C=be,k=et,J=tt),L=I,M=!1}function nt(I,Y){I.side===gn?De(s.CULL_FACE):F(s.CULL_FACE);let se=I.side===It;Y&&(se=!se),Ke(se),I.blending===Vi&&I.transparent===!1?Oe(Fn):Oe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),p.setFunc(I.depthFunc),p.setTest(I.depthTest),p.setMask(I.depthWrite),u.setMask(I.colorWrite);const be=I.stencilWrite;h.setTest(be),be&&(h.setMask(I.stencilWriteMask),h.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),h.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?F(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(I){D!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),D=I)}function st(I){I!==Ih?(F(s.CULL_FACE),I!==ie&&(I===Ba?s.cullFace(s.BACK):I===Nh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),ie=I}function lt(I){I!==ne&&(ae&&s.lineWidth(I),ne=I)}function Xe(I,Y,se){I?(F(s.POLYGON_OFFSET_FILL),(V!==Y||j!==se)&&(s.polygonOffset(Y,se),V=Y,j=se)):De(s.POLYGON_OFFSET_FILL)}function it(I){I?F(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function xt(I){I===void 0&&(I=s.TEXTURE0+Q-1),he!==I&&(s.activeTexture(I),he=I)}function T(I,Y,se){se===void 0&&(he===null?se=s.TEXTURE0+Q-1:se=he);let be=re[se];be===void 0&&(be={type:void 0,texture:void 0},re[se]=be),(be.type!==I||be.texture!==Y)&&(he!==se&&(s.activeTexture(se),he=se),s.bindTexture(I,Y||_e[I]),be.type=I,be.texture=Y)}function w(){const I=re[he];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function U(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(I){K.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),K.copy(I))}function Ee(I){q.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Re(I,Y){let se=_.get(Y);se===void 0&&(se=new WeakMap,_.set(Y,se));let be=se.get(I);be===void 0&&(be=s.getUniformBlockIndex(Y,I.name),se.set(I,be))}function Fe(I,Y){const be=_.get(Y).get(I);m.get(Y)!==be&&(s.uniformBlockBinding(Y,be,I.__bindingPointIndex),m.set(Y,be))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},he=null,re={},x={},S=new WeakMap,E=[],b=null,f=!1,L=null,R=null,P=null,C=null,N=null,k=null,J=null,M=!1,D=null,ie=null,ne=null,V=null,j=null,K.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),p.reset(),h.reset()}return{buffers:{color:u,depth:p,stencil:h},enable:F,disable:De,bindFramebuffer:Le,drawBuffers:pe,useProgram:we,setBlending:Oe,setMaterial:nt,setFlipSided:Ke,setCullFace:st,setLineWidth:lt,setPolygonOffset:Xe,setScissorTest:it,activeTexture:xt,bindTexture:T,unbindTexture:w,compressedTexImage2D:X,compressedTexImage3D:oe,texImage2D:xe,texImage3D:Me,updateUBOMapping:Re,uniformBlockBinding:Fe,texStorage2D:W,texStorage3D:ve,texSubImage2D:ce,texSubImage3D:fe,compressedTexSubImage2D:U,compressedTexSubImage3D:te,scissor:ge,viewport:Ee,reset:ct}}function Tg(s,e,t,i,a,l,d){const u=a.isWebGL2,p=a.maxTextures,h=a.maxCubemapSize,m=a.maxTextureSize,_=a.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new WeakMap;let E;const b=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(T,w){return f?new OffscreenCanvas(T,w):ls("canvas")}function R(T,w,X,oe){let ce=1;if((T.width>oe||T.height>oe)&&(ce=oe/Math.max(T.width,T.height)),ce<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const fe=w?Lp:Math.floor,U=fe(ce*T.width),te=fe(ce*T.height);E===void 0&&(E=L(U,te));const W=X?L(U,te):E;return W.width=U,W.height=te,W.getContext("2d").drawImage(T,0,0,U,te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+U+"x"+te+")."),W}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function P(T){return _l(T.width)&&_l(T.height)}function C(T){return u?!1:T.wrapS!==Jt||T.wrapT!==Jt||T.minFilter!==Rt&&T.minFilter!==Wt}function N(T,w){return T.generateMipmaps&&w&&T.minFilter!==Rt&&T.minFilter!==Wt}function k(T){s.generateMipmap(T)}function J(T,w,X,oe,ce=!1){if(u===!1)return w;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let fe=w;return w===s.RED&&(X===s.FLOAT&&(fe=s.R32F),X===s.HALF_FLOAT&&(fe=s.R16F),X===s.UNSIGNED_BYTE&&(fe=s.R8)),w===s.RG&&(X===s.FLOAT&&(fe=s.RG32F),X===s.HALF_FLOAT&&(fe=s.RG16F),X===s.UNSIGNED_BYTE&&(fe=s.RG8)),w===s.RGBA&&(X===s.FLOAT&&(fe=s.RGBA32F),X===s.HALF_FLOAT&&(fe=s.RGBA16F),X===s.UNSIGNED_BYTE&&(fe=oe===Ve&&ce===!1?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)),(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function M(T,w,X){return N(T,X)===!0||T.isFramebufferTexture&&T.minFilter!==Rt&&T.minFilter!==Wt?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function D(T){return T===Rt||T===Wa||T===zs?s.NEAREST:s.LINEAR}function ie(T){const w=T.target;w.removeEventListener("dispose",ie),V(w),w.isVideoTexture&&S.delete(w)}function ne(T){const w=T.target;w.removeEventListener("dispose",ne),Q(w)}function V(T){const w=i.get(T);if(w.__webglInit===void 0)return;const X=T.source,oe=b.get(X);if(oe){const ce=oe[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&j(T),Object.keys(oe).length===0&&b.delete(X)}i.remove(T)}function j(T){const w=i.get(T);s.deleteTexture(w.__webglTexture);const X=T.source,oe=b.get(X);delete oe[w.__cacheKey],d.memory.textures--}function Q(T){const w=T.texture,X=i.get(T),oe=i.get(w);if(oe.__webglTexture!==void 0&&(s.deleteTexture(oe.__webglTexture),d.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)s.deleteFramebuffer(X.__webglFramebuffer[ce]),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[ce]);else{if(s.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ce=0;ce<X.__webglColorRenderbuffer.length;ce++)X.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[ce]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ce=0,fe=w.length;ce<fe;ce++){const U=i.get(w[ce]);U.__webglTexture&&(s.deleteTexture(U.__webglTexture),d.memory.textures--),i.remove(w[ce])}i.remove(w),i.remove(T)}let ae=0;function $(){ae=0}function z(){const T=ae;return T>=p&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+p),ae+=1,T}function he(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function re(T,w){const X=i.get(T);if(T.isVideoTexture&&it(T),T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){const oe=T.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(X,T,w);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+w)}function Ae(T,w){const X=i.get(T);if(T.version>0&&X.__version!==T.version){De(X,T,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+w)}function de(T,w){const X=i.get(T);if(T.version>0&&X.__version!==T.version){De(X,T,w);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+w)}function K(T,w){const X=i.get(T);if(T.version>0&&X.__version!==T.version){Le(X,T,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+w)}const q={[yo]:s.REPEAT,[Jt]:s.CLAMP_TO_EDGE,[To]:s.MIRRORED_REPEAT},le={[Rt]:s.NEAREST,[Wa]:s.NEAREST_MIPMAP_NEAREST,[zs]:s.NEAREST_MIPMAP_LINEAR,[Wt]:s.LINEAR,[cp]:s.LINEAR_MIPMAP_NEAREST,[gr]:s.LINEAR_MIPMAP_LINEAR};function _e(T,w,X){if(X?(s.texParameteri(T,s.TEXTURE_WRAP_S,q[w.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,q[w.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,q[w.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,le[w.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,le[w.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==Jt||w.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,D(w.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,D(w.minFilter)),w.minFilter!==Rt&&w.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Rt||w.minFilter!==zs&&w.minFilter!==gr||w.type===Zn&&e.has("OES_texture_float_linear")===!1||u===!1&&w.type===br&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(s.texParameterf(T,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function F(T,w){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",ie));const oe=w.source;let ce=b.get(oe);ce===void 0&&(ce={},b.set(oe,ce));const fe=he(w);if(fe!==T.__cacheKey){ce[fe]===void 0&&(ce[fe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,X=!0),ce[fe].usedTimes++;const U=ce[T.__cacheKey];U!==void 0&&(ce[T.__cacheKey].usedTimes--,U.usedTimes===0&&j(w)),T.__cacheKey=fe,T.__webglTexture=ce[fe].texture}return X}function De(T,w,X){let oe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=s.TEXTURE_3D);const ce=F(T,w),fe=w.source;t.bindTexture(oe,T.__webglTexture,s.TEXTURE0+X);const U=i.get(fe);if(fe.version!==U.__version||ce===!0){t.activeTexture(s.TEXTURE0+X),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const te=C(w)&&P(w.image)===!1;let W=R(w.image,te,!1,m);W=xt(w,W);const ve=P(W)||u,xe=l.convert(w.format,w.colorSpace);let Me=l.convert(w.type),ge=J(w.internalFormat,xe,Me,w.colorSpace);_e(oe,w,ve);let Ee;const Re=w.mipmaps,Fe=u&&w.isVideoTexture!==!0,ct=U.__version===void 0||ce===!0,I=M(w,W,ve);if(w.isDepthTexture)ge=s.DEPTH_COMPONENT,u?w.type===Zn?ge=s.DEPTH_COMPONENT32F:w.type===$n?ge=s.DEPTH_COMPONENT24:w.type===zi?ge=s.DEPTH24_STENCIL8:ge=s.DEPTH_COMPONENT16:w.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Jn&&ge===s.DEPTH_COMPONENT&&w.type!==uc&&w.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=$n,Me=l.convert(w.type)),w.format===Xi&&ge===s.DEPTH_COMPONENT&&(ge=s.DEPTH_STENCIL,w.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=zi,Me=l.convert(w.type))),ct&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,ge,W.width,W.height):t.texImage2D(s.TEXTURE_2D,0,ge,W.width,W.height,0,xe,Me,null));else if(w.isDataTexture)if(Re.length>0&&ve){Fe&&ct&&t.texStorage2D(s.TEXTURE_2D,I,ge,Re[0].width,Re[0].height);for(let Y=0,se=Re.length;Y<se;Y++)Ee=Re[Y],Fe?t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,xe,Me,Ee.data):t.texImage2D(s.TEXTURE_2D,Y,ge,Ee.width,Ee.height,0,xe,Me,Ee.data);w.generateMipmaps=!1}else Fe?(ct&&t.texStorage2D(s.TEXTURE_2D,I,ge,W.width,W.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,W.width,W.height,xe,Me,W.data)):t.texImage2D(s.TEXTURE_2D,0,ge,W.width,W.height,0,xe,Me,W.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Fe&&ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,I,ge,Re[0].width,Re[0].height,W.depth);for(let Y=0,se=Re.length;Y<se;Y++)Ee=Re[Y],w.format!==Qt?xe!==null?Fe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Ee.width,Ee.height,W.depth,xe,Ee.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,ge,Ee.width,Ee.height,W.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Ee.width,Ee.height,W.depth,xe,Me,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,ge,Ee.width,Ee.height,W.depth,0,xe,Me,Ee.data)}else{Fe&&ct&&t.texStorage2D(s.TEXTURE_2D,I,ge,Re[0].width,Re[0].height);for(let Y=0,se=Re.length;Y<se;Y++)Ee=Re[Y],w.format!==Qt?xe!==null?Fe?t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,ge,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,xe,Me,Ee.data):t.texImage2D(s.TEXTURE_2D,Y,ge,Ee.width,Ee.height,0,xe,Me,Ee.data)}else if(w.isDataArrayTexture)Fe?(ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,I,ge,W.width,W.height,W.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,xe,Me,W.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,W.width,W.height,W.depth,0,xe,Me,W.data);else if(w.isData3DTexture)Fe?(ct&&t.texStorage3D(s.TEXTURE_3D,I,ge,W.width,W.height,W.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,xe,Me,W.data)):t.texImage3D(s.TEXTURE_3D,0,ge,W.width,W.height,W.depth,0,xe,Me,W.data);else if(w.isFramebufferTexture){if(ct)if(Fe)t.texStorage2D(s.TEXTURE_2D,I,ge,W.width,W.height);else{let Y=W.width,se=W.height;for(let be=0;be<I;be++)t.texImage2D(s.TEXTURE_2D,be,ge,Y,se,0,xe,Me,null),Y>>=1,se>>=1}}else if(Re.length>0&&ve){Fe&&ct&&t.texStorage2D(s.TEXTURE_2D,I,ge,Re[0].width,Re[0].height);for(let Y=0,se=Re.length;Y<se;Y++)Ee=Re[Y],Fe?t.texSubImage2D(s.TEXTURE_2D,Y,0,0,xe,Me,Ee):t.texImage2D(s.TEXTURE_2D,Y,ge,xe,Me,Ee);w.generateMipmaps=!1}else Fe?(ct&&t.texStorage2D(s.TEXTURE_2D,I,ge,W.width,W.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Me,W)):t.texImage2D(s.TEXTURE_2D,0,ge,xe,Me,W);N(w,ve)&&k(oe),U.__version=fe.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Le(T,w,X){if(w.image.length!==6)return;const oe=F(T,w),ce=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+X);const fe=i.get(ce);if(ce.version!==fe.__version||oe===!0){t.activeTexture(s.TEXTURE0+X),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const U=w.isCompressedTexture||w.image[0].isCompressedTexture,te=w.image[0]&&w.image[0].isDataTexture,W=[];for(let Y=0;Y<6;Y++)!U&&!te?W[Y]=R(w.image[Y],!1,!0,h):W[Y]=te?w.image[Y].image:w.image[Y],W[Y]=xt(w,W[Y]);const ve=W[0],xe=P(ve)||u,Me=l.convert(w.format,w.colorSpace),ge=l.convert(w.type),Ee=J(w.internalFormat,Me,ge,w.colorSpace),Re=u&&w.isVideoTexture!==!0,Fe=fe.__version===void 0||oe===!0;let ct=M(w,ve,xe);_e(s.TEXTURE_CUBE_MAP,w,xe);let I;if(U){Re&&Fe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Ee,ve.width,ve.height);for(let Y=0;Y<6;Y++){I=W[Y].mipmaps;for(let se=0;se<I.length;se++){const be=I[se];w.format!==Qt?Me!==null?Re?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,be.width,be.height,Me,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,Ee,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,0,0,be.width,be.height,Me,ge,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se,Ee,be.width,be.height,0,Me,ge,be.data)}}}else{I=w.mipmaps,Re&&Fe&&(I.length>0&&ct++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Ee,W[0].width,W[0].height));for(let Y=0;Y<6;Y++)if(te){Re?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,W[Y].width,W[Y].height,Me,ge,W[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ee,W[Y].width,W[Y].height,0,Me,ge,W[Y].data);for(let se=0;se<I.length;se++){const ye=I[se].image[Y].image;Re?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,ye.width,ye.height,Me,ge,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,Ee,ye.width,ye.height,0,Me,ge,ye.data)}}else{Re?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Me,ge,W[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ee,Me,ge,W[Y]);for(let se=0;se<I.length;se++){const be=I[se];Re?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,0,0,Me,ge,be.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,se+1,Ee,Me,ge,be.image[Y])}}}N(w,xe)&&k(s.TEXTURE_CUBE_MAP),fe.__version=ce.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function pe(T,w,X,oe,ce){const fe=l.convert(X.format,X.colorSpace),U=l.convert(X.type),te=J(X.internalFormat,fe,U,X.colorSpace);i.get(w).__hasExternalTextures||(ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,te,w.width,w.height,w.depth,0,fe,U,null):t.texImage2D(ce,0,te,w.width,w.height,0,fe,U,null)),t.bindFramebuffer(s.FRAMEBUFFER,T),Xe(w)?g.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,ce,i.get(X).__webglTexture,0,lt(w)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,ce,i.get(X).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(T,w,X){if(s.bindRenderbuffer(s.RENDERBUFFER,T),w.depthBuffer&&!w.stencilBuffer){let oe=s.DEPTH_COMPONENT16;if(X||Xe(w)){const ce=w.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Zn?oe=s.DEPTH_COMPONENT32F:ce.type===$n&&(oe=s.DEPTH_COMPONENT24));const fe=lt(w);Xe(w)?g.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,oe,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,oe,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,oe,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(w.depthBuffer&&w.stencilBuffer){const oe=lt(w);X&&Xe(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,s.DEPTH24_STENCIL8,w.width,w.height):Xe(w)?g.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const oe=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ce=0;ce<oe.length;ce++){const fe=oe[ce],U=l.convert(fe.format,fe.colorSpace),te=l.convert(fe.type),W=J(fe.internalFormat,U,te,fe.colorSpace),ve=lt(w);X&&Xe(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,W,w.width,w.height):Xe(w)?g.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,W,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,W,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ye(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),re(w.depthTexture,0);const oe=i.get(w.depthTexture).__webglTexture,ce=lt(w);if(w.depthTexture.format===Jn)Xe(w)?g.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,oe,0);else if(w.depthTexture.format===Xi)Xe(w)?g.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Se(T){const w=i.get(T),X=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ye(w.__webglFramebuffer,T)}else if(X){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]=s.createRenderbuffer(),we(w.__webglDepthbuffer[oe],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),we(w.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(T,w,X){const oe=i.get(T);w!==void 0&&pe(oe.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),X!==void 0&&Se(T)}function nt(T){const w=T.texture,X=i.get(T),oe=i.get(w);T.addEventListener("dispose",ne),T.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=w.version,d.memory.textures++);const ce=T.isWebGLCubeRenderTarget===!0,fe=T.isWebGLMultipleRenderTargets===!0,U=P(T)||u;if(ce){X.__webglFramebuffer=[];for(let te=0;te<6;te++)X.__webglFramebuffer[te]=s.createFramebuffer()}else{if(X.__webglFramebuffer=s.createFramebuffer(),fe)if(a.drawBuffers){const te=T.texture;for(let W=0,ve=te.length;W<ve;W++){const xe=i.get(te[W]);xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&T.samples>0&&Xe(T)===!1){const te=fe?w:[w];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let W=0;W<te.length;W++){const ve=te[W];X.__webglColorRenderbuffer[W]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[W]);const xe=l.convert(ve.format,ve.colorSpace),Me=l.convert(ve.type),ge=J(ve.internalFormat,xe,Me,ve.colorSpace,T.isXRRenderTarget===!0),Ee=lt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,ge,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+W,s.RENDERBUFFER,X.__webglColorRenderbuffer[W])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),we(X.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),_e(s.TEXTURE_CUBE_MAP,w,U);for(let te=0;te<6;te++)pe(X.__webglFramebuffer[te],T,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te);N(w,U)&&k(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const te=T.texture;for(let W=0,ve=te.length;W<ve;W++){const xe=te[W],Me=i.get(xe);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),_e(s.TEXTURE_2D,xe,U),pe(X.__webglFramebuffer,T,xe,s.COLOR_ATTACHMENT0+W,s.TEXTURE_2D),N(xe,U)&&k(s.TEXTURE_2D)}t.unbindTexture()}else{let te=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(u?te=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(te,oe.__webglTexture),_e(te,w,U),pe(X.__webglFramebuffer,T,w,s.COLOR_ATTACHMENT0,te),N(w,U)&&k(te),t.unbindTexture()}T.depthBuffer&&Se(T)}function Ke(T){const w=P(T)||u,X=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let oe=0,ce=X.length;oe<ce;oe++){const fe=X[oe];if(N(fe,w)){const U=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,te=i.get(fe).__webglTexture;t.bindTexture(U,te),k(U),t.unbindTexture()}}}function st(T){if(u&&T.samples>0&&Xe(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],X=T.width,oe=T.height;let ce=s.COLOR_BUFFER_BIT;const fe=[],U=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=i.get(T),W=T.isWebGLMultipleRenderTargets===!0;if(W)for(let ve=0;ve<w.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let ve=0;ve<w.length;ve++){fe.push(s.COLOR_ATTACHMENT0+ve),T.depthBuffer&&fe.push(U);const xe=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(xe===!1&&(T.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),W&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,te.__webglColorRenderbuffer[ve]),xe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[U]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[U])),W){const Me=i.get(w[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,X,oe,0,0,X,oe,ce,s.NEAREST),x&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),W)for(let ve=0;ve<w.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,te.__webglColorRenderbuffer[ve]);const xe=i.get(w[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function lt(T){return Math.min(_,T.samples)}function Xe(T){const w=i.get(T);return u&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function it(T){const w=d.render.frame;S.get(T)!==w&&(S.set(T,w),T.update())}function xt(T,w){const X=T.colorSpace,oe=T.format,ce=T.type;return T.isCompressedTexture===!0||T.format===Co||X!==sn&&X!==ei&&(X===Ve?u===!1?e.has("EXT_sRGB")===!0&&oe===Qt?(T.format=Co,T.minFilter=Wt,T.generateMipmaps=!1):w=fc.sRGBToLinear(w):(oe!==Qt||ce!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}this.allocateTextureUnit=z,this.resetTextureUnits=$,this.setTexture2D=re,this.setTexture2DArray=Ae,this.setTexture3D=de,this.setTextureCube=K,this.rebindTextures=Oe,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Xe}function Cg(s,e,t){const i=t.isWebGL2;function a(l,d=ei){let u;if(l===ni)return s.UNSIGNED_BYTE;if(l===pp)return s.UNSIGNED_SHORT_4_4_4_4;if(l===fp)return s.UNSIGNED_SHORT_5_5_5_1;if(l===up)return s.BYTE;if(l===dp)return s.SHORT;if(l===uc)return s.UNSIGNED_SHORT;if(l===hp)return s.INT;if(l===$n)return s.UNSIGNED_INT;if(l===Zn)return s.FLOAT;if(l===br)return i?s.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===mp)return s.ALPHA;if(l===Qt)return s.RGBA;if(l===_p)return s.LUMINANCE;if(l===vp)return s.LUMINANCE_ALPHA;if(l===Jn)return s.DEPTH_COMPONENT;if(l===Xi)return s.DEPTH_STENCIL;if(l===Co)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===gp)return s.RED;if(l===bp)return s.RED_INTEGER;if(l===xp)return s.RG;if(l===Ep)return s.RG_INTEGER;if(l===Mp)return s.RGBA_INTEGER;if(l===Gs||l===Hs||l===Ws||l===Xs)if(d===Ve)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===Gs)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Hs)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Ws)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Xs)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===Gs)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Hs)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Ws)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Xs)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Xa||l===qa||l===ja||l===Ka)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===Xa)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===qa)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===ja)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===Ka)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===wp)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Ya||l===$a)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(l===Ya)return d===Ve?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===$a)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Za||l===Ja||l===Qa||l===el||l===tl||l===nl||l===il||l===rl||l===sl||l===ol||l===al||l===ll||l===cl||l===ul)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(l===Za)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Ja)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Qa)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===el)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===tl)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===nl)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===il)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===rl)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===sl)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===ol)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===al)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===ll)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===cl)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===ul)return d===Ve?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===qs)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(l===qs)return d===Ve?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(l===Sp||l===dl||l===hl||l===pl)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(l===qs)return u.COMPRESSED_RED_RGTC1_EXT;if(l===dl)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===hl)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===pl)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===zi?i?s.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class Ag extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pg={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,l=null,d=null;const u=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const E of e.hand.values()){const b=t.getJointPose(E,i),f=this._getHandJoint(h,E);b!==null&&(f.matrix.fromArray(b.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=b.radius),f.visible=b!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=m.position.distanceTo(_.position),x=.02,S=.005;h.inputState.pinching&&g>x+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=x-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return u!==null&&(u.visible=a!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Rg extends Bt{constructor(e,t,i,a,l,d,u,p,h,m){if(m=m!==void 0?m:Jn,m!==Jn&&m!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===Jn&&(i=$n),i===void 0&&m===Xi&&(i=zi),super(null,a,l,d,u,p,m,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Rt,this.minFilter=p!==void 0?p:Rt,this.flipY=!1,this.generateMipmaps=!1}}class Lg extends oi{constructor(e,t){super();const i=this;let a=null,l=1,d=null,u="local-floor",p=1,h=null,m=null,_=null,g=null,x=null,S=null;const E=t.getContextAttributes();let b=null,f=null;const L=[],R=[],P=new Set,C=new Map,N=new Xt;N.layers.enable(1),N.viewport=new yt;const k=new Xt;k.layers.enable(2),k.viewport=new yt;const J=[N,k],M=new Ag;M.layers.enable(1),M.layers.enable(2);let D=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let q=L[K];return q===void 0&&(q=new vo,L[K]=q),q.getTargetRaySpace()},this.getControllerGrip=function(K){let q=L[K];return q===void 0&&(q=new vo,L[K]=q),q.getGripSpace()},this.getHand=function(K){let q=L[K];return q===void 0&&(q=new vo,L[K]=q),q.getHandSpace()};function ne(K){const q=R.indexOf(K.inputSource);if(q===-1)return;const le=L[q];le!==void 0&&(le.update(K.inputSource,K.frame,h||d),le.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",V),a.removeEventListener("inputsourceschange",j);for(let K=0;K<L.length;K++){const q=R[K];q!==null&&(R[K]=null,L[K].disconnect(q))}D=null,ie=null,e.setRenderTarget(b),x=null,g=null,_=null,a=null,f=null,de.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){u=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(b=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",V),a.addEventListener("inputsourceschange",j),E.xrCompatible!==!0&&await t.makeXRCompatible(),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:a.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,t,q),a.updateRenderState({baseLayer:x}),f=new ii(x.framebufferWidth,x.framebufferHeight,{format:Qt,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let q=null,le=null,_e=null;E.depth&&(_e=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=E.stencil?Xi:Jn,le=E.stencil?zi:$n);const F={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};_=new XRWebGLBinding(a,t),g=_.createProjectionLayer(F),a.updateRenderState({layers:[g]}),f=new ii(g.textureWidth,g.textureHeight,{format:Qt,type:ni,depthTexture:new Rg(g.textureWidth,g.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const De=e.properties.get(f);De.__ignoreDepthValues=g.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(p),h=null,d=await a.requestReferenceSpace(u),de.setContext(a),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function j(K){for(let q=0;q<K.removed.length;q++){const le=K.removed[q],_e=R.indexOf(le);_e>=0&&(R[_e]=null,L[_e].disconnect(le))}for(let q=0;q<K.added.length;q++){const le=K.added[q];let _e=R.indexOf(le);if(_e===-1){for(let De=0;De<L.length;De++)if(De>=R.length){R.push(le),_e=De;break}else if(R[De]===null){R[De]=le,_e=De;break}if(_e===-1)break}const F=L[_e];F&&F.connect(le)}}const Q=new H,ae=new H;function $(K,q,le){Q.setFromMatrixPosition(q.matrixWorld),ae.setFromMatrixPosition(le.matrixWorld);const _e=Q.distanceTo(ae),F=q.projectionMatrix.elements,De=le.projectionMatrix.elements,Le=F[14]/(F[10]-1),pe=F[14]/(F[10]+1),we=(F[9]+1)/F[5],Ye=(F[9]-1)/F[5],Se=(F[8]-1)/F[0],Oe=(De[8]+1)/De[0],nt=Le*Se,Ke=Le*Oe,st=_e/(-Se+Oe),lt=st*-Se;q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(lt),K.translateZ(st),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const Xe=Le+st,it=pe+st,xt=nt-lt,T=Ke+(_e-lt),w=we*pe/it*Xe,X=Ye*pe/it*Xe;K.projectionMatrix.makePerspective(xt,T,w,X,Xe,it),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function z(K,q){q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;M.near=k.near=N.near=K.near,M.far=k.far=N.far=K.far,(D!==M.near||ie!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,ie=M.far);const q=K.parent,le=M.cameras;z(M,q);for(let _e=0;_e<le.length;_e++)z(le[_e],q);le.length===2?$(M,N,k):M.projectionMatrix.copy(N.projectionMatrix),he(K,M,q)};function he(K,q,le){le===null?K.matrix.copy(q.matrixWorld):(K.matrix.copy(le.matrixWorld),K.matrix.invert(),K.matrix.multiply(q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0);const _e=K.children;for(let F=0,De=_e.length;F<De;F++)_e[F].updateMatrixWorld(!0);K.projectionMatrix.copy(q.projectionMatrix),K.projectionMatrixInverse.copy(q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ao*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(g===null&&x===null))return p},this.setFoveation=function(K){p=K,g!==null&&(g.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.getPlanes=function(){return P};let re=null;function Ae(K,q){if(m=q.getViewerPose(h||d),S=q,m!==null){const le=m.views;x!==null&&(e.setRenderTargetFramebuffer(f,x.framebuffer),e.setRenderTarget(f));let _e=!1;le.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let F=0;F<le.length;F++){const De=le[F];let Le=null;if(x!==null)Le=x.getViewport(De);else{const we=_.getViewSubImage(g,De);Le=we.viewport,F===0&&(e.setRenderTargetTextures(f,we.colorTexture,g.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(f))}let pe=J[F];pe===void 0&&(pe=new Xt,pe.layers.enable(F),pe.viewport=new yt,J[F]=pe),pe.matrix.fromArray(De.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(De.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Le.x,Le.y,Le.width,Le.height),F===0&&(M.matrix.copy(pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(pe)}}for(let le=0;le<L.length;le++){const _e=R[le],F=L[le];_e!==null&&F!==void 0&&F.update(_e,q,h||d)}if(re&&re(K,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let le=null;for(const _e of P)q.detectedPlanes.has(_e)||(le===null&&(le=[]),le.push(_e));if(le!==null)for(const _e of le)P.delete(_e),C.delete(_e),i.dispatchEvent({type:"planeremoved",data:_e});for(const _e of q.detectedPlanes)if(!P.has(_e))P.add(_e),C.set(_e,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:_e});else{const F=C.get(_e);_e.lastChangedTime>F&&(C.set(_e,_e.lastChangedTime),i.dispatchEvent({type:"planechanged",data:_e}))}}S=null}const de=new Cc;de.setAnimationLoop(Ae),this.setAnimationLoop=function(K){re=K},this.dispose=function(){}}}function Dg(s,e){function t(b,f){b.matrixAutoUpdate===!0&&b.updateMatrix(),f.value.copy(b.matrix)}function i(b,f){f.color.getRGB(b.fogColor.value,wc(s)),f.isFog?(b.fogNear.value=f.near,b.fogFar.value=f.far):f.isFogExp2&&(b.fogDensity.value=f.density)}function a(b,f,L,R,P){f.isMeshBasicMaterial||f.isMeshLambertMaterial?l(b,f):f.isMeshToonMaterial?(l(b,f),_(b,f)):f.isMeshPhongMaterial?(l(b,f),m(b,f)):f.isMeshStandardMaterial?(l(b,f),g(b,f),f.isMeshPhysicalMaterial&&x(b,f,P)):f.isMeshMatcapMaterial?(l(b,f),S(b,f)):f.isMeshDepthMaterial?l(b,f):f.isMeshDistanceMaterial?(l(b,f),E(b,f)):f.isMeshNormalMaterial?l(b,f):f.isLineBasicMaterial?(d(b,f),f.isLineDashedMaterial&&u(b,f)):f.isPointsMaterial?p(b,f,L,R):f.isSpriteMaterial?h(b,f):f.isShadowMaterial?(b.color.value.copy(f.color),b.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function l(b,f){b.opacity.value=f.opacity,f.color&&b.diffuse.value.copy(f.color),f.emissive&&b.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(b.map.value=f.map,t(f.map,b.mapTransform)),f.alphaMap&&(b.alphaMap.value=f.alphaMap,t(f.alphaMap,b.alphaMapTransform)),f.bumpMap&&(b.bumpMap.value=f.bumpMap,t(f.bumpMap,b.bumpMapTransform),b.bumpScale.value=f.bumpScale,f.side===It&&(b.bumpScale.value*=-1)),f.normalMap&&(b.normalMap.value=f.normalMap,t(f.normalMap,b.normalMapTransform),b.normalScale.value.copy(f.normalScale),f.side===It&&b.normalScale.value.negate()),f.displacementMap&&(b.displacementMap.value=f.displacementMap,t(f.displacementMap,b.displacementMapTransform),b.displacementScale.value=f.displacementScale,b.displacementBias.value=f.displacementBias),f.emissiveMap&&(b.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,b.emissiveMapTransform)),f.specularMap&&(b.specularMap.value=f.specularMap,t(f.specularMap,b.specularMapTransform)),f.alphaTest>0&&(b.alphaTest.value=f.alphaTest);const L=e.get(f).envMap;if(L&&(b.envMap.value=L,b.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=f.reflectivity,b.ior.value=f.ior,b.refractionRatio.value=f.refractionRatio),f.lightMap){b.lightMap.value=f.lightMap;const R=s.useLegacyLights===!0?Math.PI:1;b.lightMapIntensity.value=f.lightMapIntensity*R,t(f.lightMap,b.lightMapTransform)}f.aoMap&&(b.aoMap.value=f.aoMap,b.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,b.aoMapTransform))}function d(b,f){b.diffuse.value.copy(f.color),b.opacity.value=f.opacity,f.map&&(b.map.value=f.map,t(f.map,b.mapTransform))}function u(b,f){b.dashSize.value=f.dashSize,b.totalSize.value=f.dashSize+f.gapSize,b.scale.value=f.scale}function p(b,f,L,R){b.diffuse.value.copy(f.color),b.opacity.value=f.opacity,b.size.value=f.size*L,b.scale.value=R*.5,f.map&&(b.map.value=f.map,t(f.map,b.uvTransform)),f.alphaMap&&(b.alphaMap.value=f.alphaMap),f.alphaTest>0&&(b.alphaTest.value=f.alphaTest)}function h(b,f){b.diffuse.value.copy(f.color),b.opacity.value=f.opacity,b.rotation.value=f.rotation,f.map&&(b.map.value=f.map,t(f.map,b.mapTransform)),f.alphaMap&&(b.alphaMap.value=f.alphaMap),f.alphaTest>0&&(b.alphaTest.value=f.alphaTest)}function m(b,f){b.specular.value.copy(f.specular),b.shininess.value=Math.max(f.shininess,1e-4)}function _(b,f){f.gradientMap&&(b.gradientMap.value=f.gradientMap)}function g(b,f){b.metalness.value=f.metalness,f.metalnessMap&&(b.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,b.metalnessMapTransform)),b.roughness.value=f.roughness,f.roughnessMap&&(b.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,b.roughnessMapTransform)),e.get(f).envMap&&(b.envMapIntensity.value=f.envMapIntensity)}function x(b,f,L){b.ior.value=f.ior,f.sheen>0&&(b.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),b.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(b.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,b.sheenColorMapTransform)),f.sheenRoughnessMap&&(b.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,b.sheenRoughnessMapTransform))),f.clearcoat>0&&(b.clearcoat.value=f.clearcoat,b.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(b.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,b.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(b.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===It&&b.clearcoatNormalScale.value.negate())),f.iridescence>0&&(b.iridescence.value=f.iridescence,b.iridescenceIOR.value=f.iridescenceIOR,b.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(b.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,b.iridescenceMapTransform)),f.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),f.transmission>0&&(b.transmission.value=f.transmission,b.transmissionSamplerMap.value=L.texture,b.transmissionSamplerSize.value.set(L.width,L.height),f.transmissionMap&&(b.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,b.transmissionMapTransform)),b.thickness.value=f.thickness,f.thicknessMap&&(b.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=f.attenuationDistance,b.attenuationColor.value.copy(f.attenuationColor)),b.specularIntensity.value=f.specularIntensity,b.specularColor.value.copy(f.specularColor),f.specularColorMap&&(b.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,b.specularColorMapTransform)),f.specularIntensityMap&&(b.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,b.specularIntensityMapTransform))}function S(b,f){f.matcap&&(b.matcap.value=f.matcap)}function E(b,f){const L=e.get(f).light;b.referencePosition.value.setFromMatrixPosition(L.matrixWorld),b.nearDistance.value=L.shadow.camera.near,b.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Ug(s,e,t,i){let a={},l={},d=[];const u=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function p(L,R){const P=R.program;i.uniformBlockBinding(L,P)}function h(L,R){let P=a[L.id];P===void 0&&(S(L),P=m(L),a[L.id]=P,L.addEventListener("dispose",b));const C=R.program;i.updateUBOMapping(L,C);const N=e.render.frame;l[L.id]!==N&&(g(L),l[L.id]=N)}function m(L){const R=_();L.__bindingPointIndex=R;const P=s.createBuffer(),C=L.__size,N=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,C,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,P),P}function _(){for(let L=0;L<u;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const R=a[L.id],P=L.uniforms,C=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let N=0,k=P.length;N<k;N++){const J=P[N];if(x(J,N,C)===!0){const M=J.__offset,D=Array.isArray(J.value)?J.value:[J.value];let ie=0;for(let ne=0;ne<D.length;ne++){const V=D[ne],j=E(V);typeof V=="number"?(J.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,M+ie,J.__data)):V.isMatrix3?(J.__data[0]=V.elements[0],J.__data[1]=V.elements[1],J.__data[2]=V.elements[2],J.__data[3]=V.elements[0],J.__data[4]=V.elements[3],J.__data[5]=V.elements[4],J.__data[6]=V.elements[5],J.__data[7]=V.elements[0],J.__data[8]=V.elements[6],J.__data[9]=V.elements[7],J.__data[10]=V.elements[8],J.__data[11]=V.elements[0]):(V.toArray(J.__data,ie),ie+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,J.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(L,R,P){const C=L.value;if(P[R]===void 0){if(typeof C=="number")P[R]=C;else{const N=Array.isArray(C)?C:[C],k=[];for(let J=0;J<N.length;J++)k.push(N[J].clone());P[R]=k}return!0}else if(typeof C=="number"){if(P[R]!==C)return P[R]=C,!0}else{const N=Array.isArray(P[R])?P[R]:[P[R]],k=Array.isArray(C)?C:[C];for(let J=0;J<N.length;J++){const M=N[J];if(M.equals(k[J])===!1)return M.copy(k[J]),!0}}return!1}function S(L){const R=L.uniforms;let P=0;const C=16;let N=0;for(let k=0,J=R.length;k<J;k++){const M=R[k],D={boundary:0,storage:0},ie=Array.isArray(M.value)?M.value:[M.value];for(let ne=0,V=ie.length;ne<V;ne++){const j=ie[ne],Q=E(j);D.boundary+=Q.boundary,D.storage+=Q.storage}if(M.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=P,k>0){N=P%C;const ne=C-N;N!==0&&ne-D.boundary<0&&(P+=C-N,M.__offset=P)}P+=D.storage}return N=P%C,N>0&&(P+=C-N),L.__size=P,L.__cache={},this}function E(L){const R={boundary:0,storage:0};return typeof L=="number"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function b(L){const R=L.target;R.removeEventListener("dispose",b);const P=d.indexOf(R.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function f(){for(const L in a)s.deleteBuffer(a[L]);d=[],a={},l={}}return{bind:p,update:h,dispose:f}}function Ig(){const s=ls("canvas");return s.style.display="block",s}class Dc{constructor(e={}){const{canvas:t=Ig(),context:i=null,depth:a=!0,stencil:l=!0,alpha:d=!1,antialias:u=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let g;i!==null?g=i.getContextAttributes().alpha:g=d;let x=null,S=null;const E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ve,this.useLegacyLights=!0,this.toneMapping=bn,this.toneMappingExposure=1;const f=this;let L=!1,R=0,P=0,C=null,N=-1,k=null;const J=new yt,M=new yt;let D=null,ie=t.width,ne=t.height,V=1,j=null,Q=null;const ae=new yt(0,0,ie,ne),$=new yt(0,0,ie,ne);let z=!1;const he=new Tc;let re=!1,Ae=!1,de=null;const K=new wt,q=new H,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return C===null?V:1}let F=i;function De(y,G){for(let Z=0;Z<y.length;Z++){const B=y[Z],ee=t.getContext(B,G);if(ee!==null)return ee}return null}try{const y={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Do}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),F===null){const G=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&G.shift(),F=De(G,y),F===null)throw De(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Le,pe,we,Ye,Se,Oe,nt,Ke,st,lt,Xe,it,xt,T,w,X,oe,ce,fe,U,te,W,ve,xe;function Me(){Le=new X_(F),pe=new k_(F,Le,e),Le.init(pe),W=new Cg(F,Le,pe),we=new yg(F,Le,pe),Ye=new K_(F),Se=new dg,Oe=new Tg(F,Le,we,Se,pe,W,Ye),nt=new V_(f),Ke=new W_(f),st=new sf(F,pe),ve=new F_(F,Le,st,pe),lt=new q_(F,st,Ye,ve),Xe=new J_(F,lt,st,Ye),fe=new Z_(F,pe,Oe),X=new B_(Se),it=new ug(f,nt,Ke,Le,pe,ve,X),xt=new Dg(f,Se),T=new pg,w=new bg(Le,pe),ce=new N_(f,nt,Ke,we,Xe,g,p),oe=new Sg(f,Xe,pe),xe=new Ug(F,Ye,pe,we),U=new O_(F,Le,Ye,pe),te=new j_(F,Le,Ye,pe),Ye.programs=it.programs,f.capabilities=pe,f.extensions=Le,f.properties=Se,f.renderLists=T,f.shadowMap=oe,f.state=we,f.info=Ye}Me();const ge=new Lg(f,F);this.xr=ge,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=Le.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Le.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(ie,ne,!1))},this.getSize=function(y){return y.set(ie,ne)},this.setSize=function(y,G,Z=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=y,ne=G,t.width=Math.floor(y*V),t.height=Math.floor(G*V),Z===!0&&(t.style.width=y+"px",t.style.height=G+"px"),this.setViewport(0,0,y,G)},this.getDrawingBufferSize=function(y){return y.set(ie*V,ne*V).floor()},this.setDrawingBufferSize=function(y,G,Z){ie=y,ne=G,V=Z,t.width=Math.floor(y*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,y,G)},this.getCurrentViewport=function(y){return y.copy(J)},this.getViewport=function(y){return y.copy(ae)},this.setViewport=function(y,G,Z,B){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,G,Z,B),we.viewport(J.copy(ae).multiplyScalar(V).floor())},this.getScissor=function(y){return y.copy($)},this.setScissor=function(y,G,Z,B){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,G,Z,B),we.scissor(M.copy($).multiplyScalar(V).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(y){we.setScissorTest(z=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){Q=y},this.getClearColor=function(y){return y.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(y=!0,G=!0,Z=!0){let B=0;y&&(B|=F.COLOR_BUFFER_BIT),G&&(B|=F.DEPTH_BUFFER_BIT),Z&&(B|=F.STENCIL_BUFFER_BIT),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),T.dispose(),w.dispose(),Se.dispose(),nt.dispose(),Ke.dispose(),Xe.dispose(),ve.dispose(),xe.dispose(),it.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ye),ge.removeEventListener("sessionend",et),de&&(de.dispose(),de=null),tt.stop()};function Ee(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=Ye.autoReset,G=oe.enabled,Z=oe.autoUpdate,B=oe.needsUpdate,ee=oe.type;Me(),Ye.autoReset=y,oe.enabled=G,oe.autoUpdate=Z,oe.needsUpdate=B,oe.type=ee}function Fe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ct(y){const G=y.target;G.removeEventListener("dispose",ct),I(G)}function I(y){Y(y),Se.remove(y)}function Y(y){const G=Se.get(y).programs;G!==void 0&&(G.forEach(function(Z){it.releaseProgram(Z)}),y.isShaderMaterial&&it.releaseShaderCache(y))}this.renderBufferDirect=function(y,G,Z,B,ee,Te){G===null&&(G=le);const Pe=ee.isMesh&&ee.matrixWorld.determinant()<0,Ie=Sr(y,G,Z,B,ee);we.setMaterial(B,Pe);let Ne=Z.index,ke=1;B.wireframe===!0&&(Ne=lt.getWireframeAttribute(Z),ke=2);const ze=Z.drawRange,Be=Z.attributes.position;let Qe=ze.start*ke,dt=(ze.start+ze.count)*ke;Te!==null&&(Qe=Math.max(Qe,Te.start*ke),dt=Math.min(dt,(Te.start+Te.count)*ke)),Ne!==null?(Qe=Math.max(Qe,0),dt=Math.min(dt,Ne.count)):Be!=null&&(Qe=Math.max(Qe,0),dt=Math.min(dt,Be.count));const Dt=dt-Qe;if(Dt<0||Dt===1/0)return;ve.setup(ee,B,Ie,Z,Ne);let en,ht=U;if(Ne!==null&&(en=st.get(Ne),ht=te,ht.setIndex(en)),ee.isMesh)B.wireframe===!0?(we.setLineWidth(B.wireframeLinewidth*_e()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(ee.isLine){let He=B.linewidth;He===void 0&&(He=1),we.setLineWidth(He*_e()),ee.isLineSegments?ht.setMode(F.LINES):ee.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else ee.isPoints?ht.setMode(F.POINTS):ee.isSprite&&ht.setMode(F.TRIANGLES);if(ee.isInstancedMesh)ht.renderInstances(Qe,Dt,ee.count);else if(Z.isInstancedBufferGeometry){const He=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Yi=Math.min(Z.instanceCount,He);ht.renderInstances(Qe,Dt,Yi)}else ht.render(Qe,Dt)},this.compile=function(y,G){function Z(B,ee,Te){B.transparent===!0&&B.side===gn&&B.forceSinglePass===!1?(B.side=It,B.needsUpdate=!0,li(B,ee,Te),B.side=On,B.needsUpdate=!0,li(B,ee,Te),B.side=gn):li(B,ee,Te)}S=w.get(y),S.init(),b.push(S),y.traverseVisible(function(B){B.isLight&&B.layers.test(G.layers)&&(S.pushLight(B),B.castShadow&&S.pushShadow(B))}),S.setupLights(f.useLegacyLights),y.traverse(function(B){const ee=B.material;if(ee)if(Array.isArray(ee))for(let Te=0;Te<ee.length;Te++){const Pe=ee[Te];Z(Pe,y,B)}else Z(ee,y,B)}),b.pop(),S=null};let se=null;function be(y){se&&se(y)}function ye(){tt.stop()}function et(){tt.start()}const tt=new Cc;tt.setAnimationLoop(be),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(y){se=y,ge.setAnimationLoop(y),y===null?tt.stop():tt.start()},ge.addEventListener("sessionstart",ye),ge.addEventListener("sessionend",et),this.render=function(y,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(G),G=ge.getCamera()),y.isScene===!0&&y.onBeforeRender(f,y,G,C),S=w.get(y,b.length),S.init(),b.push(S),K.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),he.setFromProjectionMatrix(K),Ae=this.localClippingEnabled,re=X.init(this.clippingPlanes,Ae),x=T.get(y,E.length),x.init(),E.push(x),pt(y,G,0,f.sortObjects),x.finish(),f.sortObjects===!0&&x.sort(j,Q),re===!0&&X.beginShadows();const Z=S.state.shadowsArray;if(oe.render(Z,y,G),re===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(x,y),S.setupLights(f.useLegacyLights),G.isArrayCamera){const B=G.cameras;for(let ee=0,Te=B.length;ee<Te;ee++){const Pe=B[ee];Vt(x,y,Pe,Pe.viewport)}}else Vt(x,y,G);C!==null&&(Oe.updateMultisampleRenderTarget(C),Oe.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(f,y,G),ve.resetDefaultState(),N=-1,k=null,b.pop(),b.length>0?S=b[b.length-1]:S=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function pt(y,G,Z,B){if(y.visible===!1)return;if(y.layers.test(G.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(G);else if(y.isLight)S.pushLight(y),y.castShadow&&S.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||he.intersectsSprite(y)){B&&q.setFromMatrixPosition(y.matrixWorld).applyMatrix4(K);const Pe=Xe.update(y),Ie=y.material;Ie.visible&&x.push(y,Pe,Ie,Z,q.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||he.intersectsObject(y))){y.isSkinnedMesh&&y.skeleton.frame!==Ye.render.frame&&(y.skeleton.update(),y.skeleton.frame=Ye.render.frame);const Pe=Xe.update(y),Ie=y.material;if(B&&(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),q.copy(Pe.boundingSphere.center).applyMatrix4(y.matrixWorld).applyMatrix4(K)),Array.isArray(Ie)){const Ne=Pe.groups;for(let ke=0,ze=Ne.length;ke<ze;ke++){const Be=Ne[ke],Qe=Ie[Be.materialIndex];Qe&&Qe.visible&&x.push(y,Pe,Qe,Z,q.z,Be)}}else Ie.visible&&x.push(y,Pe,Ie,Z,q.z,null)}}const Te=y.children;for(let Pe=0,Ie=Te.length;Pe<Ie;Pe++)pt(Te[Pe],G,Z,B)}function Vt(y,G,Z,B){const ee=y.opaque,Te=y.transmissive,Pe=y.transparent;S.setupLightsView(Z),re===!0&&X.setGlobalState(f.clippingPlanes,Z),Te.length>0&&$e(ee,Te,G,Z),B&&we.viewport(J.copy(B)),ee.length>0&&Tt(ee,G,Z),Te.length>0&&Tt(Te,G,Z),Pe.length>0&&Tt(Pe,G,Z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function $e(y,G,Z,B){if(de===null){const Ie=pe.isWebGL2;de=new ii(1024,1024,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?br:ni,minFilter:gr,samples:Ie&&u===!0?4:0})}const ee=f.getRenderTarget();f.setRenderTarget(de),f.clear();const Te=f.toneMapping;f.toneMapping=bn,Tt(y,Z,B),Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de);let Pe=!1;for(let Ie=0,Ne=G.length;Ie<Ne;Ie++){const ke=G[Ie],ze=ke.object,Be=ke.geometry,Qe=ke.material,dt=ke.group;if(Qe.side===gn&&ze.layers.test(B.layers)){const Dt=Qe.side;Qe.side=It,Qe.needsUpdate=!0,mt(ze,Z,B,Be,Qe,dt),Qe.side=Dt,Qe.needsUpdate=!0,Pe=!0}}Pe===!0&&(Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de)),f.setRenderTarget(ee),f.toneMapping=Te}function Tt(y,G,Z){const B=G.isScene===!0?G.overrideMaterial:null;for(let ee=0,Te=y.length;ee<Te;ee++){const Pe=y[ee],Ie=Pe.object,Ne=Pe.geometry,ke=B===null?Pe.material:B,ze=Pe.group;Ie.layers.test(Z.layers)&&mt(Ie,G,Z,Ne,ke,ze)}}function mt(y,G,Z,B,ee,Te){y.onBeforeRender(f,G,Z,B,ee,Te),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),ee.onBeforeRender(f,G,Z,B,y,Te),ee.transparent===!0&&ee.side===gn&&ee.forceSinglePass===!1?(ee.side=It,ee.needsUpdate=!0,f.renderBufferDirect(Z,G,B,ee,y,Te),ee.side=On,ee.needsUpdate=!0,f.renderBufferDirect(Z,G,B,ee,y,Te),ee.side=gn):f.renderBufferDirect(Z,G,B,ee,y,Te),y.onAfterRender(f,G,Z,B,ee,Te)}function li(y,G,Z){G.isScene!==!0&&(G=le);const B=Se.get(y),ee=S.state.lights,Te=S.state.shadowsArray,Pe=ee.state.version,Ie=it.getParameters(y,ee.state,Te,G,Z),Ne=it.getProgramCacheKey(Ie);let ke=B.programs;B.environment=y.isMeshStandardMaterial?G.environment:null,B.fog=G.fog,B.envMap=(y.isMeshStandardMaterial?Ke:nt).get(y.envMap||B.environment),ke===void 0&&(y.addEventListener("dispose",ct),ke=new Map,B.programs=ke);let ze=ke.get(Ne);if(ze!==void 0){if(B.currentProgram===ze&&B.lightsStateVersion===Pe)return wn(y,Ie),ze}else Ie.uniforms=it.getUniforms(y),y.onBuild(Z,Ie,f),y.onBeforeCompile(Ie,f),ze=it.acquireProgram(Ie,Ne),ke.set(Ne,ze),B.uniforms=Ie.uniforms;const Be=B.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Be.clippingPlanes=X.uniform),wn(y,Ie),B.needsLights=Ki(y),B.lightsStateVersion=Pe,B.needsLights&&(Be.ambientLightColor.value=ee.state.ambient,Be.lightProbe.value=ee.state.probe,Be.directionalLights.value=ee.state.directional,Be.directionalLightShadows.value=ee.state.directionalShadow,Be.spotLights.value=ee.state.spot,Be.spotLightShadows.value=ee.state.spotShadow,Be.rectAreaLights.value=ee.state.rectArea,Be.ltc_1.value=ee.state.rectAreaLTC1,Be.ltc_2.value=ee.state.rectAreaLTC2,Be.pointLights.value=ee.state.point,Be.pointLightShadows.value=ee.state.pointShadow,Be.hemisphereLights.value=ee.state.hemi,Be.directionalShadowMap.value=ee.state.directionalShadowMap,Be.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Be.spotShadowMap.value=ee.state.spotShadowMap,Be.spotLightMatrix.value=ee.state.spotLightMatrix,Be.spotLightMap.value=ee.state.spotLightMap,Be.pointShadowMap.value=ee.state.pointShadowMap,Be.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Qe=ze.getUniforms(),dt=as.seqWithValue(Qe.seq,Be);return B.currentProgram=ze,B.uniformsList=dt,ze}function wn(y,G){const Z=Se.get(y);Z.outputColorSpace=G.outputColorSpace,Z.instancing=G.instancing,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Sr(y,G,Z,B,ee){G.isScene!==!0&&(G=le),Oe.resetTextureUnits();const Te=G.fog,Pe=B.isMeshStandardMaterial?G.environment:null,Ie=C===null?f.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:sn,Ne=(B.isMeshStandardMaterial?Ke:nt).get(B.envMap||Pe),ke=B.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!B.normalMap&&!!Z.attributes.tangent,Be=!!Z.morphAttributes.position,Qe=!!Z.morphAttributes.normal,dt=!!Z.morphAttributes.color,Dt=B.toneMapped?f.toneMapping:bn,en=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ht=en!==void 0?en.length:0,He=Se.get(B),Yi=S.state.lights;if(re===!0&&(Ae===!0||y!==k)){const _t=y===k&&B.id===N;X.setState(B,y,_t)}let ot=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Yi.state.version||He.outputColorSpace!==Ie||ee.isInstancedMesh&&He.instancing===!1||!ee.isInstancedMesh&&He.instancing===!0||ee.isSkinnedMesh&&He.skinning===!1||!ee.isSkinnedMesh&&He.skinning===!0||He.envMap!==Ne||B.fog===!0&&He.fog!==Te||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==X.numPlanes||He.numIntersection!==X.numIntersection)||He.vertexAlphas!==ke||He.vertexTangents!==ze||He.morphTargets!==Be||He.morphNormals!==Qe||He.morphColors!==dt||He.toneMapping!==Dt||pe.isWebGL2===!0&&He.morphTargetsCount!==ht)&&(ot=!0):(ot=!0,He.__version=B.version);let on=He.currentProgram;ot===!0&&(on=li(B,G,ee));let yr=!1,Sn=!1,ui=!1;const Et=on.getUniforms(),tn=He.uniforms;if(we.useProgram(on.program)&&(yr=!0,Sn=!0,ui=!0),B.id!==N&&(N=B.id,Sn=!0),yr||k!==y){if(Et.setValue(F,"projectionMatrix",y.projectionMatrix),pe.logarithmicDepthBuffer&&Et.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),k!==y&&(k=y,Sn=!0,ui=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const _t=Et.map.cameraPosition;_t!==void 0&&_t.setValue(F,q.setFromMatrixPosition(y.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Et.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||ee.isSkinnedMesh)&&Et.setValue(F,"viewMatrix",y.matrixWorldInverse)}if(ee.isSkinnedMesh){Et.setOptional(F,ee,"bindMatrix"),Et.setOptional(F,ee,"bindMatrixInverse");const _t=ee.skeleton;_t&&(pe.floatVertexTextures?(_t.boneTexture===null&&_t.computeBoneTexture(),Et.setValue(F,"boneTexture",_t.boneTexture,Oe),Et.setValue(F,"boneTextureSize",_t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $i=Z.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0&&pe.isWebGL2===!0)&&fe.update(ee,Z,on),(Sn||He.receiveShadow!==ee.receiveShadow)&&(He.receiveShadow=ee.receiveShadow,Et.setValue(F,"receiveShadow",ee.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(tn.envMap.value=Ne,tn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Sn&&(Et.setValue(F,"toneMappingExposure",f.toneMappingExposure),He.needsLights&&ci(tn,ui),Te&&B.fog===!0&&xt.refreshFogUniforms(tn,Te),xt.refreshMaterialUniforms(tn,B,V,ne,de),as.upload(F,He.uniformsList,tn,Oe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(as.upload(F,He.uniformsList,tn,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Et.setValue(F,"center",ee.center),Et.setValue(F,"modelViewMatrix",ee.modelViewMatrix),Et.setValue(F,"normalMatrix",ee.normalMatrix),Et.setValue(F,"modelMatrix",ee.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const _t=B.uniformsGroups;for(let Zi=0,Tr=_t.length;Zi<Tr;Zi++)if(pe.isWebGL2){const Ji=_t[Zi];xe.update(Ji,on),xe.bind(Ji,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function ci(y,G){y.ambientLightColor.needsUpdate=G,y.lightProbe.needsUpdate=G,y.directionalLights.needsUpdate=G,y.directionalLightShadows.needsUpdate=G,y.pointLights.needsUpdate=G,y.pointLightShadows.needsUpdate=G,y.spotLights.needsUpdate=G,y.spotLightShadows.needsUpdate=G,y.rectAreaLights.needsUpdate=G,y.hemisphereLights.needsUpdate=G}function Ki(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,G,Z){Se.get(y.texture).__webglTexture=G,Se.get(y.depthTexture).__webglTexture=Z;const B=Se.get(y);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=Z===void 0,B.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,G){const Z=Se.get(y);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(y,G=0,Z=0){C=y,R=G,P=Z;let B=!0,ee=null,Te=!1,Pe=!1;if(y){const Ne=Se.get(y);Ne.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(F.FRAMEBUFFER,null),B=!1):Ne.__webglFramebuffer===void 0?Oe.setupRenderTarget(y):Ne.__hasExternalTextures&&Oe.rebindTextures(y,Se.get(y.texture).__webglTexture,Se.get(y.depthTexture).__webglTexture);const ke=y.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Pe=!0);const ze=Se.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(ee=ze[G],Te=!0):pe.isWebGL2&&y.samples>0&&Oe.useMultisampledRTT(y)===!1?ee=Se.get(y).__webglMultisampledFramebuffer:ee=ze,J.copy(y.viewport),M.copy(y.scissor),D=y.scissorTest}else J.copy(ae).multiplyScalar(V).floor(),M.copy($).multiplyScalar(V).floor(),D=z;if(we.bindFramebuffer(F.FRAMEBUFFER,ee)&&pe.drawBuffers&&B&&we.drawBuffers(y,ee),we.viewport(J),we.scissor(M),we.setScissorTest(D),Te){const Ne=Se.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ne.__webglTexture,Z)}else if(Pe){const Ne=Se.get(y.texture),ke=G||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ne.__webglTexture,Z||0,ke)}N=-1},this.readRenderTargetPixels=function(y,G,Z,B,ee,Te,Pe){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Se.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){we.bindFramebuffer(F.FRAMEBUFFER,Ie);try{const Ne=y.texture,ke=Ne.format,ze=Ne.type;if(ke!==Qt&&W.convert(ke)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===br&&(Le.has("EXT_color_buffer_half_float")||pe.isWebGL2&&Le.has("EXT_color_buffer_float"));if(ze!==ni&&W.convert(ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Zn&&(pe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=y.width-B&&Z>=0&&Z<=y.height-ee&&F.readPixels(G,Z,B,ee,W.convert(ke),W.convert(ze),Te)}finally{const Ne=C!==null?Se.get(C).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(y,G,Z=0){const B=Math.pow(2,-Z),ee=Math.floor(G.image.width*B),Te=Math.floor(G.image.height*B);Oe.setTexture2D(G,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,y.x,y.y,ee,Te),we.unbindTexture()},this.copyTextureToTexture=function(y,G,Z,B=0){const ee=G.image.width,Te=G.image.height,Pe=W.convert(Z.format),Ie=W.convert(Z.type);Oe.setTexture2D(Z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,y.x,y.y,ee,Te,Pe,Ie,G.image.data):G.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,y.x,y.y,G.mipmaps[0].width,G.mipmaps[0].height,Pe,G.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,B,y.x,y.y,Pe,Ie,G.image),B===0&&Z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(y,G,Z,B,ee=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=y.max.x-y.min.x+1,Pe=y.max.y-y.min.y+1,Ie=y.max.z-y.min.z+1,Ne=W.convert(B.format),ke=W.convert(B.type);let ze;if(B.isData3DTexture)Oe.setTexture3D(B,0),ze=F.TEXTURE_3D;else if(B.isDataArrayTexture)Oe.setTexture2DArray(B,0),ze=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const Be=F.getParameter(F.UNPACK_ROW_LENGTH),Qe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),dt=F.getParameter(F.UNPACK_SKIP_PIXELS),Dt=F.getParameter(F.UNPACK_SKIP_ROWS),en=F.getParameter(F.UNPACK_SKIP_IMAGES),ht=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ht.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,y.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,y.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,y.min.z),Z.isDataTexture||Z.isData3DTexture?F.texSubImage3D(ze,ee,G.x,G.y,G.z,Te,Pe,Ie,Ne,ke,ht.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(ze,ee,G.x,G.y,G.z,Te,Pe,Ie,Ne,ht.data)):F.texSubImage3D(ze,ee,G.x,G.y,G.z,Te,Pe,Ie,Ne,ke,ht),F.pixelStorei(F.UNPACK_ROW_LENGTH,Be),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,dt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,en),ee===0&&B.generateMipmaps&&F.generateMipmap(ze),we.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?Oe.setTextureCube(y,0):y.isData3DTexture?Oe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Oe.setTexture2DArray(y,0):Oe.setTexture2D(y,0),we.unbindTexture()},this.resetState=function(){R=0,P=0,C=null,we.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ve?Qn:dc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qn?Ve:sn}}class Ng extends Dc{}Ng.prototype.isWebGL1Renderer=!0;class Fg extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Uc extends Mr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ec=new wt,Ro=new vc,ss=new hs,os=new H;class Og extends Nt{constructor(e=new xn,t=new Uc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,d=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ss.copy(i.boundingSphere),ss.applyMatrix4(a),ss.radius+=l,e.ray.intersectsSphere(ss)===!1)return;ec.copy(a).invert(),Ro.copy(e.ray).applyMatrix4(ec);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=u*u,h=i.index,_=i.attributes.position;if(h!==null){const g=Math.max(0,d.start),x=Math.min(h.count,d.start+d.count);for(let S=g,E=x;S<E;S++){const b=h.getX(S);os.fromBufferAttribute(_,b),tc(os,b,p,a,e,t,this)}}else{const g=Math.max(0,d.start),x=Math.min(_.count,d.start+d.count);for(let S=g,E=x;S<E;S++)os.fromBufferAttribute(_,S),tc(os,S,p,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=a.length;l<d;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function tc(s,e,t,i,a,l,d){const u=Ro.distanceSqToPoint(s);if(u<t){const p=new H;Ro.closestPointToPoint(s,p),p.applyMatrix4(i);const h=a.ray.origin.distanceTo(p);if(h<a.near||h>a.far)return;l.push({distance:h,distanceToRay:Math.sqrt(u),point:p,index:e,face:null,object:d})}}class nc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);const ic={type:"change"},go={type:"start"},rc={type:"end"};class kg extends oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",it),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",it),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ic),i.update(),l=a.NONE},this.update=function(){const U=new H,te=new ri().setFromUnitVectors(e.up,new H(0,1,0)),W=te.clone().invert(),ve=new H,xe=new ri,Me=2*Math.PI;return function(){const Ee=i.object.position;U.copy(Ee).sub(i.target),U.applyQuaternion(te),u.setFromVector3(U),i.autoRotate&&l===a.NONE&&M(k()),i.enableDamping?(u.theta+=p.theta*i.dampingFactor,u.phi+=p.phi*i.dampingFactor):(u.theta+=p.theta,u.phi+=p.phi);let Re=i.minAzimuthAngle,Fe=i.maxAzimuthAngle;return isFinite(Re)&&isFinite(Fe)&&(Re<-Math.PI?Re+=Me:Re>Math.PI&&(Re-=Me),Fe<-Math.PI?Fe+=Me:Fe>Math.PI&&(Fe-=Me),Re<=Fe?u.theta=Math.max(Re,Math.min(Fe,u.theta)):u.theta=u.theta>(Re+Fe)/2?Math.max(Re,u.theta):Math.min(Fe,u.theta)),u.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=h,u.radius=Math.max(i.minDistance,Math.min(i.maxDistance,u.radius)),i.enableDamping===!0?i.target.addScaledVector(m,i.dampingFactor):i.target.add(m),U.setFromSpherical(u),U.applyQuaternion(W),Ee.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(p.theta*=1-i.dampingFactor,p.phi*=1-i.dampingFactor,m.multiplyScalar(1-i.dampingFactor)):(p.set(0,0,0),m.set(0,0,0)),h=1,_||ve.distanceToSquared(i.object.position)>d||8*(1-xe.dot(i.object.quaternion))>d?(i.dispatchEvent(ic),ve.copy(i.object.position),xe.copy(i.object.quaternion),_=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",w),i.domElement.removeEventListener("pointerdown",Oe),i.domElement.removeEventListener("pointercancel",Ke),i.domElement.removeEventListener("wheel",Xe),i.domElement.removeEventListener("pointermove",nt),i.domElement.removeEventListener("pointerup",Ke),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",it),i._domElementKeyEvents=null)};const i=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=a.NONE;const d=1e-6,u=new nc,p=new nc;let h=1;const m=new H;let _=!1;const g=new je,x=new je,S=new je,E=new je,b=new je,f=new je,L=new je,R=new je,P=new je,C=[],N={};function k(){return 2*Math.PI/60/60*i.autoRotateSpeed}function J(){return Math.pow(.95,i.zoomSpeed)}function M(U){p.theta-=U}function D(U){p.phi-=U}const ie=function(){const U=new H;return function(W,ve){U.setFromMatrixColumn(ve,0),U.multiplyScalar(-W),m.add(U)}}(),ne=function(){const U=new H;return function(W,ve){i.screenSpacePanning===!0?U.setFromMatrixColumn(ve,1):(U.setFromMatrixColumn(ve,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(W),m.add(U)}}(),V=function(){const U=new H;return function(W,ve){const xe=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;U.copy(Me).sub(i.target);let ge=U.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),ie(2*W*ge/xe.clientHeight,i.object.matrix),ne(2*ve*ge/xe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ie(W*(i.object.right-i.object.left)/i.object.zoom/xe.clientWidth,i.object.matrix),ne(ve*(i.object.top-i.object.bottom)/i.object.zoom/xe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(U){i.object.isPerspectiveCamera?h/=U:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*U)),i.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(U){i.object.isPerspectiveCamera?h*=U:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/U)),i.object.updateProjectionMatrix(),_=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ae(U){g.set(U.clientX,U.clientY)}function $(U){L.set(U.clientX,U.clientY)}function z(U){E.set(U.clientX,U.clientY)}function he(U){x.set(U.clientX,U.clientY),S.subVectors(x,g).multiplyScalar(i.rotateSpeed);const te=i.domElement;M(2*Math.PI*S.x/te.clientHeight),D(2*Math.PI*S.y/te.clientHeight),g.copy(x),i.update()}function re(U){R.set(U.clientX,U.clientY),P.subVectors(R,L),P.y>0?j(J()):P.y<0&&Q(J()),L.copy(R),i.update()}function Ae(U){b.set(U.clientX,U.clientY),f.subVectors(b,E).multiplyScalar(i.panSpeed),V(f.x,f.y),E.copy(b),i.update()}function de(U){U.deltaY<0?Q(J()):U.deltaY>0&&j(J()),i.update()}function K(U){let te=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),te=!0;break}te&&(U.preventDefault(),i.update())}function q(){if(C.length===1)g.set(C[0].pageX,C[0].pageY);else{const U=.5*(C[0].pageX+C[1].pageX),te=.5*(C[0].pageY+C[1].pageY);g.set(U,te)}}function le(){if(C.length===1)E.set(C[0].pageX,C[0].pageY);else{const U=.5*(C[0].pageX+C[1].pageX),te=.5*(C[0].pageY+C[1].pageY);E.set(U,te)}}function _e(){const U=C[0].pageX-C[1].pageX,te=C[0].pageY-C[1].pageY,W=Math.sqrt(U*U+te*te);L.set(0,W)}function F(){i.enableZoom&&_e(),i.enablePan&&le()}function De(){i.enableZoom&&_e(),i.enableRotate&&q()}function Le(U){if(C.length==1)x.set(U.pageX,U.pageY);else{const W=fe(U),ve=.5*(U.pageX+W.x),xe=.5*(U.pageY+W.y);x.set(ve,xe)}S.subVectors(x,g).multiplyScalar(i.rotateSpeed);const te=i.domElement;M(2*Math.PI*S.x/te.clientHeight),D(2*Math.PI*S.y/te.clientHeight),g.copy(x)}function pe(U){if(C.length===1)b.set(U.pageX,U.pageY);else{const te=fe(U),W=.5*(U.pageX+te.x),ve=.5*(U.pageY+te.y);b.set(W,ve)}f.subVectors(b,E).multiplyScalar(i.panSpeed),V(f.x,f.y),E.copy(b)}function we(U){const te=fe(U),W=U.pageX-te.x,ve=U.pageY-te.y,xe=Math.sqrt(W*W+ve*ve);R.set(0,xe),P.set(0,Math.pow(R.y/L.y,i.zoomSpeed)),j(P.y),L.copy(R)}function Ye(U){i.enableZoom&&we(U),i.enablePan&&pe(U)}function Se(U){i.enableZoom&&we(U),i.enableRotate&&Le(U)}function Oe(U){i.enabled!==!1&&(C.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",nt),i.domElement.addEventListener("pointerup",Ke)),X(U),U.pointerType==="touch"?xt(U):st(U))}function nt(U){i.enabled!==!1&&(U.pointerType==="touch"?T(U):lt(U))}function Ke(U){oe(U),C.length===0&&(i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",nt),i.domElement.removeEventListener("pointerup",Ke)),i.dispatchEvent(rc),l=a.NONE}function st(U){let te;switch(U.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case gi.DOLLY:if(i.enableZoom===!1)return;$(U),l=a.DOLLY;break;case gi.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;z(U),l=a.PAN}else{if(i.enableRotate===!1)return;ae(U),l=a.ROTATE}break;case gi.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;ae(U),l=a.ROTATE}else{if(i.enablePan===!1)return;z(U),l=a.PAN}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(go)}function lt(U){switch(l){case a.ROTATE:if(i.enableRotate===!1)return;he(U);break;case a.DOLLY:if(i.enableZoom===!1)return;re(U);break;case a.PAN:if(i.enablePan===!1)return;Ae(U);break}}function Xe(U){i.enabled===!1||i.enableZoom===!1||l!==a.NONE||(U.preventDefault(),i.dispatchEvent(go),de(U),i.dispatchEvent(rc))}function it(U){i.enabled===!1||i.enablePan===!1||K(U)}function xt(U){switch(ce(U),C.length){case 1:switch(i.touches.ONE){case bi.ROTATE:if(i.enableRotate===!1)return;q(),l=a.TOUCH_ROTATE;break;case bi.PAN:if(i.enablePan===!1)return;le(),l=a.TOUCH_PAN;break;default:l=a.NONE}break;case 2:switch(i.touches.TWO){case bi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;F(),l=a.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;De(),l=a.TOUCH_DOLLY_ROTATE;break;default:l=a.NONE}break;default:l=a.NONE}l!==a.NONE&&i.dispatchEvent(go)}function T(U){switch(ce(U),l){case a.TOUCH_ROTATE:if(i.enableRotate===!1)return;Le(U),i.update();break;case a.TOUCH_PAN:if(i.enablePan===!1)return;pe(U),i.update();break;case a.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ye(U),i.update();break;case a.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Se(U),i.update();break;default:l=a.NONE}}function w(U){i.enabled!==!1&&U.preventDefault()}function X(U){C.push(U)}function oe(U){delete N[U.pointerId];for(let te=0;te<C.length;te++)if(C[te].pointerId==U.pointerId){C.splice(te,1);return}}function ce(U){let te=N[U.pointerId];te===void 0&&(te=new je,N[U.pointerId]=te),te.set(U.pageX,U.pageY)}function fe(U){const te=U.pointerId===C[0].pointerId?C[1]:C[0];return N[te.pointerId]}i.domElement.addEventListener("contextmenu",w),i.domElement.addEventListener("pointerdown",Oe),i.domElement.addEventListener("pointercancel",Ke),i.domElement.addEventListener("wheel",Xe,{passive:!1}),this.update()}}var Bg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Lo={exports:{}};/*! Tweakpane 3.1.9 (c) 2016 cocopon, licensed under the MIT license. */(function(s,e){(function(t,i){i(e)})(Bg,function(t){class i{constructor(n){const[r,c]=n.split("-"),v=r.split(".");this.major=parseInt(v[0],10),this.minor=parseInt(v[1],10),this.patch=parseInt(v[2],10),this.prerelease=c??null}toString(){const n=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[n,this.prerelease].join("-"):n}}class a{constructor(n){this.controller_=n}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(n){this.controller_.viewProps.set("disabled",n)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(n){this.controller_.viewProps.set("hidden",n)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class l{constructor(n){this.target=n}}class d extends l{constructor(n,r,c,v){super(n),this.value=r,this.presetKey=c,this.last=v??!0}}class u extends l{constructor(n,r,c){super(n),this.value=r,this.presetKey=c}}class p extends l{constructor(n,r){super(n),this.expanded=r}}class h extends l{constructor(n,r){super(n),this.index=r}}function m(o){return o}function _(o){return o==null}function g(o,n){if(o.length!==n.length)return!1;for(let r=0;r<o.length;r++)if(o[r]!==n[r])return!1;return!0}function x(o,n){let r=o;do{const c=Object.getOwnPropertyDescriptor(r,n);if(c&&(c.set!==void 0||c.writable===!0))return!0;r=Object.getPrototypeOf(r)}while(r!==null);return!1}const S={alreadydisposed:()=>"View has been already disposed",invalidparams:o=>`Invalid parameters for '${o.name}'`,nomatchingcontroller:o=>`No matching controller for '${o.key}'`,nomatchingview:o=>`No matching view for '${JSON.stringify(o.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:o=>`Property '${o.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class E{static alreadyDisposed(){return new E({type:"alreadydisposed"})}static notBindable(){return new E({type:"notbindable"})}static propertyNotFound(n){return new E({type:"propertynotfound",context:{name:n}})}static shouldNeverHappen(){return new E({type:"shouldneverhappen"})}constructor(n){var r;this.message=(r=S[n.type](n.context))!==null&&r!==void 0?r:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=n.type}}class b{constructor(n,r,c){this.obj_=n,this.key_=r,this.presetKey_=c??r}static isBindable(n){return!(n===null||typeof n!="object"&&typeof n!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(n){this.obj_[this.key_]=n}writeProperty(n,r){const c=this.read();if(!b.isBindable(c))throw E.notBindable();if(!(n in c))throw E.propertyNotFound(n);c[n]=r}}class f extends a{get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get title(){var n;return(n=this.controller_.valueController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.valueController.props.set("title",n)}on(n,r){const c=r.bind(this);return this.controller_.valueController.emitter.on(n,()=>{c(new l(this))}),this}}class L{constructor(){this.observers_={}}on(n,r){let c=this.observers_[n];return c||(c=this.observers_[n]=[]),c.push({handler:r}),this}off(n,r){const c=this.observers_[n];return c&&(this.observers_[n]=c.filter(v=>v.handler!==r)),this}emit(n,r){const c=this.observers_[n];c&&c.forEach(v=>{v.handler(r)})}}const R="tp";function P(o){return(r,c)=>[R,"-",o,"v",r?`_${r}`:"",c?`-${c}`:""].join("")}function C(o,n){return r=>n(o(r))}function N(o){return o.rawValue}function k(o,n){o.emitter.on("change",C(N,n)),n(o.rawValue)}function J(o,n,r){k(o.value(n),r)}function M(o,n,r){r?o.classList.add(n):o.classList.remove(n)}function D(o,n){return r=>{M(o,n,r)}}function ie(o,n){k(o,r=>{n.textContent=r??""})}const ne=P("btn");class V{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(ne()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("button");c.classList.add(ne("b")),r.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const v=n.createElement("div");v.classList.add(ne("t")),ie(r.props.value("title"),v),this.buttonElement.appendChild(v)}}class j{constructor(n,r){this.emitter=new L,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new V(n,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Q{constructor(n,r){var c;this.constraint_=r==null?void 0:r.constraint,this.equals_=(c=r==null?void 0:r.equals)!==null&&c!==void 0?c:(v,A)=>v===A,this.emitter=new L,this.rawValue_=n}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const c=r??{forceEmit:!1,last:!0},v=this.constraint_?this.constraint_.constrain(n):n,A=this.rawValue_;this.equals_(A,v)&&!c.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=v,this.emitter.emit("change",{options:c,previousRawValue:A,rawValue:v,sender:this}))}}class ae{constructor(n){this.emitter=new L,this.value_=n}get rawValue(){return this.value_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const c=r??{forceEmit:!1,last:!0},v=this.value_;v===n&&!c.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=n,this.emitter.emit("change",{options:c,previousRawValue:v,rawValue:this.value_,sender:this}))}}function $(o,n){const r=n==null?void 0:n.constraint,c=n==null?void 0:n.equals;return!r&&!c?new ae(o):new Q(o,n)}class z{constructor(n){this.emitter=new L,this.valMap_=n;for(const r in this.valMap_)this.valMap_[r].emitter.on("change",()=>{this.emitter.emit("change",{key:r,sender:this})})}static createCore(n){return Object.keys(n).reduce((c,v)=>Object.assign(c,{[v]:$(n[v])}),{})}static fromObject(n){const r=this.createCore(n);return new z(r)}get(n){return this.valMap_[n].rawValue}set(n,r){this.valMap_[n].rawValue=r}value(n){return this.valMap_[n]}}function he(o,n){const c=Object.keys(n).reduce((v,A)=>{if(v===void 0)return;const O=n[A],ue=O(o[A]);return ue.succeeded?Object.assign(Object.assign({},v),{[A]:ue.value}):void 0},{});return c}function re(o,n){return o.reduce((r,c)=>{if(r===void 0)return;const v=n(c);if(!(!v.succeeded||v.value===void 0))return[...r,v.value]},[])}function Ae(o){return o===null?!1:typeof o=="object"}function de(o){return n=>r=>{if(!n&&r===void 0)return{succeeded:!1,value:void 0};if(n&&r===void 0)return{succeeded:!0,value:void 0};const c=o(r);return c!==void 0?{succeeded:!0,value:c}:{succeeded:!1,value:void 0}}}function K(o){return{custom:n=>de(n)(o),boolean:de(n=>typeof n=="boolean"?n:void 0)(o),number:de(n=>typeof n=="number"?n:void 0)(o),string:de(n=>typeof n=="string"?n:void 0)(o),function:de(n=>typeof n=="function"?n:void 0)(o),constant:n=>de(r=>r===n?n:void 0)(o),raw:de(n=>n)(o),object:n=>de(r=>{if(Ae(r))return he(r,n)})(o),array:n=>de(r=>{if(Array.isArray(r))return re(r,n)})(o)}}const q={optional:K(!0),required:K(!1)};function le(o,n){const r=q.required.object(n)(o);return r.succeeded?r.value:void 0}function _e(o){console.warn([`Missing '${o.key}' of ${o.target} in ${o.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function F(o){return o&&o.parentElement&&o.parentElement.removeChild(o),null}class De{constructor(n){this.value_=n}static create(n){return[new De(n),(r,c)=>{n.setRawValue(r,c)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const Le=P("");function pe(o,n){return D(o,Le(void 0,n))}class we extends z{constructor(n){var r;super(n),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=De.create($(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(r=this.get("parent"))===null||r===void 0||r.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(n){var r,c,v;const A=n??{};return new we(z.createCore({disabled:(r=A.disabled)!==null&&r!==void 0?r:!1,disposed:!1,hidden:(c=A.hidden)!==null&&c!==void 0?c:!1,parent:(v=A.parent)!==null&&v!==void 0?v:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(n){k(this.globalDisabled_,pe(n,"disabled")),J(this,"hidden",pe(n,"hidden"))}bindDisabled(n){k(this.globalDisabled_,r=>{n.disabled=r})}bindTabIndex(n){k(this.globalDisabled_,r=>{n.tabIndex=r?-1:0})}handleDispose(n){this.value("disposed").emitter.on("change",r=>{r&&n()})}getGlobalDisabled_(){const n=this.get("parent");return(n?n.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(n){var r;const c=n.previousRawValue;c==null||c.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(r=this.get("parent"))===null||r===void 0||r.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function Ye(){return["veryfirst","first","last","verylast"]}const Se=P(""),Oe={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class nt{constructor(n){this.parent_=null,this.blade=n.blade,this.view=n.view,this.viewProps=n.viewProps;const r=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Ye().forEach(c=>{r.classList.remove(Se(void 0,Oe[c]))}),this.blade.get("positions").forEach(c=>{r.classList.add(Se(void 0,Oe[c]))})}),this.viewProps.handleDispose(()=>{F(r)})}get parent(){return this.parent_}set parent(n){if(this.parent_=n,!("parent"in this.viewProps.valMap_)){_e({key:"parent",target:we.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const Ke="http://www.w3.org/2000/svg";function st(o){o.offsetHeight}function lt(o,n){const r=o.style.transition;o.style.transition="none",n(),o.style.transition=r}function Xe(o){return o.ontouchstart!==void 0}function it(){return globalThis}function xt(){return it().document}function T(o){const n=o.ownerDocument.defaultView;return n&&"document"in n?o.getContext("2d",{willReadFrequently:!0}):null}const w={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function X(o,n){const r=o.createElementNS(Ke,"svg");return r.innerHTML=w[n],r}function oe(o,n,r){o.insertBefore(n,o.children[r])}function ce(o){o.parentElement&&o.parentElement.removeChild(o)}function fe(o){for(;o.children.length>0;)o.removeChild(o.children[0])}function U(o){for(;o.childNodes.length>0;)o.removeChild(o.childNodes[0])}function te(o){return o.relatedTarget?o.relatedTarget:"explicitOriginalTarget"in o?o.explicitOriginalTarget:null}const W=P("lbl");function ve(o,n){const r=o.createDocumentFragment();return n.split(`
`).map(v=>o.createTextNode(v)).forEach((v,A)=>{A>0&&r.appendChild(o.createElement("br")),r.appendChild(v)}),r}class xe{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(W()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(W("l")),J(r.props,"label",A=>{_(A)?this.element.classList.add(W(void 0,"nol")):(this.element.classList.remove(W(void 0,"nol")),U(c),c.appendChild(ve(n,A)))}),this.element.appendChild(c),this.labelElement=c;const v=n.createElement("div");v.classList.add(W("v")),this.element.appendChild(v),this.valueElement=v}}class Me extends nt{constructor(n,r){const c=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{view:new xe(n,{props:r.props,viewProps:c}),viewProps:c})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const ge={id:"button",type:"blade",accept(o){const n=q,r=le(o,{title:n.required.string,view:n.required.constant("button"),label:n.optional.string});return r?{params:r}:null},controller(o){return new Me(o.document,{blade:o.blade,props:z.fromObject({label:o.params.label}),valueController:new j(o.document,{props:z.fromObject({title:o.params.title}),viewProps:o.viewProps})})},api(o){return!(o.controller instanceof Me)||!(o.controller.valueController instanceof j)?null:new f(o.controller)}};class Ee extends nt{constructor(n){super(n),this.value=n.value}}function Re(){return new z({positions:$([],{equals:g})})}class Fe extends z{constructor(n){super(n)}static create(n){const r={completed:!0,expanded:n,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},c=z.createCore(r);return new Fe(c)}get styleExpanded(){var n;return(n=this.get("temporaryExpanded"))!==null&&n!==void 0?n:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const n=this.get("expandedHeight");return this.get("shouldFixHeight")&&!_(n)?`${n}px`:"auto"}bindExpandedClass(n,r){const c=()=>{this.styleExpanded?n.classList.add(r):n.classList.remove(r)};J(this,"expanded",c),J(this,"temporaryExpanded",c)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function ct(o,n){let r=0;return lt(n,()=>{o.set("expandedHeight",null),o.set("temporaryExpanded",!0),st(n),r=n.clientHeight,o.set("temporaryExpanded",null),st(n)}),r}function I(o,n){n.style.height=o.styleHeight}function Y(o,n){o.value("expanded").emitter.on("beforechange",()=>{if(o.set("completed",!1),_(o.get("expandedHeight"))){const r=ct(o,n);r>0&&o.set("expandedHeight",r)}o.set("shouldFixHeight",!0),st(n)}),o.emitter.on("change",()=>{I(o,n)}),I(o,n),n.addEventListener("transitionend",r=>{r.propertyName==="height"&&o.cleanUpTransition()})}class se extends a{constructor(n,r){super(n),this.rackApi_=r}}function be(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"button"}))}function ye(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"folder"}))}function et(o,n){const r=n??{};return o.addBlade(Object.assign(Object.assign({},r),{view:"separator"}))}function tt(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"tab"}))}class pt{constructor(n){this.emitter=new L,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=n}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(n){for(const r of this.allItems())if(n(r))return r;return null}includes(n){return this.cache_.has(n)}add(n,r){if(this.includes(n))throw E.shouldNeverHappen();const c=r!==void 0?r:this.items_.length;this.items_.splice(c,0,n),this.cache_.add(n);const v=this.extract_(n);v&&(v.emitter.on("add",this.onSubListAdd_),v.emitter.on("remove",this.onSubListRemove_),v.allItems().forEach(A=>{this.cache_.add(A)})),this.emitter.emit("add",{index:c,item:n,root:this,target:this})}remove(n){const r=this.items_.indexOf(n);if(r<0)return;this.items_.splice(r,1),this.cache_.delete(n);const c=this.extract_(n);c&&(c.emitter.off("add",this.onSubListAdd_),c.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:r,item:n,root:this,target:this})}onSubListAdd_(n){this.cache_.add(n.item),this.emitter.emit("add",{index:n.index,item:n.item,root:this,target:n.target})}onSubListRemove_(n){this.cache_.delete(n.item),this.emitter.emit("remove",{index:n.index,item:n.item,root:this,target:n.target})}}class Vt extends a{constructor(n){super(n),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new L,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(n){const r=n.sender.target.read();this.emitter_.emit("change",{event:new d(this,r,this.controller_.binding.target.presetKey,n.options.last)})}}class $e extends Me{constructor(n,r){super(n,r),this.binding=r.binding}}class Tt extends a{constructor(n){super(n),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new L,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(n){const r=n.sender.target.read();this.emitter_.emit("update",{event:new u(this,r,this.controller_.binding.target.presetKey)})}}class mt extends Me{constructor(n,r){super(n,r),this.binding=r.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function li(o){return o instanceof ci?o.apiSet_:o instanceof se?o.rackApi_.apiSet_:null}function wn(o,n){const r=o.find(c=>c.controller_===n);if(!r)throw E.shouldNeverHappen();return r}function Sr(o,n,r){if(!b.isBindable(o))throw E.notBindable();return new b(o,n,r)}class ci extends a{constructor(n,r){super(n),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new L,this.apiSet_=new pt(li),this.pool_=r;const c=this.controller_.rack;c.emitter.on("add",this.onRackAdd_),c.emitter.on("remove",this.onRackRemove_),c.emitter.on("inputchange",this.onRackInputChange_),c.emitter.on("monitorupdate",this.onRackMonitorUpdate_),c.children.forEach(v=>{this.setUpApi_(v)})}get children(){return this.controller_.rack.children.map(n=>wn(this.apiSet_,n))}addInput(n,r,c){const v=c??{},A=this.controller_.view.element.ownerDocument,O=this.pool_.createInput(A,Sr(n,r,v.presetKey),v),ue=new Vt(O);return this.add(ue,v.index)}addMonitor(n,r,c){const v=c??{},A=this.controller_.view.element.ownerDocument,O=this.pool_.createMonitor(A,Sr(n,r),v),ue=new Tt(O);return this.add(ue,v.index)}addFolder(n){return ye(this,n)}addButton(n){return be(this,n)}addSeparator(n){return et(this,n)}addTab(n){return tt(this,n)}add(n,r){this.controller_.rack.add(n.controller_,r);const c=this.apiSet_.find(v=>v.controller_===n.controller_);return c&&this.apiSet_.remove(c),this.apiSet_.add(n),n}remove(n){this.controller_.rack.remove(n.controller_)}addBlade(n){const r=this.controller_.view.element.ownerDocument,c=this.pool_.createBlade(r,n),v=this.pool_.createBladeApi(c);return this.add(v,n.index)}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}setUpApi_(n){this.apiSet_.find(c=>c.controller_===n)||this.apiSet_.add(this.pool_.createBladeApi(n))}onRackAdd_(n){this.setUpApi_(n.bladeController)}onRackRemove_(n){if(n.isRoot){const r=wn(this.apiSet_,n.bladeController);this.apiSet_.remove(r)}}onRackInputChange_(n){const r=n.bladeController;if(r instanceof $e){const c=wn(this.apiSet_,r),v=r.binding;this.emitter_.emit("change",{event:new d(c,v.target.read(),v.target.presetKey,n.options.last)})}else if(r instanceof Ee){const c=wn(this.apiSet_,r);this.emitter_.emit("change",{event:new d(c,r.value.rawValue,void 0,n.options.last)})}}onRackMonitorUpdate_(n){if(!(n.bladeController instanceof mt))throw E.shouldNeverHappen();const r=wn(this.apiSet_,n.bladeController),c=n.bladeController.binding;this.emitter_.emit("update",{event:new u(r,c.target.read(),c.target.presetKey)})}}class Ki extends se{constructor(n,r){super(n,new ci(n.rackController,r)),this.emitter_=new L,this.controller_.foldable.value("expanded").emitter.on("change",c=>{this.emitter_.emit("fold",{event:new p(this,c.sender.rawValue)})}),this.rackApi_.on("change",c=>{this.emitter_.emit("change",{event:c})}),this.rackApi_.on("update",c=>{this.emitter_.emit("update",{event:c})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(n){this.controller_.foldable.set("expanded",n)}get title(){return this.controller_.props.get("title")}set title(n){this.controller_.props.set("title",n)}get children(){return this.rackApi_.children}addInput(n,r,c){return this.rackApi_.addInput(n,r,c)}addMonitor(n,r,c){return this.rackApi_.addMonitor(n,r,c)}addFolder(n){return this.rackApi_.addFolder(n)}addButton(n){return this.rackApi_.addButton(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){return this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addBlade(n){return this.rackApi_.addBlade(n)}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}}class y extends nt{constructor(n){super({blade:n.blade,view:n.view,viewProps:n.rackController.viewProps}),this.rackController=n.rackController}}class G{constructor(n,r){const c=P(r.viewName);this.element=n.createElement("div"),this.element.classList.add(c()),r.viewProps.bindClassModifiers(this.element)}}function Z(o,n){for(let r=0;r<o.length;r++){const c=o[r];if(c instanceof $e&&c.binding===n)return c}return null}function B(o,n){for(let r=0;r<o.length;r++){const c=o[r];if(c instanceof mt&&c.binding===n)return c}return null}function ee(o,n){for(let r=0;r<o.length;r++){const c=o[r];if(c instanceof Ee&&c.value===n)return c}return null}function Te(o){return o instanceof Ne?o.rack:o instanceof y?o.rackController.rack:null}function Pe(o){const n=Te(o);return n?n.bcSet_:null}class Ie{constructor(n){var r,c;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new L,this.blade_=(r=n.blade)!==null&&r!==void 0?r:null,(c=this.blade_)===null||c===void 0||c.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=n.viewProps,this.bcSet_=new pt(Pe),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(n,r){var c;(c=n.parent)===null||c===void 0||c.remove(n),x(n,"parent")?n.parent=this:(n.parent_=this,_e({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(n,r)}remove(n){x(n,"parent")?n.parent=null:(n.parent_=null,_e({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(n)}find(n){return this.bcSet_.allItems().filter(r=>r instanceof n)}onSetAdd_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("add",{bladeController:n.item,index:n.index,isRoot:r,sender:this}),!r)return;const c=n.item;if(c.viewProps.emitter.on("change",this.onChildViewPropsChange_),c.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),c.viewProps.handleDispose(this.onChildDispose_),c instanceof $e)c.binding.emitter.on("change",this.onChildInputChange_);else if(c instanceof mt)c.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(c instanceof Ee)c.value.emitter.on("change",this.onChildValueChange_);else{const v=Te(c);if(v){const A=v.emitter;A.on("layout",this.onDescendantLayout_),A.on("inputchange",this.onDescendantInputChange_),A.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("remove",{bladeController:n.item,isRoot:r,sender:this}),!r)return;const c=n.item;if(c instanceof $e)c.binding.emitter.off("change",this.onChildInputChange_);else if(c instanceof mt)c.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(c instanceof Ee)c.value.emitter.off("change",this.onChildValueChange_);else{const v=Te(c);if(v){const A=v.emitter;A.off("layout",this.onDescendantLayout_),A.off("inputchange",this.onDescendantInputChange_),A.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const n=this.bcSet_.items.filter(v=>!v.viewProps.get("hidden")),r=n[0],c=n[n.length-1];this.bcSet_.items.forEach(v=>{const A=[];v===r&&(A.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&A.push("veryfirst")),v===c&&(A.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&A.push("verylast")),v.blade.set("positions",A)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(r=>r.viewProps.get("disposed")).forEach(r=>{this.bcSet_.remove(r)})}onChildInputChange_(n){const r=Z(this.find($e),n.sender);if(!r)throw E.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onChildMonitorUpdate_(n){const r=B(this.find(mt),n.sender);if(!r)throw E.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:r,sender:this})}onChildValueChange_(n){const r=ee(this.find(Ee),n.sender);if(!r)throw E.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onDescendantLayout_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(n){this.emitter.emit("inputchange",{bladeController:n.bladeController,options:n.options,sender:this})}onDescendantMonitorUpdate_(n){this.emitter.emit("monitorupdate",{bladeController:n.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ne extends nt{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new G(n,{viewName:"brk",viewProps:r.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const c=new Ie({blade:r.root?void 0:r.blade,viewProps:r.viewProps});c.emitter.on("add",this.onRackAdd_),c.emitter.on("remove",this.onRackRemove_),this.rack=c,this.viewProps.handleDispose(()=>{for(let v=this.rack.children.length-1;v>=0;v--)this.rack.children[v].viewProps.set("disposed",!0)})}onRackAdd_(n){n.isRoot&&oe(this.view.element,n.bladeController.view.element,n.index)}onRackRemove_(n){n.isRoot&&ce(n.bladeController.view.element)}}const ke=P("cnt");class ze{constructor(n,r){var c;this.className_=P((c=r.viewName)!==null&&c!==void 0?c:"fld"),this.element=n.createElement("div"),this.element.classList.add(this.className_(),ke()),r.viewProps.bindClassModifiers(this.element),this.foldable_=r.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),J(this.foldable_,"completed",D(this.element,this.className_(void 0,"cpl")));const v=n.createElement("button");v.classList.add(this.className_("b")),J(r.props,"title",Ue=>{_(Ue)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),r.viewProps.bindDisabled(v),this.element.appendChild(v),this.buttonElement=v;const A=n.createElement("div");A.classList.add(this.className_("i")),this.element.appendChild(A);const O=n.createElement("div");O.classList.add(this.className_("t")),ie(r.props.value("title"),O),this.buttonElement.appendChild(O),this.titleElement=O;const ue=n.createElement("div");ue.classList.add(this.className_("m")),this.buttonElement.appendChild(ue);const Ce=r.containerElement;Ce.classList.add(this.className_("c")),this.element.appendChild(Ce),this.containerElement=Ce}}class Be extends y{constructor(n,r){var c;const v=Fe.create((c=r.expanded)!==null&&c!==void 0?c:!0),A=new Ne(n,{blade:r.blade,root:r.root,viewProps:r.viewProps});super(Object.assign(Object.assign({},r),{rackController:A,view:new ze(n,{containerElement:A.view.element,foldable:v,props:r.props,viewName:r.root?"rot":void 0,viewProps:r.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=r.props,this.foldable=v,Y(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Qe={id:"folder",type:"blade",accept(o){const n=q,r=le(o,{title:n.required.string,view:n.required.constant("folder"),expanded:n.optional.boolean});return r?{params:r}:null},controller(o){return new Be(o.document,{blade:o.blade,expanded:o.params.expanded,props:z.fromObject({title:o.params.title}),viewProps:o.viewProps})},api(o){return o.controller instanceof Be?new Ki(o.controller,o.pool):null}};class dt extends Ee{constructor(n,r){const c=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{value:r.valueController.value,view:new xe(n,{props:r.props,viewProps:c}),viewProps:c})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Dt extends a{}const en=P("spr");class ht{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(en()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("hr");c.classList.add(en("r")),this.element.appendChild(c)}}class He extends nt{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new ht(n,{viewProps:r.viewProps})}))}}const Yi={id:"separator",type:"blade",accept(o){const r=le(o,{view:q.required.constant("separator")});return r?{params:r}:null},controller(o){return new He(o.document,{blade:o.blade,viewProps:o.viewProps})},api(o){return o.controller instanceof He?new Dt(o.controller):null}},ot=P("tbi");class on{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(ot()),r.viewProps.bindClassModifiers(this.element),J(r.props,"selected",A=>{A?this.element.classList.add(ot(void 0,"sel")):this.element.classList.remove(ot(void 0,"sel"))});const c=n.createElement("button");c.classList.add(ot("b")),r.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const v=n.createElement("div");v.classList.add(ot("t")),ie(r.props.value("title"),v),this.buttonElement.appendChild(v),this.titleElement=v}}class yr{constructor(n,r){this.emitter=new L,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new on(n,{props:r.props,viewProps:r.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Sn{constructor(n,r){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new yr(n,{props:r.itemProps,viewProps:we.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new Ne(n,{blade:Re(),viewProps:we.create()}),this.props=r.props,J(this.props,"selected",c=>{this.itemController.props.set("selected",c),this.contentController.viewProps.set("hidden",!c)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class ui{constructor(n,r){this.controller_=n,this.rackApi_=r}get title(){var n;return(n=this.controller_.itemController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.itemController.props.set("title",n)}get selected(){return this.controller_.props.get("selected")}set selected(n){this.controller_.props.set("selected",n)}get children(){return this.rackApi_.children}addButton(n){return this.rackApi_.addButton(n)}addFolder(n){return this.rackApi_.addFolder(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addInput(n,r,c){return this.rackApi_.addInput(n,r,c)}addMonitor(n,r,c){return this.rackApi_.addMonitor(n,r,c)}addBlade(n){return this.rackApi_.addBlade(n)}}class Et extends se{constructor(n,r){super(n,new ci(n.rackController,r)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new L,this.pageApiMap_=new Map,this.rackApi_.on("change",c=>{this.emitter_.emit("change",{event:c})}),this.rackApi_.on("update",c=>{this.emitter_.emit("update",{event:c})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(c=>{this.setUpPageApi_(c)})}get pages(){return this.controller_.pageSet.items.map(n=>{const r=this.pageApiMap_.get(n);if(!r)throw E.shouldNeverHappen();return r})}addPage(n){const r=this.controller_.view.element.ownerDocument,c=new Sn(r,{itemProps:z.fromObject({selected:!1,title:n.title}),props:z.fromObject({selected:!1})});this.controller_.add(c,n.index);const v=this.pageApiMap_.get(c);if(!v)throw E.shouldNeverHappen();return v}removePage(n){this.controller_.remove(n)}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}setUpPageApi_(n){const r=this.rackApi_.apiSet_.find(v=>v.controller_===n.contentController);if(!r)throw E.shouldNeverHappen();const c=new ui(n,r);this.pageApiMap_.set(n,c)}onPageAdd_(n){this.setUpPageApi_(n.item)}onPageRemove_(n){if(!this.pageApiMap_.get(n.item))throw E.shouldNeverHappen();this.pageApiMap_.delete(n.item)}onSelect_(n){this.emitter_.emit("select",{event:new h(this,n.rawValue)})}}const tn=-1;class $i{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=$(!0),this.selectedIndex=$(tn),this.items_=[]}add(n,r){const c=r??this.items_.length;this.items_.splice(c,0,n),n.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(n){const r=this.items_.indexOf(n);r<0||(this.items_.splice(r,1),n.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=tn,this.empty.rawValue=!0;return}const n=this.items_.findIndex(r=>r.rawValue);n<0?(this.items_.forEach((r,c)=>{r.rawValue=c===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((r,c)=>{r.rawValue=c===n}),this.selectedIndex.rawValue=n),this.empty.rawValue=!1}onItemSelectedChange_(n){if(n.rawValue){const r=this.items_.findIndex(c=>c===n.sender);this.items_.forEach((c,v)=>{c.rawValue=v===r}),this.selectedIndex.rawValue=r}else this.keepSelection_()}}const _t=P("tab");class Zi{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(_t(),ke()),r.viewProps.bindClassModifiers(this.element),k(r.empty,D(this.element,_t(void 0,"nop")));const c=n.createElement("div");c.classList.add(_t("t")),this.element.appendChild(c),this.itemsElement=c;const v=n.createElement("div");v.classList.add(_t("i")),this.element.appendChild(v);const A=r.contentsElement;A.classList.add(_t("c")),this.element.appendChild(A),this.contentsElement=A}}class Tr extends y{constructor(n,r){const c=new Ne(n,{blade:r.blade,viewProps:r.viewProps}),v=new $i;super({blade:r.blade,rackController:c,view:new Zi(n,{contentsElement:c.view.element,empty:v.empty,viewProps:r.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new pt(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=v}get pageSet(){return this.pageSet_}add(n,r){this.pageSet_.add(n,r)}remove(n){this.pageSet_.remove(this.pageSet_.items[n])}onPageAdd_(n){const r=n.item;oe(this.view.itemsElement,r.itemController.view.element,n.index),r.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(r.contentController,n.index),this.tab.add(r.props.value("selected"))}onPageRemove_(n){const r=n.item;ce(r.itemController.view.element),r.itemController.viewProps.set("parent",null),this.rackController.rack.remove(r.contentController),this.tab.remove(r.props.value("selected"))}}const Ji={id:"tab",type:"blade",accept(o){const n=q,r=le(o,{pages:n.required.array(n.required.object({title:n.required.string})),view:n.required.constant("tab")});return!r||r.pages.length===0?null:{params:r}},controller(o){const n=new Tr(o.document,{blade:o.blade,viewProps:o.viewProps});return o.params.pages.forEach(r=>{const c=new Sn(o.document,{itemProps:z.fromObject({selected:!1,title:r.title}),props:z.fromObject({selected:!1})});n.add(c)}),n},api(o){return o.controller instanceof Tr?new Et(o.controller,o.pool):null}};function Fc(o,n){const r=o.accept(n.params);if(!r)return null;const c=q.optional.boolean(n.params.disabled).value,v=q.optional.boolean(n.params.hidden).value;return o.controller({blade:Re(),document:n.document,params:Object.assign(Object.assign({},r.params),{disabled:c,hidden:v}),viewProps:we.create({disabled:c,hidden:v})})}class Oc{constructor(){this.disabled=!1,this.emitter=new L}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class kc{constructor(n,r){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=n,this.emitter=new L,this.interval_=r,this.setTimer_()}get disabled(){return this.disabled_}set disabled(n){this.disabled_=n,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const n=this.doc_.defaultView;n&&n.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const n=this.doc_.defaultView;n&&(this.timerId_=n.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Bc{constructor(n){this.onValueChange_=this.onValueChange_.bind(this),this.reader=n.reader,this.writer=n.writer,this.emitter=new L,this.value=n.value,this.value.emitter.on("change",this.onValueChange_),this.target=n.target,this.read()}read(){const n=this.target.read();n!==void 0&&(this.value.rawValue=this.reader(n))}write_(n){this.writer(this.target,n)}onValueChange_(n){this.write_(n.rawValue),this.emitter.emit("change",{options:n.options,rawValue:n.rawValue,sender:this})}}function No(o,n){for(;o.length<n;)o.push(void 0)}function Vc(o){const n=[];return No(n,o),$(n)}function zc(o){const n=o.indexOf(void 0);return n<0?o:o.slice(0,n)}function Gc(o,n){const r=[...zc(o),n];return r.length>o.length?r.splice(0,r.length-o.length):No(r,o.length),r}class Hc{constructor(n){this.onTick_=this.onTick_.bind(this),this.reader_=n.reader,this.target=n.target,this.emitter=new L,this.value=n.value,this.ticker=n.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const n=this.target.read();if(n===void 0)return;const r=this.value.rawValue,c=this.reader_(n);this.value.rawValue=Gc(r,c),this.emitter.emit("update",{rawValue:c,sender:this})}onTick_(n){this.read()}}class Qi{constructor(n){this.constraints=n}constrain(n){return this.constraints.reduce((r,c)=>c.constrain(r),n)}}function an(o,n){if(o instanceof n)return o;if(o instanceof Qi){const r=o.constraints.reduce((c,v)=>c||(v instanceof n?v:null),null);if(r)return r}return null}class di{constructor(n){this.values=z.fromObject({max:n.max,min:n.min})}constrain(n){const r=this.values.get("max"),c=this.values.get("min");return Math.min(Math.max(n,c),r)}}class er{constructor(n){this.values=z.fromObject({options:n})}get options(){return this.values.get("options")}constrain(n){const r=this.values.get("options");return r.length===0||r.filter(v=>v.value===n).length>0?n:r[0].value}}class Fo{constructor(n){this.values=z.fromObject({max:n.max,min:n.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(n){const r=this.values.get("max"),c=this.values.get("min");let v=n;return _(c)||(v=Math.max(v,c)),_(r)||(v=Math.min(v,r)),v}}class Cr{constructor(n,r=0){this.step=n,this.origin=r}constrain(n){const r=this.origin%this.step,c=Math.round((n-r)/this.step);return r+c*this.step}}const _s=P("lst");class Wc{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.props_=r.props,this.element=n.createElement("div"),this.element.classList.add(_s()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("select");c.classList.add(_s("s")),J(this.props_,"options",A=>{fe(c),A.forEach((O,ue)=>{const Ce=n.createElement("option");Ce.dataset.index=String(ue),Ce.textContent=O.text,Ce.value=String(O.value),c.appendChild(Ce)})}),r.viewProps.bindDisabled(c),this.element.appendChild(c),this.selectElement=c;const v=n.createElement("div");v.classList.add(_s("m")),v.appendChild(X(n,"dropdown")),this.element.appendChild(v),r.value.emitter.on("change",this.onValueChange_),this.value_=r.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class tr{constructor(n,r){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new Wc(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(n){const c=n.currentTarget.selectedOptions.item(0);if(!c)return;const v=Number(c.dataset.index);this.value.rawValue=this.props.get("options")[v].value}}const Oo=P("pop");class Xc{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Oo()),r.viewProps.bindClassModifiers(this.element),k(r.shows,D(this.element,Oo(void 0,"v")))}}class ko{constructor(n,r){this.shows=$(!1),this.viewProps=r.viewProps,this.view=new Xc(n,{shows:this.shows,viewProps:this.viewProps})}}const Bo=P("txt");class qc{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Bo()),r.viewProps.bindClassModifiers(this.element),this.props_=r.props,this.props_.emitter.on("change",this.onChange_);const c=n.createElement("input");c.classList.add(Bo("i")),c.type="text",r.viewProps.bindDisabled(c),this.element.appendChild(c),this.inputElement=c,r.value.emitter.on("change",this.onChange_),this.value_=r.value,this.refresh()}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value_.rawValue)}onChange_(){this.refresh()}}class Ar{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=r.parser,this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new qc(n,{props:r.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const c=n.currentTarget.value,v=this.parser_(c);_(v)||(this.value.rawValue=v),this.view.refresh()}}function jc(o){return String(o)}function Vo(o){return o==="false"?!1:!!o}function zo(o){return jc(o)}class Kc{constructor(n){this.text=n}evaluate(){return Number(this.text)}toString(){return this.text}}const Yc={"**":(o,n)=>Math.pow(o,n),"*":(o,n)=>o*n,"/":(o,n)=>o/n,"%":(o,n)=>o%n,"+":(o,n)=>o+n,"-":(o,n)=>o-n,"<<":(o,n)=>o<<n,">>":(o,n)=>o>>n,">>>":(o,n)=>o>>>n,"&":(o,n)=>o&n,"^":(o,n)=>o^n,"|":(o,n)=>o|n};class $c{constructor(n,r,c){this.left=r,this.operator=n,this.right=c}evaluate(){const n=Yc[this.operator];if(!n)throw new Error(`unexpected binary operator: '${this.operator}`);return n(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Zc={"+":o=>o,"-":o=>-o,"~":o=>~o};class Jc{constructor(n,r){this.operator=n,this.expression=r}evaluate(){const n=Zc[this.operator];if(!n)throw new Error(`unexpected unary operator: '${this.operator}`);return n(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function vs(o){return(n,r)=>{for(let c=0;c<o.length;c++){const v=o[c](n,r);if(v!=="")return v}return""}}function nr(o,n){var r;const c=o.substr(n).match(/^\s+/);return(r=c&&c[0])!==null&&r!==void 0?r:""}function Qc(o,n){const r=o.substr(n,1);return r.match(/^[1-9]$/)?r:""}function ir(o,n){var r;const c=o.substr(n).match(/^[0-9]+/);return(r=c&&c[0])!==null&&r!==void 0?r:""}function eu(o,n){const r=ir(o,n);if(r!=="")return r;const c=o.substr(n,1);if(n+=1,c!=="-"&&c!=="+")return"";const v=ir(o,n);return v===""?"":c+v}function gs(o,n){const r=o.substr(n,1);if(n+=1,r.toLowerCase()!=="e")return"";const c=eu(o,n);return c===""?"":r+c}function Go(o,n){const r=o.substr(n,1);if(r==="0")return r;const c=Qc(o,n);return n+=c.length,c===""?"":c+ir(o,n)}function tu(o,n){const r=Go(o,n);if(n+=r.length,r==="")return"";const c=o.substr(n,1);if(n+=c.length,c!==".")return"";const v=ir(o,n);return n+=v.length,r+c+v+gs(o,n)}function nu(o,n){const r=o.substr(n,1);if(n+=r.length,r!==".")return"";const c=ir(o,n);return n+=c.length,c===""?"":r+c+gs(o,n)}function iu(o,n){const r=Go(o,n);return n+=r.length,r===""?"":r+gs(o,n)}const ru=vs([tu,nu,iu]);function su(o,n){var r;const c=o.substr(n).match(/^[01]+/);return(r=c&&c[0])!==null&&r!==void 0?r:""}function ou(o,n){const r=o.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0b")return"";const c=su(o,n);return c===""?"":r+c}function au(o,n){var r;const c=o.substr(n).match(/^[0-7]+/);return(r=c&&c[0])!==null&&r!==void 0?r:""}function lu(o,n){const r=o.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0o")return"";const c=au(o,n);return c===""?"":r+c}function cu(o,n){var r;const c=o.substr(n).match(/^[0-9a-f]+/i);return(r=c&&c[0])!==null&&r!==void 0?r:""}function uu(o,n){const r=o.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0x")return"";const c=cu(o,n);return c===""?"":r+c}const du=vs([ou,lu,uu]),hu=vs([du,ru]);function pu(o,n){const r=hu(o,n);return n+=r.length,r===""?null:{evaluable:new Kc(r),cursor:n}}function fu(o,n){const r=o.substr(n,1);if(n+=r.length,r!=="(")return null;const c=Wo(o,n);if(!c)return null;n=c.cursor,n+=nr(o,n).length;const v=o.substr(n,1);return n+=v.length,v!==")"?null:{evaluable:c.evaluable,cursor:n}}function mu(o,n){var r;return(r=pu(o,n))!==null&&r!==void 0?r:fu(o,n)}function Ho(o,n){const r=mu(o,n);if(r)return r;const c=o.substr(n,1);if(n+=c.length,c!=="+"&&c!=="-"&&c!=="~")return null;const v=Ho(o,n);return v?(n=v.cursor,{cursor:n,evaluable:new Jc(c,v.evaluable)}):null}function _u(o,n,r){r+=nr(n,r).length;const c=o.filter(v=>n.startsWith(v,r))[0];return c?(r+=c.length,r+=nr(n,r).length,{cursor:r,operator:c}):null}function vu(o,n){return(r,c)=>{const v=o(r,c);if(!v)return null;c=v.cursor;let A=v.evaluable;for(;;){const O=_u(n,r,c);if(!O)break;c=O.cursor;const ue=o(r,c);if(!ue)return null;c=ue.cursor,A=new $c(O.operator,A,ue.evaluable)}return A?{cursor:c,evaluable:A}:null}}const gu=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((o,n)=>vu(o,n),Ho);function Wo(o,n){return n+=nr(o,n).length,gu(o,n)}function bu(o){const n=Wo(o,0);return!n||n.cursor+nr(o,n.cursor).length!==o.length?null:n.evaluable}function ln(o){var n;const r=bu(o);return(n=r==null?void 0:r.evaluate())!==null&&n!==void 0?n:null}function Xo(o){if(typeof o=="number")return o;if(typeof o=="string"){const n=ln(o);if(!_(n))return n}return 0}function xu(o){return String(o)}function St(o){return n=>n.toFixed(Math.max(Math.min(o,20),0))}const Eu=St(0);function Pr(o){return Eu(o)+"%"}function qo(o){return String(o)}function bs(o){return o}function rr({primary:o,secondary:n,forward:r,backward:c}){let v=!1;function A(O){v||(v=!0,O(),v=!1)}o.emitter.on("change",O=>{A(()=>{n.setRawValue(r(o,n),O.options)})}),n.emitter.on("change",O=>{A(()=>{o.setRawValue(c(o,n),O.options)}),A(()=>{n.setRawValue(r(o,n),O.options)})}),A(()=>{n.setRawValue(r(o,n),{forceEmit:!1,last:!0})})}function Ut(o,n){const r=o*(n.altKey?.1:1)*(n.shiftKey?10:1);return n.upKey?+r:n.downKey?-r:0}function sr(o){return{altKey:o.altKey,downKey:o.key==="ArrowDown",shiftKey:o.shiftKey,upKey:o.key==="ArrowUp"}}function cn(o){return{altKey:o.altKey,downKey:o.key==="ArrowLeft",shiftKey:o.shiftKey,upKey:o.key==="ArrowRight"}}function Mu(o){return o==="ArrowUp"||o==="ArrowDown"}function jo(o){return Mu(o)||o==="ArrowLeft"||o==="ArrowRight"}function xs(o,n){var r,c;const v=n.ownerDocument.defaultView,A=n.getBoundingClientRect();return{x:o.pageX-(((r=v&&v.scrollX)!==null&&r!==void 0?r:0)+A.left),y:o.pageY-(((c=v&&v.scrollY)!==null&&c!==void 0?c:0)+A.top)}}class kn{constructor(n){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=n,this.emitter=new L,n.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),n.addEventListener("touchend",this.onTouchEnd_),n.addEventListener("mousedown",this.onMouseDown_)}computePosition_(n){const r=this.elem_.getBoundingClientRect();return{bounds:{width:r.width,height:r.height},point:n?{x:n.x,y:n.y}:null}}onMouseDown_(n){var r;n.preventDefault(),(r=n.currentTarget)===null||r===void 0||r.focus();const c=this.elem_.ownerDocument;c.addEventListener("mousemove",this.onDocumentMouseMove_),c.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(xs(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseMove_(n){this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(xs(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseUp_(n){const r=this.elem_.ownerDocument;r.removeEventListener("mousemove",this.onDocumentMouseMove_),r.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(xs(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onTouchStart_(n){n.preventDefault();const r=n.targetTouches.item(0),c=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-c.left,y:r.clientY-c.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchMove_(n){const r=n.targetTouches.item(0),c=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-c.left,y:r.clientY-c.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchEnd_(n){var r;const c=(r=n.targetTouches.item(0))!==null&&r!==void 0?r:this.lastTouch_,v=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(c?{x:c.clientX-v.left,y:c.clientY-v.top}:void 0),sender:this,shiftKey:n.shiftKey})}}function at(o,n,r,c,v){const A=(o-n)/(r-n);return c+A*(v-c)}function Ko(o){return String(o.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function vt(o,n,r){return Math.min(Math.max(o,n),r)}function Yo(o,n){return(o%n+n)%n}const zt=P("txt");class wu{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(zt(),zt(void 0,"num")),r.arrayPosition&&this.element.classList.add(zt(void 0,r.arrayPosition)),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("input");c.classList.add(zt("i")),c.type="text",r.viewProps.bindDisabled(c),this.element.appendChild(c),this.inputElement=c,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=r.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(zt()),this.inputElement.classList.add(zt("i"));const v=n.createElement("div");v.classList.add(zt("k")),this.element.appendChild(v),this.knobElement=v;const A=n.createElementNS(Ke,"svg");A.classList.add(zt("g")),this.knobElement.appendChild(A);const O=n.createElementNS(Ke,"path");O.classList.add(zt("gb")),A.appendChild(O),this.guideBodyElem_=O;const ue=n.createElementNS(Ke,"path");ue.classList.add(zt("gh")),A.appendChild(ue),this.guideHeadElem_=ue;const Ce=n.createElement("div");Ce.classList.add(P("tt")()),this.knobElement.appendChild(Ce),this.tooltipElem_=Ce,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.refresh()}onDraggingChange_(n){if(n.rawValue===null){this.element.classList.remove(zt(void 0,"drg"));return}this.element.classList.add(zt(void 0,"drg"));const r=n.rawValue/this.props_.get("draggingScale"),c=r+(r>0?-1:r<0?1:0),v=vt(-c,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${c+v},0 L${c},4 L${c+v},8`,`M ${r},-1 L${r},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${r},4`);const A=this.props_.get("formatter");this.tooltipElem_.textContent=A(this.value.rawValue),this.tooltipElem_.style.left=`${r}px`}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value.rawValue)}onChange_(){this.refresh()}}class or{constructor(n,r){var c;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.parser_=r.parser,this.props=r.props,this.sliderProps_=(c=r.sliderProps)!==null&&c!==void 0?c:null,this.value=r.value,this.viewProps=r.viewProps,this.dragging_=$(null),this.view=new wu(n,{arrayPosition:r.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const v=new kn(this.view.knobElement);v.emitter.on("down",this.onPointerDown_),v.emitter.on("move",this.onPointerMove_),v.emitter.on("up",this.onPointerUp_)}constrainValue_(n){var r,c;const v=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("minValue"),A=(c=this.sliderProps_)===null||c===void 0?void 0:c.get("maxValue");let O=n;return v!==void 0&&(O=Math.max(O,v)),A!==void 0&&(O=Math.min(O,A)),O}onInputChange_(n){const c=n.currentTarget.value,v=this.parser_(c);_(v)||(this.value.rawValue=this.constrainValue_(v)),this.view.refresh()}onInputKeyDown_(n){const r=Ut(this.baseStep_,sr(n));r!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+r),{forceEmit:!1,last:!1})}onInputKeyUp_(n){Ut(this.baseStep_,sr(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(n){if(!n.point)return null;const r=n.point.x-n.bounds.width/2;return this.constrainValue_(this.originRawValue_+r*this.props.get("draggingScale"))}onPointerMove_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Es=P("sld");class Su{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(Es()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(Es("t")),r.viewProps.bindTabIndex(c),this.element.appendChild(c),this.trackElement=c;const v=n.createElement("div");v.classList.add(Es("k")),this.trackElement.appendChild(v),this.knobElement=v,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.update_()}update_(){const n=vt(at(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${n}%`}onChange_(){this.update_()}}class yu{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.value=r.value,this.viewProps=r.viewProps,this.props=r.props,this.view=new Su(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new kn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){n.point&&this.value.setRawValue(at(vt(n.point.x,0,n.bounds.width),0,n.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),r)}onPointerDownOrMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=Ut(this.baseStep_,cn(n));r!==0&&this.value.setRawValue(this.value.rawValue+r,{forceEmit:!1,last:!1})}onKeyUp_(n){Ut(this.baseStep_,cn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ms=P("sldtxt");class Tu{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Ms());const c=n.createElement("div");c.classList.add(Ms("s")),this.sliderView_=r.sliderView,c.appendChild(this.sliderView_.element),this.element.appendChild(c);const v=n.createElement("div");v.classList.add(Ms("t")),this.textView_=r.textView,v.appendChild(this.textView_.element),this.element.appendChild(v)}}class ws{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.sliderC_=new yu(n,{baseStep:r.baseStep,props:r.sliderProps,value:r.value,viewProps:this.viewProps}),this.textC_=new or(n,{baseStep:r.baseStep,parser:r.parser,props:r.textProps,sliderProps:r.sliderProps,value:r.value,viewProps:r.viewProps}),this.view=new Tu(n,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function ar(o,n){o.write(n)}function Rr(o){const n=q;if(Array.isArray(o))return n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))(o).value;if(typeof o=="object")return n.required.raw(o).value}function $o(o){if(o==="inline"||o==="popup")return o}function yn(o){const n=q;return n.required.object({max:n.optional.number,min:n.optional.number,step:n.optional.number})(o).value}function Zo(o){if(Array.isArray(o))return o;const n=[];return Object.keys(o).forEach(r=>{n.push({text:r,value:o[r]})}),n}function Ss(o){return _(o)?null:new er(Zo(o))}function Cu(o){const n=o?an(o,Cr):null;return n?n.step:null}function Lr(o,n){const r=o&&an(o,Cr);return r?Ko(r.step):Math.max(Ko(n),2)}function hi(o){const n=Cu(o);return n??1}function pi(o,n){var r;const c=o&&an(o,Cr),v=Math.abs((r=c==null?void 0:c.step)!==null&&r!==void 0?r:n);return v===0?.1:Math.pow(10,Math.floor(Math.log10(v))-1)}const Dr=P("ckb");class Au{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Dr()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("label");c.classList.add(Dr("l")),this.element.appendChild(c);const v=n.createElement("input");v.classList.add(Dr("i")),v.type="checkbox",c.appendChild(v),this.inputElement=v,r.viewProps.bindDisabled(this.inputElement);const A=n.createElement("div");A.classList.add(Dr("w")),c.appendChild(A);const O=X(n,"check");A.appendChild(O),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Pu{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new Au(n,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const r=n.currentTarget;this.value.rawValue=r.checked}}function Ru(o){const n=[],r=Ss(o.options);return r&&n.push(r),new Qi(n)}const Lu={id:"input-bool",type:"input",accept:(o,n)=>{if(typeof o!="boolean")return null;const c=le(n,{options:q.optional.custom(Rr)});return c?{initialValue:o,params:c}:null},binding:{reader:o=>Vo,constraint:o=>Ru(o.params),writer:o=>ar},controller:o=>{const n=o.document,r=o.value,c=o.constraint,v=c&&an(c,er);return v?new tr(n,{props:new z({options:v.values.value("options")}),value:r,viewProps:o.viewProps}):new Pu(n,{value:r,viewProps:o.viewProps})}},Bn=P("col");class Du{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Bn()),r.foldable.bindExpandedClass(this.element,Bn(void 0,"expanded")),J(r.foldable,"completed",D(this.element,Bn(void 0,"cpl")));const c=n.createElement("div");c.classList.add(Bn("h")),this.element.appendChild(c);const v=n.createElement("div");v.classList.add(Bn("s")),c.appendChild(v),this.swatchElement=v;const A=n.createElement("div");if(A.classList.add(Bn("t")),c.appendChild(A),this.textElement=A,r.pickerLayout==="inline"){const O=n.createElement("div");O.classList.add(Bn("p")),this.element.appendChild(O),this.pickerElement=O}else this.pickerElement=null}}function Uu(o,n,r){const c=vt(o/255,0,1),v=vt(n/255,0,1),A=vt(r/255,0,1),O=Math.max(c,v,A),ue=Math.min(c,v,A),Ce=O-ue;let Ue=0,Ze=0;const Je=(ue+O)/2;return Ce!==0&&(Ze=Ce/(1-Math.abs(O+ue-1)),c===O?Ue=(v-A)/Ce:v===O?Ue=2+(A-c)/Ce:Ue=4+(c-v)/Ce,Ue=Ue/6+(Ue<0?1:0)),[Ue*360,Ze*100,Je*100]}function Iu(o,n,r){const c=(o%360+360)%360,v=vt(n/100,0,1),A=vt(r/100,0,1),O=(1-Math.abs(2*A-1))*v,ue=O*(1-Math.abs(c/60%2-1)),Ce=A-O/2;let Ue,Ze,Je;return c>=0&&c<60?[Ue,Ze,Je]=[O,ue,0]:c>=60&&c<120?[Ue,Ze,Je]=[ue,O,0]:c>=120&&c<180?[Ue,Ze,Je]=[0,O,ue]:c>=180&&c<240?[Ue,Ze,Je]=[0,ue,O]:c>=240&&c<300?[Ue,Ze,Je]=[ue,0,O]:[Ue,Ze,Je]=[O,0,ue],[(Ue+Ce)*255,(Ze+Ce)*255,(Je+Ce)*255]}function Nu(o,n,r){const c=vt(o/255,0,1),v=vt(n/255,0,1),A=vt(r/255,0,1),O=Math.max(c,v,A),ue=Math.min(c,v,A),Ce=O-ue;let Ue;Ce===0?Ue=0:O===c?Ue=60*(((v-A)/Ce%6+6)%6):O===v?Ue=60*((A-c)/Ce+2):Ue=60*((c-v)/Ce+4);const Ze=O===0?0:Ce/O,Je=O;return[Ue,Ze*100,Je*100]}function Jo(o,n,r){const c=Yo(o,360),v=vt(n/100,0,1),A=vt(r/100,0,1),O=A*v,ue=O*(1-Math.abs(c/60%2-1)),Ce=A-O;let Ue,Ze,Je;return c>=0&&c<60?[Ue,Ze,Je]=[O,ue,0]:c>=60&&c<120?[Ue,Ze,Je]=[ue,O,0]:c>=120&&c<180?[Ue,Ze,Je]=[0,O,ue]:c>=180&&c<240?[Ue,Ze,Je]=[0,ue,O]:c>=240&&c<300?[Ue,Ze,Je]=[ue,0,O]:[Ue,Ze,Je]=[O,0,ue],[(Ue+Ce)*255,(Ze+Ce)*255,(Je+Ce)*255]}function Fu(o,n,r){const c=r+n*(100-Math.abs(2*r-100))/200;return[o,c!==0?n*(100-Math.abs(2*r-100))/c:0,r+n*(100-Math.abs(2*r-100))/(2*100)]}function Ou(o,n,r){const c=100-Math.abs(r*(200-n)/100-100);return[o,c!==0?n*r/c:0,r*(200-n)/(2*100)]}function Vn(o){return[o[0],o[1],o[2]]}function Qo(o,n){return[o[0],o[1],o[2],n]}const ku={hsl:{hsl:(o,n,r)=>[o,n,r],hsv:Fu,rgb:Iu},hsv:{hsl:Ou,hsv:(o,n,r)=>[o,n,r],rgb:Jo},rgb:{hsl:Uu,hsv:Nu,rgb:(o,n,r)=>[o,n,r]}};function Ur(o,n){return[n==="float"?1:o==="rgb"?255:360,n==="float"?1:o==="rgb"?255:100,n==="float"?1:o==="rgb"?255:100]}function Bu(o,n){return o===n?n:Yo(o,n)}function Vu(o,n,r){var c;const v=Ur(n,r);return[n==="rgb"?vt(o[0],0,v[0]):Bu(o[0],v[0]),vt(o[1],0,v[1]),vt(o[2],0,v[2]),vt((c=o[3])!==null&&c!==void 0?c:1,0,1)]}function ea(o,n,r,c){const v=Ur(n,r),A=Ur(n,c);return o.map((O,ue)=>O/v[ue]*A[ue])}function zu(o,n,r){const c=ea(o,n.mode,n.type,"int"),v=ku[n.mode][r.mode](...c);return ea(v,r.mode,"int",r.type)}function Ir(o,n){return typeof o!="object"||_(o)?!1:n in o&&typeof o[n]=="number"}class We{static black(n="int"){return new We([0,0,0],"rgb",n)}static fromObject(n,r="int"){const c="a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b];return new We(c,"rgb",r)}static toRgbaObject(n,r="int"){return n.toRgbaObject(r)}static isRgbColorObject(n){return Ir(n,"r")&&Ir(n,"g")&&Ir(n,"b")}static isRgbaColorObject(n){return this.isRgbColorObject(n)&&Ir(n,"a")}static isColorObject(n){return this.isRgbColorObject(n)}static equals(n,r){if(n.mode!==r.mode)return!1;const c=n.comps_,v=r.comps_;for(let A=0;A<c.length;A++)if(c[A]!==v[A])return!1;return!0}constructor(n,r,c="int"){this.mode=r,this.type=c,this.comps_=Vu(n,r,c)}getComponents(n,r="int"){return Qo(zu(Vn(this.comps_),{mode:this.mode,type:this.type},{mode:n??this.mode,type:r}),this.comps_[3])}toRgbaObject(n="int"){const r=this.getComponents("rgb",n);return{r:r[0],g:r[1],b:r[2],a:r[3]}}}const Tn=P("colp");class Gu{constructor(n,r){this.alphaViews_=null,this.element=n.createElement("div"),this.element.classList.add(Tn()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(Tn("hsv"));const v=n.createElement("div");v.classList.add(Tn("sv")),this.svPaletteView_=r.svPaletteView,v.appendChild(this.svPaletteView_.element),c.appendChild(v);const A=n.createElement("div");A.classList.add(Tn("h")),this.hPaletteView_=r.hPaletteView,A.appendChild(this.hPaletteView_.element),c.appendChild(A),this.element.appendChild(c);const O=n.createElement("div");if(O.classList.add(Tn("rgb")),this.textView_=r.textView,O.appendChild(this.textView_.element),this.element.appendChild(O),r.alphaViews){this.alphaViews_={palette:r.alphaViews.palette,text:r.alphaViews.text};const ue=n.createElement("div");ue.classList.add(Tn("a"));const Ce=n.createElement("div");Ce.classList.add(Tn("ap")),Ce.appendChild(this.alphaViews_.palette.element),ue.appendChild(Ce);const Ue=n.createElement("div");Ue.classList.add(Tn("at")),Ue.appendChild(this.alphaViews_.text.element),ue.appendChild(Ue),this.element.appendChild(ue)}}get allFocusableElements(){const n=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(r=>r.inputElement)];return this.alphaViews_&&n.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),n}}function Hu(o){return o==="int"?"int":o==="float"?"float":void 0}function ys(o){const n=q;return le(o,{alpha:n.optional.boolean,color:n.optional.object({alpha:n.optional.boolean,type:n.optional.custom(Hu)}),expanded:n.optional.boolean,picker:n.optional.custom($o)})}function zn(o){return o?.1:1}function Gn(o){var n;return(n=o.color)===null||n===void 0?void 0:n.type}function Wu(o,n){return o.alpha===n.alpha&&o.mode===n.mode&&o.notation===n.notation&&o.type===n.type}function Gt(o,n){const r=o.match(/^(.+)%$/);return Math.min(r?parseFloat(r[1])*.01*n:parseFloat(o),n)}const Xu={deg:o=>o,grad:o=>o*360/400,rad:o=>o*360/(2*Math.PI),turn:o=>o*360};function ta(o){const n=o.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!n)return parseFloat(o);const r=parseFloat(n[1]),c=n[2];return Xu[c](r)}function na(o){const n=o.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[Gt(n[1],255),Gt(n[2],255),Gt(n[3],255)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function ia(o){return n=>{const r=na(n);return r?new We(r,"rgb",o):null}}function ra(o){const n=o.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[Gt(n[1],255),Gt(n[2],255),Gt(n[3],255),Gt(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function sa(o){return n=>{const r=ra(n);return r?new We(r,"rgb",o):null}}function oa(o){const n=o.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[ta(n[1]),Gt(n[2],100),Gt(n[3],100)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function aa(o){return n=>{const r=oa(n);return r?new We(r,"hsl",o):null}}function la(o){const n=o.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[ta(n[1]),Gt(n[2],100),Gt(n[3],100),Gt(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function ca(o){return n=>{const r=la(n);return r?new We(r,"hsl",o):null}}function ua(o){const n=o.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)];const r=o.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:null}function qu(o){const n=ua(o);return n?new We(n,"rgb","int"):null}function da(o){const n=o.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16),at(parseInt(n[4]+n[4],16),0,255,0,1)];const r=o.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),at(parseInt(r[4],16),0,255,0,1)]:null}function ju(o){const n=da(o);return n?new We(n,"rgb","int"):null}function ha(o){const n=o.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function pa(o){return n=>{const r=ha(n);return r?new We(r,"rgb",o):null}}function fa(o){const n=o.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3]),parseFloat(n[4])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function ma(o){return n=>{const r=fa(n);return r?new We(r,"rgb",o):null}}const Ku=[{parser:ua,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:da,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:na,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:ra,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:oa,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:la,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ha,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:fa,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Yu(o){return Ku.reduce((n,{parser:r,result:c})=>n||(r(o)?c:null),null)}function Ts(o,n="int"){const r=Yu(o);return r?r.notation==="hex"&&n!=="float"?Object.assign(Object.assign({},r),{type:"int"}):r.notation==="func"?Object.assign(Object.assign({},r),{type:n}):null:null}const _a={int:[qu,ju,ia("int"),sa("int"),aa("int"),ca("int"),pa("int"),ma("int")],float:[ia("float"),sa("float"),aa("float"),ca("float"),pa("float"),ma("float")]};function $u(o){const n=_a[o];return r=>{if(typeof r!="string")return We.black(o);const c=n.reduce((v,A)=>v||A(r),null);return c??We.black(o)}}function Cs(o){const n=_a[o];return r=>n.reduce((c,v)=>c||v(r),null)}function va(o){const n=vt(Math.floor(o),0,255).toString(16);return n.length===1?`0${n}`:n}function ga(o,n="#"){const r=Vn(o.getComponents("rgb")).map(va).join("");return`${n}${r}`}function As(o,n="#"){const r=o.getComponents("rgb"),c=[r[0],r[1],r[2],r[3]*255].map(va).join("");return`${n}${c}`}function ba(o,n){const r=St(n==="float"?2:0);return`rgb(${Vn(o.getComponents("rgb",n)).map(v=>r(v)).join(", ")})`}function Zu(o){return n=>ba(n,o)}function Nr(o,n){const r=St(2),c=St(n==="float"?2:0);return`rgba(${o.getComponents("rgb",n).map((A,O)=>(O===3?r:c)(A)).join(", ")})`}function Ju(o){return n=>Nr(n,o)}function Qu(o){const n=[St(0),Pr,Pr];return`hsl(${Vn(o.getComponents("hsl")).map((c,v)=>n[v](c)).join(", ")})`}function ed(o){const n=[St(0),Pr,Pr,St(2)];return`hsla(${o.getComponents("hsl").map((c,v)=>n[v](c)).join(", ")})`}function xa(o,n){const r=St(n==="float"?2:0),c=["r","g","b"];return`{${Vn(o.getComponents("rgb",n)).map((A,O)=>`${c[O]}: ${r(A)}`).join(", ")}}`}function td(o){return n=>xa(n,o)}function Ea(o,n){const r=St(2),c=St(n==="float"?2:0),v=["r","g","b","a"];return`{${o.getComponents("rgb",n).map((O,ue)=>{const Ce=ue===3?r:c;return`${v[ue]}: ${Ce(O)}`}).join(", ")}}`}function nd(o){return n=>Ea(n,o)}const id=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:ga},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:As},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Qu},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:ed},...["int","float"].reduce((o,n)=>[...o,{format:{alpha:!1,mode:"rgb",notation:"func",type:n},stringifier:Zu(n)},{format:{alpha:!0,mode:"rgb",notation:"func",type:n},stringifier:Ju(n)},{format:{alpha:!1,mode:"rgb",notation:"object",type:n},stringifier:td(n)},{format:{alpha:!0,mode:"rgb",notation:"object",type:n},stringifier:nd(n)}],[])];function Ps(o){return id.reduce((n,r)=>n||(Wu(r.format,o)?r.stringifier:null),null)}const lr=P("apl");class rd{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(lr()),r.viewProps.bindClassModifiers(this.element),r.viewProps.bindTabIndex(this.element);const c=n.createElement("div");c.classList.add(lr("b")),this.element.appendChild(c);const v=n.createElement("div");v.classList.add(lr("c")),c.appendChild(v),this.colorElem_=v;const A=n.createElement("div");A.classList.add(lr("m")),this.element.appendChild(A),this.markerElem_=A;const O=n.createElement("div");O.classList.add(lr("p")),this.markerElem_.appendChild(O),this.previewElem_=O,this.update_()}update_(){const n=this.value.rawValue,r=n.getComponents("rgb"),c=new We([r[0],r[1],r[2],0],"rgb"),v=new We([r[0],r[1],r[2],255],"rgb"),A=["to right",Nr(c),Nr(v)];this.colorElem_.style.background=`linear-gradient(${A.join(",")})`,this.previewElem_.style.backgroundColor=Nr(n);const O=at(r[3],0,1,0,100);this.markerElem_.style.left=`${O}%`}onValueChange_(){this.update_()}}class sd{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new rd(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new kn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const c=n.point.x/n.bounds.width,v=this.value.rawValue,[A,O,ue]=v.getComponents("hsv");this.value.setRawValue(new We([A,O,ue,c],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=Ut(zn(!0),cn(n));if(r===0)return;const c=this.value.rawValue,[v,A,O,ue]=c.getComponents("hsv");this.value.setRawValue(new We([v,A,O,ue+r],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){Ut(zn(!0),cn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const fi=P("coltxt");function od(o){const n=o.createElement("select"),r=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return n.appendChild(r.reduce((c,v)=>{const A=o.createElement("option");return A.textContent=v.text,A.value=v.value,c.appendChild(A),c},o.createDocumentFragment())),n}class ad{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(fi()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(fi("m")),this.modeElem_=od(n),this.modeElem_.classList.add(fi("ms")),c.appendChild(this.modeSelectElement),r.viewProps.bindDisabled(this.modeElem_);const v=n.createElement("div");v.classList.add(fi("mm")),v.appendChild(X(n,"dropdown")),c.appendChild(v),this.element.appendChild(c);const A=n.createElement("div");A.classList.add(fi("w")),this.element.appendChild(A),this.textsElem_=A,this.textViews_=r.textViews,this.applyTextViews_(),k(r.colorMode,O=>{this.modeElem_.value=O})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(n){this.textViews_=n,this.applyTextViews_()}applyTextViews_(){fe(this.textsElem_);const n=this.element.ownerDocument;this.textViews_.forEach(r=>{const c=n.createElement("div");c.classList.add(fi("c")),c.appendChild(r.element),this.textsElem_.appendChild(c)})}}function ld(o){return St(o==="float"?2:0)}function cd(o,n,r){const c=Ur(o,n)[r];return new di({min:0,max:c})}function Rs(o,n,r){return new or(o,{arrayPosition:r===0?"fst":r===3-1?"lst":"mid",baseStep:zn(!1),parser:n.parser,props:z.fromObject({draggingScale:n.colorType==="float"?.01:1,formatter:ld(n.colorType)}),value:$(0,{constraint:cd(n.colorMode,n.colorType,r)}),viewProps:n.viewProps})}class ud{constructor(n,r){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=r.colorType,this.parser_=r.parser,this.value=r.value,this.viewProps=r.viewProps,this.colorMode=$(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(n),this.view=new ad(n,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(n){const r={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},c=[Rs(n,r,0),Rs(n,r,1),Rs(n,r,2)];return c.forEach((v,A)=>{rr({primary:this.value,secondary:v.value,forward:O=>O.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[A],backward:(O,ue)=>{const Ce=this.colorMode.rawValue,Ue=O.rawValue.getComponents(Ce,this.colorType_);return Ue[A]=ue.rawValue,new We(Qo(Vn(Ue),Ue[3]),Ce,this.colorType_)}})}),c}onModeSelectChange_(n){const r=n.currentTarget;this.colorMode.rawValue=r.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ls=P("hpl");class dd{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Ls()),r.viewProps.bindClassModifiers(this.element),r.viewProps.bindTabIndex(this.element);const c=n.createElement("div");c.classList.add(Ls("c")),this.element.appendChild(c);const v=n.createElement("div");v.classList.add(Ls("m")),this.element.appendChild(v),this.markerElem_=v,this.update_()}update_(){const n=this.value.rawValue,[r]=n.getComponents("hsv");this.markerElem_.style.backgroundColor=ba(new We([r,100,100],"hsv"));const c=at(r,0,360,0,100);this.markerElem_.style.left=`${c}%`}onValueChange_(){this.update_()}}class hd{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new dd(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new kn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const c=at(vt(n.point.x,0,n.bounds.width),0,n.bounds.width,0,360),v=this.value.rawValue,[,A,O,ue]=v.getComponents("hsv");this.value.setRawValue(new We([c,A,O,ue],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=Ut(zn(!1),cn(n));if(r===0)return;const c=this.value.rawValue,[v,A,O,ue]=c.getComponents("hsv");this.value.setRawValue(new We([v+r,A,O,ue],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){Ut(zn(!1),cn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ds=P("svp"),Ma=64;class pd{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Ds()),r.viewProps.bindClassModifiers(this.element),r.viewProps.bindTabIndex(this.element);const c=n.createElement("canvas");c.height=Ma,c.width=Ma,c.classList.add(Ds("c")),this.element.appendChild(c),this.canvasElement=c;const v=n.createElement("div");v.classList.add(Ds("m")),this.element.appendChild(v),this.markerElem_=v,this.update_()}update_(){const n=T(this.canvasElement);if(!n)return;const c=this.value.rawValue.getComponents("hsv"),v=this.canvasElement.width,A=this.canvasElement.height,O=n.getImageData(0,0,v,A),ue=O.data;for(let Ze=0;Ze<A;Ze++)for(let Je=0;Je<v;Je++){const Hn=at(Je,0,v,0,100),ur=at(Ze,0,A,100,0),dr=Jo(c[0],Hn,ur),Fr=(Ze*v+Je)*4;ue[Fr]=dr[0],ue[Fr+1]=dr[1],ue[Fr+2]=dr[2],ue[Fr+3]=255}n.putImageData(O,0,0);const Ce=at(c[1],0,100,0,100);this.markerElem_.style.left=`${Ce}%`;const Ue=at(c[2],0,100,100,0);this.markerElem_.style.top=`${Ue}%`}onValueChange_(){this.update_()}}class fd{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new pd(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new kn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const c=at(n.point.x,0,n.bounds.width,0,100),v=at(n.point.y,0,n.bounds.height,100,0),[A,,,O]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new We([A,c,v,O],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){jo(n.key)&&n.preventDefault();const[r,c,v,A]=this.value.rawValue.getComponents("hsv"),O=zn(!1),ue=Ut(O,cn(n)),Ce=Ut(O,sr(n));ue===0&&Ce===0||this.value.setRawValue(new We([r,c+ue,v+Ce,A],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){const r=zn(!1),c=Ut(r,cn(n)),v=Ut(r,sr(n));c===0&&v===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class md{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.hPaletteC_=new hd(n,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new fd(n,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=r.supportsAlpha?{palette:new sd(n,{value:this.value,viewProps:this.viewProps}),text:new or(n,{parser:ln,baseStep:.1,props:z.fromObject({draggingScale:.01,formatter:St(2)}),value:$(0,{constraint:new di({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&rr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:c=>c.rawValue.getComponents()[3],backward:(c,v)=>{const A=c.rawValue.getComponents();return A[3]=v.rawValue,new We(A,c.rawValue.mode)}}),this.textC_=new ud(n,{colorType:r.colorType,parser:ln,value:this.value,viewProps:this.viewProps}),this.view=new Gu(n,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:r.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Us=P("colsw");class _d{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.element=n.createElement("div"),this.element.classList.add(Us()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(Us("sw")),this.element.appendChild(c),this.swatchElem_=c;const v=n.createElement("button");v.classList.add(Us("b")),r.viewProps.bindDisabled(v),this.element.appendChild(v),this.buttonElement=v,this.update_()}update_(){const n=this.value.rawValue;this.swatchElem_.style.backgroundColor=As(n)}onValueChange_(){this.update_()}}class vd{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new _d(n,{value:this.value,viewProps:this.viewProps})}}class Is{constructor(n,r){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=Fe.create(r.expanded),this.swatchC_=new vd(n,{value:this.value,viewProps:this.viewProps});const c=this.swatchC_.view.buttonElement;c.addEventListener("blur",this.onButtonBlur_),c.addEventListener("click",this.onButtonClick_),this.textC_=new Ar(n,{parser:r.parser,props:z.fromObject({formatter:r.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Du(n,{foldable:this.foldable_,pickerLayout:r.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=r.pickerLayout==="popup"?new ko(n,{viewProps:this.viewProps}):null;const v=new md(n,{colorType:r.colorType,supportsAlpha:r.supportsAlpha,value:this.value,viewProps:this.viewProps});v.view.allFocusableElements.forEach(A=>{A.addEventListener("blur",this.onPopupChildBlur_),A.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=v,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(v.view.element),rr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:A=>A.rawValue,backward:(A,O)=>O.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Y(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,c=n.relatedTarget;(!c||!r.contains(c))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,c=te(n);c&&r.contains(c)||c&&c===this.swatchC_.view.buttonElement&&!Xe(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function gd(o,n){return We.isColorObject(o)?We.fromObject(o,n):We.black(n)}function bd(o){return Vn(o.getComponents("rgb")).reduce((n,r)=>n<<8|Math.floor(r)&255,0)}function xd(o){return o.getComponents("rgb").reduce((n,r,c)=>{const v=Math.floor(c===3?r*255:r)&255;return n<<8|v},0)>>>0}function Ed(o){return new We([o>>16&255,o>>8&255,o&255],"rgb")}function Md(o){return new We([o>>24&255,o>>16&255,o>>8&255,at(o&255,0,255,0,1)],"rgb")}function wd(o){return typeof o!="number"?We.black():Ed(o)}function Sd(o){return typeof o!="number"?We.black():Md(o)}function yd(o){const n=Ps(o);return n?(r,c)=>{ar(r,n(c))}:null}function Td(o){const n=o?xd:bd;return(r,c)=>{ar(r,n(c))}}function Cd(o,n,r){const c=n.toRgbaObject(r);o.writeProperty("r",c.r),o.writeProperty("g",c.g),o.writeProperty("b",c.b),o.writeProperty("a",c.a)}function Ad(o,n,r){const c=n.toRgbaObject(r);o.writeProperty("r",c.r),o.writeProperty("g",c.g),o.writeProperty("b",c.b)}function Pd(o,n){return(r,c)=>{o?Cd(r,c,n):Ad(r,c,n)}}function Ns(o){var n;return!!(o!=null&&o.alpha||!((n=o==null?void 0:o.color)===null||n===void 0)&&n.alpha)}function Rd(o){return o?n=>As(n,"0x"):n=>ga(n,"0x")}function Ld(o){return"color"in o||"view"in o&&o.view==="color"}const Dd={id:"input-color-number",type:"input",accept:(o,n)=>{if(typeof o!="number"||!Ld(n))return null;const r=ys(n);return r?{initialValue:o,params:r}:null},binding:{reader:o=>Ns(o.params)?Sd:wd,equals:We.equals,writer:o=>Td(Ns(o.params))},controller:o=>{const n=Ns(o.params),r="expanded"in o.params?o.params.expanded:void 0,c="picker"in o.params?o.params.picker:void 0;return new Is(o.document,{colorType:"int",expanded:r??!1,formatter:Rd(n),parser:Cs("int"),pickerLayout:c??"popup",supportsAlpha:n,value:o.value,viewProps:o.viewProps})}};function Ud(o){return We.isRgbaColorObject(o)}function Id(o){return n=>gd(n,o)}function Nd(o,n){return r=>o?Ea(r,n):xa(r,n)}const Fd={id:"input-color-object",type:"input",accept:(o,n)=>{if(!We.isColorObject(o))return null;const r=ys(n);return r?{initialValue:o,params:r}:null},binding:{reader:o=>Id(Gn(o.params)),equals:We.equals,writer:o=>Pd(Ud(o.initialValue),Gn(o.params))},controller:o=>{var n;const r=We.isRgbaColorObject(o.initialValue),c="expanded"in o.params?o.params.expanded:void 0,v="picker"in o.params?o.params.picker:void 0,A=(n=Gn(o.params))!==null&&n!==void 0?n:"int";return new Is(o.document,{colorType:A,expanded:c??!1,formatter:Nd(r,A),parser:Cs(A),pickerLayout:v??"popup",supportsAlpha:r,value:o.value,viewProps:o.viewProps})}},Od={id:"input-color-string",type:"input",accept:(o,n)=>{if(typeof o!="string"||"view"in n&&n.view==="text")return null;const r=Ts(o,Gn(n));if(!r||!Ps(r))return null;const v=ys(n);return v?{initialValue:o,params:v}:null},binding:{reader:o=>{var n;return $u((n=Gn(o.params))!==null&&n!==void 0?n:"int")},equals:We.equals,writer:o=>{const n=Ts(o.initialValue,Gn(o.params));if(!n)throw E.shouldNeverHappen();const r=yd(n);if(!r)throw E.notBindable();return r}},controller:o=>{const n=Ts(o.initialValue,Gn(o.params));if(!n)throw E.shouldNeverHappen();const r=Ps(n);if(!r)throw E.shouldNeverHappen();const c="expanded"in o.params?o.params.expanded:void 0,v="picker"in o.params?o.params.picker:void 0;return new Is(o.document,{colorType:n.type,expanded:c??!1,formatter:r,parser:Cs(n.type),pickerLayout:v??"popup",supportsAlpha:n.alpha,value:o.value,viewProps:o.viewProps})}};class Cn{constructor(n){this.components=n.components,this.asm_=n.assembly}constrain(n){const r=this.asm_.toComponents(n).map((c,v)=>{var A,O;return(O=(A=this.components[v])===null||A===void 0?void 0:A.constrain(c))!==null&&O!==void 0?O:c});return this.asm_.fromComponents(r)}}const wa=P("pndtxt");class kd{constructor(n,r){this.textViews=r.textViews,this.element=n.createElement("div"),this.element.classList.add(wa()),this.textViews.forEach(c=>{const v=n.createElement("div");v.classList.add(wa("a")),v.appendChild(c.element),this.element.appendChild(v)})}}function Bd(o,n,r){return new or(o,{arrayPosition:r===0?"fst":r===n.axes.length-1?"lst":"mid",baseStep:n.axes[r].baseStep,parser:n.parser,props:n.axes[r].textProps,value:$(0,{constraint:n.axes[r].constraint}),viewProps:n.viewProps})}class Fs{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.acs_=r.axes.map((c,v)=>Bd(n,r,v)),this.acs_.forEach((c,v)=>{rr({primary:this.value,secondary:c.value,forward:A=>r.assembly.toComponents(A.rawValue)[v],backward:(A,O)=>{const ue=r.assembly.toComponents(A.rawValue);return ue[v]=O.rawValue,r.assembly.fromComponents(ue)}})}),this.view=new kd(n,{textViews:this.acs_.map(c=>c.view)})}}function Sa(o,n){return"step"in o&&!_(o.step)?new Cr(o.step,n):null}function ya(o){return!_(o.max)&&!_(o.min)?new di({max:o.max,min:o.min}):!_(o.max)||!_(o.min)?new Fo({max:o.max,min:o.min}):null}function Vd(o){const n=an(o,di);if(n)return[n.values.get("min"),n.values.get("max")];const r=an(o,Fo);return r?[r.minValue,r.maxValue]:[void 0,void 0]}function zd(o,n){const r=[],c=Sa(o,n);c&&r.push(c);const v=ya(o);v&&r.push(v);const A=Ss(o.options);return A&&r.push(A),new Qi(r)}const Gd={id:"input-number",type:"input",accept:(o,n)=>{if(typeof o!="number")return null;const r=q,c=le(n,{format:r.optional.function,max:r.optional.number,min:r.optional.number,options:r.optional.custom(Rr),step:r.optional.number});return c?{initialValue:o,params:c}:null},binding:{reader:o=>Xo,constraint:o=>zd(o.params,o.initialValue),writer:o=>ar},controller:o=>{var n;const r=o.value,c=o.constraint,v=c&&an(c,er);if(v)return new tr(o.document,{props:new z({options:v.values.value("options")}),value:r,viewProps:o.viewProps});const A=(n="format"in o.params?o.params.format:void 0)!==null&&n!==void 0?n:St(Lr(c,r.rawValue)),O=c&&an(c,di);return O?new ws(o.document,{baseStep:hi(c),parser:ln,sliderProps:new z({maxValue:O.values.value("max"),minValue:O.values.value("min")}),textProps:z.fromObject({draggingScale:pi(c,r.rawValue),formatter:A}),value:r,viewProps:o.viewProps}):new or(o.document,{baseStep:hi(c),parser:ln,props:z.fromObject({draggingScale:pi(c,r.rawValue),formatter:A}),value:r,viewProps:o.viewProps})}};class An{constructor(n=0,r=0){this.x=n,this.y=r}getComponents(){return[this.x,this.y]}static isObject(n){if(_(n))return!1;const r=n.x,c=n.y;return!(typeof r!="number"||typeof c!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y}toObject(){return{x:this.x,y:this.y}}}const Ta={toComponents:o=>o.getComponents(),fromComponents:o=>new An(...o)},mi=P("p2d");class Hd{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(mi()),r.viewProps.bindClassModifiers(this.element),k(r.expanded,D(this.element,mi(void 0,"expanded")));const c=n.createElement("div");c.classList.add(mi("h")),this.element.appendChild(c);const v=n.createElement("button");v.classList.add(mi("b")),v.appendChild(X(n,"p2dpad")),r.viewProps.bindDisabled(v),c.appendChild(v),this.buttonElement=v;const A=n.createElement("div");if(A.classList.add(mi("t")),c.appendChild(A),this.textElement=A,r.pickerLayout==="inline"){const O=n.createElement("div");O.classList.add(mi("p")),this.element.appendChild(O),this.pickerElement=O}else this.pickerElement=null}}const Pn=P("p2dp");class Wd{constructor(n,r){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=r.invertsY,this.maxValue_=r.maxValue,this.element=n.createElement("div"),this.element.classList.add(Pn()),r.layout==="popup"&&this.element.classList.add(Pn(void 0,"p")),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(Pn("p")),r.viewProps.bindTabIndex(c),this.element.appendChild(c),this.padElement=c;const v=n.createElementNS(Ke,"svg");v.classList.add(Pn("g")),this.padElement.appendChild(v),this.svgElem_=v;const A=n.createElementNS(Ke,"line");A.classList.add(Pn("ax")),A.setAttributeNS(null,"x1","0"),A.setAttributeNS(null,"y1","50%"),A.setAttributeNS(null,"x2","100%"),A.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(A);const O=n.createElementNS(Ke,"line");O.classList.add(Pn("ax")),O.setAttributeNS(null,"x1","50%"),O.setAttributeNS(null,"y1","0"),O.setAttributeNS(null,"x2","50%"),O.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(O);const ue=n.createElementNS(Ke,"line");ue.classList.add(Pn("l")),ue.setAttributeNS(null,"x1","50%"),ue.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(ue),this.lineElem_=ue;const Ce=n.createElement("div");Ce.classList.add(Pn("m")),this.padElement.appendChild(Ce),this.markerElem_=Ce,r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[n,r]=this.value.rawValue.getComponents(),c=this.maxValue_,v=at(n,-c,+c,0,100),A=at(r,-c,+c,0,100),O=this.invertsY_?100-A:A;this.lineElem_.setAttributeNS(null,"x2",`${v}%`),this.lineElem_.setAttributeNS(null,"y2",`${O}%`),this.markerElem_.style.left=`${v}%`,this.markerElem_.style.top=`${O}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Ca(o,n,r){return[Ut(n[0],cn(o)),Ut(n[1],sr(o))*(r?1:-1)]}class Xd{constructor(n,r){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.baseSteps_=r.baseSteps,this.maxValue_=r.maxValue,this.invertsY_=r.invertsY,this.view=new Wd(n,{invertsY:this.invertsY_,layout:r.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new kn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const c=this.maxValue_,v=at(n.point.x,0,n.bounds.width,-c,+c),A=at(this.invertsY_?n.bounds.height-n.point.y:n.point.y,0,n.bounds.height,-c,+c);this.value.setRawValue(new An(v,A),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onPadKeyDown_(n){jo(n.key)&&n.preventDefault();const[r,c]=Ca(n,this.baseSteps_,this.invertsY_);r===0&&c===0||this.value.setRawValue(new An(this.value.rawValue.x+r,this.value.rawValue.y+c),{forceEmit:!1,last:!1})}onPadKeyUp_(n){const[r,c]=Ca(n,this.baseSteps_,this.invertsY_);r===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class qd{constructor(n,r){var c,v;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=Fe.create(r.expanded),this.popC_=r.pickerLayout==="popup"?new ko(n,{viewProps:this.viewProps}):null;const A=new Xd(n,{baseSteps:[r.axes[0].baseStep,r.axes[1].baseStep],invertsY:r.invertsY,layout:r.pickerLayout,maxValue:r.maxValue,value:this.value,viewProps:this.viewProps});A.view.allFocusableElements.forEach(O=>{O.addEventListener("blur",this.onPopupChildBlur_),O.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=A,this.textC_=new Fs(n,{assembly:Ta,axes:r.axes,parser:r.parser,value:this.value,viewProps:this.viewProps}),this.view=new Hd(n,{expanded:this.foldable_.value("expanded"),pickerLayout:r.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("blur",this.onPadButtonBlur_),(v=this.view.buttonElement)===null||v===void 0||v.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),rr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:O=>O.rawValue,backward:(O,ue)=>ue.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Y(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,c=n.relatedTarget;(!c||!r.contains(c))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,c=te(n);c&&r.contains(c)||c&&c===this.view.buttonElement&&!Xe(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.view.buttonElement.focus()}}class _i{constructor(n=0,r=0,c=0){this.x=n,this.y=r,this.z=c}getComponents(){return[this.x,this.y,this.z]}static isObject(n){if(_(n))return!1;const r=n.x,c=n.y,v=n.z;return!(typeof r!="number"||typeof c!="number"||typeof v!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Aa={toComponents:o=>o.getComponents(),fromComponents:o=>new _i(...o)};function jd(o){return _i.isObject(o)?new _i(o.x,o.y,o.z):new _i}function Kd(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y),o.writeProperty("z",n.z)}function Yd(o,n){return new Cn({assembly:Aa,components:[un("x"in o?o.x:void 0,n.x),un("y"in o?o.y:void 0,n.y),un("z"in o?o.z:void 0,n.z)]})}function Os(o,n){return{baseStep:hi(n),constraint:n,textProps:z.fromObject({draggingScale:pi(n,o),formatter:St(Lr(n,o))})}}const $d={id:"input-point3d",type:"input",accept:(o,n)=>{if(!_i.isObject(o))return null;const r=q,c=le(n,{x:r.optional.custom(yn),y:r.optional.custom(yn),z:r.optional.custom(yn)});return c?{initialValue:o,params:c}:null},binding:{reader:o=>jd,constraint:o=>Yd(o.params,o.initialValue),equals:_i.equals,writer:o=>Kd},controller:o=>{const n=o.value,r=o.constraint;if(!(r instanceof Cn))throw E.shouldNeverHappen();return new Fs(o.document,{assembly:Aa,axes:[Os(n.rawValue.x,r.components[0]),Os(n.rawValue.y,r.components[1]),Os(n.rawValue.z,r.components[2])],parser:ln,value:n,viewProps:o.viewProps})}};class vi{constructor(n=0,r=0,c=0,v=0){this.x=n,this.y=r,this.z=c,this.w=v}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(n){if(_(n))return!1;const r=n.x,c=n.y,v=n.z,A=n.w;return!(typeof r!="number"||typeof c!="number"||typeof v!="number"||typeof A!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z&&n.w===r.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Pa={toComponents:o=>o.getComponents(),fromComponents:o=>new vi(...o)};function Zd(o){return vi.isObject(o)?new vi(o.x,o.y,o.z,o.w):new vi}function Jd(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y),o.writeProperty("z",n.z),o.writeProperty("w",n.w)}function Qd(o,n){return new Cn({assembly:Pa,components:[un("x"in o?o.x:void 0,n.x),un("y"in o?o.y:void 0,n.y),un("z"in o?o.z:void 0,n.z),un("w"in o?o.w:void 0,n.w)]})}function eh(o,n){return{baseStep:hi(n),constraint:n,textProps:z.fromObject({draggingScale:pi(n,o),formatter:St(Lr(n,o))})}}const th={id:"input-point4d",type:"input",accept:(o,n)=>{if(!vi.isObject(o))return null;const r=q,c=le(n,{x:r.optional.custom(yn),y:r.optional.custom(yn),z:r.optional.custom(yn),w:r.optional.custom(yn)});return c?{initialValue:o,params:c}:null},binding:{reader:o=>Zd,constraint:o=>Qd(o.params,o.initialValue),equals:vi.equals,writer:o=>Jd},controller:o=>{const n=o.value,r=o.constraint;if(!(r instanceof Cn))throw E.shouldNeverHappen();return new Fs(o.document,{assembly:Pa,axes:n.rawValue.getComponents().map((c,v)=>eh(c,r.components[v])),parser:ln,value:n,viewProps:o.viewProps})}};function nh(o){const n=[],r=Ss(o.options);return r&&n.push(r),new Qi(n)}const ih={id:"input-string",type:"input",accept:(o,n)=>{if(typeof o!="string")return null;const c=le(n,{options:q.optional.custom(Rr)});return c?{initialValue:o,params:c}:null},binding:{reader:o=>qo,constraint:o=>nh(o.params),writer:o=>ar},controller:o=>{const n=o.document,r=o.value,c=o.constraint,v=c&&an(c,er);return v?new tr(n,{props:new z({options:v.values.value("options")}),value:r,viewProps:o.viewProps}):new Ar(n,{parser:A=>A,props:z.fromObject({formatter:bs}),value:r,viewProps:o.viewProps})}},cr={monitor:{defaultInterval:200,defaultLineCount:3}},Ra=P("mll");class rh{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(Ra()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("textarea");c.classList.add(Ra("i")),c.style.height=`calc(var(--bld-us) * ${r.lineCount})`,c.readOnly=!0,r.viewProps.bindDisabled(c),this.element.appendChild(c),this.textareaElem_=c,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.textareaElem_,r=n.scrollTop===n.scrollHeight-n.clientHeight,c=[];this.value.rawValue.forEach(v=>{v!==void 0&&c.push(this.formatter_(v))}),n.textContent=c.join(`
`),r&&(n.scrollTop=n.scrollHeight)}onValueUpdate_(){this.update_()}}class ks{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new rh(n,{formatter:r.formatter,lineCount:r.lineCount,value:this.value,viewProps:this.viewProps})}}const La=P("sgl");class sh{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(La()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("input");c.classList.add(La("i")),c.readOnly=!0,c.type="text",r.viewProps.bindDisabled(c),this.element.appendChild(c),this.inputElement=c,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.value.rawValue,r=n[n.length-1];this.inputElement.value=r!==void 0?this.formatter_(r):""}onValueUpdate_(){this.update_()}}class Bs{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new sh(n,{formatter:r.formatter,value:this.value,viewProps:this.viewProps})}}const oh={id:"monitor-bool",type:"monitor",accept:(o,n)=>{if(typeof o!="boolean")return null;const c=le(n,{lineCount:q.optional.number});return c?{initialValue:o,params:c}:null},binding:{reader:o=>Vo},controller:o=>{var n;return o.value.rawValue.length===1?new Bs(o.document,{formatter:zo,value:o.value,viewProps:o.viewProps}):new ks(o.document,{formatter:zo,lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:cr.monitor.defaultLineCount,value:o.value,viewProps:o.viewProps})}},Rn=P("grl");class ah{constructor(n,r){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Rn()),r.viewProps.bindClassModifiers(this.element),this.formatter_=r.formatter,this.props_=r.props,this.cursor_=r.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const c=n.createElementNS(Ke,"svg");c.classList.add(Rn("g")),c.style.height=`calc(var(--bld-us) * ${r.lineCount})`,this.element.appendChild(c),this.svgElem_=c;const v=n.createElementNS(Ke,"polyline");this.svgElem_.appendChild(v),this.lineElem_=v;const A=n.createElement("div");A.classList.add(Rn("t"),P("tt")()),this.element.appendChild(A),this.tooltipElem_=A,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const n=this.svgElem_.getBoundingClientRect(),r=this.value.rawValue.length-1,c=this.props_.get("minValue"),v=this.props_.get("maxValue"),A=[];this.value.rawValue.forEach((Ze,Je)=>{if(Ze===void 0)return;const Hn=at(Je,0,r,0,n.width),ur=at(Ze,c,v,n.height,0);A.push([Hn,ur].join(","))}),this.lineElem_.setAttributeNS(null,"points",A.join(" "));const O=this.tooltipElem_,ue=this.value.rawValue[this.cursor_.rawValue];if(ue===void 0){O.classList.remove(Rn("t","a"));return}const Ce=at(this.cursor_.rawValue,0,r,0,n.width),Ue=at(ue,c,v,n.height,0);O.style.left=`${Ce}px`,O.style.top=`${Ue}px`,O.textContent=`${this.formatter_(ue)}`,O.classList.contains(Rn("t","a"))||(O.classList.add(Rn("t","a"),Rn("t","in")),st(O),O.classList.remove(Rn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class lh{constructor(n,r){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=r.props,this.value=r.value,this.viewProps=r.viewProps,this.cursor_=$(-1),this.view=new ah(n,{cursor:this.cursor_,formatter:r.formatter,lineCount:r.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!Xe(n))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const c=new kn(this.view.element);c.emitter.on("down",this.onGraphPointerDown_),c.emitter.on("move",this.onGraphPointerMove_),c.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(n){const r=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(at(n.offsetX,0,r.width,0,this.value.rawValue.length))}onGraphPointerDown_(n){this.onGraphPointerMove_(n)}onGraphPointerMove_(n){if(!n.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(at(n.data.point.x,0,n.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Vs(o){return"format"in o&&!_(o.format)?o.format:St(2)}function ch(o){var n;return o.value.rawValue.length===1?new Bs(o.document,{formatter:Vs(o.params),value:o.value,viewProps:o.viewProps}):new ks(o.document,{formatter:Vs(o.params),lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:cr.monitor.defaultLineCount,value:o.value,viewProps:o.viewProps})}function uh(o){var n,r,c;return new lh(o.document,{formatter:Vs(o.params),lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:cr.monitor.defaultLineCount,props:z.fromObject({maxValue:(r="max"in o.params?o.params.max:null)!==null&&r!==void 0?r:100,minValue:(c="min"in o.params?o.params.min:null)!==null&&c!==void 0?c:0}),value:o.value,viewProps:o.viewProps})}function Da(o){return"view"in o&&o.view==="graph"}const dh={id:"monitor-number",type:"monitor",accept:(o,n)=>{if(typeof o!="number")return null;const r=q,c=le(n,{format:r.optional.function,lineCount:r.optional.number,max:r.optional.number,min:r.optional.number,view:r.optional.string});return c?{initialValue:o,params:c}:null},binding:{defaultBufferSize:o=>Da(o)?64:1,reader:o=>Xo},controller:o=>Da(o.params)?uh(o):ch(o)},hh={id:"monitor-string",type:"monitor",accept:(o,n)=>{if(typeof o!="string")return null;const r=q,c=le(n,{lineCount:r.optional.number,multiline:r.optional.boolean});return c?{initialValue:o,params:c}:null},binding:{reader:o=>qo},controller:o=>{var n;const r=o.value;return r.rawValue.length>1||"multiline"in o.params&&o.params.multiline?new ks(o.document,{formatter:bs,lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:cr.monitor.defaultLineCount,value:r,viewProps:o.viewProps}):new Bs(o.document,{formatter:bs,value:r,viewProps:o.viewProps})}};function ph(o,n){var r;const c=o.accept(n.target.read(),n.params);if(_(c))return null;const v=q,A={target:n.target,initialValue:c.initialValue,params:c.params},O=o.binding.reader(A),ue=o.binding.constraint?o.binding.constraint(A):void 0,Ce=$(O(c.initialValue),{constraint:ue,equals:o.binding.equals}),Ue=new Bc({reader:O,target:n.target,value:Ce,writer:o.binding.writer(A)}),Ze=v.optional.boolean(n.params.disabled).value,Je=v.optional.boolean(n.params.hidden).value,Hn=o.controller({constraint:ue,document:n.document,initialValue:c.initialValue,params:c.params,value:Ue.value,viewProps:we.create({disabled:Ze,hidden:Je})});return new $e(n.document,{binding:Ue,blade:Re(),props:z.fromObject({label:"label"in n.params?(r=v.optional.string(n.params.label).value)!==null&&r!==void 0?r:null:n.target.key}),valueController:Hn})}function fh(o,n){return n===0?new Oc:new kc(o,n??cr.monitor.defaultInterval)}function mh(o,n){var r,c,v;const A=q,O=o.accept(n.target.read(),n.params);if(_(O))return null;const ue={target:n.target,initialValue:O.initialValue,params:O.params},Ce=o.binding.reader(ue),Ue=(c=(r=A.optional.number(n.params.bufferSize).value)!==null&&r!==void 0?r:o.binding.defaultBufferSize&&o.binding.defaultBufferSize(O.params))!==null&&c!==void 0?c:1,Ze=A.optional.number(n.params.interval).value,Je=new Hc({reader:Ce,target:n.target,ticker:fh(n.document,Ze),value:Vc(Ue)}),Hn=A.optional.boolean(n.params.disabled).value,ur=A.optional.boolean(n.params.hidden).value,dr=o.controller({document:n.document,params:O.params,value:Je.value,viewProps:we.create({disabled:Hn,hidden:ur})});return new mt(n.document,{binding:Je,blade:Re(),props:z.fromObject({label:"label"in n.params?(v=A.optional.string(n.params.label).value)!==null&&v!==void 0?v:null:n.target.key}),valueController:dr})}class _h{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(n){n.type==="blade"?this.pluginsMap_.blades.unshift(n):n.type==="input"?this.pluginsMap_.inputs.unshift(n):n.type==="monitor"&&this.pluginsMap_.monitors.unshift(n)}createInput(n,r,c){const v=r.read();if(_(v))throw new E({context:{key:r.key},type:"nomatchingcontroller"});const A=this.pluginsMap_.inputs.reduce((O,ue)=>O??ph(ue,{document:n,target:r,params:c}),null);if(A)return A;throw new E({context:{key:r.key},type:"nomatchingcontroller"})}createMonitor(n,r,c){const v=this.pluginsMap_.monitors.reduce((A,O)=>A??mh(O,{document:n,params:c,target:r}),null);if(v)return v;throw new E({context:{key:r.key},type:"nomatchingcontroller"})}createBlade(n,r){const c=this.pluginsMap_.blades.reduce((v,A)=>v??Fc(A,{document:n,params:r}),null);if(!c)throw new E({type:"nomatchingview",context:{params:r}});return c}createBladeApi(n){if(n instanceof $e)return new Vt(n);if(n instanceof mt)return new Tt(n);if(n instanceof Ne)return new ci(n,this);const r=this.pluginsMap_.blades.reduce((c,v)=>c??v.api({controller:n,pool:this}),null);if(!r)throw E.shouldNeverHappen();return r}}function vh(){const o=new _h;return[wh,$d,th,ih,Gd,Od,Fd,Dd,Lu,oh,hh,dh,ge,Qe,Yi,Ji].forEach(n=>{o.register(n)}),o}function gh(o){return An.isObject(o)?new An(o.x,o.y):new An}function bh(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y)}function un(o,n){if(!o)return;const r=[],c=Sa(o,n);c&&r.push(c);const v=ya(o);return v&&r.push(v),new Qi(r)}function xh(o,n){return new Cn({assembly:Ta,components:[un("x"in o?o.x:void 0,n.x),un("y"in o?o.y:void 0,n.y)]})}function Ua(o,n){const[r,c]=o?Vd(o):[];if(!_(r)||!_(c))return Math.max(Math.abs(r??0),Math.abs(c??0));const v=hi(o);return Math.max(Math.abs(v)*10,Math.abs(n)*10)}function Eh(o,n){const r=n instanceof Cn?n.components[0]:void 0,c=n instanceof Cn?n.components[1]:void 0,v=Ua(r,o.x),A=Ua(c,o.y);return Math.max(v,A)}function Ia(o,n){return{baseStep:hi(n),constraint:n,textProps:z.fromObject({draggingScale:pi(n,o),formatter:St(Lr(n,o))})}}function Mh(o){if(!("y"in o))return!1;const n=o.y;return n&&"inverted"in n?!!n.inverted:!1}const wh={id:"input-point2d",type:"input",accept:(o,n)=>{if(!An.isObject(o))return null;const r=q,c=le(n,{expanded:r.optional.boolean,picker:r.optional.custom($o),x:r.optional.custom(yn),y:r.optional.object({inverted:r.optional.boolean,max:r.optional.number,min:r.optional.number,step:r.optional.number})});return c?{initialValue:o,params:c}:null},binding:{reader:o=>gh,constraint:o=>xh(o.params,o.initialValue),equals:An.equals,writer:o=>bh},controller:o=>{const n=o.document,r=o.value,c=o.constraint;if(!(c instanceof Cn))throw E.shouldNeverHappen();const v="expanded"in o.params?o.params.expanded:void 0,A="picker"in o.params?o.params.picker:void 0;return new qd(n,{axes:[Ia(r.rawValue.x,c.components[0]),Ia(r.rawValue.y,c.components[1])],expanded:v??!1,invertsY:Mh(o.params),maxValue:Eh(r.rawValue,c),parser:ln,pickerLayout:A??"popup",value:r,viewProps:o.viewProps})}};class Na extends a{constructor(n){super(n),this.emitter_=new L,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new d(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get options(){return this.controller_.valueController.props.get("options")}set options(n){this.controller_.valueController.props.set("options",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}}class Fa extends a{constructor(n){super(n),this.emitter_=new L,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new d(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(n){this.controller_.valueController.sliderController.props.set("maxValue",n)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(n){this.controller_.valueController.sliderController.props.set("minValue",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}}class Oa extends a{constructor(n){super(n),this.emitter_=new L,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new d(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(n){this.controller_.valueController.props.set("formatter",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}}const Sh=function(){return{id:"list",type:"blade",accept(o){const n=q,r=le(o,{options:n.required.custom(Rr),value:n.required.raw,view:n.required.constant("list"),label:n.optional.string});return r?{params:r}:null},controller(o){const n=new er(Zo(o.params.options)),r=$(o.params.value,{constraint:n}),c=new tr(o.document,{props:new z({options:n.values.value("options")}),value:r,viewProps:o.viewProps});return new dt(o.document,{blade:o.blade,props:z.fromObject({label:o.params.label}),valueController:c})},api(o){return!(o.controller instanceof dt)||!(o.controller.valueController instanceof tr)?null:new Na(o.controller)}}}();function yh(o){return o.reduce((n,r)=>Object.assign(n,{[r.presetKey]:r.read()}),{})}function Th(o,n){o.forEach(r=>{const c=n[r.target.presetKey];c!==void 0&&r.writer(r.target,r.reader(c))})}class Ch extends Ki{constructor(n,r){super(n,r)}get element(){return this.controller_.view.element}importPreset(n){const r=this.controller_.rackController.rack.find($e).map(c=>c.binding);Th(r,n),this.refresh()}exportPreset(){const n=this.controller_.rackController.rack.find($e).map(r=>r.binding.target);return yh(n)}refresh(){this.controller_.rackController.rack.find($e).forEach(n=>{n.binding.read()}),this.controller_.rackController.rack.find(mt).forEach(n=>{n.binding.read()})}}class Ah extends Be{constructor(n,r){super(n,{expanded:r.expanded,blade:r.blade,props:r.props,root:!0,viewProps:r.viewProps})}}const Ph={id:"slider",type:"blade",accept(o){const n=q,r=le(o,{max:n.required.number,min:n.required.number,view:n.required.constant("slider"),format:n.optional.function,label:n.optional.string,value:n.optional.number});return r?{params:r}:null},controller(o){var n,r;const c=(n=o.params.value)!==null&&n!==void 0?n:0,v=new di({max:o.params.max,min:o.params.min}),A=new ws(o.document,{baseStep:1,parser:ln,sliderProps:new z({maxValue:v.values.value("max"),minValue:v.values.value("min")}),textProps:z.fromObject({draggingScale:pi(void 0,c),formatter:(r=o.params.format)!==null&&r!==void 0?r:xu}),value:$(c,{constraint:v}),viewProps:o.viewProps});return new dt(o.document,{blade:o.blade,props:z.fromObject({label:o.params.label}),valueController:A})},api(o){return!(o.controller instanceof dt)||!(o.controller.valueController instanceof ws)?null:new Fa(o.controller)}},Rh=function(){return{id:"text",type:"blade",accept(o){const n=q,r=le(o,{parse:n.required.function,value:n.required.raw,view:n.required.constant("text"),format:n.optional.function,label:n.optional.string});return r?{params:r}:null},controller(o){var n;const r=new Ar(o.document,{parser:o.params.parse,props:z.fromObject({formatter:(n=o.params.format)!==null&&n!==void 0?n:c=>String(c)}),value:$(o.params.value),viewProps:o.viewProps});return new dt(o.document,{blade:o.blade,props:z.fromObject({label:o.params.label}),valueController:r})},api(o){return!(o.controller instanceof dt)||!(o.controller.valueController instanceof Ar)?null:new Oa(o.controller)}}}();function Lh(o){const n=o.createElement("div");return n.classList.add(P("dfw")()),o.body&&o.body.appendChild(n),n}function ka(o,n,r){if(o.querySelector(`style[data-tp-style=${n}]`))return;const c=o.createElement("style");c.dataset.tpStyle=n,c.textContent=r,o.head.appendChild(c)}class Dh extends Ch{constructor(n){var r,c;const v=n??{},A=(r=v.document)!==null&&r!==void 0?r:xt(),O=vh(),ue=new Ah(A,{expanded:v.expanded,blade:Re(),props:z.fromObject({title:v.title}),viewProps:we.create()});super(ue,O),this.pool_=O,this.containerElem_=(c=v.container)!==null&&c!==void 0?c:Lh(A),this.containerElem_.appendChild(this.element),this.doc_=A,this.usesDefaultWrapper_=!v.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw E.alreadyDisposed();return this.doc_}dispose(){const n=this.containerElem_;if(!n)throw E.alreadyDisposed();if(this.usesDefaultWrapper_){const r=n.parentElement;r&&r.removeChild(n)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(n){("plugin"in n?[n.plugin]:"plugins"in n?n.plugins:[]).forEach(c=>{this.pool_.register(c),this.embedPluginStyle_(c)})}embedPluginStyle_(n){n.css&&ka(this.document,`plugin-${n.id}`,n.css)}setUpDefaultPlugins_(){ka(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(n=>{this.embedPluginStyle_(n)}),this.registerPlugin({plugins:[Ph,Sh,Ji,Rh]})}}const Uh=new i("3.1.9");t.BladeApi=a,t.ButtonApi=f,t.FolderApi=Ki,t.InputBindingApi=Vt,t.ListApi=Na,t.MonitorBindingApi=Tt,t.Pane=Dh,t.SeparatorApi=Dt,t.SliderApi=Fa,t.TabApi=Et,t.TabPageApi=ui,t.TextApi=Oa,t.TpChangeEvent=d,t.VERSION=Uh,Object.defineProperty(t,"__esModule",{value:!0})})})(Lo,Lo.exports);var Vg=Lo.exports;const cs=new Fg;let us={width:window.innerWidth,height:window.innerHeight};const zg=us.width/us.height,ai=new Xt(50,zg,.1,5e3);cs.add(ai);ai.lookAt(new H(0,0,0));ai.position.z=4;ai.position.x=3;ai.position.y=3;const ms=new Dc({canvas:document.querySelector("canvas")});new kg(ai,ms.domElement);ms.setSize(us.width,us.height);ms.shadowMap.enabled=!0;const En=new Vg.Pane,ut={count:1e5,size:.01,radius:4,branches:3,spin:1,randomness:.2,randomnessPower:2.4,outsideColor:"#ff0044",insideColor:"#00ff44"};let bo,ki,xo,Fi;const Ic=()=>{let s=new rt(ut.insideColor),e=new rt(ut.outsideColor);const t=new Float32Array(ut.count*3);Fi&&(ki.dispose(),bo.dispose(),cs.remove(xo)),bo=new Uc({size:ut.size,sizeAttenuation:!0,depthWrite:!1,blending:Eo,vertexColors:!0}),ki=new xn,Fi=new Float32Array(ut.count*3),xo=new Og(ki,bo);for(let i=0;i<ut.count;i++){const a=i*3,l=Math.random()*ut.radius,d=i%ut.branches/ut.branches*Math.PI*2,u=Math.pow(Math.random(),ut.randomnessPower)*(Math.random()<.5?1:-1),p=Math.pow(Math.random(),ut.randomnessPower)*(Math.random()<.5?1:-1),h=Math.pow(Math.random(),ut.randomnessPower)*(Math.random()<.5?1:-1),m=l*ut.spin;Fi[a]=Math.cos(d+m)*l+u,Fi[a+1]=0+p,Fi[a+2]=Math.sin(d+m)*l+h;const _=s.clone();_.lerp(e,l/ut.radius),t[a]=_.r,t[a+1]=_.g,t[a+2]=_.b}ki.setAttribute("position",new qt(Fi,3)),ki.setAttribute("color",new qt(t,3)),cs.add(xo)},Mn=s=>s.last&&Ic();En.addInput(ut,"count",{step:1,min:100,max:1e5}).on("change",Mn);En.addInput(ut,"size",{min:.001,max:2}).on("change",Mn);En.addInput(ut,"radius",{min:.01,max:20}).on("change",Mn);En.addInput(ut,"branches",{step:1,min:3,max:5}).on("change",Mn);En.addInput(ut,"spin",{min:-5,max:5}).on("change",Mn);En.addInput(ut,"randomness",{min:-5,max:5}).on("change",Mn);En.addInput(ut,"randomnessPower",{min:-5,max:5}).on("change",Mn);En.addInput(ut,"insideColor").on("change",Mn);En.addInput(ut,"outsideColor").on("change",Mn);Ic();const Nc=()=>{ki.rotateY(.001),ms.render(cs,ai),window.requestAnimationFrame(Nc)};Nc();
//# sourceMappingURL=index-14cce06e.js.map
