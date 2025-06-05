export default function MsgBox({username,textColor}){
    let style={color:textColor}
    return(
        <h1 style={style}>Hello {username}</h1>
    )
}