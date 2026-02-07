import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts';

const salesGrowthData = [
  { year: 'Year 1', growth: 12 },
  { year: 'Year 2', growth: 18 },
  { year: 'Year 3', growth: 25 },
  { year: 'Year 4', growth: 34 },
  { year: 'Year 5', growth: 46 },
];

const expertiseBreakdown = [
  { name: 'Sales Strategy', value: 30 },
  { name: 'Supply Chain', value: 25 },
  { name: 'Team Leadership', value: 25 },
  { name: 'Inventory Mgmt', value: 20 },
];

const COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--primary) / 0.75)',
  'hsl(var(--primary) / 0.5)',
  'hsl(var(--primary) / 0.3)',
];

const CustomTooltipStyle = {
  backgroundColor: 'hsl(var(--background))',
  border: '1px solid hsl(var(--border))',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  color: 'hsl(var(--foreground))',
};

export function PerformanceCharts() {
  const barRef = useRef(null);
  const pieRef = useRef(null);
  const barInView = useInView(barRef, { once: true, margin: '-80px' });
  const pieInView = useInView(pieRef, { once: true, margin: '-80px' });

  return (
    <section className="py-20 md:py-28 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
            Performance Overview
          </h2>
          <p className="text-center text-muted-foreground font-light mb-14 max-w-xl mx-auto">
            A visual snapshot of key growth metrics and focus areas.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sales Growth Bar Chart */}
          <motion.div
            ref={barRef}
            initial={{ opacity: 0, y: 30 }}
            animate={barInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-xl bg-background border border-border shadow-sm"
          >
            <h3 className="text-lg font-semibold text-foreground mb-1">Regional Sales Growth</h3>
            <p className="text-xs text-muted-foreground mb-6">Cumulative % increase over 5 years</p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={salesGrowthData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="year"
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                  tickLine={false}
                  unit="%"
                />
                <Tooltip
                  contentStyle={CustomTooltipStyle}
                  formatter={(value: number) => [`${value}%`, 'Growth']}
                  cursor={{ fill: 'hsl(var(--primary) / 0.05)' }}
                />
                <Bar
                  dataKey="growth"
                  fill="hsl(var(--primary))"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={48}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Expertise Pie Chart */}
          <motion.div
            ref={pieRef}
            initial={{ opacity: 0, y: 30 }}
            animate={pieInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-6 rounded-xl bg-background border border-border shadow-sm"
          >
            <h3 className="text-lg font-semibold text-foreground mb-1">Focus Area Breakdown</h3>
            <p className="text-xs text-muted-foreground mb-6">Time & effort allocation across domains</p>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={expertiseBreakdown}
                  cx="50%"
                  cy="45%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {expertiseBreakdown.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={CustomTooltipStyle}
                  formatter={(value: number) => [`${value}%`, 'Allocation']}
                />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ fontSize: '12px', color: 'hsl(var(--muted-foreground))' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
