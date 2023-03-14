
const Header = (props) => {
  console.log(props)
  return (
    <h1>Welcome to the {props.courseName}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Sillabus:</h3>
      <p>{props.sillabusTopics[0]}</p>
      <p>{props.sillabusTopics[1]}</p>
      <p>{props.sillabusTopics[2]}</p>
      <p>{props.sillabusTopics[3]}</p>
      <p>{props.sillabusTopics[4]}</p>
      <p>{props.sillabusTopics[5]}</p>
      <p>{props.sillabusTopics[6]}</p>
      <p>{props.sillabusTopics[7]}</p>
      <p>{props.sillabusTopics[8]}</p>
      <p>{props.sillabusTopics[9]}</p>
      <p>{props.sillabusTopics[10]}</p>
      <p>{props.sillabusTopics[11]}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div><p><b>Total number of topics: {props.topicsTotalCount}</b></p></div>
    
  )
}

const App = () => {

  const month2 = "March"
  
  const sillabusTopics = [
    'create-react-app',
    'Components',
    'Rendering',
    'Hooks',
    'Routers',
    'State management',
    'Styling',
    'API calls',
    'Testing',
    'Frameworks',
    'Forms',
    'Mobile',
  ]
  
  return (
    <div>
      <Header courseName='React with Francesca'/>
      <Content sillabusTopics={sillabusTopics}/>
      <Total topicsTotalCount={sillabusTopics.length} />

      {/* <Hello name='George' company='Google'/>
      <Hello name='Igor' company='Yahoo' month ={month2}/> */}
    </div>
  )
  }
  
  export default App;

// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>Hello {props.name}</p>
//       <p>Company is {props.company}</p>
//       <p>Today is {props.month}</p>
//     </div>
//   )
// }

// const Name = () => {
//   return (
//     <div>
//       <p>Gary111</p>
//     </div>
//   )
// }


