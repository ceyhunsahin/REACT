import './style.css';

export default function ButtonCard({ ButtonClick }) {
    return (
        <button onClick={ButtonClick} className="card-button">Tıkla Beni</button>
    );
}



