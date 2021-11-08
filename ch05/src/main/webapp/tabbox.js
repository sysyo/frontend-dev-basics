// DOM Level 2 Event 처리: HTML element의 event Listener를 등록하는 방식
// 1) JavaScript Code(DOM API) 로만 작성하기

var tabBox = {
	init: function() { // init 실행
		window.addEventListener("load", this.onWindowLoad.bind(this)); // load는 event 이름 - 정해져 있음
	},

	onTabClicked: function() {

		// unselect
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length === 1) && (lisSelected[0].className = '');

		// select
		this.className = "selected";
	},
	onWindowLoad: function() {
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];

		console.log(this);

		var liTabs = ul.getElementsByTagName("li");
		for (var i = 0; i < liTabs.length; i++) {
			liTabs[i].addEventListener("click", this.onTabClicked);
		}
	}
}