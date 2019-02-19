import React, { Component, PropType } from 'react'
import CourseList from './CoursesList'
import CourseAddForm from './CourseAddForm'

class App extends Component {
    constructor(...props) {
        super(...props)

        //Objeto del estado del constructor
        this.state = { //Estado
            courses: [ //Propiedades
                //Cada curso va a ser un objeto
                {id: 1, name: 'React desde cero', teacher: 'Jonathan Mircha'},
                {id: 2, name: 'Drupal 8 desde cero', teacher: 'Alberto Quiroga'}
            ]
        }
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    }

    //Este método tiene que recibir los parametros del formulario y cambiar el stado
    handleOnAddCourse(event) {
        event.preventDefault()
        let form = event.target,
            course = {
                id: form.id.value,
                name: form.name.value,
                teacher: form.teacher.value
        }

        //cambiamos el estado. Usamos método concat() para concatenar dos arreglos
        this.setState({
            courses: this.state.courses.concat([course])
        })

        form.reset()
    }

    

    render() {
    //Importante! el método render solamente debe retornar un NODO hijo
        return(
            //Componente externo que hay que llamarlo, importarlo arriba.
            //A este CoursesList le pasamos el estado para que cargue los cursos que se han definido
            //Entonces le pasamos una prop (courses) y como valor el estado (this.state.courses)
        <div>
            <CourseAddForm onAddCourse = {this.handleOnAddCourse}/>
            <CourseList courses={this.state.courses}/>
        </div>
        )
    }
}

//Definimos las propTypes y las defaultProp
App.propType = {}

App.defaultProps = {}

export default App