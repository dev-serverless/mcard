"use client";

import AdBanners from "@/components/home/AdBanners";
import CardList from "@/components/home/CardList";
import Top from "@/components/shared/Top";
import React from "react";

const Home = () => {
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      />
      <AdBanners />
      <CardList />
    </div>
  );
};

export default Home;
