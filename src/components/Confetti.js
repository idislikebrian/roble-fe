import React, {
    createContext,
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
  } from "react";
  import confetti from "canvas-confetti";
  import styles from "./Confetti.module.css";
    
  const ConfettiContext = createContext({ fire: () => {} });
  
  const Confetti = forwardRef(function Confetti(props, ref) {
    const {
      options,
      globalOptions = { resize: true, useWorker: true },
      manualstart = false,
      children,
      ...rest
    } = props;
  
    const instanceRef = useRef(null); 
  
    const canvasRef = useCallback(
      (node) => {
        if (node !== null) {
          if (instanceRef.current) return;
          instanceRef.current = confetti.create(node, {
            ...globalOptions,
            resize: true,
          });
        } else {
          if (instanceRef.current) {
            instanceRef.current.reset();
            instanceRef.current = null;
          }
        }
      },
      [globalOptions]
    );
  
    const fire = useCallback(
      (opts = {}) => {
        instanceRef.current?.({ ...options, ...opts });
      },
      [options]
    );
  
    const api = useMemo(
      () => ({
        fire,
      }),
      [fire]
    );
  
    useImperativeHandle(ref, () => api, [api]);
  
    useEffect(() => {
      if (!manualstart) {
        fire();
      }
    }, [manualstart, fire]);
  
    return (
      <ConfettiContext.Provider value={api}>
        <canvas ref={canvasRef} {...rest} className={styles.canvas} />
        {children}
      </ConfettiContext.Provider>
    );
  });
  
  function ConfettiButton({ options, children, ...props }) {
    const handleClick = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
  
      confetti({
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
      });
    };
  
    return (
      <button onClick={handleClick} {...props} className={styles.button}>
        {children}
      </button>
    );
  }
  
  export { Confetti, ConfettiButton };
  