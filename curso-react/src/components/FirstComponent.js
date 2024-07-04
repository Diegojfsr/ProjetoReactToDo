
import AnotherComponent from "./AnotherComponent"

function FirstComponent(){
    // Algun Comentario
    const nome="Diego"
    return(
        <div className="firstcomponent">
            <p>Primeiro Componente </p>
            {/* comentario no XJS */}

            {2+2}

            <p>Nome: {nome}</p>

            <AnotherComponent />

        </div>
    )
    

}

export default FirstComponent
