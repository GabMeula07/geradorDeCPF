import GeraCPF from './modules/geraCPF'
import './assets/css/style.css';

(function (){
    const gera = new GeraCPF();
    const resultado = document.querySelector('.cpf-gerado');
    resultado.innerHTML = gera.geraNovoCpf();
} )();