const Card = ({ src, Full_name, proffesion, info, Fclogo, TwitterLogo, InstaLogo  }) => {
  return (
    <div className="Card_contianer">
      <div className="Card_info">
        <img src={src} style={{ width: 100, height: 100, borderRadius: 100 }} />
        <h1> {Full_name} </h1>
        <span>{proffesion}</span>
        <hr />
        <p>{info}</p>
      </div>

      <div className="Logocontainer">
        <img src={Fclogo} style={{width: 35, height:35}} />
        <img src={TwitterLogo} style={{width: 35, height:35}} />
        <img src={InstaLogo} style={{width: 35, height:35}}/>
      </div>
    </div>
  );
};

export default Card;
