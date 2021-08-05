crystal_doc_search_index_callback({"repository_name":"lucky_favicon","body":"# Lucky Favicon\n\nAdd favicons from the [Real Favicon Generator](https://realfavicongenerator.net) to your Lucky project.\n\n![GitHub](https://img.shields.io/github/license/wout/lucky_favicon)\n![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/wout/lucky_favicon)\n![GitHub Workflow Status](https://img.shields.io/github/workflow/status/wout/lucky_favicon/Lucky%20Favicon%20CI)\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n```yaml\ndependencies:\n  lucky_favicon:\n    github: wout/lucky_favicon\n```\n\n2. Run `shards install`\n\n## Usage\n\nFirst, head over to the [Real Favicon Generator](https://realfavicongenerator.net), configure your icons and download the package. Unzip the package and place all the files in the public dir in you Lucky project. You can place them in a sub-dir but it has some drawbacks, as explained by the Real Favicon Generator:\n\n> When generating a favicon with RealFaviconGenerator, the instructions ask you to place all files at the root of your web site. You may want to place them in a sub-directory, for example in http://mywebsite.com/icons/, just to make things clearer. However, there are three drawbacks with this approach:\n> \n> - Internet Explorer looks for favicon.ico at the root of the web site. Granted: this is because we ask you to not declare favicon.ico.\n> - iOS devices look for files such as apple-touch-icon-144x144.png at the root of the web site, as described by Apple. This issue can be mitigated by declaring the icons in the HTML code (this is necessary for Android anyway), but following Apple conventions is probably the best move.\n> - By default, Internet Explorer 11 looks for browserconfig.xml at the root of the web site.\n> - Several services, such as Yandex, look for favicon.ico in the root directory. \n\nThen, make sure your require this library in Lucky's shards.cr file:\n\n```crystal\nrequire \"lucky_favicon\"\n```\n\nAnd include the `LuckyFavicon::Tags` module:\n\n```crystal\nclass Shared::LayoutHead < BaseComponent\n  include LuckyFavicon::Tags\n  ...\nend\n```\n\nNow you'll be able to add your icon set in your layout file:\n\n```crystal\nhead do\n  favicon_tags app_name: \"Lucky App\", theme_color: \"#00ff99\"\nend\n```\n\nThis will render a complete set of favicon-related tags:\n\n```html\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png?v=0.1.0\">\n<link rel=\"mask-icon\" color=\"#00ff99\" href=\"/safari-pinned-tab.svg?v=0.1.0\">\n<link rel=\"shortcut icon\" href=\"/favicon.ico?v=0.1.0\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png?v=0.1.0\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png?v=0.1.0\">\n<link rel=\"manifest\" href=\"/site.webmanifest?v=0.1.0\">\n<meta name=\"apple-mobile-web-app-title\" content=\"Lucky App\">\n<meta name=\"application-name\" content=\"Lucky App\">\n<meta name=\"msapplication-TileColor\" content=\"#00ff99\">\n<meta name=\"theme-color\" content=\"#00ff99\">\n```\n\n### Cache key / revision number\n\nBy default, `\"?v=0.1.0\"` will be appended to the file paths as a query string. If you update your icons, simply provide a new revision number and you're good to go:\n\n```crystal\nfavicon_tags app_name: \"Lucky App\", theme_color: \"#00ff99\", version: \"0.2.0\"\n```\n\n### Custom directory\nWhile it's not advisable to have your icons in a sub-dir, sometimes it may not be possible to have them there. In that case you can provide the name of the directory:\n\n```crystal\nfavicon_tags app_name: \"Lucky App\", theme_color: \"#00ff99\", dir: \"/icons\"\n```\n\n### Individual tags\nIf you don't want the whole set of meta and link tags, you can use the individual methods, each with custom arguments if required:\n\n```crystal\nhead do\n  apple_touch_icon_tag dir: \"/somewhere/else\"\n  favicon_icon_tags sizes: %w[24x24 64x64 128x128]\n  site_webmanifest_tag version: \"0.5.3\"\n  safari_pinned_tab_tag theme_color: \"#00ff99\"\n  application_name_tags app_name: \"My Lucky App\"\n  theme_color_tags theme_color: \"#ff0066\"\nend\n```\n\n## Development\n\nMake sure you have [Guardian.cr](https://github.com/f/guardian) installed. Then\nrun:\n\n```bash\n$ guardian\n```\n\nThis will automatically:\n- run ameba for src and spec files\n- run the relevant spec for any file in src\n- run spec file whenever they are saved\n- install shards whenever you save shard.yml\n\n## Documentation\n\n- [API (master)](https://wout.github.io/lucky_favicon)\n\n## Contributing\n\n1. Fork it (<https://github.com/wout/lucky_favicon/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [wout](https://github.com/wout) - creator and maintainer\n","program":{"html_id":"lucky_favicon/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"lucky_favicon","program":true,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"lucky_favicon/LuckyFavicon","path":"LuckyFavicon.html","kind":"module","full_name":"LuckyFavicon","name":"LuckyFavicon","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"src/lucky_favicon/tags.cr","line_number":1,"url":"https://github.com/wout/lucky_favicon/blob/2a07476d513c94aa6286604d20714eedf46e309d/src/lucky_favicon/tags.cr#L1"},{"filename":"src/lucky_favicon/version.cr","line_number":1,"url":"https://github.com/wout/lucky_favicon/blob/2a07476d513c94aa6286604d20714eedf46e309d/src/lucky_favicon/version.cr#L1"}],"repository_name":"lucky_favicon","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.2.0\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"lucky_favicon/LuckyFavicon/Tags","path":"LuckyFavicon/Tags.html","kind":"module","full_name":"LuckyFavicon::Tags","name":"Tags","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"src/lucky_favicon/tags.cr","line_number":1,"url":"https://github.com/wout/lucky_favicon/blob/2a07476d513c94aa6286604d20714eedf46e309d/src/lucky_favicon/tags.cr#L1"}],"repository_name":"lucky_favicon","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[{"id":"FAVICON_ICON_SIZES","name":"FAVICON_ICON_SIZES","value":"[\"16x16\", \"32x32\"] of ::String","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"lucky_favicon/LuckyFavicon","kind":"module","full_name":"LuckyFavicon","name":"LuckyFavicon"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[{"html_id":"apple_touch_icon_tag(version:String?=nil,dir:String?=nil):Nil-instance-method","name":"apple_touch_icon_tag","doc":"Generates a apple-touch-icon link tag with a default size of 180x180:\n\n```html\n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png?v=0.1.0\">\n```\n\nNote: currently it only supports one icon with the fixed size of 180x180.\nThis is also the default when generating the icon set.","summary":"<p>Generates a apple-touch-icon link tag with a default size of 180x180:</p>","abstract":false,"args":[{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"args_string":"(version : String? = nil, dir : String? = nil) : Nil","args_html":"(version : String? = <span class=\"n\">nil</span>, dir : String? = <span class=\"n\">nil</span>) : Nil","location":{"filename":"src/lucky_favicon/tags.cr","line_number":27,"url":"https://github.com/wout/lucky_favicon/blob/2a07476d513c94aa6286604d20714eedf46e309d/src/lucky_favicon/tags.cr#L27"},"def":{"name":"apple_touch_icon_tag","args":[{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Nil","visibility":"Public","body":"empty_tag(\"link\", rel: \"apple-touch-icon\", sizes: \"180x180\", href: favicon_icon_path(\"apple-touch-icon.png\", version, dir))"}},{"html_id":"application_name_tags(app_name:String):Nil-instance-method","name":"application_name_tags","doc":"Generates meta tags for the application name:\n\n```html\n<meta name=\"apple-mobile-web-app-title\" content=\"Lucky App\">\n<meta name=\"application-name\" content=\"Lucky App\">\n```","summary":"<p>Generates meta tags for the application name:</p>","abstract":false,"args":[{"name":"app_name","doc":null,"default_value":"","external_name":"app_name","restriction":"String"}],"args_string":"(app_name : String) : Nil","args_html":"(app_name : String) : Nil","location":{"filename":"src/lucky_favicon/tags.cr","line_number":91,"url":"https://github.com/wout/lucky_favicon/blob/2a07476d513c94aa6286604d20714eedf46e309d/src/lucky_favicon/tags.cr#L91"},"def":{"name":"application_name_tags","args":[{"name":"app_name","doc":null,"default_value":"","external_name":"app_name","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Nil","visibility":"Public","body":"meta(name: \"apple-mobile-web-app-title\", content: app_name)\nmeta(name: \"application-name\", content: app_name)\n"}},{"html_id":"favicon_icon_path(icon:String,version:String?=nil,dir:String?=nil)-instance-method","name":"favicon_icon_path","doc":"Builds the path to the given file.","summary":"<p>Builds the path to the given file.</p>","abstract":false,"args":[{"name":"icon","doc":null,"default_value":"","external_name":"icon","restriction":"String"},{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"args_string":"(icon : String, version : String? = nil, dir : String? = nil)","args_html":"(icon : String, version : String? = <span class=\"n\">nil</span>, dir : String? = <span class=\"n\">nil</span>)","location":{"filename":"src/lucky_favicon/tags.cr","line_number":113,"url":"https://github.com/wout/lucky_favicon/blob/2a07476d513c94aa6286604d20714eedf46e309d/src/lucky_favicon/tags.cr#L113"},"def":{"name":"favicon_icon_path","args":[{"name":"icon","doc":null,"default_value":"","external_name":"icon","restriction":"String"},{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"((File.join(dir || \"/\", icon)).rchop(\"/\")) + \"?v=#{version || \"0.1.0\"}\""}},{"html_id":"favicon_icon_tags(sizes:Array(String)=FAVICON_ICON_SIZES,version:String?=nil,dir:String?=nil):Nil-instance-method","name":"favicon_icon_tags","doc":"Generates the default .ico shortcut icon link tag and also a list for png\nfavicon icons with a number of given sizes (most likely 16x16 and 32x32):\n\n```html\n<link rel=\"shortcut icon\" href=\"/favicon.ico?v=0.1.0\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png?v=0.1.0\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png?v=0.1.0\">\n```","summary":"<p>Generates the default .ico shortcut icon link tag and also a list for png favicon icons with a number of given sizes (most likely 16x16 and 32x32):</p>","abstract":false,"args":[{"name":"sizes","doc":null,"default_value":"FAVICON_ICON_SIZES","external_name":"sizes","restriction":"Array(String)"},{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"args_string":"(sizes : Array(String) = FAVICON_ICON_SIZES, version : String? = nil, dir : String? = nil) : Nil","args_html":"(sizes : Array(String) = <span class=\"t\">FAVICON_ICON_SIZES</span>, version : String? = <span class=\"n\">nil</span>, dir : String? = <span class=\"n\">nil</span>) : Nil","location":{"filename":"src/lucky_favicon/tags.cr","line_number":58,"url":"https://github.com/wout/lucky_favicon/blob/2a07476d513c94aa6286604d20714eedf46e309d/src/lucky_favicon/tags.cr#L58"},"def":{"name":"favicon_icon_tags","args":[{"name":"sizes","doc":null,"default_value":"FAVICON_ICON_SIZES","external_name":"sizes","restriction":"Array(String)"},{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Nil","visibility":"Public","body":"empty_tag(\"link\", rel: \"shortcut icon\", href: favicon_icon_path(\"favicon.ico\", version, dir))\nsizes.each do |size|\n  empty_tag(\"link\", rel: \"icon\", type: \"image/png\", sizes: size, href: favicon_icon_path(\"favicon-#{size}.png\", version, dir))\nend\n"}},{"html_id":"favicon_tags(app_name:String,theme_color:String,version:String?=nil,dir:String?=nil):Nil-instance-method","name":"favicon_tags","doc":"Generates a set of icon tags as suggested by https://realfavicongenerator.net/","summary":"<p>Generates a set of icon tags as suggested by https://realfavicongenerator.net/</p>","abstract":false,"args":[{"name":"app_name","doc":null,"default_value":"","external_name":"app_name","restriction":"String"},{"name":"theme_color","doc":null,"default_value":"","external_name":"theme_color","restriction":"String"},{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"args_string":"(app_name : String, theme_color : String, version : String? = nil, dir : String? = nil) : Nil","args_html":"(app_name : String, theme_color : String, version : String? = <span class=\"n\">nil</span>, dir : String? = <span class=\"n\">nil</span>) : Nil","location":{"filename":"src/lucky_favicon/tags.cr","line_number":5,"url":"https://github.com/wout/lucky_favicon/blob/2a07476d513c94aa6286604d20714eedf46e309d/src/lucky_favicon/tags.cr#L5"},"def":{"name":"favicon_tags","args":[{"name":"app_name","doc":null,"default_value":"","external_name":"app_name","restriction":"String"},{"name":"theme_color","doc":null,"default_value":"","external_name":"theme_color","restriction":"String"},{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Nil","visibility":"Public","body":"apple_touch_icon_tag(version, dir)\nfavicon_icon_tags(FAVICON_ICON_SIZES, version, dir)\nsite_webmanifest_tag(version, dir)\nsafari_pinned_tab_tag(theme_color, version, dir)\napplication_name_tags(app_name)\ntheme_color_tags(theme_color)\n"}},{"html_id":"safari_pinned_tab_tag(theme_color:String,version:String?=nil,dir:String?=nil):Nil-instance-method","name":"safari_pinned_tab_tag","doc":"Generates a mask-icon link tag using the generated svg icon and the theme\ncolor for the backgound:\n\n```html\n<link rel=\"mask-icon\" href=\"/safari-pinned-tab.svg?v=0.1.0\" color=\"#ff0066\">\n```","summary":"<p>Generates a mask-icon link tag using the generated svg icon and the theme color for the backgound:</p>","abstract":false,"args":[{"name":"theme_color","doc":null,"default_value":"","external_name":"theme_color","restriction":"String"},{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"args_string":"(theme_color : String, version : String? = nil, dir : String? = nil) : Nil","args_html":"(theme_color : String, version : String? = <span class=\"n\">nil</span>, dir : String? = <span class=\"n\">nil</span>) : Nil","location":{"filename":"src/lucky_favicon/tags.cr","line_number":41,"url":"https://github.com/wout/lucky_favicon/blob/2a07476d513c94aa6286604d20714eedf46e309d/src/lucky_favicon/tags.cr#L41"},"def":{"name":"safari_pinned_tab_tag","args":[{"name":"theme_color","doc":null,"default_value":"","external_name":"theme_color","restriction":"String"},{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Nil","visibility":"Public","body":"empty_tag(\"link\", rel: \"mask-icon\", color: theme_color, href: favicon_icon_path(\"safari-pinned-tab.svg\", version, dir))"}},{"html_id":"site_webmanifest_tag(version:String?=nil,dir:String?=nil):Nil-instance-method","name":"site_webmanifest_tag","doc":"Generates a manifest link tag for the sit's web manifest:\n\n```html\n<link rel=\"manifest\" href=\"/site.webmanifest?v=0.1.0\">\n```","summary":"<p>Generates a manifest link tag for the sit's web manifest:</p>","abstract":false,"args":[{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"args_string":"(version : String? = nil, dir : String? = nil) : Nil","args_html":"(version : String? = <span class=\"n\">nil</span>, dir : String? = <span class=\"n\">nil</span>) : Nil","location":{"filename":"src/lucky_favicon/tags.cr","line_number":77,"url":"https://github.com/wout/lucky_favicon/blob/2a07476d513c94aa6286604d20714eedf46e309d/src/lucky_favicon/tags.cr#L77"},"def":{"name":"site_webmanifest_tag","args":[{"name":"version","doc":null,"default_value":"nil","external_name":"version","restriction":"String | ::Nil"},{"name":"dir","doc":null,"default_value":"nil","external_name":"dir","restriction":"String | ::Nil"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Nil","visibility":"Public","body":"empty_tag(\"link\", rel: \"manifest\", href: favicon_icon_path(\"/site.webmanifest\", version, dir))"}},{"html_id":"theme_color_tags(theme_color:String)-instance-method","name":"theme_color_tags","doc":"Generates meta tags for the global theme color, mostly used as a background\nto the base icon:\n\n```html\n<meta name=\"msapplication-TileColor\" content=\"#ff0066\">\n<meta name=\"theme-color\" content=\"#ff0066\">\n```","summary":"<p>Generates meta tags for the global theme color, mostly used as a background to the base icon:</p>","abstract":false,"args":[{"name":"theme_color","doc":null,"default_value":"","external_name":"theme_color","restriction":"String"}],"args_string":"(theme_color : String)","args_html":"(theme_color : String)","location":{"filename":"src/lucky_favicon/tags.cr","line_number":105,"url":"https://github.com/wout/lucky_favicon/blob/2a07476d513c94aa6286604d20714eedf46e309d/src/lucky_favicon/tags.cr#L105"},"def":{"name":"theme_color_tags","args":[{"name":"theme_color","doc":null,"default_value":"","external_name":"theme_color","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"meta(name: \"msapplication-TileColor\", content: theme_color)\nmeta(name: \"theme-color\", content: theme_color)\n"}}],"macros":[],"types":[]}]}]}})