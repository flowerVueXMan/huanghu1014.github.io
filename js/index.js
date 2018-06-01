function indexs(){
	var welcome = document.querySelector('#welcome');
	var index = document.querySelector('#index');
	var lists = document.querySelector('.lists');
	var bottom = document.querySelector('.bottom');
	var bottom1s = document.querySelectorAll('.bottom .bottom1');
	var divs = document.querySelectorAll('.wrap .divs');
	var headers = document.querySelector('header');
	var news = document.querySelector('#news');
	var colors = document.querySelectorAll('.bottom1 span');
	var colors1 = document.querySelectorAll('.bottom1 p');
	var details1 = document.querySelector('.details');
	var num = 1;
	var obj = obj1;
	
	/* 欢迎页面*/
	yi()
	function yi(){
		setTimeout(function(){
			welcome.style.display = 'none';
			bottom.style.display = 'block';
			index1();
		},6000)
	}
	
	
	
	
	/* index页面*/
	function index1(){
		index.style.display = 'block';
		
		banner()
		function banner(){
			
			setInterval(function(){
				num++;
				if(num ==4){
					num =1;
				}
				var img = document.querySelector('.lists img');
				var span = document.querySelectorAll('.banner span');
				var arr = ["#c2e0f4","#66b0e2",'#66b0e2']
				img.src = "img/banner-"+num+".png";
			},2000)
		}
		
		
		/* 内容的数据渲染*/
//		setTimeout(function(){
//				shuju();
//		},1000)
		shuju();
		function shuju(){
			
			var intmName = document.querySelector('.list2')
			for(var i=0;i<obj.length;i++){
				intmName.innerHTML += '<div class="list2-box">'+
							'<img src="./img/content1.jpg"/>'+
							'<span><img src="img/lv-1.png"/></span>'+
							'<div class="dfb">'+
								'<img src="img/pg.png"/>'+
								'<b>'+obj[i].bfb+'</b>'+
							'</div>'+
							'<div class="assess">'+obj[i].assess+'</div>'+
							'<div class="name1">'+
								'<img src="./img/mintu1.png"/>'+
								'<b>'+obj[i].name+'</b>'+
								'<div class="gz">关注</div>'+
							'</div>'+
						'</div>';
				
			}
		}
	// 搜索
		search1();
		function search1(){
			var box = document.querySelector('header .box');
			var search = document.querySelector('.search');
			var search_head = document.querySelector('.search_head span');
			var news_box = document.querySelector('#news .news_box');
			var ban = document.querySelector('.search_head b');
			search.style.display = 'none';
			box.addEventListener('touchstart',function(){
				index.style.display = 'none';
				bottom.style.display = 'none';
				search.style.display = 'block';
				
				ban.addEventListener('touchstart',function(){
					console.log('谷歌')
					var inputs = document.querySelector('.search_head input');
					if (inputs.value =='') {
						alert('桔子哥！没有内容哦')
					} else{
						alert('数据正在更新')
					}
				})
				
				search_head.addEventListener('touchstart',function(){
					search.style.display = 'none';
					bottom.style.display = 'block';
					index.style.display = 'block';
					news_box.style.display = 'block'
				})
				
			})
		}
		
	//详情页
	
		details();
		function details(){
			var lbx = document.querySelectorAll(".list2-box"); 
			var x = null;
			var y = null;
			var endX = null;
			var endY = null;
			for (let i=0;i<lbx.length;i++) {
				lbx[i].addEventListener("touchend",function(ev){
					ev.preventDefault()
				});
				lbx[i].addEventListener("touchstart",function(ev){
					ev = ev.changedTouches[0];
					x = ev.pageX;
					y = ev.pageY;
					//console.log(x,y)
				});
				lbx[i].addEventListener("touchend",function(ev){
					ev = ev.changedTouches[0];
					endX = ev.pageX;
					endY = ev.pageY;
					var disx = endX - x;
					var disy = endY - y;
					if(disx==0&&disy==0){
						index.style.display = 'none';
						bottom.style.display = 'none';
						details1.style.display = 'block';
						details1.innerHTML ='';
						
						details1.innerHTML +='<div class="details_head">'+
							'<span class="iconfont icon-icon-arrow-left4"></span>'+
							'<div class="tx">'+
								'<img src="'+obj[i].mining+'"/>'+
							'</div>'+
					'	</div>'+
						'<div class="name12">'+
							'<b>'+obj[i].name+'</b>'+
						'	<img src="img/lv-1.png"/>'+
						'	<p>'+obj[i].assess+'</p>'+
						'</div>'+
						'<div class="information">'+
						'	<div class="span_box">'+
							'	<span>简介 <div></div></span>'+
								'<span>评价</span>'+
								'<span>日程</span>'+
							'	<ul>'+
								'	<li>'+
									'	<img src="img/xx1.png"/>'+
									'	<b>所在地区</b>'+
									'	<span>'+obj[i].dq+'</span>'+
									'</li>'+
									'<li>'+
										'<img src="img/xx2.png"/>'+
										'<b>导游性别</b>'+
										'<span>'+obj[i].sex+'</span>'+
									'</li>'+
									'<li>'+
										'<img src="img/xx3.png"/>'+
										'<b>熟悉地区</b>'+
										'<p>'+obj[i].dq+'</p>'+
									'</li>'+
									'<li>'+
										'<img src="img/xx4.png"/>'+
										'<b>熟悉语种</b>'+
										'<p>普通话</p>'+
									'</li>'+
									'<li>'+
										'<img src="img/xx5.png"/>'+
										'<b>TA的标签</b>'+
									'</li>'+
								'	<li>'+
										'<input type="text" placeholder="预约之前聊俩句~"/>'+
										'<form><img src="img/xx6.png"/><p>关注</p></form>'+
										'<form><img src="img/xx7.png"/><p>预约</p></form>'+
									'</li>'+
								'</ul>'+
							'</div>'+
						'</div>';
						
						var spanss = document.querySelector(".details_head span")
							spanss.addEventListener("touchstart",function(){
								index.style.display = 'block';
								bottom.style.display = 'block';
								details1.style.display = 'none';
							})
						
					}
				});
			}	
		}
		
		
	}
	bottom_nav();
	/* 点击跳转页面*/
	function bottom_nav(){
		for(var i=0;i<bottom1s.length;i++){
			bottom1s[i].index = i;
			bottom1s[i].addEventListener("touchstart",function(){
				for(var i=0;i<bottom1s.length;i++){
					divs[i].style.display = 'none';
					colors[i].style.color = "#8f8f8f";
					colors1[i].style.color = "#8f8f8f";
				}
					divs[this.index].style.display = 'block';
					colors[this.index].style.color = "#ffd100";
					colors1[this.index].style.color = "#ffd100";
					
			})
		}
	}
	
	td();
	function td(){
		var spans = document.querySelectorAll('.news_head .spans');
		var divs = document.querySelectorAll('.news_head .div1');
		var bs = document.querySelectorAll(".news_head .spans b")
		for(var i=0;i<spans.length;i++){
			spans[i].index = i;
			spans[i].addEventListener('touchstart',function(){
				for(var i=0;i<spans.length;i++){
					divs[i].style.display = 'none';
					bs[i].style.background = '';
				}
					divs[this.index].style.display = 'block';
					bs[this.index].style.background = '#1f1f1f';
			})
		}
	}
	
	/* 登录框 */
	entry()
	function entry(){
		var news_box = document.querySelector('#news .news_box');
		var login_box = document.querySelector('#news .login_box');
		var zuo = document.querySelectorAll('#news .heads1 img');
		var inputs = document.querySelectorAll('.entry input');
		var button2 = document.querySelector('.entry button');
		bottom1s[1].addEventListener("touchstart",function(){
			//按钮
			button2.addEventListener('touchstart',function(){
				if(inputs[0].value == ''){
					alert("请输入密码！")
				}else{
					if(inputs[1].value == ''){
						alert('请输入密码！')
					}else{
						news_box.style.display = 'block';
						login_box.style.display = 'none';
					}
				}
			})
			

			
			zuo[0].addEventListener("touchstart",function(){
				index.style.display = 'block';
			});
			
		})
	}
	
}
