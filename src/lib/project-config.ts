import { Box, Cpu, Globe, Layers, Shield, Puzzle, type LucideIcon } from 'lucide-react';

export interface CategoryConfig {
  icon: LucideIcon;
  accent: string;
  glow: string;
  badge: string;
}

export const categoryConfig: Record<string, CategoryConfig> = {
  'AI & Finance':        { icon: Cpu,    accent: 'text-lcars-purple', glow: 'bg-lcars-purple/10', badge: 'bg-lcars-purple/10 text-lcars-purple border-lcars-purple/20' },
  'Security':            { icon: Shield, accent: 'text-lcars-red',    glow: 'bg-lcars-red/10',    badge: 'bg-lcars-red/10 text-lcars-red border-lcars-red/20' },
  'Hardware & Embedded': { icon: Box,    accent: 'text-lcars-gold',   glow: 'bg-lcars-gold/10',   badge: 'bg-lcars-gold/10 text-lcars-gold border-lcars-gold/20' },
  'Web & Apps':          { icon: Globe,  accent: 'text-lcars-cyan',   glow: 'bg-lcars-cyan/10',   badge: 'bg-lcars-cyan/10 text-lcars-cyan border-lcars-cyan/20' },
  'UI Infrastructure':   { icon: Layers, accent: 'text-lcars-orange', glow: 'bg-lcars-orange/10', badge: 'bg-lcars-orange/10 text-lcars-orange border-lcars-orange/20' },
  'Browser Extensions':  { icon: Puzzle, accent: 'text-lcars-green',  glow: 'bg-lcars-green/10',  badge: 'bg-lcars-green/10 text-lcars-green border-lcars-green/20' },
};

export const defaultConfig: CategoryConfig = {
  icon: Globe,
  accent: 'text-white/40',
  glow: 'bg-white/5',
  badge: 'bg-white/5 text-white/40 border-white/10',
};

export const statusConfig: Record<string, string> = {
  'Live':   'bg-lcars-green/10 text-lcars-green border-lcars-green/20',
  'Active': 'bg-lcars-cyan/10 text-lcars-cyan border-lcars-cyan/20',
  'Stable': 'bg-lcars-orange/10 text-lcars-orange border-lcars-orange/20',
  'Early':  'bg-white/5 text-white/30 border-white/10',
};
