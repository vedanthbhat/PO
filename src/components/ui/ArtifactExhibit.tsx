import React, { useState, useEffect, useRef } from 'react';
import { Artifact } from '../../types';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  Layers, 
  Search, 
  ShieldCheck, 
  Maximize2,
  TrendingUp,
  Cpu,
  ArrowRight,
  X,
  ZoomIn,
  Upload,
  RotateCcw
} from 'lucide-react';
import { 
  getCustomImage, 
  setCustomImage, 
  removeCustomImage, 
  subscribeToImageStore 
} from '../../utils/imageStore';

interface ArtifactExhibitProps {
  artifact: Artifact;
  figNum?: string;
  className?: string;
}

export const ArtifactExhibit: React.FC<ArtifactExhibitProps> = ({
  artifact,
  figNum = 'EXHIBIT',
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'breakdown'>('preview');
  const [imgFailed, setImgFailed] = useState(false);
  const [customImg, setCustomImg] = useState<string | null>(() => getCustomImage(artifact.id));
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const update = () => {
      const stored = getCustomImage(artifact.id);
      setCustomImg(stored);
      if (stored) {
        setImgFailed(false);
      }
    };
    return subscribeToImageStore(update);
  }, [artifact.id]);

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomImage(artifact.id, reader.result);
        setCustomImg(reader.result);
        setImgFailed(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const activeImageUrl = customImg || artifact.imageUrl;

  return (
    <div 
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`relative bg-[#FAF8F3] border ${isDragging ? 'border-amber-500 ring-2 ring-amber-300' : 'border-[#DDD8CB]'} rounded-lg p-3 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      {/* Tape strip at top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 tape-strip rounded-xs transform -rotate-1 pointer-events-none z-10" />

      {/* Header with Fig number and Badge */}
      <div className="flex items-center justify-between gap-2 mb-3 border-b border-[#E8E4D8] pb-2 min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-mono-code text-[10px] font-semibold tracking-widest text-[#7C7769] uppercase shrink-0">
            {figNum}
          </span>
          <span className="text-xs font-bold text-[#2A2823] truncate">
            {artifact.title}
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileUpload(e.target.files[0]);
              }
            }}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1 font-mono-code text-[9px] text-[#635F53] hover:text-[#1C1B18] bg-[#EFECE3] hover:bg-[#E4DFD2] px-2 py-0.5 rounded transition-colors cursor-pointer border border-[#D5CFC0]"
            title="Upload your own photo or screenshot directly"
          >
            <Upload className="w-2.5 h-2.5" />
            <span className="hidden sm:inline">Upload</span>
          </button>
          {customImg && (
            <button
              type="button"
              onClick={() => {
                removeCustomImage(artifact.id);
                setCustomImg(null);
              }}
              className="text-[#969183] hover:text-red-600 p-0.5"
              title="Reset image"
            >
              <RotateCcw className="w-2.5 h-2.5" />
            </button>
          )}
          {artifact.badge && (
            <span className="font-mono-code text-[9px] font-medium tracking-wider bg-[#EDE8DC] text-[#4A473E] px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
              {artifact.badge}
            </span>
          )}
        </div>
      </div>

      {/* Main Artifact Display Frame */}
      <div className="rounded-md border border-[#D5D0C2] overflow-hidden bg-white">
        {activeImageUrl && !imgFailed ? (
          <div className="relative group bg-[#161513] overflow-hidden">
            {/* Minimal window frame header for screenshots */}
            {artifact.type === 'screenshot' && (
              <div className="bg-[#24221E] px-3 py-1.5 border-b border-[#36332C] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E15A4C]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#52B36B]/80 inline-block" />
                  <span className="ml-2 font-mono-code text-[10px] text-[#A6A093] truncate max-w-[180px] sm:max-w-xs">
                    {artifact.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(true)}
                  className="flex items-center gap-1 text-[#A6A093] hover:text-white transition-colors text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-black/30 hover:bg-black/50 cursor-pointer"
                  title="Enlarge screenshot"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span className="hidden sm:inline">Inspect</span>
                </button>
              </div>
            )}

            <div 
              className="relative overflow-hidden cursor-zoom-in flex items-center justify-center min-h-[160px] max-h-[460px] bg-[#0F0E0C]"
              onClick={() => setIsExpanded(true)}
            >
              <img
                src={activeImageUrl}
                alt={artifact.title}
                onError={() => {
                  if (!customImg) setImgFailed(true);
                }}
                className="w-full h-auto max-h-[460px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.015]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="bg-black/80 text-white text-xs font-mono-code px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs border border-white/10 shadow-lg">
                  <ZoomIn className="w-3.5 h-3.5" /> Click to enlarge
                </span>
              </div>
            </div>
          </div>
        ) : (
          <>
        {/* 1. SQI HOME REGISTRY */}
        {artifact.mockType === 'sqi-home' && (
          <div className="bg-[#0B0F14] text-white p-4 sm:p-6 font-sans text-xs">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center font-bold text-black text-[11px]">S</div>
                <span className="font-bold tracking-wider text-sm">SQI</span>
                <span className="text-gray-400 text-[10px] hidden sm:inline">SERVICE QUALITY INTELLIGENCE</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-[11px]">
                <span className="text-white font-medium">Registry</span>
                <span>Methodology</span>
                <span>Compare</span>
                <span>Rankings</span>
              </div>
            </div>

            {/* Hero content */}
            <div className="py-2 max-w-lg">
              <span className="text-emerald-400 font-mono-code text-[10px] tracking-widest uppercase">
                INITIAL PRODUCT: MUMBAI REGISTRY · 50 CALIBRATED PROPERTIES
              </span>
              <h4 className="text-base sm:text-lg font-bold mt-1 text-white leading-tight">
                Know the quality behind the rating that actually matters.
              </h4>
              <p className="text-gray-400 text-[11px] mt-1.5 leading-relaxed">
                SQI turns reviews, business promises and public evidence into a standardized measure of service quality — so you can see what a rating alone misses.
              </p>
              
              {/* Search Bar */}
              <div className="mt-4 bg-gray-900 border border-gray-700 rounded p-2 flex items-center justify-between text-gray-400">
                <span className="text-gray-400 text-[11px] flex items-center gap-2">
                  <Search className="w-3.5 h-3.5" /> Search a restaurant or hotel in Mumbai...
                </span>
                <span className="font-mono-code text-[9px] bg-gray-800 px-1.5 py-0.5 rounded text-gray-300">⌘K</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. SQI METHODOLOGY */}
        {artifact.mockType === 'sqi-methodology' && (
          <div className="bg-[#0D1117] text-gray-200 p-4 sm:p-5 text-xs font-mono-code leading-relaxed">
            <div className="border-b border-gray-800 pb-2 mb-3 flex items-center justify-between text-[11px]">
              <span className="text-emerald-400 font-bold">SQI Methodology & Mathematical Rules</span>
              <span className="text-gray-400 text-[10px]">SPECIFICATION V1.0</span>
            </div>
            <div className="text-[11px] text-gray-300 mb-2 font-semibold">
              01 · FOUNDATIONAL PREMISE: The Structural Failure of Star Ratings
            </div>
            <div className="space-y-2 text-[10.5px] text-gray-400">
              <div className="bg-gray-900/80 p-2.5 rounded border-l-2 border-emerald-500">
                <span className="text-white font-medium">1. Volume Conflation:</span> A 4.8★ with 30 reviews looks identical to a 4.8★ with 30,000. Platforms confuse statistical confidence with quality.
              </div>
              <div className="bg-gray-900/80 p-2.5 rounded border-l-2 border-emerald-500">
                <span className="text-white font-medium">2. Dimensional Invisibility:</span> A restaurant with Michelin-tier food and abysmal service aggregates to a mediocre 3.8★. Neither reality is visible.
              </div>
              <div className="bg-gray-900/80 p-2.5 rounded border-l-2 border-emerald-500">
                <span className="text-white font-medium">3. Recency Blindness:</span> A hotel that changed management 3 months ago still trades on 5 years of historical reviews.
              </div>
            </div>
          </div>
        )}

        {/* 3. SQI COMPARE MATRIX */}
        {artifact.mockType === 'sqi-compare' && (
          <div className="bg-[#0C1015] text-white p-4 text-xs font-sans">
            <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span className="font-bold text-gray-200">Compare Properties</span>
              <span className="text-emerald-400 font-mono-code text-[10px]">MUMBAI BENCHMARK</span>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded p-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-bold text-sm text-white">The Oberoi Mumbai</div>
                  <div className="text-[11px] text-gray-400">Nariman Point · Luxury Hotel</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-extrabold text-emerald-400 leading-none">96<span className="text-xs font-normal text-gray-400">/100</span></div>
                  <div className="text-[10px] font-mono-code text-emerald-300">GRADE A+</div>
                </div>
              </div>
              
              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-gray-800 text-[10.5px] font-mono-code">
                <div>
                  <span className="text-gray-400 block text-[9px]">UNCERTAINTY</span>
                  <span className="text-gray-200">±1 pts</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[9px]">CONFIDENCE</span>
                  <span className="text-emerald-400">98/100</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[9px]">COVERAGE</span>
                  <span className="text-gray-200">97%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. SQI CHROME EXTENSION OVERLAY */}
        {artifact.mockType === 'sqi-extension' && (
          <div className="bg-gray-100 p-3 sm:p-4 text-xs font-sans">
            {/* Fake Chrome Address Bar */}
            <div className="bg-white border border-gray-300 rounded px-3 py-1.5 flex items-center gap-2 mb-3 text-gray-600 text-[11px]">
              <span className="text-gray-400">🔒 google.com/search?q=the+taj+mahal+palace+mumbai</span>
            </div>

            {/* Google Search Result with in-page SQI extension card */}
            <div className="bg-white p-3 rounded border border-gray-200 shadow-sm relative">
              <div className="text-blue-700 text-sm font-medium hover:underline">
                The Taj Mahal Palace, Mumbai | Official 5 Star Luxury Hotel
              </div>
              <div className="text-green-700 text-[10.5px]">tajhotels.com/en-in/taj/taj-mahal-palace-mumbai</div>
              <div className="text-gray-600 text-[11px] mt-1">
                Facing the Gateway of India, this iconic 1903 heritage hotel offers legendary luxury, fine dining, and harbor views...
              </div>

              {/* Injected SQI Widget */}
              <div className="mt-3 bg-[#0B0F14] text-white p-3 rounded-md border border-emerald-500/40 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-emerald-500 rounded text-black font-bold flex items-center justify-center text-[10px]">S</div>
                    <span className="font-bold text-[11px] text-gray-200">SQI INTELLIGENCE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-emerald-400">94/100</span>
                    <span className="bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded text-[9px] font-mono-code">GRADE A</span>
                  </div>
                </div>

                {/* 6 Dimension Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-[10px] text-gray-300 pt-1 border-t border-gray-800">
                  <div className="flex justify-between"><span>Accommodation</span><span className="text-emerald-400 font-mono-code">95</span></div>
                  <div className="flex justify-between"><span>Guest Exp.</span><span className="text-emerald-400 font-mono-code">96</span></div>
                  <div className="flex justify-between"><span>Operations</span><span className="text-emerald-400 font-mono-code">94</span></div>
                  <div className="flex justify-between"><span>Consistency</span><span className="text-emerald-400 font-mono-code">95</span></div>
                  <div className="flex justify-between"><span>Value</span><span className="text-yellow-400 font-mono-code">88</span></div>
                  <div className="flex justify-between"><span>Trust & Hygiene</span><span className="text-emerald-400 font-mono-code">97</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. SPECULATE RESEARCH APPRAISAL */}
        {artifact.mockType === 'speculate-eval' && (
          <div className="bg-[#FAF9F5] p-4 text-xs font-sans text-gray-800 border-t-2 border-red-500">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
              <span className="font-mono-code text-[10px] text-gray-500 uppercase tracking-wider">RESEARCH APPRAISAL RESULT</span>
              <span className="bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded text-[10px]">13 / 100 · UNRELIABLE</span>
            </div>
            
            <div className="font-serif-display text-base font-bold text-gray-900 leading-snug">
              “Ashwagandha (Withania somnifera) — a herb with versatile medicinal properties empowering human physical and mental health”
            </div>
            
            <div className="mt-3 bg-red-50 border border-red-200 rounded p-2.5 text-[11px] text-red-900">
              <div className="font-bold flex items-center gap-1 mb-1 text-red-700">
                <AlertTriangle className="w-3.5 h-3.5" /> Methodological Red Flags Detected:
              </div>
              <ul className="list-disc pl-4 space-y-1 text-gray-700">
                <li>No systematic review methodology (narrative opinion paper).</li>
                <li>Extrapolates findings from rodent models directly to clinical human conclusions.</li>
                <li>Uses unscientific hyperbolic claims (e.g. “miraculous”, “royal herb”).</li>
                <li>Missing explicit institutional funding or conflict of interest declaration.</li>
              </ul>
            </div>
          </div>
        )}

        {/* 6. SPECULATE COMPARE */}
        {artifact.mockType === 'speculate-compare' && (
          <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-red-50/70 border border-red-200 rounded p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-red-900">Ashwagandha Review</span>
                <span className="font-mono-code font-bold text-red-600">13/100</span>
              </div>
              <span className="text-[10px] text-red-700 font-semibold block mb-2">Unreliable / Insufficient</span>
              <div className="text-[10.5px] text-gray-600 space-y-1">
                <div>• Study Design: 2/25</div>
                <div>• Statistical Rigor: 0/20</div>
                <div>• Real-World Duration: 3/15</div>
                <div>• Generalizability: 2/13</div>
              </div>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200 rounded p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-emerald-950">Creatine Meta-Analysis</span>
                <span className="font-mono-code font-bold text-emerald-600">76/100</span>
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold block mb-2">Moderate / High Evidence</span>
              <div className="text-[10.5px] text-gray-600 space-y-1">
                <div>• Study Design: 24/25 (14 matched RCTs)</div>
                <div>• Statistical Rigor: 17/20</div>
                <div>• Real-World Duration: 12/15</div>
                <div>• Generalizability: 11/13</div>
              </div>
            </div>
          </div>
        )}

        {/* 7. MAKE.COM NBFC DECISION FLOW */}
        {artifact.mockType === 'nbfc-make-flow' && (
          <div className="bg-[#1E1F29] text-white p-4 text-xs font-sans overflow-x-auto">
            <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500 inline-block"></span>
                <span className="font-mono-code text-[11px] font-bold text-gray-200">Scenario 7146849: NBFC Retail Underwriting</span>
              </div>
              <span className="text-[10px] font-mono-code bg-gray-800 text-purple-300 px-2 py-0.5 rounded">MAKE.COM BLUEPRINT</span>
            </div>

            {/* Workflow Diagram Nodes */}
            <div className="flex items-center gap-2 py-3 min-w-[500px]">
              {/* Node 1 */}
              <div className="bg-[#2A2B3D] border border-blue-500/50 rounded-lg p-2 text-center w-28">
                <div className="font-mono-code text-[9px] text-blue-400">01 DRIVE</div>
                <div className="text-[10px] font-semibold mt-1">Watch Folder</div>
                <div className="text-[8px] text-gray-400 mt-0.5">New loan application</div>
              </div>
              <span className="text-gray-500">→</span>

              {/* Node 2 */}
              <div className="bg-[#2A2B3D] border border-blue-500/50 rounded-lg p-2 text-center w-28">
                <div className="font-mono-code text-[9px] text-blue-400">02 DRIVE</div>
                <div className="text-[10px] font-semibold mt-1">Extract & Parse</div>
                <div className="text-[8px] text-gray-400 mt-0.5">OCR borrower docs</div>
              </div>
              <span className="text-gray-500">→</span>

              {/* Node 3 */}
              <div className="bg-[#2A2B3D] border border-amber-500/50 rounded-lg p-2 text-center w-32">
                <div className="font-mono-code text-[9px] text-amber-400">05 MAKE CODE</div>
                <div className="text-[10px] font-semibold mt-1">JS Decision Engine</div>
                <div className="text-[8px] text-gray-400 mt-0.5">FOIR, Knockout, Risk</div>
              </div>
              <span className="text-gray-500">→</span>

              {/* Node 4 */}
              <div className="bg-[#2A2B3D] border border-purple-500/50 rounded-lg p-2 text-center w-28">
                <div className="font-mono-code text-[9px] text-purple-400">07 ROUTER</div>
                <div className="text-[10px] font-semibold mt-1">Risk Gate Route</div>
                <div className="text-[8px] text-gray-400 mt-0.5">Approved vs Rejected</div>
              </div>
            </div>
            
            <div className="mt-2 text-[10px] text-gray-400 font-mono-code flex items-center justify-between border-t border-gray-800 pt-2">
              <span>Route 1: Gmail Approval + Sanction Letter</span>
              <span>Route 2: Gmail Itemized Rejection Reasons</span>
            </div>
          </div>
        )}

        {/* 8. TONERSCART B2B MARKETPLACE */}
        {artifact.mockType === 'tonerscart-home' && (
          <div className="bg-white p-4 text-xs font-sans text-gray-800">
            <div className="flex items-center justify-between border-b pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-sm text-blue-900 tracking-tight">TonersCart</span>
                <span className="bg-blue-100 text-blue-800 text-[9px] font-bold px-1.5 py-0.5 rounded">B2B MARKETPLACE</span>
              </div>
              <div className="text-[10px] text-gray-500">Karnataka High Court Verified Supplier</div>
            </div>
            <div className="font-bold text-sm text-gray-900">
              India’s digital marketplace for printers, toners & MFDs
            </div>
            <div className="text-[11px] text-gray-600 mt-0.5">
              Compare verified suppliers, real stock, and institutional GST billing.
            </div>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {['Toners', 'Printers', 'MPS / Rentals', 'Inks & Consumables', 'Scanners', 'Govt Portal'].map(t => (
                <span key={t} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-[10px] font-medium border border-gray-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 9. TONERSCART PROCUREMENT PORTAL */}
        {artifact.mockType === 'tonerscart-procurement' && (
          <div className="bg-[#F4F6F9] p-4 text-xs font-sans text-gray-800">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-3">
              <span className="font-bold text-gray-900">Government & Corporate Procurement Portal</span>
              <span className="font-mono-code text-[10px] text-blue-700 font-semibold">L1 / L2 / L3 COMPLIANCE</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white p-2.5 rounded border border-gray-200">
                <span className="font-mono-code text-[9px] text-gray-400 block font-bold">STEP 01</span>
                <span className="font-bold text-[11px] text-gray-900 block mt-0.5">Register & Verify</span>
                <span className="text-[10px] text-gray-500 block mt-0.5">GST verification, institutional KYC, and credit limit sanctioning.</span>
              </div>
              <div className="bg-white p-2.5 rounded border border-gray-200">
                <span className="font-mono-code text-[9px] text-gray-400 block font-bold">STEP 02</span>
                <span className="font-bold text-[11px] text-gray-900 block mt-0.5">Compare & Quote</span>
                <span className="text-[10px] text-gray-500 block mt-0.5">Lowest dealer price (L1), formal PDF quotations valid 7 days.</span>
              </div>
              <div className="bg-white p-2.5 rounded border border-gray-200">
                <span className="font-mono-code text-[9px] text-gray-400 block font-bold">STEP 03</span>
                <span className="font-bold text-[11px] text-gray-900 block mt-0.5">Order on Credit</span>
                <span className="text-[10px] text-gray-500 block mt-0.5">30-day credit accounts, NEFT/RTGS payments, and dispatch tracking.</span>
              </div>
            </div>
          </div>
        )}

        {/* 10. TONERSCART PRINTERS CATALOG */}
        {artifact.mockType === 'tonerscart-catalog' && (
          <div className="bg-white p-4 text-xs font-sans">
            <div className="text-[11px] font-bold text-gray-700 mb-2">Verified Institutional Inventory (Bangalore Warehouse)</div>
            <div className="space-y-1.5 font-mono-code text-[10.5px]">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                <div><span className="font-bold text-gray-900 font-sans">Brother MFC-B7810DW</span> <span className="text-[9px] text-gray-400">MFD Duplex</span></div>
                <div className="font-bold text-blue-900">₹34,937</div>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                <div><span className="font-bold text-gray-900 font-sans">Brother DCP-B7640DW</span> <span className="text-[9px] text-gray-400">Wireless Laser</span></div>
                <div className="font-bold text-blue-900">₹23,300</div>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200">
                <div><span className="font-bold text-gray-900 font-sans">Brother DCP-B7620DW</span> <span className="text-[9px] text-gray-400">Multi-Function</span></div>
                <div className="font-bold text-blue-900">₹20,650</div>
              </div>
            </div>
          </div>
        )}

        {/* 11. DIARY OF A LANKY KID */}
        {artifact.mockType === 'lanky-home' && (
          <div className="bg-[#FFFDF8] notebook-margin-line p-5 text-xs font-sans text-gray-900 border-l-4 border-red-300">
            <div className="flex items-center justify-between mb-3 border-b border-gray-200 pb-2">
              <span className="font-handwriting text-lg text-gray-700 font-bold">diary of a lanky kid.</span>
              <span className="font-mono-code text-[9px] text-gray-400">since chapter 1 / est. when jeans flooded</span>
            </div>
            
            <div className="font-serif-display text-2xl font-bold text-gray-900 leading-tight">
              Pants that actually reach my ankles.
            </div>

            <p className="mt-2 text-gray-700 leading-relaxed font-sans text-[11.5px] max-w-md">
              Hi. I’m 6’3”. For 20 years every pair of pants I owned betrayed me at the bottom of an escalator. So I started Diary of a Lanky Kid — trousers, jeans and joggers cut for humans built like noodles.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 bg-[#1C1B18] text-white px-3 py-1.5 rounded font-sans text-xs font-semibold">
              Shop the 3 originals →
            </div>
          </div>
        )}

        {/* 12. DIARY OF A LANKY KID SHOP */}
        {artifact.mockType === 'lanky-shop' && (
          <div className="bg-[#FFFDF8] p-4 text-xs font-sans">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-bold text-sm text-gray-900">The Endless Track</div>
                <div className="text-[11px] text-gray-500">Track pants that don’t quit at your ankles.</div>
              </div>
              <div className="font-mono-code font-bold text-xs">₹2,499</div>
            </div>

            <div className="mt-3 bg-amber-50/50 p-2.5 rounded border border-amber-200">
              <div className="text-[10px] font-mono-code text-gray-700 font-bold uppercase mb-1">Custom Inseam Selection (Inches):</div>
              <div className="flex flex-wrap gap-1.5 font-mono-code text-[10px]">
                {['32"', '34"', '36" (Tall)', '38" (Extra Tall)', '40" (Stretched)', '42" (Noodle)'].map(s => (
                  <span key={s} className="bg-white border border-gray-300 px-2 py-1 rounded text-gray-800 font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-2 font-handwriting text-sm text-[#B93829] font-medium">
              *note: actual pants will be less squiggly than the drawings.
            </div>
          </div>
        )}

        {/* 13. NBFC 19-SLIDE DECK */}
        {artifact.mockType === 'nbfc-deck' && (
          <div className="bg-[#0F1117] text-white p-4 sm:p-5 text-xs font-sans">
            <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
              <span className="font-mono-code text-[10px] text-purple-400">RESEARCH THESIS · 19 SLIDES</span>
              <span className="text-gray-400 text-[10px]">LENDING VALUE CHAIN</span>
            </div>

            <div className="font-display text-base font-bold leading-snug text-gray-100">
              Where does economic profit and risk actually concentrate across the Indian NBFC value chain?
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-5 gap-1.5 text-[10px] font-mono-code pt-2 border-t border-gray-800">
              <div className="bg-gray-900 p-2 rounded border border-gray-700">
                <span className="text-purple-400 block font-bold">01 RAISE</span>
                <span className="text-gray-300 block mt-1">Cost of funds & bank credit ratings</span>
              </div>
              <div className="bg-gray-900 p-2 rounded border border-gray-700">
                <span className="text-purple-400 block font-bold">02 FIND</span>
                <span className="text-gray-300 block mt-1">DSA origination & CAC commoditization</span>
              </div>
              <div className="bg-gray-900 p-2 rounded border border-gray-700">
                <span className="text-purple-400 block font-bold">03 DECIDE</span>
                <span className="text-gray-300 block mt-1">Underwriting scorecards & policy gates</span>
              </div>
              <div className="bg-gray-900 p-2 rounded border border-gray-700">
                <span className="text-purple-400 block font-bold">04 COLLECT</span>
                <span className="text-purple-300 font-bold block mt-1">Primary moat: On-ground field recovery</span>
              </div>
              <div className="bg-gray-900 p-2 rounded border border-gray-700">
                <span className="text-purple-400 block font-bold">05 RECOVER</span>
                <span className="text-gray-300 block mt-1">SARFAESI, arbitration & hair-cuts</span>
              </div>
            </div>
          </div>
        )}

        {/* 14. PERSONAL PHOTOS */}
        {artifact.mockType?.startsWith('photo-') && (
          <div className="p-4 bg-[#EDE8DC] flex flex-col items-center justify-center text-center">
            {/* Visual Polaroid Frame */}
            <div className="bg-white p-3 pb-8 rounded-sm shadow-md max-w-sm w-full border border-gray-300 transform -rotate-0.5">
              <div className="w-full aspect-[4/3] bg-[#2E3138] rounded-xs flex items-center justify-center relative overflow-hidden">
                {/* Fallback Graphic Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3 text-left">
                  <span className="font-mono-code text-[9px] uppercase tracking-widest text-emerald-400">
                    {artifact.badge || 'AUTHENTIC RECORD'}
                  </span>
                  <span className="font-serif-display text-white text-lg font-bold">
                    {artifact.title}
                  </span>
                </div>
              </div>
              <div className="mt-3 font-handwriting text-lg text-[#2E2B25] font-semibold text-center">
                {artifact.caption}
              </div>
            </div>
          </div>
        )}
          </>
        )}
      </div>

      {/* Caption & Handwritten Note */}
      <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-t border-[#EAE5D8] pt-2">
        <p className="text-xs text-[#5C584E] leading-relaxed flex-1">
          {artifact.caption}
        </p>
        {artifact.annotation && (
          <span className="font-handwriting text-lg text-[#B93829] font-medium shrink-0 max-w-full leading-snug">
            {artifact.annotation}
          </span>
        )}
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {isExpanded && activeImageUrl && !imgFailed && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setIsExpanded(false)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#1A1916] rounded-lg border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#24221E] border-b border-white/10 text-white shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <span className="font-mono-code text-[11px] text-amber-400 font-semibold uppercase shrink-0">{figNum}</span>
                <span className="text-sm font-semibold truncate text-[#EDEDED]">{artifact.title}</span>
                {artifact.badge && (
                  <span className="font-mono-code text-[9px] bg-white/10 px-2 py-0.5 rounded text-gray-300 shrink-0">
                    {artifact.badge}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors ml-2"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-2 sm:p-4 flex items-center justify-center bg-[#0D0D0B]">
              <img
                src={activeImageUrl}
                alt={artifact.title}
                className="max-w-full max-h-[75vh] object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>
            {artifact.caption && (
              <div className="px-4 py-2.5 bg-[#201E1A] border-t border-white/10 text-xs text-[#B5B0A4] flex items-center justify-between gap-4 shrink-0">
                <span className="truncate sm:whitespace-normal">{artifact.caption}</span>
                {artifact.annotation && (
                  <span className="font-handwriting text-[#E27D60] text-base shrink-0 whitespace-nowrap">
                    {artifact.annotation}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
