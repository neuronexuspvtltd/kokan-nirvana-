import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Calculator, Sparkles, Send, ShieldCheck, ArrowRight } from 'lucide-react';

export default function InvestmentCalculator({ onCalculateEnquire }) {
  const [plotArea, setPlotArea] = useState(3000); // sq ft
  const [plotType, setPlotType] = useState('seaview'); // seaview, nearbeach, cottage
  const [includeBungalow, setIncludeBungalow] = useState(true);
  const [bungalowBuiltup, setBungalowBuiltup] = useState(1200); // sq ft

  // Pricing benchmarks
  const landRate = plotType === 'seaview' ? 700 : plotType === 'nearbeach' ? 450 : 600; // Rs/sq.ft
  const constructionRate = 2200; // Rs/sq.ft for premium coastal bungalow construction

  const estimatedLandCost = Math.round((plotArea * landRate) / 100000); // in Lacs
  const estimatedConstCost = includeBungalow ? Math.round((bungalowBuiltup * constructionRate) / 100000) : 0; // in Lacs
  const totalInvestment = estimatedLandCost + estimatedConstCost;
  const projectedAppreciation5Y = Math.round(totalInvestment * 1.65); // 65% projected 5y growth in Dapoli

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-gradient-to-b from-brand-cyan-tint/40 via-white to-sand-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Interactive Planning Tool"
          title="Coastal Property Investment Estimator"
          subtitle="Estimate your plot acquisition cost, custom bungalow construction budget, and projected 5-year capital appreciation in Dapoli."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-brand-cyan/20 shadow-brand-lg">
          
          {/* Controls Form Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Property Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-2">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPlotType('seaview')}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    plotType === 'seaview'
                      ? 'border-brand-cyan bg-brand-cyan-light text-brand-cyan font-bold shadow-sm'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-xs uppercase block text-gray-500 font-semibold">180° Ocean View</span>
                  <span className="text-sm">Sea View NA Plot</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPlotType('nearbeach')}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    plotType === 'nearbeach'
                      ? 'border-brand-cyan bg-brand-cyan-light text-brand-cyan font-bold shadow-sm'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-xs uppercase block text-gray-500 font-semibold">Short Stroll</span>
                  <span className="text-sm">Near Beach Plot</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPlotType('cottage')}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    plotType === 'cottage'
                      ? 'border-brand-cyan bg-brand-cyan-light text-brand-cyan font-bold shadow-sm'
                      : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-xs uppercase block text-gray-500 font-semibold">Ready Possession</span>
                  <span className="text-sm">Cottage / Villa</span>
                </button>
              </div>
            </div>

            {/* Plot Area Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-brand-slate">
                <span>2. Plot Area Size</span>
                <span className="text-brand-cyan font-serif text-base">{plotArea.toLocaleString()} sq.ft.</span>
              </div>
              <input
                type="range"
                min="1500"
                max="10000"
                step="500"
                value={plotArea}
                onChange={(e) => setPlotArea(Number(e.target.value))}
                className="w-full h-2 bg-brand-cyan-light rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                <span>1,500 sq.ft.</span>
                <span>5,000 sq.ft.</span>
                <span>10,000 sq.ft.</span>
              </div>
            </div>

            {/* Bungalow Construction Checkbox */}
            <div className="p-4 rounded-2xl bg-brand-cyan-tint/60 border border-brand-cyan/15 space-y-3">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeBungalow}
                    onChange={(e) => setIncludeBungalow(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-cyan focus:ring-brand-cyan cursor-pointer"
                  />
                  <span className="text-xs font-bold text-brand-slate">Add Turnkey Bungalow Construction</span>
                </label>
                <span className="text-[10px] uppercase font-bold text-brand-orange bg-brand-orange-light px-2.5 py-1 rounded-md">
                  Key Handover
                </span>
              </div>

              {includeBungalow && (
                <div className="space-y-2 pt-2 border-t border-brand-cyan/10">
                  <div className="flex justify-between items-center text-xs font-bold text-brand-slate">
                    <span>Bungalow Built-up Area</span>
                    <span className="text-brand-cyan">{bungalowBuiltup.toLocaleString()} sq.ft.</span>
                  </div>
                  <input
                    type="range"
                    min="600"
                    max="3500"
                    step="100"
                    value={bungalowBuiltup}
                    onChange={(e) => setBungalowBuiltup(Number(e.target.value))}
                    className="w-full h-2 bg-brand-cyan-light rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                  />
                </div>
              )}
            </div>

          </div>

          {/* Result Output Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-brand-slate to-slate-900 text-white space-y-6 shadow-xl border border-white/10">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-cyan bg-white/10 px-3 py-1 rounded-full">
                <Calculator className="w-3.5 h-3.5" />
                <span>Estimated Budget</span>
              </span>
              <span className="text-[10px] text-gray-400">Dapoli Rates Benchmark</span>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-center text-xs text-gray-300 pb-2 border-b border-white/10">
                <span>Land Acquisition Cost</span>
                <span className="font-serif font-bold text-base text-white">₹{estimatedLandCost} Lacs</span>
              </div>

              {includeBungalow && (
                <div className="flex justify-between items-center text-xs text-gray-300 pb-2 border-b border-white/10">
                  <span>Custom Villa Construction</span>
                  <span className="font-serif font-bold text-base text-white">₹{estimatedConstCost} Lacs</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-2">
                <span className="text-xs uppercase font-bold text-gray-300">Total Investment</span>
                <span className="font-serif font-bold text-2xl sm:text-3xl text-brand-orange">
                  ₹{totalInvestment} Lacs*
                </span>
              </div>

              {/* 5 Year Appreciation Preview */}
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] uppercase text-gray-300 font-bold block">Projected 5Y Value</span>
                  <span className="font-semibold text-emerald-400">~ ₹{projectedAppreciation5Y} Lacs</span>
                </div>
                <Sparkles className="w-5 h-5 text-brand-orange animate-pulse" />
              </div>
            </div>

            <button
              onClick={() => onCalculateEnquire({ plotArea, plotType, totalInvestment })}
              className="w-full py-3.5 rounded-full font-bold uppercase text-xs tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-orange-bright hover:from-brand-cyan hover:to-brand-cyan-dark shadow-orange-glow transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Enquire This Plan</span>
            </button>

            <p className="text-[10px] text-gray-400 text-center">
              *Approximate benchmark calculations. Actual cost depends on exact plot site location, 7/12 land specifications, and architectural finishes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
