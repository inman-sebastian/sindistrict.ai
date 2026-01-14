import { createContext, useContext, useState } from "react";
import { Surface } from "../surface";
import "./tabs.css";

const TabsContext = createContext<{
    activeTab: string;
    setActiveTab: (tab: string) => void;
}>({
    activeTab: "",
    setActiveTab: () => {},
});

export function useTabs() {
    return useContext(TabsContext);
}

export type TabsProps = {
    value: string;
    children?: React.ReactNode;
}

export function Tabs({ value, children }: TabsProps) {
    const [activeTab, setActiveTab] = useState(value);
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="tabs">
                {children}
            </div>
        </TabsContext.Provider>
    );
}

export type TabsListProps = {
    orientation?: "horizontal" | "vertical";
    children?: React.ReactElement<TabsTriggerProps> | React.ReactElement<TabsTriggerProps>[];
}

export function TabsList({orientation = "horizontal", children }: TabsListProps) {

    return (
        <Surface
        role="tablist"
        className="tabs-list"
        aria-orientation={orientation}>
            {children}
        </Surface>
    );
}

export type TabsTriggerProps = {
    value: string;
    children?: React.ReactNode;
}

export function TabsTrigger({ value, children }: TabsTriggerProps) {
    const { activeTab, setActiveTab } = useTabs();
    return (
        <button
        role="tab"
        id={`tabs-trigger-${value}`}
        className="tabs-trigger"
        aria-selected={activeTab === value}
        aria-controls={`tabs-content-${value}`} 
        onClick={() => setActiveTab(value)}>
            {children}
        </button>
    );
}

export type TabsContentProps = {
    value: string;
    children?: React.ReactNode;
}

export function TabsContent({ value, children }: TabsContentProps) {
    const { activeTab } = useTabs();
    return activeTab === value ? (
        <div 
        role="tabpanel"
        id={`tabs-content-${value}`}
        className="tabs-content"
        aria-labelledby={`tabs-trigger-${value}`}>
            {children}
        </div>
    ) : null;
}