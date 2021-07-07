import "./Pokecard.css";

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

const Pokecard = (props) => {
  let image = `${POKE_API}/${props.id}.png`;
  return <div className="Pokecard">
    <div className="Pokecard-name">{props.name}</div>
    <div className="Pokecard-image"><img src={image} alt="{props.name}" /></div>
    <div className="Pokecard-type">Type: {props.type}</div>
    <div className="Pokecard-exp">EXP: {props.exp}</div>
  </div>
}

export default Pokecard;