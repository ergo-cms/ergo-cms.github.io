/*
This is a minimal skeleton config for ergo cms. See online for more options
*/

module.exports = {
	  out_path: "../www"
	, default_fields: {
		  site_url: "https://ergo-cms.github.io/" 
		, title: "ergo-cms ∴" // this goes in <title>tags generally, but also used in rss 
	  }
	, plugin_optins: {
		textile: {breaks:true}
	}
	, default_post_type: "page"
	, post_types: {
		article: {
			  layout: "article.html"
			  , path: "articles"
		  }
		, blog: {
			layout: "post.html"
			, default_fields: {
				"author_image": "author.jpg"
				, "author": "craig"
				, "author_nick": "cmroanirgo"
				, "author_website": "https://github.com/cmroanirgo"
			}
		}
		, page: {
			  layout: "article.html"
		  }
	}
	
};
