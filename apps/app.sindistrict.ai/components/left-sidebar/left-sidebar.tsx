"use client";

import { useUser } from "@services/clerk";
import { Sidebar, SidebarItems, SidebarItem, SidebarFooter } from "@packages/components";

export function LeftSidebar() {
    const { user } = useUser();

    return (
        <Sidebar position="left">
            <div className="sidebar-content">
                <SidebarItems>
                    <SidebarItem title="Home" href="/" icon={{ library: "untitledui", name: "HomeLine", size: "lg", inline: true }} />
                    <SidebarItem title="Dashboard" href="/dashboard" icon={{ library: "untitledui", name: "BarChartSquare02", size: "lg", inline: true }} />
                    <SidebarItem title="Discover" href="/discover" icon={{ library: "untitledui", name: "Compass03", size: "lg", inline: true }} />
                </SidebarItems>

                <SidebarItems title="Content">
                    <SidebarItem title="Chats" href="/chats" icon={{ library: "untitledui", name: "MessageTextSquare01", size: "lg", inline: true }} />
                    <SidebarItem title="Characters" href="/characters" icon={{ library: "untitledui", name: "User01", size: "lg", inline: true }} />
                    <SidebarItem title="Scenarios" href="/scenarios" icon={{ library: "untitledui", name: "Clapperboard", size: "lg", inline: true }} />
                    <SidebarItem title="Personas" href="/personas" icon={{ library: "untitledui", name: "FaceWink", size: "lg", inline: true }} />
                    <SidebarItem title="Images" href="/images" icon={{ library: "untitledui", name: "Image01", size: "lg", inline: true }} />
                </SidebarItems>

                <SidebarItems title="Favorites" className="fill">
                    <SidebarItem title="Elisa Nishikawa" subtitle="18yo Female" href="/profile" avatar={{ src: "https://www.untitledui.com/images/avatars/elisa-nishikawa?w=288&h=288&q=75&fm=webp", shape: "rounded" }} />
                    <SidebarItem title="Caitlyn King" subtitle="20yo Female" href="/profile" avatar={{ src: "https://www.untitledui.com/images/avatars/caitlyn-king?w=288&h=288&q=75&fm=webp", shape: "rounded" }} />
                    <SidebarItem title="Kelly Williams" subtitle="21yo Female" href="/profile" avatar={{ src: "https://www.untitledui.com/images/avatars/kelly-williams?w=288&h=288&q=75&fm=webp", shape: "rounded" }} />
                    <SidebarItem title="Katherine Moss" subtitle="21yo Female" href="/profile" avatar={{ src: "https://www.untitledui.com/images/avatars/katherine-moss?w=288&h=288&q=75&fm=webp", shape: "rounded" }} />
                </SidebarItems>
            </div>

            <SidebarFooter>
                <SidebarItems>
                    <SidebarItem title={user?.username!} subtitle={user?.emailAddresses?.[0].emailAddress!} avatar={{ src: user?.imageUrl, shape: "rounded" }}>
                        <SidebarItem title="Characters" href="/characters" icon={{ library: "untitledui", name: "User01", size: "lg", inline: true }} />
                        <SidebarItem title="Scenarios" href="/scenarios" icon={{ library: "untitledui", name: "Clapperboard", size: "lg", inline: true }} />
                        <SidebarItem title="Personas" href="/personas" icon={{ library: "untitledui", name: "FaceWink", size: "lg", inline: true }} />
                        <SidebarItem title="Images" href="/images" icon={{ library: "untitledui", name: "Image01", size: "lg", inline: true }} />
                    </SidebarItem>
                </SidebarItems>
            </SidebarFooter>
        </Sidebar>
    );
}