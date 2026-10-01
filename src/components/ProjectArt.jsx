import {
  Bot,
  Check,
  Database,
  FileText,
  LockKeyhole,
  Workflow,
} from "lucide-react";

function Pipeline() {
  return (
    <div className="pipeline-art">
      <div className="diagram-label">INPUT → INTELLIGENCE → IMPACT</div>
      <div className="pipeline-nodes">
        <div className="diagram-node">
          <FileText size={24} />
          <span>Resumes</span>
        </div>
        <div className="diagram-connector">
          <i />
        </div>
        <div className="diagram-node central-node">
          <Bot size={32} />
          <span>AI agents</span>
        </div>
        <div className="diagram-connector">
          <i />
        </div>
        <div className="diagram-node">
          <Check size={24} />
          <span>Insights</span>
        </div>
      </div>
      <div className="diagram-bottom">
        <span className="live-dot" /> Structured. Evaluated. Connected.
      </div>
    </div>
  );
}
function Neural() {
  return (
    <div className="neural-art">
      <div className="diagram-label">
        LOCAL INTELLIGENCE. PRIVATE BY DESIGN.
      </div>
      <svg viewBox="0 0 360 170" aria-hidden="true">
        <g className="neural-lines">
          {[40, 80, 120].flatMap((y, i) =>
            [24, 64, 104, 144].map((y2, j) => (
              <path key={`a${i}${j}`} d={`M90 ${y} L180 ${y2}`} />
            )),
          )}
          {[24, 64, 104, 144].flatMap((y, i) =>
            [40, 80, 120].map((y2, j) => (
              <path key={`b${i}${j}`} d={`M180 ${y} L270 ${y2}`} />
            )),
          )}
        </g>
        {[
          [90, [40, 80, 120]],
          [180, [24, 64, 104, 144]],
          [270, [40, 80, 120]],
        ].flatMap(([x, ys]) =>
          ys.map((y) => (
            <g key={`${x}${y}`}>
              <circle className="neural-glow" cx={x} cy={y} r="16" />
              <circle className="neural-node" cx={x} cy={y} r="5" />
            </g>
          )),
        )}
      </svg>
      <div className="diagram-bottom">
        <LockKeyhole size={12} /> Llama 3 · Fine-tuned for context
      </div>
    </div>
  );
}
function DataMap() {
  return (
    <div className="data-art">
      <div className="diagram-label">LOS ANGELES / HOUSING DATA</div>
      <div className="data-map" aria-hidden="true">
        {Array.from({ length: 77 }, (_, i) => (
          <span
            key={i}
            style={{
              "--cell-opacity": (((i * 17) % 11) + 1) / 12,
              "--cell-delay": `${(i % 7) * 0.18}s`,
            }}
          />
        ))}
      </div>
      <div className="map-stat">
        <Database size={14} />
        <span>
          25K+<small>RECORDS ENRICHED</small>
        </span>
      </div>
      <div className="diagram-bottom">
        <span className="live-dot" /> From fragmented data to clearer insights
      </div>
    </div>
  );
}
function Drone() {
  return (
    <div className="drone-art">
      <div className="diagram-label">MISSION → VALIDATION → FLIGHT</div>
      <svg viewBox="0 0 360 180" aria-hidden="true">
        <g className="flight-grid">
          {[30, 60, 90, 120, 150].map((y) => (
            <path key={y} d={`M30 ${y}H330`} />
          ))}
          {[60, 100, 140, 180, 220, 260, 300].map((x) => (
            <path key={x} d={`M${x} 15V165`} />
          ))}
        </g>
        <ellipse
          cx="180"
          cy="132"
          rx="110"
          ry="23"
          className="flight-boundary"
        />
        <g className="drone-body">
          <path d="M160 72L128 44M200 72L232 44M160 93L128 121M200 93L232 121" />
          {[
            [124, 40],
            [236, 40],
            [124, 125],
            [236, 125],
          ].map(([x, y]) => (
            <g key={`${x}${y}`}>
              <ellipse cx={x} cy={y} rx="26" ry="9" />
              <circle cx={x} cy={y} r="3" />
            </g>
          ))}
          <rect x="157" y="65" width="46" height="34" rx="10" />
          <path d="M172 78H188M180 71V90" />
        </g>
        <path className="flight-path" d="M70 138Q180 98 280 143" />
      </svg>
      <div className="diagram-bottom">
        <span className="live-dot" /> Simulated flight. Layered safety.
      </div>
    </div>
  );
}
function Radar() {
  return (
    <div className="radar-art">
      <div className="diagram-label">SENSE → DETECT → RECOVER</div>
      <div className="radar-screen">
        <div className="radar-sweep" />
        <i className="radar-dot radar-dot-one" />
        <i className="radar-dot radar-dot-two" />
        <span className="radar-center" />
      </div>
      <span className="radar-label radar-label-one">GPS</span>
      <span className="radar-label radar-label-two">IMU</span>
      <div className="diagram-bottom">
        <span className="live-dot" /> Residual-based anomaly monitoring
      </div>
    </div>
  );
}
function Road() {
  return (
    <div className="road-art">
      <div className="diagram-label">PREDICT → ADAPT → FOLLOW</div>
      <svg viewBox="0 0 360 180" aria-hidden="true">
        <path className="road-line" d="M100 180L155 10M260 180L205 10" />
        <path className="road-dash" d="M180 180V10" />
        <path className="road-boundary" d="M65 180L143 10M295 180L217 10" />
        <rect
          className="lead-car"
          x="183"
          y="35"
          width="23"
          height="38"
          rx="7"
        />
        <path className="follow-beam" d="M125 144L180 78L220 144Z" />
        <rect
          className="follow-car"
          x="151"
          y="113"
          width="36"
          height="55"
          rx="10"
        />
        <path className="car-window" d="M157 128H181M157 153H181" />
        <path
          className="distance-line"
          d="M235 48V140M230 48H240M230 140H240"
        />
      </svg>
      <div className="diagram-bottom">
        <span className="live-dot" /> PID + LSTM · CARLA simulation
      </div>
    </div>
  );
}

export default function ProjectArt({ type }) {
  const components = {
    pipeline: Pipeline,
    neural: Neural,
    data: DataMap,
    drone: Drone,
    radar: Radar,
    road: Road,
  };
  const Art = components[type] || Workflow;
  return (
    <div className={`project-art art-${type}`} aria-hidden="true">
      <Art />
    </div>
  );
}
