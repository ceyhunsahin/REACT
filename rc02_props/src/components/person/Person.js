//import img from '../img_aile.jpg';

const Person = (props) => {
    console.log(props.tel);
    return (
        <div>
            <div>
                 <img src = {props.img} alt = "resim"/>
            </div>
            <p>{props.tel}</p>
            <p> {props.name + '.'+ props.surname+'@clarusway.com'}</p>
        </div>
    )
}

export default Person;