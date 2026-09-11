import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Upload, 
  CheckCircle2, 
  Trash2, 
  Image as ImageIcon,
  Sparkles,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { 
  getCustomImage, 
  setCustomImage, 
  removeCustomImage, 
  subscribeToImageStore 
} from '../../utils/imageStore';

interface PhotoSlot {
  id: string;
  category: 'Recent Uploads' | 'Projects' | 'Life & Arts';
  title: string;
  targetFileName: string;
  recommendedSection: string;
  defaultMock: string;
}

const PHOTO_SLOTS: PhotoSlot[] = [
  {
    id: 'art-nbfc-engine',
    category: 'Recent Uploads',
    title: 'NBFC Loan Engine (Make.com Automation)',
    targetFileName: 'Screenshot (181).png',
    recommendedSection: 'Build Spread · FIG. 04',
    defaultMock: 'Make.com Scenario 7146849 diagram'
  },
  {
    id: 'photo-formal',
    category: 'Recent Uploads',
    title: 'Professional Headshot / Portrait',
    targetFileName: 'WhatsApp Image ... 6.51.11 PM.jpeg',
    recommendedSection: 'Me Spread · Portrait Polaroid',
    defaultMock: 'Formal Profile Polaroid'
  },
  {
    id: 'photo-presentation',
    category: 'Recent Uploads',
    title: 'Life at MU · Speaking Competition',
    targetFileName: 'WhatsApp Image ... 6.53.13 PM.jpeg',
    recommendedSection: 'Me Spread · Cohort Forum',
    defaultMock: 'Stage presentation card'
  },
  {
    id: 'photo-mentorship',
    category: 'Recent Uploads',
    title: 'Life at MU · Faculty Mentorship',
    targetFileName: 'WhatsApp Image ... 6.51.23 PM.jpeg',
    recommendedSection: 'Me Spread · FIG. 13 Faculty Dialogue',
    defaultMock: 'Classroom seminar card'
  },
  {
    id: 'photo-theatre-1',
    category: 'Recent Uploads',
    title: 'Theatre · Stage Production in Motion',
    targetFileName: 'WhatsApp Image ... 7.07.30 PM.jpeg',
    recommendedSection: 'Live Spread · Dramatics Exhibit 1',
    defaultMock: 'Stage performance exhibit'
  },
  {
    id: 'photo-theatre-2',
    category: 'Recent Uploads',
    title: 'Theatre · Backstage Joker Makeup',
    targetFileName: 'WhatsApp Image ... 7.07.45 PM.jpeg',
    recommendedSection: 'Live Spread · Dramatics Exhibit 2',
    defaultMock: 'Backstage makeup card'
  },
  {
    id: 'photo-music',
    category: 'Life & Arts',
    title: 'Hindustani Classical Concert & Tanpura',
    targetFileName: 'WhatsApp Image ... 7.09.13 PM.jpeg',
    recommendedSection: 'Live Spread · Classical Vocal Exhibit',
    defaultMock: 'Recital polaroid'
  },
  {
    id: 'photo-fest',
    category: 'Life & Arts',
    title: 'Somaiya Cultural Forum Festival Core',
    targetFileName: 'WhatsApp Image ... 7.22.41 PM.jpeg',
    recommendedSection: 'Live Spread · Cultural Forum Exhibit',
    defaultMock: 'Festival organizing card'
  },
  {
    id: 'photo-interact-1',
    category: 'Life & Arts',
    title: 'Interact Club · Creative Workshop',
    targetFileName: 'WhatsApp Image ... 7.23.17 PM.jpeg',
    recommendedSection: 'Live Spread · Community Service Exhibit 1',
    defaultMock: 'Art workshop card'
  },
  {
    id: 'photo-interact-2',
    category: 'Life & Arts',
    title: 'Interact Club · Outreach Group Photo',
    targetFileName: 'interact-outreach-group.jpeg',
    recommendedSection: 'Live Spread · Community Service Exhibit 2',
    defaultMock: 'Children’s home group session'
  },
  {
    id: 'photo-interact-3',
    category: 'Life & Arts',
    title: 'Interact Club · Mindfulness Session',
    targetFileName: 'interact-mindfulness-session.jpeg',
    recommendedSection: 'Live Spread · Community Service Exhibit 3',
    defaultMock: 'Group activity circle'
  },
  {
    id: 'art-sqi-1',
    category: 'Projects',
    title: 'SQI Registry & Real-Time Monitor',
    targetFileName: 'sqi-dashboard.png',
    recommendedSection: 'Make Spread · SQI Case Study',
    defaultMock: 'Live interactive vector mockup'
  },
  {
    id: 'art-speculate-1',
    category: 'Projects',
    title: 'Speculate Model Benchmark Evaluation',
    targetFileName: 'speculate-eval.png',
    recommendedSection: 'Create Spread · Speculate Case Study',
    defaultMock: 'Live interactive benchmark matrix'
  },
  {
    id: 'art-tonerscart-1',
    category: 'Projects',
    title: 'TonersCart B2B Institutional Procurement',
    targetFileName: 'tonerscart-home.png',
    recommendedSection: 'Venture Spread · TonersCart Portal',
    defaultMock: 'Interactive procurement portal'
  },
  {
    id: 'art-lanky-1',
    category: 'Projects',
    title: 'Diary of a Lanky Kid E-Commerce Portal',
    targetFileName: 'lanky-home.png',
    recommendedSection: 'Venture Spread · Lanky Kid Store',
    defaultMock: 'Interactive tall apparel store'
  }
];

interface PhotoUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoUploaderModal: React.FC<PhotoUploaderModalProps> = ({ isOpen, onClose }) => {
  const [images, setImages] = useState<Record<string, string | null>>({});
  const [activeTab, setActiveTab] = useState<'Recent Uploads' | 'Life & Arts' | 'Projects'>('Recent Uploads');

  useEffect(() => {
    const loadImages = () => {
      const current: Record<string, string | null> = {};
      PHOTO_SLOTS.forEach((slot) => {
        current[slot.id] = getCustomImage(slot.id);
      });
      setImages(current);
    };

    loadImages();
    return subscribeToImageStore(loadImages);
  }, []);

  const handleFileUpload = (slotId: string, file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomImage(slotId, reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  if (!isOpen) return null;

  const filteredSlots = PHOTO_SLOTS.filter((s) => s.category === activeTab);
  const uploadedCount = Object.values(images).filter(Boolean).length;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-[#FAF8F3] border-2 border-[#1C1B18] rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1C1B18] text-[#F7F4EB] px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-amber-500/20 rounded border border-amber-400/30 text-amber-300">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display text-base sm:text-lg font-bold">
                DIRECT PHOTO & SCREENSHOT UPLOADER
              </h2>
              <p className="text-[11px] text-gray-300 font-mono-code">
                No folders required — select files directly from your computer to preview immediately
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative Guidance Banner */}
        <div className="bg-[#EDE8DC] border-b border-[#D8D2C2] px-5 py-3 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-[#B93829] shrink-0 mt-0.5" />
          <div className="text-xs text-[#4A473E] leading-relaxed">
            <span className="font-semibold text-gray-900">How this works:</span> Pick any photo or screenshot from your device. It instantly renders in high resolution across the portfolio and saves securely to your browser storage. You can also drag & drop images onto any card directly.
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 px-5 pt-3 border-b border-[#E0DACB] bg-[#F4EFE6]">
          {(['Recent Uploads', 'Life & Arts', 'Projects'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-mono-code text-xs font-bold px-3 py-2 border-b-2 transition-all cursor-pointer ${
                activeTab === tab
                  ? 'border-[#B93829] text-[#B93829]'
                  : 'border-transparent text-[#6B6659] hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
          <span className="ml-auto text-[11px] font-mono-code text-gray-600">
            {uploadedCount} / {PHOTO_SLOTS.length} custom images loaded
          </span>
        </div>

        {/* Slot Grid List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {filteredSlots.map((slot) => {
            const hasImage = Boolean(images[slot.id]);
            const imageSrc = images[slot.id];

            return (
              <div
                key={slot.id}
                className="bg-white border border-[#DDD8CB] rounded-lg p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all hover:border-gray-400"
              >
                {/* Left: Info */}
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  {/* Thumbnail / Status */}
                  <div className="w-14 h-14 rounded bg-[#EDE8DC] border border-[#DDD8CB] shrink-0 flex items-center justify-center overflow-hidden relative">
                    {hasImage && imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={slot.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-gray-400" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-xs sm:text-sm text-gray-900 truncate">
                        {slot.title}
                      </h3>
                      {hasImage ? (
                        <span className="inline-flex items-center gap-1 font-mono-code text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold shrink-0">
                          <CheckCircle2 className="w-2.5 h-2.5" /> ACTIVE
                        </span>
                      ) : (
                        <span className="font-mono-code text-[9px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded shrink-0">
                          VECTOR MOCK
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-[#6E695E] mt-0.5 flex flex-wrap items-center gap-2">
                      <span className="font-mono-code bg-[#FAF8F3] px-1.5 py-0.5 rounded border border-[#E8E4D8]">
                        File: {slot.targetFileName}
                      </span>
                      <span>•</span>
                      <span>{slot.recommendedSection}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Upload Trigger & Clear */}
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 bg-[#1C1B18] hover:bg-black text-[#F7F4EB] px-3 py-1.5 rounded text-xs font-mono-code font-bold uppercase transition-colors">
                    <Upload className="w-3 h-3" />
                    <span>{hasImage ? 'Change' : 'Choose File'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleFileUpload(slot.id, e.target.files[0]);
                        }
                      }}
                    />
                  </label>

                  {hasImage && (
                    <button
                      onClick={() => removeCustomImage(slot.id)}
                      className="p-1.5 text-gray-400 hover:text-red-600 rounded transition-colors"
                      title="Reset to default mock"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#EDE8DC] border-t border-[#D8D2C2] px-5 py-3 flex items-center justify-between text-xs text-[#5C584E]">
          <div className="flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Images persist automatically in your browser session.</span>
          </div>
          <button
            onClick={onClose}
            className="bg-[#1C1B18] text-white px-4 py-1.5 rounded text-xs font-mono-code font-bold uppercase tracking-wider hover:bg-black transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
