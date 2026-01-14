"use client";

import { ClerkProvider, SignInButton, SignUpButton, UserButton } from "@services/clerk";
import { Container, VisuallyHidden } from "@packages/components";
import "@packages/styles";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                </head>
                <body>
                 <Container>
                    <SignInButton />
                    <SignUpButton />
                    <UserButton />
                    <VisuallyHidden as="a" href="#test">Test</VisuallyHidden>
                    {children}
                 </Container>
                </body>
            </html>
        </ClerkProvider>
    )
}