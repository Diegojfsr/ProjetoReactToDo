const RenderCond = ({x, y}) => {
    // const x =6;
    
    return (
        <div>
            {x > 5 && <p> X e maior que 5.</p>} 
            {x >5 ? <p> X e um numero alto</p> : <p> X e um numero baixo</p>}
            <p>O valor de Y e: {y}</p>
        </div>
    );
};
export default RenderCond
