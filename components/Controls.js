import React from 'react';

export default function Controls({
  title,
  onTitle,
  subtitle,
  onSubtitle,
  bgColor,
  onBgColor,
  accentColor,
  onAccentColor,
  shape,
  onShape
}) {
  return (
    <>
      <div>
        <div className="label">Titre</div>
        <input
          className="input"
          value={title}
          onChange={(e) => onTitle(e.target.value)}
          placeholder="Titre"
          maxLength={120}
        />
      </div>

      <div>
        <div className="label">Sous-titre</div>
        <input
          className="input"
          value={subtitle}
          onChange={(e) => onSubtitle(e.target.value)}
          placeholder="Sous-titre"
          maxLength={180}
        />
      </div>

      <div className="row">
        <div>
          <div className="label">Fond</div>
          <input
            className="color"
            type="color"
            value={bgColor}
            onChange={(e) => onBgColor(e.target.value)}
            aria-label="Couleur de fond"
          />
        </div>
        <div>
          <div className="label">Accent</div>
          <input
            className="color"
            type="color"
            value={accentColor}
            onChange={(e) => onAccentColor(e.target.value)}
            aria-label="Couleur d'accent"
          />
        </div>
      </div>

      <div>
        <div className="label">?l?ment</div>
        <select className="select" value={shape} onChange={(e) => onShape(e.target.value)}>
          <option value="line">Ligne subtile</option>
          <option value="block">Bloc simple</option>
        </select>
      </div>
    </>
  );
}

