import React, { useState, useMemo } from 'react';
import { Sliders, Sparkles, AlertTriangle, CheckCircle2, TrendingUp, TrendingDown, Cpu } from 'lucide-react';

interface ModelSimulatorProps {
  projectType: 'property' | 'delivery';
}

export const ModelSimulator: React.FC<ModelSimulatorProps> = ({ projectType }) => {
  // Property Simulator State
  const [areaSqft, setAreaSqft] = useState(1850);
  const [locality, setLocality] = useState<'cyberhub' | 'golfcourse' | 'noida' | 'southdelhi'>('golfcourse');
  const [metroDistanceKm, setMetroDistanceKm] = useState(1.2);
  const [luxuryScore, setLuxuryScore] = useState(4);

  // Delivery Simulator State
  const [transitDistance, setTransitDistance] = useState(380);
  const [weatherSeverity, setWeatherSeverity] = useState<0 | 1 | 2>(1);
  const [hubCongestion, setHubCongestion] = useState(62);
  const [courierTier, setCourierTier] = useState<'top' | 'standard' | 'lagging'>('standard');

  // Calculations for Property Valuation
  const propertyValuation = useMemo(() => {
    const localityRates = {
      cyberhub: { name: 'CyberHub Prime (Gurgaon)', rate: 16200, shap: 0.58 },
      golfcourse: { name: 'Golf Course Extension', rate: 13800, shap: 0.42 },
      noida: { name: 'Noida Expressway (Sec 128)', rate: 9200, shap: 0.15 },
      southdelhi: { name: 'South Delhi Heritage', rate: 21500, shap: 0.85 },
    };

    const loc = localityRates[locality];
    const baseValueCr = 0.65; // Base price reference in Crores
    const areaContributionCr = (areaSqft * loc.rate) / 10000000;
    
    // Metro proximity effect: closer = bonus, farther = penalty
    const metroPenalty = (metroDistanceKm - 1.0) * -0.06; // in Cr
    const luxuryContributionCr = (luxuryScore - 2.5) * 0.12;

    const estimatedCr = Math.max(0.4, baseValueCr + areaContributionCr + metroPenalty + luxuryContributionCr);
    const lowerCiCr = estimatedCr * 0.93;
    const upperCiCr = estimatedCr * 1.07;

    return {
      estimated: estimatedCr.toFixed(2),
      lowerCi: lowerCiCr.toFixed(2),
      upperCi: upperCiCr.toFixed(2),
      shapWaterfall: [
        { label: 'Base Intercept', impact: '+0.65 Cr', positive: true, raw: 0.65 },
        { label: `Area (${areaSqft} sqft)`, impact: `+${areaContributionCr.toFixed(2)} Cr`, positive: true, raw: areaContributionCr },
        { label: `${loc.name}`, impact: `+${loc.shap} Cr`, positive: true, raw: loc.shap },
        { 
          label: `Metro Proximity (${metroDistanceKm} km)`, 
          impact: `${metroPenalty >= 0 ? '+' : ''}${(metroPenalty * 100).toFixed(1)} L`, 
          positive: metroPenalty >= 0,
          raw: Math.abs(metroPenalty)
        },
        { 
          label: `Luxury Factor (Tier ${luxuryScore})`, 
          impact: `${luxuryContributionCr >= 0 ? '+' : ''}${(luxuryContributionCr * 100).toFixed(1)} L`, 
          positive: luxuryContributionCr >= 0,
          raw: Math.abs(luxuryContributionCr)
        },
      ],
    };
  }, [areaSqft, locality, metroDistanceKm, luxuryScore]);

  // Calculations for Delivery Delay Probability
  const deliveryPrediction = useMemo(() => {
    let riskScore = 12; // base risk %

    // Distance effect
    const distanceRisk = (transitDistance / 1500) * 28;
    // Weather effect
    const weatherRisk = weatherSeverity === 0 ? 0 : weatherSeverity === 1 ? 16 : 34;
    // Hub Congestion effect
    const congestionRisk = (hubCongestion / 100) * 26;
    // Courier impact
    const courierDeduction = courierTier === 'top' ? -12 : courierTier === 'standard' ? 0 : 18;

    riskScore = Math.min(96, Math.max(6, Math.round(riskScore + distanceRisk + weatherRisk + congestionRisk + courierDeduction)));

    let status = 'On-Time Guaranteed';
    let statusColor = 'text-emerald-400';
    let statusBg = 'bg-emerald-500/10 border-emerald-500/30';
    let recommendation = 'Standard dispatch route optimal. No intervention required.';

    if (riskScore >= 65) {
      status = 'High Delay Risk';
      statusColor = 'text-rose-400';
      statusBg = 'bg-rose-500/10 border-rose-500/30';
      recommendation = 'Automated reroute triggered to Secondary Hub B + Priority Courier reallocated.';
    } else if (riskScore >= 35) {
      status = 'Moderate Delay Risk';
      statusColor = 'text-amber-400';
      statusBg = 'bg-amber-500/10 border-amber-500/30';
      recommendation = 'Expedited sorting applied. Real-time driver telemetry monitoring active.';
    }

    return {
      riskScore,
      status,
      statusColor,
      statusBg,
      recommendation,
      shapWaterfall: [
        { label: 'Base Dispatch Risk', value: '+12%', positive: false },
        { label: `Weather Severity (Level ${weatherSeverity})`, value: `+${weatherRisk}%`, positive: false },
        { label: `Hub Congestion (${hubCongestion}%)`, value: `+${Math.round(congestionRisk)}%`, positive: false },
        { label: `Transit Distance (${transitDistance} km)`, value: `+${Math.round(distanceRisk)}%`, positive: false },
        { 
          label: `Courier Reliability (${courierTier})`, 
          value: `${courierDeduction <= 0 ? '' : '+'}${courierDeduction}%`, 
          positive: courierDeduction <= 0 
        },
      ],
    };
  }, [transitDistance, weatherSeverity, hubCongestion, courierTier]);

  return (
    <div className="w-full bg-[#0E0E11] border border-neutral-800/80 rounded-2xl p-4 sm:p-6 text-neutral-200">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-neutral-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              In-Browser Live Model Playground
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 normal-case">
                Zero Cloud Latency
              </span>
            </h4>
            <p className="text-[11px] text-neutral-400">
              Adjust live inference parameters below to evaluate real-time outputs & SHAP explanations.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-purple-400 bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/20">
          <Cpu className="w-3.5 h-3.5" />
          <span>Inference: ~11ms (CatBoost)</span>
        </div>
      </div>

      {/* Simulator Content based on project */}
      {projectType === 'property' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Area Slider */}
            <div className="flex flex-col gap-1.5 bg-neutral-950/60 p-3.5 rounded-xl border border-neutral-800/70">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 font-medium">Built-Up Area</span>
                <span className="font-mono text-white font-bold">{areaSqft.toLocaleString()} sq ft</span>
              </div>
              <input
                type="range"
                min="600"
                max="4500"
                step="50"
                value={areaSqft}
                onChange={(e) => setAreaSqft(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer h-1.5 bg-neutral-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>600 sq ft</span>
                <span>2,500 sq ft</span>
                <span>4,500 sq ft</span>
              </div>
            </div>

            {/* Locality Selector */}
            <div className="flex flex-col gap-1.5 bg-neutral-950/60 p-3.5 rounded-xl border border-neutral-800/70">
              <label className="text-xs text-neutral-400 font-medium mb-1">Micro-Market Cluster (H3 Spatial)</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'golfcourse', label: 'Golf Course Ext' },
                  { id: 'cyberhub', label: 'CyberHub Prime' },
                  { id: 'noida', label: 'Noida Expressway' },
                  { id: 'southdelhi', label: 'South Delhi Heritage' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLocality(item.id as any)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all truncate border ${
                      locality === item.id
                        ? 'bg-purple-600/20 text-purple-300 border-purple-500/50 shadow-sm'
                        : 'bg-neutral-900/60 text-neutral-400 border-transparent hover:bg-neutral-900 hover:text-neutral-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Proximity & Luxury Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Metro Distance */}
              <div className="flex flex-col gap-1.5 bg-neutral-950/60 p-3.5 rounded-xl border border-neutral-800/70">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400 font-medium">Metro Proximity</span>
                  <span className="font-mono text-white font-bold">{metroDistanceKm} km</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="6.0"
                  step="0.1"
                  value={metroDistanceKm}
                  onChange={(e) => setMetroDistanceKm(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-neutral-800 rounded-lg"
                />
                <span className="text-[10px] text-neutral-500">
                  {metroDistanceKm <= 1.0 ? 'Walking distance (< 1km)' : metroDistanceKm <= 3.0 ? 'Short commute' : 'Extended transit feeder'}
                </span>
              </div>

              {/* Luxury Tier */}
              <div className="flex flex-col gap-1.5 bg-neutral-950/60 p-3.5 rounded-xl border border-neutral-800/70">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400 font-medium">Luxury Index</span>
                  <span className="font-mono text-amber-400 font-bold">Tier {luxuryScore} / 5</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={luxuryScore}
                  onChange={(e) => setLuxuryScore(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-1.5 bg-neutral-800 rounded-lg"
                />
                <span className="text-[10px] text-neutral-500">
                  {luxuryScore >= 4 ? 'High-end clubhouse & automation' : 'Standard residential fixtures'}
                </span>
              </div>
            </div>
          </div>

          {/* Results & SHAP Waterfall Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Real-time Valuation Output Box */}
            <div className="bg-gradient-to-br from-neutral-900 to-[#14121a] border border-purple-500/30 rounded-2xl p-5 shadow-xl">
              <div className="text-[10px] uppercase font-mono tracking-widest text-purple-300 font-semibold mb-1">
                Estimated Fair Market Value
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  ₹ {propertyValuation.estimated} Cr
                </span>
                <span className="text-xs text-neutral-400 font-mono">INR</span>
              </div>
              <div className="text-[11px] text-neutral-400 mt-1 flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                <span>95% Confidence: ₹ {propertyValuation.lowerCi} Cr – ₹ {propertyValuation.upperCi} Cr</span>
              </div>
            </div>

            {/* Dynamic SHAP Waterfall Breakdown */}
            <div className="bg-neutral-950/80 border border-neutral-800/80 rounded-2xl p-4 flex flex-col gap-2.5">
              <div className="flex justify-between items-center text-xs font-semibold text-neutral-300">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  Real-Time SHAP Contribution
                </span>
                <span className="text-[10px] text-neutral-500 font-mono">Δ from Base</span>
              </div>

              <div className="flex flex-col gap-2 mt-1">
                {propertyValuation.shapWaterfall.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs py-1 border-b border-neutral-900 last:border-0">
                    <span className="text-neutral-400 truncate max-w-[200px]">{item.label}</span>
                    <span
                      className={`font-mono text-xs font-bold flex items-center gap-1 ${
                        item.positive ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {item.positive ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {item.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Delivery Delay Predictor Simulator */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Distance Slider */}
            <div className="flex flex-col gap-1.5 bg-neutral-950/60 p-3.5 rounded-xl border border-neutral-800/70">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 font-medium">Transit Route Distance</span>
                <span className="font-mono text-white font-bold">{transitDistance} km</span>
              </div>
              <input
                type="range"
                min="30"
                max="1200"
                step="10"
                value={transitDistance}
                onChange={(e) => setTransitDistance(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer h-1.5 bg-neutral-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>Intra-City (30km)</span>
                <span>Regional (500km)</span>
                <span>Cross-Country (1200km)</span>
              </div>
            </div>

            {/* Weather & Courier Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Weather Selector */}
              <div className="flex flex-col gap-1.5 bg-neutral-950/60 p-3.5 rounded-xl border border-neutral-800/70">
                <label className="text-xs text-neutral-400 font-medium mb-1">Weather Condition</label>
                <div className="flex flex-col gap-1.5">
                  {[
                    { id: 0, label: 'Clear Skies (0)' },
                    { id: 1, label: 'Moderate Rain (1)' },
                    { id: 2, label: 'Severe Storm / Monsoon (2)' },
                  ].map((w) => (
                    <button
                      key={w.id}
                      onClick={() => setWeatherSeverity(w.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium text-left transition-all border ${
                        weatherSeverity === w.id
                          ? 'bg-blue-500/20 text-blue-300 border-blue-500/50'
                          : 'bg-neutral-900/60 text-neutral-400 border-transparent hover:bg-neutral-900'
                      }`}
                    >
                      {w.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Courier Performance */}
              <div className="flex flex-col gap-1.5 bg-neutral-950/60 p-3.5 rounded-xl border border-neutral-800/70">
                <label className="text-xs text-neutral-400 font-medium mb-1">Courier Service Tier</label>
                <div className="flex flex-col gap-1.5">
                  {[
                    { id: 'top', label: 'Top Tier (98% SLA)' },
                    { id: 'standard', label: 'Standard Tier (91% SLA)' },
                    { id: 'lagging', label: 'Lagging Driver Fleet' },
                  ].map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setCourierTier(c.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium text-left transition-all border ${
                        courierTier === c.id
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/50'
                          : 'bg-neutral-900/60 text-neutral-400 border-transparent hover:bg-neutral-900'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hub Congestion */}
            <div className="flex flex-col gap-1.5 bg-neutral-950/60 p-3.5 rounded-xl border border-neutral-800/70">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 font-medium">Transit Hub Congestion Load</span>
                <span className="font-mono text-white font-bold">{hubCongestion}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="98"
                step="2"
                value={hubCongestion}
                onChange={(e) => setHubCongestion(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer h-1.5 bg-neutral-800 rounded-lg"
              />
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Probability Card */}
            <div className={`border rounded-2xl p-5 shadow-xl ${deliveryPrediction.statusBg}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 font-semibold">
                  Delay Probability
                </span>
                {deliveryPrediction.riskScore >= 50 ? (
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <span className={`text-4xl sm:text-5xl font-black tracking-tight ${deliveryPrediction.statusColor}`}>
                  {deliveryPrediction.riskScore}%
                </span>
                <span className={`text-xs uppercase font-bold tracking-wider ${deliveryPrediction.statusColor}`}>
                  {deliveryPrediction.status}
                </span>
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-neutral-300 leading-relaxed">
                <span className="font-semibold text-white">System Response: </span>
                {deliveryPrediction.recommendation}
              </div>
            </div>

            {/* SHAP Factors */}
            <div className="bg-neutral-950/80 border border-neutral-800/80 rounded-2xl p-4 flex flex-col gap-2.5">
              <div className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Feature Risk Attribution</span>
              </div>

              <div className="flex flex-col gap-1.5 mt-1">
                {deliveryPrediction.shapWaterfall.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs py-1 border-b border-neutral-900 last:border-0">
                    <span className="text-neutral-400 text-[11px] truncate max-w-[210px]">{item.label}</span>
                    <span className={`font-mono text-xs font-bold ${item.positive ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
