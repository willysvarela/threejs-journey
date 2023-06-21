(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="152",Ud=0,Fa=1,Id=2,nc=1,Nd=2,bn=3,On=0,Ie=1,Mn=2,Fn=0,Ui=1,Oa=2,Ba=3,ka=4,Fd=5,Li=100,Od=101,Bd=102,Va=103,za=104,kd=200,Vd=201,zd=202,Gd=203,ic=204,rc=205,Hd=206,Wd=207,Xd=208,qd=209,jd=210,Kd=0,Yd=1,$d=2,vo=3,Zd=4,Jd=5,Qd=6,tp=7,sc=0,ep=1,np=2,wn=0,ip=1,rp=2,sp=3,op=4,ap=5,oc=300,Fi=301,Oi=302,go=303,xo=304,cs=306,bo=1e3,Je=1001,Mo=1002,Pe=1003,Ga=1004,Vs=1005,Xe=1006,lp=1007,mr=1008,ei=1009,cp=1010,up=1011,ac=1012,hp=1013,$n=1014,Zn=1015,_r=1016,dp=1017,pp=1018,Ii=1020,fp=1021,Qe=1023,mp=1024,_p=1025,Jn=1026,Bi=1027,vp=1028,gp=1029,xp=1030,bp=1031,Mp=1033,zs=33776,Gs=33777,Hs=33778,Ws=33779,Ha=35840,Wa=35841,Xa=35842,qa=35843,wp=36196,ja=37492,Ka=37496,Ya=37808,$a=37809,Za=37810,Ja=37811,Qa=37812,tl=37813,el=37814,nl=37815,il=37816,rl=37817,sl=37818,ol=37819,al=37820,ll=37821,Xs=36492,Ep=36283,cl=36284,ul=36285,hl=36286,lc=3e3,Qn=3001,Sp=3200,yp=3201,cc=0,Tp=1,ti="",Bt="srgb",ln="srgb-linear",uc="display-p3",qs=7680,Cp=519,dl=35044,pl="300 es",wo=1035;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const l=a.indexOf(e);l!==-1&&a.splice(l,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let l=0,h=a.length;l<h;l++)a[l].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,Eo=180/Math.PI;function xr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function Ap(s,t){return(s%t+t)%t}function Ks(s,t,e){return(1-e)*s+e*t}function fl(s){return(s&s-1)===0&&s!==0}function Pp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fr(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),l=this.x-t.x,h=this.y-t.y;return this.x=l*i-h*a+t.x,this.y=l*a+h*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,a,l,h,u,f,d){const m=this.elements;return m[0]=t,m[1]=a,m[2]=u,m[3]=e,m[4]=l,m[5]=f,m[6]=i,m[7]=h,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,h=i[0],u=i[3],f=i[6],d=i[1],m=i[4],_=i[7],g=i[2],b=i[5],w=i[8],M=a[0],x=a[3],p=a[6],R=a[1],A=a[4],C=a[7],D=a[2],I=a[5],F=a[8];return l[0]=h*M+u*R+f*D,l[3]=h*x+u*A+f*I,l[6]=h*p+u*C+f*F,l[1]=d*M+m*R+_*D,l[4]=d*x+m*A+_*I,l[7]=d*p+m*C+_*F,l[2]=g*M+b*R+w*D,l[5]=g*x+b*A+w*I,l[8]=g*p+b*C+w*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],h=t[4],u=t[5],f=t[6],d=t[7],m=t[8];return e*h*m-e*u*d-i*l*m+i*u*f+a*l*d-a*h*f}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],h=t[4],u=t[5],f=t[6],d=t[7],m=t[8],_=m*h-u*d,g=u*f-m*l,b=d*l-h*f,w=e*_+i*g+a*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/w;return t[0]=_*M,t[1]=(a*d-m*i)*M,t[2]=(u*i-a*h)*M,t[3]=g*M,t[4]=(m*e-a*f)*M,t[5]=(a*l-u*e)*M,t[6]=b*M,t[7]=(i*f-d*e)*M,t[8]=(h*e-i*l)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,l,h,u){const f=Math.cos(l),d=Math.sin(l);return this.set(i*f,i*d,-i*(f*h+d*u)+h+t,-a*d,a*f,-a*(-d*h+f*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Ys.makeScale(t,e)),this}rotate(t){return this.premultiply(Ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ys.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new Wt;function hc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function as(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const ml={};function fr(s){s in ml||(ml[s]=!0,console.warn(s))}function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Rp=new Wt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Lp=new Wt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Dp(s){return s.convertSRGBToLinear().applyMatrix3(Lp)}function Up(s){return s.applyMatrix3(Rp).convertLinearToSRGB()}const Ip={[ln]:s=>s,[Bt]:s=>s.convertSRGBToLinear(),[uc]:Dp},Np={[ln]:s=>s,[Bt]:s=>s.convertLinearToSRGB(),[uc]:Up},je={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return ln},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Ip[t],a=Np[e];if(i===void 0||a===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return a(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let mi;class dc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mi===void 0&&(mi=as("canvas")),mi.width=t.width,mi.height=t.height;const i=mi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=as("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),l=a.data;for(let h=0;h<l.length;h++)l[h]=Ni(l[h]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ni(e[i]/255)*255):e[i]=Ni(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class pc{constructor(t=null){this.isSource=!0,this.uuid=xr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let h=0,u=a.length;h<u;h++)a[h].isDataTexture?l.push(Zs(a[h].image)):l.push(Zs(a[h]))}else l=Zs(a);i.url=l}return e||(t.images[this.uuid]=i),i}}function Zs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fp=0;class ke extends Vi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=Je,a=Je,l=Xe,h=mr,u=Qe,f=ei,d=ke.DEFAULT_ANISOTROPY,m=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=xr(),this.name="",this.source=new pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=h,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===Qn?Bt:ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bo:t.x=t.x-Math.floor(t.x);break;case Je:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bo:t.y=t.y-Math.floor(t.y);break;case Je:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?Qn:lc}set encoding(t){fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Qn?Bt:ti}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=oc;ke.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,a=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=this.w,h=t.elements;return this.x=h[0]*e+h[4]*i+h[8]*a+h[12]*l,this.y=h[1]*e+h[5]*i+h[9]*a+h[13]*l,this.z=h[2]*e+h[6]*i+h[10]*a+h[14]*l,this.w=h[3]*e+h[7]*i+h[11]*a+h[15]*l,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,l;const f=t.elements,d=f[0],m=f[4],_=f[8],g=f[1],b=f[5],w=f[9],M=f[2],x=f[6],p=f[10];if(Math.abs(m-g)<.01&&Math.abs(_-M)<.01&&Math.abs(w-x)<.01){if(Math.abs(m+g)<.1&&Math.abs(_+M)<.1&&Math.abs(w+x)<.1&&Math.abs(d+b+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(d+1)/2,C=(b+1)/2,D=(p+1)/2,I=(m+g)/4,F=(_+M)/4,j=(w+x)/4;return A>C&&A>D?A<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(A),a=I/i,l=F/i):C>D?C<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),i=I/a,l=j/a):D<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(D),i=F/l,a=j/l),this.set(i,a,l,e),this}let R=Math.sqrt((x-w)*(x-w)+(_-M)*(_-M)+(g-m)*(g-m));return Math.abs(R)<.001&&(R=1),this.x=(x-w)/R,this.y=(_-M)/R,this.z=(g-m)/R,this.w=Math.acos((d+b+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ni extends Vi{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const a={width:t,height:e,depth:1};i.encoding!==void 0&&(fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qn?Bt:ti),this.texture=new ke(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Xe,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new pc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fc extends ke{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Op extends ke{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,l,h,u){let f=i[a+0],d=i[a+1],m=i[a+2],_=i[a+3];const g=l[h+0],b=l[h+1],w=l[h+2],M=l[h+3];if(u===0){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(u===1){t[e+0]=g,t[e+1]=b,t[e+2]=w,t[e+3]=M;return}if(_!==M||f!==g||d!==b||m!==w){let x=1-u;const p=f*g+d*b+m*w+_*M,R=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const D=Math.sqrt(A),I=Math.atan2(D,p*R);x=Math.sin(x*I)/D,u=Math.sin(u*I)/D}const C=u*R;if(f=f*x+g*C,d=d*x+b*C,m=m*x+w*C,_=_*x+M*C,x===1-u){const D=1/Math.sqrt(f*f+d*d+m*m+_*_);f*=D,d*=D,m*=D,_*=D}}t[e]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_}static multiplyQuaternionsFlat(t,e,i,a,l,h){const u=i[a],f=i[a+1],d=i[a+2],m=i[a+3],_=l[h],g=l[h+1],b=l[h+2],w=l[h+3];return t[e]=u*w+m*_+f*b-d*g,t[e+1]=f*w+m*g+d*_-u*b,t[e+2]=d*w+m*b+u*g-f*_,t[e+3]=m*w-u*_-f*g-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,a=t._y,l=t._z,h=t._order,u=Math.cos,f=Math.sin,d=u(i/2),m=u(a/2),_=u(l/2),g=f(i/2),b=f(a/2),w=f(l/2);switch(h){case"XYZ":this._x=g*m*_+d*b*w,this._y=d*b*_-g*m*w,this._z=d*m*w+g*b*_,this._w=d*m*_-g*b*w;break;case"YXZ":this._x=g*m*_+d*b*w,this._y=d*b*_-g*m*w,this._z=d*m*w-g*b*_,this._w=d*m*_+g*b*w;break;case"ZXY":this._x=g*m*_-d*b*w,this._y=d*b*_+g*m*w,this._z=d*m*w+g*b*_,this._w=d*m*_-g*b*w;break;case"ZYX":this._x=g*m*_-d*b*w,this._y=d*b*_+g*m*w,this._z=d*m*w-g*b*_,this._w=d*m*_+g*b*w;break;case"YZX":this._x=g*m*_+d*b*w,this._y=d*b*_+g*m*w,this._z=d*m*w-g*b*_,this._w=d*m*_-g*b*w;break;case"XZY":this._x=g*m*_-d*b*w,this._y=d*b*_-g*m*w,this._z=d*m*w+g*b*_,this._w=d*m*_+g*b*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],l=e[8],h=e[1],u=e[5],f=e[9],d=e[2],m=e[6],_=e[10],g=i+u+_;if(g>0){const b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(m-f)*b,this._y=(l-d)*b,this._z=(h-a)*b}else if(i>u&&i>_){const b=2*Math.sqrt(1+i-u-_);this._w=(m-f)/b,this._x=.25*b,this._y=(a+h)/b,this._z=(l+d)/b}else if(u>_){const b=2*Math.sqrt(1+u-i-_);this._w=(l-d)/b,this._x=(a+h)/b,this._y=.25*b,this._z=(f+m)/b}else{const b=2*Math.sqrt(1+_-i-u);this._w=(h-a)/b,this._x=(l+d)/b,this._y=(f+m)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,l=t._z,h=t._w,u=e._x,f=e._y,d=e._z,m=e._w;return this._x=i*m+h*u+a*d-l*f,this._y=a*m+h*f+l*u-i*d,this._z=l*m+h*d+i*f-a*u,this._w=h*m-i*u-a*f-l*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,a=this._y,l=this._z,h=this._w;let u=h*t._w+i*t._x+a*t._y+l*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=h,this._x=i,this._y=a,this._z=l,this;const f=1-u*u;if(f<=Number.EPSILON){const b=1-e;return this._w=b*h+e*this._w,this._x=b*i+e*this._x,this._y=b*a+e*this._y,this._z=b*l+e*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(f),m=Math.atan2(d,u),_=Math.sin((1-e)*m)/d,g=Math.sin(e*m)/d;return this._w=h*_+this._w*g,this._x=i*_+this._x*g,this._y=a*_+this._y*g,this._z=l*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),a=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(e*Math.cos(a),i*Math.sin(l),i*Math.cos(l),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_l.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*a,this.y=l[1]*e+l[4]*i+l[7]*a,this.z=l[2]*e+l[5]*i+l[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=t.elements,h=1/(l[3]*e+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*a+l[12])*h,this.y=(l[1]*e+l[5]*i+l[9]*a+l[13])*h,this.z=(l[2]*e+l[6]*i+l[10]*a+l[14])*h,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,l=t.x,h=t.y,u=t.z,f=t.w,d=f*e+h*a-u*i,m=f*i+u*e-l*a,_=f*a+l*i-h*e,g=-l*e-h*i-u*a;return this.x=d*f+g*-l+m*-u-_*-h,this.y=m*f+g*-h+_*-l-d*-u,this.z=_*f+g*-u+d*-h-m*-l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*a,this.y=l[1]*e+l[5]*i+l[9]*a,this.z=l[2]*e+l[6]*i+l[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,l=t.z,h=e.x,u=e.y,f=e.z;return this.x=a*f-l*u,this.y=l*h-i*f,this.z=i*u-a*h,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Js.copy(this).projectOnVector(t),this.sub(Js)}reflect(t){return this.sub(Js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ue(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new V,_l=new br;class Mr{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),_i.copy(t.boundingBox),_i.applyMatrix4(t.matrixWorld),this.union(_i);else{const a=t.geometry;if(a!==void 0)if(e&&a.attributes!==void 0&&a.attributes.position!==void 0){const l=a.attributes.position;for(let h=0,u=l.count;h<u;h++)mn.fromBufferAttribute(l,h).applyMatrix4(t.matrixWorld),this.expandByPoint(mn)}else a.boundingBox===null&&a.computeBoundingBox(),_i.copy(a.boundingBox),_i.applyMatrix4(t.matrixWorld),this.union(_i)}const i=t.children;for(let a=0,l=i.length;a<l;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),Or.subVectors(this.max,lr),vi.subVectors(t.a,lr),gi.subVectors(t.b,lr),xi.subVectors(t.c,lr),Ln.subVectors(gi,vi),Dn.subVectors(xi,gi),Wn.subVectors(vi,xi);let e=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-Wn.z,Wn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,Wn.z,0,-Wn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-Wn.y,Wn.x,0];return!Qs(e,vi,gi,xi,Or)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,vi,gi,xi,Or))?!1:(Br.crossVectors(Ln,Dn),e=[Br.x,Br.y,Br.z],Qs(e,vi,gi,xi,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new V,new V,new V,new V,new V,new V,new V,new V],mn=new V,_i=new Mr,vi=new V,gi=new V,xi=new V,Ln=new V,Dn=new V,Wn=new V,lr=new V,Or=new V,Br=new V,Xn=new V;function Qs(s,t,e,i,a){for(let l=0,h=s.length-3;l<=h;l+=3){Xn.fromArray(s,l);const u=a.x*Math.abs(Xn.x)+a.y*Math.abs(Xn.y)+a.z*Math.abs(Xn.z),f=t.dot(Xn),d=e.dot(Xn),m=i.dot(Xn);if(Math.max(-Math.max(f,d,m),Math.min(f,d,m))>u)return!1}return!0}const Bp=new Mr,cr=new V,to=new V;class us{constructor(t=new V,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Bp.setFromPoints(t).getCenter(i);let a=0;for(let l=0,h=t.length;l<h;l++)a=Math.max(a,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);const e=cr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(cr,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(to.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(to)),this.expandByPoint(cr.copy(t.center).sub(to))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new V,eo=new V,kr=new V,Un=new V,no=new V,Vr=new V,io=new V;class mc{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){eo.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(eo);const l=t.distanceTo(e)*.5,h=-this.direction.dot(kr),u=Un.dot(this.direction),f=-Un.dot(kr),d=Un.lengthSq(),m=Math.abs(1-h*h);let _,g,b,w;if(m>0)if(_=h*f-u,g=h*u-f,w=l*m,_>=0)if(g>=-w)if(g<=w){const M=1/m;_*=M,g*=M,b=_*(_+h*g+2*u)+g*(h*_+g+2*f)+d}else g=l,_=Math.max(0,-(h*g+u)),b=-_*_+g*(g+2*f)+d;else g=-l,_=Math.max(0,-(h*g+u)),b=-_*_+g*(g+2*f)+d;else g<=-w?(_=Math.max(0,-(-h*l+u)),g=_>0?-l:Math.min(Math.max(-l,-f),l),b=-_*_+g*(g+2*f)+d):g<=w?(_=0,g=Math.min(Math.max(-l,-f),l),b=g*(g+2*f)+d):(_=Math.max(0,-(h*l+u)),g=_>0?l:Math.min(Math.max(-l,-f),l),b=-_*_+g*(g+2*f)+d);else g=h>0?-l:l,_=Math.max(0,-(h*g+u)),b=-_*_+g*(g+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(eo).addScaledVector(kr,g),b}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const i=_n.dot(this.direction),a=_n.dot(_n)-i*i,l=t.radius*t.radius;if(a>l)return null;const h=Math.sqrt(l-a),u=i-h,f=i+h;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,l,h,u,f;const d=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(i=(t.min.x-g.x)*d,a=(t.max.x-g.x)*d):(i=(t.max.x-g.x)*d,a=(t.min.x-g.x)*d),m>=0?(l=(t.min.y-g.y)*m,h=(t.max.y-g.y)*m):(l=(t.max.y-g.y)*m,h=(t.min.y-g.y)*m),i>h||l>a||((l>i||isNaN(i))&&(i=l),(h<a||isNaN(a))&&(a=h),_>=0?(u=(t.min.z-g.z)*_,f=(t.max.z-g.z)*_):(u=(t.max.z-g.z)*_,f=(t.min.z-g.z)*_),i>f||u>a)||((u>i||i!==i)&&(i=u),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,i,a,l){no.subVectors(e,t),Vr.subVectors(i,t),io.crossVectors(no,Vr);let h=this.direction.dot(io),u;if(h>0){if(a)return null;u=1}else if(h<0)u=-1,h=-h;else return null;Un.subVectors(this.origin,t);const f=u*this.direction.dot(Vr.crossVectors(Un,Vr));if(f<0)return null;const d=u*this.direction.dot(no.cross(Un));if(d<0||f+d>h)return null;const m=-u*Un.dot(io);return m<0?null:this.at(m/h,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,a,l,h,u,f,d,m,_,g,b,w,M,x){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=a,p[1]=l,p[5]=h,p[9]=u,p[13]=f,p[2]=d,p[6]=m,p[10]=_,p[14]=g,p[3]=b,p[7]=w,p[11]=M,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,a=1/bi.setFromMatrixColumn(t,0).length(),l=1/bi.setFromMatrixColumn(t,1).length(),h=1/bi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*h,e[9]=i[9]*h,e[10]=i[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,l=t.z,h=Math.cos(i),u=Math.sin(i),f=Math.cos(a),d=Math.sin(a),m=Math.cos(l),_=Math.sin(l);if(t.order==="XYZ"){const g=h*m,b=h*_,w=u*m,M=u*_;e[0]=f*m,e[4]=-f*_,e[8]=d,e[1]=b+w*d,e[5]=g-M*d,e[9]=-u*f,e[2]=M-g*d,e[6]=w+b*d,e[10]=h*f}else if(t.order==="YXZ"){const g=f*m,b=f*_,w=d*m,M=d*_;e[0]=g+M*u,e[4]=w*u-b,e[8]=h*d,e[1]=h*_,e[5]=h*m,e[9]=-u,e[2]=b*u-w,e[6]=M+g*u,e[10]=h*f}else if(t.order==="ZXY"){const g=f*m,b=f*_,w=d*m,M=d*_;e[0]=g-M*u,e[4]=-h*_,e[8]=w+b*u,e[1]=b+w*u,e[5]=h*m,e[9]=M-g*u,e[2]=-h*d,e[6]=u,e[10]=h*f}else if(t.order==="ZYX"){const g=h*m,b=h*_,w=u*m,M=u*_;e[0]=f*m,e[4]=w*d-b,e[8]=g*d+M,e[1]=f*_,e[5]=M*d+g,e[9]=b*d-w,e[2]=-d,e[6]=u*f,e[10]=h*f}else if(t.order==="YZX"){const g=h*f,b=h*d,w=u*f,M=u*d;e[0]=f*m,e[4]=M-g*_,e[8]=w*_+b,e[1]=_,e[5]=h*m,e[9]=-u*m,e[2]=-d*m,e[6]=b*_+w,e[10]=g-M*_}else if(t.order==="XZY"){const g=h*f,b=h*d,w=u*f,M=u*d;e[0]=f*m,e[4]=-_,e[8]=d*m,e[1]=g*_+M,e[5]=h*m,e[9]=b*_-w,e[2]=w*_-b,e[6]=u*m,e[10]=M*_+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kp,t,Vp)}lookAt(t,e,i){const a=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),In.crossVectors(i,Fe),In.lengthSq()===0&&(Math.abs(i.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),In.crossVectors(i,Fe)),In.normalize(),zr.crossVectors(Fe,In),a[0]=In.x,a[4]=zr.x,a[8]=Fe.x,a[1]=In.y,a[5]=zr.y,a[9]=Fe.y,a[2]=In.z,a[6]=zr.z,a[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,h=i[0],u=i[4],f=i[8],d=i[12],m=i[1],_=i[5],g=i[9],b=i[13],w=i[2],M=i[6],x=i[10],p=i[14],R=i[3],A=i[7],C=i[11],D=i[15],I=a[0],F=a[4],j=a[8],S=a[12],L=a[1],et=a[5],tt=a[9],G=a[13],Y=a[2],Q=a[6],ot=a[10],$=a[14],z=a[3],ut=a[7],nt=a[11],Ct=a[15];return l[0]=h*I+u*L+f*Y+d*z,l[4]=h*F+u*et+f*Q+d*ut,l[8]=h*j+u*tt+f*ot+d*nt,l[12]=h*S+u*G+f*$+d*Ct,l[1]=m*I+_*L+g*Y+b*z,l[5]=m*F+_*et+g*Q+b*ut,l[9]=m*j+_*tt+g*ot+b*nt,l[13]=m*S+_*G+g*$+b*Ct,l[2]=w*I+M*L+x*Y+p*z,l[6]=w*F+M*et+x*Q+p*ut,l[10]=w*j+M*tt+x*ot+p*nt,l[14]=w*S+M*G+x*$+p*Ct,l[3]=R*I+A*L+C*Y+D*z,l[7]=R*F+A*et+C*Q+D*ut,l[11]=R*j+A*tt+C*ot+D*nt,l[15]=R*S+A*G+C*$+D*Ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],l=t[12],h=t[1],u=t[5],f=t[9],d=t[13],m=t[2],_=t[6],g=t[10],b=t[14],w=t[3],M=t[7],x=t[11],p=t[15];return w*(+l*f*_-a*d*_-l*u*g+i*d*g+a*u*b-i*f*b)+M*(+e*f*b-e*d*g+l*h*g-a*h*b+a*d*m-l*f*m)+x*(+e*d*_-e*u*b-l*h*_+i*h*b+l*u*m-i*d*m)+p*(-a*u*m-e*f*_+e*u*g+a*h*_-i*h*g+i*f*m)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],h=t[4],u=t[5],f=t[6],d=t[7],m=t[8],_=t[9],g=t[10],b=t[11],w=t[12],M=t[13],x=t[14],p=t[15],R=_*x*d-M*g*d+M*f*b-u*x*b-_*f*p+u*g*p,A=w*g*d-m*x*d-w*f*b+h*x*b+m*f*p-h*g*p,C=m*M*d-w*_*d+w*u*b-h*M*b-m*u*p+h*_*p,D=w*_*f-m*M*f-w*u*g+h*M*g+m*u*x-h*_*x,I=e*R+i*A+a*C+l*D;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return t[0]=R*F,t[1]=(M*g*l-_*x*l-M*a*b+i*x*b+_*a*p-i*g*p)*F,t[2]=(u*x*l-M*f*l+M*a*d-i*x*d-u*a*p+i*f*p)*F,t[3]=(_*f*l-u*g*l-_*a*d+i*g*d+u*a*b-i*f*b)*F,t[4]=A*F,t[5]=(m*x*l-w*g*l+w*a*b-e*x*b-m*a*p+e*g*p)*F,t[6]=(w*f*l-h*x*l-w*a*d+e*x*d+h*a*p-e*f*p)*F,t[7]=(h*g*l-m*f*l+m*a*d-e*g*d-h*a*b+e*f*b)*F,t[8]=C*F,t[9]=(w*_*l-m*M*l-w*i*b+e*M*b+m*i*p-e*_*p)*F,t[10]=(h*M*l-w*u*l+w*i*d-e*M*d-h*i*p+e*u*p)*F,t[11]=(m*u*l-h*_*l-m*i*d+e*_*d+h*i*b-e*u*b)*F,t[12]=D*F,t[13]=(m*M*a-w*_*a+w*i*g-e*M*g-m*i*x+e*_*x)*F,t[14]=(w*u*a-h*M*a-w*i*f+e*M*f+h*i*x-e*u*x)*F,t[15]=(h*_*a-m*u*a+m*i*f-e*_*f-h*i*g+e*u*g)*F,this}scale(t){const e=this.elements,i=t.x,a=t.y,l=t.z;return e[0]*=i,e[4]*=a,e[8]*=l,e[1]*=i,e[5]*=a,e[9]*=l,e[2]*=i,e[6]*=a,e[10]*=l,e[3]*=i,e[7]*=a,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),l=1-i,h=t.x,u=t.y,f=t.z,d=l*h,m=l*u;return this.set(d*h+i,d*u-a*f,d*f+a*u,0,d*u+a*f,m*u+i,m*f-a*h,0,d*f-a*u,m*f+a*h,l*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,l,h){return this.set(1,i,l,0,t,1,h,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,l=e._x,h=e._y,u=e._z,f=e._w,d=l+l,m=h+h,_=u+u,g=l*d,b=l*m,w=l*_,M=h*m,x=h*_,p=u*_,R=f*d,A=f*m,C=f*_,D=i.x,I=i.y,F=i.z;return a[0]=(1-(M+p))*D,a[1]=(b+C)*D,a[2]=(w-A)*D,a[3]=0,a[4]=(b-C)*I,a[5]=(1-(g+p))*I,a[6]=(x+R)*I,a[7]=0,a[8]=(w+A)*F,a[9]=(x-R)*F,a[10]=(1-(g+M))*F,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;let l=bi.set(a[0],a[1],a[2]).length();const h=bi.set(a[4],a[5],a[6]).length(),u=bi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),t.x=a[12],t.y=a[13],t.z=a[14],Ke.copy(this);const d=1/l,m=1/h,_=1/u;return Ke.elements[0]*=d,Ke.elements[1]*=d,Ke.elements[2]*=d,Ke.elements[4]*=m,Ke.elements[5]*=m,Ke.elements[6]*=m,Ke.elements[8]*=_,Ke.elements[9]*=_,Ke.elements[10]*=_,e.setFromRotationMatrix(Ke),i.x=l,i.y=h,i.z=u,this}makePerspective(t,e,i,a,l,h){const u=this.elements,f=2*l/(e-t),d=2*l/(i-a),m=(e+t)/(e-t),_=(i+a)/(i-a),g=-(h+l)/(h-l),b=-2*h*l/(h-l);return u[0]=f,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=d,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,i,a,l,h){const u=this.elements,f=1/(e-t),d=1/(i-a),m=1/(h-l),_=(e+t)*f,g=(i+a)*d,b=(h+l)*m;return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-_,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=-2*m,u[14]=-b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const bi=new V,Ke=new Me,kp=new V(0,0,0),Vp=new V(1,1,1),In=new V,zr=new V,Fe=new V,vl=new Me,gl=new br;class hs{constructor(t=0,e=0,i=0,a=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,l=a[0],h=a[4],u=a[8],f=a[1],d=a[5],m=a[9],_=a[2],g=a[6],b=a[10];switch(e){case"XYZ":this._y=Math.asin(Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,b),this._z=Math.atan2(-h,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,b),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Ue(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(u,b));break;case"XZY":this._z=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-m,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zp=0;const xl=new V,Mi=new br,vn=new Me,Gr=new V,ur=new V,Gp=new V,Hp=new br,bl=new V(1,0,0),Ml=new V(0,1,0),wl=new V(0,0,1),Wp={type:"added"},El={type:"removed"};class Re extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new V,e=new hs,i=new br,a=new V(1,1,1);function l(){i.setFromEuler(e,!1)}function h(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Me},normalMatrix:{value:new Wt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(bl,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(wl,t)}translateOnAxis(t,e){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bl,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gr.copy(t):Gr.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ur,Gr,this.up):vn.lookAt(Gr,ur,this.up),this.quaternion.setFromRotationMatrix(vn),a&&(vn.extractRotation(a.matrixWorld),Mi.setFromRotationMatrix(vn),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(El)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(El)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const h=this.children[i].getObjectByProperty(t,e);if(h!==void 0)return h}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let a=0,l=this.children.length;a<l;a++){const h=this.children[a].getObjectsByProperty(t,e);h.length>0&&(i=i.concat(h))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++){const l=e[i];(l.matrixWorldAutoUpdate===!0||t===!0)&&l.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let l=0,h=a.length;l<h;l++){const u=a[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON()));function l(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,m=f.length;d<m;d++){const _=f[d];l(t.shapes,_)}else l(t.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(l(t.materials,this.material[f]));a.material=u}else a.material=l(t.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];a.animations.push(l(t.animations,f))}}if(e){const u=h(t.geometries),f=h(t.materials),d=h(t.textures),m=h(t.images),_=h(t.shapes),g=h(t.skeletons),b=h(t.animations),w=h(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),b.length>0&&(i.animations=b),w.length>0&&(i.nodes=w)}return i.object=a,i;function h(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Re.DEFAULT_UP=new V(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new V,gn=new V,ro=new V,xn=new V,wi=new V,Ei=new V,Sl=new V,so=new V,oo=new V,ao=new V;let Hr=!1;class Ze{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),Ye.subVectors(t,e),a.cross(Ye);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(t,e,i,a,l){Ye.subVectors(a,e),gn.subVectors(i,e),ro.subVectors(t,e);const h=Ye.dot(Ye),u=Ye.dot(gn),f=Ye.dot(ro),d=gn.dot(gn),m=gn.dot(ro),_=h*d-u*u;if(_===0)return l.set(-2,-1,-1);const g=1/_,b=(d*f-u*m)*g,w=(h*m-u*f)*g;return l.set(1-b-w,w,b)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,i,a,l,h,u,f){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),this.getInterpolation(t,e,i,a,l,h,u,f)}static getInterpolation(t,e,i,a,l,h,u,f){return this.getBarycoord(t,e,i,a,xn),f.setScalar(0),f.addScaledVector(l,xn.x),f.addScaledVector(h,xn.y),f.addScaledVector(u,xn.z),f}static isFrontFacing(t,e,i,a){return Ye.subVectors(i,e),gn.subVectors(t,e),Ye.cross(gn).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Ye.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,a,l){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),Ze.getInterpolation(t,this.a,this.b,this.c,e,i,a,l)}getInterpolation(t,e,i,a,l){return Ze.getInterpolation(t,this.a,this.b,this.c,e,i,a,l)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,l=this.c;let h,u;wi.subVectors(a,i),Ei.subVectors(l,i),so.subVectors(t,i);const f=wi.dot(so),d=Ei.dot(so);if(f<=0&&d<=0)return e.copy(i);oo.subVectors(t,a);const m=wi.dot(oo),_=Ei.dot(oo);if(m>=0&&_<=m)return e.copy(a);const g=f*_-m*d;if(g<=0&&f>=0&&m<=0)return h=f/(f-m),e.copy(i).addScaledVector(wi,h);ao.subVectors(t,l);const b=wi.dot(ao),w=Ei.dot(ao);if(w>=0&&b<=w)return e.copy(l);const M=b*d-f*w;if(M<=0&&d>=0&&w<=0)return u=d/(d-w),e.copy(i).addScaledVector(Ei,u);const x=m*w-b*_;if(x<=0&&_-m>=0&&b-w>=0)return Sl.subVectors(l,a),u=(_-m)/(_-m+(b-w)),e.copy(a).addScaledVector(Sl,u);const p=1/(x+M+g);return h=M*p,u=g*p,e.copy(i).addScaledVector(wi,h).addScaledVector(Ei,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Xp=0;class zi extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=Ui,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ic,this.blendDst=rc,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(i.blending=this.blending),this.side!==On&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const h=[];for(const u in l){const f=l[u];delete f.metadata,h.push(f)}return h}if(e){const l=a(t.textures),h=a(t.images);l.length>0&&(i.textures=l),h.length>0&&(i.images=h)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$e={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function lo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ee{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,je.toWorkingColorSpace(this,e),this}setRGB(t,e,i,a=je.workingColorSpace){return this.r=t,this.g=e,this.b=i,je.toWorkingColorSpace(this,a),this}setHSL(t,e,i,a=je.workingColorSpace){if(t=Ap(t,1),e=Ue(e,0,1),i=Ue(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,h=2*i-l;this.r=lo(h,l,t+1/3),this.g=lo(h,l,t),this.b=lo(h,l,t-1/3)}return je.toWorkingColorSpace(this,a),this}setStyle(t,e=Bt){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const h=a[1],u=a[2];switch(h){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=a[1],h=l.length;if(h===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(h===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bt){const i=vc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bt){return je.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Ue(Ce.r*255,0,255))*65536+Math.round(Ue(Ce.g*255,0,255))*256+Math.round(Ue(Ce.b*255,0,255))}getHexString(t=Bt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=je.workingColorSpace){je.fromWorkingColorSpace(Ce.copy(this),e);const i=Ce.r,a=Ce.g,l=Ce.b,h=Math.max(i,a,l),u=Math.min(i,a,l);let f,d;const m=(u+h)/2;if(u===h)f=0,d=0;else{const _=h-u;switch(d=m<=.5?_/(h+u):_/(2-h-u),h){case i:f=(a-l)/_+(a<l?6:0);break;case a:f=(l-i)/_+2;break;case l:f=(i-a)/_+4;break}f/=6}return t.h=f,t.s=d,t.l=m,t}getRGB(t,e=je.workingColorSpace){return je.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Bt){je.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,i=Ce.g,a=Ce.b;return t!==Bt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL($e),$e.h+=t,$e.s+=e,$e.l+=i,this.setHSL($e.h,$e.s,$e.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($e),t.getHSL(Wr);const i=Ks($e.h,Wr.h,e),a=Ks($e.s,Wr.s,e),l=Ks($e.l,Wr.l,e);return this.setHSL(i,a,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*a,this.g=l[1]*e+l[4]*i+l[7]*a,this.b=l[2]*e+l[5]*i+l[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new ee;ee.NAMES=vc;class gc extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new V,Xr=new ne;class tn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),a=Ne(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,l){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),a=Ne(a,this.array),l=Ne(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xc extends tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class bc extends tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ve extends tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let qp=0;const We=new Me,co=new Re,Si=new V,Oe=new Mr,hr=new Mr,be=new V;class en extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hc(t)?bc:xc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new Wt().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,i){return We.makeTranslation(t,e,i),this.applyMatrix4(We),this}scale(t,e,i){return We.makeScale(t,e,i),this.applyMatrix4(We),this}lookAt(t){return co.lookAt(t),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=[];for(let i=0,a=t.length;i<a;i++){const l=t[i];e.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const l=e[i];Oe.setFromBufferAttribute(l),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let l=0,h=e.length;l<h;l++){const u=e[l];hr.setFromBufferAttribute(u),this.morphTargetsRelative?(be.addVectors(Oe.min,hr.min),Oe.expandByPoint(be),be.addVectors(Oe.max,hr.max),Oe.expandByPoint(be)):(Oe.expandByPoint(hr.min),Oe.expandByPoint(hr.max))}Oe.getCenter(i);let a=0;for(let l=0,h=t.count;l<h;l++)be.fromBufferAttribute(t,l),a=Math.max(a,i.distanceToSquared(be));if(e)for(let l=0,h=e.length;l<h;l++){const u=e[l],f=this.morphTargetsRelative;for(let d=0,m=u.count;d<m;d++)be.fromBufferAttribute(u,d),f&&(Si.fromBufferAttribute(t,d),be.add(Si)),a=Math.max(a,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,a=e.position.array,l=e.normal.array,h=e.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*u),4));const f=this.getAttribute("tangent").array,d=[],m=[];for(let L=0;L<u;L++)d[L]=new V,m[L]=new V;const _=new V,g=new V,b=new V,w=new ne,M=new ne,x=new ne,p=new V,R=new V;function A(L,et,tt){_.fromArray(a,L*3),g.fromArray(a,et*3),b.fromArray(a,tt*3),w.fromArray(h,L*2),M.fromArray(h,et*2),x.fromArray(h,tt*2),g.sub(_),b.sub(_),M.sub(w),x.sub(w);const G=1/(M.x*x.y-x.x*M.y);isFinite(G)&&(p.copy(g).multiplyScalar(x.y).addScaledVector(b,-M.y).multiplyScalar(G),R.copy(b).multiplyScalar(M.x).addScaledVector(g,-x.x).multiplyScalar(G),d[L].add(p),d[et].add(p),d[tt].add(p),m[L].add(R),m[et].add(R),m[tt].add(R))}let C=this.groups;C.length===0&&(C=[{start:0,count:i.length}]);for(let L=0,et=C.length;L<et;++L){const tt=C[L],G=tt.start,Y=tt.count;for(let Q=G,ot=G+Y;Q<ot;Q+=3)A(i[Q+0],i[Q+1],i[Q+2])}const D=new V,I=new V,F=new V,j=new V;function S(L){F.fromArray(l,L*3),j.copy(F);const et=d[L];D.copy(et),D.sub(F.multiplyScalar(F.dot(et))).normalize(),I.crossVectors(j,et);const G=I.dot(m[L])<0?-1:1;f[L*4]=D.x,f[L*4+1]=D.y,f[L*4+2]=D.z,f[L*4+3]=G}for(let L=0,et=C.length;L<et;++L){const tt=C[L],G=tt.start,Y=tt.count;for(let Q=G,ot=G+Y;Q<ot;Q+=3)S(i[Q+0]),S(i[Q+1]),S(i[Q+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,b=i.count;g<b;g++)i.setXYZ(g,0,0,0);const a=new V,l=new V,h=new V,u=new V,f=new V,d=new V,m=new V,_=new V;if(t)for(let g=0,b=t.count;g<b;g+=3){const w=t.getX(g+0),M=t.getX(g+1),x=t.getX(g+2);a.fromBufferAttribute(e,w),l.fromBufferAttribute(e,M),h.fromBufferAttribute(e,x),m.subVectors(h,l),_.subVectors(a,l),m.cross(_),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,x),u.add(m),f.add(m),d.add(m),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,b=e.count;g<b;g+=3)a.fromBufferAttribute(e,g+0),l.fromBufferAttribute(e,g+1),h.fromBufferAttribute(e,g+2),m.subVectors(h,l),_.subVectors(a,l),m.cross(_),i.setXYZ(g+0,m.x,m.y,m.z),i.setXYZ(g+1,m.x,m.y,m.z),i.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(u,f){const d=u.array,m=u.itemSize,_=u.normalized,g=new d.constructor(f.length*m);let b=0,w=0;for(let M=0,x=f.length;M<x;M++){u.isInterleavedBufferAttribute?b=f[M]*u.data.stride+u.offset:b=f[M]*m;for(let p=0;p<m;p++)g[w++]=d[b++]}return new tn(g,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,i=this.index.array,a=this.attributes;for(const u in a){const f=a[u],d=t(f,i);e.setAttribute(u,d)}const l=this.morphAttributes;for(const u in l){const f=[],d=l[u];for(let m=0,_=d.length;m<_;m++){const g=d[m],b=t(g,i);f.push(b)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let u=0,f=h.length;u<f;u++){const d=h[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const f in i){const d=i[f];t.data.attributes[f]=d.toJSON(t.data)}const a={};let l=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],m=[];for(let _=0,g=d.length;_<g;_++){const b=d[_];m.push(b.toJSON(t.data))}m.length>0&&(a[f]=m,l=!0)}l&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const a=t.attributes;for(const d in a){const m=a[d];this.setAttribute(d,m.clone(e))}const l=t.morphAttributes;for(const d in l){const m=[],_=l[d];for(let g=0,b=_.length;g<b;g++)m.push(_[g].clone(e));this.morphAttributes[d]=m}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,m=h.length;d<m;d++){const _=h[d];this.addGroup(_.start,_.count,_.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new Me,sn=new mc,qr=new us,Tl=new V,yi=new V,Ti=new V,Ci=new V,uo=new V,jr=new V,Kr=new ne,Yr=new ne,$r=new ne,Cl=new V,Al=new V,Pl=new V,Zr=new V,Jr=new V;class an extends Re{constructor(t=new en,e=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=a.length;l<h;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,h=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const u=this.morphTargetInfluences;if(l&&u){jr.set(0,0,0);for(let f=0,d=l.length;f<d;f++){const m=u[f],_=l[f];m!==0&&(uo.fromBufferAttribute(_,t),h?jr.addScaledVector(uo,m):jr.addScaledVector(uo.sub(e),m))}e.add(jr)}return e}raycast(t,e){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere),qr.applyMatrix4(l),sn.copy(t.ray).recast(t.near),!(qr.containsPoint(sn.origin)===!1&&(sn.intersectSphere(qr,Tl)===null||sn.origin.distanceToSquared(Tl)>(t.far-t.near)**2))&&(yl.copy(l).invert(),sn.copy(t.ray).applyMatrix4(yl),!(i.boundingBox!==null&&sn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let i;const a=this.geometry,l=this.material,h=a.index,u=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,m=a.attributes.normal,_=a.groups,g=a.drawRange;if(h!==null)if(Array.isArray(l))for(let b=0,w=_.length;b<w;b++){const M=_[b],x=l[M.materialIndex],p=Math.max(M.start,g.start),R=Math.min(h.count,Math.min(M.start+M.count,g.start+g.count));for(let A=p,C=R;A<C;A+=3){const D=h.getX(A),I=h.getX(A+1),F=h.getX(A+2);i=Qr(this,x,t,sn,f,d,m,D,I,F),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=M.materialIndex,e.push(i))}}else{const b=Math.max(0,g.start),w=Math.min(h.count,g.start+g.count);for(let M=b,x=w;M<x;M+=3){const p=h.getX(M),R=h.getX(M+1),A=h.getX(M+2);i=Qr(this,l,t,sn,f,d,m,p,R,A),i&&(i.faceIndex=Math.floor(M/3),e.push(i))}}else if(u!==void 0)if(Array.isArray(l))for(let b=0,w=_.length;b<w;b++){const M=_[b],x=l[M.materialIndex],p=Math.max(M.start,g.start),R=Math.min(u.count,Math.min(M.start+M.count,g.start+g.count));for(let A=p,C=R;A<C;A+=3){const D=A,I=A+1,F=A+2;i=Qr(this,x,t,sn,f,d,m,D,I,F),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=M.materialIndex,e.push(i))}}else{const b=Math.max(0,g.start),w=Math.min(u.count,g.start+g.count);for(let M=b,x=w;M<x;M+=3){const p=M,R=M+1,A=M+2;i=Qr(this,l,t,sn,f,d,m,p,R,A),i&&(i.faceIndex=Math.floor(M/3),e.push(i))}}}}function jp(s,t,e,i,a,l,h,u){let f;if(t.side===Ie?f=i.intersectTriangle(h,l,a,!0,u):f=i.intersectTriangle(a,l,h,t.side===On,u),f===null)return null;Jr.copy(u),Jr.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Jr);return d<e.near||d>e.far?null:{distance:d,point:Jr.clone(),object:s}}function Qr(s,t,e,i,a,l,h,u,f,d){s.getVertexPosition(u,yi),s.getVertexPosition(f,Ti),s.getVertexPosition(d,Ci);const m=jp(s,t,e,i,yi,Ti,Ci,Zr);if(m){a&&(Kr.fromBufferAttribute(a,u),Yr.fromBufferAttribute(a,f),$r.fromBufferAttribute(a,d),m.uv=Ze.getInterpolation(Zr,yi,Ti,Ci,Kr,Yr,$r,new ne)),l&&(Kr.fromBufferAttribute(l,u),Yr.fromBufferAttribute(l,f),$r.fromBufferAttribute(l,d),m.uv1=Ze.getInterpolation(Zr,yi,Ti,Ci,Kr,Yr,$r,new ne),m.uv2=m.uv1),h&&(Cl.fromBufferAttribute(h,u),Al.fromBufferAttribute(h,f),Pl.fromBufferAttribute(h,d),m.normal=Ze.getInterpolation(Zr,yi,Ti,Ci,Cl,Al,Pl,new V),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:f,c:d,normal:new V,materialIndex:0};Ze.getNormal(yi,Ti,Ci,_.normal),m.face=_}return m}class wr extends en{constructor(t=1,e=1,i=1,a=1,l=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:l,depthSegments:h};const u=this;a=Math.floor(a),l=Math.floor(l),h=Math.floor(h);const f=[],d=[],m=[],_=[];let g=0,b=0;w("z","y","x",-1,-1,i,e,t,h,l,0),w("z","y","x",1,-1,i,e,-t,h,l,1),w("x","z","y",1,1,t,i,e,a,h,2),w("x","z","y",1,-1,t,i,-e,a,h,3),w("x","y","z",1,-1,t,e,i,a,l,4),w("x","y","z",-1,-1,t,e,-i,a,l,5),this.setIndex(f),this.setAttribute("position",new Ve(d,3)),this.setAttribute("normal",new Ve(m,3)),this.setAttribute("uv",new Ve(_,2));function w(M,x,p,R,A,C,D,I,F,j,S){const L=C/F,et=D/j,tt=C/2,G=D/2,Y=I/2,Q=F+1,ot=j+1;let $=0,z=0;const ut=new V;for(let nt=0;nt<ot;nt++){const Ct=nt*et-G;for(let ct=0;ct<Q;ct++){const q=ct*L-tt;ut[M]=q*R,ut[x]=Ct*A,ut[p]=Y,d.push(ut.x,ut.y,ut.z),ut[M]=0,ut[x]=0,ut[p]=I>0?1:-1,m.push(ut.x,ut.y,ut.z),_.push(ct/F),_.push(1-nt/j),$+=1}}for(let nt=0;nt<j;nt++)for(let Ct=0;Ct<F;Ct++){const ct=g+Ct+Q*nt,q=g+Ct+Q*(nt+1),W=g+(Ct+1)+Q*(nt+1),at=g+(Ct+1)+Q*nt;f.push(ct,q,at),f.push(q,W,at),z+=6}u.addGroup(b,z,S),b+=z,g+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ki(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const a=s[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function Ae(s){const t={};for(let e=0;e<s.length;e++){const i=ki(s[e]);for(const a in i)t[a]=i[a]}return t}function Kp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Mc(s){return s.getRenderTarget()===null?s.outputColorSpace:ln}const Yp={clone:ki,merge:Ae};var $p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$p,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=Kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const h=this.uniforms[a].value;h&&h.isTexture?e.uniforms[a]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[a]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[a]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[a]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[a]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[a]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[a]={type:"m4",value:h.toArray()}:e.uniforms[a]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class wc extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qe extends wc{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,a,l,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,l=-.5*a;const h=this.view;if(this.view!==null&&this.view.enabled){const f=h.fullWidth,d=h.fullHeight;l+=h.offsetX*a/f,e-=h.offsetY*i/d,a*=h.width/f,i*=h.height/d}const u=this.filmOffset;u!==0&&(l+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Pi=1;class Jp extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const a=new qe(Ai,Pi,t,e);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(1,0,0),this.add(a);const l=new qe(Ai,Pi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(-1,0,0),this.add(l);const h=new qe(Ai,Pi,t,e);h.layers=this.layers,h.up.set(0,0,-1),h.lookAt(0,1,0),this.add(h);const u=new qe(Ai,Pi,t,e);u.layers=this.layers,u.up.set(0,0,1),u.lookAt(0,-1,0),this.add(u);const f=new qe(Ai,Pi,t,e);f.layers=this.layers,f.up.set(0,1,0),f.lookAt(0,0,1),this.add(f);const d=new qe(Ai,Pi,t,e);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,-1),this.add(d)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[a,l,h,u,f,d]=this.children,m=t.getRenderTarget(),_=t.toneMapping,g=t.xr.enabled;t.toneMapping=wn,t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,a),t.setRenderTarget(i,1),t.render(e,l),t.setRenderTarget(i,2),t.render(e,h),t.setRenderTarget(i,3),t.render(e,u),t.setRenderTarget(i,4),t.render(e,f),i.texture.generateMipmaps=b,t.setRenderTarget(i,5),t.render(e,d),t.setRenderTarget(m),t.toneMapping=_,t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ec extends ke{constructor(t,e,i,a,l,h,u,f,d,m){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,i,a,l,h,u,f,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qp extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];e.encoding!==void 0&&(fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Qn?Bt:ti),this.texture=new Ec(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new wr(5,5,5),l=new ii({name:"CubemapFromEquirect",uniforms:ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:Fn});l.uniforms.tEquirect.value=e;const h=new an(a,l),u=e.minFilter;return e.minFilter===mr&&(e.minFilter=Xe),new Jp(1,10,this).update(t,h),e.minFilter=u,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,i,a){const l=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,i,a);t.setRenderTarget(l)}}const ho=new V,tf=new V,ef=new Wt;class jn{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=ho.subVectors(i,e).cross(tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ho),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ef.getNormalMatrix(t),a=this.coplanarPoint(ho).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new us,ts=new V;class Sc{constructor(t=new jn,e=new jn,i=new jn,a=new jn,l=new jn,h=new jn){this.planes=[t,e,i,a,l,h]}set(t,e,i,a,l,h){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(a),u[4].copy(l),u[5].copy(h),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,a=i[0],l=i[1],h=i[2],u=i[3],f=i[4],d=i[5],m=i[6],_=i[7],g=i[8],b=i[9],w=i[10],M=i[11],x=i[12],p=i[13],R=i[14],A=i[15];return e[0].setComponents(u-a,_-f,M-g,A-x).normalize(),e[1].setComponents(u+a,_+f,M+g,A+x).normalize(),e[2].setComponents(u+l,_+d,M+b,A+p).normalize(),e[3].setComponents(u-l,_-d,M-b,A-p).normalize(),e[4].setComponents(u-h,_-m,M-w,A-R).normalize(),e[5].setComponents(u+h,_+m,M+w,A+R).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(ts.x=a.normal.x>0?t.max.x:t.min.x,ts.y=a.normal.y>0?t.max.y:t.min.y,ts.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yc(){let s=null,t=!1,e=null,i=null;function a(l,h){e(l,h),i=s.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(a),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){s=l}}}function nf(s,t){const e=t.isWebGL2,i=new WeakMap;function a(d,m){const _=d.array,g=d.usage,b=s.createBuffer();s.bindBuffer(m,b),s.bufferData(m,_,g),d.onUploadCallback();let w;if(_ instanceof Float32Array)w=s.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(_ instanceof Int16Array)w=s.SHORT;else if(_ instanceof Uint32Array)w=s.UNSIGNED_INT;else if(_ instanceof Int32Array)w=s.INT;else if(_ instanceof Int8Array)w=s.BYTE;else if(_ instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:b,type:w,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version}}function l(d,m,_){const g=m.array,b=m.updateRange;s.bindBuffer(_,d),b.count===-1?s.bufferSubData(_,0,g):(e?s.bufferSubData(_,b.offset*g.BYTES_PER_ELEMENT,g,b.offset,b.count):s.bufferSubData(_,b.offset*g.BYTES_PER_ELEMENT,g.subarray(b.offset,b.offset+b.count)),b.count=-1),m.onUploadCallback()}function h(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=i.get(d);m&&(s.deleteBuffer(m.buffer),i.delete(d))}function f(d,m){if(d.isGLBufferAttribute){const g=i.get(d);(!g||g.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);_===void 0?i.set(d,a(d,m)):_.version<d.version&&(l(_.buffer,d,m),_.version=d.version)}return{get:h,remove:u,update:f}}class Ao extends en{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const l=t/2,h=e/2,u=Math.floor(i),f=Math.floor(a),d=u+1,m=f+1,_=t/u,g=e/f,b=[],w=[],M=[],x=[];for(let p=0;p<m;p++){const R=p*g-h;for(let A=0;A<d;A++){const C=A*_-l;w.push(C,-R,0),M.push(0,0,1),x.push(A/u),x.push(1-p/f)}}for(let p=0;p<f;p++)for(let R=0;R<u;R++){const A=R+d*p,C=R+d*(p+1),D=R+1+d*(p+1),I=R+1+d*p;b.push(A,C,I),b.push(C,D,I)}this.setIndex(b),this.setAttribute("position",new Ve(w,3)),this.setAttribute("normal",new Ve(M,3)),this.setAttribute("uv",new Ve(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.width,t.height,t.widthSegments,t.heightSegments)}}var rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf="vec3 transformed = vec3( position );",hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pf=`#ifdef USE_IRIDESCENCE
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
#endif`,ff=`#ifdef USE_BUMPMAP
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ef=`#define PI 3.141592653589793
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
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
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
}`,Gf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
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
#endif`,jf=`#if defined( USE_ENVMAP )
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
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
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
#endif`,Qf=`struct PhysicalMaterial {
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
}`,tm=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,am=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,um=`#if defined( USE_POINTS_UV )
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
#endif`,hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
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
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#ifdef USE_UV
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
#endif`,$m=`#ifdef USE_UV
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
#endif`,Zm=`#ifdef USE_UV
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
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,s_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,a_=`#define DISTANCE
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
}`,l_=`#define DISTANCE
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,h_=`uniform float scale;
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
}`,d_=`uniform vec3 diffuse;
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
}`,p_=`#include <common>
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
}`,f_=`uniform vec3 diffuse;
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
}`,m_=`#define LAMBERT
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
}`,__=`#define LAMBERT
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
}`,v_=`#define MATCAP
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
}`,g_=`#define MATCAP
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
}`,x_=`#define NORMAL
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
}`,b_=`#define NORMAL
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
}`,M_=`#define PHONG
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
}`,w_=`#define PHONG
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
}`,E_=`#define STANDARD
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
}`,S_=`#define STANDARD
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
}`,y_=`#define TOON
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
}`,T_=`#define TOON
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
}`,C_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
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
}`,P_=`#include <common>
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
}`,R_=`uniform vec3 color;
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
}`,L_=`uniform float rotation;
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
}`,D_=`uniform vec3 diffuse;
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
}`,zt={alphamap_fragment:rf,alphamap_pars_fragment:sf,alphatest_fragment:of,alphatest_pars_fragment:af,aomap_fragment:lf,aomap_pars_fragment:cf,begin_vertex:uf,beginnormal_vertex:hf,bsdfs:df,iridescence_fragment:pf,bumpmap_pars_fragment:ff,clipping_planes_fragment:mf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:vf,clipping_planes_vertex:gf,color_fragment:xf,color_pars_fragment:bf,color_pars_vertex:Mf,color_vertex:wf,common:Ef,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:yf,displacementmap_pars_vertex:Tf,displacementmap_vertex:Cf,emissivemap_fragment:Af,emissivemap_pars_fragment:Pf,encodings_fragment:Rf,encodings_pars_fragment:Lf,envmap_fragment:Df,envmap_common_pars_fragment:Uf,envmap_pars_fragment:If,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:jf,envmap_vertex:Ff,fog_vertex:Of,fog_pars_vertex:Bf,fog_fragment:kf,fog_pars_fragment:Vf,gradientmap_pars_fragment:zf,lightmap_fragment:Gf,lightmap_pars_fragment:Hf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:qf,lights_toon_fragment:Kf,lights_toon_pars_fragment:Yf,lights_phong_fragment:$f,lights_phong_pars_fragment:Zf,lights_physical_fragment:Jf,lights_physical_pars_fragment:Qf,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:sm,logdepthbuf_vertex:om,map_fragment:am,map_pars_fragment:lm,map_particle_fragment:cm,map_particle_pars_fragment:um,metalnessmap_fragment:hm,metalnessmap_pars_fragment:dm,morphcolor_vertex:pm,morphnormal_vertex:fm,morphtarget_pars_vertex:mm,morphtarget_vertex:_m,normal_fragment_begin:vm,normal_fragment_maps:gm,normal_pars_fragment:xm,normal_pars_vertex:bm,normal_vertex:Mm,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:Tm,output_fragment:Cm,packing:Am,premultiplied_alpha_fragment:Pm,project_vertex:Rm,dithering_fragment:Lm,dithering_pars_fragment:Dm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Im,shadowmap_pars_fragment:Nm,shadowmap_pars_vertex:Fm,shadowmap_vertex:Om,shadowmask_pars_fragment:Bm,skinbase_vertex:km,skinning_pars_vertex:Vm,skinning_vertex:zm,skinnormal_vertex:Gm,specularmap_fragment:Hm,specularmap_pars_fragment:Wm,tonemapping_fragment:Xm,tonemapping_pars_fragment:qm,transmission_fragment:jm,transmission_pars_fragment:Km,uv_pars_fragment:Ym,uv_pars_vertex:$m,uv_vertex:Zm,worldpos_vertex:Jm,background_vert:Qm,background_frag:t_,backgroundCube_vert:e_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:r_,depth_vert:s_,depth_frag:o_,distanceRGBA_vert:a_,distanceRGBA_frag:l_,equirect_vert:c_,equirect_frag:u_,linedashed_vert:h_,linedashed_frag:d_,meshbasic_vert:p_,meshbasic_frag:f_,meshlambert_vert:m_,meshlambert_frag:__,meshmatcap_vert:v_,meshmatcap_frag:g_,meshnormal_vert:x_,meshnormal_frag:b_,meshphong_vert:M_,meshphong_frag:w_,meshphysical_vert:E_,meshphysical_frag:S_,meshtoon_vert:y_,meshtoon_frag:T_,points_vert:C_,points_frag:A_,shadow_vert:P_,shadow_frag:R_,sprite_vert:L_,sprite_frag:D_},dt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaTest:{value:0}}},on={basic:{uniforms:Ae([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ae([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ee(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ae([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ae([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ae([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new ee(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ae([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ae([dt.points,dt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ae([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ae([dt.common,dt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ae([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ae([dt.sprite,dt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ae([dt.common,dt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ae([dt.lights,dt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};on.physical={uniforms:Ae([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const es={r:0,b:0,g:0};function U_(s,t,e,i,a,l,h){const u=new ee(0);let f=l===!0?0:1,d,m,_=null,g=0,b=null;function w(x,p){let R=!1,A=p.isScene===!0?p.background:null;switch(A&&A.isTexture&&(A=(p.backgroundBlurriness>0?e:t).get(A)),A===null?M(u,f):A&&A.isColor&&(M(A,1),R=!0),s.xr.getEnvironmentBlendMode()){case"opaque":R=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,h),R=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,h),R=!0;break}(s.autoClear||R)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),A&&(A.isCubeTexture||A.mapping===cs)?(m===void 0&&(m=new an(new wr(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:ki(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=A,m.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,m.material.toneMapped=A.colorSpace!==Bt,(_!==A||g!==A.version||b!==s.toneMapping)&&(m.material.needsUpdate=!0,_=A,g=A.version,b=s.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new an(new Ao(2,2),new ii({name:"BackgroundMaterial",uniforms:ki(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=A.colorSpace!==Bt,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||g!==A.version||b!==s.toneMapping)&&(d.material.needsUpdate=!0,_=A,g=A.version,b=s.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null))}function M(x,p){x.getRGB(es,Mc(s)),i.buffers.color.setClear(es.r,es.g,es.b,p,h)}return{getClearColor:function(){return u},setClearColor:function(x,p=1){u.set(x),f=p,M(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(x){f=x,M(u,f)},render:w}}function I_(s,t,e,i){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=i.isWebGL2?null:t.get("OES_vertex_array_object"),h=i.isWebGL2||l!==null,u={},f=x(null);let d=f,m=!1;function _(Y,Q,ot,$,z){let ut=!1;if(h){const nt=M($,ot,Q);d!==nt&&(d=nt,b(d.object)),ut=p(Y,$,ot,z),ut&&R(Y,$,ot,z)}else{const nt=Q.wireframe===!0;(d.geometry!==$.id||d.program!==ot.id||d.wireframe!==nt)&&(d.geometry=$.id,d.program=ot.id,d.wireframe=nt,ut=!0)}z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(ut||m)&&(m=!1,j(Y,Q,ot,$),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function g(){return i.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function b(Y){return i.isWebGL2?s.bindVertexArray(Y):l.bindVertexArrayOES(Y)}function w(Y){return i.isWebGL2?s.deleteVertexArray(Y):l.deleteVertexArrayOES(Y)}function M(Y,Q,ot){const $=ot.wireframe===!0;let z=u[Y.id];z===void 0&&(z={},u[Y.id]=z);let ut=z[Q.id];ut===void 0&&(ut={},z[Q.id]=ut);let nt=ut[$];return nt===void 0&&(nt=x(g()),ut[$]=nt),nt}function x(Y){const Q=[],ot=[],$=[];for(let z=0;z<a;z++)Q[z]=0,ot[z]=0,$[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ot,attributeDivisors:$,object:Y,attributes:{},index:null}}function p(Y,Q,ot,$){const z=d.attributes,ut=Q.attributes;let nt=0;const Ct=ot.getAttributes();for(const ct in Ct)if(Ct[ct].location>=0){const W=z[ct];let at=ut[ct];if(at===void 0&&(ct==="instanceMatrix"&&Y.instanceMatrix&&(at=Y.instanceMatrix),ct==="instanceColor"&&Y.instanceColor&&(at=Y.instanceColor)),W===void 0||W.attribute!==at||at&&W.data!==at.data)return!0;nt++}return d.attributesNum!==nt||d.index!==$}function R(Y,Q,ot,$){const z={},ut=Q.attributes;let nt=0;const Ct=ot.getAttributes();for(const ct in Ct)if(Ct[ct].location>=0){let W=ut[ct];W===void 0&&(ct==="instanceMatrix"&&Y.instanceMatrix&&(W=Y.instanceMatrix),ct==="instanceColor"&&Y.instanceColor&&(W=Y.instanceColor));const at={};at.attribute=W,W&&W.data&&(at.data=W.data),z[ct]=at,nt++}d.attributes=z,d.attributesNum=nt,d.index=$}function A(){const Y=d.newAttributes;for(let Q=0,ot=Y.length;Q<ot;Q++)Y[Q]=0}function C(Y){D(Y,0)}function D(Y,Q){const ot=d.newAttributes,$=d.enabledAttributes,z=d.attributeDivisors;ot[Y]=1,$[Y]===0&&(s.enableVertexAttribArray(Y),$[Y]=1),z[Y]!==Q&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,Q),z[Y]=Q)}function I(){const Y=d.newAttributes,Q=d.enabledAttributes;for(let ot=0,$=Q.length;ot<$;ot++)Q[ot]!==Y[ot]&&(s.disableVertexAttribArray(ot),Q[ot]=0)}function F(Y,Q,ot,$,z,ut){i.isWebGL2===!0&&(ot===s.INT||ot===s.UNSIGNED_INT)?s.vertexAttribIPointer(Y,Q,ot,z,ut):s.vertexAttribPointer(Y,Q,ot,$,z,ut)}function j(Y,Q,ot,$){if(i.isWebGL2===!1&&(Y.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;A();const z=$.attributes,ut=ot.getAttributes(),nt=Q.defaultAttributeValues;for(const Ct in ut){const ct=ut[Ct];if(ct.location>=0){let q=z[Ct];if(q===void 0&&(Ct==="instanceMatrix"&&Y.instanceMatrix&&(q=Y.instanceMatrix),Ct==="instanceColor"&&Y.instanceColor&&(q=Y.instanceColor)),q!==void 0){const W=q.normalized,at=q.itemSize,ft=e.get(q);if(ft===void 0)continue;const N=ft.buffer,Lt=ft.type,Dt=ft.bytesPerElement;if(q.isInterleavedBufferAttribute){const ht=q.data,bt=ht.stride,Yt=q.offset;if(ht.isInstancedInterleavedBuffer){for(let wt=0;wt<ct.locationSize;wt++)D(ct.location+wt,ht.meshPerAttribute);Y.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let wt=0;wt<ct.locationSize;wt++)C(ct.location+wt);s.bindBuffer(s.ARRAY_BUFFER,N);for(let wt=0;wt<ct.locationSize;wt++)F(ct.location+wt,at/ct.locationSize,Lt,W,bt*Dt,(Yt+at/ct.locationSize*wt)*Dt)}else{if(q.isInstancedBufferAttribute){for(let ht=0;ht<ct.locationSize;ht++)D(ct.location+ht,q.meshPerAttribute);Y.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ht=0;ht<ct.locationSize;ht++)C(ct.location+ht);s.bindBuffer(s.ARRAY_BUFFER,N);for(let ht=0;ht<ct.locationSize;ht++)F(ct.location+ht,at/ct.locationSize,Lt,W,at*Dt,at/ct.locationSize*ht*Dt)}}else if(nt!==void 0){const W=nt[Ct];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(ct.location,W);break;case 3:s.vertexAttrib3fv(ct.location,W);break;case 4:s.vertexAttrib4fv(ct.location,W);break;default:s.vertexAttrib1fv(ct.location,W)}}}}I()}function S(){tt();for(const Y in u){const Q=u[Y];for(const ot in Q){const $=Q[ot];for(const z in $)w($[z].object),delete $[z];delete Q[ot]}delete u[Y]}}function L(Y){if(u[Y.id]===void 0)return;const Q=u[Y.id];for(const ot in Q){const $=Q[ot];for(const z in $)w($[z].object),delete $[z];delete Q[ot]}delete u[Y.id]}function et(Y){for(const Q in u){const ot=u[Q];if(ot[Y.id]===void 0)continue;const $=ot[Y.id];for(const z in $)w($[z].object),delete $[z];delete ot[Y.id]}}function tt(){G(),m=!0,d!==f&&(d=f,b(d.object))}function G(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:tt,resetDefaultState:G,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:et,initAttributes:A,enableAttribute:C,disableUnusedAttributes:I}}function N_(s,t,e,i){const a=i.isWebGL2;let l;function h(d){l=d}function u(d,m){s.drawArrays(l,d,m),e.update(m,l,1)}function f(d,m,_){if(_===0)return;let g,b;if(a)g=s,b="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[b](l,d,m,_),e.update(m,l,_)}this.setMode=h,this.render=u,this.renderInstances=f}function F_(s,t,e){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let u=e.precision!==void 0?e.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=h||t.has("WEBGL_draw_buffers"),m=e.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),w=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=h||t.has("OES_texture_float"),D=A&&C,I=h?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:d,getMaxAnisotropy:a,getMaxPrecision:l,precision:u,logarithmicDepthBuffer:m,maxTextures:_,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:w,maxAttributes:M,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:R,vertexTextures:A,floatFragmentTextures:C,floatVertexTextures:D,maxSamples:I}}function O_(s){const t=this;let e=null,i=0,a=!1,l=!1;const h=new jn,u=new Wt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const b=_.length!==0||g||i!==0||a;return a=g,i=_.length,b},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){e=m(_,g,0)},this.setState=function(_,g,b){const w=_.clippingPlanes,M=_.clipIntersection,x=_.clipShadows,p=s.get(_);if(!a||w===null||w.length===0||l&&!x)l?m(null):d();else{const R=l?0:i,A=R*4;let C=p.clippingState||null;f.value=C,C=m(w,g,A,b);for(let D=0;D!==A;++D)C[D]=e[D];p.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(_,g,b,w){const M=_!==null?_.length:0;let x=null;if(M!==0){if(x=f.value,w!==!0||x===null){const p=b+M*4,R=g.matrixWorldInverse;u.getNormalMatrix(R),(x===null||x.length<p)&&(x=new Float32Array(p));for(let A=0,C=b;A!==M;++A,C+=4)h.copy(_[A]).applyMatrix4(R,u),h.normal.toArray(x,C),x[C+3]=h.constant}f.value=x,f.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}function B_(s){let t=new WeakMap;function e(h,u){return u===go?h.mapping=Fi:u===xo&&(h.mapping=Oi),h}function i(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){const u=h.mapping;if(u===go||u===xo)if(t.has(h)){const f=t.get(h).texture;return e(f,h.mapping)}else{const f=h.image;if(f&&f.height>0){const d=new Qp(f.height/2);return d.fromEquirectangularTexture(s,h),t.set(h,d),h.addEventListener("dispose",a),e(d.texture,h.mapping)}else return null}}return h}function a(h){const u=h.target;u.removeEventListener("dispose",a);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function l(){t=new WeakMap}return{get:i,dispose:l}}class k_ extends wc{constructor(t=-1,e=1,i=1,a=-1,l=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=l,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,l,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-t,h=i+t,u=a+e,f=a-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,h=l+d*this.view.width,u-=m*this.view.offsetY,f=u-m*this.view.height}this.projectionMatrix.makeOrthographic(l,h,u,f,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,Rl=[.125,.215,.35,.446,.526,.582],Yn=20,po=new k_,Ll=new ee;let fo=null;const Kn=(1+Math.sqrt(5))/2,Ri=1/Kn,Dl=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Kn,Ri),new V(0,Kn,-Ri),new V(Ri,0,Kn),new V(-Ri,0,Kn),new V(Kn,Ri,0),new V(-Kn,Ri,0)];class Ul{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,a=100){fo=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fo),t.scissorTest=!1,ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fo=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:_r,format:Qe,colorSpace:ln,depthBuffer:!1},a=Il(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V_(l)),this._blurMaterial=z_(l,t,e)}return a}_compileMaterial(t){const e=new an(this._lodPlanes[0],t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,i,a){const u=new qe(90,1,e,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,g=m.toneMapping;m.getClearColor(Ll),m.toneMapping=wn,m.autoClear=!1;const b=new gc({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),w=new an(new wr,b);let M=!1;const x=t.background;x?x.isColor&&(b.color.copy(x),t.background=null,M=!0):(b.color.copy(Ll),M=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(u.up.set(0,f[p],0),u.lookAt(d[p],0,0)):R===1?(u.up.set(0,0,f[p]),u.lookAt(0,d[p],0)):(u.up.set(0,f[p],0),u.lookAt(0,0,d[p]));const A=this._cubeSize;ns(a,R*A,p>2?A:0,A,A),m.setRenderTarget(a),M&&m.render(w,u),m.render(t,u)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=g,m.autoClear=_,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Fi||t.mapping===Oi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nl());const l=a?this._cubemapMaterial:this._equirectMaterial,h=new an(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=t;const f=this._cubeSize;ns(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(h,po)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=Dl[(a-1)%Dl.length];this._blur(t,a-1,a,l,h)}e.autoClear=i}_blur(t,e,i,a,l){const h=this._pingPongRenderTarget;this._halfBlur(t,h,e,i,a,"latitudinal",l),this._halfBlur(h,t,i,i,a,"longitudinal",l)}_halfBlur(t,e,i,a,l,h,u){const f=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new an(this._lodPlanes[a],d),g=d.uniforms,b=this._sizeLods[i]-1,w=isFinite(l)?Math.PI/(2*b):2*Math.PI/(2*Yn-1),M=l/w,x=isFinite(l)?1+Math.floor(m*M):Yn;x>Yn&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Yn}`);const p=[];let R=0;for(let F=0;F<Yn;++F){const j=F/M,S=Math.exp(-j*j/2);p.push(S),F===0?R+=S:F<x&&(R+=2*S)}for(let F=0;F<p.length;F++)p[F]=p[F]/R;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=p,g.latitudinal.value=h==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:A}=this;g.dTheta.value=w,g.mipInt.value=A-i;const C=this._sizeLods[a],D=3*C*(a>A-Di?a-A+Di:0),I=4*(this._cubeSize-C);ns(e,D,I,3*C,2*C),f.setRenderTarget(e),f.render(_,po)}}function V_(s){const t=[],e=[],i=[];let a=s;const l=s-Di+1+Rl.length;for(let h=0;h<l;h++){const u=Math.pow(2,a);e.push(u);let f=1/u;h>s-Di?f=Rl[h-s+Di-1]:h===0&&(f=0),i.push(f);const d=1/(u-2),m=-d,_=1+d,g=[m,m,_,m,_,_,m,m,_,_,m,_],b=6,w=6,M=3,x=2,p=1,R=new Float32Array(M*w*b),A=new Float32Array(x*w*b),C=new Float32Array(p*w*b);for(let I=0;I<b;I++){const F=I%3*2/3-1,j=I>2?0:-1,S=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];R.set(S,M*w*I),A.set(g,x*w*I);const L=[I,I,I,I,I,I];C.set(L,p*w*I)}const D=new en;D.setAttribute("position",new tn(R,M)),D.setAttribute("uv",new tn(A,x)),D.setAttribute("faceIndex",new tn(C,p)),t.push(D),a>Di&&a--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Il(s,t,e){const i=new ni(s,t,e);return i.texture.mapping=cs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ns(s,t,e,i,a){s.viewport.set(t,e,i,a),s.scissor.set(t,e,i,a)}function z_(s,t,e){const i=new Float32Array(Yn),a=new V(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Po(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Nl(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Fl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Po(){return`

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
	`}function G_(s){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===go||f===xo,m=f===Fi||f===Oi;if(d||m)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let _=t.get(u);return e===null&&(e=new Ul(s)),_=d?e.fromEquirectangular(u,_):e.fromCubemap(u,_),t.set(u,_),_.texture}else{if(t.has(u))return t.get(u).texture;{const _=u.image;if(d&&_&&_.height>0||m&&_&&a(_)){e===null&&(e=new Ul(s));const g=d?e.fromEquirectangular(u):e.fromCubemap(u);return t.set(u,g),u.addEventListener("dispose",l),g.texture}else return null}}}return u}function a(u){let f=0;const d=6;for(let m=0;m<d;m++)u[m]!==void 0&&f++;return f===d}function l(u){const f=u.target;f.removeEventListener("dispose",l);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:h}}function H_(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const a=e(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function W_(s,t,e,i){const a={},l=new WeakMap;function h(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const w in g.attributes)t.remove(g.attributes[w]);g.removeEventListener("dispose",h),delete a[g.id];const b=l.get(g);b&&(t.remove(b),l.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(_,g){return a[g.id]===!0||(g.addEventListener("dispose",h),a[g.id]=!0,e.memory.geometries++),g}function f(_){const g=_.attributes;for(const w in g)t.update(g[w],s.ARRAY_BUFFER);const b=_.morphAttributes;for(const w in b){const M=b[w];for(let x=0,p=M.length;x<p;x++)t.update(M[x],s.ARRAY_BUFFER)}}function d(_){const g=[],b=_.index,w=_.attributes.position;let M=0;if(b!==null){const R=b.array;M=b.version;for(let A=0,C=R.length;A<C;A+=3){const D=R[A+0],I=R[A+1],F=R[A+2];g.push(D,I,I,F,F,D)}}else{const R=w.array;M=w.version;for(let A=0,C=R.length/3-1;A<C;A+=3){const D=A+0,I=A+1,F=A+2;g.push(D,I,I,F,F,D)}}const x=new(hc(g)?bc:xc)(g,1);x.version=M;const p=l.get(_);p&&t.remove(p),l.set(_,x)}function m(_){const g=l.get(_);if(g){const b=_.index;b!==null&&g.version<b.version&&d(_)}else d(_);return l.get(_)}return{get:u,update:f,getWireframeAttribute:m}}function X_(s,t,e,i){const a=i.isWebGL2;let l;function h(g){l=g}let u,f;function d(g){u=g.type,f=g.bytesPerElement}function m(g,b){s.drawElements(l,b,u,g*f),e.update(b,l,1)}function _(g,b,w){if(w===0)return;let M,x;if(a)M=s,x="drawElementsInstanced";else if(M=t.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[x](l,b,u,g*f,w),e.update(b,l,w)}this.setMode=h,this.setIndex=d,this.render=m,this.renderInstances=_}function q_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,h,u){switch(e.calls++,h){case s.TRIANGLES:e.triangles+=u*(l/3);break;case s.LINES:e.lines+=u*(l/2);break;case s.LINE_STRIP:e.lines+=u*(l-1);break;case s.LINE_LOOP:e.lines+=u*l;break;case s.POINTS:e.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function a(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function j_(s,t){return s[0]-t[0]}function K_(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Y_(s,t,e){const i={},a=new Float32Array(8),l=new WeakMap,h=new Ee,u=[];for(let d=0;d<8;d++)u[d]=[d,0];function f(d,m,_){const g=d.morphTargetInfluences;if(t.isWebGL2===!0){const w=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,M=w!==void 0?w.length:0;let x=l.get(m);if(x===void 0||x.count!==M){let Q=function(){G.dispose(),l.delete(m),m.removeEventListener("dispose",Q)};var b=Q;x!==void 0&&x.texture.dispose();const A=m.morphAttributes.position!==void 0,C=m.morphAttributes.normal!==void 0,D=m.morphAttributes.color!==void 0,I=m.morphAttributes.position||[],F=m.morphAttributes.normal||[],j=m.morphAttributes.color||[];let S=0;A===!0&&(S=1),C===!0&&(S=2),D===!0&&(S=3);let L=m.attributes.position.count*S,et=1;L>t.maxTextureSize&&(et=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const tt=new Float32Array(L*et*4*M),G=new fc(tt,L,et,M);G.type=Zn,G.needsUpdate=!0;const Y=S*4;for(let ot=0;ot<M;ot++){const $=I[ot],z=F[ot],ut=j[ot],nt=L*et*4*ot;for(let Ct=0;Ct<$.count;Ct++){const ct=Ct*Y;A===!0&&(h.fromBufferAttribute($,Ct),tt[nt+ct+0]=h.x,tt[nt+ct+1]=h.y,tt[nt+ct+2]=h.z,tt[nt+ct+3]=0),C===!0&&(h.fromBufferAttribute(z,Ct),tt[nt+ct+4]=h.x,tt[nt+ct+5]=h.y,tt[nt+ct+6]=h.z,tt[nt+ct+7]=0),D===!0&&(h.fromBufferAttribute(ut,Ct),tt[nt+ct+8]=h.x,tt[nt+ct+9]=h.y,tt[nt+ct+10]=h.z,tt[nt+ct+11]=ut.itemSize===4?h.w:1)}}x={count:M,texture:G,size:new ne(L,et)},l.set(m,x),m.addEventListener("dispose",Q)}let p=0;for(let A=0;A<g.length;A++)p+=g[A];const R=m.morphTargetsRelative?1:1-p;_.getUniforms().setValue(s,"morphTargetBaseInfluence",R),_.getUniforms().setValue(s,"morphTargetInfluences",g),_.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),_.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const w=g===void 0?0:g.length;let M=i[m.id];if(M===void 0||M.length!==w){M=[];for(let C=0;C<w;C++)M[C]=[C,0];i[m.id]=M}for(let C=0;C<w;C++){const D=M[C];D[0]=C,D[1]=g[C]}M.sort(K_);for(let C=0;C<8;C++)C<w&&M[C][1]?(u[C][0]=M[C][0],u[C][1]=M[C][1]):(u[C][0]=Number.MAX_SAFE_INTEGER,u[C][1]=0);u.sort(j_);const x=m.morphAttributes.position,p=m.morphAttributes.normal;let R=0;for(let C=0;C<8;C++){const D=u[C],I=D[0],F=D[1];I!==Number.MAX_SAFE_INTEGER&&F?(x&&m.getAttribute("morphTarget"+C)!==x[I]&&m.setAttribute("morphTarget"+C,x[I]),p&&m.getAttribute("morphNormal"+C)!==p[I]&&m.setAttribute("morphNormal"+C,p[I]),a[C]=F,R+=F):(x&&m.hasAttribute("morphTarget"+C)===!0&&m.deleteAttribute("morphTarget"+C),p&&m.hasAttribute("morphNormal"+C)===!0&&m.deleteAttribute("morphNormal"+C),a[C]=0)}const A=m.morphTargetsRelative?1:1-R;_.getUniforms().setValue(s,"morphTargetBaseInfluence",A),_.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:f}}function $_(s,t,e,i){let a=new WeakMap;function l(f){const d=i.render.frame,m=f.geometry,_=t.get(f,m);return a.get(_)!==d&&(t.update(_),a.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),e.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,s.ARRAY_BUFFER)),_}function h(){a=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:l,dispose:h}}const Tc=new ke,Cc=new fc,Ac=new Op,Pc=new Ec,Ol=[],Bl=[],kl=new Float32Array(16),Vl=new Float32Array(9),zl=new Float32Array(4);function Gi(s,t,e){const i=s[0];if(i<=0||i>0)return s;const a=t*e;let l=Ol[a];if(l===void 0&&(l=new Float32Array(a),Ol[a]=l),t!==0){i.toArray(l,0);for(let h=1,u=0;h!==t;++h)u+=e,s[h].toArray(l,u)}return l}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ds(s,t){let e=Bl[t];e===void 0&&(e=new Int32Array(t),Bl[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Z_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function J_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function Q_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function tv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function ev(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(ve(e,i))return;zl.set(i),s.uniformMatrix2fv(this.addr,!1,zl),ge(e,i)}}function nv(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(ve(e,i))return;Vl.set(i),s.uniformMatrix3fv(this.addr,!1,Vl),ge(e,i)}}function iv(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(ve(e,i))return;kl.set(i),s.uniformMatrix4fv(this.addr,!1,kl),ge(e,i)}}function rv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function sv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function ov(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function av(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function lv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function uv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function hv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function dv(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture2D(t||Tc,a)}function pv(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||Ac,a)}function fv(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||Pc,a)}function mv(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||Cc,a)}function _v(s){switch(s){case 5126:return Z_;case 35664:return J_;case 35665:return Q_;case 35666:return tv;case 35674:return ev;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return rv;case 35667:case 35671:return sv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return uv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return mv}}function vv(s,t){s.uniform1fv(this.addr,t)}function gv(s,t){const e=Gi(t,this.size,2);s.uniform2fv(this.addr,e)}function xv(s,t){const e=Gi(t,this.size,3);s.uniform3fv(this.addr,e)}function bv(s,t){const e=Gi(t,this.size,4);s.uniform4fv(this.addr,e)}function Mv(s,t){const e=Gi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function wv(s,t){const e=Gi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ev(s,t){const e=Gi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Sv(s,t){s.uniform1iv(this.addr,t)}function yv(s,t){s.uniform2iv(this.addr,t)}function Tv(s,t){s.uniform3iv(this.addr,t)}function Cv(s,t){s.uniform4iv(this.addr,t)}function Av(s,t){s.uniform1uiv(this.addr,t)}function Pv(s,t){s.uniform2uiv(this.addr,t)}function Rv(s,t){s.uniform3uiv(this.addr,t)}function Lv(s,t){s.uniform4uiv(this.addr,t)}function Dv(s,t,e){const i=this.cache,a=t.length,l=ds(e,a);ve(i,l)||(s.uniform1iv(this.addr,l),ge(i,l));for(let h=0;h!==a;++h)e.setTexture2D(t[h]||Tc,l[h])}function Uv(s,t,e){const i=this.cache,a=t.length,l=ds(e,a);ve(i,l)||(s.uniform1iv(this.addr,l),ge(i,l));for(let h=0;h!==a;++h)e.setTexture3D(t[h]||Ac,l[h])}function Iv(s,t,e){const i=this.cache,a=t.length,l=ds(e,a);ve(i,l)||(s.uniform1iv(this.addr,l),ge(i,l));for(let h=0;h!==a;++h)e.setTextureCube(t[h]||Pc,l[h])}function Nv(s,t,e){const i=this.cache,a=t.length,l=ds(e,a);ve(i,l)||(s.uniform1iv(this.addr,l),ge(i,l));for(let h=0;h!==a;++h)e.setTexture2DArray(t[h]||Cc,l[h])}function Fv(s){switch(s){case 5126:return vv;case 35664:return gv;case 35665:return xv;case 35666:return bv;case 35674:return Mv;case 35675:return wv;case 35676:return Ev;case 5124:case 35670:return Sv;case 35667:case 35671:return yv;case 35668:case 35672:return Tv;case 35669:case 35673:return Cv;case 5125:return Av;case 36294:return Pv;case 36295:return Rv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Nv}}class Ov{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=_v(e.type)}}class Bv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Fv(e.type)}}class kv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let l=0,h=a.length;l!==h;++l){const u=a[l];u.setValue(t,e[u.id],i)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Gl(s,t){s.seq.push(t),s.map[t.id]=t}function Vv(s,t,e){const i=s.name,a=i.length;for(mo.lastIndex=0;;){const l=mo.exec(i),h=mo.lastIndex;let u=l[1];const f=l[2]==="]",d=l[3];if(f&&(u=u|0),d===void 0||d==="["&&h+2===a){Gl(e,d===void 0?new Ov(u,s,t):new Bv(u,s,t));break}else{let _=e.map[u];_===void 0&&(_=new kv(u),Gl(e,_)),e=_}}}class ss{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=t.getActiveUniform(e,a),h=t.getUniformLocation(e,l.name);Vv(l,h,this)}}setValue(t,e,i,a){const l=this.map[e];l!==void 0&&l.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let l=0,h=e.length;l!==h;++l){const u=e[l],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,l=t.length;a!==l;++a){const h=t[a];h.id in e&&i.push(h)}return i}}function Hl(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}let zv=0;function Gv(s,t){const e=s.split(`
`),i=[],a=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let h=a;h<l;h++){const u=h+1;i.push(`${u===t?">":" "} ${u}: ${e[h]}`)}return i.join(`
`)}function Hv(s){switch(s){case ln:return["Linear","( value )"];case Bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Wl(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),a=s.getShaderInfoLog(t).trim();if(i&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const h=parseInt(l[1]);return e.toUpperCase()+`

`+a+`

`+Gv(s.getShaderSource(t),h)}else return a}function Wv(s,t){const e=Hv(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Xv(s,t){let e;switch(t){case ip:e="Linear";break;case rp:e="Reinhard";break;case sp:e="OptimizedCineon";break;case op:e="ACESFilmic";break;case ap:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function qv(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function jv(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Kv(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=s.getActiveAttrib(t,a),h=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),e[h]={type:l.type,location:s.getAttribLocation(t,h),locationSize:u}}return e}function dr(s){return s!==""}function Xl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(s){return s.replace(Yv,$v)}function $v(s,t){const e=zt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return So(e)}const Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(s){return s.replace(Zv,Jv)}function Jv(s,t,e,i){let a="";for(let l=parseInt(t);l<parseInt(e);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Kl(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===nc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function tg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fi:case Oi:t="ENVMAP_TYPE_CUBE";break;case cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function ng(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sc:t="ENVMAP_BLENDING_MULTIPLY";break;case ep:t="ENVMAP_BLENDING_MIX";break;case np:t="ENVMAP_BLENDING_ADD";break}return t}function ig(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function rg(s,t,e,i){const a=s.getContext(),l=e.defines;let h=e.vertexShader,u=e.fragmentShader;const f=Qv(e),d=tg(e),m=eg(e),_=ng(e),g=ig(e),b=e.isWebGL2?"":qv(e),w=jv(l),M=a.createProgram();let x,p,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=[w].filter(dr).join(`
`),x.length>0&&(x+=`
`),p=[b,w].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(x=[Kl(e),"#define SHADER_NAME "+e.shaderName,w,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[b,Kl(e),"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",e.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?zt.tonemapping_pars_fragment:"",e.toneMapping!==wn?Xv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.encodings_pars_fragment,Wv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),h=So(h),h=Xl(h,e),h=ql(h,e),u=So(u),u=Xl(u,e),u=ql(u,e),h=jl(h),u=jl(u),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=R+x+h,C=R+p+u,D=Hl(a,a.VERTEX_SHADER,A),I=Hl(a,a.FRAGMENT_SHADER,C);if(a.attachShader(M,D),a.attachShader(M,I),e.index0AttributeName!==void 0?a.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M),s.debug.checkShaderErrors){const S=a.getProgramInfoLog(M).trim(),L=a.getShaderInfoLog(D).trim(),et=a.getShaderInfoLog(I).trim();let tt=!0,G=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,M,D,I);else{const Y=Wl(a,D,"vertex"),Q=Wl(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+Y+`
`+Q)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(L===""||et==="")&&(G=!1);G&&(this.diagnostics={runnable:tt,programLog:S,vertexShader:{log:L,prefix:x},fragmentShader:{log:et,prefix:p}})}a.deleteShader(D),a.deleteShader(I);let F;this.getUniforms=function(){return F===void 0&&(F=new ss(a,M)),F};let j;return this.getAttributes=function(){return j===void 0&&(j=Kv(a,M)),j},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.name=e.shaderName,this.id=zv++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=I,this}let sg=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),l=this._getShaderStage(i),h=this._getShaderCacheForMaterial(t);return h.has(a)===!1&&(h.add(a),a.usedTimes++),h.has(l)===!1&&(h.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ag(t),e.set(t,i)),i}}class ag{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}}function lg(s,t,e,i,a,l,h){const u=new _c,f=new og,d=[],m=a.isWebGL2,_=a.logarithmicDepthBuffer,g=a.vertexTextures;let b=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return S===1?"uv1":S===2?"uv2":S===3?"uv3":"uv"}function x(S,L,et,tt,G){const Y=tt.fog,Q=G.geometry,ot=S.isMeshStandardMaterial?tt.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||ot),z=$&&$.mapping===cs?$.image.height:null,ut=w[S.type];S.precision!==null&&(b=a.getMaxPrecision(S.precision),b!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",b,"instead."));const nt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ct=nt!==void 0?nt.length:0;let ct=0;Q.morphAttributes.position!==void 0&&(ct=1),Q.morphAttributes.normal!==void 0&&(ct=2),Q.morphAttributes.color!==void 0&&(ct=3);let q,W,at,ft;if(ut){const Jt=on[ut];q=Jt.vertexShader,W=Jt.fragmentShader}else q=S.vertexShader,W=S.fragmentShader,f.update(S),at=f.getVertexShaderID(S),ft=f.getFragmentShaderID(S);const N=s.getRenderTarget(),Lt=G.isInstancedMesh===!0,Dt=!!S.map,ht=!!S.matcap,bt=!!$,Yt=!!S.aoMap,wt=!!S.lightMap,kt=!!S.bumpMap,ie=!!S.normalMap,te=!!S.displacementMap,ae=!!S.emissiveMap,he=!!S.metalnessMap,qt=!!S.roughnessMap,re=S.clearcoat>0,Se=S.iridescence>0,T=S.sheen>0,E=S.transmission>0,H=re&&!!S.clearcoatMap,rt=re&&!!S.clearcoatNormalMap,lt=re&&!!S.clearcoatRoughnessMap,pt=Se&&!!S.iridescenceMap,Pt=Se&&!!S.iridescenceThicknessMap,_t=T&&!!S.sheenColorMap,Z=T&&!!S.sheenRoughnessMap,Mt=!!S.specularMap,yt=!!S.specularColorMap,Tt=!!S.specularIntensityMap,vt=E&&!!S.transmissionMap,gt=E&&!!S.thicknessMap,Nt=!!S.gradientMap,Xt=!!S.alphaMap,le=S.alphaTest>0,U=!!S.extensions,X=!!Q.attributes.uv1,it=!!Q.attributes.uv2,mt=!!Q.attributes.uv3;return{isWebGL2:m,shaderID:ut,shaderName:S.type,vertexShader:q,fragmentShader:W,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:ft,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:b,instancing:Lt,instancingColor:Lt&&G.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:N===null?s.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ln,map:Dt,matcap:ht,envMap:bt,envMapMode:bt&&$.mapping,envMapCubeUVHeight:z,aoMap:Yt,lightMap:wt,bumpMap:kt,normalMap:ie,displacementMap:g&&te,emissiveMap:ae,normalMapObjectSpace:ie&&S.normalMapType===Tp,normalMapTangentSpace:ie&&S.normalMapType===cc,metalnessMap:he,roughnessMap:qt,clearcoat:re,clearcoatMap:H,clearcoatNormalMap:rt,clearcoatRoughnessMap:lt,iridescence:Se,iridescenceMap:pt,iridescenceThicknessMap:Pt,sheen:T,sheenColorMap:_t,sheenRoughnessMap:Z,specularMap:Mt,specularColorMap:yt,specularIntensityMap:Tt,transmission:E,transmissionMap:vt,thicknessMap:gt,gradientMap:Nt,opaque:S.transparent===!1&&S.blending===Ui,alphaMap:Xt,alphaTest:le,combine:S.combine,mapUv:Dt&&M(S.map.channel),aoMapUv:Yt&&M(S.aoMap.channel),lightMapUv:wt&&M(S.lightMap.channel),bumpMapUv:kt&&M(S.bumpMap.channel),normalMapUv:ie&&M(S.normalMap.channel),displacementMapUv:te&&M(S.displacementMap.channel),emissiveMapUv:ae&&M(S.emissiveMap.channel),metalnessMapUv:he&&M(S.metalnessMap.channel),roughnessMapUv:qt&&M(S.roughnessMap.channel),clearcoatMapUv:H&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:rt&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:Z&&M(S.sheenRoughnessMap.channel),specularMapUv:Mt&&M(S.specularMap.channel),specularColorMapUv:yt&&M(S.specularColorMap.channel),specularIntensityMapUv:Tt&&M(S.specularIntensityMap.channel),transmissionMapUv:vt&&M(S.transmissionMap.channel),thicknessMapUv:gt&&M(S.thicknessMap.channel),alphaMapUv:Xt&&M(S.alphaMap.channel),vertexTangents:ie&&!!Q.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:X,vertexUv2s:it,vertexUv3s:mt,pointsUvs:G.isPoints===!0&&!!Q.attributes.uv&&(Dt||Xt),fog:!!Y,useFog:S.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:G.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:ct,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&et.length>0,shadowMapType:s.shadowMap.type,toneMapping:S.toneMapped?s.toneMapping:wn,useLegacyLights:s.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===Ie,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:U&&S.extensions.derivatives===!0,extensionFragDepth:U&&S.extensions.fragDepth===!0,extensionDrawBuffers:U&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(const et in S.defines)L.push(et),L.push(S.defines[et]);return S.isRawShaderMaterial===!1&&(R(L,S),A(L,S),L.push(s.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function R(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function A(S,L){u.disableAll(),L.isWebGL2&&u.enable(0),L.supportsVertexTextures&&u.enable(1),L.instancing&&u.enable(2),L.instancingColor&&u.enable(3),L.matcap&&u.enable(4),L.envMap&&u.enable(5),L.normalMapObjectSpace&&u.enable(6),L.normalMapTangentSpace&&u.enable(7),L.clearcoat&&u.enable(8),L.iridescence&&u.enable(9),L.alphaTest&&u.enable(10),L.vertexColors&&u.enable(11),L.vertexAlphas&&u.enable(12),L.vertexUv1s&&u.enable(13),L.vertexUv2s&&u.enable(14),L.vertexUv3s&&u.enable(15),L.vertexTangents&&u.enable(16),S.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.skinning&&u.enable(4),L.morphTargets&&u.enable(5),L.morphNormals&&u.enable(6),L.morphColors&&u.enable(7),L.premultipliedAlpha&&u.enable(8),L.shadowMapEnabled&&u.enable(9),L.useLegacyLights&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),S.push(u.mask)}function C(S){const L=w[S.type];let et;if(L){const tt=on[L];et=Yp.clone(tt.uniforms)}else et=S.uniforms;return et}function D(S,L){let et;for(let tt=0,G=d.length;tt<G;tt++){const Y=d[tt];if(Y.cacheKey===L){et=Y,++et.usedTimes;break}}return et===void 0&&(et=new rg(s,L,S,l),d.push(et)),et}function I(S){if(--S.usedTimes===0){const L=d.indexOf(S);d[L]=d[d.length-1],d.pop(),S.destroy()}}function F(S){f.remove(S)}function j(){f.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:C,acquireProgram:D,releaseProgram:I,releaseShaderCache:F,programs:d,dispose:j}}function cg(){let s=new WeakMap;function t(l){let h=s.get(l);return h===void 0&&(h={},s.set(l,h)),h}function e(l){s.delete(l)}function i(l,h,u){s.get(l)[h]=u}function a(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:a}}function ug(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Yl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function $l(){const s=[];let t=0;const e=[],i=[],a=[];function l(){t=0,e.length=0,i.length=0,a.length=0}function h(_,g,b,w,M,x){let p=s[t];return p===void 0?(p={id:_.id,object:_,geometry:g,material:b,groupOrder:w,renderOrder:_.renderOrder,z:M,group:x},s[t]=p):(p.id=_.id,p.object=_,p.geometry=g,p.material=b,p.groupOrder=w,p.renderOrder=_.renderOrder,p.z=M,p.group=x),t++,p}function u(_,g,b,w,M,x){const p=h(_,g,b,w,M,x);b.transmission>0?i.push(p):b.transparent===!0?a.push(p):e.push(p)}function f(_,g,b,w,M,x){const p=h(_,g,b,w,M,x);b.transmission>0?i.unshift(p):b.transparent===!0?a.unshift(p):e.unshift(p)}function d(_,g){e.length>1&&e.sort(_||ug),i.length>1&&i.sort(g||Yl),a.length>1&&a.sort(g||Yl)}function m(){for(let _=t,g=s.length;_<g;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:i,transparent:a,init:l,push:u,unshift:f,finish:m,sort:d}}function hg(){let s=new WeakMap;function t(i,a){const l=s.get(i);let h;return l===void 0?(h=new $l,s.set(i,[h])):a>=l.length?(h=new $l,l.push(h)):h=l[a],h}function e(){s=new WeakMap}return{get:t,dispose:e}}function dg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new ee};break;case"SpotLight":e={position:new V,direction:new V,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new V,halfWidth:new V,halfHeight:new V};break}return s[t.id]=e,e}}}function pg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let fg=0;function mg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _g(s,t){const e=new dg,i=pg(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)a.probe.push(new V);const l=new V,h=new Me,u=new Me;function f(m,_){let g=0,b=0,w=0;for(let et=0;et<9;et++)a.probe[et].set(0,0,0);let M=0,x=0,p=0,R=0,A=0,C=0,D=0,I=0,F=0,j=0;m.sort(mg);const S=_===!0?Math.PI:1;for(let et=0,tt=m.length;et<tt;et++){const G=m[et],Y=G.color,Q=G.intensity,ot=G.distance,$=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=Y.r*Q*S,b+=Y.g*Q*S,w+=Y.b*Q*S;else if(G.isLightProbe)for(let z=0;z<9;z++)a.probe[z].addScaledVector(G.sh.coefficients[z],Q);else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity*S),G.castShadow){const ut=G.shadow,nt=i.get(G);nt.shadowBias=ut.bias,nt.shadowNormalBias=ut.normalBias,nt.shadowRadius=ut.radius,nt.shadowMapSize=ut.mapSize,a.directionalShadow[M]=nt,a.directionalShadowMap[M]=$,a.directionalShadowMatrix[M]=G.shadow.matrix,C++}a.directional[M]=z,M++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(Y).multiplyScalar(Q*S),z.distance=ot,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,a.spot[p]=z;const ut=G.shadow;if(G.map&&(a.spotLightMap[F]=G.map,F++,ut.updateMatrices(G),G.castShadow&&j++),a.spotLightMatrix[p]=ut.matrix,G.castShadow){const nt=i.get(G);nt.shadowBias=ut.bias,nt.shadowNormalBias=ut.normalBias,nt.shadowRadius=ut.radius,nt.shadowMapSize=ut.mapSize,a.spotShadow[p]=nt,a.spotShadowMap[p]=$,I++}p++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(Y).multiplyScalar(Q),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),a.rectArea[R]=z,R++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity*S),z.distance=G.distance,z.decay=G.decay,G.castShadow){const ut=G.shadow,nt=i.get(G);nt.shadowBias=ut.bias,nt.shadowNormalBias=ut.normalBias,nt.shadowRadius=ut.radius,nt.shadowMapSize=ut.mapSize,nt.shadowCameraNear=ut.camera.near,nt.shadowCameraFar=ut.camera.far,a.pointShadow[x]=nt,a.pointShadowMap[x]=$,a.pointShadowMatrix[x]=G.shadow.matrix,D++}a.point[x]=z,x++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(Q*S),z.groundColor.copy(G.groundColor).multiplyScalar(Q*S),a.hemi[A]=z,A++}}R>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=dt.LTC_FLOAT_1,a.rectAreaLTC2=dt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=dt.LTC_HALF_1,a.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=g,a.ambient[1]=b,a.ambient[2]=w;const L=a.hash;(L.directionalLength!==M||L.pointLength!==x||L.spotLength!==p||L.rectAreaLength!==R||L.hemiLength!==A||L.numDirectionalShadows!==C||L.numPointShadows!==D||L.numSpotShadows!==I||L.numSpotMaps!==F)&&(a.directional.length=M,a.spot.length=p,a.rectArea.length=R,a.point.length=x,a.hemi.length=A,a.directionalShadow.length=C,a.directionalShadowMap.length=C,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=I,a.spotShadowMap.length=I,a.directionalShadowMatrix.length=C,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=I+F-j,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=j,L.directionalLength=M,L.pointLength=x,L.spotLength=p,L.rectAreaLength=R,L.hemiLength=A,L.numDirectionalShadows=C,L.numPointShadows=D,L.numSpotShadows=I,L.numSpotMaps=F,a.version=fg++)}function d(m,_){let g=0,b=0,w=0,M=0,x=0;const p=_.matrixWorldInverse;for(let R=0,A=m.length;R<A;R++){const C=m[R];if(C.isDirectionalLight){const D=a.directional[g];D.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(p),g++}else if(C.isSpotLight){const D=a.spot[w];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(p),w++}else if(C.isRectAreaLight){const D=a.rectArea[M];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(p),u.identity(),h.copy(C.matrixWorld),h.premultiply(p),u.extractRotation(h),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),M++}else if(C.isPointLight){const D=a.point[b];D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(p),b++}else if(C.isHemisphereLight){const D=a.hemi[x];D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(p),x++}}}return{setup:f,setupView:d,state:a}}function Zl(s,t){const e=new _g(s,t),i=[],a=[];function l(){i.length=0,a.length=0}function h(_){i.push(_)}function u(_){a.push(_)}function f(_){e.setup(i,_)}function d(_){e.setupView(i,_)}return{init:l,state:{lightsArray:i,shadowsArray:a,lights:e},setupLights:f,setupLightsView:d,pushLight:h,pushShadow:u}}function vg(s,t){let e=new WeakMap;function i(l,h=0){const u=e.get(l);let f;return u===void 0?(f=new Zl(s,t),e.set(l,[f])):h>=u.length?(f=new Zl(s,t),u.push(f)):f=u[h],f}function a(){e=new WeakMap}return{get:i,dispose:a}}class gg extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xg extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
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
}`;function wg(s,t,e){let i=new Sc;const a=new ne,l=new ne,h=new Ee,u=new gg({depthPacking:yp}),f=new xg,d={},m=e.maxTextureSize,_={[On]:Ie,[Ie]:On,[Mn]:Mn},g=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:bg,fragmentShader:Mg}),b=g.clone();b.defines.HORIZONTAL_PASS=1;const w=new en;w.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new an(w,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let p=this.type;this.render=function(D,I,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const j=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),et=s.state;et.setBlending(Fn),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const tt=p!==bn&&this.type===bn,G=p===bn&&this.type!==bn;for(let Y=0,Q=D.length;Y<Q;Y++){const ot=D[Y],$=ot.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const z=$.getFrameExtents();if(a.multiply(z),l.copy($.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/z.x),a.x=l.x*z.x,$.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/z.y),a.y=l.y*z.y,$.mapSize.y=l.y)),$.map===null||tt===!0||G===!0){const nt=this.type!==bn?{minFilter:Pe,magFilter:Pe}:{};$.map!==null&&$.map.dispose(),$.map=new ni(a.x,a.y,nt),$.map.texture.name=ot.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const ut=$.getViewportCount();for(let nt=0;nt<ut;nt++){const Ct=$.getViewport(nt);h.set(l.x*Ct.x,l.y*Ct.y,l.x*Ct.z,l.y*Ct.w),et.viewport(h),$.updateMatrices(ot,nt),i=$.getFrustum(),C(I,F,$.camera,ot,this.type)}$.isPointLightShadow!==!0&&this.type===bn&&R($,F),$.needsUpdate=!1}p=this.type,x.needsUpdate=!1,s.setRenderTarget(j,S,L)};function R(D,I){const F=t.update(M);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,b.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ni(a.x,a.y)),g.uniforms.shadow_pass.value=D.map.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(I,null,F,g,M,null),b.uniforms.shadow_pass.value=D.mapPass.texture,b.uniforms.resolution.value=D.mapSize,b.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(I,null,F,b,M,null)}function A(D,I,F,j){let S=null;const L=F.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)S=L;else if(S=F.isPointLight===!0?f:u,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const et=S.uuid,tt=I.uuid;let G=d[et];G===void 0&&(G={},d[et]=G);let Y=G[tt];Y===void 0&&(Y=S.clone(),G[tt]=Y),S=Y}if(S.visible=I.visible,S.wireframe=I.wireframe,j===bn?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:_[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const et=s.properties.get(S);et.light=F}return S}function C(D,I,F,j,S){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===bn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,D.matrixWorld);const tt=t.update(D),G=D.material;if(Array.isArray(G)){const Y=tt.groups;for(let Q=0,ot=Y.length;Q<ot;Q++){const $=Y[Q],z=G[$.materialIndex];if(z&&z.visible){const ut=A(D,z,j,S);s.renderBufferDirect(F,null,tt,ut,D,$)}}}else if(G.visible){const Y=A(D,G,j,S);s.renderBufferDirect(F,null,tt,Y,D,null)}}const et=D.children;for(let tt=0,G=et.length;tt<G;tt++)C(et[tt],I,F,j,S)}}function Eg(s,t,e){const i=e.isWebGL2;function a(){let U=!1;const X=new Ee;let it=null;const mt=new Ee(0,0,0,0);return{setMask:function(xt){it!==xt&&!U&&(s.colorMask(xt,xt,xt,xt),it=xt)},setLocked:function(xt){U=xt},setClear:function(xt,Jt,Qt,de,ze){ze===!0&&(xt*=de,Jt*=de,Qt*=de),X.set(xt,Jt,Qt,de),mt.equals(X)===!1&&(s.clearColor(xt,Jt,Qt,de),mt.copy(X))},reset:function(){U=!1,it=null,mt.set(-1,0,0,0)}}}function l(){let U=!1,X=null,it=null,mt=null;return{setTest:function(xt){xt?N(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(xt){X!==xt&&!U&&(s.depthMask(xt),X=xt)},setFunc:function(xt){if(it!==xt){switch(xt){case Kd:s.depthFunc(s.NEVER);break;case Yd:s.depthFunc(s.ALWAYS);break;case $d:s.depthFunc(s.LESS);break;case vo:s.depthFunc(s.LEQUAL);break;case Zd:s.depthFunc(s.EQUAL);break;case Jd:s.depthFunc(s.GEQUAL);break;case Qd:s.depthFunc(s.GREATER);break;case tp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=xt}},setLocked:function(xt){U=xt},setClear:function(xt){mt!==xt&&(s.clearDepth(xt),mt=xt)},reset:function(){U=!1,X=null,it=null,mt=null}}}function h(){let U=!1,X=null,it=null,mt=null,xt=null,Jt=null,Qt=null,de=null,ze=null;return{setTest:function(jt){U||(jt?N(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(jt){X!==jt&&!U&&(s.stencilMask(jt),X=jt)},setFunc:function(jt,ye,fe){(it!==jt||mt!==ye||xt!==fe)&&(s.stencilFunc(jt,ye,fe),it=jt,mt=ye,xt=fe)},setOp:function(jt,ye,fe){(Jt!==jt||Qt!==ye||de!==fe)&&(s.stencilOp(jt,ye,fe),Jt=jt,Qt=ye,de=fe)},setLocked:function(jt){U=jt},setClear:function(jt){ze!==jt&&(s.clearStencil(jt),ze=jt)},reset:function(){U=!1,X=null,it=null,mt=null,xt=null,Jt=null,Qt=null,de=null,ze=null}}}const u=new a,f=new l,d=new h,m=new WeakMap,_=new WeakMap;let g={},b={},w=new WeakMap,M=[],x=null,p=!1,R=null,A=null,C=null,D=null,I=null,F=null,j=null,S=!1,L=null,et=null,tt=null,G=null,Y=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,$=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),ot=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ot=$>=2);let ut=null,nt={};const Ct=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),q=new Ee().fromArray(Ct),W=new Ee().fromArray(ct);function at(U,X,it,mt){const xt=new Uint8Array(4),Jt=s.createTexture();s.bindTexture(U,Jt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<it;Qt++)i&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(X,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(X+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return Jt}const ft={};ft[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ft[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),N(s.DEPTH_TEST),f.setFunc(vo),te(!1),ae(Fa),N(s.CULL_FACE),kt(Fn);function N(U){g[U]!==!0&&(s.enable(U),g[U]=!0)}function Lt(U){g[U]!==!1&&(s.disable(U),g[U]=!1)}function Dt(U,X){return b[U]!==X?(s.bindFramebuffer(U,X),b[U]=X,i&&(U===s.DRAW_FRAMEBUFFER&&(b[s.FRAMEBUFFER]=X),U===s.FRAMEBUFFER&&(b[s.DRAW_FRAMEBUFFER]=X)),!0):!1}function ht(U,X){let it=M,mt=!1;if(U)if(it=w.get(X),it===void 0&&(it=[],w.set(X,it)),U.isWebGLMultipleRenderTargets){const xt=U.texture;if(it.length!==xt.length||it[0]!==s.COLOR_ATTACHMENT0){for(let Jt=0,Qt=xt.length;Jt<Qt;Jt++)it[Jt]=s.COLOR_ATTACHMENT0+Jt;it.length=xt.length,mt=!0}}else it[0]!==s.COLOR_ATTACHMENT0&&(it[0]=s.COLOR_ATTACHMENT0,mt=!0);else it[0]!==s.BACK&&(it[0]=s.BACK,mt=!0);mt&&(e.isWebGL2?s.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function bt(U){return x!==U?(s.useProgram(U),x=U,!0):!1}const Yt={[Li]:s.FUNC_ADD,[Od]:s.FUNC_SUBTRACT,[Bd]:s.FUNC_REVERSE_SUBTRACT};if(i)Yt[Va]=s.MIN,Yt[za]=s.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(Yt[Va]=U.MIN_EXT,Yt[za]=U.MAX_EXT)}const wt={[kd]:s.ZERO,[Vd]:s.ONE,[zd]:s.SRC_COLOR,[ic]:s.SRC_ALPHA,[jd]:s.SRC_ALPHA_SATURATE,[Xd]:s.DST_COLOR,[Hd]:s.DST_ALPHA,[Gd]:s.ONE_MINUS_SRC_COLOR,[rc]:s.ONE_MINUS_SRC_ALPHA,[qd]:s.ONE_MINUS_DST_COLOR,[Wd]:s.ONE_MINUS_DST_ALPHA};function kt(U,X,it,mt,xt,Jt,Qt,de){if(U===Fn){p===!0&&(Lt(s.BLEND),p=!1);return}if(p===!1&&(N(s.BLEND),p=!0),U!==Fd){if(U!==R||de!==S){if((A!==Li||I!==Li)&&(s.blendEquation(s.FUNC_ADD),A=Li,I=Li),de)switch(U){case Ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oa:s.blendFunc(s.ONE,s.ONE);break;case Ba:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ka:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ba:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ka:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}C=null,D=null,F=null,j=null,R=U,S=de}return}xt=xt||X,Jt=Jt||it,Qt=Qt||mt,(X!==A||xt!==I)&&(s.blendEquationSeparate(Yt[X],Yt[xt]),A=X,I=xt),(it!==C||mt!==D||Jt!==F||Qt!==j)&&(s.blendFuncSeparate(wt[it],wt[mt],wt[Jt],wt[Qt]),C=it,D=mt,F=Jt,j=Qt),R=U,S=!1}function ie(U,X){U.side===Mn?Lt(s.CULL_FACE):N(s.CULL_FACE);let it=U.side===Ie;X&&(it=!it),te(it),U.blending===Ui&&U.transparent===!1?kt(Fn):kt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),f.setFunc(U.depthFunc),f.setTest(U.depthTest),f.setMask(U.depthWrite),u.setMask(U.colorWrite);const mt=U.stencilWrite;d.setTest(mt),mt&&(d.setMask(U.stencilWriteMask),d.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),d.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),qt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?N(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(U){L!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),L=U)}function ae(U){U!==Ud?(N(s.CULL_FACE),U!==et&&(U===Fa?s.cullFace(s.BACK):U===Id?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),et=U}function he(U){U!==tt&&(ot&&s.lineWidth(U),tt=U)}function qt(U,X,it){U?(N(s.POLYGON_OFFSET_FILL),(G!==X||Y!==it)&&(s.polygonOffset(X,it),G=X,Y=it)):Lt(s.POLYGON_OFFSET_FILL)}function re(U){U?N(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function Se(U){U===void 0&&(U=s.TEXTURE0+Q-1),ut!==U&&(s.activeTexture(U),ut=U)}function T(U,X,it){it===void 0&&(ut===null?it=s.TEXTURE0+Q-1:it=ut);let mt=nt[it];mt===void 0&&(mt={type:void 0,texture:void 0},nt[it]=mt),(mt.type!==U||mt.texture!==X)&&(ut!==it&&(s.activeTexture(it),ut=it),s.bindTexture(U,X||ft[U]),mt.type=U,mt.texture=X)}function E(){const U=nt[ut];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function H(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(U){q.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),q.copy(U))}function gt(U){W.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),W.copy(U))}function Nt(U,X){let it=_.get(X);it===void 0&&(it=new WeakMap,_.set(X,it));let mt=it.get(U);mt===void 0&&(mt=s.getUniformBlockIndex(X,U.name),it.set(U,mt))}function Xt(U,X){const mt=_.get(X).get(U);m.get(X)!==mt&&(s.uniformBlockBinding(X,mt,U.__bindingPointIndex),m.set(X,mt))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ut=null,nt={},b={},w=new WeakMap,M=[],x=null,p=!1,R=null,A=null,C=null,D=null,I=null,F=null,j=null,S=!1,L=null,et=null,tt=null,G=null,Y=null,q.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:N,disable:Lt,bindFramebuffer:Dt,drawBuffers:ht,useProgram:bt,setBlending:kt,setMaterial:ie,setFlipSided:te,setCullFace:ae,setLineWidth:he,setPolygonOffset:qt,setScissorTest:re,activeTexture:Se,bindTexture:T,unbindTexture:E,compressedTexImage2D:H,compressedTexImage3D:rt,texImage2D:yt,texImage3D:Tt,updateUBOMapping:Nt,uniformBlockBinding:Xt,texStorage2D:Z,texStorage3D:Mt,texSubImage2D:lt,texSubImage3D:pt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:_t,scissor:vt,viewport:gt,reset:le}}function Sg(s,t,e,i,a,l,h){const u=a.isWebGL2,f=a.maxTextures,d=a.maxCubemapSize,m=a.maxTextureSize,_=a.maxSamples,g=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,b=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let M;const x=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(T,E){return p?new OffscreenCanvas(T,E):as("canvas")}function A(T,E,H,rt){let lt=1;if((T.width>rt||T.height>rt)&&(lt=rt/Math.max(T.width,T.height)),lt<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const pt=E?Pp:Math.floor,Pt=pt(lt*T.width),_t=pt(lt*T.height);M===void 0&&(M=R(Pt,_t));const Z=H?R(Pt,_t):M;return Z.width=Pt,Z.height=_t,Z.getContext("2d").drawImage(T,0,0,Pt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Pt+"x"+_t+")."),Z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function C(T){return fl(T.width)&&fl(T.height)}function D(T){return u?!1:T.wrapS!==Je||T.wrapT!==Je||T.minFilter!==Pe&&T.minFilter!==Xe}function I(T,E){return T.generateMipmaps&&E&&T.minFilter!==Pe&&T.minFilter!==Xe}function F(T){s.generateMipmap(T)}function j(T,E,H,rt,lt=!1){if(u===!1)return E;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pt=E;return E===s.RED&&(H===s.FLOAT&&(pt=s.R32F),H===s.HALF_FLOAT&&(pt=s.R16F),H===s.UNSIGNED_BYTE&&(pt=s.R8)),E===s.RG&&(H===s.FLOAT&&(pt=s.RG32F),H===s.HALF_FLOAT&&(pt=s.RG16F),H===s.UNSIGNED_BYTE&&(pt=s.RG8)),E===s.RGBA&&(H===s.FLOAT&&(pt=s.RGBA32F),H===s.HALF_FLOAT&&(pt=s.RGBA16F),H===s.UNSIGNED_BYTE&&(pt=rt===Bt&&lt===!1?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)),(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function S(T,E,H){return I(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Pe&&T.minFilter!==Xe?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function L(T){return T===Pe||T===Ga||T===Vs?s.NEAREST:s.LINEAR}function et(T){const E=T.target;E.removeEventListener("dispose",et),G(E),E.isVideoTexture&&w.delete(E)}function tt(T){const E=T.target;E.removeEventListener("dispose",tt),Q(E)}function G(T){const E=i.get(T);if(E.__webglInit===void 0)return;const H=T.source,rt=x.get(H);if(rt){const lt=rt[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&Y(T),Object.keys(rt).length===0&&x.delete(H)}i.remove(T)}function Y(T){const E=i.get(T);s.deleteTexture(E.__webglTexture);const H=T.source,rt=x.get(H);delete rt[E.__cacheKey],h.memory.textures--}function Q(T){const E=T.texture,H=i.get(T),rt=i.get(E);if(rt.__webglTexture!==void 0&&(s.deleteTexture(rt.__webglTexture),h.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++)s.deleteFramebuffer(H.__webglFramebuffer[lt]),H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[lt]);else{if(s.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let lt=0;lt<H.__webglColorRenderbuffer.length;lt++)H.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[lt]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let lt=0,pt=E.length;lt<pt;lt++){const Pt=i.get(E[lt]);Pt.__webglTexture&&(s.deleteTexture(Pt.__webglTexture),h.memory.textures--),i.remove(E[lt])}i.remove(E),i.remove(T)}let ot=0;function $(){ot=0}function z(){const T=ot;return T>=f&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+f),ot+=1,T}function ut(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function nt(T,E){const H=i.get(T);if(T.isVideoTexture&&re(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const rt=T.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(H,T,E);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+E)}function Ct(T,E){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Lt(H,T,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+E)}function ct(T,E){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Lt(H,T,E);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+E)}function q(T,E){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Dt(H,T,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+E)}const W={[bo]:s.REPEAT,[Je]:s.CLAMP_TO_EDGE,[Mo]:s.MIRRORED_REPEAT},at={[Pe]:s.NEAREST,[Ga]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[Xe]:s.LINEAR,[lp]:s.LINEAR_MIPMAP_NEAREST,[mr]:s.LINEAR_MIPMAP_LINEAR};function ft(T,E,H){if(H?(s.texParameteri(T,s.TEXTURE_WRAP_S,W[E.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,W[E.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,W[E.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,at[E.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,at[E.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==Je||E.wrapT!==Je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,L(E.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,L(E.minFilter)),E.minFilter!==Pe&&E.minFilter!==Xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const rt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Pe||E.minFilter!==Vs&&E.minFilter!==mr||E.type===Zn&&t.has("OES_texture_float_linear")===!1||u===!1&&E.type===_r&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(s.texParameterf(T,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function N(T,E){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",et));const rt=E.source;let lt=x.get(rt);lt===void 0&&(lt={},x.set(rt,lt));const pt=ut(E);if(pt!==T.__cacheKey){lt[pt]===void 0&&(lt[pt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,H=!0),lt[pt].usedTimes++;const Pt=lt[T.__cacheKey];Pt!==void 0&&(lt[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&Y(E)),T.__cacheKey=pt,T.__webglTexture=lt[pt].texture}return H}function Lt(T,E,H){let rt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(rt=s.TEXTURE_3D);const lt=N(T,E),pt=E.source;e.bindTexture(rt,T.__webglTexture,s.TEXTURE0+H);const Pt=i.get(pt);if(pt.version!==Pt.__version||lt===!0){e.activeTexture(s.TEXTURE0+H),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const _t=D(E)&&C(E.image)===!1;let Z=A(E.image,_t,!1,m);Z=Se(E,Z);const Mt=C(Z)||u,yt=l.convert(E.format,E.colorSpace);let Tt=l.convert(E.type),vt=j(E.internalFormat,yt,Tt,E.colorSpace);ft(rt,E,Mt);let gt;const Nt=E.mipmaps,Xt=u&&E.isVideoTexture!==!0,le=Pt.__version===void 0||lt===!0,U=S(E,Z,Mt);if(E.isDepthTexture)vt=s.DEPTH_COMPONENT,u?E.type===Zn?vt=s.DEPTH_COMPONENT32F:E.type===$n?vt=s.DEPTH_COMPONENT24:E.type===Ii?vt=s.DEPTH24_STENCIL8:vt=s.DEPTH_COMPONENT16:E.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Jn&&vt===s.DEPTH_COMPONENT&&E.type!==ac&&E.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=$n,Tt=l.convert(E.type)),E.format===Bi&&vt===s.DEPTH_COMPONENT&&(vt=s.DEPTH_STENCIL,E.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ii,Tt=l.convert(E.type))),le&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,vt,Z.width,Z.height):e.texImage2D(s.TEXTURE_2D,0,vt,Z.width,Z.height,0,yt,Tt,null));else if(E.isDataTexture)if(Nt.length>0&&Mt){Xt&&le&&e.texStorage2D(s.TEXTURE_2D,U,vt,Nt[0].width,Nt[0].height);for(let X=0,it=Nt.length;X<it;X++)gt=Nt[X],Xt?e.texSubImage2D(s.TEXTURE_2D,X,0,0,gt.width,gt.height,yt,Tt,gt.data):e.texImage2D(s.TEXTURE_2D,X,vt,gt.width,gt.height,0,yt,Tt,gt.data);E.generateMipmaps=!1}else Xt?(le&&e.texStorage2D(s.TEXTURE_2D,U,vt,Z.width,Z.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Z.width,Z.height,yt,Tt,Z.data)):e.texImage2D(s.TEXTURE_2D,0,vt,Z.width,Z.height,0,yt,Tt,Z.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xt&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,U,vt,Nt[0].width,Nt[0].height,Z.depth);for(let X=0,it=Nt.length;X<it;X++)gt=Nt[X],E.format!==Qe?yt!==null?Xt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,Z.depth,yt,gt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,vt,gt.width,gt.height,Z.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,gt.width,gt.height,Z.depth,yt,Tt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,vt,gt.width,gt.height,Z.depth,0,yt,Tt,gt.data)}else{Xt&&le&&e.texStorage2D(s.TEXTURE_2D,U,vt,Nt[0].width,Nt[0].height);for(let X=0,it=Nt.length;X<it;X++)gt=Nt[X],E.format!==Qe?yt!==null?Xt?e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,gt.width,gt.height,yt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,X,vt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(s.TEXTURE_2D,X,0,0,gt.width,gt.height,yt,Tt,gt.data):e.texImage2D(s.TEXTURE_2D,X,vt,gt.width,gt.height,0,yt,Tt,gt.data)}else if(E.isDataArrayTexture)Xt?(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,U,vt,Z.width,Z.height,Z.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,yt,Tt,Z.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,Z.width,Z.height,Z.depth,0,yt,Tt,Z.data);else if(E.isData3DTexture)Xt?(le&&e.texStorage3D(s.TEXTURE_3D,U,vt,Z.width,Z.height,Z.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,yt,Tt,Z.data)):e.texImage3D(s.TEXTURE_3D,0,vt,Z.width,Z.height,Z.depth,0,yt,Tt,Z.data);else if(E.isFramebufferTexture){if(le)if(Xt)e.texStorage2D(s.TEXTURE_2D,U,vt,Z.width,Z.height);else{let X=Z.width,it=Z.height;for(let mt=0;mt<U;mt++)e.texImage2D(s.TEXTURE_2D,mt,vt,X,it,0,yt,Tt,null),X>>=1,it>>=1}}else if(Nt.length>0&&Mt){Xt&&le&&e.texStorage2D(s.TEXTURE_2D,U,vt,Nt[0].width,Nt[0].height);for(let X=0,it=Nt.length;X<it;X++)gt=Nt[X],Xt?e.texSubImage2D(s.TEXTURE_2D,X,0,0,yt,Tt,gt):e.texImage2D(s.TEXTURE_2D,X,vt,yt,Tt,gt);E.generateMipmaps=!1}else Xt?(le&&e.texStorage2D(s.TEXTURE_2D,U,vt,Z.width,Z.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Tt,Z)):e.texImage2D(s.TEXTURE_2D,0,vt,yt,Tt,Z);I(E,Mt)&&F(rt),Pt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Dt(T,E,H){if(E.image.length!==6)return;const rt=N(T,E),lt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+H);const pt=i.get(lt);if(lt.version!==pt.__version||rt===!0){e.activeTexture(s.TEXTURE0+H),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,_t=E.image[0]&&E.image[0].isDataTexture,Z=[];for(let X=0;X<6;X++)!Pt&&!_t?Z[X]=A(E.image[X],!1,!0,d):Z[X]=_t?E.image[X].image:E.image[X],Z[X]=Se(E,Z[X]);const Mt=Z[0],yt=C(Mt)||u,Tt=l.convert(E.format,E.colorSpace),vt=l.convert(E.type),gt=j(E.internalFormat,Tt,vt,E.colorSpace),Nt=u&&E.isVideoTexture!==!0,Xt=pt.__version===void 0||rt===!0;let le=S(E,Mt,yt);ft(s.TEXTURE_CUBE_MAP,E,yt);let U;if(Pt){Nt&&Xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,le,gt,Mt.width,Mt.height);for(let X=0;X<6;X++){U=Z[X].mipmaps;for(let it=0;it<U.length;it++){const mt=U[it];E.format!==Qe?Tt!==null?Nt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,it,0,0,mt.width,mt.height,Tt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,it,gt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,it,0,0,mt.width,mt.height,Tt,vt,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,it,gt,mt.width,mt.height,0,Tt,vt,mt.data)}}}else{U=E.mipmaps,Nt&&Xt&&(U.length>0&&le++,e.texStorage2D(s.TEXTURE_CUBE_MAP,le,gt,Z[0].width,Z[0].height));for(let X=0;X<6;X++)if(_t){Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Z[X].width,Z[X].height,Tt,vt,Z[X].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,gt,Z[X].width,Z[X].height,0,Tt,vt,Z[X].data);for(let it=0;it<U.length;it++){const xt=U[it].image[X].image;Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,it+1,0,0,xt.width,xt.height,Tt,vt,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,it+1,gt,xt.width,xt.height,0,Tt,vt,xt.data)}}else{Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Tt,vt,Z[X]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,gt,Tt,vt,Z[X]);for(let it=0;it<U.length;it++){const mt=U[it];Nt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,it+1,0,0,Tt,vt,mt.image[X]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,it+1,gt,Tt,vt,mt.image[X])}}}I(E,yt)&&F(s.TEXTURE_CUBE_MAP),pt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function ht(T,E,H,rt,lt){const pt=l.convert(H.format,H.colorSpace),Pt=l.convert(H.type),_t=j(H.internalFormat,pt,Pt,H.colorSpace);i.get(E).__hasExternalTextures||(lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,0,_t,E.width,E.height,E.depth,0,pt,Pt,null):e.texImage2D(lt,0,_t,E.width,E.height,0,pt,Pt,null)),e.bindFramebuffer(s.FRAMEBUFFER,T),qt(E)?g.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,lt,i.get(H).__webglTexture,0,he(E)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,lt,i.get(H).__webglTexture,0),e.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(T,E,H){if(s.bindRenderbuffer(s.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let rt=s.DEPTH_COMPONENT16;if(H||qt(E)){const lt=E.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Zn?rt=s.DEPTH_COMPONENT32F:lt.type===$n&&(rt=s.DEPTH_COMPONENT24));const pt=he(E);qt(E)?g.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,rt,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,rt,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,rt,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const rt=he(E);H&&qt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,E.width,E.height):qt(E)?g.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const rt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let lt=0;lt<rt.length;lt++){const pt=rt[lt],Pt=l.convert(pt.format,pt.colorSpace),_t=l.convert(pt.type),Z=j(pt.internalFormat,Pt,_t,pt.colorSpace),Mt=he(E);H&&qt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,Z,E.width,E.height):qt(E)?g.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt,Z,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Z,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Yt(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),nt(E.depthTexture,0);const rt=i.get(E.depthTexture).__webglTexture,lt=he(E);if(E.depthTexture.format===Jn)qt(E)?g.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(E.depthTexture.format===Bi)qt(E)?g.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function wt(T){const E=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Yt(E.__webglFramebuffer,T)}else if(H){E.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[rt]),E.__webglDepthbuffer[rt]=s.createRenderbuffer(),bt(E.__webglDepthbuffer[rt],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),bt(E.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(T,E,H){const rt=i.get(T);E!==void 0&&ht(rt.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),H!==void 0&&wt(T)}function ie(T){const E=T.texture,H=i.get(T),rt=i.get(E);T.addEventListener("dispose",tt),T.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=E.version,h.memory.textures++);const lt=T.isWebGLCubeRenderTarget===!0,pt=T.isWebGLMultipleRenderTargets===!0,Pt=C(T)||u;if(lt){H.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)H.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(H.__webglFramebuffer=s.createFramebuffer(),pt)if(a.drawBuffers){const _t=T.texture;for(let Z=0,Mt=_t.length;Z<Mt;Z++){const yt=i.get(_t[Z]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&T.samples>0&&qt(T)===!1){const _t=pt?E:[E];H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<_t.length;Z++){const Mt=_t[Z];H.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);const yt=l.convert(Mt.format,Mt.colorSpace),Tt=l.convert(Mt.type),vt=j(Mt.internalFormat,yt,Tt,Mt.colorSpace,T.isXRRenderTarget===!0),gt=he(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,vt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),ft(s.TEXTURE_CUBE_MAP,E,Pt);for(let _t=0;_t<6;_t++)ht(H.__webglFramebuffer[_t],T,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t);I(E,Pt)&&F(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){const _t=T.texture;for(let Z=0,Mt=_t.length;Z<Mt;Z++){const yt=_t[Z],Tt=i.get(yt);e.bindTexture(s.TEXTURE_2D,Tt.__webglTexture),ft(s.TEXTURE_2D,yt,Pt),ht(H.__webglFramebuffer,T,yt,s.COLOR_ATTACHMENT0+Z,s.TEXTURE_2D),I(yt,Pt)&&F(s.TEXTURE_2D)}e.unbindTexture()}else{let _t=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(u?_t=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,rt.__webglTexture),ft(_t,E,Pt),ht(H.__webglFramebuffer,T,E,s.COLOR_ATTACHMENT0,_t),I(E,Pt)&&F(_t),e.unbindTexture()}T.depthBuffer&&wt(T)}function te(T){const E=C(T)||u,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let rt=0,lt=H.length;rt<lt;rt++){const pt=H[rt];if(I(pt,E)){const Pt=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_t=i.get(pt).__webglTexture;e.bindTexture(Pt,_t),F(Pt),e.unbindTexture()}}}function ae(T){if(u&&T.samples>0&&qt(T)===!1){const E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,rt=T.height;let lt=s.COLOR_BUFFER_BIT;const pt=[],Pt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=i.get(T),Z=T.isWebGLMultipleRenderTargets===!0;if(Z)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){pt.push(s.COLOR_ATTACHMENT0+Mt),T.depthBuffer&&pt.push(Pt);const yt=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(yt===!1&&(T.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),Z&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]),yt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Pt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Pt])),Z){const Tt=i.get(E[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,H,rt,0,0,H,rt,lt,s.NEAREST),b&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[Mt]);const yt=i.get(E[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function he(T){return Math.min(_,T.samples)}function qt(T){const E=i.get(T);return u&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(T){const E=h.render.frame;w.get(T)!==E&&(w.set(T,E),T.update())}function Se(T,E){const H=T.colorSpace,rt=T.format,lt=T.type;return T.isCompressedTexture===!0||T.format===wo||H!==ln&&H!==ti&&(H===Bt?u===!1?t.has("EXT_sRGB")===!0&&rt===Qe?(T.format=wo,T.minFilter=Xe,T.generateMipmaps=!1):E=dc.sRGBToLinear(E):(rt!==Qe||lt!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=z,this.resetTextureUnits=$,this.setTexture2D=nt,this.setTexture2DArray=Ct,this.setTexture3D=ct,this.setTextureCube=q,this.rebindTextures=kt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=qt}function yg(s,t,e){const i=e.isWebGL2;function a(l,h=ti){let u;if(l===ei)return s.UNSIGNED_BYTE;if(l===dp)return s.UNSIGNED_SHORT_4_4_4_4;if(l===pp)return s.UNSIGNED_SHORT_5_5_5_1;if(l===cp)return s.BYTE;if(l===up)return s.SHORT;if(l===ac)return s.UNSIGNED_SHORT;if(l===hp)return s.INT;if(l===$n)return s.UNSIGNED_INT;if(l===Zn)return s.FLOAT;if(l===_r)return i?s.HALF_FLOAT:(u=t.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(l===fp)return s.ALPHA;if(l===Qe)return s.RGBA;if(l===mp)return s.LUMINANCE;if(l===_p)return s.LUMINANCE_ALPHA;if(l===Jn)return s.DEPTH_COMPONENT;if(l===Bi)return s.DEPTH_STENCIL;if(l===wo)return u=t.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(l===vp)return s.RED;if(l===gp)return s.RED_INTEGER;if(l===xp)return s.RG;if(l===bp)return s.RG_INTEGER;if(l===Mp)return s.RGBA_INTEGER;if(l===zs||l===Gs||l===Hs||l===Ws)if(h===Bt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(l===zs)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Gs)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Hs)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Ws)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(l===zs)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Gs)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Hs)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Ws)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Ha||l===Wa||l===Xa||l===qa)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(l===Ha)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Wa)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Xa)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===qa)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===wp)return u=t.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===ja||l===Ka)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(l===ja)return h===Bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(l===Ka)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===Ya||l===$a||l===Za||l===Ja||l===Qa||l===tl||l===el||l===nl||l===il||l===rl||l===sl||l===ol||l===al||l===ll)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(l===Ya)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===$a)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Za)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Ja)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Qa)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===tl)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===el)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===nl)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===il)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===rl)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===sl)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===ol)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===al)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===ll)return h===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Xs)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(l===Xs)return h===Bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(l===Ep||l===cl||l===ul||l===hl)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(l===Xs)return u.COMPRESSED_RED_RGTC1_EXT;if(l===cl)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===ul)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===hl)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Ii?i?s.UNSIGNED_INT_24_8:(u=t.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:a}}class Tg extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pr extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cg={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,l=null,h=null;const u=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const M of t.hand.values()){const x=e.getJointPose(M,i),p=this._getHandJoint(d,M);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const m=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=m.position.distanceTo(_.position),b=.02,w=.005;d.inputState.pinching&&g>b+w?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=b-w&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return u!==null&&(u.visible=a!==null),f!==null&&(f.visible=l!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new pr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Ag extends ke{constructor(t,e,i,a,l,h,u,f,d,m){if(m=m!==void 0?m:Jn,m!==Jn&&m!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===Jn&&(i=$n),i===void 0&&m===Bi&&(i=Ii),super(null,a,l,h,u,f,m,i,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:Pe,this.minFilter=f!==void 0?f:Pe,this.flipY=!1,this.generateMipmaps=!1}}class Pg extends Vi{constructor(t,e){super();const i=this;let a=null,l=1,h=null,u="local-floor",f=1,d=null,m=null,_=null,g=null,b=null,w=null;const M=e.getContextAttributes();let x=null,p=null;const R=[],A=[],C=new Set,D=new Map,I=new qe;I.layers.enable(1),I.viewport=new Ee;const F=new qe;F.layers.enable(2),F.viewport=new Ee;const j=[I,F],S=new Tg;S.layers.enable(1),S.layers.enable(2);let L=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let W=R[q];return W===void 0&&(W=new _o,R[q]=W),W.getTargetRaySpace()},this.getControllerGrip=function(q){let W=R[q];return W===void 0&&(W=new _o,R[q]=W),W.getGripSpace()},this.getHand=function(q){let W=R[q];return W===void 0&&(W=new _o,R[q]=W),W.getHandSpace()};function tt(q){const W=A.indexOf(q.inputSource);if(W===-1)return;const at=R[W];at!==void 0&&(at.update(q.inputSource,q.frame,d||h),at.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){a.removeEventListener("select",tt),a.removeEventListener("selectstart",tt),a.removeEventListener("selectend",tt),a.removeEventListener("squeeze",tt),a.removeEventListener("squeezestart",tt),a.removeEventListener("squeezeend",tt),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",Y);for(let q=0;q<R.length;q++){const W=A[q];W!==null&&(A[q]=null,R[q].disconnect(W))}L=null,et=null,t.setRenderTarget(x),b=null,g=null,_=null,a=null,p=null,ct.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){u=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(q){d=q},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(x=t.getRenderTarget(),a.addEventListener("select",tt),a.addEventListener("selectstart",tt),a.addEventListener("selectend",tt),a.addEventListener("squeeze",tt),a.addEventListener("squeezestart",tt),a.addEventListener("squeezeend",tt),a.addEventListener("end",G),a.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await e.makeXRCompatible(),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const W={antialias:a.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:l};b=new XRWebGLLayer(a,e,W),a.updateRenderState({baseLayer:b}),p=new ni(b.framebufferWidth,b.framebufferHeight,{format:Qe,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let W=null,at=null,ft=null;M.depth&&(ft=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=M.stencil?Bi:Jn,at=M.stencil?Ii:$n);const N={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:l};_=new XRWebGLBinding(a,e),g=_.createProjectionLayer(N),a.updateRenderState({layers:[g]}),p=new ni(g.textureWidth,g.textureHeight,{format:Qe,type:ei,depthTexture:new Ag(g.textureWidth,g.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0});const Lt=t.properties.get(p);Lt.__ignoreDepthValues=g.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(f),d=null,h=await a.requestReferenceSpace(u),ct.setContext(a),ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function Y(q){for(let W=0;W<q.removed.length;W++){const at=q.removed[W],ft=A.indexOf(at);ft>=0&&(A[ft]=null,R[ft].disconnect(at))}for(let W=0;W<q.added.length;W++){const at=q.added[W];let ft=A.indexOf(at);if(ft===-1){for(let Lt=0;Lt<R.length;Lt++)if(Lt>=A.length){A.push(at),ft=Lt;break}else if(A[Lt]===null){A[Lt]=at,ft=Lt;break}if(ft===-1)break}const N=R[ft];N&&N.connect(at)}}const Q=new V,ot=new V;function $(q,W,at){Q.setFromMatrixPosition(W.matrixWorld),ot.setFromMatrixPosition(at.matrixWorld);const ft=Q.distanceTo(ot),N=W.projectionMatrix.elements,Lt=at.projectionMatrix.elements,Dt=N[14]/(N[10]-1),ht=N[14]/(N[10]+1),bt=(N[9]+1)/N[5],Yt=(N[9]-1)/N[5],wt=(N[8]-1)/N[0],kt=(Lt[8]+1)/Lt[0],ie=Dt*wt,te=Dt*kt,ae=ft/(-wt+kt),he=ae*-wt;W.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(he),q.translateZ(ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const qt=Dt+ae,re=ht+ae,Se=ie-he,T=te+(ft-he),E=bt*ht/re*qt,H=Yt*ht/re*qt;q.projectionMatrix.makePerspective(Se,T,E,H,qt,re),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function z(q,W){W===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(W.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;S.near=F.near=I.near=q.near,S.far=F.far=I.far=q.far,(L!==S.near||et!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,et=S.far);const W=q.parent,at=S.cameras;z(S,W);for(let ft=0;ft<at.length;ft++)z(at[ft],W);at.length===2?$(S,I,F):S.projectionMatrix.copy(I.projectionMatrix),ut(q,S,W)};function ut(q,W,at){at===null?q.matrix.copy(W.matrixWorld):(q.matrix.copy(at.matrixWorld),q.matrix.invert(),q.matrix.multiply(W.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0);const ft=q.children;for(let N=0,Lt=ft.length;N<Lt;N++)ft[N].updateMatrixWorld(!0);q.projectionMatrix.copy(W.projectionMatrix),q.projectionMatrixInverse.copy(W.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Eo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(g===null&&b===null))return f},this.setFoveation=function(q){f=q,g!==null&&(g.fixedFoveation=q),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=q)},this.getPlanes=function(){return C};let nt=null;function Ct(q,W){if(m=W.getViewerPose(d||h),w=W,m!==null){const at=m.views;b!==null&&(t.setRenderTargetFramebuffer(p,b.framebuffer),t.setRenderTarget(p));let ft=!1;at.length!==S.cameras.length&&(S.cameras.length=0,ft=!0);for(let N=0;N<at.length;N++){const Lt=at[N];let Dt=null;if(b!==null)Dt=b.getViewport(Lt);else{const bt=_.getViewSubImage(g,Lt);Dt=bt.viewport,N===0&&(t.setRenderTargetTextures(p,bt.colorTexture,g.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(p))}let ht=j[N];ht===void 0&&(ht=new qe,ht.layers.enable(N),ht.viewport=new Ee,j[N]=ht),ht.matrix.fromArray(Lt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Lt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),N===0&&(S.matrix.copy(ht.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ft===!0&&S.cameras.push(ht)}}for(let at=0;at<R.length;at++){const ft=A[at],N=R[at];ft!==null&&N!==void 0&&N.update(ft,W,d||h)}if(nt&&nt(q,W),W.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:W.detectedPlanes});let at=null;for(const ft of C)W.detectedPlanes.has(ft)||(at===null&&(at=[]),at.push(ft));if(at!==null)for(const ft of at)C.delete(ft),D.delete(ft),i.dispatchEvent({type:"planeremoved",data:ft});for(const ft of W.detectedPlanes)if(!C.has(ft))C.add(ft),D.set(ft,W.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ft});else{const N=D.get(ft);ft.lastChangedTime>N&&(D.set(ft,ft.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ft}))}}w=null}const ct=new yc;ct.setAnimationLoop(Ct),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}}function Rg(s,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function i(x,p){p.color.getRGB(x.fogColor.value,Mc(s)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function a(x,p,R,A,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?l(x,p):p.isMeshToonMaterial?(l(x,p),_(x,p)):p.isMeshPhongMaterial?(l(x,p),m(x,p)):p.isMeshStandardMaterial?(l(x,p),g(x,p),p.isMeshPhysicalMaterial&&b(x,p,C)):p.isMeshMatcapMaterial?(l(x,p),w(x,p)):p.isMeshDepthMaterial?l(x,p):p.isMeshDistanceMaterial?(l(x,p),M(x,p)):p.isMeshNormalMaterial?l(x,p):p.isLineBasicMaterial?(h(x,p),p.isLineDashedMaterial&&u(x,p)):p.isPointsMaterial?f(x,p,R,A):p.isSpriteMaterial?d(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function l(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===Ie&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===Ie&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const R=t.get(p).envMap;if(R&&(x.envMap.value=R,x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap){x.lightMap.value=p.lightMap;const A=s.useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=p.lightMapIntensity*A,e(p.lightMap,x.lightMapTransform)}p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function h(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function u(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function f(x,p,R,A){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*R,x.scale.value=A*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function d(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function m(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function _(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function g(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),t.get(p).envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function b(x,p,R){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ie&&x.clearcoatNormalScale.value.negate())),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,p){p.matcap&&(x.matcap.value=p.matcap)}function M(x,p){const R=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Lg(s,t,e,i){let a={},l={},h=[];const u=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(R,A){const C=A.program;i.uniformBlockBinding(R,C)}function d(R,A){let C=a[R.id];C===void 0&&(w(R),C=m(R),a[R.id]=C,R.addEventListener("dispose",x));const D=A.program;i.updateUBOMapping(R,D);const I=t.render.frame;l[R.id]!==I&&(g(R),l[R.id]=I)}function m(R){const A=_();R.__bindingPointIndex=A;const C=s.createBuffer(),D=R.__size,I=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,D,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,C),C}function _(){for(let R=0;R<u;R++)if(h.indexOf(R)===-1)return h.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const A=a[R.id],C=R.uniforms,D=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let I=0,F=C.length;I<F;I++){const j=C[I];if(b(j,I,D)===!0){const S=j.__offset,L=Array.isArray(j.value)?j.value:[j.value];let et=0;for(let tt=0;tt<L.length;tt++){const G=L[tt],Y=M(G);typeof G=="number"?(j.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,S+et,j.__data)):G.isMatrix3?(j.__data[0]=G.elements[0],j.__data[1]=G.elements[1],j.__data[2]=G.elements[2],j.__data[3]=G.elements[0],j.__data[4]=G.elements[3],j.__data[5]=G.elements[4],j.__data[6]=G.elements[5],j.__data[7]=G.elements[0],j.__data[8]=G.elements[6],j.__data[9]=G.elements[7],j.__data[10]=G.elements[8],j.__data[11]=G.elements[0]):(G.toArray(j.__data,et),et+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,S,j.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(R,A,C){const D=R.value;if(C[A]===void 0){if(typeof D=="number")C[A]=D;else{const I=Array.isArray(D)?D:[D],F=[];for(let j=0;j<I.length;j++)F.push(I[j].clone());C[A]=F}return!0}else if(typeof D=="number"){if(C[A]!==D)return C[A]=D,!0}else{const I=Array.isArray(C[A])?C[A]:[C[A]],F=Array.isArray(D)?D:[D];for(let j=0;j<I.length;j++){const S=I[j];if(S.equals(F[j])===!1)return S.copy(F[j]),!0}}return!1}function w(R){const A=R.uniforms;let C=0;const D=16;let I=0;for(let F=0,j=A.length;F<j;F++){const S=A[F],L={boundary:0,storage:0},et=Array.isArray(S.value)?S.value:[S.value];for(let tt=0,G=et.length;tt<G;tt++){const Y=et[tt],Q=M(Y);L.boundary+=Q.boundary,L.storage+=Q.storage}if(S.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=C,F>0){I=C%D;const tt=D-I;I!==0&&tt-L.boundary<0&&(C+=D-I,S.__offset=C)}C+=L.storage}return I=C%D,I>0&&(C+=D-I),R.__size=C,R.__cache={},this}function M(R){const A={boundary:0,storage:0};return typeof R=="number"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function x(R){const A=R.target;A.removeEventListener("dispose",x);const C=h.indexOf(A.__bindingPointIndex);h.splice(C,1),s.deleteBuffer(a[A.id]),delete a[A.id],delete l[A.id]}function p(){for(const R in a)s.deleteBuffer(a[R]);h=[],a={},l={}}return{bind:f,update:d,dispose:p}}function Dg(){const s=as("canvas");return s.style.display="block",s}class Rc{constructor(t={}){const{canvas:e=Dg(),context:i=null,depth:a=!0,stencil:l=!0,alpha:h=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=t;this.isWebGLRenderer=!0;let g;i!==null?g=i.getContextAttributes().alpha:g=h;let b=null,w=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Bt,this.useLegacyLights=!0,this.toneMapping=wn,this.toneMappingExposure=1;const p=this;let R=!1,A=0,C=0,D=null,I=-1,F=null;const j=new Ee,S=new Ee;let L=null,et=e.width,tt=e.height,G=1,Y=null,Q=null;const ot=new Ee(0,0,et,tt),$=new Ee(0,0,et,tt);let z=!1;const ut=new Sc;let nt=!1,Ct=!1,ct=null;const q=new Me,W=new V,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ft(){return D===null?G:1}let N=i;function Lt(y,k){for(let K=0;K<y.length;K++){const B=y[K],J=e.getContext(B,k);if(J!==null)return J}return null}try{const y={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Co}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",Xt,!1),N===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),N=Lt(k,y),N===null)throw Lt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Dt,ht,bt,Yt,wt,kt,ie,te,ae,he,qt,re,Se,T,E,H,rt,lt,pt,Pt,_t,Z,Mt,yt;function Tt(){Dt=new H_(N),ht=new F_(N,Dt,t),Dt.init(ht),Z=new yg(N,Dt,ht),bt=new Eg(N,Dt,ht),Yt=new q_(N),wt=new cg,kt=new Sg(N,Dt,bt,wt,ht,Z,Yt),ie=new B_(p),te=new G_(p),ae=new nf(N,ht),Mt=new I_(N,Dt,ae,ht),he=new W_(N,ae,Yt,Mt),qt=new $_(N,he,ae,Yt),pt=new Y_(N,ht,kt),H=new O_(wt),re=new lg(p,ie,te,Dt,ht,Mt,H),Se=new Rg(p,wt),T=new hg,E=new vg(Dt,ht),lt=new U_(p,ie,te,bt,qt,g,f),rt=new wg(p,qt,ht),yt=new Lg(N,Yt,ht,bt),Pt=new N_(N,Dt,Yt,ht),_t=new X_(N,Dt,Yt,ht),Yt.programs=re.programs,p.capabilities=ht,p.extensions=Dt,p.properties=wt,p.renderLists=T,p.shadowMap=rt,p.state=bt,p.info=Yt}Tt();const vt=new Pg(p,N);this.xr=vt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const y=Dt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Dt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(et,tt,!1))},this.getSize=function(y){return y.set(et,tt)},this.setSize=function(y,k,K=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=y,tt=k,e.width=Math.floor(y*G),e.height=Math.floor(k*G),K===!0&&(e.style.width=y+"px",e.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(et*G,tt*G).floor()},this.setDrawingBufferSize=function(y,k,K){et=y,tt=k,G=K,e.width=Math.floor(y*K),e.height=Math.floor(k*K),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(ot)},this.setViewport=function(y,k,K,B){y.isVector4?ot.set(y.x,y.y,y.z,y.w):ot.set(y,k,K,B),bt.viewport(j.copy(ot).multiplyScalar(G).floor())},this.getScissor=function(y){return y.copy($)},this.setScissor=function(y,k,K,B){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,k,K,B),bt.scissor(S.copy($).multiplyScalar(G).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(y){bt.setScissorTest(z=y)},this.setOpaqueSort=function(y){Y=y},this.setTransparentSort=function(y){Q=y},this.getClearColor=function(y){return y.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(y=!0,k=!0,K=!0){let B=0;y&&(B|=N.COLOR_BUFFER_BIT),k&&(B|=N.DEPTH_BUFFER_BIT),K&&(B|=N.STENCIL_BUFFER_BIT),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),T.dispose(),E.dispose(),wt.dispose(),ie.dispose(),te.dispose(),qt.dispose(),Mt.dispose(),yt.dispose(),re.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",xt),vt.removeEventListener("sessionend",Jt),ct&&(ct.dispose(),ct=null),Qt.stop()};function gt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=Yt.autoReset,k=rt.enabled,K=rt.autoUpdate,B=rt.needsUpdate,J=rt.type;Tt(),Yt.autoReset=y,rt.enabled=k,rt.autoUpdate=K,rt.needsUpdate=B,rt.type=J}function Xt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function le(y){const k=y.target;k.removeEventListener("dispose",le),U(k)}function U(y){X(y),wt.remove(y)}function X(y){const k=wt.get(y).programs;k!==void 0&&(k.forEach(function(K){re.releaseProgram(K)}),y.isShaderMaterial&&re.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,K,B,J,Et){k===null&&(k=at);const At=J.isMesh&&J.matrixWorld.determinant()<0,Ut=Er(y,k,K,B,J);bt.setMaterial(B,At);let It=K.index,Ft=1;B.wireframe===!0&&(It=he.getWireframeAttribute(K),Ft=2);const Vt=K.drawRange,Ot=K.attributes.position;let Zt=Vt.start*Ft,ce=(Vt.start+Vt.count)*Ft;Et!==null&&(Zt=Math.max(Zt,Et.start*Ft),ce=Math.min(ce,(Et.start+Et.count)*Ft)),It!==null?(Zt=Math.max(Zt,0),ce=Math.min(ce,It.count)):Ot!=null&&(Zt=Math.max(Zt,0),ce=Math.min(ce,Ot.count));const Le=ce-Zt;if(Le<0||Le===1/0)return;Mt.setup(J,B,Ut,K,It);let nn,ue=Pt;if(It!==null&&(nn=ae.get(It),ue=_t,ue.setIndex(nn)),J.isMesh)B.wireframe===!0?(bt.setLineWidth(B.wireframeLinewidth*ft()),ue.setMode(N.LINES)):ue.setMode(N.TRIANGLES);else if(J.isLine){let Gt=B.linewidth;Gt===void 0&&(Gt=1),bt.setLineWidth(Gt*ft()),J.isLineSegments?ue.setMode(N.LINES):J.isLineLoop?ue.setMode(N.LINE_LOOP):ue.setMode(N.LINE_STRIP)}else J.isPoints?ue.setMode(N.POINTS):J.isSprite&&ue.setMode(N.TRIANGLES);if(J.isInstancedMesh)ue.renderInstances(Zt,Le,J.count);else if(K.isInstancedBufferGeometry){const Gt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Xi=Math.min(K.instanceCount,Gt);ue.renderInstances(Zt,Le,Xi)}else ue.render(Zt,Le)},this.compile=function(y,k){function K(B,J,Et){B.transparent===!0&&B.side===Mn&&B.forceSinglePass===!1?(B.side=Ie,B.needsUpdate=!0,si(B,J,Et),B.side=On,B.needsUpdate=!0,si(B,J,Et),B.side=Mn):si(B,J,Et)}w=E.get(y),w.init(),x.push(w),y.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(w.pushLight(B),B.castShadow&&w.pushShadow(B))}),w.setupLights(p.useLegacyLights),y.traverse(function(B){const J=B.material;if(J)if(Array.isArray(J))for(let Et=0;Et<J.length;Et++){const At=J[Et];K(At,y,B)}else K(J,y,B)}),x.pop(),w=null};let it=null;function mt(y){it&&it(y)}function xt(){Qt.stop()}function Jt(){Qt.start()}const Qt=new yc;Qt.setAnimationLoop(mt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(y){it=y,vt.setAnimationLoop(y),y===null?Qt.stop():Qt.start()},vt.addEventListener("sessionstart",xt),vt.addEventListener("sessionend",Jt),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(k),k=vt.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,k,D),w=E.get(y,x.length),w.init(),x.push(w),q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ut.setFromProjectionMatrix(q),Ct=this.localClippingEnabled,nt=H.init(this.clippingPlanes,Ct),b=T.get(y,M.length),b.init(),M.push(b),de(y,k,0,p.sortObjects),b.finish(),p.sortObjects===!0&&b.sort(Y,Q),nt===!0&&H.beginShadows();const K=w.state.shadowsArray;if(rt.render(K,y,k),nt===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(b,y),w.setupLights(p.useLegacyLights),k.isArrayCamera){const B=k.cameras;for(let J=0,Et=B.length;J<Et;J++){const At=B[J];ze(b,y,At,At.viewport)}}else ze(b,y,k);D!==null&&(kt.updateMultisampleRenderTarget(D),kt.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(p,y,k),Mt.resetDefaultState(),I=-1,F=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,M.pop(),M.length>0?b=M[M.length-1]:b=null};function de(y,k,K,B){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)K=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ut.intersectsSprite(y)){B&&W.setFromMatrixPosition(y.matrixWorld).applyMatrix4(q);const At=qt.update(y),Ut=y.material;Ut.visible&&b.push(y,At,Ut,K,W.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ut.intersectsObject(y))){y.isSkinnedMesh&&y.skeleton.frame!==Yt.render.frame&&(y.skeleton.update(),y.skeleton.frame=Yt.render.frame);const At=qt.update(y),Ut=y.material;if(B&&(At.boundingSphere===null&&At.computeBoundingSphere(),W.copy(At.boundingSphere.center).applyMatrix4(y.matrixWorld).applyMatrix4(q)),Array.isArray(Ut)){const It=At.groups;for(let Ft=0,Vt=It.length;Ft<Vt;Ft++){const Ot=It[Ft],Zt=Ut[Ot.materialIndex];Zt&&Zt.visible&&b.push(y,At,Zt,K,W.z,Ot)}}else Ut.visible&&b.push(y,At,Ut,K,W.z,null)}}const Et=y.children;for(let At=0,Ut=Et.length;At<Ut;At++)de(Et[At],k,K,B)}function ze(y,k,K,B){const J=y.opaque,Et=y.transmissive,At=y.transparent;w.setupLightsView(K),nt===!0&&H.setGlobalState(p.clippingPlanes,K),Et.length>0&&jt(J,Et,k,K),B&&bt.viewport(j.copy(B)),J.length>0&&ye(J,k,K),Et.length>0&&ye(Et,k,K),At.length>0&&ye(At,k,K),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function jt(y,k,K,B){if(ct===null){const Ut=ht.isWebGL2;ct=new ni(1024,1024,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")?_r:ei,minFilter:mr,samples:Ut&&u===!0?4:0})}const J=p.getRenderTarget();p.setRenderTarget(ct),p.clear();const Et=p.toneMapping;p.toneMapping=wn,ye(y,K,B),kt.updateMultisampleRenderTarget(ct),kt.updateRenderTargetMipmap(ct);let At=!1;for(let Ut=0,It=k.length;Ut<It;Ut++){const Ft=k[Ut],Vt=Ft.object,Ot=Ft.geometry,Zt=Ft.material,ce=Ft.group;if(Zt.side===Mn&&Vt.layers.test(B.layers)){const Le=Zt.side;Zt.side=Ie,Zt.needsUpdate=!0,fe(Vt,K,B,Ot,Zt,ce),Zt.side=Le,Zt.needsUpdate=!0,At=!0}}At===!0&&(kt.updateMultisampleRenderTarget(ct),kt.updateRenderTargetMipmap(ct)),p.setRenderTarget(J),p.toneMapping=Et}function ye(y,k,K){const B=k.isScene===!0?k.overrideMaterial:null;for(let J=0,Et=y.length;J<Et;J++){const At=y[J],Ut=At.object,It=At.geometry,Ft=B===null?At.material:B,Vt=At.group;Ut.layers.test(K.layers)&&fe(Ut,k,K,It,Ft,Vt)}}function fe(y,k,K,B,J,Et){y.onBeforeRender(p,k,K,B,J,Et),y.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),J.onBeforeRender(p,k,K,B,y,Et),J.transparent===!0&&J.side===Mn&&J.forceSinglePass===!1?(J.side=Ie,J.needsUpdate=!0,p.renderBufferDirect(K,k,B,J,y,Et),J.side=On,J.needsUpdate=!0,p.renderBufferDirect(K,k,B,J,y,Et),J.side=Mn):p.renderBufferDirect(K,k,B,J,y,Et),y.onAfterRender(p,k,K,B,J,Et)}function si(y,k,K){k.isScene!==!0&&(k=at);const B=wt.get(y),J=w.state.lights,Et=w.state.shadowsArray,At=J.state.version,Ut=re.getParameters(y,J.state,Et,k,K),It=re.getProgramCacheKey(Ut);let Ft=B.programs;B.environment=y.isMeshStandardMaterial?k.environment:null,B.fog=k.fog,B.envMap=(y.isMeshStandardMaterial?te:ie).get(y.envMap||B.environment),Ft===void 0&&(y.addEventListener("dispose",le),Ft=new Map,B.programs=Ft);let Vt=Ft.get(It);if(Vt!==void 0){if(B.currentProgram===Vt&&B.lightsStateVersion===At)return En(y,Ut),Vt}else Ut.uniforms=re.getUniforms(y),y.onBuild(K,Ut,p),y.onBeforeCompile(Ut,p),Vt=re.acquireProgram(Ut,It),Ft.set(It,Vt),B.uniforms=Ut.uniforms;const Ot=B.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ot.clippingPlanes=H.uniform),En(y,Ut),B.needsLights=Wi(y),B.lightsStateVersion=At,B.needsLights&&(Ot.ambientLightColor.value=J.state.ambient,Ot.lightProbe.value=J.state.probe,Ot.directionalLights.value=J.state.directional,Ot.directionalLightShadows.value=J.state.directionalShadow,Ot.spotLights.value=J.state.spot,Ot.spotLightShadows.value=J.state.spotShadow,Ot.rectAreaLights.value=J.state.rectArea,Ot.ltc_1.value=J.state.rectAreaLTC1,Ot.ltc_2.value=J.state.rectAreaLTC2,Ot.pointLights.value=J.state.point,Ot.pointLightShadows.value=J.state.pointShadow,Ot.hemisphereLights.value=J.state.hemi,Ot.directionalShadowMap.value=J.state.directionalShadowMap,Ot.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ot.spotShadowMap.value=J.state.spotShadowMap,Ot.spotLightMatrix.value=J.state.spotLightMatrix,Ot.spotLightMap.value=J.state.spotLightMap,Ot.pointShadowMap.value=J.state.pointShadowMap,Ot.pointShadowMatrix.value=J.state.pointShadowMatrix);const Zt=Vt.getUniforms(),ce=ss.seqWithValue(Zt.seq,Ot);return B.currentProgram=Vt,B.uniformsList=ce,Vt}function En(y,k){const K=wt.get(y);K.outputColorSpace=k.outputColorSpace,K.instancing=k.instancing,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Er(y,k,K,B,J){k.isScene!==!0&&(k=at),kt.resetTextureUnits();const Et=k.fog,At=B.isMeshStandardMaterial?k.environment:null,Ut=D===null?p.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ln,It=(B.isMeshStandardMaterial?te:ie).get(B.envMap||At),Ft=B.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Vt=!!B.normalMap&&!!K.attributes.tangent,Ot=!!K.morphAttributes.position,Zt=!!K.morphAttributes.normal,ce=!!K.morphAttributes.color,Le=B.toneMapped?p.toneMapping:wn,nn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ue=nn!==void 0?nn.length:0,Gt=wt.get(B),Xi=w.state.lights;if(nt===!0&&(Ct===!0||y!==F)){const me=y===F&&B.id===I;H.setState(B,y,me)}let se=!1;B.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Xi.state.version||Gt.outputColorSpace!==Ut||J.isInstancedMesh&&Gt.instancing===!1||!J.isInstancedMesh&&Gt.instancing===!0||J.isSkinnedMesh&&Gt.skinning===!1||!J.isSkinnedMesh&&Gt.skinning===!0||Gt.envMap!==It||B.fog===!0&&Gt.fog!==Et||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==H.numPlanes||Gt.numIntersection!==H.numIntersection)||Gt.vertexAlphas!==Ft||Gt.vertexTangents!==Vt||Gt.morphTargets!==Ot||Gt.morphNormals!==Zt||Gt.morphColors!==ce||Gt.toneMapping!==Le||ht.isWebGL2===!0&&Gt.morphTargetsCount!==ue)&&(se=!0):(se=!0,Gt.__version=B.version);let cn=Gt.currentProgram;se===!0&&(cn=si(B,k,J));let Sr=!1,Sn=!1,ai=!1;const xe=cn.getUniforms(),rn=Gt.uniforms;if(bt.useProgram(cn.program)&&(Sr=!0,Sn=!0,ai=!0),B.id!==I&&(I=B.id,Sn=!0),Sr||F!==y){if(xe.setValue(N,"projectionMatrix",y.projectionMatrix),ht.logarithmicDepthBuffer&&xe.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),F!==y&&(F=y,Sn=!0,ai=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const me=xe.map.cameraPosition;me!==void 0&&me.setValue(N,W.setFromMatrixPosition(y.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&xe.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||J.isSkinnedMesh)&&xe.setValue(N,"viewMatrix",y.matrixWorldInverse)}if(J.isSkinnedMesh){xe.setOptional(N,J,"bindMatrix"),xe.setOptional(N,J,"bindMatrixInverse");const me=J.skeleton;me&&(ht.floatVertexTextures?(me.boneTexture===null&&me.computeBoneTexture(),xe.setValue(N,"boneTexture",me.boneTexture,kt),xe.setValue(N,"boneTextureSize",me.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qi=K.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0&&ht.isWebGL2===!0)&&pt.update(J,K,cn),(Sn||Gt.receiveShadow!==J.receiveShadow)&&(Gt.receiveShadow=J.receiveShadow,xe.setValue(N,"receiveShadow",J.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(rn.envMap.value=It,rn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Sn&&(xe.setValue(N,"toneMappingExposure",p.toneMappingExposure),Gt.needsLights&&oi(rn,ai),Et&&B.fog===!0&&Se.refreshFogUniforms(rn,Et),Se.refreshMaterialUniforms(rn,B,G,tt,ct),ss.upload(N,Gt.uniformsList,rn,kt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ss.upload(N,Gt.uniformsList,rn,kt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&xe.setValue(N,"center",J.center),xe.setValue(N,"modelViewMatrix",J.modelViewMatrix),xe.setValue(N,"normalMatrix",J.normalMatrix),xe.setValue(N,"modelMatrix",J.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const me=B.uniformsGroups;for(let ji=0,yr=me.length;ji<yr;ji++)if(ht.isWebGL2){const Ki=me[ji];yt.update(Ki,cn),yt.bind(Ki,cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cn}function oi(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function Wi(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,k,K){wt.get(y.texture).__webglTexture=k,wt.get(y.depthTexture).__webglTexture=K;const B=wt.get(y);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=K===void 0,B.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,k){const K=wt.get(y);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,K=0){D=y,A=k,C=K;let B=!0,J=null,Et=!1,At=!1;if(y){const It=wt.get(y);It.__useDefaultFramebuffer!==void 0?(bt.bindFramebuffer(N.FRAMEBUFFER,null),B=!1):It.__webglFramebuffer===void 0?kt.setupRenderTarget(y):It.__hasExternalTextures&&kt.rebindTextures(y,wt.get(y.texture).__webglTexture,wt.get(y.depthTexture).__webglTexture);const Ft=y.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(At=!0);const Vt=wt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(J=Vt[k],Et=!0):ht.isWebGL2&&y.samples>0&&kt.useMultisampledRTT(y)===!1?J=wt.get(y).__webglMultisampledFramebuffer:J=Vt,j.copy(y.viewport),S.copy(y.scissor),L=y.scissorTest}else j.copy(ot).multiplyScalar(G).floor(),S.copy($).multiplyScalar(G).floor(),L=z;if(bt.bindFramebuffer(N.FRAMEBUFFER,J)&&ht.drawBuffers&&B&&bt.drawBuffers(y,J),bt.viewport(j),bt.scissor(S),bt.setScissorTest(L),Et){const It=wt.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,It.__webglTexture,K)}else if(At){const It=wt.get(y.texture),Ft=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.__webglTexture,K||0,Ft)}I=-1},this.readRenderTargetPixels=function(y,k,K,B,J,Et,At){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=wt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&At!==void 0&&(Ut=Ut[At]),Ut){bt.bindFramebuffer(N.FRAMEBUFFER,Ut);try{const It=y.texture,Ft=It.format,Vt=It.type;if(Ft!==Qe&&Z.convert(Ft)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Vt===_r&&(Dt.has("EXT_color_buffer_half_float")||ht.isWebGL2&&Dt.has("EXT_color_buffer_float"));if(Vt!==ei&&Z.convert(Vt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===Zn&&(ht.isWebGL2||Dt.has("OES_texture_float")||Dt.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-B&&K>=0&&K<=y.height-J&&N.readPixels(k,K,B,J,Z.convert(Ft),Z.convert(Vt),Et)}finally{const It=D!==null?wt.get(D).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(y,k,K=0){const B=Math.pow(2,-K),J=Math.floor(k.image.width*B),Et=Math.floor(k.image.height*B);kt.setTexture2D(k,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,y.x,y.y,J,Et),bt.unbindTexture()},this.copyTextureToTexture=function(y,k,K,B=0){const J=k.image.width,Et=k.image.height,At=Z.convert(K.format),Ut=Z.convert(K.type);kt.setTexture2D(K,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,K.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,y.x,y.y,J,Et,At,Ut,k.image.data):k.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,y.x,y.y,k.mipmaps[0].width,k.mipmaps[0].height,At,k.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,B,y.x,y.y,At,Ut,k.image),B===0&&K.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(y,k,K,B,J=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=y.max.x-y.min.x+1,At=y.max.y-y.min.y+1,Ut=y.max.z-y.min.z+1,It=Z.convert(B.format),Ft=Z.convert(B.type);let Vt;if(B.isData3DTexture)kt.setTexture3D(B,0),Vt=N.TEXTURE_3D;else if(B.isDataArrayTexture)kt.setTexture2DArray(B,0),Vt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const Ot=N.getParameter(N.UNPACK_ROW_LENGTH),Zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ce=N.getParameter(N.UNPACK_SKIP_PIXELS),Le=N.getParameter(N.UNPACK_SKIP_ROWS),nn=N.getParameter(N.UNPACK_SKIP_IMAGES),ue=K.isCompressedTexture?K.mipmaps[0]:K.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ue.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,y.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,y.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,y.min.z),K.isDataTexture||K.isData3DTexture?N.texSubImage3D(Vt,J,k.x,k.y,k.z,Et,At,Ut,It,Ft,ue.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Vt,J,k.x,k.y,k.z,Et,At,Ut,It,ue.data)):N.texSubImage3D(Vt,J,k.x,k.y,k.z,Et,At,Ut,It,Ft,ue),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ot),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ce),N.pixelStorei(N.UNPACK_SKIP_ROWS,Le),N.pixelStorei(N.UNPACK_SKIP_IMAGES,nn),J===0&&B.generateMipmaps&&N.generateMipmap(Vt),bt.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?kt.setTextureCube(y,0):y.isData3DTexture?kt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?kt.setTexture2DArray(y,0):kt.setTexture2D(y,0),bt.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,bt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?Qn:lc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Qn?Bt:ln}}class Ug extends Rc{}Ug.prototype.isWebGL1Renderer=!0;class Ig extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Lc extends zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jl=new Me,yo=new mc,is=new us,rs=new V;class Ng extends Re{constructor(t=new en,e=new Lc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,l=t.params.Points.threshold,h=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(a),is.radius+=l,t.ray.intersectsSphere(is)===!1)return;Jl.copy(a).invert(),yo.copy(t.ray).applyMatrix4(Jl);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=i.index,_=i.attributes.position;if(d!==null){const g=Math.max(0,h.start),b=Math.min(d.count,h.start+h.count);for(let w=g,M=b;w<M;w++){const x=d.getX(w);rs.fromBufferAttribute(_,x),Ql(rs,x,f,a,t,e,this)}}else{const g=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let w=g,M=b;w<M;w++)rs.fromBufferAttribute(_,w),Ql(rs,w,f,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=a.length;l<h;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Ql(s,t,e,i,a,l,h){const u=yo.distanceSqToPoint(s);if(u<e){const f=new V;yo.closestPointToPoint(s,f),f.applyMatrix4(i);const d=a.ray.origin.distanceTo(f);if(d<a.near||d>a.far)return;l.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:t,face:null,object:h})}}class Ro extends en{constructor(t=1,e=.4,i=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:a,arc:l},i=Math.floor(i),a=Math.floor(a);const h=[],u=[],f=[],d=[],m=new V,_=new V,g=new V;for(let b=0;b<=i;b++)for(let w=0;w<=a;w++){const M=w/a*l,x=b/i*Math.PI*2;_.x=(t+e*Math.cos(x))*Math.cos(M),_.y=(t+e*Math.cos(x))*Math.sin(M),_.z=e*Math.sin(x),u.push(_.x,_.y,_.z),m.x=t*Math.cos(M),m.y=t*Math.sin(M),g.subVectors(_,m).normalize(),f.push(g.x,g.y,g.z),d.push(w/a),d.push(b/i)}for(let b=1;b<=i;b++)for(let w=1;w<=a;w++){const M=(a+1)*b+w-1,x=(a+1)*(b-1)+w-1,p=(a+1)*(b-1)+w,R=(a+1)*b+w;h.push(M,x,R),h.push(x,p,R)}this.setIndex(h),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lo extends en{constructor(t=1,e=.4,i=64,a=8,l=2,h=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:a,p:l,q:h},i=Math.floor(i),a=Math.floor(a);const u=[],f=[],d=[],m=[],_=new V,g=new V,b=new V,w=new V,M=new V,x=new V,p=new V;for(let A=0;A<=i;++A){const C=A/i*l*Math.PI*2;R(C,l,h,t,b),R(C+.01,l,h,t,w),x.subVectors(w,b),p.addVectors(w,b),M.crossVectors(x,p),p.crossVectors(M,x),M.normalize(),p.normalize();for(let D=0;D<=a;++D){const I=D/a*Math.PI*2,F=-e*Math.cos(I),j=e*Math.sin(I);_.x=b.x+(F*p.x+j*M.x),_.y=b.y+(F*p.y+j*M.y),_.z=b.z+(F*p.z+j*M.z),f.push(_.x,_.y,_.z),g.subVectors(_,b).normalize(),d.push(g.x,g.y,g.z),m.push(A/i),m.push(D/a)}}for(let A=1;A<=i;A++)for(let C=1;C<=a;C++){const D=(a+1)*(A-1)+(C-1),I=(a+1)*A+(C-1),F=(a+1)*A+C,j=(a+1)*(A-1)+C;u.push(D,I,j),u.push(I,F,j)}this.setIndex(u),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(m,2));function R(A,C,D,I,F){const j=Math.cos(A),S=Math.sin(A),L=D/C*A,et=Math.cos(L);F.x=I*(2+et)*.5*j,F.y=I*(2+et)*S*.5,F.z=I*Math.sin(L)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Dc extends zi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Fg extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Og extends Fg{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=tc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function tc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);var kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},To={exports:{}};/*! Tweakpane 3.1.9 (c) 2016 cocopon, licensed under the MIT license. */(function(s,t){(function(e,i){i(t)})(kg,function(e){class i{constructor(n){const[r,c]=n.split("-"),v=r.split(".");this.major=parseInt(v[0],10),this.minor=parseInt(v[1],10),this.patch=parseInt(v[2],10),this.prerelease=c??null}toString(){const n=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[n,this.prerelease].join("-"):n}}class a{constructor(n){this.controller_=n}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(n){this.controller_.viewProps.set("disabled",n)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(n){this.controller_.viewProps.set("hidden",n)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class l{constructor(n){this.target=n}}class h extends l{constructor(n,r,c,v){super(n),this.value=r,this.presetKey=c,this.last=v??!0}}class u extends l{constructor(n,r,c){super(n),this.value=r,this.presetKey=c}}class f extends l{constructor(n,r){super(n),this.expanded=r}}class d extends l{constructor(n,r){super(n),this.index=r}}function m(o){return o}function _(o){return o==null}function g(o,n){if(o.length!==n.length)return!1;for(let r=0;r<o.length;r++)if(o[r]!==n[r])return!1;return!0}function b(o,n){let r=o;do{const c=Object.getOwnPropertyDescriptor(r,n);if(c&&(c.set!==void 0||c.writable===!0))return!0;r=Object.getPrototypeOf(r)}while(r!==null);return!1}const w={alreadydisposed:()=>"View has been already disposed",invalidparams:o=>`Invalid parameters for '${o.name}'`,nomatchingcontroller:o=>`No matching controller for '${o.key}'`,nomatchingview:o=>`No matching view for '${JSON.stringify(o.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:o=>`Property '${o.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class M{static alreadyDisposed(){return new M({type:"alreadydisposed"})}static notBindable(){return new M({type:"notbindable"})}static propertyNotFound(n){return new M({type:"propertynotfound",context:{name:n}})}static shouldNeverHappen(){return new M({type:"shouldneverhappen"})}constructor(n){var r;this.message=(r=w[n.type](n.context))!==null&&r!==void 0?r:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=n.type}}class x{constructor(n,r,c){this.obj_=n,this.key_=r,this.presetKey_=c??r}static isBindable(n){return!(n===null||typeof n!="object"&&typeof n!="function")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(n){this.obj_[this.key_]=n}writeProperty(n,r){const c=this.read();if(!x.isBindable(c))throw M.notBindable();if(!(n in c))throw M.propertyNotFound(n);c[n]=r}}class p extends a{get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get title(){var n;return(n=this.controller_.valueController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.valueController.props.set("title",n)}on(n,r){const c=r.bind(this);return this.controller_.valueController.emitter.on(n,()=>{c(new l(this))}),this}}class R{constructor(){this.observers_={}}on(n,r){let c=this.observers_[n];return c||(c=this.observers_[n]=[]),c.push({handler:r}),this}off(n,r){const c=this.observers_[n];return c&&(this.observers_[n]=c.filter(v=>v.handler!==r)),this}emit(n,r){const c=this.observers_[n];c&&c.forEach(v=>{v.handler(r)})}}const A="tp";function C(o){return(r,c)=>[A,"-",o,"v",r?`_${r}`:"",c?`-${c}`:""].join("")}function D(o,n){return r=>n(o(r))}function I(o){return o.rawValue}function F(o,n){o.emitter.on("change",D(I,n)),n(o.rawValue)}function j(o,n,r){F(o.value(n),r)}function S(o,n,r){r?o.classList.add(n):o.classList.remove(n)}function L(o,n){return r=>{S(o,n,r)}}function et(o,n){F(o,r=>{n.textContent=r??""})}const tt=C("btn");class G{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(tt()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("button");c.classList.add(tt("b")),r.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const v=n.createElement("div");v.classList.add(tt("t")),et(r.props.value("title"),v),this.buttonElement.appendChild(v)}}class Y{constructor(n,r){this.emitter=new R,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new G(n,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Q{constructor(n,r){var c;this.constraint_=r==null?void 0:r.constraint,this.equals_=(c=r==null?void 0:r.equals)!==null&&c!==void 0?c:(v,P)=>v===P,this.emitter=new R,this.rawValue_=n}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const c=r??{forceEmit:!1,last:!0},v=this.constraint_?this.constraint_.constrain(n):n,P=this.rawValue_;this.equals_(P,v)&&!c.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=v,this.emitter.emit("change",{options:c,previousRawValue:P,rawValue:v,sender:this}))}}class ot{constructor(n){this.emitter=new R,this.value_=n}get rawValue(){return this.value_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const c=r??{forceEmit:!1,last:!0},v=this.value_;v===n&&!c.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=n,this.emitter.emit("change",{options:c,previousRawValue:v,rawValue:this.value_,sender:this}))}}function $(o,n){const r=n==null?void 0:n.constraint,c=n==null?void 0:n.equals;return!r&&!c?new ot(o):new Q(o,n)}class z{constructor(n){this.emitter=new R,this.valMap_=n;for(const r in this.valMap_)this.valMap_[r].emitter.on("change",()=>{this.emitter.emit("change",{key:r,sender:this})})}static createCore(n){return Object.keys(n).reduce((c,v)=>Object.assign(c,{[v]:$(n[v])}),{})}static fromObject(n){const r=this.createCore(n);return new z(r)}get(n){return this.valMap_[n].rawValue}set(n,r){this.valMap_[n].rawValue=r}value(n){return this.valMap_[n]}}function ut(o,n){const c=Object.keys(n).reduce((v,P)=>{if(v===void 0)return;const O=n[P],st=O(o[P]);return st.succeeded?Object.assign(Object.assign({},v),{[P]:st.value}):void 0},{});return c}function nt(o,n){return o.reduce((r,c)=>{if(r===void 0)return;const v=n(c);if(!(!v.succeeded||v.value===void 0))return[...r,v.value]},[])}function Ct(o){return o===null?!1:typeof o=="object"}function ct(o){return n=>r=>{if(!n&&r===void 0)return{succeeded:!1,value:void 0};if(n&&r===void 0)return{succeeded:!0,value:void 0};const c=o(r);return c!==void 0?{succeeded:!0,value:c}:{succeeded:!1,value:void 0}}}function q(o){return{custom:n=>ct(n)(o),boolean:ct(n=>typeof n=="boolean"?n:void 0)(o),number:ct(n=>typeof n=="number"?n:void 0)(o),string:ct(n=>typeof n=="string"?n:void 0)(o),function:ct(n=>typeof n=="function"?n:void 0)(o),constant:n=>ct(r=>r===n?n:void 0)(o),raw:ct(n=>n)(o),object:n=>ct(r=>{if(Ct(r))return ut(r,n)})(o),array:n=>ct(r=>{if(Array.isArray(r))return nt(r,n)})(o)}}const W={optional:q(!0),required:q(!1)};function at(o,n){const r=W.required.object(n)(o);return r.succeeded?r.value:void 0}function ft(o){console.warn([`Missing '${o.key}' of ${o.target} in ${o.place}.`,"Please rebuild plugins with the latest core package."].join(" "))}function N(o){return o&&o.parentElement&&o.parentElement.removeChild(o),null}class Lt{constructor(n){this.value_=n}static create(n){return[new Lt(n),(r,c)=>{n.setRawValue(r,c)}]}get emitter(){return this.value_.emitter}get rawValue(){return this.value_.rawValue}}const Dt=C("");function ht(o,n){return L(o,Dt(void 0,n))}class bt extends z{constructor(n){var r;super(n),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Lt.create($(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(r=this.get("parent"))===null||r===void 0||r.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(n){var r,c,v;const P=n??{};return new bt(z.createCore({disabled:(r=P.disabled)!==null&&r!==void 0?r:!1,disposed:!1,hidden:(c=P.hidden)!==null&&c!==void 0?c:!1,parent:(v=P.parent)!==null&&v!==void 0?v:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(n){F(this.globalDisabled_,ht(n,"disabled")),j(this,"hidden",ht(n,"hidden"))}bindDisabled(n){F(this.globalDisabled_,r=>{n.disabled=r})}bindTabIndex(n){F(this.globalDisabled_,r=>{n.tabIndex=r?-1:0})}handleDispose(n){this.value("disposed").emitter.on("change",r=>{r&&n()})}getGlobalDisabled_(){const n=this.get("parent");return(n?n.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(n){var r;const c=n.previousRawValue;c==null||c.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(r=this.get("parent"))===null||r===void 0||r.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}function Yt(){return["veryfirst","first","last","verylast"]}const wt=C(""),kt={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class ie{constructor(n){this.parent_=null,this.blade=n.blade,this.view=n.view,this.viewProps=n.viewProps;const r=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Yt().forEach(c=>{r.classList.remove(wt(void 0,kt[c]))}),this.blade.get("positions").forEach(c=>{r.classList.add(wt(void 0,kt[c]))})}),this.viewProps.handleDispose(()=>{N(r)})}get parent(){return this.parent_}set parent(n){if(this.parent_=n,!("parent"in this.viewProps.valMap_)){ft({key:"parent",target:bt.name,place:"BladeController.parent"});return}this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}}const te="http://www.w3.org/2000/svg";function ae(o){o.offsetHeight}function he(o,n){const r=o.style.transition;o.style.transition="none",n(),o.style.transition=r}function qt(o){return o.ontouchstart!==void 0}function re(){return globalThis}function Se(){return re().document}function T(o){const n=o.ownerDocument.defaultView;return n&&"document"in n?o.getContext("2d",{willReadFrequently:!0}):null}const E={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function H(o,n){const r=o.createElementNS(te,"svg");return r.innerHTML=E[n],r}function rt(o,n,r){o.insertBefore(n,o.children[r])}function lt(o){o.parentElement&&o.parentElement.removeChild(o)}function pt(o){for(;o.children.length>0;)o.removeChild(o.children[0])}function Pt(o){for(;o.childNodes.length>0;)o.removeChild(o.childNodes[0])}function _t(o){return o.relatedTarget?o.relatedTarget:"explicitOriginalTarget"in o?o.explicitOriginalTarget:null}const Z=C("lbl");function Mt(o,n){const r=o.createDocumentFragment();return n.split(`
`).map(v=>o.createTextNode(v)).forEach((v,P)=>{P>0&&r.appendChild(o.createElement("br")),r.appendChild(v)}),r}class yt{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Z()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(Z("l")),j(r.props,"label",P=>{_(P)?this.element.classList.add(Z(void 0,"nol")):(this.element.classList.remove(Z(void 0,"nol")),Pt(c),c.appendChild(Mt(n,P)))}),this.element.appendChild(c),this.labelElement=c;const v=n.createElement("div");v.classList.add(Z("v")),this.element.appendChild(v),this.valueElement=v}}class Tt extends ie{constructor(n,r){const c=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{view:new yt(n,{props:r.props,viewProps:c}),viewProps:c})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const vt={id:"button",type:"blade",accept(o){const n=W,r=at(o,{title:n.required.string,view:n.required.constant("button"),label:n.optional.string});return r?{params:r}:null},controller(o){return new Tt(o.document,{blade:o.blade,props:z.fromObject({label:o.params.label}),valueController:new Y(o.document,{props:z.fromObject({title:o.params.title}),viewProps:o.viewProps})})},api(o){return!(o.controller instanceof Tt)||!(o.controller.valueController instanceof Y)?null:new p(o.controller)}};class gt extends ie{constructor(n){super(n),this.value=n.value}}function Nt(){return new z({positions:$([],{equals:g})})}class Xt extends z{constructor(n){super(n)}static create(n){const r={completed:!0,expanded:n,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},c=z.createCore(r);return new Xt(c)}get styleExpanded(){var n;return(n=this.get("temporaryExpanded"))!==null&&n!==void 0?n:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const n=this.get("expandedHeight");return this.get("shouldFixHeight")&&!_(n)?`${n}px`:"auto"}bindExpandedClass(n,r){const c=()=>{this.styleExpanded?n.classList.add(r):n.classList.remove(r)};j(this,"expanded",c),j(this,"temporaryExpanded",c)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function le(o,n){let r=0;return he(n,()=>{o.set("expandedHeight",null),o.set("temporaryExpanded",!0),ae(n),r=n.clientHeight,o.set("temporaryExpanded",null),ae(n)}),r}function U(o,n){n.style.height=o.styleHeight}function X(o,n){o.value("expanded").emitter.on("beforechange",()=>{if(o.set("completed",!1),_(o.get("expandedHeight"))){const r=le(o,n);r>0&&o.set("expandedHeight",r)}o.set("shouldFixHeight",!0),ae(n)}),o.emitter.on("change",()=>{U(o,n)}),U(o,n),n.addEventListener("transitionend",r=>{r.propertyName==="height"&&o.cleanUpTransition()})}class it extends a{constructor(n,r){super(n),this.rackApi_=r}}function mt(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"button"}))}function xt(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"folder"}))}function Jt(o,n){const r=n??{};return o.addBlade(Object.assign(Object.assign({},r),{view:"separator"}))}function Qt(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"tab"}))}class de{constructor(n){this.emitter=new R,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=n}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(n){for(const r of this.allItems())if(n(r))return r;return null}includes(n){return this.cache_.has(n)}add(n,r){if(this.includes(n))throw M.shouldNeverHappen();const c=r!==void 0?r:this.items_.length;this.items_.splice(c,0,n),this.cache_.add(n);const v=this.extract_(n);v&&(v.emitter.on("add",this.onSubListAdd_),v.emitter.on("remove",this.onSubListRemove_),v.allItems().forEach(P=>{this.cache_.add(P)})),this.emitter.emit("add",{index:c,item:n,root:this,target:this})}remove(n){const r=this.items_.indexOf(n);if(r<0)return;this.items_.splice(r,1),this.cache_.delete(n);const c=this.extract_(n);c&&(c.emitter.off("add",this.onSubListAdd_),c.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:r,item:n,root:this,target:this})}onSubListAdd_(n){this.cache_.add(n.item),this.emitter.emit("add",{index:n.index,item:n.item,root:this,target:n.target})}onSubListRemove_(n){this.cache_.delete(n.item),this.emitter.emit("remove",{index:n.index,item:n.item,root:this,target:n.target})}}class ze extends a{constructor(n){super(n),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new R,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(n){const r=n.sender.target.read();this.emitter_.emit("change",{event:new h(this,r,this.controller_.binding.target.presetKey,n.options.last)})}}class jt extends Tt{constructor(n,r){super(n,r),this.binding=r.binding}}class ye extends a{constructor(n){super(n),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new R,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(n){const r=n.sender.target.read();this.emitter_.emit("update",{event:new u(this,r,this.controller_.binding.target.presetKey)})}}class fe extends Tt{constructor(n,r){super(n,r),this.binding=r.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function si(o){return o instanceof oi?o.apiSet_:o instanceof it?o.rackApi_.apiSet_:null}function En(o,n){const r=o.find(c=>c.controller_===n);if(!r)throw M.shouldNeverHappen();return r}function Er(o,n,r){if(!x.isBindable(o))throw M.notBindable();return new x(o,n,r)}class oi extends a{constructor(n,r){super(n),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new R,this.apiSet_=new de(si),this.pool_=r;const c=this.controller_.rack;c.emitter.on("add",this.onRackAdd_),c.emitter.on("remove",this.onRackRemove_),c.emitter.on("inputchange",this.onRackInputChange_),c.emitter.on("monitorupdate",this.onRackMonitorUpdate_),c.children.forEach(v=>{this.setUpApi_(v)})}get children(){return this.controller_.rack.children.map(n=>En(this.apiSet_,n))}addInput(n,r,c){const v=c??{},P=this.controller_.view.element.ownerDocument,O=this.pool_.createInput(P,Er(n,r,v.presetKey),v),st=new ze(O);return this.add(st,v.index)}addMonitor(n,r,c){const v=c??{},P=this.controller_.view.element.ownerDocument,O=this.pool_.createMonitor(P,Er(n,r),v),st=new ye(O);return this.add(st,v.index)}addFolder(n){return xt(this,n)}addButton(n){return mt(this,n)}addSeparator(n){return Jt(this,n)}addTab(n){return Qt(this,n)}add(n,r){this.controller_.rack.add(n.controller_,r);const c=this.apiSet_.find(v=>v.controller_===n.controller_);return c&&this.apiSet_.remove(c),this.apiSet_.add(n),n}remove(n){this.controller_.rack.remove(n.controller_)}addBlade(n){const r=this.controller_.view.element.ownerDocument,c=this.pool_.createBlade(r,n),v=this.pool_.createBladeApi(c);return this.add(v,n.index)}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}setUpApi_(n){this.apiSet_.find(c=>c.controller_===n)||this.apiSet_.add(this.pool_.createBladeApi(n))}onRackAdd_(n){this.setUpApi_(n.bladeController)}onRackRemove_(n){if(n.isRoot){const r=En(this.apiSet_,n.bladeController);this.apiSet_.remove(r)}}onRackInputChange_(n){const r=n.bladeController;if(r instanceof jt){const c=En(this.apiSet_,r),v=r.binding;this.emitter_.emit("change",{event:new h(c,v.target.read(),v.target.presetKey,n.options.last)})}else if(r instanceof gt){const c=En(this.apiSet_,r);this.emitter_.emit("change",{event:new h(c,r.value.rawValue,void 0,n.options.last)})}}onRackMonitorUpdate_(n){if(!(n.bladeController instanceof fe))throw M.shouldNeverHappen();const r=En(this.apiSet_,n.bladeController),c=n.bladeController.binding;this.emitter_.emit("update",{event:new u(r,c.target.read(),c.target.presetKey)})}}class Wi extends it{constructor(n,r){super(n,new oi(n.rackController,r)),this.emitter_=new R,this.controller_.foldable.value("expanded").emitter.on("change",c=>{this.emitter_.emit("fold",{event:new f(this,c.sender.rawValue)})}),this.rackApi_.on("change",c=>{this.emitter_.emit("change",{event:c})}),this.rackApi_.on("update",c=>{this.emitter_.emit("update",{event:c})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(n){this.controller_.foldable.set("expanded",n)}get title(){return this.controller_.props.get("title")}set title(n){this.controller_.props.set("title",n)}get children(){return this.rackApi_.children}addInput(n,r,c){return this.rackApi_.addInput(n,r,c)}addMonitor(n,r,c){return this.rackApi_.addMonitor(n,r,c)}addFolder(n){return this.rackApi_.addFolder(n)}addButton(n){return this.rackApi_.addButton(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){return this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addBlade(n){return this.rackApi_.addBlade(n)}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}}class y extends ie{constructor(n){super({blade:n.blade,view:n.view,viewProps:n.rackController.viewProps}),this.rackController=n.rackController}}class k{constructor(n,r){const c=C(r.viewName);this.element=n.createElement("div"),this.element.classList.add(c()),r.viewProps.bindClassModifiers(this.element)}}function K(o,n){for(let r=0;r<o.length;r++){const c=o[r];if(c instanceof jt&&c.binding===n)return c}return null}function B(o,n){for(let r=0;r<o.length;r++){const c=o[r];if(c instanceof fe&&c.binding===n)return c}return null}function J(o,n){for(let r=0;r<o.length;r++){const c=o[r];if(c instanceof gt&&c.value===n)return c}return null}function Et(o){return o instanceof It?o.rack:o instanceof y?o.rackController.rack:null}function At(o){const n=Et(o);return n?n.bcSet_:null}class Ut{constructor(n){var r,c;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new R,this.blade_=(r=n.blade)!==null&&r!==void 0?r:null,(c=this.blade_)===null||c===void 0||c.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=n.viewProps,this.bcSet_=new de(At),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(n,r){var c;(c=n.parent)===null||c===void 0||c.remove(n),b(n,"parent")?n.parent=this:(n.parent_=this,ft({key:"parent",target:"BladeController",place:"BladeRack.add"})),this.bcSet_.add(n,r)}remove(n){b(n,"parent")?n.parent=null:(n.parent_=null,ft({key:"parent",target:"BladeController",place:"BladeRack.remove"})),this.bcSet_.remove(n)}find(n){return this.bcSet_.allItems().filter(r=>r instanceof n)}onSetAdd_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("add",{bladeController:n.item,index:n.index,isRoot:r,sender:this}),!r)return;const c=n.item;if(c.viewProps.emitter.on("change",this.onChildViewPropsChange_),c.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),c.viewProps.handleDispose(this.onChildDispose_),c instanceof jt)c.binding.emitter.on("change",this.onChildInputChange_);else if(c instanceof fe)c.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(c instanceof gt)c.value.emitter.on("change",this.onChildValueChange_);else{const v=Et(c);if(v){const P=v.emitter;P.on("layout",this.onDescendantLayout_),P.on("inputchange",this.onDescendantInputChange_),P.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("remove",{bladeController:n.item,isRoot:r,sender:this}),!r)return;const c=n.item;if(c instanceof jt)c.binding.emitter.off("change",this.onChildInputChange_);else if(c instanceof fe)c.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(c instanceof gt)c.value.emitter.off("change",this.onChildValueChange_);else{const v=Et(c);if(v){const P=v.emitter;P.off("layout",this.onDescendantLayout_),P.off("inputchange",this.onDescendantInputChange_),P.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const n=this.bcSet_.items.filter(v=>!v.viewProps.get("hidden")),r=n[0],c=n[n.length-1];this.bcSet_.items.forEach(v=>{const P=[];v===r&&(P.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&P.push("veryfirst")),v===c&&(P.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&P.push("verylast")),v.blade.set("positions",P)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(r=>r.viewProps.get("disposed")).forEach(r=>{this.bcSet_.remove(r)})}onChildInputChange_(n){const r=K(this.find(jt),n.sender);if(!r)throw M.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onChildMonitorUpdate_(n){const r=B(this.find(fe),n.sender);if(!r)throw M.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:r,sender:this})}onChildValueChange_(n){const r=J(this.find(gt),n.sender);if(!r)throw M.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onDescendantLayout_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(n){this.emitter.emit("inputchange",{bladeController:n.bladeController,options:n.options,sender:this})}onDescendantMonitorUpdate_(n){this.emitter.emit("monitorupdate",{bladeController:n.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class It extends ie{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new k(n,{viewName:"brk",viewProps:r.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const c=new Ut({blade:r.root?void 0:r.blade,viewProps:r.viewProps});c.emitter.on("add",this.onRackAdd_),c.emitter.on("remove",this.onRackRemove_),this.rack=c,this.viewProps.handleDispose(()=>{for(let v=this.rack.children.length-1;v>=0;v--)this.rack.children[v].viewProps.set("disposed",!0)})}onRackAdd_(n){n.isRoot&&rt(this.view.element,n.bladeController.view.element,n.index)}onRackRemove_(n){n.isRoot&&lt(n.bladeController.view.element)}}const Ft=C("cnt");class Vt{constructor(n,r){var c;this.className_=C((c=r.viewName)!==null&&c!==void 0?c:"fld"),this.element=n.createElement("div"),this.element.classList.add(this.className_(),Ft()),r.viewProps.bindClassModifiers(this.element),this.foldable_=r.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),j(this.foldable_,"completed",L(this.element,this.className_(void 0,"cpl")));const v=n.createElement("button");v.classList.add(this.className_("b")),j(r.props,"title",Rt=>{_(Rt)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),r.viewProps.bindDisabled(v),this.element.appendChild(v),this.buttonElement=v;const P=n.createElement("div");P.classList.add(this.className_("i")),this.element.appendChild(P);const O=n.createElement("div");O.classList.add(this.className_("t")),et(r.props.value("title"),O),this.buttonElement.appendChild(O),this.titleElement=O;const st=n.createElement("div");st.classList.add(this.className_("m")),this.buttonElement.appendChild(st);const St=r.containerElement;St.classList.add(this.className_("c")),this.element.appendChild(St),this.containerElement=St}}class Ot extends y{constructor(n,r){var c;const v=Xt.create((c=r.expanded)!==null&&c!==void 0?c:!0),P=new It(n,{blade:r.blade,root:r.root,viewProps:r.viewProps});super(Object.assign(Object.assign({},r),{rackController:P,view:new Vt(n,{containerElement:P.view.element,foldable:v,props:r.props,viewName:r.root?"rot":void 0,viewProps:r.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=r.props,this.foldable=v,X(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Zt={id:"folder",type:"blade",accept(o){const n=W,r=at(o,{title:n.required.string,view:n.required.constant("folder"),expanded:n.optional.boolean});return r?{params:r}:null},controller(o){return new Ot(o.document,{blade:o.blade,expanded:o.params.expanded,props:z.fromObject({title:o.params.title}),viewProps:o.viewProps})},api(o){return o.controller instanceof Ot?new Wi(o.controller,o.pool):null}};class ce extends gt{constructor(n,r){const c=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{value:r.valueController.value,view:new yt(n,{props:r.props,viewProps:c}),viewProps:c})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Le extends a{}const nn=C("spr");class ue{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(nn()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("hr");c.classList.add(nn("r")),this.element.appendChild(c)}}class Gt extends ie{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new ue(n,{viewProps:r.viewProps})}))}}const Xi={id:"separator",type:"blade",accept(o){const r=at(o,{view:W.required.constant("separator")});return r?{params:r}:null},controller(o){return new Gt(o.document,{blade:o.blade,viewProps:o.viewProps})},api(o){return o.controller instanceof Gt?new Le(o.controller):null}},se=C("tbi");class cn{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(se()),r.viewProps.bindClassModifiers(this.element),j(r.props,"selected",P=>{P?this.element.classList.add(se(void 0,"sel")):this.element.classList.remove(se(void 0,"sel"))});const c=n.createElement("button");c.classList.add(se("b")),r.viewProps.bindDisabled(c),this.element.appendChild(c),this.buttonElement=c;const v=n.createElement("div");v.classList.add(se("t")),et(r.props.value("title"),v),this.buttonElement.appendChild(v),this.titleElement=v}}class Sr{constructor(n,r){this.emitter=new R,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new cn(n,{props:r.props,viewProps:r.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Sn{constructor(n,r){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Sr(n,{props:r.itemProps,viewProps:bt.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new It(n,{blade:Nt(),viewProps:bt.create()}),this.props=r.props,j(this.props,"selected",c=>{this.itemController.props.set("selected",c),this.contentController.viewProps.set("hidden",!c)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class ai{constructor(n,r){this.controller_=n,this.rackApi_=r}get title(){var n;return(n=this.controller_.itemController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.itemController.props.set("title",n)}get selected(){return this.controller_.props.get("selected")}set selected(n){this.controller_.props.set("selected",n)}get children(){return this.rackApi_.children}addButton(n){return this.rackApi_.addButton(n)}addFolder(n){return this.rackApi_.addFolder(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addInput(n,r,c){return this.rackApi_.addInput(n,r,c)}addMonitor(n,r,c){return this.rackApi_.addMonitor(n,r,c)}addBlade(n){return this.rackApi_.addBlade(n)}}class xe extends it{constructor(n,r){super(n,new oi(n.rackController,r)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new R,this.pageApiMap_=new Map,this.rackApi_.on("change",c=>{this.emitter_.emit("change",{event:c})}),this.rackApi_.on("update",c=>{this.emitter_.emit("update",{event:c})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(c=>{this.setUpPageApi_(c)})}get pages(){return this.controller_.pageSet.items.map(n=>{const r=this.pageApiMap_.get(n);if(!r)throw M.shouldNeverHappen();return r})}addPage(n){const r=this.controller_.view.element.ownerDocument,c=new Sn(r,{itemProps:z.fromObject({selected:!1,title:n.title}),props:z.fromObject({selected:!1})});this.controller_.add(c,n.index);const v=this.pageApiMap_.get(c);if(!v)throw M.shouldNeverHappen();return v}removePage(n){this.controller_.remove(n)}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}setUpPageApi_(n){const r=this.rackApi_.apiSet_.find(v=>v.controller_===n.contentController);if(!r)throw M.shouldNeverHappen();const c=new ai(n,r);this.pageApiMap_.set(n,c)}onPageAdd_(n){this.setUpPageApi_(n.item)}onPageRemove_(n){if(!this.pageApiMap_.get(n.item))throw M.shouldNeverHappen();this.pageApiMap_.delete(n.item)}onSelect_(n){this.emitter_.emit("select",{event:new d(this,n.rawValue)})}}const rn=-1;class qi{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=$(!0),this.selectedIndex=$(rn),this.items_=[]}add(n,r){const c=r??this.items_.length;this.items_.splice(c,0,n),n.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(n){const r=this.items_.indexOf(n);r<0||(this.items_.splice(r,1),n.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=rn,this.empty.rawValue=!0;return}const n=this.items_.findIndex(r=>r.rawValue);n<0?(this.items_.forEach((r,c)=>{r.rawValue=c===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((r,c)=>{r.rawValue=c===n}),this.selectedIndex.rawValue=n),this.empty.rawValue=!1}onItemSelectedChange_(n){if(n.rawValue){const r=this.items_.findIndex(c=>c===n.sender);this.items_.forEach((c,v)=>{c.rawValue=v===r}),this.selectedIndex.rawValue=r}else this.keepSelection_()}}const me=C("tab");class ji{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(me(),Ft()),r.viewProps.bindClassModifiers(this.element),F(r.empty,L(this.element,me(void 0,"nop")));const c=n.createElement("div");c.classList.add(me("t")),this.element.appendChild(c),this.itemsElement=c;const v=n.createElement("div");v.classList.add(me("i")),this.element.appendChild(v);const P=r.contentsElement;P.classList.add(me("c")),this.element.appendChild(P),this.contentsElement=P}}class yr extends y{constructor(n,r){const c=new It(n,{blade:r.blade,viewProps:r.viewProps}),v=new qi;super({blade:r.blade,rackController:c,view:new ji(n,{contentsElement:c.view.element,empty:v.empty,viewProps:r.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new de(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=v}get pageSet(){return this.pageSet_}add(n,r){this.pageSet_.add(n,r)}remove(n){this.pageSet_.remove(this.pageSet_.items[n])}onPageAdd_(n){const r=n.item;rt(this.view.itemsElement,r.itemController.view.element,n.index),r.itemController.viewProps.set("parent",this.viewProps),this.rackController.rack.add(r.contentController,n.index),this.tab.add(r.props.value("selected"))}onPageRemove_(n){const r=n.item;lt(r.itemController.view.element),r.itemController.viewProps.set("parent",null),this.rackController.rack.remove(r.contentController),this.tab.remove(r.props.value("selected"))}}const Ki={id:"tab",type:"blade",accept(o){const n=W,r=at(o,{pages:n.required.array(n.required.object({title:n.required.string})),view:n.required.constant("tab")});return!r||r.pages.length===0?null:{params:r}},controller(o){const n=new yr(o.document,{blade:o.blade,viewProps:o.viewProps});return o.params.pages.forEach(r=>{const c=new Sn(o.document,{itemProps:z.fromObject({selected:!1,title:r.title}),props:z.fromObject({selected:!1})});n.add(c)}),n},api(o){return o.controller instanceof yr?new xe(o.controller,o.pool):null}};function Nc(o,n){const r=o.accept(n.params);if(!r)return null;const c=W.optional.boolean(n.params.disabled).value,v=W.optional.boolean(n.params.hidden).value;return o.controller({blade:Nt(),document:n.document,params:Object.assign(Object.assign({},r.params),{disabled:c,hidden:v}),viewProps:bt.create({disabled:c,hidden:v})})}class Fc{constructor(){this.disabled=!1,this.emitter=new R}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Oc{constructor(n,r){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=n,this.emitter=new R,this.interval_=r,this.setTimer_()}get disabled(){return this.disabled_}set disabled(n){this.disabled_=n,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const n=this.doc_.defaultView;n&&n.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const n=this.doc_.defaultView;n&&(this.timerId_=n.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Bc{constructor(n){this.onValueChange_=this.onValueChange_.bind(this),this.reader=n.reader,this.writer=n.writer,this.emitter=new R,this.value=n.value,this.value.emitter.on("change",this.onValueChange_),this.target=n.target,this.read()}read(){const n=this.target.read();n!==void 0&&(this.value.rawValue=this.reader(n))}write_(n){this.writer(this.target,n)}onValueChange_(n){this.write_(n.rawValue),this.emitter.emit("change",{options:n.options,rawValue:n.rawValue,sender:this})}}function Do(o,n){for(;o.length<n;)o.push(void 0)}function kc(o){const n=[];return Do(n,o),$(n)}function Vc(o){const n=o.indexOf(void 0);return n<0?o:o.slice(0,n)}function zc(o,n){const r=[...Vc(o),n];return r.length>o.length?r.splice(0,r.length-o.length):Do(r,o.length),r}class Gc{constructor(n){this.onTick_=this.onTick_.bind(this),this.reader_=n.reader,this.target=n.target,this.emitter=new R,this.value=n.value,this.ticker=n.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const n=this.target.read();if(n===void 0)return;const r=this.value.rawValue,c=this.reader_(n);this.value.rawValue=zc(r,c),this.emitter.emit("update",{rawValue:c,sender:this})}onTick_(n){this.read()}}class Yi{constructor(n){this.constraints=n}constrain(n){return this.constraints.reduce((r,c)=>c.constrain(r),n)}}function un(o,n){if(o instanceof n)return o;if(o instanceof Yi){const r=o.constraints.reduce((c,v)=>c||(v instanceof n?v:null),null);if(r)return r}return null}class li{constructor(n){this.values=z.fromObject({max:n.max,min:n.min})}constrain(n){const r=this.values.get("max"),c=this.values.get("min");return Math.min(Math.max(n,c),r)}}class $i{constructor(n){this.values=z.fromObject({options:n})}get options(){return this.values.get("options")}constrain(n){const r=this.values.get("options");return r.length===0||r.filter(v=>v.value===n).length>0?n:r[0].value}}class Uo{constructor(n){this.values=z.fromObject({max:n.max,min:n.min})}get maxValue(){return this.values.get("max")}get minValue(){return this.values.get("min")}constrain(n){const r=this.values.get("max"),c=this.values.get("min");let v=n;return _(c)||(v=Math.max(v,c)),_(r)||(v=Math.min(v,r)),v}}class Tr{constructor(n,r=0){this.step=n,this.origin=r}constrain(n){const r=this.origin%this.step,c=Math.round((n-r)/this.step);return r+c*this.step}}const ms=C("lst");class Hc{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.props_=r.props,this.element=n.createElement("div"),this.element.classList.add(ms()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("select");c.classList.add(ms("s")),j(this.props_,"options",P=>{pt(c),P.forEach((O,st)=>{const St=n.createElement("option");St.dataset.index=String(st),St.textContent=O.text,St.value=String(O.value),c.appendChild(St)})}),r.viewProps.bindDisabled(c),this.element.appendChild(c),this.selectElement=c;const v=n.createElement("div");v.classList.add(ms("m")),v.appendChild(H(n,"dropdown")),this.element.appendChild(v),r.value.emitter.on("change",this.onValueChange_),this.value_=r.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class Zi{constructor(n,r){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new Hc(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(n){const c=n.currentTarget.selectedOptions.item(0);if(!c)return;const v=Number(c.dataset.index);this.value.rawValue=this.props.get("options")[v].value}}const Io=C("pop");class Wc{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Io()),r.viewProps.bindClassModifiers(this.element),F(r.shows,L(this.element,Io(void 0,"v")))}}class No{constructor(n,r){this.shows=$(!1),this.viewProps=r.viewProps,this.view=new Wc(n,{shows:this.shows,viewProps:this.viewProps})}}const Fo=C("txt");class Xc{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Fo()),r.viewProps.bindClassModifiers(this.element),this.props_=r.props,this.props_.emitter.on("change",this.onChange_);const c=n.createElement("input");c.classList.add(Fo("i")),c.type="text",r.viewProps.bindDisabled(c),this.element.appendChild(c),this.inputElement=c,r.value.emitter.on("change",this.onChange_),this.value_=r.value,this.refresh()}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value_.rawValue)}onChange_(){this.refresh()}}class Cr{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=r.parser,this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new Xc(n,{props:r.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const c=n.currentTarget.value,v=this.parser_(c);_(v)||(this.value.rawValue=v),this.view.refresh()}}function qc(o){return String(o)}function Oo(o){return o==="false"?!1:!!o}function Bo(o){return qc(o)}class jc{constructor(n){this.text=n}evaluate(){return Number(this.text)}toString(){return this.text}}const Kc={"**":(o,n)=>Math.pow(o,n),"*":(o,n)=>o*n,"/":(o,n)=>o/n,"%":(o,n)=>o%n,"+":(o,n)=>o+n,"-":(o,n)=>o-n,"<<":(o,n)=>o<<n,">>":(o,n)=>o>>n,">>>":(o,n)=>o>>>n,"&":(o,n)=>o&n,"^":(o,n)=>o^n,"|":(o,n)=>o|n};class Yc{constructor(n,r,c){this.left=r,this.operator=n,this.right=c}evaluate(){const n=Kc[this.operator];if(!n)throw new Error(`unexpected binary operator: '${this.operator}`);return n(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const $c={"+":o=>o,"-":o=>-o,"~":o=>~o};class Zc{constructor(n,r){this.operator=n,this.expression=r}evaluate(){const n=$c[this.operator];if(!n)throw new Error(`unexpected unary operator: '${this.operator}`);return n(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function _s(o){return(n,r)=>{for(let c=0;c<o.length;c++){const v=o[c](n,r);if(v!=="")return v}return""}}function Ji(o,n){var r;const c=o.substr(n).match(/^\s+/);return(r=c&&c[0])!==null&&r!==void 0?r:""}function Jc(o,n){const r=o.substr(n,1);return r.match(/^[1-9]$/)?r:""}function Qi(o,n){var r;const c=o.substr(n).match(/^[0-9]+/);return(r=c&&c[0])!==null&&r!==void 0?r:""}function Qc(o,n){const r=Qi(o,n);if(r!=="")return r;const c=o.substr(n,1);if(n+=1,c!=="-"&&c!=="+")return"";const v=Qi(o,n);return v===""?"":c+v}function vs(o,n){const r=o.substr(n,1);if(n+=1,r.toLowerCase()!=="e")return"";const c=Qc(o,n);return c===""?"":r+c}function ko(o,n){const r=o.substr(n,1);if(r==="0")return r;const c=Jc(o,n);return n+=c.length,c===""?"":c+Qi(o,n)}function tu(o,n){const r=ko(o,n);if(n+=r.length,r==="")return"";const c=o.substr(n,1);if(n+=c.length,c!==".")return"";const v=Qi(o,n);return n+=v.length,r+c+v+vs(o,n)}function eu(o,n){const r=o.substr(n,1);if(n+=r.length,r!==".")return"";const c=Qi(o,n);return n+=c.length,c===""?"":r+c+vs(o,n)}function nu(o,n){const r=ko(o,n);return n+=r.length,r===""?"":r+vs(o,n)}const iu=_s([tu,eu,nu]);function ru(o,n){var r;const c=o.substr(n).match(/^[01]+/);return(r=c&&c[0])!==null&&r!==void 0?r:""}function su(o,n){const r=o.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0b")return"";const c=ru(o,n);return c===""?"":r+c}function ou(o,n){var r;const c=o.substr(n).match(/^[0-7]+/);return(r=c&&c[0])!==null&&r!==void 0?r:""}function au(o,n){const r=o.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0o")return"";const c=ou(o,n);return c===""?"":r+c}function lu(o,n){var r;const c=o.substr(n).match(/^[0-9a-f]+/i);return(r=c&&c[0])!==null&&r!==void 0?r:""}function cu(o,n){const r=o.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0x")return"";const c=lu(o,n);return c===""?"":r+c}const uu=_s([su,au,cu]),hu=_s([uu,iu]);function du(o,n){const r=hu(o,n);return n+=r.length,r===""?null:{evaluable:new jc(r),cursor:n}}function pu(o,n){const r=o.substr(n,1);if(n+=r.length,r!=="(")return null;const c=zo(o,n);if(!c)return null;n=c.cursor,n+=Ji(o,n).length;const v=o.substr(n,1);return n+=v.length,v!==")"?null:{evaluable:c.evaluable,cursor:n}}function fu(o,n){var r;return(r=du(o,n))!==null&&r!==void 0?r:pu(o,n)}function Vo(o,n){const r=fu(o,n);if(r)return r;const c=o.substr(n,1);if(n+=c.length,c!=="+"&&c!=="-"&&c!=="~")return null;const v=Vo(o,n);return v?(n=v.cursor,{cursor:n,evaluable:new Zc(c,v.evaluable)}):null}function mu(o,n,r){r+=Ji(n,r).length;const c=o.filter(v=>n.startsWith(v,r))[0];return c?(r+=c.length,r+=Ji(n,r).length,{cursor:r,operator:c}):null}function _u(o,n){return(r,c)=>{const v=o(r,c);if(!v)return null;c=v.cursor;let P=v.evaluable;for(;;){const O=mu(n,r,c);if(!O)break;c=O.cursor;const st=o(r,c);if(!st)return null;c=st.cursor,P=new Yc(O.operator,P,st.evaluable)}return P?{cursor:c,evaluable:P}:null}}const vu=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((o,n)=>_u(o,n),Vo);function zo(o,n){return n+=Ji(o,n).length,vu(o,n)}function gu(o){const n=zo(o,0);return!n||n.cursor+Ji(o,n.cursor).length!==o.length?null:n.evaluable}function hn(o){var n;const r=gu(o);return(n=r==null?void 0:r.evaluate())!==null&&n!==void 0?n:null}function Go(o){if(typeof o=="number")return o;if(typeof o=="string"){const n=hn(o);if(!_(n))return n}return 0}function xu(o){return String(o)}function we(o){return n=>n.toFixed(Math.max(Math.min(o,20),0))}const bu=we(0);function Ar(o){return bu(o)+"%"}function Ho(o){return String(o)}function gs(o){return o}function tr({primary:o,secondary:n,forward:r,backward:c}){let v=!1;function P(O){v||(v=!0,O(),v=!1)}o.emitter.on("change",O=>{P(()=>{n.setRawValue(r(o,n),O.options)})}),n.emitter.on("change",O=>{P(()=>{o.setRawValue(c(o,n),O.options)}),P(()=>{n.setRawValue(r(o,n),O.options)})}),P(()=>{n.setRawValue(r(o,n),{forceEmit:!1,last:!0})})}function De(o,n){const r=o*(n.altKey?.1:1)*(n.shiftKey?10:1);return n.upKey?+r:n.downKey?-r:0}function er(o){return{altKey:o.altKey,downKey:o.key==="ArrowDown",shiftKey:o.shiftKey,upKey:o.key==="ArrowUp"}}function dn(o){return{altKey:o.altKey,downKey:o.key==="ArrowLeft",shiftKey:o.shiftKey,upKey:o.key==="ArrowRight"}}function Mu(o){return o==="ArrowUp"||o==="ArrowDown"}function Wo(o){return Mu(o)||o==="ArrowLeft"||o==="ArrowRight"}function xs(o,n){var r,c;const v=n.ownerDocument.defaultView,P=n.getBoundingClientRect();return{x:o.pageX-(((r=v&&v.scrollX)!==null&&r!==void 0?r:0)+P.left),y:o.pageY-(((c=v&&v.scrollY)!==null&&c!==void 0?c:0)+P.top)}}class Bn{constructor(n){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=n,this.emitter=new R,n.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),n.addEventListener("touchend",this.onTouchEnd_),n.addEventListener("mousedown",this.onMouseDown_)}computePosition_(n){const r=this.elem_.getBoundingClientRect();return{bounds:{width:r.width,height:r.height},point:n?{x:n.x,y:n.y}:null}}onMouseDown_(n){var r;n.preventDefault(),(r=n.currentTarget)===null||r===void 0||r.focus();const c=this.elem_.ownerDocument;c.addEventListener("mousemove",this.onDocumentMouseMove_),c.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(xs(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseMove_(n){this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(xs(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseUp_(n){const r=this.elem_.ownerDocument;r.removeEventListener("mousemove",this.onDocumentMouseMove_),r.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(xs(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onTouchStart_(n){n.preventDefault();const r=n.targetTouches.item(0),c=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-c.left,y:r.clientY-c.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchMove_(n){const r=n.targetTouches.item(0),c=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-c.left,y:r.clientY-c.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchEnd_(n){var r;const c=(r=n.targetTouches.item(0))!==null&&r!==void 0?r:this.lastTouch_,v=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(c?{x:c.clientX-v.left,y:c.clientY-v.top}:void 0),sender:this,shiftKey:n.shiftKey})}}function oe(o,n,r,c,v){const P=(o-n)/(r-n);return c+P*(v-c)}function Xo(o){return String(o.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function _e(o,n,r){return Math.min(Math.max(o,n),r)}function qo(o,n){return(o%n+n)%n}const Ge=C("txt");class wu{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(Ge(),Ge(void 0,"num")),r.arrayPosition&&this.element.classList.add(Ge(void 0,r.arrayPosition)),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("input");c.classList.add(Ge("i")),c.type="text",r.viewProps.bindDisabled(c),this.element.appendChild(c),this.inputElement=c,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=r.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Ge()),this.inputElement.classList.add(Ge("i"));const v=n.createElement("div");v.classList.add(Ge("k")),this.element.appendChild(v),this.knobElement=v;const P=n.createElementNS(te,"svg");P.classList.add(Ge("g")),this.knobElement.appendChild(P);const O=n.createElementNS(te,"path");O.classList.add(Ge("gb")),P.appendChild(O),this.guideBodyElem_=O;const st=n.createElementNS(te,"path");st.classList.add(Ge("gh")),P.appendChild(st),this.guideHeadElem_=st;const St=n.createElement("div");St.classList.add(C("tt")()),this.knobElement.appendChild(St),this.tooltipElem_=St,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.refresh()}onDraggingChange_(n){if(n.rawValue===null){this.element.classList.remove(Ge(void 0,"drg"));return}this.element.classList.add(Ge(void 0,"drg"));const r=n.rawValue/this.props_.get("draggingScale"),c=r+(r>0?-1:r<0?1:0),v=_e(-c,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${c+v},0 L${c},4 L${c+v},8`,`M ${r},-1 L${r},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${r},4`);const P=this.props_.get("formatter");this.tooltipElem_.textContent=P(this.value.rawValue),this.tooltipElem_.style.left=`${r}px`}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value.rawValue)}onChange_(){this.refresh()}}class nr{constructor(n,r){var c;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.parser_=r.parser,this.props=r.props,this.sliderProps_=(c=r.sliderProps)!==null&&c!==void 0?c:null,this.value=r.value,this.viewProps=r.viewProps,this.dragging_=$(null),this.view=new wu(n,{arrayPosition:r.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const v=new Bn(this.view.knobElement);v.emitter.on("down",this.onPointerDown_),v.emitter.on("move",this.onPointerMove_),v.emitter.on("up",this.onPointerUp_)}constrainValue_(n){var r,c;const v=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("minValue"),P=(c=this.sliderProps_)===null||c===void 0?void 0:c.get("maxValue");let O=n;return v!==void 0&&(O=Math.max(O,v)),P!==void 0&&(O=Math.min(O,P)),O}onInputChange_(n){const c=n.currentTarget.value,v=this.parser_(c);_(v)||(this.value.rawValue=this.constrainValue_(v)),this.view.refresh()}onInputKeyDown_(n){const r=De(this.baseStep_,er(n));r!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+r),{forceEmit:!1,last:!1})}onInputKeyUp_(n){De(this.baseStep_,er(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(n){if(!n.point)return null;const r=n.point.x-n.bounds.width/2;return this.constrainValue_(this.originRawValue_+r*this.props.get("draggingScale"))}onPointerMove_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const bs=C("sld");class Eu{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(bs()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(bs("t")),r.viewProps.bindTabIndex(c),this.element.appendChild(c),this.trackElement=c;const v=n.createElement("div");v.classList.add(bs("k")),this.trackElement.appendChild(v),this.knobElement=v,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.update_()}update_(){const n=_e(oe(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${n}%`}onChange_(){this.update_()}}class Su{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.value=r.value,this.viewProps=r.viewProps,this.props=r.props,this.view=new Eu(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){n.point&&this.value.setRawValue(oe(_e(n.point.x,0,n.bounds.width),0,n.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),r)}onPointerDownOrMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=De(this.baseStep_,dn(n));r!==0&&this.value.setRawValue(this.value.rawValue+r,{forceEmit:!1,last:!1})}onKeyUp_(n){De(this.baseStep_,dn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ms=C("sldtxt");class yu{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Ms());const c=n.createElement("div");c.classList.add(Ms("s")),this.sliderView_=r.sliderView,c.appendChild(this.sliderView_.element),this.element.appendChild(c);const v=n.createElement("div");v.classList.add(Ms("t")),this.textView_=r.textView,v.appendChild(this.textView_.element),this.element.appendChild(v)}}class ws{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.sliderC_=new Su(n,{baseStep:r.baseStep,props:r.sliderProps,value:r.value,viewProps:this.viewProps}),this.textC_=new nr(n,{baseStep:r.baseStep,parser:r.parser,props:r.textProps,sliderProps:r.sliderProps,value:r.value,viewProps:r.viewProps}),this.view=new yu(n,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function ir(o,n){o.write(n)}function Pr(o){const n=W;if(Array.isArray(o))return n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))(o).value;if(typeof o=="object")return n.required.raw(o).value}function jo(o){if(o==="inline"||o==="popup")return o}function yn(o){const n=W;return n.required.object({max:n.optional.number,min:n.optional.number,step:n.optional.number})(o).value}function Ko(o){if(Array.isArray(o))return o;const n=[];return Object.keys(o).forEach(r=>{n.push({text:r,value:o[r]})}),n}function Es(o){return _(o)?null:new $i(Ko(o))}function Tu(o){const n=o?un(o,Tr):null;return n?n.step:null}function Rr(o,n){const r=o&&un(o,Tr);return r?Xo(r.step):Math.max(Xo(n),2)}function ci(o){const n=Tu(o);return n??1}function ui(o,n){var r;const c=o&&un(o,Tr),v=Math.abs((r=c==null?void 0:c.step)!==null&&r!==void 0?r:n);return v===0?.1:Math.pow(10,Math.floor(Math.log10(v))-1)}const Lr=C("ckb");class Cu{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Lr()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("label");c.classList.add(Lr("l")),this.element.appendChild(c);const v=n.createElement("input");v.classList.add(Lr("i")),v.type="checkbox",c.appendChild(v),this.inputElement=v,r.viewProps.bindDisabled(this.inputElement);const P=n.createElement("div");P.classList.add(Lr("w")),c.appendChild(P);const O=H(n,"check");P.appendChild(O),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Au{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new Cu(n,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const r=n.currentTarget;this.value.rawValue=r.checked}}function Pu(o){const n=[],r=Es(o.options);return r&&n.push(r),new Yi(n)}const Ru={id:"input-bool",type:"input",accept:(o,n)=>{if(typeof o!="boolean")return null;const c=at(n,{options:W.optional.custom(Pr)});return c?{initialValue:o,params:c}:null},binding:{reader:o=>Oo,constraint:o=>Pu(o.params),writer:o=>ir},controller:o=>{const n=o.document,r=o.value,c=o.constraint,v=c&&un(c,$i);return v?new Zi(n,{props:new z({options:v.values.value("options")}),value:r,viewProps:o.viewProps}):new Au(n,{value:r,viewProps:o.viewProps})}},kn=C("col");class Lu{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(kn()),r.foldable.bindExpandedClass(this.element,kn(void 0,"expanded")),j(r.foldable,"completed",L(this.element,kn(void 0,"cpl")));const c=n.createElement("div");c.classList.add(kn("h")),this.element.appendChild(c);const v=n.createElement("div");v.classList.add(kn("s")),c.appendChild(v),this.swatchElement=v;const P=n.createElement("div");if(P.classList.add(kn("t")),c.appendChild(P),this.textElement=P,r.pickerLayout==="inline"){const O=n.createElement("div");O.classList.add(kn("p")),this.element.appendChild(O),this.pickerElement=O}else this.pickerElement=null}}function Du(o,n,r){const c=_e(o/255,0,1),v=_e(n/255,0,1),P=_e(r/255,0,1),O=Math.max(c,v,P),st=Math.min(c,v,P),St=O-st;let Rt=0,Kt=0;const $t=(st+O)/2;return St!==0&&(Kt=St/(1-Math.abs(O+st-1)),c===O?Rt=(v-P)/St:v===O?Rt=2+(P-c)/St:Rt=4+(c-v)/St,Rt=Rt/6+(Rt<0?1:0)),[Rt*360,Kt*100,$t*100]}function Uu(o,n,r){const c=(o%360+360)%360,v=_e(n/100,0,1),P=_e(r/100,0,1),O=(1-Math.abs(2*P-1))*v,st=O*(1-Math.abs(c/60%2-1)),St=P-O/2;let Rt,Kt,$t;return c>=0&&c<60?[Rt,Kt,$t]=[O,st,0]:c>=60&&c<120?[Rt,Kt,$t]=[st,O,0]:c>=120&&c<180?[Rt,Kt,$t]=[0,O,st]:c>=180&&c<240?[Rt,Kt,$t]=[0,st,O]:c>=240&&c<300?[Rt,Kt,$t]=[st,0,O]:[Rt,Kt,$t]=[O,0,st],[(Rt+St)*255,(Kt+St)*255,($t+St)*255]}function Iu(o,n,r){const c=_e(o/255,0,1),v=_e(n/255,0,1),P=_e(r/255,0,1),O=Math.max(c,v,P),st=Math.min(c,v,P),St=O-st;let Rt;St===0?Rt=0:O===c?Rt=60*(((v-P)/St%6+6)%6):O===v?Rt=60*((P-c)/St+2):Rt=60*((c-v)/St+4);const Kt=O===0?0:St/O,$t=O;return[Rt,Kt*100,$t*100]}function Yo(o,n,r){const c=qo(o,360),v=_e(n/100,0,1),P=_e(r/100,0,1),O=P*v,st=O*(1-Math.abs(c/60%2-1)),St=P-O;let Rt,Kt,$t;return c>=0&&c<60?[Rt,Kt,$t]=[O,st,0]:c>=60&&c<120?[Rt,Kt,$t]=[st,O,0]:c>=120&&c<180?[Rt,Kt,$t]=[0,O,st]:c>=180&&c<240?[Rt,Kt,$t]=[0,st,O]:c>=240&&c<300?[Rt,Kt,$t]=[st,0,O]:[Rt,Kt,$t]=[O,0,st],[(Rt+St)*255,(Kt+St)*255,($t+St)*255]}function Nu(o,n,r){const c=r+n*(100-Math.abs(2*r-100))/200;return[o,c!==0?n*(100-Math.abs(2*r-100))/c:0,r+n*(100-Math.abs(2*r-100))/(2*100)]}function Fu(o,n,r){const c=100-Math.abs(r*(200-n)/100-100);return[o,c!==0?n*r/c:0,r*(200-n)/(2*100)]}function Vn(o){return[o[0],o[1],o[2]]}function $o(o,n){return[o[0],o[1],o[2],n]}const Ou={hsl:{hsl:(o,n,r)=>[o,n,r],hsv:Nu,rgb:Uu},hsv:{hsl:Fu,hsv:(o,n,r)=>[o,n,r],rgb:Yo},rgb:{hsl:Du,hsv:Iu,rgb:(o,n,r)=>[o,n,r]}};function Dr(o,n){return[n==="float"?1:o==="rgb"?255:360,n==="float"?1:o==="rgb"?255:100,n==="float"?1:o==="rgb"?255:100]}function Bu(o,n){return o===n?n:qo(o,n)}function ku(o,n,r){var c;const v=Dr(n,r);return[n==="rgb"?_e(o[0],0,v[0]):Bu(o[0],v[0]),_e(o[1],0,v[1]),_e(o[2],0,v[2]),_e((c=o[3])!==null&&c!==void 0?c:1,0,1)]}function Zo(o,n,r,c){const v=Dr(n,r),P=Dr(n,c);return o.map((O,st)=>O/v[st]*P[st])}function Vu(o,n,r){const c=Zo(o,n.mode,n.type,"int"),v=Ou[n.mode][r.mode](...c);return Zo(v,r.mode,"int",r.type)}function Ur(o,n){return typeof o!="object"||_(o)?!1:n in o&&typeof o[n]=="number"}class Ht{static black(n="int"){return new Ht([0,0,0],"rgb",n)}static fromObject(n,r="int"){const c="a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b];return new Ht(c,"rgb",r)}static toRgbaObject(n,r="int"){return n.toRgbaObject(r)}static isRgbColorObject(n){return Ur(n,"r")&&Ur(n,"g")&&Ur(n,"b")}static isRgbaColorObject(n){return this.isRgbColorObject(n)&&Ur(n,"a")}static isColorObject(n){return this.isRgbColorObject(n)}static equals(n,r){if(n.mode!==r.mode)return!1;const c=n.comps_,v=r.comps_;for(let P=0;P<c.length;P++)if(c[P]!==v[P])return!1;return!0}constructor(n,r,c="int"){this.mode=r,this.type=c,this.comps_=ku(n,r,c)}getComponents(n,r="int"){return $o(Vu(Vn(this.comps_),{mode:this.mode,type:this.type},{mode:n??this.mode,type:r}),this.comps_[3])}toRgbaObject(n="int"){const r=this.getComponents("rgb",n);return{r:r[0],g:r[1],b:r[2],a:r[3]}}}const Tn=C("colp");class zu{constructor(n,r){this.alphaViews_=null,this.element=n.createElement("div"),this.element.classList.add(Tn()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(Tn("hsv"));const v=n.createElement("div");v.classList.add(Tn("sv")),this.svPaletteView_=r.svPaletteView,v.appendChild(this.svPaletteView_.element),c.appendChild(v);const P=n.createElement("div");P.classList.add(Tn("h")),this.hPaletteView_=r.hPaletteView,P.appendChild(this.hPaletteView_.element),c.appendChild(P),this.element.appendChild(c);const O=n.createElement("div");if(O.classList.add(Tn("rgb")),this.textView_=r.textView,O.appendChild(this.textView_.element),this.element.appendChild(O),r.alphaViews){this.alphaViews_={palette:r.alphaViews.palette,text:r.alphaViews.text};const st=n.createElement("div");st.classList.add(Tn("a"));const St=n.createElement("div");St.classList.add(Tn("ap")),St.appendChild(this.alphaViews_.palette.element),st.appendChild(St);const Rt=n.createElement("div");Rt.classList.add(Tn("at")),Rt.appendChild(this.alphaViews_.text.element),st.appendChild(Rt),this.element.appendChild(st)}}get allFocusableElements(){const n=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(r=>r.inputElement)];return this.alphaViews_&&n.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),n}}function Gu(o){return o==="int"?"int":o==="float"?"float":void 0}function Ss(o){const n=W;return at(o,{alpha:n.optional.boolean,color:n.optional.object({alpha:n.optional.boolean,type:n.optional.custom(Gu)}),expanded:n.optional.boolean,picker:n.optional.custom(jo)})}function zn(o){return o?.1:1}function Gn(o){var n;return(n=o.color)===null||n===void 0?void 0:n.type}function Hu(o,n){return o.alpha===n.alpha&&o.mode===n.mode&&o.notation===n.notation&&o.type===n.type}function He(o,n){const r=o.match(/^(.+)%$/);return Math.min(r?parseFloat(r[1])*.01*n:parseFloat(o),n)}const Wu={deg:o=>o,grad:o=>o*360/400,rad:o=>o*360/(2*Math.PI),turn:o=>o*360};function Jo(o){const n=o.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!n)return parseFloat(o);const r=parseFloat(n[1]),c=n[2];return Wu[c](r)}function Qo(o){const n=o.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[He(n[1],255),He(n[2],255),He(n[3],255)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function ta(o){return n=>{const r=Qo(n);return r?new Ht(r,"rgb",o):null}}function ea(o){const n=o.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[He(n[1],255),He(n[2],255),He(n[3],255),He(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function na(o){return n=>{const r=ea(n);return r?new Ht(r,"rgb",o):null}}function ia(o){const n=o.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[Jo(n[1]),He(n[2],100),He(n[3],100)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function ra(o){return n=>{const r=ia(n);return r?new Ht(r,"hsl",o):null}}function sa(o){const n=o.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[Jo(n[1]),He(n[2],100),He(n[3],100),He(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function oa(o){return n=>{const r=sa(n);return r?new Ht(r,"hsl",o):null}}function aa(o){const n=o.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)];const r=o.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:null}function Xu(o){const n=aa(o);return n?new Ht(n,"rgb","int"):null}function la(o){const n=o.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16),oe(parseInt(n[4]+n[4],16),0,255,0,1)];const r=o.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),oe(parseInt(r[4],16),0,255,0,1)]:null}function qu(o){const n=la(o);return n?new Ht(n,"rgb","int"):null}function ca(o){const n=o.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function ua(o){return n=>{const r=ca(n);return r?new Ht(r,"rgb",o):null}}function ha(o){const n=o.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3]),parseFloat(n[4])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function da(o){return n=>{const r=ha(n);return r?new Ht(r,"rgb",o):null}}const ju=[{parser:aa,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:la,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Qo,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:ea,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:ia,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:sa,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ca,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:ha,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Ku(o){return ju.reduce((n,{parser:r,result:c})=>n||(r(o)?c:null),null)}function ys(o,n="int"){const r=Ku(o);return r?r.notation==="hex"&&n!=="float"?Object.assign(Object.assign({},r),{type:"int"}):r.notation==="func"?Object.assign(Object.assign({},r),{type:n}):null:null}const pa={int:[Xu,qu,ta("int"),na("int"),ra("int"),oa("int"),ua("int"),da("int")],float:[ta("float"),na("float"),ra("float"),oa("float"),ua("float"),da("float")]};function Yu(o){const n=pa[o];return r=>{if(typeof r!="string")return Ht.black(o);const c=n.reduce((v,P)=>v||P(r),null);return c??Ht.black(o)}}function Ts(o){const n=pa[o];return r=>n.reduce((c,v)=>c||v(r),null)}function fa(o){const n=_e(Math.floor(o),0,255).toString(16);return n.length===1?`0${n}`:n}function ma(o,n="#"){const r=Vn(o.getComponents("rgb")).map(fa).join("");return`${n}${r}`}function Cs(o,n="#"){const r=o.getComponents("rgb"),c=[r[0],r[1],r[2],r[3]*255].map(fa).join("");return`${n}${c}`}function _a(o,n){const r=we(n==="float"?2:0);return`rgb(${Vn(o.getComponents("rgb",n)).map(v=>r(v)).join(", ")})`}function $u(o){return n=>_a(n,o)}function Ir(o,n){const r=we(2),c=we(n==="float"?2:0);return`rgba(${o.getComponents("rgb",n).map((P,O)=>(O===3?r:c)(P)).join(", ")})`}function Zu(o){return n=>Ir(n,o)}function Ju(o){const n=[we(0),Ar,Ar];return`hsl(${Vn(o.getComponents("hsl")).map((c,v)=>n[v](c)).join(", ")})`}function Qu(o){const n=[we(0),Ar,Ar,we(2)];return`hsla(${o.getComponents("hsl").map((c,v)=>n[v](c)).join(", ")})`}function va(o,n){const r=we(n==="float"?2:0),c=["r","g","b"];return`{${Vn(o.getComponents("rgb",n)).map((P,O)=>`${c[O]}: ${r(P)}`).join(", ")}}`}function th(o){return n=>va(n,o)}function ga(o,n){const r=we(2),c=we(n==="float"?2:0),v=["r","g","b","a"];return`{${o.getComponents("rgb",n).map((O,st)=>{const St=st===3?r:c;return`${v[st]}: ${St(O)}`}).join(", ")}}`}function eh(o){return n=>ga(n,o)}const nh=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:ma},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Cs},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Ju},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Qu},...["int","float"].reduce((o,n)=>[...o,{format:{alpha:!1,mode:"rgb",notation:"func",type:n},stringifier:$u(n)},{format:{alpha:!0,mode:"rgb",notation:"func",type:n},stringifier:Zu(n)},{format:{alpha:!1,mode:"rgb",notation:"object",type:n},stringifier:th(n)},{format:{alpha:!0,mode:"rgb",notation:"object",type:n},stringifier:eh(n)}],[])];function As(o){return nh.reduce((n,r)=>n||(Hu(r.format,o)?r.stringifier:null),null)}const rr=C("apl");class ih{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(rr()),r.viewProps.bindClassModifiers(this.element),r.viewProps.bindTabIndex(this.element);const c=n.createElement("div");c.classList.add(rr("b")),this.element.appendChild(c);const v=n.createElement("div");v.classList.add(rr("c")),c.appendChild(v),this.colorElem_=v;const P=n.createElement("div");P.classList.add(rr("m")),this.element.appendChild(P),this.markerElem_=P;const O=n.createElement("div");O.classList.add(rr("p")),this.markerElem_.appendChild(O),this.previewElem_=O,this.update_()}update_(){const n=this.value.rawValue,r=n.getComponents("rgb"),c=new Ht([r[0],r[1],r[2],0],"rgb"),v=new Ht([r[0],r[1],r[2],255],"rgb"),P=["to right",Ir(c),Ir(v)];this.colorElem_.style.background=`linear-gradient(${P.join(",")})`,this.previewElem_.style.backgroundColor=Ir(n);const O=oe(r[3],0,1,0,100);this.markerElem_.style.left=`${O}%`}onValueChange_(){this.update_()}}class rh{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new ih(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const c=n.point.x/n.bounds.width,v=this.value.rawValue,[P,O,st]=v.getComponents("hsv");this.value.setRawValue(new Ht([P,O,st,c],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=De(zn(!0),dn(n));if(r===0)return;const c=this.value.rawValue,[v,P,O,st]=c.getComponents("hsv");this.value.setRawValue(new Ht([v,P,O,st+r],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){De(zn(!0),dn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const hi=C("coltxt");function sh(o){const n=o.createElement("select"),r=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return n.appendChild(r.reduce((c,v)=>{const P=o.createElement("option");return P.textContent=v.text,P.value=v.value,c.appendChild(P),c},o.createDocumentFragment())),n}class oh{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(hi()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(hi("m")),this.modeElem_=sh(n),this.modeElem_.classList.add(hi("ms")),c.appendChild(this.modeSelectElement),r.viewProps.bindDisabled(this.modeElem_);const v=n.createElement("div");v.classList.add(hi("mm")),v.appendChild(H(n,"dropdown")),c.appendChild(v),this.element.appendChild(c);const P=n.createElement("div");P.classList.add(hi("w")),this.element.appendChild(P),this.textsElem_=P,this.textViews_=r.textViews,this.applyTextViews_(),F(r.colorMode,O=>{this.modeElem_.value=O})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(n){this.textViews_=n,this.applyTextViews_()}applyTextViews_(){pt(this.textsElem_);const n=this.element.ownerDocument;this.textViews_.forEach(r=>{const c=n.createElement("div");c.classList.add(hi("c")),c.appendChild(r.element),this.textsElem_.appendChild(c)})}}function ah(o){return we(o==="float"?2:0)}function lh(o,n,r){const c=Dr(o,n)[r];return new li({min:0,max:c})}function Ps(o,n,r){return new nr(o,{arrayPosition:r===0?"fst":r===3-1?"lst":"mid",baseStep:zn(!1),parser:n.parser,props:z.fromObject({draggingScale:n.colorType==="float"?.01:1,formatter:ah(n.colorType)}),value:$(0,{constraint:lh(n.colorMode,n.colorType,r)}),viewProps:n.viewProps})}class ch{constructor(n,r){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=r.colorType,this.parser_=r.parser,this.value=r.value,this.viewProps=r.viewProps,this.colorMode=$(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(n),this.view=new oh(n,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(n){const r={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},c=[Ps(n,r,0),Ps(n,r,1),Ps(n,r,2)];return c.forEach((v,P)=>{tr({primary:this.value,secondary:v.value,forward:O=>O.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[P],backward:(O,st)=>{const St=this.colorMode.rawValue,Rt=O.rawValue.getComponents(St,this.colorType_);return Rt[P]=st.rawValue,new Ht($o(Vn(Rt),Rt[3]),St,this.colorType_)}})}),c}onModeSelectChange_(n){const r=n.currentTarget;this.colorMode.rawValue=r.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Rs=C("hpl");class uh{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Rs()),r.viewProps.bindClassModifiers(this.element),r.viewProps.bindTabIndex(this.element);const c=n.createElement("div");c.classList.add(Rs("c")),this.element.appendChild(c);const v=n.createElement("div");v.classList.add(Rs("m")),this.element.appendChild(v),this.markerElem_=v,this.update_()}update_(){const n=this.value.rawValue,[r]=n.getComponents("hsv");this.markerElem_.style.backgroundColor=_a(new Ht([r,100,100],"hsv"));const c=oe(r,0,360,0,100);this.markerElem_.style.left=`${c}%`}onValueChange_(){this.update_()}}class hh{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new uh(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const c=oe(_e(n.point.x,0,n.bounds.width),0,n.bounds.width,0,360),v=this.value.rawValue,[,P,O,st]=v.getComponents("hsv");this.value.setRawValue(new Ht([c,P,O,st],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=De(zn(!1),dn(n));if(r===0)return;const c=this.value.rawValue,[v,P,O,st]=c.getComponents("hsv");this.value.setRawValue(new Ht([v+r,P,O,st],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){De(zn(!1),dn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ls=C("svp"),xa=64;class dh{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Ls()),r.viewProps.bindClassModifiers(this.element),r.viewProps.bindTabIndex(this.element);const c=n.createElement("canvas");c.height=xa,c.width=xa,c.classList.add(Ls("c")),this.element.appendChild(c),this.canvasElement=c;const v=n.createElement("div");v.classList.add(Ls("m")),this.element.appendChild(v),this.markerElem_=v,this.update_()}update_(){const n=T(this.canvasElement);if(!n)return;const c=this.value.rawValue.getComponents("hsv"),v=this.canvasElement.width,P=this.canvasElement.height,O=n.getImageData(0,0,v,P),st=O.data;for(let Kt=0;Kt<P;Kt++)for(let $t=0;$t<v;$t++){const Hn=oe($t,0,v,0,100),or=oe(Kt,0,P,100,0),ar=Yo(c[0],Hn,or),Nr=(Kt*v+$t)*4;st[Nr]=ar[0],st[Nr+1]=ar[1],st[Nr+2]=ar[2],st[Nr+3]=255}n.putImageData(O,0,0);const St=oe(c[1],0,100,0,100);this.markerElem_.style.left=`${St}%`;const Rt=oe(c[2],0,100,100,0);this.markerElem_.style.top=`${Rt}%`}onValueChange_(){this.update_()}}class ph{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new dh(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const c=oe(n.point.x,0,n.bounds.width,0,100),v=oe(n.point.y,0,n.bounds.height,100,0),[P,,,O]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ht([P,c,v,O],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){Wo(n.key)&&n.preventDefault();const[r,c,v,P]=this.value.rawValue.getComponents("hsv"),O=zn(!1),st=De(O,dn(n)),St=De(O,er(n));st===0&&St===0||this.value.setRawValue(new Ht([r,c+st,v+St,P],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){const r=zn(!1),c=De(r,dn(n)),v=De(r,er(n));c===0&&v===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class fh{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.hPaletteC_=new hh(n,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new ph(n,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=r.supportsAlpha?{palette:new rh(n,{value:this.value,viewProps:this.viewProps}),text:new nr(n,{parser:hn,baseStep:.1,props:z.fromObject({draggingScale:.01,formatter:we(2)}),value:$(0,{constraint:new li({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&tr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:c=>c.rawValue.getComponents()[3],backward:(c,v)=>{const P=c.rawValue.getComponents();return P[3]=v.rawValue,new Ht(P,c.rawValue.mode)}}),this.textC_=new ch(n,{colorType:r.colorType,parser:hn,value:this.value,viewProps:this.viewProps}),this.view=new zu(n,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:r.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view,viewProps:this.viewProps})}get textController(){return this.textC_}}const Ds=C("colsw");class mh{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.element=n.createElement("div"),this.element.classList.add(Ds()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(Ds("sw")),this.element.appendChild(c),this.swatchElem_=c;const v=n.createElement("button");v.classList.add(Ds("b")),r.viewProps.bindDisabled(v),this.element.appendChild(v),this.buttonElement=v,this.update_()}update_(){const n=this.value.rawValue;this.swatchElem_.style.backgroundColor=Cs(n)}onValueChange_(){this.update_()}}class _h{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new mh(n,{value:this.value,viewProps:this.viewProps})}}class Us{constructor(n,r){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=Xt.create(r.expanded),this.swatchC_=new _h(n,{value:this.value,viewProps:this.viewProps});const c=this.swatchC_.view.buttonElement;c.addEventListener("blur",this.onButtonBlur_),c.addEventListener("click",this.onButtonClick_),this.textC_=new Cr(n,{parser:r.parser,props:z.fromObject({formatter:r.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Lu(n,{foldable:this.foldable_,pickerLayout:r.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=r.pickerLayout==="popup"?new No(n,{viewProps:this.viewProps}):null;const v=new fh(n,{colorType:r.colorType,supportsAlpha:r.supportsAlpha,value:this.value,viewProps:this.viewProps});v.view.allFocusableElements.forEach(P=>{P.addEventListener("blur",this.onPopupChildBlur_),P.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=v,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(v.view.element),tr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:P=>P.rawValue,backward:(P,O)=>O.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),X(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,c=n.relatedTarget;(!c||!r.contains(c))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,c=_t(n);c&&r.contains(c)||c&&c===this.swatchC_.view.buttonElement&&!qt(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function vh(o,n){return Ht.isColorObject(o)?Ht.fromObject(o,n):Ht.black(n)}function gh(o){return Vn(o.getComponents("rgb")).reduce((n,r)=>n<<8|Math.floor(r)&255,0)}function xh(o){return o.getComponents("rgb").reduce((n,r,c)=>{const v=Math.floor(c===3?r*255:r)&255;return n<<8|v},0)>>>0}function bh(o){return new Ht([o>>16&255,o>>8&255,o&255],"rgb")}function Mh(o){return new Ht([o>>24&255,o>>16&255,o>>8&255,oe(o&255,0,255,0,1)],"rgb")}function wh(o){return typeof o!="number"?Ht.black():bh(o)}function Eh(o){return typeof o!="number"?Ht.black():Mh(o)}function Sh(o){const n=As(o);return n?(r,c)=>{ir(r,n(c))}:null}function yh(o){const n=o?xh:gh;return(r,c)=>{ir(r,n(c))}}function Th(o,n,r){const c=n.toRgbaObject(r);o.writeProperty("r",c.r),o.writeProperty("g",c.g),o.writeProperty("b",c.b),o.writeProperty("a",c.a)}function Ch(o,n,r){const c=n.toRgbaObject(r);o.writeProperty("r",c.r),o.writeProperty("g",c.g),o.writeProperty("b",c.b)}function Ah(o,n){return(r,c)=>{o?Th(r,c,n):Ch(r,c,n)}}function Is(o){var n;return!!(o!=null&&o.alpha||!((n=o==null?void 0:o.color)===null||n===void 0)&&n.alpha)}function Ph(o){return o?n=>Cs(n,"0x"):n=>ma(n,"0x")}function Rh(o){return"color"in o||"view"in o&&o.view==="color"}const Lh={id:"input-color-number",type:"input",accept:(o,n)=>{if(typeof o!="number"||!Rh(n))return null;const r=Ss(n);return r?{initialValue:o,params:r}:null},binding:{reader:o=>Is(o.params)?Eh:wh,equals:Ht.equals,writer:o=>yh(Is(o.params))},controller:o=>{const n=Is(o.params),r="expanded"in o.params?o.params.expanded:void 0,c="picker"in o.params?o.params.picker:void 0;return new Us(o.document,{colorType:"int",expanded:r??!1,formatter:Ph(n),parser:Ts("int"),pickerLayout:c??"popup",supportsAlpha:n,value:o.value,viewProps:o.viewProps})}};function Dh(o){return Ht.isRgbaColorObject(o)}function Uh(o){return n=>vh(n,o)}function Ih(o,n){return r=>o?ga(r,n):va(r,n)}const Nh={id:"input-color-object",type:"input",accept:(o,n)=>{if(!Ht.isColorObject(o))return null;const r=Ss(n);return r?{initialValue:o,params:r}:null},binding:{reader:o=>Uh(Gn(o.params)),equals:Ht.equals,writer:o=>Ah(Dh(o.initialValue),Gn(o.params))},controller:o=>{var n;const r=Ht.isRgbaColorObject(o.initialValue),c="expanded"in o.params?o.params.expanded:void 0,v="picker"in o.params?o.params.picker:void 0,P=(n=Gn(o.params))!==null&&n!==void 0?n:"int";return new Us(o.document,{colorType:P,expanded:c??!1,formatter:Ih(r,P),parser:Ts(P),pickerLayout:v??"popup",supportsAlpha:r,value:o.value,viewProps:o.viewProps})}},Fh={id:"input-color-string",type:"input",accept:(o,n)=>{if(typeof o!="string"||"view"in n&&n.view==="text")return null;const r=ys(o,Gn(n));if(!r||!As(r))return null;const v=Ss(n);return v?{initialValue:o,params:v}:null},binding:{reader:o=>{var n;return Yu((n=Gn(o.params))!==null&&n!==void 0?n:"int")},equals:Ht.equals,writer:o=>{const n=ys(o.initialValue,Gn(o.params));if(!n)throw M.shouldNeverHappen();const r=Sh(n);if(!r)throw M.notBindable();return r}},controller:o=>{const n=ys(o.initialValue,Gn(o.params));if(!n)throw M.shouldNeverHappen();const r=As(n);if(!r)throw M.shouldNeverHappen();const c="expanded"in o.params?o.params.expanded:void 0,v="picker"in o.params?o.params.picker:void 0;return new Us(o.document,{colorType:n.type,expanded:c??!1,formatter:r,parser:Ts(n.type),pickerLayout:v??"popup",supportsAlpha:n.alpha,value:o.value,viewProps:o.viewProps})}};class Cn{constructor(n){this.components=n.components,this.asm_=n.assembly}constrain(n){const r=this.asm_.toComponents(n).map((c,v)=>{var P,O;return(O=(P=this.components[v])===null||P===void 0?void 0:P.constrain(c))!==null&&O!==void 0?O:c});return this.asm_.fromComponents(r)}}const ba=C("pndtxt");class Oh{constructor(n,r){this.textViews=r.textViews,this.element=n.createElement("div"),this.element.classList.add(ba()),this.textViews.forEach(c=>{const v=n.createElement("div");v.classList.add(ba("a")),v.appendChild(c.element),this.element.appendChild(v)})}}function Bh(o,n,r){return new nr(o,{arrayPosition:r===0?"fst":r===n.axes.length-1?"lst":"mid",baseStep:n.axes[r].baseStep,parser:n.parser,props:n.axes[r].textProps,value:$(0,{constraint:n.axes[r].constraint}),viewProps:n.viewProps})}class Ns{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.acs_=r.axes.map((c,v)=>Bh(n,r,v)),this.acs_.forEach((c,v)=>{tr({primary:this.value,secondary:c.value,forward:P=>r.assembly.toComponents(P.rawValue)[v],backward:(P,O)=>{const st=r.assembly.toComponents(P.rawValue);return st[v]=O.rawValue,r.assembly.fromComponents(st)}})}),this.view=new Oh(n,{textViews:this.acs_.map(c=>c.view)})}}function Ma(o,n){return"step"in o&&!_(o.step)?new Tr(o.step,n):null}function wa(o){return!_(o.max)&&!_(o.min)?new li({max:o.max,min:o.min}):!_(o.max)||!_(o.min)?new Uo({max:o.max,min:o.min}):null}function kh(o){const n=un(o,li);if(n)return[n.values.get("min"),n.values.get("max")];const r=un(o,Uo);return r?[r.minValue,r.maxValue]:[void 0,void 0]}function Vh(o,n){const r=[],c=Ma(o,n);c&&r.push(c);const v=wa(o);v&&r.push(v);const P=Es(o.options);return P&&r.push(P),new Yi(r)}const zh={id:"input-number",type:"input",accept:(o,n)=>{if(typeof o!="number")return null;const r=W,c=at(n,{format:r.optional.function,max:r.optional.number,min:r.optional.number,options:r.optional.custom(Pr),step:r.optional.number});return c?{initialValue:o,params:c}:null},binding:{reader:o=>Go,constraint:o=>Vh(o.params,o.initialValue),writer:o=>ir},controller:o=>{var n;const r=o.value,c=o.constraint,v=c&&un(c,$i);if(v)return new Zi(o.document,{props:new z({options:v.values.value("options")}),value:r,viewProps:o.viewProps});const P=(n="format"in o.params?o.params.format:void 0)!==null&&n!==void 0?n:we(Rr(c,r.rawValue)),O=c&&un(c,li);return O?new ws(o.document,{baseStep:ci(c),parser:hn,sliderProps:new z({maxValue:O.values.value("max"),minValue:O.values.value("min")}),textProps:z.fromObject({draggingScale:ui(c,r.rawValue),formatter:P}),value:r,viewProps:o.viewProps}):new nr(o.document,{baseStep:ci(c),parser:hn,props:z.fromObject({draggingScale:ui(c,r.rawValue),formatter:P}),value:r,viewProps:o.viewProps})}};class An{constructor(n=0,r=0){this.x=n,this.y=r}getComponents(){return[this.x,this.y]}static isObject(n){if(_(n))return!1;const r=n.x,c=n.y;return!(typeof r!="number"||typeof c!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y}toObject(){return{x:this.x,y:this.y}}}const Ea={toComponents:o=>o.getComponents(),fromComponents:o=>new An(...o)},di=C("p2d");class Gh{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(di()),r.viewProps.bindClassModifiers(this.element),F(r.expanded,L(this.element,di(void 0,"expanded")));const c=n.createElement("div");c.classList.add(di("h")),this.element.appendChild(c);const v=n.createElement("button");v.classList.add(di("b")),v.appendChild(H(n,"p2dpad")),r.viewProps.bindDisabled(v),c.appendChild(v),this.buttonElement=v;const P=n.createElement("div");if(P.classList.add(di("t")),c.appendChild(P),this.textElement=P,r.pickerLayout==="inline"){const O=n.createElement("div");O.classList.add(di("p")),this.element.appendChild(O),this.pickerElement=O}else this.pickerElement=null}}const Pn=C("p2dp");class Hh{constructor(n,r){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=r.invertsY,this.maxValue_=r.maxValue,this.element=n.createElement("div"),this.element.classList.add(Pn()),r.layout==="popup"&&this.element.classList.add(Pn(void 0,"p")),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("div");c.classList.add(Pn("p")),r.viewProps.bindTabIndex(c),this.element.appendChild(c),this.padElement=c;const v=n.createElementNS(te,"svg");v.classList.add(Pn("g")),this.padElement.appendChild(v),this.svgElem_=v;const P=n.createElementNS(te,"line");P.classList.add(Pn("ax")),P.setAttributeNS(null,"x1","0"),P.setAttributeNS(null,"y1","50%"),P.setAttributeNS(null,"x2","100%"),P.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(P);const O=n.createElementNS(te,"line");O.classList.add(Pn("ax")),O.setAttributeNS(null,"x1","50%"),O.setAttributeNS(null,"y1","0"),O.setAttributeNS(null,"x2","50%"),O.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(O);const st=n.createElementNS(te,"line");st.classList.add(Pn("l")),st.setAttributeNS(null,"x1","50%"),st.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(st),this.lineElem_=st;const St=n.createElement("div");St.classList.add(Pn("m")),this.padElement.appendChild(St),this.markerElem_=St,r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[n,r]=this.value.rawValue.getComponents(),c=this.maxValue_,v=oe(n,-c,+c,0,100),P=oe(r,-c,+c,0,100),O=this.invertsY_?100-P:P;this.lineElem_.setAttributeNS(null,"x2",`${v}%`),this.lineElem_.setAttributeNS(null,"y2",`${O}%`),this.markerElem_.style.left=`${v}%`,this.markerElem_.style.top=`${O}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Sa(o,n,r){return[De(n[0],dn(o)),De(n[1],er(o))*(r?1:-1)]}class Wh{constructor(n,r){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.baseSteps_=r.baseSteps,this.maxValue_=r.maxValue,this.invertsY_=r.invertsY,this.view=new Hh(n,{invertsY:this.invertsY_,layout:r.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const c=this.maxValue_,v=oe(n.point.x,0,n.bounds.width,-c,+c),P=oe(this.invertsY_?n.bounds.height-n.point.y:n.point.y,0,n.bounds.height,-c,+c);this.value.setRawValue(new An(v,P),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onPadKeyDown_(n){Wo(n.key)&&n.preventDefault();const[r,c]=Sa(n,this.baseSteps_,this.invertsY_);r===0&&c===0||this.value.setRawValue(new An(this.value.rawValue.x+r,this.value.rawValue.y+c),{forceEmit:!1,last:!1})}onPadKeyUp_(n){const[r,c]=Sa(n,this.baseSteps_,this.invertsY_);r===0&&c===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Xh{constructor(n,r){var c,v;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=Xt.create(r.expanded),this.popC_=r.pickerLayout==="popup"?new No(n,{viewProps:this.viewProps}):null;const P=new Wh(n,{baseSteps:[r.axes[0].baseStep,r.axes[1].baseStep],invertsY:r.invertsY,layout:r.pickerLayout,maxValue:r.maxValue,value:this.value,viewProps:this.viewProps});P.view.allFocusableElements.forEach(O=>{O.addEventListener("blur",this.onPopupChildBlur_),O.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=P,this.textC_=new Ns(n,{assembly:Ea,axes:r.axes,parser:r.parser,value:this.value,viewProps:this.viewProps}),this.view=new Gh(n,{expanded:this.foldable_.value("expanded"),pickerLayout:r.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(c=this.view.buttonElement)===null||c===void 0||c.addEventListener("blur",this.onPadButtonBlur_),(v=this.view.buttonElement)===null||v===void 0||v.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),tr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:O=>O.rawValue,backward:(O,st)=>st.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),X(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,c=n.relatedTarget;(!c||!r.contains(c))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,c=_t(n);c&&r.contains(c)||c&&c===this.view.buttonElement&&!qt(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.view.buttonElement.focus()}}class pi{constructor(n=0,r=0,c=0){this.x=n,this.y=r,this.z=c}getComponents(){return[this.x,this.y,this.z]}static isObject(n){if(_(n))return!1;const r=n.x,c=n.y,v=n.z;return!(typeof r!="number"||typeof c!="number"||typeof v!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const ya={toComponents:o=>o.getComponents(),fromComponents:o=>new pi(...o)};function qh(o){return pi.isObject(o)?new pi(o.x,o.y,o.z):new pi}function jh(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y),o.writeProperty("z",n.z)}function Kh(o,n){return new Cn({assembly:ya,components:[pn("x"in o?o.x:void 0,n.x),pn("y"in o?o.y:void 0,n.y),pn("z"in o?o.z:void 0,n.z)]})}function Fs(o,n){return{baseStep:ci(n),constraint:n,textProps:z.fromObject({draggingScale:ui(n,o),formatter:we(Rr(n,o))})}}const Yh={id:"input-point3d",type:"input",accept:(o,n)=>{if(!pi.isObject(o))return null;const r=W,c=at(n,{x:r.optional.custom(yn),y:r.optional.custom(yn),z:r.optional.custom(yn)});return c?{initialValue:o,params:c}:null},binding:{reader:o=>qh,constraint:o=>Kh(o.params,o.initialValue),equals:pi.equals,writer:o=>jh},controller:o=>{const n=o.value,r=o.constraint;if(!(r instanceof Cn))throw M.shouldNeverHappen();return new Ns(o.document,{assembly:ya,axes:[Fs(n.rawValue.x,r.components[0]),Fs(n.rawValue.y,r.components[1]),Fs(n.rawValue.z,r.components[2])],parser:hn,value:n,viewProps:o.viewProps})}};class fi{constructor(n=0,r=0,c=0,v=0){this.x=n,this.y=r,this.z=c,this.w=v}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(n){if(_(n))return!1;const r=n.x,c=n.y,v=n.z,P=n.w;return!(typeof r!="number"||typeof c!="number"||typeof v!="number"||typeof P!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z&&n.w===r.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Ta={toComponents:o=>o.getComponents(),fromComponents:o=>new fi(...o)};function $h(o){return fi.isObject(o)?new fi(o.x,o.y,o.z,o.w):new fi}function Zh(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y),o.writeProperty("z",n.z),o.writeProperty("w",n.w)}function Jh(o,n){return new Cn({assembly:Ta,components:[pn("x"in o?o.x:void 0,n.x),pn("y"in o?o.y:void 0,n.y),pn("z"in o?o.z:void 0,n.z),pn("w"in o?o.w:void 0,n.w)]})}function Qh(o,n){return{baseStep:ci(n),constraint:n,textProps:z.fromObject({draggingScale:ui(n,o),formatter:we(Rr(n,o))})}}const td={id:"input-point4d",type:"input",accept:(o,n)=>{if(!fi.isObject(o))return null;const r=W,c=at(n,{x:r.optional.custom(yn),y:r.optional.custom(yn),z:r.optional.custom(yn),w:r.optional.custom(yn)});return c?{initialValue:o,params:c}:null},binding:{reader:o=>$h,constraint:o=>Jh(o.params,o.initialValue),equals:fi.equals,writer:o=>Zh},controller:o=>{const n=o.value,r=o.constraint;if(!(r instanceof Cn))throw M.shouldNeverHappen();return new Ns(o.document,{assembly:Ta,axes:n.rawValue.getComponents().map((c,v)=>Qh(c,r.components[v])),parser:hn,value:n,viewProps:o.viewProps})}};function ed(o){const n=[],r=Es(o.options);return r&&n.push(r),new Yi(n)}const nd={id:"input-string",type:"input",accept:(o,n)=>{if(typeof o!="string")return null;const c=at(n,{options:W.optional.custom(Pr)});return c?{initialValue:o,params:c}:null},binding:{reader:o=>Ho,constraint:o=>ed(o.params),writer:o=>ir},controller:o=>{const n=o.document,r=o.value,c=o.constraint,v=c&&un(c,$i);return v?new Zi(n,{props:new z({options:v.values.value("options")}),value:r,viewProps:o.viewProps}):new Cr(n,{parser:P=>P,props:z.fromObject({formatter:gs}),value:r,viewProps:o.viewProps})}},sr={monitor:{defaultInterval:200,defaultLineCount:3}},Ca=C("mll");class id{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(Ca()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("textarea");c.classList.add(Ca("i")),c.style.height=`calc(var(--bld-us) * ${r.lineCount})`,c.readOnly=!0,r.viewProps.bindDisabled(c),this.element.appendChild(c),this.textareaElem_=c,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.textareaElem_,r=n.scrollTop===n.scrollHeight-n.clientHeight,c=[];this.value.rawValue.forEach(v=>{v!==void 0&&c.push(this.formatter_(v))}),n.textContent=c.join(`
`),r&&(n.scrollTop=n.scrollHeight)}onValueUpdate_(){this.update_()}}class Os{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new id(n,{formatter:r.formatter,lineCount:r.lineCount,value:this.value,viewProps:this.viewProps})}}const Aa=C("sgl");class rd{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(Aa()),r.viewProps.bindClassModifiers(this.element);const c=n.createElement("input");c.classList.add(Aa("i")),c.readOnly=!0,c.type="text",r.viewProps.bindDisabled(c),this.element.appendChild(c),this.inputElement=c,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.value.rawValue,r=n[n.length-1];this.inputElement.value=r!==void 0?this.formatter_(r):""}onValueUpdate_(){this.update_()}}class Bs{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new rd(n,{formatter:r.formatter,value:this.value,viewProps:this.viewProps})}}const sd={id:"monitor-bool",type:"monitor",accept:(o,n)=>{if(typeof o!="boolean")return null;const c=at(n,{lineCount:W.optional.number});return c?{initialValue:o,params:c}:null},binding:{reader:o=>Oo},controller:o=>{var n;return o.value.rawValue.length===1?new Bs(o.document,{formatter:Bo,value:o.value,viewProps:o.viewProps}):new Os(o.document,{formatter:Bo,lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:sr.monitor.defaultLineCount,value:o.value,viewProps:o.viewProps})}},Rn=C("grl");class od{constructor(n,r){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Rn()),r.viewProps.bindClassModifiers(this.element),this.formatter_=r.formatter,this.props_=r.props,this.cursor_=r.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const c=n.createElementNS(te,"svg");c.classList.add(Rn("g")),c.style.height=`calc(var(--bld-us) * ${r.lineCount})`,this.element.appendChild(c),this.svgElem_=c;const v=n.createElementNS(te,"polyline");this.svgElem_.appendChild(v),this.lineElem_=v;const P=n.createElement("div");P.classList.add(Rn("t"),C("tt")()),this.element.appendChild(P),this.tooltipElem_=P,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const n=this.svgElem_.getBoundingClientRect(),r=this.value.rawValue.length-1,c=this.props_.get("minValue"),v=this.props_.get("maxValue"),P=[];this.value.rawValue.forEach((Kt,$t)=>{if(Kt===void 0)return;const Hn=oe($t,0,r,0,n.width),or=oe(Kt,c,v,n.height,0);P.push([Hn,or].join(","))}),this.lineElem_.setAttributeNS(null,"points",P.join(" "));const O=this.tooltipElem_,st=this.value.rawValue[this.cursor_.rawValue];if(st===void 0){O.classList.remove(Rn("t","a"));return}const St=oe(this.cursor_.rawValue,0,r,0,n.width),Rt=oe(st,c,v,n.height,0);O.style.left=`${St}px`,O.style.top=`${Rt}px`,O.textContent=`${this.formatter_(st)}`,O.classList.contains(Rn("t","a"))||(O.classList.add(Rn("t","a"),Rn("t","in")),ae(O),O.classList.remove(Rn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class ad{constructor(n,r){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=r.props,this.value=r.value,this.viewProps=r.viewProps,this.cursor_=$(-1),this.view=new od(n,{cursor:this.cursor_,formatter:r.formatter,lineCount:r.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!qt(n))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const c=new Bn(this.view.element);c.emitter.on("down",this.onGraphPointerDown_),c.emitter.on("move",this.onGraphPointerMove_),c.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(n){const r=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(oe(n.offsetX,0,r.width,0,this.value.rawValue.length))}onGraphPointerDown_(n){this.onGraphPointerMove_(n)}onGraphPointerMove_(n){if(!n.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(oe(n.data.point.x,0,n.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function ks(o){return"format"in o&&!_(o.format)?o.format:we(2)}function ld(o){var n;return o.value.rawValue.length===1?new Bs(o.document,{formatter:ks(o.params),value:o.value,viewProps:o.viewProps}):new Os(o.document,{formatter:ks(o.params),lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:sr.monitor.defaultLineCount,value:o.value,viewProps:o.viewProps})}function cd(o){var n,r,c;return new ad(o.document,{formatter:ks(o.params),lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:sr.monitor.defaultLineCount,props:z.fromObject({maxValue:(r="max"in o.params?o.params.max:null)!==null&&r!==void 0?r:100,minValue:(c="min"in o.params?o.params.min:null)!==null&&c!==void 0?c:0}),value:o.value,viewProps:o.viewProps})}function Pa(o){return"view"in o&&o.view==="graph"}const ud={id:"monitor-number",type:"monitor",accept:(o,n)=>{if(typeof o!="number")return null;const r=W,c=at(n,{format:r.optional.function,lineCount:r.optional.number,max:r.optional.number,min:r.optional.number,view:r.optional.string});return c?{initialValue:o,params:c}:null},binding:{defaultBufferSize:o=>Pa(o)?64:1,reader:o=>Go},controller:o=>Pa(o.params)?cd(o):ld(o)},hd={id:"monitor-string",type:"monitor",accept:(o,n)=>{if(typeof o!="string")return null;const r=W,c=at(n,{lineCount:r.optional.number,multiline:r.optional.boolean});return c?{initialValue:o,params:c}:null},binding:{reader:o=>Ho},controller:o=>{var n;const r=o.value;return r.rawValue.length>1||"multiline"in o.params&&o.params.multiline?new Os(o.document,{formatter:gs,lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:sr.monitor.defaultLineCount,value:r,viewProps:o.viewProps}):new Bs(o.document,{formatter:gs,value:r,viewProps:o.viewProps})}};function dd(o,n){var r;const c=o.accept(n.target.read(),n.params);if(_(c))return null;const v=W,P={target:n.target,initialValue:c.initialValue,params:c.params},O=o.binding.reader(P),st=o.binding.constraint?o.binding.constraint(P):void 0,St=$(O(c.initialValue),{constraint:st,equals:o.binding.equals}),Rt=new Bc({reader:O,target:n.target,value:St,writer:o.binding.writer(P)}),Kt=v.optional.boolean(n.params.disabled).value,$t=v.optional.boolean(n.params.hidden).value,Hn=o.controller({constraint:st,document:n.document,initialValue:c.initialValue,params:c.params,value:Rt.value,viewProps:bt.create({disabled:Kt,hidden:$t})});return new jt(n.document,{binding:Rt,blade:Nt(),props:z.fromObject({label:"label"in n.params?(r=v.optional.string(n.params.label).value)!==null&&r!==void 0?r:null:n.target.key}),valueController:Hn})}function pd(o,n){return n===0?new Fc:new Oc(o,n??sr.monitor.defaultInterval)}function fd(o,n){var r,c,v;const P=W,O=o.accept(n.target.read(),n.params);if(_(O))return null;const st={target:n.target,initialValue:O.initialValue,params:O.params},St=o.binding.reader(st),Rt=(c=(r=P.optional.number(n.params.bufferSize).value)!==null&&r!==void 0?r:o.binding.defaultBufferSize&&o.binding.defaultBufferSize(O.params))!==null&&c!==void 0?c:1,Kt=P.optional.number(n.params.interval).value,$t=new Gc({reader:St,target:n.target,ticker:pd(n.document,Kt),value:kc(Rt)}),Hn=P.optional.boolean(n.params.disabled).value,or=P.optional.boolean(n.params.hidden).value,ar=o.controller({document:n.document,params:O.params,value:$t.value,viewProps:bt.create({disabled:Hn,hidden:or})});return new fe(n.document,{binding:$t,blade:Nt(),props:z.fromObject({label:"label"in n.params?(v=P.optional.string(n.params.label).value)!==null&&v!==void 0?v:null:n.target.key}),valueController:ar})}class md{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(n){n.type==="blade"?this.pluginsMap_.blades.unshift(n):n.type==="input"?this.pluginsMap_.inputs.unshift(n):n.type==="monitor"&&this.pluginsMap_.monitors.unshift(n)}createInput(n,r,c){const v=r.read();if(_(v))throw new M({context:{key:r.key},type:"nomatchingcontroller"});const P=this.pluginsMap_.inputs.reduce((O,st)=>O??dd(st,{document:n,target:r,params:c}),null);if(P)return P;throw new M({context:{key:r.key},type:"nomatchingcontroller"})}createMonitor(n,r,c){const v=this.pluginsMap_.monitors.reduce((P,O)=>P??fd(O,{document:n,params:c,target:r}),null);if(v)return v;throw new M({context:{key:r.key},type:"nomatchingcontroller"})}createBlade(n,r){const c=this.pluginsMap_.blades.reduce((v,P)=>v??Nc(P,{document:n,params:r}),null);if(!c)throw new M({type:"nomatchingview",context:{params:r}});return c}createBladeApi(n){if(n instanceof jt)return new ze(n);if(n instanceof fe)return new ye(n);if(n instanceof It)return new oi(n,this);const r=this.pluginsMap_.blades.reduce((c,v)=>c??v.api({controller:n,pool:this}),null);if(!r)throw M.shouldNeverHappen();return r}}function _d(){const o=new md;return[wd,Yh,td,nd,zh,Fh,Nh,Lh,Ru,sd,hd,ud,vt,Zt,Xi,Ki].forEach(n=>{o.register(n)}),o}function vd(o){return An.isObject(o)?new An(o.x,o.y):new An}function gd(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y)}function pn(o,n){if(!o)return;const r=[],c=Ma(o,n);c&&r.push(c);const v=wa(o);return v&&r.push(v),new Yi(r)}function xd(o,n){return new Cn({assembly:Ea,components:[pn("x"in o?o.x:void 0,n.x),pn("y"in o?o.y:void 0,n.y)]})}function Ra(o,n){const[r,c]=o?kh(o):[];if(!_(r)||!_(c))return Math.max(Math.abs(r??0),Math.abs(c??0));const v=ci(o);return Math.max(Math.abs(v)*10,Math.abs(n)*10)}function bd(o,n){const r=n instanceof Cn?n.components[0]:void 0,c=n instanceof Cn?n.components[1]:void 0,v=Ra(r,o.x),P=Ra(c,o.y);return Math.max(v,P)}function La(o,n){return{baseStep:ci(n),constraint:n,textProps:z.fromObject({draggingScale:ui(n,o),formatter:we(Rr(n,o))})}}function Md(o){if(!("y"in o))return!1;const n=o.y;return n&&"inverted"in n?!!n.inverted:!1}const wd={id:"input-point2d",type:"input",accept:(o,n)=>{if(!An.isObject(o))return null;const r=W,c=at(n,{expanded:r.optional.boolean,picker:r.optional.custom(jo),x:r.optional.custom(yn),y:r.optional.object({inverted:r.optional.boolean,max:r.optional.number,min:r.optional.number,step:r.optional.number})});return c?{initialValue:o,params:c}:null},binding:{reader:o=>vd,constraint:o=>xd(o.params,o.initialValue),equals:An.equals,writer:o=>gd},controller:o=>{const n=o.document,r=o.value,c=o.constraint;if(!(c instanceof Cn))throw M.shouldNeverHappen();const v="expanded"in o.params?o.params.expanded:void 0,P="picker"in o.params?o.params.picker:void 0;return new Xh(n,{axes:[La(r.rawValue.x,c.components[0]),La(r.rawValue.y,c.components[1])],expanded:v??!1,invertsY:Md(o.params),maxValue:bd(r.rawValue,c),parser:hn,pickerLayout:P??"popup",value:r,viewProps:o.viewProps})}};class Da extends a{constructor(n){super(n),this.emitter_=new R,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get options(){return this.controller_.valueController.props.get("options")}set options(n){this.controller_.valueController.props.set("options",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}}class Ua extends a{constructor(n){super(n),this.emitter_=new R,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(n){this.controller_.valueController.sliderController.props.set("maxValue",n)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(n){this.controller_.valueController.sliderController.props.set("minValue",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}}class Ia extends a{constructor(n){super(n),this.emitter_=new R,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(n){this.controller_.valueController.props.set("formatter",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const c=r.bind(this);return this.emitter_.on(n,v=>{c(v.event)}),this}}const Ed=function(){return{id:"list",type:"blade",accept(o){const n=W,r=at(o,{options:n.required.custom(Pr),value:n.required.raw,view:n.required.constant("list"),label:n.optional.string});return r?{params:r}:null},controller(o){const n=new $i(Ko(o.params.options)),r=$(o.params.value,{constraint:n}),c=new Zi(o.document,{props:new z({options:n.values.value("options")}),value:r,viewProps:o.viewProps});return new ce(o.document,{blade:o.blade,props:z.fromObject({label:o.params.label}),valueController:c})},api(o){return!(o.controller instanceof ce)||!(o.controller.valueController instanceof Zi)?null:new Da(o.controller)}}}();function Sd(o){return o.reduce((n,r)=>Object.assign(n,{[r.presetKey]:r.read()}),{})}function yd(o,n){o.forEach(r=>{const c=n[r.target.presetKey];c!==void 0&&r.writer(r.target,r.reader(c))})}class Td extends Wi{constructor(n,r){super(n,r)}get element(){return this.controller_.view.element}importPreset(n){const r=this.controller_.rackController.rack.find(jt).map(c=>c.binding);yd(r,n),this.refresh()}exportPreset(){const n=this.controller_.rackController.rack.find(jt).map(r=>r.binding.target);return Sd(n)}refresh(){this.controller_.rackController.rack.find(jt).forEach(n=>{n.binding.read()}),this.controller_.rackController.rack.find(fe).forEach(n=>{n.binding.read()})}}class Cd extends Ot{constructor(n,r){super(n,{expanded:r.expanded,blade:r.blade,props:r.props,root:!0,viewProps:r.viewProps})}}const Ad={id:"slider",type:"blade",accept(o){const n=W,r=at(o,{max:n.required.number,min:n.required.number,view:n.required.constant("slider"),format:n.optional.function,label:n.optional.string,value:n.optional.number});return r?{params:r}:null},controller(o){var n,r;const c=(n=o.params.value)!==null&&n!==void 0?n:0,v=new li({max:o.params.max,min:o.params.min}),P=new ws(o.document,{baseStep:1,parser:hn,sliderProps:new z({maxValue:v.values.value("max"),minValue:v.values.value("min")}),textProps:z.fromObject({draggingScale:ui(void 0,c),formatter:(r=o.params.format)!==null&&r!==void 0?r:xu}),value:$(c,{constraint:v}),viewProps:o.viewProps});return new ce(o.document,{blade:o.blade,props:z.fromObject({label:o.params.label}),valueController:P})},api(o){return!(o.controller instanceof ce)||!(o.controller.valueController instanceof ws)?null:new Ua(o.controller)}},Pd=function(){return{id:"text",type:"blade",accept(o){const n=W,r=at(o,{parse:n.required.function,value:n.required.raw,view:n.required.constant("text"),format:n.optional.function,label:n.optional.string});return r?{params:r}:null},controller(o){var n;const r=new Cr(o.document,{parser:o.params.parse,props:z.fromObject({formatter:(n=o.params.format)!==null&&n!==void 0?n:c=>String(c)}),value:$(o.params.value),viewProps:o.viewProps});return new ce(o.document,{blade:o.blade,props:z.fromObject({label:o.params.label}),valueController:r})},api(o){return!(o.controller instanceof ce)||!(o.controller.valueController instanceof Cr)?null:new Ia(o.controller)}}}();function Rd(o){const n=o.createElement("div");return n.classList.add(C("dfw")()),o.body&&o.body.appendChild(n),n}function Na(o,n,r){if(o.querySelector(`style[data-tp-style=${n}]`))return;const c=o.createElement("style");c.dataset.tpStyle=n,c.textContent=r,o.head.appendChild(c)}class Ld extends Td{constructor(n){var r,c;const v=n??{},P=(r=v.document)!==null&&r!==void 0?r:Se(),O=_d(),st=new Cd(P,{expanded:v.expanded,blade:Nt(),props:z.fromObject({title:v.title}),viewProps:bt.create()});super(st,O),this.pool_=O,this.containerElem_=(c=v.container)!==null&&c!==void 0?c:Rd(P),this.containerElem_.appendChild(this.element),this.doc_=P,this.usesDefaultWrapper_=!v.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw M.alreadyDisposed();return this.doc_}dispose(){const n=this.containerElem_;if(!n)throw M.alreadyDisposed();if(this.usesDefaultWrapper_){const r=n.parentElement;r&&r.removeChild(n)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(n){("plugin"in n?[n.plugin]:"plugins"in n?n.plugins:[]).forEach(c=>{this.pool_.register(c),this.embedPluginStyle_(c)})}embedPluginStyle_(n){n.css&&Na(this.document,`plugin-${n.id}`,n.css)}setUpDefaultPlugins_(){Na(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{padding-bottom:var(--cnt-v-p);padding-left:4px;padding-top:var(--cnt-v-p)}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--bld-us) + 4px);width:var(--bs-br)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);bottom:2px;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(n=>{this.embedPluginStyle_(n)}),this.registerPlugin({plugins:[Ad,Ed,Ki,Pd]})}}const Dd=new i("3.1.9");e.BladeApi=a,e.ButtonApi=p,e.FolderApi=Wi,e.InputBindingApi=ze,e.ListApi=Da,e.MonitorBindingApi=ye,e.Pane=Ld,e.SeparatorApi=Le,e.SliderApi=Ua,e.TabApi=xe,e.TabPageApi=ai,e.TextApi=Ia,e.TpChangeEvent=h,e.VERSION=Dd,Object.defineProperty(e,"__esModule",{value:!0})})})(To,To.exports);var Vg=To.exports;const Hi=new Ig;let Be={width:window.innerWidth,height:window.innerHeight};const zg=Be.width/Be.height,ri=new qe(50,zg,.1,5e3),Nn=new pr;Hi.add(Nn);Nn.add(ri);ri.position.z=4;ri.lookAt(new V(0,0,0));const vr=new Rc({canvas:document.querySelector("canvas"),alpha:!0});vr.setSize(Be.width,Be.height);vr.setPixelRatio(Math.min(window.devicePixelRatio,2));window.addEventListener("resize",()=>{Be.width=window.innerWidth,Be.height=window.innerHeight,ri.aspect=Be.width/Be.height,ri.updateProjectionMatrix(),vr.setSize(Be.width,Be.height),vr.setPixelRatio(Math.min(window.devicePixelRatio,2))});new Vg.Pane;const gr=4,Gg=new Og("#ffffff",1);Hi.add(Gg);const ps=new an(new Ro,new Dc({color:"#eeeeee"}));Hi.add(ps);const fs=new an(new Lo,new Dc({color:"#ff0000"}));Hi.add(fs);ps.position.y=gr*0;ps.position.x=1.5;fs.position.y=gr*-1;fs.position.x=-1.5;const Hg=[ps,fs];window.addEventListener("scroll",s=>{ri.position.y=window.scrollY/Be.height*gr*-1});let ls={x:0,y:0};window.addEventListener("mousemove",s=>{ls.x=s.clientX/Be.width-.5,ls.y=s.clientY/Be.height-.5});const Uc=new en,Wg=new Lc({color:"#ffffff",size:.02,sizeAttenuation:!0}),Xg=new Ng(Uc,Wg),os=new Float32Array(1e3*3);for(let s=0;s<1e3;s++){const t=s*3;os[t]=(Math.random()-.5)*10,os[t+1]=-(Math.random()*gr*3)+gr*.5,os[t+2]=(Math.random()-.5)*5}Uc.setAttribute("position",new tn(os,3));Hi.add(Xg);const qg=new Bg;let ec=0;const Ic=()=>{const s=qg.getElapsedTime(),t=s-ec;ec=s;const e=ls.x,i=-ls.y;Nn.position.x=Nn.position.x+(e-Nn.position.x)*2*t,Nn.position.y=Nn.position.y+(i-Nn.position.y)*2*t,vr.render(Hi,ri),window.requestAnimationFrame(Ic),Hg.forEach(a=>{a.rotateX(.01),a.rotateZ(.01)})};Ic();
//# sourceMappingURL=index-dfbd39be.js.map
