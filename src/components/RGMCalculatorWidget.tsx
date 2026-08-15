import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, BarChart2, RefreshCw, Info, HelpCircle } from 'lucide-react';

export const RGMCalculatorWidget: React.FC = () => {
  // Simulator State Parameters
  const [basePrice, setBasePrice] = useState<number>(10.00);
  const [priceChangePct, setPriceChangePct] = useState<number>(5.0); // +5% price increase
  const [ownElasticity, setOwnElasticity] = useState<number>(-1.2); // Demand decreases 1.2% per 1% price increase
  const [baseVolume, setBaseVolume] = useState<number>(100000); // 100k units/mo
  const [cogsPerUnit, setCogsPerUnit] = useState<number>(5.50);
  const [tradeSpendPct, setTradeSpendPct] = useState<number>(12.0); // 12% trade discount

  // Reset to default presets
  const handleReset = () => {
    setBasePrice(10.00);
    setPriceChangePct(5.0);
    setOwnElasticity(-1.2);
    setBaseVolume(100000);
    setCogsPerUnit(5.50);
    setTradeSpendPct(12.0);
  };

  // Mathematical Simulation Logic
  const newPrice = basePrice * (1 + priceChangePct / 100);
  // Volume change % = Elasticity * Price Change %
  const volumeChangePct = ownElasticity * priceChangePct;
  const simulatedVolume = Math.max(0, baseVolume * (1 + volumeChangePct / 100));

  // Revenue calculations
  const baseGrossRevenue = baseVolume * basePrice;
  const baseNetRevenue = baseGrossRevenue * (1 - tradeSpendPct / 100);
  const baseTotalCost = baseVolume * cogsPerUnit;
  const baseGrossProfit = baseNetRevenue - baseTotalCost;

  const simGrossRevenue = simulatedVolume * newPrice;
  const simNetRevenue = simGrossRevenue * (1 - tradeSpendPct / 100);
  const simTotalCost = simulatedVolume * cogsPerUnit;
  const simGrossProfit = simNetRevenue - simTotalCost;

  const profitImpact = simGrossProfit - baseGrossProfit;
  const revenueImpactPct = baseNetRevenue > 0 ? ((simNetRevenue - baseNetRevenue) / baseNetRevenue) * 100 : 0;
  const baseMarginPct = baseNetRevenue > 0 ? (baseGrossProfit / baseNetRevenue) * 100 : 0;
  const simMarginPct = simNetRevenue > 0 ? (simGrossProfit / simNetRevenue) * 100 : 0;
  const simBarWidthPct = baseGrossProfit > 0 ? Math.min(150, Math.max(10, (simGrossProfit / baseGrossProfit) * 100)) : 10;

  return (
    <section id="simulator" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Demo: MAZ Revenue Growth Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Price Elasticity & RGM Scenario Simulator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Test "What-If" commercial scenarios. This interactive widget models how unit pricing, price elasticity curves, COGS, and trade spend impact bottom-line profit—reflecting Ketan's cloud RGM product built for AB-InBev and PepsiCo.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Control Sliders & Inputs */}
          <div className="lg:col-span-5 bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Simulation Parameters</span>
              </h3>
              <button
                onClick={handleReset}
                className="text-xs font-medium text-slate-400 hover:text-blue-400 flex items-center gap-1 transition-colors"
                id="reset-simulator-btn"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>

            {/* Slider 1: Proposed Price Adjustment % */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <label className="font-semibold text-slate-300 flex items-center gap-1">
                  <span>Price Change %</span>
                  <span className="text-slate-500" title="Proposed percentage change in base unit selling price">( $\Delta P$ )</span>
                </label>
                <span className={`font-mono font-bold ${priceChangePct >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {priceChangePct > 0 ? `+${priceChangePct.toFixed(1)}%` : `${priceChangePct.toFixed(1)}%`}
                </span>
              </div>
              <input
                type="range"
                min="-20"
                max="30"
                step="0.5"
                value={priceChangePct}
                onChange={(e) => setPriceChangePct(parseFloat(e.target.value))}
                className="w-full accent-blue-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                id="slider-price-change"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>-20% (Discount)</span>
                <span>0%</span>
                <span>+30% (Price Increase)</span>
              </div>
            </div>

            {/* Slider 2: Own Price Elasticity */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <label className="font-semibold text-slate-300">
                  Own-Price Elasticity ( ε-own )
                </label>
                <span className="font-mono font-bold text-amber-400">
                  {ownElasticity.toFixed(1)}
                </span>
              </div>
              <input
                type="range"
                min="-3.0"
                max="-0.1"
                step="0.1"
                value={ownElasticity}
                onChange={(e) => setOwnElasticity(parseFloat(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                id="slider-elasticity"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>-3.0 (Highly Sensitive)</span>
                <span>-1.0 (Unitary)</span>
                <span>-0.1 (Inelastic)</span>
              </div>
            </div>

            {/* Inputs: Base Price & COGS & Base Volume */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-400">Base Unit Price ($)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs">$</span>
                  <input
                    type="number"
                    step="0.5"
                    value={basePrice}
                    onChange={(e) => setBasePrice(Math.max(0.1, parseFloat(e.target.value) || 0))}
                    className="w-full pl-7 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
                    id="input-base-price"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-400">Unit COGS ($)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs">$</span>
                  <input
                    type="number"
                    step="0.25"
                    value={cogsPerUnit}
                    onChange={(e) => setCogsPerUnit(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full pl-7 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
                    id="input-cogs"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-400">Monthly Baseline Vol</label>
                <input
                  type="number"
                  step="5000"
                  value={baseVolume}
                  onChange={(e) => setBaseVolume(Math.max(100, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
                  id="input-base-volume"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-400">Trade Spend / Discount %</label>
                <input
                  type="number"
                  step="1"
                  value={tradeSpendPct}
                  onChange={(e) => setTradeSpendPct(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
                  id="input-trade-spend"
                />
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong>Formula:</strong> Simulated Vol = Base Vol × (1 + Elasticity × ΔPrice%). Profit = Net Revenue - Total COGS.
              </span>
            </div>
          </div>

          {/* Right Column: Simulated P&L Results & Comparison */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Result Card */}
            <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-700">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Simulated Monthly Outcome</p>
                  <h3 className="text-xl font-extrabold text-white">Net Financial Impact</h3>
                </div>

                <div className={`px-4 py-2 rounded-xl text-right ${profitImpact >= 0 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}`}>
                  <p className="text-xs font-medium">Monthly Gross Profit Delta</p>
                  <p className="text-2xl font-black font-mono">
                    {profitImpact >= 0 ? `+$${profitImpact.toLocaleString('en-US', { maximumFractionDigits: 0 })}` : `-$${Math.abs(profitImpact).toLocaleString('en-US', { maximumFractionDigits: 0 })}`}
                  </p>
                </div>
              </div>

              {/* Side by side comparison metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
                
                {/* Metric 1: Simulated Unit Price */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60 space-y-1">
                  <p className="text-xs text-slate-400 font-medium">New Unit Price</p>
                  <p className="text-2xl font-bold font-mono text-white">
                    ${newPrice.toFixed(2)}
                  </p>
                  <p className="text-[11px] text-slate-400">Base: ${basePrice.toFixed(2)}</p>
                </div>

                {/* Metric 2: Simulated Volume Shift */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60 space-y-1">
                  <p className="text-xs text-slate-400 font-medium">Simulated Volume</p>
                  <p className="text-2xl font-bold font-mono text-white">
                    {Math.round(simulatedVolume).toLocaleString()} <span className="text-xs font-normal text-slate-400">units</span>
                  </p>
                  <p className={`text-[11px] font-semibold ${volumeChangePct >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {volumeChangePct >= 0 ? `+${volumeChangePct.toFixed(1)}%` : `${volumeChangePct.toFixed(1)}%`} volume shift
                  </p>
                </div>

                {/* Metric 3: Net Revenue */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60 space-y-1">
                  <p className="text-xs text-slate-400 font-medium">Simulated Net Revenue</p>
                  <p className="text-2xl font-bold font-mono text-blue-400">
                    ${Math.round(simNetRevenue).toLocaleString()}
                  </p>
                  <p className={`text-[11px] font-semibold ${revenueImpactPct >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {revenueImpactPct >= 0 ? `+${revenueImpactPct.toFixed(1)}%` : `${revenueImpactPct.toFixed(1)}%`} Net Revenue
                  </p>
                </div>

              </div>

              {/* Waterfall / Breakdown Bar Visualization */}
              <div className="pt-4 border-t border-slate-700 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300">Gross Margin % Comparison</span>
                  <span className="font-mono text-slate-400">
                    Base: {baseMarginPct.toFixed(1)}% → Sim: {simMarginPct.toFixed(1)}%
                  </span>
                </div>

                <div className="space-y-2">
                  {/* Baseline bar */}
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                      <span>Baseline Profit: ${Math.round(baseGrossProfit).toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden">
                      <div className="bg-slate-500 h-full rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>

                  {/* Simulated bar */}
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                      <span>Simulated Profit: ${Math.round(simGrossProfit).toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-slate-900 h-3 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${simGrossProfit >= baseGrossProfit ? 'bg-gradient-to-r from-blue-500 to-emerald-400' : 'bg-gradient-to-r from-rose-500 to-amber-500'}`}
                        style={{ width: `${simBarWidthPct}%` }}
                      />
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Business Insight Callout */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/50 text-xs text-blue-200 flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-white">Commercial Takeaway from this Simulation:</p>
                <p className="leading-relaxed">
                  {priceChangePct > 0 && ownElasticity > -1.0 && "Because own-price elasticity is inelastic (< 1.0), the price increase generates higher gross revenue and profit despite minor volume drops."}
                  {priceChangePct > 0 && ownElasticity <= -1.0 && "Because demand is elastic (> 1.0), volume drops outpace the price gain. Consider brand laddering or pack size reduction (PPA) to protect margins."}
                  {priceChangePct <= 0 && "Price discounting boosts unit volume, but make sure incremental volume overcomes trade spend costs to avoid margin dilution."}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
