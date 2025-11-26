import { motion } from "framer-motion";
import { CITY_CONFIG, CityId } from "./footerConfig";

interface MapCardProps {
  activeCity: CityId;
  onCityChange: (city: CityId) => void;
}

const MapCard = ({ activeCity, onCityChange }: MapCardProps) => {
  const city = CITY_CONFIG[activeCity];

  return (
    <div className="flex items-center justify-center mb-5">
      <div className="w-full max-w-md rounded-3xl border border-gray-800 bg-black/50 p-5 shadow-[0_22px_80px_rgba(0,0,0,0.9)] backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
            Studio Map
          </div>
          <div className="inline-flex rounded-full bg-black/60 border border-gray-800 p-1 text-[11px] uppercase tracking-[0.2em]">
            <button
              type="button"
              onClick={() => onCityChange("tokyo")}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeCity === "tokyo"
                  ? "bg-gray-100 text-black"
                  : "text-gray-400"
              }`}
            >
              Tokyo
            </button>
            <button
              type="button"
              onClick={() => onCityChange("newyork")}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeCity === "newyork"
                  ? "bg-gray-100 text-black"
                  : "text-gray-400"
              }`}
            >
              New York
            </button>
          </div>
        </div>

        <div className="relative mb-4 h-56 md:h-72 w-full overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_center,_#020617,_#020617)]">
          <div className="absolute inset-0 opacity-[0.25]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px)] bg-[length:18px_18px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.85),transparent_40%,rgba(15,23,42,0.9))]" />
          </div>

          <div className="absolute inset-0 mix-blend-screen opacity-40 bg-[radial-gradient(circle_at_20%_40%,rgba(148,163,184,0.4),transparent_55%),radial-gradient(circle_at_70%_35%,rgba(148,163,184,0.35),transparent_55%)]" />

          <motion.div
            className="absolute h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.9)]"
            animate={city.markerPosition}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <span className="absolute inset-[-6px] rounded-full border border-emerald-400/40 opacity-60" />
          </motion.div>

          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.9)] pointer-events-none" />
        </div>

        <div className="space-y-1 text-xs text-gray-400">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-1">
              Current focus
            </div>
            <p className="text-gray-200">{city.name}</p>
            <p className="text-[11px] text-gray-500">{city.timezone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
