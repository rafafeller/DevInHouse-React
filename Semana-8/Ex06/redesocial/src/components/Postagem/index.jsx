const Postagem = ({
    photo,
    name,
    icon,
    description,
    photo2,
    icon2,
    comments,
    share,
    like
}) => {

    return (
        <div className="container">
            <div className="cabecalho">
                <div>
                    <img className="id_imagem" alt="" src={photo} />
                </div>

                <div className="id_nome">
                    <h3>{name}</h3>
                </div>

                <div className="id_icon">
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div className="id_description">
                <p>{description}</p>
            </div>

            <div >
                <img className="id_imagem2" alt="" src={photo2} />
            </div>
            <div className="bottom">
                <div className="id_icon2">
                    <i class="far fa-heart"></i>
                </div>

                <div className="id_comments">
                    <p>{comments}</p>
                </div>

                <div className="id_share">
                    <p>{share}</p>
                </div>
            </div>

            <div className="id_like">
                <p>{like}</p>
            </div>

        </div>
    )
}
export default Postagem;