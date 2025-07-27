
import { criarElemento } from "./criarElemento";

export function terceirizando (telaInicial) {

            const titulo = criarElemento('h1','titulo','I<iss ssi>I');
            telaInicial.appendChild(titulo);
                    
            // Cria container para as perguntas e respostas e adiciona à tela inicial
            const divQuestions = criarElemento('div','questions-container','');
            telaInicial.appendChild(divQuestions);
            
            // Cria span para exibir o texto da pergunta
            const spanQuestion = criarElemento('span','question','');
            divQuestions.appendChild(spanQuestion);
            
            // Cria container para as alternativas (botões) e adiciona dentro de divQuestions
            const divAnswers = criarElemento('div','answers-container','');
            divQuestions.appendChild(divAnswers);

            return {divQuestions, spanQuestion, divAnswers} ;

}