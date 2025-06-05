function Cards({ title, desc, price, idx }) {
    const oldPrice = ["12.500", "11,500", "30000.8", "5600"];
    const newPrice = ["11.500", "9,500", "2500.8", "2600"];
  
    const oldstyle = {
      textDecoration: "line-through"
    };
  

    const styles = {
        fontWeight:"bold",
        backgroundColor:"#e0c367",
        height:"50px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
      };


    return (
      <div className="cardAll">
        <h3>{title}</h3>
        <h4>{desc}</h4>
        <p style={oldstyle}>{oldPrice[idx]}</p>
        <p style={styles}>{newPrice[idx]}</p>
      </div>
    );
  }
  
export default Cards;