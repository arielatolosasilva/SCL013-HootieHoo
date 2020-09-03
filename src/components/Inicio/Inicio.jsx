import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { Animated } from "react-animated-css";
import style from "../Inicio/Inicio.module.css";
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
import couple from '../../assets/img/pareja.png'
import puma from '../../assets/img/personaje.png'

const Inicio = () => {
   const ThemeSwitcher = useThemeSwitcher();
  return (
    <Fragment>
      <div className={style.container1}>
        {ThemeSwitcher}
        <div>
          <Logo />
          <div>
            <Animated
              animationIn="zoomInDown"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div className={style.hFather}>
                <h2 className={style.hS}>Ganémosle al virus</h2>
              </div>
            </Animated>
            <div className={style.pFather}>
              <p className={style.pS}>
                Programa de capacitación y apoyo para trabajar prevención y
                autocuidado en niños y niñas durante la contingencia COVID-19
              </p>
            </div>
            <div className={style.bFather}>
              <Link to="/Adulto">
                <button title="Adulto" className={style.bInit}><img className={style.imCouple}src={couple}></img>
                  {" "}
                  Responsable del niñ@{" "}
                </button>
              </Link>
              <Link to="/Niños">
                
                <button title="Niños" className={style.bInit2} ><img className={style.imPuma} src={puma}></img>
                  {" "}
                  Soy niñ@{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Inicio;
