import React  from 'react'

//Course un componente sin estado por lo que no necesita crear una clase
//Sino, una funcion o guardar en una const una arrowfunction
//Course va a recibir las propiedades ("props") del padre ("App")
const Course = (props) => (
    <li>{props.id} - {props.name} - {props.teacher}</li>
)

export default Course