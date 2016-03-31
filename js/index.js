var xmlns = "http://www.w3.org/2000/svg",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  container = select('.container'),
  popDot = selectAll('.popDot'),
  endReveal = select('.endReveal'),
  startReveal = select('.startReveal'),
  endHide = select('.endHide')
 


//center the container cos it's pretty an' that
TweenMax.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})
TweenMax.set('svg', {
  visibility:'visible'
})

TweenMax.set(['.monitorMask','.laptopMask', '.tabletMask', '.phoneMask'],{
  drawSVG:'0% 0%'
})


var tl = new TimelineMax({repeat:-1, delay:3, repeatDelay:3});
tl.to(popDot, 4, {
  attr:{
    r:182
  },
  alpha:0,
  ease:Power3.easeOut
})
  .to(startReveal, 4, {
  attr:{
    r:180
  },
  ease:Power3.easeOut
},'-=4')
.to('.startRevealFill', 4, {
  attr:{
    r:180
  },
  alpha:0,
  ease:Power3.easeOut
},'-=4')

 .from(['#rotationLine', '#upLine'], 4,{
  drawSVG:'0% 0%',
  alpha:0,
  ease:Power3.easeOut
  
},'-=4')
  
.to('.monitorMask', 3, {
  drawSVG:'0% 100%',
  ease:Power3.easeInOut
})
.from('#wipeOutline', 3, {
  drawSVG:'0% 0%',
  ease:Power3.easeInOut
},'-=3')

.to('#rotationLine', 3, {
  rotation:'+=360',
  //transformOrigin:'50% 100%'
  svgOrigin:'400 200',
  ease:Power3.easeInOut
},'-=3')
.from('#monitorGroup', 6, {
  scale:0.3,
  //rotation:180,
  transformOrigin:'50% 50%',
  ease:Expo.easeOut
},'-=3')

.from('#monitorGroup .rotater', 5, {
  //scale:0.3,
  rotation:-90,
  transformOrigin:'50% 50%',
  ease:Back.easeOut.config(2)
},'-=6')


.to('.monitorMask', 3, {
  drawSVG:'100% 100%',
  ease:Power3.easeInOut
},'-=3')
.to('.laptopMask', 3, {
  drawSVG:'0% 100%',
  ease:Power3.easeInOut
},'-=3')
.to('#wipeOutline', 3, {
  drawSVG:'100% 100%',
  ease:Power3.easeInOut
},'-=3')
.set('#wipeOutline',{
  drawSVG:'0% 0%'
})
.to('#rotationLine', 3, {
  rotation:'+=360',
  ease:Power3.easeInOut
},'-=3')
.from('#laptopGroup', 6, {
  scale:0.3,
  //rotation:180,
  transformOrigin:'50% 50%',
  ease:Expo.easeOut
},'-=3')
.from('#laptopGroup .rotater', 5, {
  //scale:0.3,
  rotation:90,
  transformOrigin:'50% 50%',
  ease:Back.easeOut.config(2)
},'-=6')

.to('.laptopMask', 3, {
  drawSVG:'100% 100%',
  ease:Power3.easeInOut
},'-=3')
.to('.tabletMask', 3, {
  drawSVG:'0% 100%',
  ease:Power3.easeInOut
},'-=3')
.to('#wipeOutline', 3, {
  drawSVG:'0% 100%',
  ease:Power3.easeInOut
},'-=3')

.to('#rotationLine', 3, {
  rotation:'+=360',
  ease:Power3.easeInOut
},'-=3')
.from('#tabletGroup', 6, {
  scale:0.3,
  //rotation:180,
  transformOrigin:'50% 50%',
  ease:Expo.easeOut
},'-=3')
.from('#tabletGroup .rotater', 5, {
  //scale:0.3,
  rotation:-90,
  transformOrigin:'50% 50%',
  ease:Back.easeOut.config(2)
},'-=6')


.to('.tabletMask', 3, {
  drawSVG:'100% 100%',
  ease:Power3.easeInOut
},'-=3')
.to('.phoneMask', 3, {
  drawSVG:'0% 100%',
  ease:Power3.easeInOut
},'-=3')
.to('#wipeOutline', 3, {
  drawSVG:'100% 100%',
  ease:Power3.easeInOut
},'-=3')
.set('#wipeOutline',{
  drawSVG:'0% 0%',
  alpha:0
})
.to('#rotationLine', 3, {
  rotation:'+=360',
  ease:Power3.easeInOut
},'-=3')
.from('#phoneGroup', 6, {
  scale:0.3,
  //rotation:180,
  transformOrigin:'50% 50%',
  ease:Expo.easeOut
},'-=3')
.from('#phoneGroup .rotater', 5, {
  //scale:0.3,
  rotation:90,
  transformOrigin:'50% 50%',
  ease:Elastic.easeOut.config(0.31, 2)
},'-=6')

.to('.phoneMask', 3, {
  drawSVG:'100% 0%',
  ease:Power3.easeInOut
},'-=3')
.to(['#rotationLine', '#upLine'], 1, {
  drawSVG:'0% 0%',
  ease:Power1.easeIn
},'-=3.25')
.set(['#rotationLine', '#upLine', '#wipeOutline'], {
  alpha:0
},'-=2')
.set('#phoneGroup',{
  alpha:0
},'-=2.25')
.set('#endPhone',{
  alpha:1
},'-=2.25')

.set(['.monitorMask','.laptopMask', '.tabletMask', '.phoneMask'],{
  drawSVG:'100% 0%'
})
.set(popDot, {
  attr:{
    r:0
  },
  alpha:1
},'-=2.25')

.set(['#monitorGroup','#laptopGroup', '#tabletGroup'],{
  transformOrigin:'50% 100%',
  scale:0
})
.to([popDot], 4, {
  attr:{
    r:180
  },
  alpha:0
},'-=2.25')

.to([endReveal], 4, {
  attr:{
    r:180
  }
},'-=4')
.to([endHide], 4, {
  attr:{
    r:180
  }
},'-=4')


.to('#endPhone', 7, {
  rotation:-190,
  transformOrigin:'50% 50%',
  ease:Power1.easeOut
},'-=4')
.from('#endText', 7, {
  rotation:90,
  scale:14,
  ease:Power4.easeOut,
  transformOrigin:'50% 50%'
},'-=7')

tl.timeScale(2.6);



//ScrubGSAPTimeline(tl)