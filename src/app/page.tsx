import { redirect } from 'next/navigation'

export default async function Profile() {
    redirect('/timetable_elements/teachers')
  // ...
}
