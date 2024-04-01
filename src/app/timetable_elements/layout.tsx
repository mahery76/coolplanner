import Link from "next/link"

export default function timetableLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
       <div>
          <Link href="/timetable_elements/majors">Majors</Link>
          <Link href="/timetable_elements/classes">Classes</Link>
          <Link href="/timetable_elements/courses">courses</Link>
          <Link href="/timetable_elements/teachers">teachers</Link>
          <Link href="/timetable_elements/rooms">rooms</Link>
          <Link href="/timetable_elements/timeslots">timeslots</Link>
          <Link href="/timetable_elements/core_classes">Core classes</Link>
        </div>
   
        {children}
      </section>
    )
  }
