import { getSiteViews } from "@/lib/stats/site-views/get-site-views";

import { CountryChip } from "./CountryChip";
import { Stat } from "./Stat";

/** Lifetime Vercel page views, unique visitors, and visitors by country. */
export async function SiteViews() {
  const views = await getSiteViews();

  return (
    <section>
      <h3 className="text-xl lg:text-2xl font-bold mb-3">This site</h3>

      {views ? (
        <>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Stat label="Page views" value={views.pageviews} />
            <Stat label="Unique visitors" value={views.visitors} />
          </div>

          {views.countries.length > 0 ? (
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Visitors by country · last 31 days
              </p>

              <div className="flex flex-wrap gap-2">
                {views.countries.map((country) => (
                  <CountryChip
                    key={country.code}
                    name={country.name}
                    visitors={country.visitors}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <p className="text-sm text-muted-foreground">
          Site views will appear here once Vercel Analytics credentials are configured.
        </p>
      )}
    </section>
  );
}
