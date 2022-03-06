class Tabs{
	constructor(container) {
		this.container = container;
		this.tabs = container.querySelectorAll('.trigger');
		// console.log(this.tabs);
		// console.log(this.container);
	}
	init(){
		this.tabs.forEach(tab=>{
			tab.addEventListener('click', e=>{
				this.toggleTabs(e);
				this.toggleContent(e);
			})
		})
	}
	toggleTabs(e){
		// remove current active class
		this.tabs.forEach(tab => tab.classList.remove('active'));
		// add new active class to clicked tab
		e.target.classList.add('active');
	}
	toggleContent(e){
		//remove curent active class from content
		// console.log(this.container.querySelectorAll('.content'));
		this.container.querySelectorAll('.content').forEach( item => item.classList.remove('active'))
		//add  active class from content
		const selector = e.target.getAttribute('data-target');
		const content = this.container.querySelector(selector);
		content.classList.add('active');
	}
}

export default Tabs;
