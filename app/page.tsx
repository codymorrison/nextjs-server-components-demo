import { getAuth0Client } from "./lib/auth0Sdk";

export default async function Home() {
  const auth0 = getAuth0Client();

  const activeUsersCount = await auth0.stats.getActiveUsersCount();
  const dailyStats = await auth0.stats.getDaily({
    from: "20230113",
    to: "20230113",
  });

  return (
    <main>
      <div className="py-2">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <h1 className="text-xl text-neutral-600">Overview</h1>
        </div>
        <section>
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
            <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
              <div className="p-3">
                <div className="flex items-center mb-3">
                  <h1 className="text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                    Active Users
                  </h1>
                </div>
                <p className="mx-auto text-6xl leading-relaxed text-gray-500">
                  {activeUsersCount}
                </p>
              </div>
              <div className="p-3">
                <div className="flex items-center mb-3">
                  <h1 className="text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                    Leaked Passwords
                  </h1>
                </div>
                <p className="mx-auto text-6xl leading-relaxed text-gray-500">
                  {dailyStats[0]?.leaked_passwords}
                </p>
              </div>
              <div className="p-3">
                <div className="flex items-center mb-3">
                  <h1 className="text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                    Daily Logins
                  </h1>
                </div>
                <p className="mx-auto text-6xl leading-relaxed text-gray-500">
                  {dailyStats[0]?.logins}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
