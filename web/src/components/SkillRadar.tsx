import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import { radarResumo } from '@/data/competencias'

export function SkillRadar() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarResumo} outerRadius="72%">
          <PolarGrid stroke="var(--color-border)" />
          <PolarAngleAxis
            dataKey="area"
            tick={{ fill: 'var(--color-muted)', fontSize: 12 }}
          />
          <Radar
            dataKey="valor"
            stroke="var(--color-accent)"
            fill="var(--color-accent)"
            fillOpacity={0.35}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
