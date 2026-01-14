"use client";

import { ClerkProvider, SignInButton, SignUpButton, UserButton } from "@services/clerk";
import { Container, VisuallyHidden } from "@packages/components";
import "@packages/styles";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
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