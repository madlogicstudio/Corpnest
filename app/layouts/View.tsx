'use client'

import { Dashboard } from "./Dashboard";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";

type ViewProps = {
    activeTab: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const View = ({ activeTab, setIsOpen }: ViewProps) => {
    return (
        <div className="h-full w-full flex flex-col bg-[var(--dashboard-bg)] rounded-lg gap-2 overflow-hidden">

            <DashboardHeader setIsOpen={setIsOpen} />

            <div className="flex-1 min-h-0 w-full flex flex-row items-center gap-3 p-3 bg-[var(--dark)] rounded-lg overflow-hidden">

                {activeTab === "dashboard" && (
                    <Dashboard />
                )}

                {activeTab === "courses" && (
                    <span>Courses</span>
                )}

                {activeTab === "trainees" && (
                    <span>Trainees</span>
                )}

                {activeTab === "progress" && (
                    <span>Progress</span>
                )}

                {activeTab === "messages" && (
                    <span>Messages</span>
                )}

                {activeTab === "settings" && (
                    <span>Settings</span>
                )}

            </div>
        </div>
    )
}