"use client";

import React, { useCallback, useEffect } from "react";
import { useOverlay } from "@toss/use-overlay";
import { Button } from "@/components/shared/Button";
import Alert from "@/components/shared/Alert";
import getCards from "@/remote/card";
import getAddBanenrs from "@/remote/adBanner";

const Home = () => {
  const overlay = useOverlay();

  const AlertModal = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <Alert title="hi" description="hi2" isOpen={isOpen} onClose={close} />
    ));
  }, [overlay]);

  useEffect(() => {
    getCards().then((res) => {
      console.log("res", res);
    });

    getAddBanenrs().then((res) => {
      console.log("resss", res);
    });
  }, []);

  return <Button onClick={AlertModal}>Overlay Open</Button>;
};

export default Home;
