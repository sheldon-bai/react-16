import React from 'react'
import ReactDOM from 'react-dom'
import Student from './components/Student'
import Students from './components/Students'

const student1 = {
  id: 1,
  name: 'Xudong',
  email: 'sheldon.bai1989@gmail.com',
  gender: 'Male',
}

const student2 = {
  id: 2,
  name: 'Bella',
  email: 'Bellayang3600@gmail.com',
  gender: 'Female',
}
const stus = [
  student1,
  student2
]

console.log(stus)

function App() {
  return (
    <>
      <Students stus={stus}></Students>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))