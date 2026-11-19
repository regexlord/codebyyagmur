import React, { useEffect, useRef, useState } from 'react';
import { ShieldAlert, Loader2 } from 'lucide-react';

export type CertAssetKey =
  | 'tei'
  | 'control_design'
  | 'simulink'
  | 'python1'
  | 'python2'
  | 'excel'
  | 'ai1'
  | 'ai2';

const VAULT_KEY = 'YK_CERT_VAULT_2026_PROTECTED';

const loaders: Record<CertAssetKey, () => Promise<{ payload: string }>> = {
  tei: () => import('../data/certs/tei'),
  control_design: () => import('../data/certs/control_design'),
  simulink: () => import('../data/certs/simulink'),
  python1: () => import('../data/certs/python1'),
  python2: () => import('../data/certs/python2'),
  excel: () => import('../data/certs/excel'),
  ai1: () => import('../data/certs/ai1'),
  ai2: () => import('../data/certs/ai2'),
};

function decodeVaultPayload(b64: string): Uint8Array {
  const binary = atob(b64);
  const len = binary.length;
  const out = new Uint8Array(len);
  const keyLen = VAULT_KEY.length;
  for (let i = 0; i < len; i++) {
    out[i] = binary.charCodeAt(i) ^ VAULT_KEY.charCodeAt(i % keyLen);
  }
  return out;
}

interface ProtectedCertificateCanvasProps {
  certKey: CertAssetKey;
  isEnlarged?: boolean;
  isPrivacyHidden?: boolean;
  privacyMessage?: string;
  className?: string;
}

export const ProtectedCertificateCanvas: React.FC<ProtectedCertificateCanvasProps> = ({
  certKey,
  isEnlarged = false,
  isPrivacyHidden = false,
  privacyMessage = 'Protected View',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [dimensions, setDimensions] = useState<{ w: number; h: number }>({ w: 1400, h: 990 });

  useEffect(() => {
    let cancelled = false;

    const renderToCanvas = async () => {
      setLoading(true);
      try {
        const mod = await loaders[certKey]();
        if (cancelled) return;

        const bytes = decodeVaultPayload(mod.payload);
        const arrayBuffer = bytes.buffer.slice(
          bytes.byteOffset,
          bytes.byteOffset + bytes.byteLength
        ) as ArrayBuffer;
        const blob = new Blob([arrayBuffer], { type: 'image/webp' });
        const bitmap = await createImageBitmap(blob);

        if (cancelled) {
          bitmap.close();
          return;
        }

        const canvas = canvasRef.current;
        if (canvas) {
          canvas.width = bitmap.width;
          canvas.height = bitmap.height;
          setDimensions({ w: bitmap.width, h: bitmap.height });

          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(bitmap, 0, 0);

            // Subtle protective diagonal watermark directly baked onto canvas pixels
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((-24 * Math.PI) / 180);
            ctx.font = `600 ${Math.max(20, Math.round(canvas.width * 0.021))}px ui-monospace, SFMono-Regular, Menlo, monospace`;
            ctx.fillStyle = 'rgba(15, 23, 42, 0.065)';
            ctx.textAlign = 'center';

            const watermarkText = 'YAĞMUR KAHRAMAN · VERIFIED PORTFOLIO VIEW ONLY';
            const stepY = Math.round(canvas.height * 0.28);
            const stepX = Math.round(canvas.width * 0.58);
            for (let y = -canvas.height; y <= canvas.height; y += stepY) {
              for (let x = -canvas.width; x <= canvas.width; x += stepX) {
                ctx.fillText(watermarkText, x, y);
              }
            }
            ctx.restore();
          }
        }

        bitmap.close();
      } catch {
        // Silent fail fallback
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    renderToCanvas();
    return () => {
      cancelled = true;
    };
  }, [certKey]);

  return (
    <div
      className={`relative overflow-hidden cert-protected-content select-none bg-slate-100 dark:bg-slate-950 ${className}`}
      style={{ aspectRatio: `${dimensions.w} / ${dimensions.h}` }}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
    >
      {/* Rendered Canvas (Zero <img> or direct URL in DOM) */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full block transition-all duration-150 pointer-events-none ${
          isPrivacyHidden ? 'blur-2xl opacity-0 scale-95' : 'opacity-100'
        } ${isEnlarged ? 'max-h-[78vh] object-contain mx-auto' : ''}`}
        aria-hidden="true"
      />

      {/* Transparent Protective Shield Overlay: blocks right-click "Save image as" / "Open image in new tab" on <canvas> */}
      <div
        className="absolute inset-0 z-20 select-none"
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDragStart={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onMouseDown={(e) => {
          if (e.button === 2) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      />

      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-100/80 dark:bg-slate-900/80">
          <Loader2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400 animate-spin" />
        </div>
      )}

      {/* Privacy Curtain on Focus Loss / Screenshot Hotkey */}
      {isPrivacyHidden && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-2 bg-slate-950/95 text-white p-4 text-center">
          <ShieldAlert className="w-7 h-7 text-cyan-400" />
          <span className="text-xs sm:text-sm font-medium text-slate-200 max-w-xs">
            {privacyMessage}
          </span>
        </div>
      )}
    </div>
  );
};
