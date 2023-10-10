import React, { useState } from "react";
import {
  colors,
  priceOptions,
  sizeFilters,
} from "../../../utils/FiltersArrays";
import ColorOption from "../../AsideFilters/ColorFilter/ColorOption";
import SizeOption from "../../AsideFilters/SizeFilter/SizeOption";
import { Sizes } from "../../../ts/Sizes";
import PriceOption from "../../AsideFilters/PriceFilter/PriceOption";
import { useProducts } from "../../../hooks/useProducts";
import { Prices } from "../../../ts/Prices";
import { updateColors } from "../../../utils/OptionFilters";

type FiltersDrawerProps = {
  closeDrawer: () => void;
  isOpen: boolean;
};

const FiltersDrawer = ({ closeDrawer, isOpen }: FiltersDrawerProps) => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<Sizes>("none");
  const [selectedPrice, setSelectedPrice] = useState<Prices>("none");
  const [sizeChecked, setSizeChecked] = useState(-1);
  const [priceChecked, setPriceChecked] = useState(-1);
  const [openColorsOptions, setOpenColorsOptions] = useState(false);
  const [openSizeOptions, setOpenSizeOptions] = useState(false);
  const [openPriceOptions, setOpenPriceOptions] = useState(false);
  //Utilizado para re-renderizar os colors-input e desmarcá-los
  const [resetKey, setResetKey] = useState(0);

  const { optionFilter, updateProducts } = useProducts();

  const onApplyFilters = () => {
    updateProducts(optionFilter, selectedColors, selectedSize, selectedPrice);
    closeDrawer();
  };

  const onResetFilters = () => {
    setSelectedPrice("none");
    setSelectedSize("none");
    setSelectedColors([]);
    setSizeChecked(-1);
    setPriceChecked(-1);
    updateProducts(optionFilter, [], "none", "none");
    setResetKey((prevKey) => prevKey + 1);
  };

  const applyColorsHandler = (color: string) => {
    const newColors = updateColors(color, selectedColors);
    setSelectedColors(newColors);
  };

  const applySizeHandler = (id: number, size: Sizes) => {
    if (sizeChecked !== id) {
      setSizeChecked(id);
      setSelectedSize(size);
    } else {
      setSizeChecked(-1);
      setSelectedSize("none");
    }
  };

  const applyPriceHandler = (id: number, price: Prices) => {
    if (priceChecked !== id) {
      setPriceChecked(id);
      setSelectedPrice(price);
    } else {
      setPriceChecked(-1);
      setSelectedPrice("none");
    }
  };

  return (
    <div className={`${isOpen ? "filters-drawer" : "is-not-open"}`}>
      <header className="drawer-header">
        <h2>FILTRAR</h2>
        <button onClick={closeDrawer} className="close-btn">
          <img src="../../../img/close_btn.png" alt="close button" />
        </button>
      </header>
      <section className="drawer-section">
        <button
          className="filter-btn"
          onClick={() => setOpenColorsOptions(!openColorsOptions)}
        >
          CORES{" "}
          <span>
            <img src="../../../img/Vector2.png" />
          </span>
        </button>
        <div className={openColorsOptions ? "colors-container" : "is-not-open"}>
          {colors.map((color, id) => {
            return (
              <ColorOption
                color={color}
                key={`color-${color}-${id}-${resetKey}`}
                setColor={() => applyColorsHandler(color)}
              />
            );
          })}
        </div>
      </section>
      <section className="drawer-section">
        <button
          className="filter-btn"
          onClick={() => setOpenSizeOptions(!openSizeOptions)}
        >
          TAMANHOS{" "}
          <span>
            <img src="../../../img/Vector2.png" />
          </span>
        </button>
        <div className={openSizeOptions ? "sizes-container" : "is-not-open"}>
          {sizeFilters.map((sizeFilter, id) => {
            return (
              <SizeOption
                key={`size-${id}`}
                size={sizeFilter as Sizes}
                setChecked={() => applySizeHandler(id, sizeFilter as Sizes)} //onClickHandler(id, sizeFilter as Sizes)}
                isChecked={id === sizeChecked} //checked}
              />
            );
          })}
        </div>
      </section>
      <section className="drawer-section">
        <button
          className="filter-btn"
          onClick={() => setOpenPriceOptions(!openPriceOptions)}
        >
          FAIXA DE PREÇO{" "}
          <span>
            <img src="../../../img/Vector2.png" />
          </span>
        </button>
        <div className={openPriceOptions ? "prices-container" : "is-not-open"}>
          {priceOptions.map((option, id) => {
            return (
              <PriceOption
                key={`price-${option.id}-${id}}`}
                id={`id-${id}`}
                legend={option.legend}
                isChecked={id === priceChecked} //checked}
                setChecked={() => applyPriceHandler(id, option.limit)} // onClickHandler(id, option.limit)}
                value={option.legend}
              />
            );
          })}
        </div>
      </section>
      {openColorsOptions || openPriceOptions || openSizeOptions ? (
        <div className="drawer-application">
          <button className="apply" onClick={() => onApplyFilters()}>
            APLICAR
          </button>
          <button className="reset" onClick={() => onResetFilters()}>
            LIMPAR
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FiltersDrawer;
