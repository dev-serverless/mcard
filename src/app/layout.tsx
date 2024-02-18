"use client";

import StyledComponentsRegistry from "@/provider/StyledProvider";
import { GlobalStyle } from "@/styles/globalStyles";
import { OverlayProvider } from "@toss/use-overlay";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OverlayProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
          </StyledComponentsRegistry>
        </OverlayProvider>
      </body>
    </html>
  );
}
