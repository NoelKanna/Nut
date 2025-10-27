export default function LocalGifGallery() {
  const gifs = [{ name: ".gif" }, { name: "happy.gif" }, { name: "sad.gif" }];

  return (
    <div style={{ padding: 20 }}>
      <h2>🎞 Local GIF Gallery</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {gifs.map((gif, i) => (
          <div key={i}>
            <img
              src={`/gifs/${gif.name}`}
              alt={gif.name}
              width={150}
              style={{ borderRadius: 10, boxShadow: "0 0 5px #aaa" }}
            />
            <p style={{ textAlign: "center" }}>{gif.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
