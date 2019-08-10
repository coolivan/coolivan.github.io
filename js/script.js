// {
// 	let s = document.createElement("script");
// 	s.src = '../js/data.js';
// 	document.querySelector('head').appendChild(s);
// }



/*菜单绑定数据*/
{
	let data = database[0].archives;
	let homeId = database[0].config.homeId;
	let menu = document.querySelector('.menu');
	

	// 根据id找到自己
	function getSelf(id){
		return data.filter(v=>v.id === id)[0]
	}
	// 根据id找到所有子级
	function getChild(pid) {
		return data.filter(v => v.pid == pid)
	}
	//根据id找到父级
	function getParent(id) {
		let pid = getSelf(id).pid;
		return data.filter(v => v.id == pid)[0]
	}

	// 菜单渲染
	menu.innerHTML = render(0);
	function render(pid){
		let child = getChild(pid);
		let ul='<ul>';
		
		child.forEach(v=>{
			let childData = getChild(v.id);
			let str = '';
			if(v.href){
				str = `<a href="#${v.id}" data-href="${v.href}" >${v.title}</a>`
			}else{
				str = `<a>${v.title}</a>`
			}
			ul+=`
				<li data-id="${v.id}">
					${str}
					${childData ? render(v.id) :''}
				</li>
			`
		})
		ul+='</ul>';
		return ul;
	}

	
	window.onload = function(){
		let id = parseInt(location.hash.substr(1)) || homeId;
		renderIframe(id);
	};

	//hash
	window.onhashchange = function(){
		let id = parseInt(location.hash.substr(1));
		renderIframe(id);
	};
	

	//根据id更新iframe
	function renderIframe(id){
		let _data = getSelf(id);
		let iframe = document.querySelector('#iframe');
		iframe.src = _data['href'];
	}

	// 根据homeid给菜单添加active
	let menu_li = document.querySelectorAll('.menu>ul>li');
	menu_li.forEach((v,k)=>{
		let v_id = parseInt(v.dataset['id']);
		let v_pid = parseInt(getSelf(v_id).id);

		let now_id = parseInt(location.hash.substr(1)) || homeId;
		let now_pid = getParent(now_id).id;
		
		// 一级
		if (now_pid === v_pid) {
			v.className = 'active'
		}

		// 二级
		let li_li = v.querySelectorAll('li');
		li_li.forEach(li=>{
			let li_id = parseInt(li.dataset['id']);
			if (li_id === now_id) {
				li.className = 'active'
			}
		})

		
		
	})

	
}



///*菜单点击事件*/
{
	let menu_ul_li = document.querySelectorAll('.menu>ul>li');
	let menu_li_li = document.querySelectorAll('.menu li li');
	menu_ul_li.forEach(v=>{
		v.addEventListener('click',function(){
			menu_ul_li.forEach(i=>{
				i.classList.remove('active')
			})
			v.classList.toggle('active');
		})
	})
	menu_li_li.forEach(v=>{
		v.addEventListener('click',e=>{
			e.stopPropagation();
			renderIframe(parseInt(v.dataset.id));
			menu_li_li.forEach(i=>i.classList.remove('active'));
			v.classList.add('active');
		})
	})

}


/*菜单滑动效果 */
{
	let menuToggle = document.querySelector('.menu-toggle');
	menuToggle.addEventListener('click',function(){
		this.classList.toggle('off');
		if(this.classList.contains('off')){
			document.querySelector('nav').classList.add('show');
		}else{
			document.querySelector('nav').classList.remove('show');
		}
	})
}