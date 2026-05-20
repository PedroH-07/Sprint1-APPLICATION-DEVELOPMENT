document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    
    event.preventDefault(); 
    
    // Coleta os valores dos campos (com o novo campo CPF)
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userCPF = document.getElementById('userCPF').value; // <-- LINHA ADICIONADA
    const vehicleModel = document.getElementById('vehicleModel').value;
    const vehicleType = document.getElementById('vehicleType').value;
    const vehicleYear = document.getElementById('vehicleYear').value;

    const responseContainer = document.getElementById('responseContainer');

    // Cria o HTML da mensagem de sucesso (com o novo campo CPF)
    const responseHTML = `
        <div class="success-message">
            <h2>Cadastro Concluído com Sucesso!</h2>
            <p>Obrigado, <strong>${userName}</strong>. Seus dados foram registrados.</p>
            
            <h3>Resumo do Cadastro:</h3>
            <ul>
                <li><strong>E-mail:</strong> ${userEmail}</li>
                <li><strong>CPF:</strong> ${userCPF}</li> <!-- <-- LINHA ADICIONADA -->
                <li><strong>Modelo do Veículo:</strong> ${vehicleModel}</li>
                <li><strong>Tipo:</strong> ${vehicleType}</li>
                <li><strong>Ano:</strong> ${vehicleYear}</li>
            </ul>
        </div>
    `;

    responseContainer.innerHTML = responseHTML;

    document.getElementById('cadastroForm').style.display = 'none';
});