'use client'

import { DashboardCard } from "@/components/dashboard/DashboardCard"
import { CourseComplition } from "@/components/dashboard/CourseComplition"
import { RecentActivity } from "@/components/dashboard/RecentActivity"
import { CourseOverview } from "@/components/dashboard/CourseOverview"

export const Dashboard = () => {
    return (
        <div className="w-full h-full min-h-0 flex flex-col gap-3">

            <div className="w-full sm:flex hidden sm:flex-row flex-col items-center justify-center gap-3">
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
            </div>

            <div className="w-full flex sm:hidden flex-row items-center justify-center gap-3">
                <DashboardCard />
                <DashboardCard />
            </div>
            <div className="w-full flex sm:hidden flex-row items-center justify-center gap-3">
                <DashboardCard />
                <DashboardCard />
            </div>

            <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-3">
                <CourseComplition />
                <RecentActivity />
            </div>

            <div className="w-full flex flex-row items-center justify-center gap-3 flex-1 min-h-0">
                <CourseOverview />
            </div>

        </div>
    )
}