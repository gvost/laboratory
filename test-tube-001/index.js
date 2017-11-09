var SNG = false
var LST = false
var DLY = false
var URLS = null
var DUR = 0
var INFR = window.self !== window.top
var CNT = 0
var FRD = getSingle('fired')

function params (hgt, wdt) {
  var lPOS = ((window.screen.availLeft + (window.screen.availWidth / 2)) - (666 / 2))
  var tPOS = ((window.screen.availTop + (window.screen.availHeight / 2)) - (700 / 2))
  var ps = `width=${wdt},height=${hgt},left=${lPOS},top=${tPOS},modal=yes,menubar=no,toolbar=no,location=no,resizable=no,personalbar=no,scrollbars=no,titlebar=no`
  return ps
}
function create (pt) {
  var domSTR = `<style>@import url('https://fonts.googleapis.com/css?family=Alegreya+SC:900|Anton|Arvo:700|Bangers|BioRhyme+Expanded:800|Gentium+Book+Basic|IM+Fell+English|Inconsolata|Kanit:800|Knewave|Lato|Merriweather:900|Montserrat:400,900|Norican|Open+Sans|Pacifico|Permanent+Marker|Raleway|Roboto|Roboto+Condensed|Rubik+Mono+One|Shadows+Into+Light+Two|Slabo+27px|Vollkorn|family=Press+Start+2P');.boxShadow {  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.45);}* {  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}#GatsbyCTA {  z-index: 900000000;  box-sizing: border-box;  cursor: pointer;  pointer-events: all;}#GatsbyCTA:active {  box-shadow: none!important;}#GatsbyTextLineOne,#GatsbyTextLineTwo {  display: block;  width: 100%;  text-align: center;}.Button,.Banner {  padding: 10px;  border-radius: 0;}.Button {  position: fixed;}.Banner {  position: relative;  width: 100%;}.Banner #GatsbyTextLineOne,.Banner #GatsbyTextLineTwo {  width: 100%;}.Banner #GatsbyTextLineOne {  margin-bottom: 5px;}.Banner #GatsbyTextLineTwo {  width: 100%;}.Corner #GatsbyTextLineOne,.Corner #GatsbyTextLineTwo {  margin-bottom: 5px;}.Corner #GatsbyTextLineTwo {  margin-bottom: 10px;}#CTATextBlockOuter {  position: relative;  height: 100%;}#CTATextBlockInner {  width: 100%;  position: absolute;  top: 50%;  left: 50%;  transform: translate(-50%, -50%);}.Corner {  cursor: default;  padding: 0;  right: 0;  left: 0;}.Top {  top: 0;  height: 0;}.Top .outerVessel.Left {  top: 0;  left: 0;}.Top .outerVessel.Left .vessel .textContainer {  top: -120px;  left: -120px;  transform: rotate(-45deg);}.Top .outerVessel.Left .vessel .textContainer .text {  bottom: -10%;  left: 50%;  transform: translate(-50%, -50%);}.Top .outerVessel.Right {  top: 0;  right: 0;}.Top .outerVessel.Right .vessel .textContainer {  top: -120px;  left: 120px;  transform: rotate(45deg);}.Top .outerVessel.Right .vessel .textContainer .text {  bottom: -10%;  left: 50%;  transform: translate(-50%, -50%);}.Bottom {  height: 0;  bottom: 240px;}.Bottom .outerVessel.Left {  top: 0;  left: 0;}.Bottom .outerVessel.Left .vessel .textContainer {  bottom: -120px;  left: -120px;  transform: rotate(45deg);}.Bottom .outerVessel.Left .vessel .textContainer .text {  top: 20%;  left: 50%;  transform: translate(-50%, -50%);}.Bottom .outerVessel.Right {  top: 0;  right: 0;}.Bottom .outerVessel.Right .vessel .textContainer {  bottom: -120px;  right: -120px;  transform: rotate(-45deg);}.Bottom .outerVessel.Right .vessel .textContainer .text {  top: 20%;  left: 50%;  transform: translate(-50%, -50%);}.rail {  z-index: 9000000000000000000000;  position: fixed;  right: 0;  left: 0;  height: 0;  pointer-events: none;}.outerVessel {  pointer-events: none;  position: absolute;}.vessel {  pointer-events: none;  position: relative;  display: inline-block;  width: 240px;  height: 240px;}.textContainer {  cursor: pointer;  height: 100%;  width: 100%;  position: absolute;  z-index: 3;  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.45);}.textContainer:active {  box-shadow: none;}.textContainer .text {  position: absolute;  color: white;  font-family: 'Press Start 2P', monospace;  font-weight: 100;  font-size: 20px;  text-align: center;  line-height: 23px;}.FullHolder {  position: fixed;  z-index: 9000000000000000000000;  height: 100%;  width: 100%;  pointer-events: none;  top: 0;  left: 0;  right: 0;  bottom: 0;}.SmallHolder {  pointer-events: none;  position: absolute;  height: 50vh;  width: 50vw;}.SmallHolder.Top {  top: 0;}.SmallHolder.Left {  left: 0;}.SmallHolder.Right {  right: 0;}.SmallHolder.Bottom {  bottom: 0;}.Top.Left div.GatsbyCTABody {  position: absolute;}.Top.Right div.GatsbyCTABody {  position: absolute;}.Bottom.Left div.GatsbyCTABody {  position: absolute;}.Bottom.Right div.GatsbyCTABody {  position: absolute;}@media only screen and (max-width: 700px) {  .hideMobile {    display: none;  }}</style><div class="FullHolder"><div class="SmallHolder Button Top Left"><div class="GatsbyCTABody" id="GatsbyCTA" style="box-shadow: 0 2px 2px 0 #3A4650; background: #7cf7f0; border-radius: 100%; top: 29vh; left: 3.5vw; height: 70px; width: 70px;"><div id="CTATextBlockOuter"><div id="CTATextBlockInner"><span id="GatsbyTextLineOne" style="color: #1f1f1f;font-size: 24px;font-family: &quot;Kanit&quot;;">wut</span><span id="GatsbyTextLineTwo" style="color: #1f1f1f;font-size: 15px;font-family: &quot;Pacifico&quot;;">Wad</span></div></div></div></div></div>`
  pt.insertAdjacentHTML('beforeend', domSTR)
}
function trigger (domn, nm, spec) {
  window.open(domn, nm, spec)
  if (SNG) {
    setSingle('fired')
  }
}
function make (brnd) {
  var _gtsby = {
    slf: 'gatsby',
    name: brnd,
    uri: `http://gatsby.social/share/${brnd}`,
    opt: params(700, 666),
    pt: document.querySelector('body')
  }
  return _gtsby
}
function injectImmediate () {
  var __gtsby = make('probesinc')
  create(__gtsby.pt)
  var $inst = document.getElementById(`GTSBY-${VALUE_HASH}`)
  $inst.addEventListener('click', function (e) {
    e.preventDefault()
    trigger(__gtsby.uri, __gtsby.slf, __gtsby.opt)
  })
}
function injectHesitate () {
  function hesitaion (int, fin) {
    CNT++
    if (CNT === DUR) {
      injectImmediate()
      clearInterval(wait)
    }
  }
  var wait = setInterval(hesitaion, 1000)
  return wait
}
function white (s) {
  var LST = new Set(s)
  var res = LST.has(window.location.href)
  return res
}
function black (s) {
  var LST = new Set(s)
  var res = LST.has(window.location.href)
  return !res
}
function getSingle (v) {
  var tv = new RegExp('^(.*;)?\\s*' + v + '\\s*=')
  var res = tv.test(document.cookie)
  return res
}
function setSingle (v) {
  if (!getSingle(v)) {
    var n = new Date()
    var t = n.getTime()
    var exp = t + 605000000
    n.setTime(exp)
    document.cookie = `${v}=true;expires=${n.toGMTString()}`
    return false
  } else {
    return true
  }
}
