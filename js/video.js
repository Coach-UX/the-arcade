var vp=vp||{};vp.InitVideo=function(){var e,t,n=document.getElementById("Video"),o=document.getElementById("VideoCanvas"),a=0,i=navigator.userAgent;o.style.display="none",Resolve=function(){var i=Date.now();a=(a+(i-t)/1e3)%n.duration,t=i,n.currentTime=a,e?e.drawImage(n,0,0,o.width,o.height):requestAnimationFrame(Resolve)},/(iPhone|iPod)/.test(i)?/(iPhone OS 9|iPhone OS 8|iPhone OS 7)/.test(i)?(n.style.display="none",o.width=n.videoWidth,o.height=n.videoHeight,e=o.getContext("2d"),o.style.display="block",4===n.readyState?(t=Date.now(),setInterval(function(){Resolve()},1e3/24)):n.addEventListener("canplaythrough",function(){t=Date.now(),setInterval(function(){Resolve()},1e3/24)},!1)):4===n.readyState?(t=Date.now(),requestAnimationFrame(Resolve)):n.addEventListener("canplaythrough",function(){t=Date.now(),requestAnimationFrame(Resolve)},!1):4===n.readyState?(n.loop=!0,n.play()):n.addEventListener("canplaythrough",function(){n.loop=!0,n.play()},!1)};