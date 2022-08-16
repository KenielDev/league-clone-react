import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "@chakra-ui/react";
import arrChampions from "../App";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from "@chakra-ui/react";

export function VerticallyCenter() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <Button onClick={onOpen}>Trigger modal</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent className="bg-gray-400 w-1/2 text-white">
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>teste</ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

export function TabsHome() {
    return (
        <div className="w-full px-12 py-4">
            <div className="flex justify-between">
                <Tabs className=" text-white">
                    <TabList className="gap-x-8 font-bold">
                        <Tab className="focus:border-b-2  ">Overview</Tab>
                        <Tab className="focus:border-b-2 ">News</Tab>
                        <Tab className="focus:border-b-2 ">About</Tab>
                    </TabList>
                    <div className="flex items-start justify-end ">
                        <button className="border-2 hover:bg-[#746a57] border-[#a58e5f] py-2 px-4 text-[#a58e5f] bg-[#1D2328] font-semibold ease-in-out duration-300 hover:text-[#1D2328]">
                            Free Champion Rotation
                        </button>
                    </div>
                    <div>
                        <VerticallyCenter />
                    </div>

                    <TabPanels>
                        <TabPanel>
                            <div className="w-1/3 flex mt-[150px] items-center">
                                <div>
                                    <div className="text-4xl font-bold">
                                        UNIVERSE: PANTH!
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

            <div className="w-full h-full mt-20 grid grid-cols-12">
                <div className="flex h-full col-span-3 w-[85%] cursor-pointer hover:scale-110 ease-in-out duration-300 flex-col border-2 rounded">
                    <div>
                        <img
                            src="./src/assets/img/home/artigos/artigo-1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="text-yellow-400 font-semibold text-center bg-gray-500">
                        CBLOL Academy 2022 - 2ª Etapa
                    </div>
                </div>
                <div className="flex h-full col-span-3 w-[85%] cursor-pointer hover:scale-110 ease-in-out duration-300 flex-col border-2 rounded">
                    <div>
                        <img
                            src="./src/assets/img/home/artigos/artigo-2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="text-yellow-400 font-semibold text-center bg-gray-500">
                        CBLOL Academy 2022 - 2ª Etapa
                    </div>
                </div>
                <div className="flex h-full col-span-2 w-[85%] cursor-pointer hover:scale-110 ease-in-out duration-300 flex-col border-2 rounded">
                    <div>
                        <img src="" alt="champ" />
                    </div>
                    <div className="text-yellow-400 font-semibold text-center bg-gray-500">
                        CBLOL Academy 2022 - 2ª Etapa
                    </div>
                </div>
                <div className="flex col-span-2  w-[85%] flex-col border-2 rounded">
                    <div>image</div>
                    <div>text</div>
                </div>
                <div className="flex col-span-2 w-[85%] flex-col border-2 rounded">
                    <div>image</div>
                    <div>text</div>
                </div>
            </div>
        </div>
    );
}
