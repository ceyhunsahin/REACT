import './style.css';

const Person = (props) => {
    console.log(props.img);
    return (
        <div className="card">
            <div className="card-img">
                 <img src = {props.img} alt = "resim" style ={{"width": "300px", "height": "200px"}}/>
            </div>
            <div>
             
                <p> {props.tel ? props.tel : "tel yok"}</p>
                <p> {`${props.name }.${ props?.surname  ?? "belirtilmemis"}@clarusway.com`}</p>
            </div>
        </div>
    )
}

export default Person;