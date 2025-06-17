function handleSubmint(event){
    event.preventDefault();
    console.log("form was subminted")
}

export default function Form(){
    return (
        <form action="">
            <input placeholder="write placholder" />
            <button onClick={handleSubmint}>submint</button>
        </form>
    )
}