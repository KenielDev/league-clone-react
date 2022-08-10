import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export function TabsHome() {
    return (
        <div className="grid grid-cols-2 w-full px-12 py-4">
            <div>
                <Tabs className=" text-white">
                    <TabList className="gap-x-8 font-bold">
                        <Tab className="focus:border-b-2 ">Overview</Tab>
                        <Tab className="focus:border-b-2 ">News</Tab>
                        <Tab className="focus:border-b-2 ">About</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <div className="w-1/2 flex mt-[200px] items-center">
                                <div>
                                    <div className="text-4xl font-bold">
                                        UNIVERSE: ODISSEY
                                    </div>
                                    <div className="text-xl py-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ad suscipit omnis id
                                        enim, corrupti accusamus consectetur
                                        quidem dolorem et dignissimos amet! Iste
                                        pariatur ratione aliquam doloribus?
                                        Repudiandae, pariatur molestiae? Illo.
                                    </div>
                                    <button className="border-2 hover:bg-[#746a57] border-[#a58e5f] py-2 px-4 text-[#a58e5f] bg-[#1D2328] font-semibold ease-in-out duration-300 hover:text-[#1D2328]">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
            <div className="flex items-start justify-end ">
                <button className="border-2 hover:bg-[#746a57] border-[#a58e5f] py-2 px-4 text-[#a58e5f] bg-[#1D2328] font-semibold ease-in-out duration-300 hover:text-[#1D2328]">
                    Free Champion Rotation
                </button>
            </div>
        </div>
    );
}
