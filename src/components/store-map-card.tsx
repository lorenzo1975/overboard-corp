'use client';

import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

interface StoreMapCardProps {
  name: string;
  location: string;
  fact: string;
  lat: number;
  lng: number;
  mapUrl?: string;
}

// Minimalist map themes inspired by maptoposter
const themes = {
  midnight: {
    bg: '#0f172a',
    water: '#1e3a5f',
    land: '#1e293b',
    roads: '#475569',
    roadsMajor: '#64748b',
    parks: '#166534',
    blocks: '#334155',
    text: '#f8fafc',
    textMuted: '#94a3b8',
    marker: '#f59e0b',
  },
  ocean: {
    bg: '#0c4a6e',
    water: '#0369a1',
    land: '#075985',
    roads: '#38bdf8',
    roadsMajor: '#7dd3fc',
    parks: '#166534',
    blocks: '#0284c7',
    text: '#f0f9ff',
    textMuted: '#7dd3fc',
    marker: '#fbbf24',
  },
  noir: {
    bg: '#0a0a0a',
    water: '#1c1c1c',
    land: '#171717',
    roads: '#404040',
    roadsMajor: '#525252',
    parks: '#1a2e1a',
    blocks: '#262626',
    text: '#fafafa',
    textMuted: '#a1a1aa',
    marker: '#ffffff',
  },
  warm: {
    bg: '#451a03',
    water: '#78350f',
    land: '#7c2d12',
    roads: '#fdba74',
    roadsMajor: '#fed7aa',
    parks: '#365314',
    blocks: '#9a3412',
    text: '#fff7ed',
    textMuted: '#fdba74',
    marker: '#fef3c7',
  },
  forest: {
    bg: '#14532d',
    water: '#1e3a5f',
    land: '#166534',
    roads: '#86efac',
    roadsMajor: '#bbf7d0',
    parks: '#15803d',
    blocks: '#15803d',
    text: '#f0fdf4',
    textMuted: '#bbf7d0',
    marker: '#fbbf24',
  },
  slate: {
    bg: '#1e293b',
    water: '#334155',
    land: '#334155',
    roads: '#94a3b8',
    roadsMajor: '#cbd5e1',
    parks: '#365314',
    blocks: '#475569',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    marker: '#f59e0b',
  },
};

// Get a consistent theme based on store name
function getThemeForStore(name: string): keyof typeof themes {
  const themeKeys = Object.keys(themes) as (keyof typeof themes)[];
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return themeKeys[hash % themeKeys.length];
}

// Seeded random number generator for consistent patterns
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate a more realistic map pattern based on coordinates
function generateMapFeatures(lat: number, lng: number) {
  const seed = Math.floor(lat * 1000 + lng * 100);
  
  // Determine if this is a coastal location (all Thailand stores are coastal)
  const isCoastal = true;
  const coastSide = seededRandom(seed) > 0.5 ? 'right' : 'bottom';
  
  // Generate city blocks
  const blocks: { x: number; y: number; w: number; h: number; r: number }[] = [];
  const gridSize = 12;
  const blockPadding = 2;
  
  for (let gx = 0; gx < 8; gx++) {
    for (let gy = 0; gy < 7; gy++) {
      // Skip blocks in water area
      if (isCoastal) {
        if (coastSide === 'right' && gx > 5) continue;
        if (coastSide === 'bottom' && gy > 4) continue;
      }
      
      const variation = seededRandom(seed + gx * 10 + gy) * 3;
      const skipChance = seededRandom(seed + gx + gy * 100);
      
      // Randomly skip some blocks to create variety
      if (skipChance > 0.85) continue;
      
      blocks.push({
        x: gx * gridSize + blockPadding + variation,
        y: gy * gridSize + 8 + blockPadding + variation,
        w: gridSize - blockPadding * 2 - seededRandom(seed + gx * gy) * 2,
        h: gridSize - blockPadding * 2 - seededRandom(seed + gx + gy) * 2,
        r: 1,
      });
    }
  }
  
  // Generate main roads (grid pattern with some variation)
  const roads: { d: string; width: number; major: boolean }[] = [];
  
  // Horizontal main roads
  for (let i = 0; i < 6; i++) {
    const y = 8 + i * gridSize + seededRandom(seed + i * 7) * 2;
    const isMajor = i === 2 || i === 4;
    const curve = seededRandom(seed + i * 13) * 4 - 2;
    roads.push({
      d: `M 0 ${y} Q 50 ${y + curve} 100 ${y}`,
      width: isMajor ? 2.5 : 1.2,
      major: isMajor,
    });
  }
  
  // Vertical main roads
  for (let i = 0; i < 7; i++) {
    const x = i * gridSize + seededRandom(seed + i * 11) * 2;
    const isMajor = i === 2 || i === 5;
    
    // Stop roads at water
    let endY = 100;
    if (isCoastal && coastSide === 'bottom') {
      endY = 65 + seededRandom(seed + i) * 10;
    }
    
    const curve = seededRandom(seed + i * 17) * 4 - 2;
    roads.push({
      d: `M ${x} 8 Q ${x + curve} ${endY / 2} ${x} ${endY}`,
      width: isMajor ? 2.5 : 1.2,
      major: isMajor,
    });
  }
  
  // Add some diagonal/curved secondary roads
  for (let i = 0; i < 3; i++) {
    const startX = seededRandom(seed + i * 23) * 40 + 10;
    const startY = seededRandom(seed + i * 29) * 30 + 15;
    const endX = startX + seededRandom(seed + i * 31) * 30 + 20;
    const endY = startY + seededRandom(seed + i * 37) * 25 + 15;
    const ctrlX = (startX + endX) / 2 + seededRandom(seed + i * 41) * 15 - 7.5;
    const ctrlY = (startY + endY) / 2 + seededRandom(seed + i * 43) * 15 - 7.5;
    
    roads.push({
      d: `M ${startX} ${startY} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`,
      width: 0.8,
      major: false,
    });
  }
  
  // Generate water shape for coastal areas
  let waterPath = '';
  if (isCoastal) {
    if (coastSide === 'right') {
      // Water on the right side with organic coastline
      const points: string[] = [];
      points.push('M 70 0');
      for (let y = 0; y <= 100; y += 10) {
        const x = 70 + seededRandom(seed + y) * 15 - 5;
        points.push(`L ${x} ${y}`);
      }
      points.push('L 100 100 L 100 0 Z');
      waterPath = points.join(' ');
    } else {
      // Water on the bottom with organic coastline
      const points: string[] = [];
      points.push('M 0 65');
      for (let x = 0; x <= 100; x += 10) {
        const y = 65 + seededRandom(seed + x) * 15 - 3;
        points.push(`L ${x} ${y}`);
      }
      points.push('L 100 100 L 0 100 Z');
      waterPath = points.join(' ');
    }
  }
  
  // Generate park areas
  const parks: { cx: number; cy: number; rx: number; ry: number }[] = [];
  const numParks = Math.floor(seededRandom(seed * 3) * 2) + 1;
  for (let i = 0; i < numParks; i++) {
    let cx = seededRandom(seed + i * 53) * 50 + 10;
    let cy = seededRandom(seed + i * 59) * 40 + 15;
    
    // Make sure parks aren't in water
    if (isCoastal && coastSide === 'right' && cx > 60) cx = 40;
    if (isCoastal && coastSide === 'bottom' && cy > 55) cy = 35;
    
    parks.push({
      cx,
      cy,
      rx: seededRandom(seed + i * 61) * 5 + 4,
      ry: seededRandom(seed + i * 67) * 5 + 4,
    });
  }
  
  return { blocks, roads, waterPath, parks, coastSide };
}

// Format coordinates like maptoposter
function formatCoordinates(lat: number, lng: number): string {
  const latDir = lat >= 0 ? 'N' : 'S';
  const lngDir = lng >= 0 ? 'E' : 'W';
  return `${Math.abs(lat).toFixed(3)}° ${latDir}  ${Math.abs(lng).toFixed(3)}° ${lngDir}`;
}

export function StoreMapCard({ name, location, fact, lat, lng, mapUrl }: StoreMapCardProps) {
  const themeName = getThemeForStore(name);
  const theme = themes[themeName];
  const { blocks, roads, waterPath, parks } = generateMapFeatures(lat, lng);
  const coordinates = formatCoordinates(lat, lng);
  
  // Marker position (center area)
  const markerX = 35 + (lat % 1) * 15;
  const markerY = 38 + (lng % 1) * 10;

  return (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      {/* Map Visualization */}
      <div className="relative h-56 w-full overflow-hidden" style={{ backgroundColor: theme.bg }}>
        {/* SVG Map */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          {/* Base land color */}
          <rect x="0" y="0" width="100" height="100" fill={theme.land} />
          
          {/* Water body */}
          {waterPath && (
            <path d={waterPath} fill={theme.water} className="transition-opacity duration-300" />
          )}
          
          {/* Parks */}
          {parks.map((park, i) => (
            <ellipse
              key={`park-${i}`}
              cx={park.cx}
              cy={park.cy}
              rx={park.rx}
              ry={park.ry}
              fill={theme.parks}
              opacity="0.6"
            />
          ))}
          
          {/* City blocks */}
          {blocks.map((block, i) => (
            <rect
              key={`block-${i}`}
              x={block.x}
              y={block.y}
              width={block.w}
              height={block.h}
              rx={block.r}
              fill={theme.blocks}
              className="transition-opacity duration-300 group-hover:opacity-90"
            />
          ))}
          
          {/* Roads - minor first, then major on top */}
          {roads
            .filter((r) => !r.major)
            .map((road, i) => (
              <path
                key={`road-minor-${i}`}
                d={road.d}
                stroke={theme.roads}
                strokeWidth={road.width}
                strokeLinecap="round"
                fill="none"
                className="transition-opacity duration-300"
              />
            ))}
          {roads
            .filter((r) => r.major)
            .map((road, i) => (
              <path
                key={`road-major-${i}`}
                d={road.d}
                stroke={theme.roadsMajor}
                strokeWidth={road.width}
                strokeLinecap="round"
                fill="none"
                className="transition-opacity duration-300"
              />
            ))}
          
          {/* Location marker glow effect */}
          <circle
            cx={markerX}
            cy={markerY}
            r="10"
            fill={theme.marker}
            opacity="0.15"
            className="animate-ping"
          />
          <circle
            cx={markerX}
            cy={markerY}
            r="6"
            fill={theme.marker}
            opacity="0.3"
          />
          <circle
            cx={markerX}
            cy={markerY}
            r="3"
            fill={theme.marker}
            opacity="0.5"
          />
        </svg>
        
        {/* Gradient overlays for poster effect */}
        <div 
          className="pointer-events-none absolute inset-x-0 top-0 h-12"
          style={{
            background: `linear-gradient(to bottom, ${theme.bg}, transparent)`,
          }}
        />
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
          style={{
            background: `linear-gradient(to top, ${theme.bg}, transparent)`,
          }}
        />
        
        {/* Map Pin */}
        <div 
          className="absolute transition-transform duration-300 group-hover:scale-110"
          style={{
            left: `${markerX}%`,
            top: `${markerY}%`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div className="relative">
            <MapPin
              className="h-8 w-8 drop-shadow-lg filter"
              style={{ color: theme.marker }}
              fill={theme.marker}
              strokeWidth={1.5}
            />
            {/* Inner dot on marker */}
            <div 
              className="absolute top-[7px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
              style={{ backgroundColor: theme.bg }}
            />
          </div>
        </div>
        
        {/* Coordinates */}
        <div 
          className="absolute bottom-3 left-0 right-0 text-center font-mono text-[10px] tracking-[0.15em]"
          style={{ color: theme.textMuted }}
        >
          {coordinates}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold leading-tight">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{location}</p>
        <Badge 
          variant="outline" 
          className="mt-2" 
          style={{ borderColor: 'hsl(var(--accent))', color: 'hsl(var(--accent))' }}
        >
          {fact}
        </Badge>
      </div>
    </a>
  );
}
