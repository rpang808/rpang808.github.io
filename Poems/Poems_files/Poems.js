// Created by iWeb 3.0.4 local-build-20140519

setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://rpang808.github.io/RTPWaveProject/Poems/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Poems_files/PoemsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
