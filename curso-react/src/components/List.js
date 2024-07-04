
const List = () => {
    const items = [
        {
            id:1,
            name:"Diego"
            }, {
            id:2,
            name:"Lara"
            }, {
            id:3,
            name:"Sarah"
        }]
    return <div>
            {items.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}
        </div>;
    };
    export default List;

