export const Image = ({image_url, width}) => {
  return (
    <img style={{width: width}} src={require(`../Assets/${image_url}`)}/>
  )
}
