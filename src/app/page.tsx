import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
          <Link href="/admin">Teacher</Link>
           <Link href="/timetable/student">Student</Link>
          <Link href="/timetable/teacher">Teacher</Link>
    </main>
  );
}
