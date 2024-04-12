import Link from "next/link"

const LinkItem = ({linkPath, linkTitle}: {linkPath: string, linkTitle: string}) => {
  return (
    <Link href={linkPath} className="bg-blue-100 flex items-center justify-center p-2 rounded-md whitespace-nowrap">
      {linkTitle}
    </Link>
  )
}

export default function timetableLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="flex gap-x-5 mt-5 overflow-x-auto  mb-4">
        <LinkItem linkPath="/timetable_elements/majors" linkTitle="Filières"/>
        <LinkItem linkPath="/timetable_elements/classes" linkTitle="Classes"/>
        <LinkItem linkPath="/timetable_elements/courses" linkTitle="Matières"/>
        <LinkItem linkPath="/timetable_elements/teachers" linkTitle="Enseignants"/>
        <LinkItem linkPath="/timetable_elements/rooms" linkTitle="Salles"/>
        <LinkItem linkPath="/timetable_elements/timeslots" linkTitle="Créneaux horaires"/>
        <LinkItem linkPath="/timetable_elements/core_classes" linkTitle="Troncs communs"/>
      </div>

      {children}
    </section>
  )
}
