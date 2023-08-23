import ColdFoods from '../foods/coldFood/ColdFoods';
import Dishs from '../foods/dish/Dishs';
import Drinks from '../foods/drink/Drinks';
import Fishs from '../foods/fish/Fishs';
import Grills from '../foods/grill/Grills';
import HotFoods from '../foods/hotFood/HotFoods';
import MeatFoods from '../foods/meatFood/MeatFoods';
import Soups from '../foods/soup/Soups';


export default function Menu() {
    return (
        <div className="w-full bg-[#403C3B]">
        
            <div>
                <div
                    className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
                >
                    <div className="h-9 w-1 bg-green-400"></div>
                    <h1 className="text-white font-bold">ХОЛОДНЫЕ ЗАКУСКИ</h1>
                </div>
                <ColdFoods />
            </div>
            <div>
                <div
                    className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
                >
                    <div className="h-9 w-1 bg-green-400"></div>
                    <h1 className="text-white font-bold">ГОРЯЧИЕ ЗАКУСКИ</h1>
                </div>
                <HotFoods />
            </div>
            <div>
                <div
                    className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
                >
                    <div className="h-9 w-1 bg-green-400"></div>
                    <h1 className="text-white font-bold">МЯСНЫЕ БЛЮДА</h1>
                </div>
                <MeatFoods />
            </div>
            <div>
                <div
                    className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
                >
                    <div className="h-9 w-1 bg-green-400"></div>
                    <h1 className="text-white font-bold">РЫБНЫЕ БЛЮДА</h1>
                </div>
                <Fishs />
            </div>
            <div>
                <div
                    className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
                >
                    <div className="h-9 w-1 bg-green-400"></div>
                    <h1 className="text-white font-bold">СУПЫ</h1>
                </div>
                <Soups />
            </div>
            <div>
                <div
                    className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
                >
                    <div className="h-9 w-1 bg-green-400"></div>
                    <h1 className="text-white font-bold">ГРИЛЬ МЕНЮ</h1>
                </div>
                <Grills />
            </div>
            <div>
                <div
                    className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
                >
                    <div className="h-9 w-1 bg-green-400"></div>
                    <h1 className="text-white font-bold">ФИРМЕННЫЕ БЛЮДА</h1>
                </div>
                <Dishs />
            </div>
            <div>
                <div
                    className='flex items-center pl-8 py-8 bg-[#403C3B] text-4xl gap-5'
                >
                    <div className="h-9 w-1 bg-green-400"></div>
                    <h1 className="text-white font-bold">НАПИТКИ</h1>
                </div>
                <Drinks />
            </div>
        </div>
    );
}
