export const Cards = ({name, Email, style}) => {
  return (
    <div>
      <li style={{listStyle: style}}>{name} </li>
      <li style={{listStyle: style}}> {Email} </li>
    </div>
  );
};
