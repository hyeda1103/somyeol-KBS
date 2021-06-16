import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Image from "../../assets/images/mainBg.webp";

const SEO = (props) => {
  let location = useLocation();
  let currentUrl = `https://news.kbs.co.kr/special/somyeol/index.html#/${location.pathname}`
  let quote = props.quote !== undefined ? props.quote : "";
  let title =
    props.title !== undefined
      ? props.title
      : "소멸의 땅, 지방은 어떻게 사라지나";
  let image = props.image !== undefined ? props.image : { Image };
  let description =
    props.description !== undefined
      ? props.description
      : `소멸의 땅, 지방은 어떻게 사라지나`;
  let hashtag = props.hashtag !== undefined ? props.hashtag : "#소멸의 땅";

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content={currentUrl} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#FF8A00" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content={title} />
        <meta property="quote" content={quote} />
        <meta name="description" content={description} />
        <meta property="image" content={image} />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:quote" content={quote} />
        <meta property="og:hashtag" content={hashtag} />
        <meta property="og:image" content={image} />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:site_name"
          content="소멸의 땅, 지방은 어떻게 사라지나"
        />
        <meta property="og:description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;
