import {
    Card,
    CardHeader,
    CardBody,
    Tooltip
} from "@material-tailwind/react";
import { BanknotesIcon } from "@heroicons/react/24/solid";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClassCardMin = ( { data } ) => {
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

    const [ ref, inView ] = useInView( {
        triggerOnce: true,
        threshold: 0.2,
    } );
    // const { _id, title, image, price, language } = data;

    return (
        <motion.div ref={ ref } initial="hidden" animate={ inView ? 'visible' : 'hidden' } variants={ variants }
        >
            <Card className="w-full max-w-[26rem] shadow-lg rounded-lg overflow-hidden dark:bg-opacity-90 dark:text-black">
                <CardHeader floated={ false } color="blue-gray" className="m-2 rounded-lg z-10">
                    <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="ui/ux review check"
                    />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>
                <CardBody className="m-0 p-2 z-10">
                    <p>This is the title</p>
                    <div className="group mt-2 inline-flex items-center gap-2">
                        <Tooltip content="Class Fee $129">
                            <span className="text-sm cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-400 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <BanknotesIcon className="h-5 w-5" />
                            </span>
                        </Tooltip>
                        <Tooltip content="20+ Students Enrolled">
                            <div className="text-sm cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-400 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    +20 Enrolled
                                </span>
                            </div>
                        </Tooltip>
                    </div>
                </CardBody>
            </Card>
        </motion.div>
    );
};

export default ClassCardMin;