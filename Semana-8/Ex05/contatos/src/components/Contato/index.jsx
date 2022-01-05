const Contato = ({
    photo,
    nome,
    description
}) => {

    return (
        <div className="contato">
            <div>
                <img src={photo}
                    alt={nome}
                    className="contato-image" />
            </div>

            <div className="description">
                <h2>{nome}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Contato;