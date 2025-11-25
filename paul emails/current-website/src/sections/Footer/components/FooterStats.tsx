import { StatCard } from "@/sections/Footer/components/StatCard";

export const FooterStats = () => {
  return (
    <div className="caret-transparent col-end-10 col-start-2 row-end-10 row-start-4 break-words z-[3] md:col-end-[26] md:col-start-5 md:row-end-[17] md:row-start-6">
      <div className="relative caret-transparent clear-both flex flex-col h-full justify-start break-words w-full">
        <div className="caret-transparent break-words">
          <div className="caret-transparent break-words">
            <div className="caret-transparent break-words">
              <div className="relative box-border caret-transparent max-w-full break-words w-full mx-auto">
                <div className="relative box-border caret-transparent break-words w-full z-[1]">
                  <div className="relative box-border caret-transparent flex justify-center min-h-full break-words w-full">
                    <div className="absolute box-border caret-transparent break-words overflow-hidden inset-0">
                      <div className="absolute bg-no-repeat bg-cover box-border caret-transparent break-words z-[1] bg-center inset-0"></div>
                      <div className="absolute bg-transparent box-border caret-transparent break-words z-[2] inset-0"></div>
                    </div>
                    <div className="box-border caret-transparent break-words w-full z-[3]">
                      <div className="relative box-border caret-transparent max-w-[1300px] break-words z-[1] mx-auto">
                        <div className="box-border caret-transparent flex flex-wrap justify-start max-w-[1310px] break-words mt-[-5px] mr-[-5px] mb-[-5px] ml-[-5px] overflow-hidden md:max-w-[1330px] md:mt-[-15px] md:mr-[-15px] md:mb-[-15px] md:ml-[-15px]">
                          <StatCard
                            iconUrl="https://c.animaapp.com/mi3h22qzN7aHGv/assets/icon-15.svg"
                            statNumber="0"
                            statSuffix="+"
                            description="Followers on LinkedIn"
                          />
                          <StatCard
                            iconUrl="https://c.animaapp.com/mi3h22qzN7aHGv/assets/icon-16.svg"
                            statNumber="0"
                            statSuffix="+"
                            description="People trained"
                          />
                          <StatCard
                            iconUrl="https://c.animaapp.com/mi3h22qzN7aHGv/assets/icon-17.svg"
                            statNumber="0"
                            statSuffix="%+"
                            description="Recommend our Courses"
                          />
                          <StatCard
                            iconUrl="https://c.animaapp.com/mi3h22qzN7aHGv/assets/icon-18.svg"
                            statNumber="0"
                            description="Top 10 Global Finance Podcasts"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
