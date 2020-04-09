import App from "./xpage/core";
import select from './xpage/select';

(function(){
	// if (window.matchMedia("(max-width: 1000px)").matches) return;

	// document.addEventListener("VUELoaded", function(){
	// 	App.each("select", (el: HTMLSelectElement) => {
	// 		new select(el);
	// 	})
	// });
	
	// document.addEventListener("VUEUpdated", function(){
	// 	App.each(".default-input__input--select", (el: HTMLSelectElement) => {
	// 		if (el.MySelect)
	// 			el.MySelect.removeSelect();
	
	// 		new select(el);
	// 	})
	// });

})();

// domReady(() => {
// 	if (window.matchMedia("(max-width: 1000px)").matches) return;

// 	initMySelect();

// 	const observerConfig: MutationObserverInit = {
// 		childList: true,
// 		subtree: true,
// 	};

// 	const obs = new MutationObserver((mutationList: Array<MutationRecord>, obs: MutationObserver) => {
// 		for (const mutation of mutationList)
// 			initMySelect();
// 	});

// 	obs.observe(document.body, observerConfig);
// });

// async function initMySelect(){
// 	const selects = App.transformNodeListToArray(document.querySelectorAll(".default-input__input.default-input__input--select")) as Array<HTMLSelectElement>;

// 	if (!selects.length) return;

// 	const mySelect = (await import("./xpage/select")).default;

// 	for (const select of selects)
// 		if (!select.closest(".popup") && !select.MySelect)
// 			new mySelect(select);
// }