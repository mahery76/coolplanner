"use client"
import React from 'react'

function Major() {
  const handleSubmit = async ( event:any ) => {
    event.preventDefault()
    console.log('here is the submit')
    const formData = new FormData(event.target)
    try {
      const response = await fetch('')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div>
      <div>Majors</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="major_name" id="" placeholder='major name'/>
        <input type="submit" value="Enregistrer" />
      </form>
    </div>
  )
}
export default Major;