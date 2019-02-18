import React from 'react'
import Course from './Course'

//CoursesList es un componente sin estado por lo que no necesita crear una clase
//Sino, una funcion o guardar en una const una arrowfunction
//CourseList va a recibir las propiedades ("props") del padre ("App")
const  CoursesList = (props) => (
    //Este componente no necesita constructor porque no va a tener estados
    //<Course />  es un nieto de App en el flujo de los componentes
    <div>
        <form onSubmit={props.onAddCourse}>
            <input type="text" placeholder="Nombre del curso" name="name" required/>
            <input type="text" placeholder="Profesor" name="teacher" required/>
            <input type="hidden" name="id" value={Math.floor(Math.random()*100)} />
            <input type="submit" value="Guardar" />
        </form>
        <ul>
            {
                props.courses.map(course => (
                    <Course
                        key={course.id}
                        id={course.id}
                        name={course.name}
                        teacher={course.teacher}
                     /> 
                ))
            }
        </ul>
    </div>

)
        
//Nota: Las constantes no se exportan con default porque tienden a dar error
export default CoursesList