export interface InputPropsType {
    width: number,
    height: number;
    rounded: number, 
    backgroundColor: string, 
    textColor: string; 
    placeholder: string,
    type: 'button' | 'checkbox' | 'email' | 'password' | 'search' | 'submit' | 'text';
}