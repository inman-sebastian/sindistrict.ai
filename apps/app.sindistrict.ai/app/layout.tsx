"use client";

import { ClerkProvider } from "@services/clerk";
import { dark } from "@services/clerk/themes";
import { Header, Static, ScrollArea } from "@packages/components";
import { LeftSidebar, Footer } from "@/components";

import "@packages/styles";
import "./styles.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider telemetry={false} appearance={{ theme: dark }}>
            <html lang="en" suppressHydrationWarning>
                <head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                </head>
                <body>
                    <Static />
                    <Header />
                    <LeftSidebar />
                    <main>
                        <ScrollArea direction="vertical">
                            {children}
                            <Footer />
                        </ScrollArea>
                    </main>
                    {/* <Sidebar position="right">
                    </Sidebar> */}
                </body>
            </html>
        </ClerkProvider>
    )
}