"use client";

import StyledComponentsRegistry from "@/provider/StyledProvider";
import { GlobalStyle } from "@/styles/globalStyles";
import { OverlayProvider } from "@toss/use-overlay";
import { QueryClient, QueryClientProvider } from "react-query";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const client = new QueryClient({
  defaultOptions: {},
});

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
            <QueryClientProvider client={client}>
              <GlobalStyle />
              {children}
            </QueryClientProvider>
          </StyledComponentsRegistry>
        </OverlayProvider>
      </body>
    </html>
  );
}
