import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Result from "./Result";

export default function Form() {
    const [peso, setPeso] = useState(null)
    const [altura, setAltura] = useState(null)
    const [mensagemCalculo, setMensagemCalculo] = useState(null)
    const [mensagemResultado, setMensagemResultado] = useState(null)
    const [IMC, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function calcularIMC(peso, altura) {
        let ImcResultado = ((Number.parseFloat(peso) / (Number.parseFloat(altura) * Number.parseFloat(altura))))
        setImc(ImcResultado.toFixed(1))
        resultado(ImcResultado.toFixed(1))
    }

    function resultado(IMC) {
        if (IMC < 18.5) {
            setMensagemResultado("Peso Baixo")
        } else if (IMC >= 18.5 && IMC < 24.9) {
            setMensagemResultado("Peso Normal")
        } else if (IMC >= 24.9 && IMC < 29.9) {
            setMensagemResultado("Sobrepeso")
        } else if (IMC >= 29.9 && IMC < 34.9) {
            setMensagemResultado("Obesidade Grau Ⅰ")
        } else if (IMC >= 34.9 && IMC < 39.9) {
            setMensagemResultado("Obesidade Severa Grau Ⅱ") 
        } else {
            setMensagemResultado("Obesidade Mórbida Grau Ⅲ")
        }
    }

    function validarImc() {
        if (peso != null && altura != null) {
            let formatarPeso = peso.replace(",", ".")
            let formatarAltura = altura.replace(",", ".")    
       
            if (formatarPeso > 0 && formatarAltura > 0) {
                calcularIMC(formatarPeso, formatarAltura)
                setPeso(null)
                setAltura(null)
                setMensagemCalculo(null)
                setTextButton("Calcular Novamente")
            } else {
                setMensagemCalculo("Valor Inválido!")
                setPeso(null)
                setAltura(null)
                setTextButton("Calcular")
            }
        } else {
            setMensagemCalculo("Preencha os campos obrigatórios!")
            setImc(null)
        }
    }

    return (
        <View style={styles.form}>
            {IMC == null ?
                <View>
                    
                    {mensagemCalculo != null && (
                        <Text style={styles.alerta}>{mensagemCalculo}</Text>
                    )}

                    <Text style={styles.label}>Digite sua idade</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                    
                    
                    />
                    <Text style={styles.label}>Digite sua altura</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={altura}
                        onChangeText={setAltura}
                    />

                    <Text style={styles.label}>Digite seu peso</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={peso}
                        onChangeText={setPeso}
                    />

                    <TouchableOpacity onPress={() => validarImc()}>
                        <Text style={styles.buttom}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                :
                <View>
                    <Result IMC={IMC} mensagemResultado={mensagemResultado} />
                    <TouchableOpacity onPress={() => validarImc()}>
                        <Text style={styles.buttom}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}