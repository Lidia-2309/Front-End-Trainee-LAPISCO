import { Styles } from "./styles";

export const Home = () => {
    return (
        <Styles>
            <div className="body">
                <div>
                    <h1>Calculadora BMI</h1>
                    <label>
                        <input type="text" name="altura" placeholder="Insira sua altura (cm): "/>
                    </label>
                    <label>
                        <input type="text" name="peso" placeholder="Insira seu peso (kg): "/>
                    </label>
                    <button>Calcular BMI</button>
                    <div className="BMI"><h4>BMI:</h4></div>
                    <div className="Condição"><h4>Condição:</h4></div>
                </div>
            </div>
        </Styles>
       
    );
};

export default Home
