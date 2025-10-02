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
        html = view(&.favicon_tags("Lucky App"))

        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="shortcut icon" href="/favicon.ico?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <meta name="apple-mobile-web-app-title" content="Lucky App">
        HTML
        html.should contain <<-HTML
        <link rel="manifest" href="/site.webmanifest?v=0.1.0">
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

    describe "#favicon_icon_tags" do
      it "renders tags with defaut sizes" do
        html = view(&.favicon_icon_tags)

        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="shortcut icon" href="/favicon.ico?v=0.1.0">
        HTML
      end

      it "renders tags with custom sizes" do
        html = view(&.favicon_icon_tags(%w[24x24 64x64 128x128]))

        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="24x24" href="/favicon-24x24.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=0.1.0">
        HTML
        html.should contain <<-HTML
        <link rel="shortcut icon" href="/favicon.ico?v=0.1.0">
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

    describe "#application_title_tag" do
      it "renders the app name meta tag" do
        html = view(&.application_title_tag("Lucky App"))

        html.should contain <<-HTML
        <meta name="apple-mobile-web-app-title" content="Lucky App">
        HTML
      end
    end
  end

  context "with dir and version" do
    describe "#favicon_tags" do
      it "renders all tags" do
        html = view(&.favicon_tags("Lucky App", "1.2.3", "/icons"))

        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="shortcut icon" href="/icons/favicon.ico?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <meta name="apple-mobile-web-app-title" content="Lucky App">
        HTML
        html.should contain <<-HTML
        <link rel="manifest" href="/icons/site.webmanifest?v=1.2.3">
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

    describe "#favicon_icon_tags" do
      it "renders tags with defaut sizes" do
        html = view(&.favicon_icon_tags(version: "1.2.3", dir: "/icons"))

        html.should contain <<-HTML
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg?v=1.2.3">
        HTML
        html.should contain <<-HTML
        <link rel="shortcut icon" href="/icons/favicon.ico?v=1.2.3">
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

private def view(&)
  TestPage.new(build_context).tap do |page|
    yield page
  end.view.to_s
end
