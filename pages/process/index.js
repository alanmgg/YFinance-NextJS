import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LayoutContext } from "./../../layout/context/layoutcontext";

export default function Process() {
  const { onMenuToggleProcess } = useContext(LayoutContext);
  const router = useRouter();
  const { symbol, name, menu } = router.query;

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    if (menu === "yes") {
      onMenuToggleProcess(true);
    }

    // Screen resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="grid">
        <div
          className={
            windowSize.width > 590 ? "col-3 xl:col-3" : "col-12 xl:col-12"
          }
        >
          <Link
            href={{
              pathname: "/process/eda",
              query: { symbol: symbol, name: name, menu: "no" }
            }}
          >
            <div
              className="card"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                height: "15vh"
              }}
            >
              <h5>Análisis Exploratorio de Datos</h5>
            </div>
          </Link>
        </div>

        <div
          className={
            windowSize.width > 590 ? "col-3 xl:col-3" : "col-12 xl:col-12"
          }
        >
          <Link
            href={{
              pathname: "/process/acp",
              query: { symbol: symbol, name: name, menu: "no" }
            }}
          >
            <div
              className="card"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                height: "15vh"
              }}
            >
              <h5>Análisis de Componentes Principales</h5>
            </div>
          </Link>
        </div>

        <div
          className={
            windowSize.width > 590 ? "col-3 xl:col-3" : "col-12 xl:col-12"
          }
        >
          <Link
            href={{
              pathname: "/process/forecastad",
              query: { symbol: symbol, name: name, menu: "no" }
            }}
          >
            <div
              className="card"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                height: "15vh"
              }}
            >
              <h5>Pronóstico con árboles de decisión</h5>
            </div>
          </Link>
        </div>

        <div
          className={
            windowSize.width > 590 ? "col-3 xl:col-3" : "col-12 xl:col-12"
          }
        >
          <div
            className="card"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              height: "15vh"
            }}
          >
            <h5>Pronóstico con bosques aleatorios</h5>
          </div>
        </div>
      </div>

      <div className="grid pt-2">
        <div className="col-12 xl:col-12">
          <div className="card">
            <h5>¿Qué es el análisis exploratorio de datos?</h5>
            <p style={{ textAlign: "justify" }}>
              Es una técnica utilizada en la minería de datos que consiste en
              explorar y analizar los datos con el objetivo de comprender su
              naturaleza y detectar patrones, relaciones y anomalías en los
              datos. Es una fase importante en el proceso de minería de datos,
              ya que permite identificar problemas en los datos, como valores
              faltantes, valores atípicos o datos incorrectos.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src="https://www.masterdatascienceucm.com/wp-content/uploads/2020/08/proceso-mineria-de-datos.png.webp"
                alt="process-eda"
                width={windowSize.width > 590 ? "500" : "250"}
              />
            </div>
            <br />

            <h5>¿Qué es el análisis de componentes principales?</h5>
            <p style={{ textAlign: "justify" }}>
              Es una técnica de minería de datos utilizada para reducir la
              dimensionalidad de un conjunto de datos manteniendo la mayor
              cantidad posible de información. En términos simples, el PCA busca
              transformar un conjunto de datos con muchas variables (o
              dimensiones) en un conjunto de datos con menos variables (o
              dimensiones) sin perder mucha información. Esto se logra mediante
              la identificación de las componentes principales que explican la
              mayor cantidad de variabilidad en los datos.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src="https://devopedia.org/images/article/139/9153.1547301619.png"
                alt="process-acp"
                width={windowSize.width > 590 ? "500" : "250"}
              />
            </div>
            <br />

            <h5>¿Qué es el pronóstico con árboles de decisión?</h5>
            <p style={{ textAlign: "justify" }}>
              El pronóstico con árboles de decisión es una técnica utilizada en
              el campo del aprendizaje automático y la inteligencia artificial
              para predecir o clasificar valores futuros en función de datos
              históricos y características relevantes. Un árbol de decisión es
              una estructura de datos en forma de árbol en la que cada nodo
              interno representa una característica o atributo, cada rama
              representa una posible respuesta o valor para esa característica,
              y cada hoja representa una predicción o clasificación final.
            </p>
            <p style={{ textAlign: "justify" }}>
              En el contexto del pronóstico, se utiliza un árbol de decisión
              para realizar predicciones o clasificaciones sobre un conjunto de
              datos dado. Para construir un árbol de decisión, se utiliza un
              algoritmo que divide iterativamente los datos en función de las
              características más relevantes para realizar la predicción. Estas
              divisiones se basan en criterios como la ganancia de información o
              la reducción de la impureza en los datos.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <img
                src="https://fhernanb.github.io/libro_mod_pred/images/fit_unfit.png"
                alt="process-acp"
                width={windowSize.width > 590 ? "500" : "250"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
