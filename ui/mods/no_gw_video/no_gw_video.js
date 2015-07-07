console.log('no_gw_video')
model.showIntro = function() {return false}
model.showIntro.subscribe = function(handleIntro) {handleIntro(false)}
