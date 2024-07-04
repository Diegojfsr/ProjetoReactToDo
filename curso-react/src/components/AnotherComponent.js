
const AnotherComponent = () => {

    const handClick = () => {
        console.log("clickou the botton");
        }
    return (
        <div className="anothercomponent">
        <p>Segundo Componente</p>
        <button onClick={handClick}>Evento de click</button>

        <hr />
        <button onClick={() =>console.log("teste")}> Evento no elemento </button>

        </div>

        
    );
};
    
export default AnotherComponent

