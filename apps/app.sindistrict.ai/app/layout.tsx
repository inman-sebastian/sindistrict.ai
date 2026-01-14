import { ClerkProvider } from "@services/clerk";
import { dark } from "@services/clerk/themes";
import { Header, Sidebar, SidebarItems, SidebarItem, SidebarFooter, Static, ScrollArea, Button, Icon } from "@packages/components";
import { Footer } from "@/components";
import "@packages/styles";
import "./styles.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider telemetry={false} appearance={{ theme: dark }}>
            <html lang="en" suppressHydrationWarning>
                <body>
                    <Static />
                    <Header />
                    <Sidebar position="left">
                        <div className="sidebar-content">
                            <SidebarItems>
                                <SidebarItem title="Home" href="/" icon={{ type: "untitledui", name: "HomeLine", size: "lg", inline: true }} />
                                <SidebarItem title="Dashboard" href="/dashboard" icon={{ type: "untitledui", name: "BarChartSquare02", size: "lg", inline: true }} />
                                <SidebarItem title="Discover" href="/discover" icon={{ type: "untitledui", name: "Compass03", size: "lg", inline: true }} />
                            </SidebarItems>

                            <SidebarItems title="Content">
                                <SidebarItem title="Characters" href="/characters" icon={{ type: "untitledui", name: "User01", size: "lg", inline: true }} />
                                <SidebarItem title="Scenarios" href="/scenarios" icon={{ type: "untitledui", name: "Clapperboard", size: "lg", inline: true }} />
                                <SidebarItem title="Personas" href="/personas" icon={{ type: "untitledui", name: "FaceWink", size: "lg", inline: true }} />
                                <SidebarItem title="Images" href="/images" icon={{ type: "untitledui", name: "Image01", size: "lg", inline: true }} />
                            </SidebarItems>

                            <SidebarItems title="Favorites">
                                <SidebarItem title="Elisa Nishikawa" subtitle="18yo Female" href="/profile" avatar={{ src: "https://www.untitledui.com/images/avatars/elisa-nishikawa?w=288&h=288&q=75&fm=webp", shape: "rounded" }} />
                                <SidebarItem title="Caitlyn King" subtitle="20yo Female" href="/profile" avatar={{ src: "https://www.untitledui.com/images/avatars/caitlyn-king?w=288&h=288&q=75&fm=webp", shape: "rounded" }} />
                                <SidebarItem title="Kelly Williams" subtitle="21yo Female" href="/profile" avatar={{ src: "https://www.untitledui.com/images/avatars/kelly-williams?w=288&h=288&q=75&fm=webp", shape: "rounded" }} />
                                <SidebarItem title="Katherine Moss" subtitle="21yo Female" href="/profile" avatar={{ src: "https://www.untitledui.com/images/avatars/katherine-moss?w=288&h=288&q=75&fm=webp", shape: "rounded" }} />
                            </SidebarItems>
                        </div>

                        <SidebarFooter>
                            <SidebarItems>
                                <SidebarItem title="Help Center" href="/help" icon={{ type: "untitledui", name: "HelpCircle", size: "lg", inline: true }} />
                                <SidebarItem title="Contact Us" href="/contact" icon={{ type: "untitledui", name: "Mail03", size: "lg", inline: true }} />
                                <SidebarItem title="Affiliate Program" href="/affiliate" icon={{ type: "untitledui", name: "Trophy02", size: "lg", inline: true }} />
                            </SidebarItems>
                            {/* <div className="sidebar-footer-links">
                                <a href={`${process.env.NEXT_PUBLIC_SINDISTRICT_WEB_URL}/privacy-policy`}>Privacy Policy</a>
                                <a href={`${process.env.NEXT_PUBLIC_SINDISTRICT_WEB_URL}/terms-of-service`}>Terms of Service</a>
                                <a href={`${process.env.NEXT_PUBLIC_SINDISTRICT_WEB_URL}/cookie-policy`}>Cookie Policy</a>
                            </div> */}
                        </SidebarFooter>
                    </Sidebar>
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