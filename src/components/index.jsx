import React, { Component, PropType } from 'react'
import CourseList from './CoursesList'

class App extends Component {
    constructor(...props) {
        super(...props)

        //Objeto del estado del constructor
        this.state = {
            courses: [
                //Cada curso va a ser un objeto
                {id: 1, name: 'React desde cero', teacher: 'Jonathan Mircha'},
                {id: 2, name: 'Drupal 8 desde cero', teacher: 'Alberto Quiroga'}
            ]
        }
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    }

    //Este método tiene que recibir los parametros del formulario y cambiar el stado
    handleOnAddCourse(event) {
        alert ('Evento en react')
        event.preventDefault()
        let form = event.target,
            course = {
                id: form.id.value,
                name: form.name.value,
                teacher: form.teacher.value
        }

        //cambiamos el estado
        this.setState({
            courses: this.state.courses.concat([course])
        })
    }

    render() {
    //Importante! el método render solamente debe retornar un NODO hijo
        return(
            //Componente externo que hay que llamarlo arriba
            <CourseList courses={this.state.courses}
            onAddCourse = {this.handleOnAddCourse}
            />
        )
    }
}

//Definimos las propTypes y las defaultProp
App.propType = {}

App.defaultProps = {}

export default App