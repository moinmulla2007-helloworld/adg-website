import { useCallback, useEffect, useRef } from "react";
import Modal from "./Modal.jsx";

// photos: [{ title, caption, label, src? }]. A photo without `src` shows its placeholder label.
export default function Lightbox({ photos, index, onClose, onChange }) {
  const open = index !== null && photos[index] !== undefined;
  const touch = useRef(null);

  const step = useCallback(
    (d) => onChange((index + d + photos.length) % photos.length),
    [index, photos.length, onChange]
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, step]);

  const photo = open ? photos[index] : null;

  return (
    <Modal open={open} onClose={onClose} labelledBy="lb-title" size="lg">
      {photo && (
        <>
          <p className="panel-count">
            {index + 1} / {photos.length}
          </p>
          <div
            className="lb-frame"
            onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touch.current === null) return;
              const dx = e.changedTouches[0].clientX - touch.current;
              touch.current = null;
              if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            }}
          >
            {photo.src ? (
              <img src={photo.src} alt={photo.title} />
            ) : (
              <p className="lb-empty">
                <strong>{photo.pending ?? "Photo to come"}</strong>
                {photo.label}
              </p>
            )}
          </div>
          <div className="lb-foot">
            <div>
              <h2 id="lb-title">{photo.title}</h2>
              <p className="member-meta">{photo.caption}</p>
            </div>
            <div className="chip-group">
              <button type="button" className="chip" onClick={() => step(-1)}>
                Previous photo
              </button>
              <button type="button" className="chip" onClick={() => step(1)}>
                Next photo
              </button>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
}
