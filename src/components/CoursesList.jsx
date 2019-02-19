import React from 'react'
import Course from './Course'
import CourseAddForm from './CourseAddForm'

//CoursesList es un componente sin estado por lo que no necesita crear una clase
//Sino, una funcion o guardar en una const una arrowfunction
//CourseList va a recibir las propiedades ("props") del padre ("App").
//Las propiedades (props) son valores inmutables que pasamos del padre al componente hijo
const  CoursesList = (props) => ( //EN arrowfunctions podemos returnar entre parentesis una expresion
    //Tampoco hace falta el return porque con los parentesis ya esta retornando la expresion
    //Este componente no necesita constructor porque no va a tener estados
    //<Course />  es un nieto de App en el flujo de los componentes
        
        <ul>
            {
                props.courses.map(course => (
                    <Course //Es un componente nieto de App
                        key={course.id} // Para poder recorrer elementos que tengan un componente en React, hay que agregarle un 
                        //ID único para poder representarlo en el DOM
                        id={course.id}
                        name={course.name}
                        teacher={course.teacher}
                     /> 
                ))
            }
        </ul>

)
        
//Nota: Las constantes no se exportan con default porque tienden a dar error
export default CoursesList