import React  from 'react'

//CourseAddForm un componente sin estado por lo que no necesita crear una clase
//Sino, una funcion o guardar en una const una arrowfunction
//Course va a recibir las propiedades ("props") del padre ("App")
const CourseAddForm = (props) => (

    <form onSubmit={props.onAddCourse}>
        <input type="text" placeholder="Nombre del curso" name="name" required/>
        <input type="text" placeholder="Profesor" name="teacher" required/>
        <input type="hidden" name="id" value={Math.floor(Math.random()*100)} />
        <input type="submit" value="Guardar" />
    </form>
    
)

export default CourseAddForm