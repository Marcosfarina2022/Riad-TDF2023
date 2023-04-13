import './ComponentePadre.css';

function ComponentePadre({children}){
    return (
        <div className='componentePadre'>
            <h2>Estos son mis Componentes</h2>
            {children}
        </div>
    )
}
export default ComponentePadre;