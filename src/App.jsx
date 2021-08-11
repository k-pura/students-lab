import './App.css';
import { Component } from 'react';
import React from 'react';
import Student from './components/Student/Student'

class App extends Component {
  state = { 
    students: [
      {
        name: 'Cait Yomorta',
        bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
        scores:[
          {
            date: '2020-11-11',
            score: 68
          },
          {
            date: '2020-12-12',
            score: 73
          },
          {
            date: '2021-01-01',
            score: 54
          }
        ]
      },
      {
        name: 'Holly Baird',
        bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
        scores:[
          {
            date: '2020-11-11',
            score: 85
          },
          {
            date: '2020-12-12',
            score: 93
          },
          {
            date: '2021-01-01',
            score: 98
          }
        ]
      },
      {
        name: 'Wes Mungia',
        bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
        scores: [
          {
            date: '2020-11-11',
            score: 79
          },
          {
            date: '2020-12-12',
            score: 87
          },
          {
            date: '2021-01-01',
            score: 99
          }
        ]
      }
    ],
  }
  

  // WILL NOT RENDER THE MAP, SPELLING ERROR? EVERYTHING SEEMS RIGHT?
  
  render() {
    return(
      <div className="App">
      <h1>Student Results</h1>
        {this.state.students.map((student, idx) => {
          <div>
            <Student key={idx} 
            name={student.name}
            bio={student.bio}
            scores={student.scores}
            />
          </div>   
        })}
      
      </div>


    )
  }
}

export default App;