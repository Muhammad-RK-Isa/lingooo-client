// ? American flags
import us from '../../assets/Images/flags/us.svg';
import br from '../../assets/Images/flags/br.svg';
import ca from '../../assets/Images/flags/ca.svg';
import mx from '../../assets/Images/flags/mx.svg';

// ? Asian flags
import hk from '../../assets/Images/flags/hk.svg';
import id from '../../assets/Images/flags/id.svg';
import sg from '../../assets/Images/flags/sg.svg';
import ir from '../../assets/Images/flags/ir.svg';
import ph from '../../assets/Images/flags/ph.svg';

// ? European flags
import uk from '../../assets/Images/flags/gb.svg';
import de from '../../assets/Images/flags/de.svg';
import ch from '../../assets/Images/flags/ch.svg';
import pt from '../../assets/Images/flags/pt.svg';

// ? African flags
import no from '../../assets/Images/flags/no.svg';
import at from '../../assets/Images/flags/at.svg';
import be from '../../assets/Images/flags/be.svg';
import dk from '../../assets/Images/flags/dk.svg';
import fi from '../../assets/Images/flags/fi.svg';

// ? Australian flags
import au from '../../assets/Images/flags/au.svg';
import pr from '../../assets/Images/flags/pr.svg';


const usCountries = [
    {
        flag: us,
        name: 'United States'

    },
    {
        flag: br,
        name: 'Brazil'
    },
    {
        flag: ca,
        name: 'Canada'
    },
    {
        flag: mx,
        name: 'Mexico'
    }
];

const asianCountries = [
    {
        flag: id,
        name: 'Indonesia'
    },
    {
        flag: hk,
        name: 'Hong Kong'
    },
    {
        flag: sg,
        name: 'Singapore'
    },
    {
        flag: ir,
        name: 'Iran'
    },
    {
        flag: ph,
        name: 'Philippines'
    }
];

const europeanCountries = [
    {
        flag: uk,
        name: 'United Kingdom'
    },
    {
        flag: de,
        name: 'Denmark'
    },
    {
        flag: ch,
        name: 'Suisse'
    },
    {
        flag: pt,
        name: 'Portugal'
    }
];

const africanCountries = [
    {
        flag: no,
        name: 'Norge'
    },
    {
        flag: at,
        name: 'Österreich'
    },
    {
        flag: be,
        name: 'België'
    },
    {
        flag: dk,
        name: 'Denmark'
    },
    {
        flag: fi,
        name: 'Suomi'
    }
];

const australianCountries = [
    {
        flag: au,
        name: 'Australia'
    },
    {
        flag: pr,
        name: 'Australia'
    }
];


const Communities = () => {
    return (
        <div className='max-w-screen-2xl mx-2 lg:mx-auto'>
            <div className="mb-10 lg:mb-14 text-center max-w-xs lg:max-w-2xl mx-auto">
                <h2 className='text-xl lg:text-2xl font-semibold mt-20 mb-4 mx-2'>Join our global community</h2>
                <p>We provide the best service that comes with the best results.</p>
                <hr className="w-28 lg:w-32 mx-auto border-primary border-2 mt-6" />
            </div>

            <div className='grid grid-cols-2 gap-8 lg:gap-0 lg:grid-cols-5 max-w-6xl mx-auto mb-20 px-4'>
                <div className='flex flex-col gap-4 text-lg lg:text-xl'>
                    <h3 className='font-semibold text-right lg:text-left'>America</h3>
                    {
                        usCountries.map( ( { flag, name } ) => {
                            return (
                                <div key={ name } className='inline-flex gap-2 items-center justify-end lg:justify-normal'>
                                    <img src={ flag } alt="name" className='h-3 rounded-sm lg:h-5 lg:rounded' />
                                    <span className='text-sm lg:text-base'>{ name }</span>
                                </div>
                            );
                        } )
                    }
                </div>
                <div className='flex flex-col gap-4 text-lg lg:text-xl'>
                    <h3 className='font-semibold'>Asia</h3>
                    {
                        asianCountries.map( ( { flag, name } ) => {
                            return (
                                <div key={ name } className='inline-flex gap-2 items-center'>
                                    <img src={ flag } alt="name" className='h-3 rounded-sm lg:h-5 lg:rounded' />
                                    <span className='text-sm lg:text-base'>{ name }</span>
                                </div>
                            );
                        } )
                    }
                </div>
                <div className='flex flex-col gap-4 text-lg lg:text-xl'>
                    <h3 className='font-semibold text-right lg:text-left'>European</h3>
                    {
                        europeanCountries.map( ( { flag, name } ) => {
                            return (
                                <div key={ name } className='inline-flex gap-2 items-center justify-end lg:justify-normal'>
                                    <img src={ flag } alt="name" className='h-3 rounded-sm lg:h-5 lg:rounded' />
                                    <span className='text-sm lg:text-base'>{ name }</span>
                                </div>
                            );
                        } )
                    }
                </div>
                <div className='flex flex-col gap-4 text-lg lg:text-xl'>
                    <h3 className='font-semibold'>Africa</h3>
                    {
                        africanCountries.map( ( { flag, name } ) => {
                            return (
                                <div key={ name } className='inline-flex gap-2 items-center'>
                                    <img src={ flag } alt="name" className='h-3 rounded-sm lg:h-5 lg:rounded' />
                                    <span className='text-sm lg:text-base'>{ name }</span>
                                </div>
                            );
                        } )
                    }
                </div>
                <div className='col-span-2 lg:col-span-1 flex flex-col gap-4 text-lg lg:text-xl'>
                    <h3 className='font-semibold text-center lg:text-left'>Austrlia</h3>
                    {
                        australianCountries.map( ( { flag, name }, idx ) => {
                            return (
                                <div key={ idx } className='inline-flex gap-2 items-center justify-center lg:justify-normal'>
                                    <img src={ flag } alt="name" className='h-5 rounded' />
                                    <span className='text-sm lg:text-base'>{ name }</span>
                                </div>
                            );
                        } )
                    }
                </div>
            </div>
        </div>
    );
};

export default Communities;