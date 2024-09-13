import { CoolMode } from "@/components/magicui/cool-mode";

function MagicBtn() {
    return (
        <div>
            <CoolMode options={{ particle: "/koi/sticker2.png" }}>
                <button
                    className="relative bg-black text-white py-2 px-6 isolation-auto z-10
        before:absolute before:w-full before:transition-all before:duration-300 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-200 hover:text-black"
                >
                    Contactá con nosotros
                </button>
            </CoolMode>
        </div>
    );
}

export default MagicBtn;
