import { type FC, useState} from "react"
import styleForm from './index.module.css'
import {Input} from "../../shared/ui/Input/Input"
import { LogInIcon } from "lucide-react"
import { Button } from "../../shared/ui/button/Button"

const SignInForm: FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")



  return (

            
			<form className={styleForm.formSignIn} action="http://localhost:3001/api/addPosts">
				<div className={styleForm.cntLogo}>
					<div style={{marginLeft: "30%"}} className={styleForm.logo}>
						<LogInIcon size={35} color="white"/>
						
					</div>
					<h1 style={{marginLeft: "30%"}}>NlogN</h1>
					<p style={{marginTop: "5px"}}>Войти в личный кабинет</p>
				</div>
				<br />
				<Input typeInp="email" value={email} setValue={setEmail} name="email" classNameInp={styleForm.InputDiscription}  placeholderInput="Введите ваш E-mail"/><br />
				<Input typeInp="password" value={password} setValue={setPassword} name="password" classNameInp={styleForm.InputDiscription} placeholderInput="Пароль"/> <br />
				<Button typeBtn="submit">Войти</Button>
				
			</form>
      

  )
}

export default SignInForm