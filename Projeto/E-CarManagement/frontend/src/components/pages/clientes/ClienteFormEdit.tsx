export default function(){
    return (
        <form>
            <h3>Dados do Cliente</h3>
            <label>Nome</label>
            <input type="text" placeholder="Insira o Nome"/>
            <label>Sobrenome</label>
            <input type="text" placeholder="Insira o Sobrenome"/>
            <label>CPF</label>
            <input type="text" placeholder="Insira o CPF"/>
            
            <h3>Endereço do Cliente</h3>
            <label>Rua</label>
            <input type="text" name="rua" placeholder="Insira a Rua"/>
            <label>Número</label>
            <input type="text" name="numero" placeholder="Insira o Número"/>
            <label>Complemento</label>
            <input type="text" name="complemento" placeholder="Insira o Complemento"/>
            <label>CEP</label>
            <input type="text" name="cep" placeholder="Insira o CEP"/>
            <label>Cidade</label>
            <input type="text" name="cidade" placeholder="Insira a Cidade"/>
            
        </form>
    )
}