import { useState } from "react";
import { Styles } from "./styles";

export const Home = () => {

    const [altura, setAltura] = useState<number>(0);
    const [peso, setPeso] = useState<number>(0);
    const [resultado, setResultado] = useState<string>('');
    const [condition, setCondition] = useState<string>('');

    const calculate = () => {
        const imc = peso*10000/(altura*altura);
        const res = ''+ imc;
        setResultado(res)
        if(imc<18.5){
            setCondition("Abaixo do Peso")
        }
        if(18.5<=imc && imc<=24.9){
            setCondition("Peso Normal")
        }
        if(25<=imc && imc<=29.9){
            setCondition("Acima do Peso")
        }
        if(imc>=30){
            setCondition("Obesidade")
        }
    };

    return (
        <Styles>
            <div className="body">
                <div>
                    <h1>Calculadora BMI</h1>
                    <label>
                        <input type="number" 
                            name="altura" 
                            onChange={(e) => setAltura(+e.target.value)} 
                            placeholder="Insira sua altura (cm): "
                        />
                    </label>
                    <label>
                        <input type="number" 
                            name="peso" 
                            onChange={(e) => setPeso(+e.target.value)}
                            placeholder="Insira seu peso (kg): "
                        />
                    </label>
                    <button onClick={calculate}>Calcular BMI</button>
                    <div className="BMI"><h4>BMI: {resultado}</h4></div>
                    <div className="Condição"><h4>Condição: {condition}</h4></div>
                </div>
            </div>
        </Styles>
       
    );
};

export default Home
