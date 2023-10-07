import React from "react";

//Criar um db para fazer o map e otimizar, aprimorar
const ColorFilterComponent = () => {
  return (
    <div className="color-filter">
      <h1>CORES</h1>
      <div className="checkbox-colors">
        <div>
          <input type="checkbox" id="amarelo" name="amarelo" />
          <label htmlFor="amarelo">Amarelo</label>
        </div>
        <div>
          <input type="checkbox" id="azul" name="azul" />
          <label htmlFor="azul">Azul</label>
        </div>
        <div>
          <input type="checkbox" id="branco" name="branco" />
          <label htmlFor="branco">Branco</label>
        </div>
        <div>
          <input type="checkbox" id="cinza" name="cinza" />
          <label htmlFor="cinza">Cinza</label>
        </div>
        <div>
          <input type="checkbox" id="laranja" name="laranja" />
          <label htmlFor="laranja">Laranja</label>
        </div>
        <div>
          <input type="checkbox" id="verde" name="verde" />
          <label htmlFor="verde">Verde</label>
        </div>
        <div>
          <input type="checkbox" id="vermelho" name="vermelho" />
          <label htmlFor="vermelho">Vermelho</label>
        </div>
        <div>
          <input type="checkbox" id="preto" name="preto" />
          <label htmlFor="preto">Preto</label>
        </div>
        <div>
          <input type="checkbox" id="rosa" name="rosa" />
          <label htmlFor="rosa">Rosa</label>
        </div>
        <div>
          <input type="checkbox" id="vinho" name="vinho" />
          <label htmlFor="vinho">Vinho</label>
        </div>
      </div>
    </div>
  );
};

export default ColorFilterComponent;
