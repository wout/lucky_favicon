require "../spec_helper"

include ContextHelper

private class TestPage
  include Lucky::HTMLPage
  include LuckyFavicon::Tags

  def render
  end
end

describe LuckyFavicon::Tags do
  context "with defaults" do
    describe "#favicon_tags" do
      it "renders all tags" do
        html = view(&.favicon_tags("Lucky App", "#00ff99"))

        html.should contain <<-HTML
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="mask-icon" color="#00ff99" href="/safari-pinned-tab.svg?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="shortcut icon" href="/favicon.ico?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="manifest" href="/site.webmanifest?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <meta name="apple-mobile-web-app-title" content="Lucky App">
        HTML
        html.should contain <<-HTML
        <meta name="application-name" content="Lucky App">
        HTML
        html.should contain <<-HTML
        <meta name="msapplication-TileColor" content="#00ff99">
        HTML
        html.should contain <<-HTML
        <meta name="theme-color" content="#00ff99">
        HTML
      end
    end

    describe "#apple_touch_icon_tag" do
      it "renders an apple touch icon" do
        html = view(&.apple_touch_icon_tag)

        html.should contain <<-HTML
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=0.1.0">
        HTML
      end
    end

    describe "#safari_pinned_tab_tag" do
      it "renders a safari mask icon with color" do
        html = view(&.safari_pinned_tab_tag("#ff0066"))

        html.should contain <<-HTML
        <link rel="mask-icon" color="#ff0066" href="/safari-pinned-tab.svg?v=0.1.0">
        HTML
      end
    end

    describe "#favicon_tags" do
      it "renders tags with defaut sizes" do
        html = view(&.favicon_tags)

        html.should contain <<-HTML
        <link rel="shortcut icon" href="/favicon.ico?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=0.1.0">
        HTML
      end

      it "renders tags with custom sizes" do
        html = view(&.favicon_tags(%w[24x24 64x64 128x128]))

        html.should contain <<-HTML
        <link rel="shortcut icon" href="/favicon.ico?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="24x24" href="/favicon-24x24.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png?v=0.1.0">
        HTML
      end
    end

    describe "#site_webmanifest_tag" do
      it "renders a site webmanifest link tag" do
        html = view(&.site_webmanifest_tag)

        html.should contain <<-HTML
        <link rel="manifest" href="/site.webmanifest?v=0.1.0">
        HTML
      end
    end

    describe "#application_name_tags" do
      it "renders the app name meta tags" do
        html = view(&.application_name_tags("Lucky App"))

        html.should contain <<-HTML
        <meta name="apple-mobile-web-app-title" content="Lucky App">
        HTML
        html.should contain <<-HTML
        <meta name="application-name" content="Lucky App">
        HTML
      end
    end

    describe "#theme_color_tags" do
      it "renders the them color meta tags" do
        html = view(&.theme_color_tags("#ff0066"))

        html.should contain <<-HTML
        <meta name="msapplication-TileColor" content="#ff0066">
        HTML
        html.should contain <<-HTML
        <meta name="theme-color" content="#ff0066">
        HTML
      end
    end
  end

  context "with dir and version" do
    describe "#favicon_tags" do
      it "renders all tags" do
        html = view(&.favicon_tags("Lucky App", "#00ff99", "1.2.3", "/icons"))

        html.should contain <<-HTML
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="mask-icon" color="#00ff99" href="/icons/safari-pinned-tab.svg?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="shortcut icon" href="/icons/favicon.ico?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="manifest" href="/icons/site.webmanifest?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <meta name="apple-mobile-web-app-title" content="Lucky App">
        HTML
        html.should contain <<-HTML
        <meta name="application-name" content="Lucky App">
        HTML
        html.should contain <<-HTML
        <meta name="msapplication-TileColor" content="#00ff99">
        HTML
        html.should contain <<-HTML
        <meta name="theme-color" content="#00ff99">
        HTML
      end
    end

    describe "#apple_touch_icon_tag" do
      it "renders an apple touch icon" do
        html = view(&.apple_touch_icon_tag(version: "1.2.3", dir: "/icons"))

        html.should contain <<-HTML
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png?v=1.2.3">
        HTML
      end
    end

    describe "#safari_pinned_tab_tag" do
      it "renders a safari mask icon with color" do
        html = view(&.safari_pinned_tab_tag("#ff0066", "1.2.3", "/icons"))

        html.should contain <<-HTML
        <link rel="mask-icon" color="#ff0066" href="/icons/safari-pinned-tab.svg?v=1.2.3">
        HTML
      end
    end

    describe "#favicon_tags" do
      it "renders tags with defaut sizes" do
        html = view(&.favicon_tags(version: "1.2.3", dir: "/icons"))

        html.should contain <<-HTML
        <link rel="shortcut icon" href="/icons/favicon.ico?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png?v=1.2.3">
        HTML
      end
    end

    describe "#site_webmanifest_tag" do
      it "renders a site webmanifest link tag" do
        html = view(&.site_webmanifest_tag(version: "1.2.3", dir: "/icons"))

        html.should contain <<-HTML
        <link rel="manifest" href="/icons/site.webmanifest?v=1.2.3">
        HTML
      end
    end
  end
end

private def view
  TestPage.new(build_context).tap do |page|
    yield page
  end.view.to_s
end
