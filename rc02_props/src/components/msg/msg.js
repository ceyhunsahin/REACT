

const Message = ({name, surname}) => {
    return (
        <div style = {{"display" : "flex", "alignItems" : "center", "margin": "10px"}}>
        <p> hello my name is { `${name} ${surname ? surname : "belirtilmemis"}`}</p>

        </div>
    )
};

export default Message;