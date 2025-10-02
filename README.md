# Lucky Favicon

Add favicons from the [Real Favicon Generator](https://realfavicongenerator.net) to your Lucky project.

![GitHub](https://img.shields.io/github/license/wout/lucky_favicon)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/wout/lucky_favicon)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/wout/lucky_favicon/ci.yml?branch=main)

## Installation

1. Add the dependency to your `shard.yml`:

```yaml
dependencies:
  lucky_favicon:
    github: wout/lucky_favicon
```

2. Run `shards install`

## Usage

First, head over to the [Real Favicon Generator](https://realfavicongenerator.net), configure your icons and download the package. Unzip the package and place all the files in the public dir of your Lucky project, or in whichever subdirectory you configured when generating the set. 

Then, make sure you require this library in Lucky's `shards.cr` file:

```crystal
require "lucky_favicon"
```

And include the `LuckyFavicon::Tags` module wherever you want to use it:

```crystal
class Shared::LayoutHead < BaseComponent
  include LuckyFavicon::Tags
  ...
end
```

Now you'll be able to add your icon set with a single method:

```crystal
head do
  favicon_tags app_name: "Lucky App"
end
```

This will render a complete set of favicon-related tags:

```html
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="Lucky App" />
<link rel="manifest" href="/site.webmanifest" />
```

### Cache key / version number

By default, `"?v=0.1.0"` will be appended to the file paths as a query string. If you update your icons, simply provide a new version number, and you're good to go:

```crystal
favicon_tags app_name: "Lucky App", version: "0.2.0"
```

### Custom directory
While it's not advisable to have your icons in a subdirectory, sometimes it may not be possible to have them in the root of you public directory. In that case you can provide the name of the directory:

```crystal
favicon_tags app_name: "Lucky App", dir: "/icons"
```

### Individual tags
If you don't want the whole set of meta and link tags, you can use the individual methods, each with custom arguments if required:

```crystal
head do
  favicon_icon_tags
  apple_touch_icon_tag dir: "/somewhere/else"
  application_title_tag app_name: "My Lucky App"
  site_webmanifest_tag version: "0.5.3"
end
```

## Documentation

- [API (master)](https://wout.github.io/lucky_favicon)

## Contributing

1. Fork it (<https://github.com/wout/lucky_favicon/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Make your changes, run `crystal run ci.cr`, and ensure a positive result
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create a new Pull Request

## Contributors

- [wout](https://github.com/wout) - creator and maintainer
