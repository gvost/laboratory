console.log('index loaded')

var elem = $('.pop')


// document.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM loaded')
//   elem.click()
// })


elem[0].addEventListener('mousedown', (evt) => {
  evt.isTrusted = true
  console.log(evt.isTrusted)
})
var evv = new Event('mousedown')
$('document').ready((evt) => {
  // elem.mousedown((e) => {
  //   e.which = 1
  //   console.log(e)
  //   var win = doOpen('https://google.com');
  //   if (e.which) {
  //     alert(1)
  //   }
  // })
  // elem.trigger('mousedown')
  elem[0].click()
  elem[0].dispatchEvent(evv)
})
