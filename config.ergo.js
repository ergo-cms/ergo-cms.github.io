/*
              _         __    __     _         _ _       
  /\/\   __ _(_)_ __   / / /\ \ \___| |__  ___(_) |_ ___ 
 /    \ / _` | | '_ \  \ \/  \/ / _ \ '_ \/ __| | __/ _ \
/ /\/\ \ (_| | | | | |  \  /\  /  __/ |_) \__ \ | ||  __/
\/    \/\__,_|_|_| |_|   \/  \/ \___|_.__/|___/_|\__\___|
                                                         
*/

module.exports = {
	theme: "ergo-simple",
	out_path: "../www", 
	default_fields: {
		site_url: "https://ergo-cms.github.io/",
		site_title: "ergo-cms ∴", // this goes in <title>tags generally, but also used in rss 
		title: "ergo-cms official website",
		image: "page.jpg", // the default image to use.
		author_url: '/authors.html',
		author_image: 'avatar-cmroanirgo.jpg', 
		author: "craig", 
		author_nick: "cmroanirgo",
		author_website: "https://github.com/cmroanirgo",
		stylesheets: ['/exstyles.css'],
		//scripts: ''
		hide_featured_posts: true,
		hide_popular_posts: true,
		//paginate_count: 3,

		social: {	// update/remove social entries that you use
			disqus: 'ergo-cms',
			//twitter: 'username',
			//linkedin: 'username',
			github: 'cmroanirgo',
			//facebook: 'username',
			//pinterest: 'username',
			//instagram: 'username',
		}	
	}, 

	verbose:1,
	//debug:1,
	log_options: {
	 	//match_file: /(themes)/
	}, 

	default_post_type: "page",
	post_types: {
		article: {
			  layout: "page.html",
		}, 
		theme: {
			layout: "page.html",
			default_fields: {
				image: "theme.jpg",
				extracss: 'theme'
			}
		}, 
		plugin: {
			layout: "list.html",
			default_fields: {
				image:"plugin.jpg",
				extracss: 'plugin'
			}
		}, 
		blog: {
			layout: "newpost.html", 
			default_fields: {
				image:"post.jpg"
			}
		}, 
		page: {
			  layout: "page.html"
		  }
	},
	plugin_options: {
		// textile: { breaks:false}

		collate: {
			post_types: {
				blog: { as:"blog" },
				article: { as:"articles" },
				theme: { 
					as:"themes", 
					default_fields: {
						image: "theme.jpg"
						/*image: function() { console.log("\n\n\n\n======================"+(this.theme_image || "theme.jpg"));
						return this.theme_image || "theme.jpg" } // when building lists, the image to use is the theme's image*/
					}
				},
				plugin: { 
					as:"plugins",
					default_fields: {
						image: "plugin.jpg"
					}
				},
			},
			fields: {
				// tags and categories are already automatically tracked in the above post_types (initially, 'blog')
				// Their url is tags.html and categories.html, but onlt if you've used at least ONE!


				// uncomment this to track authors 
				author: { as: 'authors', base_name:'all' }, // Also, change 'author_url to '/authors.html', above
				plugins: { as: 'plugins', base_name:'all', generate_html:false},
				layouts: { as: 'layouts', base_name:'all', generate_html:false},
			}
		}
	}
	
};
