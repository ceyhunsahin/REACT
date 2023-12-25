

const Message = (props) => {
    return (
        <div>
        <h1> hello my name is { `${props.name} ${props.surname ? props.surname : "belirtilmemis"}`}</h1>

        </div>
    )
};

export default Message;