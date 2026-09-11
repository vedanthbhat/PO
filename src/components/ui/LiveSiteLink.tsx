import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LiveSiteLinkProps {
  url: string;
  className?: string;
}

/**
 * Sketchbook-styled external link pill that opens a live project in a new tab.
 */
export const LiveSiteLink: React.FC<LiveSiteLinkProps> = ({ url, className = '' }) => {
  // Derive a clean display hostname, e.g. "tonerscart.com"
  const displayHost = (() => {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return url;
    }
  })();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1.5 bg-[#1C1B18] text-[#F7F4EB] hover:bg-black px-3 py-1.5 rounded font-mono-code text-[10px] font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all ${className}`}
      title={`Open ${displayHost} in a new tab`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
      <span>Visit Live Site</span>
      <span className="text-[#8F8A7D] group-hover:text-[#F7F4EB] transition-colors">·</span>
      <span className="text-[#B5B0A4] group-hover:text-white transition-colors normal-case font-medium">{displayHost}</span>
      <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};
