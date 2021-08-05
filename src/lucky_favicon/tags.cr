module LuckyFavicon::Tags
  FAVICON_ICON_SIZES = %w[16x16 32x32]

  # Generates a set of icon tags as suggested by https://realfavicongenerator.net/
  def favicon_tags(
    app_name : String,
    theme_color : String,
    version : String? = nil,
    dir : String? = nil
  ) : Nil
    apple_touch_icon_tag(version, dir)
    favicon_tags(FAVICON_ICON_SIZES, version, dir)
    site_webmanifest_tag(version, dir)
    safari_pinned_tab_tag(theme_color, version, dir)
    application_name_tags(app_name)
    theme_color_tags(theme_color)
  end

  # Generates a apple-touch-icon link tag with a default size of 180x180:
  #
  # <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=0.1.0">
  #
  # Note: currently it only supports one icon with the fixed size of 180x180.
  # This is also the default when generating the icon set.
  def apple_touch_icon_tag(
    version : String? = nil,
    dir : String? = nil
  ) : Nil
    empty_tag "link", rel: "apple-touch-icon", sizes: "180x180",
      href: favicon_icon_path("apple-touch-icon.png", version, dir)
  end

  # Generates a mask-icon link tag using the generated svg icon and the theme
  # color for the backgound:
  #
  # <link rel="mask-icon" href="/safari-pinned-tab.svg?v=0.1.0" color="#ff0066">
  def safari_pinned_tab_tag(
    theme_color : String,
    version : String? = nil,
    dir : String? = nil
  ) : Nil
    empty_tag "link", rel: "mask-icon", color: theme_color,
      href: favicon_icon_path("safari-pinned-tab.svg", version, dir)
  end

  # Generates the default .ico shortcut icon link tag and also a list for png
  # favicon icons with a number of given sizes (most likely 16x16 and 32x32):
  #
  # <link rel="shortcut icon" href="/favicon.ico?v=0.1.0">
  # <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=0.1.0">
  # <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=0.1.0">
  def favicon_tags(
    sizes : Array(String) = FAVICON_ICON_SIZES,
    version : String? = nil,
    dir : String? = nil
  ) : Nil
    empty_tag "link", rel: "shortcut icon",
      href: favicon_icon_path("favicon.ico", version, dir)

    sizes.each do |size|
      empty_tag "link", rel: "icon", type: "image/png", sizes: size,
        href: favicon_icon_path("favicon-#{size}.png", version, dir)
    end
  end

  # Generates a manifest link tag for the sit's web manifest:
  #
  # <link rel="manifest" href="/site.webmanifest?v=0.1.0">
  def site_webmanifest_tag(
    version : String? = nil,
    dir : String? = nil
  ) : Nil
    empty_tag "link", rel: "manifest",
      href: favicon_icon_path("/site.webmanifest", version, dir)
  end

  # Generates meta tags for the application name:
  #
  # <meta name="apple-mobile-web-app-title" content="Lucky App">
  # <meta name="application-name" content="Lucky App">
  def application_name_tags(
    app_name : String
  ) : Nil
    meta name: "apple-mobile-web-app-title", content: app_name
    meta name: "application-name", content: app_name
  end

  # Generates meta tags for the global theme color, mostly used as a background
  # to the base icon:
  #
  # <meta name="msapplication-TileColor" content="#ff0066">
  # <meta name="theme-color" content="#ff0066">
  def theme_color_tags(
    theme_color : String
  )
    meta name: "msapplication-TileColor", content: theme_color
    meta name: "theme-color", content: theme_color
  end

  # Builds the path to the given file.
  def favicon_icon_path(
    icon : String,
    version : String? = nil,
    dir : String? = nil
  )
    File.join(dir || "/", icon).rchop("/") + "?v=#{version || "0.1.0"}"
  end
end
