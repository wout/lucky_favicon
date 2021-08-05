# Lucky Favicon

Add favicons from the [Real Favicon Generator](https://realfavicongenerator.net) to your Lucky project.

![GitHub](https://img.shields.io/github/license/wout/lucky_favicon)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/wout/lucky_favicon)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/wout/lucky_favicon/Lucky%20Favicon%20CI)

## Installation

1. Add the dependency to your `shard.yml`:

```yaml
dependencies:
  lucky_favicon:
    github: wout/lucky_favicon
```

2. Run `shards install`

## Usage

First, head over to the [Real Favicon Generator](https://realfavicongenerator.net), configure your icons and download the package. Unzip the package and place all the files in the public dir in you Lucky project. You can place them in a sub-dir but it has some drawbacks, as explained by the Real Favicon Generator:

> When generating a favicon with RealFaviconGenerator, the instructions ask you to place all files at the root of your web site. You may want to place them in a sub-directory, for example in http://mywebsite.com/icons/, just to make things clearer. However, there are three drawbacks with this approach:
> 
> - Internet Explorer looks for favicon.ico at the root of the web site. Granted: this is because we ask you to not declare favicon.ico.
> - iOS devices look for files such as apple-touch-icon-144x144.png at the root of the web site, as described by Apple. This issue can be mitigated by declaring the icons in the HTML code (this is necessary for Android anyway), but following Apple conventions is probably the best move.
> - By default, Internet Explorer 11 looks for browserconfig.xml at the root of the web site.
> - Several services, such as Yandex, look for favicon.ico in the root directory. 

Then, make sure your require this library in Lucky's shards.cr file:

```crystal
require "lucky_favicon"
```

And include the `LuckyFavicon::Tags` module:

```crystal
class Shared::LayoutHead < BaseComponent
  include LuckyFavicon::Tags
  ...
end
```

Now you'll be able to add your icon set in your layout file:

```crystal
head do
  favicon_tags app_name: "Lucky App", theme_color: "#00ff99"
end
```

This will render a complete set of favicon-related tags:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=0.1.0">
<link rel="mask-icon" color="#00ff99" href="/safari-pinned-tab.svg?v=0.1.0">
<link rel="shortcut icon" href="/favicon.ico?v=0.1.0">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=0.1.0">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=0.1.0">
<link rel="manifest" href="/site.webmanifest?v=0.1.0">
<meta name="apple-mobile-web-app-title" content="Lucky App">
<meta name="application-name" content="Lucky App">
<meta name="msapplication-TileColor" content="#00ff99">
<meta name="theme-color" content="#00ff99">
```

### Cache key / revision number

By default, `"?v=0.1.0"` will be appended to the file paths as a query string. If you update your icons, simply provide a new revision number and you're good to go:

```crystal
favicon_tags app_name: "Lucky App", theme_color: "#00ff99", version: "0.2.0"
```

### Custom directory
While it's not advisable to have your icons in a sub-dir, sometimes it may not be possible to have them there. In that case you can provide the name of the directory:

```crystal
favicon_tags app_name: "Lucky App", theme_color: "#00ff99", dir: "/icons"
```

### Individual tags
If you don't want the whole set of meta and link tags, you can use the individual methods, each with custom arguments if required:

```crystal
head do
  apple_touch_icon_tag dir: "/somewhere/else"
  favicon_icon_tags sizes: %w[24x24 64x64 128x128]
  site_webmanifest_tag version: "0.5.3"
  safari_pinned_tab_tag theme_color: "#00ff99"
  application_name_tags app_name: "My Lucky App"
  theme_color_tags theme_color: "#ff0066"
end
```

## Development

Make sure you have [Guardian.cr](https://github.com/f/guardian) installed. Then
run:

```bash
$ guardian
```

This will automatically:
- run ameba for src and spec files
- run the relevant spec for any file in src
- run spec file whenever they are saved
- install shards whenever you save shard.yml

## Documentation

- [API (master)](https://wout.github.io/lucky_favicon)

## Contributing

1. Fork it (<https://github.com/wout/lucky_favicon/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [wout](https://github.com/wout) - creator and maintainer
