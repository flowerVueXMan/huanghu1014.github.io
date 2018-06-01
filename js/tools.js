function id(obj) {
    return document.querySelector('#'+obj);
}


function bind(obj, ev, fn) { 
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}


function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}

function addClass(obj, sClass) { 
    var aClass = obj.className.split(' '); 
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}

function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}






(function(){
	
	window.sweiper = function(obj,dir,fn){
		
		var startX = null;
		var startY = null;
		
		obj.addEventListener('touchstart',function(ev){
			ev = ev.changedTouches[0];
			startX = ev.pageX;
			startY = ev.pageY;
			
		})
		
		obj.addEventListener('touchend',function(ev){
			ev = ev.changedTouches[0];
			
			var disx = ev.pageX - startX;
			var disy = ev.pageY - startY;
			
			if(disx == 0 && disy == 0){
				if(dir == 'tap'){
					if(typeof fn == 'function'){
						fn.call(obj);
					}
				}
			}
			
			// 判断是上下还是左右
			if(Math.abs(disx) >= Math.abs(disy)){
				//  左右
				if(disx >= 0){
					// 右
					if(dir == 'right'){
						if(typeof fn == 'function'){
							fn.call(obj);
						}
					}
				}else{
					//左
					if(dir == 'left'){
						if(typeof fn == 'function'){
							fn.call(obj);
						}
					}
				}
				
			}else{
				// 上下
				
				if(disy>=0){
					// 下
					if(dir == 'bottom'){
						if(typeof fn == 'function'){
							fn.call(obj);
						}
					}
				}else{
					// 上
					if(dir == 'top'){
						if(typeof fn == 'function'){
							fn.call(obj);
						}
					}
				}
			}
			
		})
	}
	
	
})()





