import { getSrcImage } from "../../../next.config.mjs";

function Layout({ children }) {
  const totalSpikes = 16;
  const radius = 120;

  const rays = Array.from({ length: totalSpikes }, (_, i) => {
    const angle = (360 / totalSpikes) * i;
    return (
      <div
        key={i}
        className="ray"
        style={{
          position: "absolute",
          transform: `rotate(${angle}deg) translate(${radius}px)`,
          transformOrigin: "0 0",
        }}
      />
    );
  });

  return (
    <div className="template-wrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginTop: "-80px",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="containerRaysWrapper">
            <div className="containerRays">{rays}</div>
          </div>
          <div className="sun" />
          <div className="iconContainer">
            <img src={getSrcImage("rocket.svg")} alt="Rocket Icon" className="icon" />
          </div>
          <div>
            <img
              src={getSrcImage("braces-asterisk.svg")}
              alt="Rocket Icon"
              className="iconElement"
            />
            <img
              src={getSrcImage("database-fill.svg")}
              alt="Database Icon"
              className="iconElement"
            />
            <img src={getSrcImage("palette-fill.svg")} alt="Paint Icon" className="iconElement" />
            <img
              src={getSrcImage("person-vcard-fill.svg")}
              alt="Person Icon"
              className="iconElement"
            />
          </div>
          <div style={{ height: "100%", width: "100%" }}>
            <svg className="containerLines" height="100%" width="100%">
              <line x1="150" y1="120" x2="300" y2="120" stroke="#1976d2" />
              <line x1="300" y1="120" x2="300" y2="200" stroke="#1976d2" />
              <line x1="300" y1="200" x2="500" y2="200" stroke="#1976d2" />
              <line x1="500" y1="200" x2="700" y2="200" stroke="#1976d2" />
              <line x1="700" y1="200" x2="700" y2="120" stroke="#1976d2" />
              <line x1="700" y1="120" x2="800" y2="120" stroke="#1976d2" />
              <line x1="300" y1="280" x2="500" y2="280" stroke="#1976d2" />
              <line x1="300" y1="280" x2="300" y2="360" stroke="#1976d2" />
              <line x1="300" y1="360" x2="140" y2="360" stroke="#1976d2" />
              <line x1="500" y1="280" x2="700" y2="280" stroke="#1976d2" />
              <line x1="700" y1="280" x2="700" y2="360" stroke="#1976d2" />
              <line x1="700" y1="360" x2="820" y2="360" stroke="#1976d2" />
            </svg>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "-64px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Fireploy App</h1>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
