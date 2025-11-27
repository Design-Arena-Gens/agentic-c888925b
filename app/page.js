'use client';

import { useMemo, useRef, useState } from 'react';
import Banner from '../components/Banner';
import Controls from '../components/Controls';
import { exportNodeToPng } from '../lib/export';

const SIZES = {
  '1200x400': { w: 1200, h: 400 },
  '1600x500': { w: 1600, h: 500 },
  '1920x640': { w: 1920, h: 640 }
};

export default function Page() {
  const [title, setTitle] = useState('Design minimaliste');
  const [subtitle, setSubtitle] = useState('?pur?. ?l?gant. Intemporel.');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [accentColor, setAccentColor] = useState('#111827');
  const [shape, setShape] = useState('line');
  const [sizeKey, setSizeKey] = useState('1200x400');
  const size = useMemo(() => SIZES[sizeKey], [sizeKey]);

  const exportRef = useRef(null);

  const handleExport = async () => {
    if (!exportRef.current) return;
    await exportNodeToPng(exportRef.current, 'banniere-minimaliste.png', 2);
  };

  return (
    <main className="container">
      <div className="header">
        <div className="title">Banni?re minimaliste</div>
        <div className="hint">Cr?ez et exportez une banni?re (.png)</div>
      </div>

      <div className="grid">
        <section className="panel bannerWrapper">
          <div
            style={{
              width: '100%',
              maxWidth: 1000,
              aspectRatio: `${size.w} / ${size.h}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ width: '100%', height: '100%' }} ref={exportRef}>
              <Banner
                title={title}
                subtitle={subtitle}
                bgColor={bgColor}
                accentColor={accentColor}
                shape={shape}
                width={size.w}
                height={size.h}
              />
            </div>
          </div>
        </section>

        <aside className="panel controls">
          <Controls
            title={title}
            onTitle={setTitle}
            subtitle={subtitle}
            onSubtitle={setSubtitle}
            bgColor={bgColor}
            onBgColor={setBgColor}
            accentColor={accentColor}
            onAccentColor={setAccentColor}
            shape={shape}
            onShape={setShape}
          />

          <div className="footer">
            <div className="sizeToggle" role="group" aria-label="Taille">
              {Object.keys(SIZES).map((key) => (
                <button
                  key={key}
                  className={key === sizeKey ? 'active' : ''}
                  onClick={() => setSizeKey(key)}
                  type="button"
                >
                  {key}
                </button>
              ))}
            </div>
            <div>
              <button className="btn" type="button" onClick={handleExport}>
                Exporter en PNG
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

