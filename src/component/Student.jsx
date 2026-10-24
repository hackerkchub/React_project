function Student(props){
    return (
        <>
            <h2>Hello, {props.name}</h2>
            <p> Course: {props.course} </p>
            <p>Age: {props.age}</p>
        </>
    )

}
export default Student;