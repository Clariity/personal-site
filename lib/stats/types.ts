export type CountryVisits = {
  code: string;
  name: string;
  visitors: number;
};

export type SiteViews = {
  pageviews: number;
  visitors: number;
  countries: CountryVisits[];
};

export type WeeklyDownloads = {
  week: string;
  downloads: number;
};

export type PeriodStat = {
  value: number;
  change: number | null;
};

export type PackageStats = {
  total: number;
  lastDay: PeriodStat;
  lastWeek: PeriodStat;
  lastMonth: PeriodStat;
  lastYear: PeriodStat;
  stars: number;
  weekly: WeeklyDownloads[];
};
