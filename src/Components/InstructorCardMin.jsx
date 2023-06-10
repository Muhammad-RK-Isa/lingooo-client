import {
    Card,
    CardBody,
} from "@material-tailwind/react";

const InstructorCardMin = ( { data } ) => {
    return (
            <Card className="w-full max-w-[26rem] shadow-lg drop-shadow-sm hover:shadow-primary hover:shadow hover:border-secondary hover:border duration-300 rounded-lg overflow-hidden dark:bg-opacity-90 dark:text-black">
                <img
                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="instructor"
                    className="rounded-full w-14 h-14 lg:w-20 lg:h-20 mx-auto mt-2 lg:mt-4"
                />
                <CardBody className="m-0 p-4 z-10 -mt-2 text-center">
                    <p className="lg:text-lg font-semibold">Dr. Mathew</p>
                    <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        2000+ students
                    </p>
                </CardBody>
            </Card>
        // <div className="hover:bg-gradient-to-b from-primary to-secondary hover:shadow-none rounded-[0.6rem] overflow-hidden p-px">
        // </div>
    );
};

export default InstructorCardMin;