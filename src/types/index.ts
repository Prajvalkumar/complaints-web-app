export interface DashboardMetric {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export interface TableRow {
  name: string;
  progress: number;
  quantity: number;
  date: string;
}

export interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}