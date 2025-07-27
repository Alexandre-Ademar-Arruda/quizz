// Função para criar elementos HTML dinamicamente

export function criarElemento(tipo,classe,conteudo,atributos={}) {

    const elemento = document.createElement(tipo); // Cria elemento do tipo passado

    if (classe) elemento.className = classe; // Define a classe CSS se existir

    if (conteudo) {

        if (tipo === 'input' || tipo === 'textarea') {

            elemento.value = conteudo;

        } else {

            elemento.textContent = conteudo; // Caso contrário, texto interno do elemento

        }

    }
    
    for (let chave in atributos) {

        elemento.setAttribute(chave, atributos[chave]);

    }

    return elemento; // Retorna o elemento criado

}
