'use client'

export const CourseOverview = () => {
    return (
        <div className="w-full h-full flex flex-col border rounded-lg overflow-y-auto no-scrollbar">

            <div className="h-auto flex flex-col gap-10 p-4">
                <h2 className="text-md font-semibold">
                    Course Overview
                </h2>

                <span>Course 1</span>
                <span>Course 2</span>
                <span>Course 3</span>
                <span>Course 4</span>
                <span>Course 5</span>
                <span>Course 6</span>
                <span>Course 7</span>

            </div>

        </div>
    )
}