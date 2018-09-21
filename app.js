var LazyLoad = {
	successClass: 'js-imageReplace-loaded'
	, errorClass: 'js-imageReplace-error'
	, selector: '.js-imageReplace'
};

(function() {
	// Initialize Lazy Loading images
	LazyLoad.lazyLoad = new Blazy({
		successClass: LazyLoad.successClass
		, errorClass: LazyLoad.errorClass
		, selector: LazyLoad.selector
		, loadInvisible: true // forces blazy to load images in 'hidden' containers but above the fold
	});
})();