import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const ToastContext = createContext(() => {});

export function ToastProvider({ children }) {
  const [items, setItems] = useState([]);
  const counter = useRef(0);
  const timers = useRef(new Set());

  const show = useCallback((message) => {
    const id = ++counter.current;
    setItems((list) => [...list.slice(-2), { id, message }]);
    const t = setTimeout(() => {
      setItems((list) => list.filter((item) => item.id !== id));
      timers.current.delete(t);
    }, 3400);
    timers.current.add(t);
  }, []);

  useEffect(() => {
    const active = timers.current;
    return () => active.forEach(clearTimeout);
  }, []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div className="toasts" role="status" aria-live="polite">
        {items.map((item) => (
          <p key={item.id} className="toast">
            {item.message}
          </p>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
