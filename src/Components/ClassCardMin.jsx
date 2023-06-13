import {
    Card,
    CardHeader,
    CardBody,
    Tooltip
} from "@material-tailwind/react";
import { BanknotesIcon } from "@heroicons/react/24/solid";

import { motion } from 'framer-motion';

const ClassCardMin = ( { data } ) => {
    const { title, image, enrolled, price } = data;

    const variants = {
        hidden: {
            y: '100%',
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 10,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={ variants }
        >
            <Card className="w-full max-w-[26rem] shadow-lg rounded-lg overflow-hidden dark:bg-opacity-90 dark:text-black">
                <CardHeader floated={ false } color="blue-gray" className="m-2 rounded-lg z-10">
                    <img
                        src={ image }
                        alt="class-thumbnail"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>
                <CardBody className="m-0 p-2 z-10">
                    <p>{ title }</p>
                    <div className="group mt-2 inline-flex items-center gap-2">
                        <Tooltip content={ `Class Fee $${ price }` }>
                            <span className="text-sm cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-400 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <BanknotesIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <div className="text-sm cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-400 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                { enrolled } Enrolled
                            </span>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </motion.div>
    );
};

export default ClassCardMin;