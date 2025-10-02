module LuckyFavicon::Tags
  FAVICON_ICON_SIZES = %w[96x96]

  # Generates a set of icon tags as suggested by https://realfavicongenerator.net/
  def favicon_tags(
    app_name : String,
    version : String? = nil,
    dir : String? = nil,
  ) : Nil
    favicon_icon_tags(FAVICON_ICON_SIZES, version, dir)
    apple_touch_icon_tag(version, dir)
    application_title_tag(app_name)
    site_webmanifest_tag(version, dir)
  end

  # Generates a apple-touch-icon link tag with a default size of 180x180:
  #
  # ```html
  # <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=0.1.0">
  # ```
  #
  # Note: currently it only supports one icon with the fixed size of 180x180.
  # This is also the default when generating the icon set.
  def apple_touch_icon_tag(
    version : String? = nil,
    dir : String? = nil,
  ) : Nil
    empty_tag "link", rel: "apple-touch-icon", sizes: "180x180",
      href: favicon_icon_path("apple-touch-icon.png", version, dir)
  end

  # Generates the default .ico shortcut icon link tag, an SVG icon tag, and
  # also additional PNG icon(s), possibly in different sizes (currently only
  # 96x96).
  #
  # ```html
  # <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
  # <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  # <link rel="shortcut icon" href="/favicon.ico" />
  # ```
  def favicon_icon_tags(
    sizes : Array(String) = FAVICON_ICON_SIZES,
    version : String? = nil,
    dir : String? = nil,
  ) : Nil
    sizes.each do |size|
      empty_tag "link", rel: "icon", type: "image/png", sizes: size,
        href: favicon_icon_path("favicon-#{size}.png", version, dir)
    end

    empty_tag "link", rel: "icon",
      type: "image/svg+xml",
      href: favicon_icon_path("favicon.svg", version, dir)

    empty_tag "link", rel: "shortcut icon",
      href: favicon_icon_path("favicon.ico", version, dir)
  end

  # Generates a manifest link tag for the sit's web manifest:
  #
  # ```html
  # <link rel="manifest" href="/site.webmanifest?v=0.1.0">
  # ```
  def site_webmanifest_tag(
    version : String? = nil,
    dir : String? = nil,
  ) : Nil
    empty_tag "link", rel: "manifest",
      href: favicon_icon_path("/site.webmanifest", version, dir)
  end

  # Generates meta tag for the application title in iOS:
  #
  # ```html
  # <meta name="apple-mobile-web-app-title" content="Lucky App">
  # ```
  def application_title_tag(
    app_name : String,
  ) : Nil
    meta name: "apple-mobile-web-app-title", content: app_name
  end

  # Builds the path to the given file.
  def favicon_icon_path(
    icon : String,
    version : String? = nil,
    dir : String? = nil,
  )
    File.join(dir || "/", icon).rchop("/") + "?v=#{version || "0.1.0"}"
  end
end
