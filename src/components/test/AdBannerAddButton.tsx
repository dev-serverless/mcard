"use client";

import { store } from "@/remote/firebase";
import { Button } from "../shared/Button";
import { collection, doc, writeBatch } from "firebase/firestore";
import { AD_BANNERS } from "@/mock/data";
import { COLLECTIONS } from "@/constants";

const AdBannerAddButton = () => {
  const handleButtonClick = async () => {
    const batch = writeBatch(store);

    AD_BANNERS.forEach((banner) => {
      const docRef = doc(collection(store, COLLECTIONS.ADDBANNER));

      batch.set(docRef, banner);
    });

    await batch.commit();

    alert("배너 리스트 추가 완료");
  };

  return <Button onClick={handleButtonClick}>배너 리스트 추가하기</Button>;
};

export default AdBannerAddButton;
