import { useCallback, useState } from "react";
import Lightbox from "../components/Lightbox.jsx";
import { albums } from "../data/gallery.js";
import { sentence } from "../utils/text.js";

export default function Gallery() {
  const [albumId, setAlbumId] = useState(albums[0].id);
  const [index, setIndex] = useState(null);
  const close = useCallback(() => setIndex(null), []);
  const album = albums.find((a) => a.id === albumId);
  const photos = album.photos;

  return (
    <div className="section">
      <div className="wrap">
        <header className="page-head">
          <h1>The camera does not lie.</h1>
          <p className="lede">
            Every workshop, hackathon demo and committee kickoff gets documented. Open any shot to browse
            the album with the arrow keys.
          </p>
        </header>

        {albums.length > 1 && (
          <div className="tabs" role="group" aria-label="Albums">
            {albums.map((a) => (
              <button key={a.id} type="button" aria-pressed={a.id === albumId} onClick={() => setAlbumId(a.id)}>
                {a.title}
              </button>
            ))}
          </div>
        )}

        <div className="album-head">
          <h2>{album.title}</h2>
          <p>
            {sentence(album.meta)}. {sentence(album.count)}.
          </p>
        </div>

        <ul className="gallery-grid" role="list" key={albumId}>
          {photos.map((p, i) => (
            <li key={p.title}>
              <button
                type="button"
                className={`tile${p.src ? "" : " tile--empty"}`}
                onClick={() => setIndex(i)}
                aria-label={`Open photo ${i + 1}: ${p.title}`}
              >
                {p.src && <img src={p.src} alt="" loading="lazy" />}
                <span className="tile-no">{String(i + 1).padStart(2, "0")}</span>
                <span className="tile-cap">
                  <strong>{p.title}</strong>
                  {p.src ? p.caption : "Photo to come"}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox photos={photos} index={index} onClose={close} onChange={setIndex} />
    </div>
  );
}
