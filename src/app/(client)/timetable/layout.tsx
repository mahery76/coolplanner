import Link from "next/link"

export default function timetableLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
       <div>
          <Link href="/timetable/student">Student</Link>
          <Link href="/timetable/teacher">Teacher</Link>
        </div>
   
        {children}
      </section>
    )
  }

  