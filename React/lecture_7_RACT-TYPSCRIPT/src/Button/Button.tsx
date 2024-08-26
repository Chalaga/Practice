import { ButtonPropsType } from "../Types/Common"

const Button = ({width, height, text, backdraoundcolor, textcolor, Onclick }:ButtonPropsType) => {
    return (
        <button style={{width: width, height:height, backgroundColor: backdraoundcolor, color: textcolor,}} onClick={Onclick}>{text}</button>
    )
}

export default Button
