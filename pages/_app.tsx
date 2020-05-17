import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { DefaultSeo } from "next-seo";
// import {} from "dotenv";

const DEFAULT_SEO = {
  title: "Anish's Blog",
  description: "Awesome blog tutorial website",
  openGraph: {
    type: "website",
    locale: "en",
    title: "Anish's Blog",
    description: "Awesome blog tutorial website",
    site_name: "Blog",
  },
};

export default class CustomApp extends App {
  componentDidMount() {
    Router.events.on("routeChangeComplete", () => {
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
    Router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <DefaultSeo {...DEFAULT_SEO} />
        <Component {...pageProps} />;
      </>
    );
  }
}
