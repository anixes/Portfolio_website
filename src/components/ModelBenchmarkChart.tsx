import React, { useState } from 'react';
import { BarChart2, Award, Zap, HardDrive, Info } from 'lucide-react';

interface BenchmarkModel {
  name: string;
  isChampion: boolean;
  mape: number;       // Lower is better (%)
  latencyMs: number;  // Lower is better (ms)
  memoryMb: number;   // Lower is better (MB)
  notes: string;
}

const benchmarkData: BenchmarkModel[] = [
  {
    name: 'CatBoost (Production)',
    isChampion: true,
    mape: 8.7,
    latencyMs: 14,
    memoryMb: 142,
    notes: 'Ordered target statistics prevent data leakage on spatial clusters; lowest overall test error.',
  },
  {
    name: 'LightGBM',
    isChampion: false,
    mape: 9.4,
    latencyMs: 16,
    memoryMb: 118,
    notes: 'Fastest training speed, but slightly higher variance on skewed luxury property distributions.',
  },
  {
    name: 'XGBoost',
    isChampion: false,
    mape: 9.8,
    latencyMs: 22,
    memoryMb: 165,
    notes: 'Required manual one-hot encoding for high-cardinality pincodes, increasing feature sparsity.',
  },
  {
    name: 'Random Forest (Baseline)',
    isChampion: false,
    mape: 14.6,
    latencyMs: 54,
    memoryMb: 340,
    notes: 'High memory footprint; slow inference on deep trees without gradient boosting optimizations.',
  },
];

export const ModelBenchmarkChart: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'mape' | 'latency' | 'memory'>('mape');

  const metricConfigs = {
    mape: {
      label: 'Test Error (MAPE)',
      unit: '%',
      higherIsBetter: false,
      maxVal: 20,
      description: 'Mean Absolute Percentage Error on out-of-time chronological test split (lower is better).',
    },
    latency: {
      label: 'Inference Latency (p95)',
      unit: 'ms',
      higherIsBetter: false,
      maxVal: 60,
      description: 'Single-thread REST API inference latency on AWS EC2 single vCPU (lower is better).',
    },
    memory: {
      label: 'Memory Footprint',
      unit: 'MB',
      higherIsBetter: false,
      maxVal: 400,
      description: 'Peak container RAM usage per worker during batch inference requests (lower is better).',
    },
  };

  const currentConfig = metricConfigs[activeMetric];

  const getMetricValue = (model: BenchmarkModel) => {
    switch (activeMetric) {
      case 'mape':
        return model.mape;
      case 'latency':
        return model.latencyMs;
      case 'memory':
        return model.memoryMb;
    }
  };

  return (
    <div className="w-full bg-[#0E0E11] border border-neutral-800/80 rounded-2xl p-4 sm:p-6 text-neutral-200">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-neutral-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <BarChart2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Model Evaluation & Benchmarking Matrix
            </h4>
            <p className="text-[11px] text-neutral-400">{currentConfig.description}</p>
          </div>
        </div>

        {/* Metric Toggles */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-950 rounded-xl border border-neutral-800/80 shrink-0">
          <button
            onClick={() => setActiveMetric('mape')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeMetric === 'mape'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>MAPE %</span>
          </button>
          <button
            onClick={() => setActiveMetric('latency')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeMetric === 'latency'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Latency</span>
          </button>
          <button
            onClick={() => setActiveMetric('memory')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeMetric === 'memory'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <HardDrive className="w-3.5 h-3.5" />
            <span>Memory</span>
          </button>
        </div>
      </div>

      {/* Benchmark Bars */}
      <div className="flex flex-col gap-4">
        {benchmarkData.map((model) => {
          const val = getMetricValue(model);
          const barPercent = Math.min(100, Math.round((val / currentConfig.maxVal) * 100));

          return (
            <div
              key={model.name}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                model.isChampion
                  ? 'bg-purple-950/20 border-purple-500/40 shadow-sm'
                  : 'bg-neutral-950/60 border-neutral-800/60'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold ${model.isChampion ? 'text-white' : 'text-neutral-300'}`}>
                    {model.name}
                  </span>
                  {model.isChampion && (
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold">
                      Production Selected
                    </span>
                  )}
                </div>

                <div className="font-mono text-sm font-black text-white">
                  {val} <span className="text-xs text-neutral-400 font-normal">{currentConfig.unit}</span>
                </div>
              </div>

              {/* Bar track */}
              <div className="w-full bg-neutral-900 h-2.5 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    model.isChampion
                      ? 'bg-gradient-to-r from-purple-500 to-emerald-400'
                      : 'bg-neutral-700'
                  }`}
                  style={{ width: `${barPercent}%` }}
                />
              </div>

              <div className="text-[11px] text-neutral-400 flex items-start gap-1.5">
                <span className="text-neutral-500 font-mono text-[10px]">WHY:</span>
                <span>{model.notes}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Production Selection Insight Footer */}
      <div className="mt-5 p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-800 flex items-start gap-2.5 text-xs text-neutral-300">
        <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed text-[11px]">
          <strong className="text-white">Architectural Decision:</strong> CatBoost was chosen over LightGBM & XGBoost due to its native handling of high-cardinality categorical coordinates (Uber H3 geospatial hex indices) and symmetric oblivious trees, which deliver consistent inference speed and zero training-target leakage on production datasets.
        </p>
      </div>
    </div>
  );
};
