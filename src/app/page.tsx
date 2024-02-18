"use client";

import React, { useCallback } from "react";
import { useOverlay } from "@toss/use-overlay";
import { Button } from "@/components/shared/Button";
import Alert from "@/components/shared/Alert";

const Home = () => {
  const overlay = useOverlay();

  const AlertModal = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <Alert isOpen={isOpen} onClose={close} />
    ));
  }, [overlay]);

  return <Button onClick={AlertModal}>Overlay Open</Button>;
};

export default Home;
