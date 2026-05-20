// Aguarda o evento de "submit" do formulário com o id "cadastroForm"
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    
    // 1. Impede o comportamento padrão de recarregar a página
    event.preventDefault(); 
    
    // 2. Coleta os valores dos campos do formulário
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userCPF = document.getElementById('userCPF').value; // Campo de CPF adicionado
    const vehicleModel = document.getElementById('vehicleModel').value;
    const vehicleType = document.getElementById('vehicleType').value;
    const vehicleYear = document.getElementById('vehicleYear').value;

    // 3. Seleciona o container onde a resposta será exibida
    const responseContainer = document.getElementById('responseContainer');

    // 4. Cria o HTML da mensagem de sucesso com os dados coletados
    const responseHTML = `
        <div class="success-message">
            <h2>Cadastro Concluído com Sucesso!</h2>
            <p>Obrigado, <strong>${userName}</strong>. Seus dados foram registrados.</p>
            
            <h3>Resumo do Cadastro:</h3>
            <ul>
                <li><strong>E-mail:</strong> ${userEmail}</li>
                <li><strong>CPF:</strong> ${userCPF}</li> <!-- Dado do CPF adicionado ao resumo -->
                <li><strong>Modelo do Veículo:</strong> ${vehicleModel}</li>
                <li><strong>Tipo:</strong> ${vehicleType}</li>
                <li><strong>Ano:</strong> ${vehicleYear}</li>
            </ul>
        </div>
    `;

    // 5. Insere o HTML criado dentro do container de resposta
    responseContainer.innerHTML = responseHTML;

    // 6. Opcional: Esconde o formulário para focar na mensagem de sucesso
    document.getElementById('cadastroForm').style.display = 'none';
});