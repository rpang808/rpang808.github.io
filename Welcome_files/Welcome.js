// Created by iWeb 3.0.4 local-build-20140519

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,295),url:'Welcome_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(1,-1,221,2),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(222,-1,2,2),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(222,1,2,295),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(222,296,2,3),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(1,296,221,3),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-1,296,2,3),url:'Welcome_files/stroke_7.png'}],new IWSize(223,297)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
